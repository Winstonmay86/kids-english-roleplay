/* ===================================================================
   《森林小镇大冒险》第二阶段预览播放器（story.html）
   流程：进集 → 自动读中文旁白 →（可随时跳过）→ 读英文对话（气泡+童声）
   舞台：正方形自适应，完整展示整张场景图；旁白/对白文字在图片外的上下条
   =================================================================== */

const PROGRESS_KEY = 'forest_story_progress_v1';

const CHAR_V2 = {
  Lily:    'assets/chars-v2/agnes-lily.png',
  Tom:     'assets/chars-v2/agnes-tom.png',
  Teacher: 'assets/chars-v2/agnes-teacher.png',
  '熊妈妈':  'assets/chars-v2/agnes-mum-bear.png',
  '熊爸爸':  'assets/chars-v2/agnes-dad-bear.png',
  '熊奶奶':  'assets/chars-v2/agnes-grandma-bear.png',
  '兔妈妈':  'assets/chars-v2/agnes-mum-rabbit.png',
  '兔爸爸':  'assets/chars-v2/agnes-dad-rabbit.png',
  '兔奶奶':  'assets/chars-v2/agnes-grandma-rabbit.png',
  '乐美':     'assets/chars-v2/agnes-leme.png',
  '爱心萌可': 'assets/chars-v2/agnes-heartsping.png',
  '诗雅':     'assets/chars-v2/agnes-shiya.png'
};

/* ---------- 语音（全容错：手机微信浏览器可能没有 speechSynthesis 或方法抛异常，
   直接调用会中断整个点击处理函数，表现就是"按钮点了没反应"） ---------- */
let enVoice = null, zhVoice = null;
function ttsCancel() {
  try { if (window.speechSynthesis && typeof window.speechSynthesis.cancel === 'function') window.speechSynthesis.cancel(); } catch (e) {}
}
function ttsReady() {
  try { return !!(window.speechSynthesis && typeof window.speechSynthesis.speak === 'function'); } catch (e) { return false; }
}
function loadVoices() {
  try {
    const vs = speechSynthesis.getVoices();
    enVoice = vs.find(v => /en[-_]?US/i.test(v.lang)) ||
              vs.find(v => v.lang && v.lang.toLowerCase().startsWith('en')) ||
              vs[0] || null;
    zhVoice = vs.find(v => /zh|cmn|chinese/i.test(v.lang + v.name)) || null;
  } catch (e) {}
}
if ('speechSynthesis' in window) {
  try { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {}
}
function speakEn(text) {
  try {
    if (!ttsReady()) return;
    ttsCancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9; if (enVoice) u.voice = enVoice;
    speechSynthesis.speak(u);
  } catch (e) {}
}
// 朗读中文，结束回调（带兜底计时，防止 onend 不触发；任何异常都必须放行 cb）
let narrToken = 0;
function speakZh(text, cb) {
  let done = false;
  const fin = () => { if (done) return; done = true; cb && cb(); };
  try {
    if (!ttsReady()) { fin(); return; }
    ttsCancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN'; u.rate = 0.95; if (zhVoice) u.voice = zhVoice;
    u.onend = fin;
    speechSynthesis.speak(u);
    setTimeout(fin, text.length * 240 + 2600);
  } catch (e) { fin(); }
}

/* ---------- 进度 ---------- */
function getProgress() { try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch (e) { return {}; } }
function saveProgress(p) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {} }

/* ---------- 锚点：双角色左/右，多角色平分 ---------- */
function anchorsFor(ep) {
  const sp = [...new Set(ep.lines.map(l => l.who))];
  if (sp.length === 1) return { [sp[0]]: { x: 50, y: 58 } };
  if (sp.length === 2) return { [sp[0]]: { x: 23, y: 60 }, [sp[1]]: { x: 77, y: 60 } };
  const slots = [{ x: 20, y: 58 }, { x: 50, y: 58 }, { x: 80, y: 58 }];
  const m = {}; sp.forEach((s, i) => m[s] = slots[i]); return m;
}

/* ---------- 状态 ---------- */
let curEp = null, anchors = {}, state = { i: 0, playing: false, timer: null, phase: 'idle', narrAudio: null, mode: 'dialogue', myRole: null, otherRole: null, myLineCount: 0, correctCount: 0, rpIndex: 0, revealed: false, saidThisLine: false, curAudio: null };
let autoplay = true;

/* ---------- 首页 ---------- */
function buildHome() {
  const prog = getProgress();
  const home = document.getElementById('home');
  let html = '<h1>🌳 森林小镇大冒险</h1><div class="sub">和森林小镇的小伙伴们一起，冒险一学年</div>';
  STORY.chapters.forEach(ch => {
    const doneCount = ch.episodes.filter(ep => prog[ep.id]).length;
    html += `<div class="chapter" style="border-left:6px solid ${ch.color}">
      <div class="ch-head">
        <span class="ch-ico">${ch.icon}</span>
        <span class="ch-title">${ch.title}</span>
        <span class="ch-count">${doneCount}/${ch.episodes.length} 集 ✓</span>
      </div>
      <div class="eps">`;
    ch.episodes.forEach(ep => {
      const done = prog[ep.id] ? 'done' : '';
      const star = prog[ep.id] ? '⭐' : '';
      html += `<div class="ep-card ${done}" data-ep="${ep.id}">
        <div class="ep-star">${star}</div>
        <div class="ep-ico">${ep.icon}</div>
        <div class="ep-name">${ep.title}</div>
      </div>`;
    });
    html += '</div></div>';
  });
  home.innerHTML = html;
  home.querySelectorAll('.ep-card').forEach(c =>
    c.addEventListener('click', () => openEpisode(c.dataset.ep)));
}

/* ---------- 正方形舞台自适应 ---------- */
function fitStage() {
  const wrap = document.getElementById('stageWrap');
  const stage = document.getElementById('stage');
  const w = wrap.clientWidth - 12, h = wrap.clientHeight - 6;
  const s = Math.max(120, Math.min(w, h));
  stage.style.width = s + 'px';
  stage.style.height = s + 'px';
}
window.addEventListener('resize', fitStage);
/* 竖排布局下右栏内容增减会改变舞台可用高度（如"轮到我"卡片出现），用 ResizeObserver 自动重算正方形舞台 */
if (window.ResizeObserver) {
  const _stageRO = new ResizeObserver(() => fitStage());
  _stageRO.observe(document.getElementById('stageWrap'));
}

/* ---------- 显示对话气泡：锚点定位 + 防溢出钳制 ----------
   气泡以锚点为中心（translate(-50%,-100%)），但宽句在窄屏上会超出舞台边界，
   写入内容后按实际宽度把气泡往内推，保证完整可见（留 6px 边距）。 */
function showBubble(a, line, delay) {
  const bubble = document.getElementById('bubble');
  bubble.classList.remove('show');
  setTimeout(() => {
    bubble.style.left = a.x + '%';
    bubble.style.top = a.y + '%';
    document.getElementById('bAva').src = CHAR_V2[line.who] || '';
    document.getElementById('bWho').textContent = line.who;
    document.getElementById('bEn').textContent = line.en;
    document.getElementById('bZh').textContent = line.zh;
    const stage = document.getElementById('stage');
    const sw = stage.clientWidth || 1;
    const half = bubble.offsetWidth / 2 + 6;
    let cx = sw * a.x / 100;
    if (cx - half < 0) cx = half;
    if (cx + half > sw) cx = sw - half;
    bubble.style.left = (cx / sw * 100).toFixed(2) + '%';
    bubble.classList.add('show');
  }, delay);
}

/* ---------- 打开一集 ---------- */
function openEpisode(id) {
  curEp = STORY_EPISODES.find(e => e.id === id);
  if (!curEp) return;
  anchors = anchorsFor(curEp);
  document.getElementById('epLabel').textContent = `${curEp.icon} ${curEp.title}`;
  document.getElementById('narrText').textContent = curEp.narration;

  const sceneImg = document.getElementById('sceneImg');
  sceneImg.src = `assets/scenes-v2/${curEp.id}.png?v=20261016e`;
  sceneImg.onerror = () => { sceneImg.style.visibility = 'hidden'; };
  sceneImg.style.visibility = '';

  document.getElementById('progress').innerHTML =
    curEp.lines.map(() => '<span class="dot"></span>').join('');

  document.getElementById('home').style.display = 'none';
  const player = document.getElementById('player');
  player.classList.add('on');
  // 在点击手势内立即启动旁白，确保 file:// 下音频不被自动播放策略拦截
  startNarration();
  requestAnimationFrame(fitStage);
}

/* ---------- 阶段一：朗读旁白（优先女声 storytelling mp3，缺失回退浏览器嗓） ---------- */
function startNarration() {
  state.phase = 'narration';
  state.playing = false;
  document.getElementById('player').classList.add('narrating');
  document.getElementById('skipBtn').style.display = '';
  document.getElementById('bubble').classList.remove('show');
  clearTimeout(state.timer);
  const myToken = ++narrToken;
  let advanced = false;
  const advance = () => {
    if (advanced) return; advanced = true;
    if (myToken === narrToken && state.phase === 'narration') startDialogue();
  };
  const audio = new Audio(`audio/narr_${curEp.id}.mp3`);
  state.narrAudio = audio;
  const fallback = () => {
    if (state.narrAudio === audio) state.narrAudio = null;
    speakZh(curEp.narration, advance);   // 文件缺失/播放失败 → 浏览器嗓兜底
  };
  audio.onended = advance;
  audio.onerror = fallback;
  const p = audio.play();
  if (p && p.catch) p.catch(fallback);
  setTimeout(advance, curEp.narration.length * 320 + 6000);  // 兜底，防 onend 不触发
}

/* ---------- 跳过旁白 → 进入对话 ---------- */
function skipNarration() {
  narrToken++;               // 使当前旁白回调失效
  if (state.narrAudio) { state.narrAudio.pause(); state.narrAudio = null; }
  ttsCancel();
  clearTimeout(state.timer);
  startDialogue();
}

/* ---------- 阶段二：读对话 ---------- */
function startDialogue() {
  state.phase = 'dialogue';
  document.getElementById('player').classList.remove('narrating');
  document.getElementById('skipBtn').style.display = 'none';   // 旁白已读完，隐藏跳过按钮（避免误点从头重播）
  state.i = 0; state.playing = true;
  document.getElementById('playBtn').textContent = '⏸';
  startLine(0);
}

/* ---------- 显示某一句对话 ---------- */
function startLine(i) {
  clearTimeout(state.timer);
  if (i >= curEp.lines.length) { showCast(); return; }
  state.i = i;
  const line = curEp.lines[i];

  document.querySelectorAll('#progress .dot').forEach((d, idx) =>
    d.classList.toggle('on', idx <= i));

  const a = anchors[line.who] || { x: 50, y: 60 };
  showBubble(a, line, 160);

  document.getElementById('lpEn').textContent = line.en;
  document.getElementById('lpZh').textContent = line.zh;

  playAudio(i);
}

/* ---------- 音频：复用已录 mp3，失败回退系统 TTS ---------- */
function playAudio(i) {
  const line = curEp.lines[i];
  const key = `${curEp.id}_l${i}`;
  let advanced = false;
  const advance = () => {
    if (advanced) return; advanced = true;
    if (state.playing && autoplay)
      state.timer = setTimeout(() => startLine(i + 1), 650);
  };
  const audio = new Audio(`audio/${key}.mp3`);
  state.curAudio = audio;
  audio.onended = advance;
  audio.onerror = () => { speakEn(line.en); advance(); };
  const p = audio.play();
  if (p && p.catch) p.catch(() => { speakEn(line.en); advance(); });
  setTimeout(advance, 6000);
}

/* ---------- 完成（按说对句数结算星星） ---------- */
function finishEpisode() {
  state.playing = false;
  state.mode = 'done';
  clearTimeout(state.timer);
  document.getElementById('myCard').classList.remove('on');
  document.getElementById('castOv').classList.remove('on');
  document.getElementById('player').classList.remove('rp');
  ttsCancel();
  const total = state.myLineCount || curEp.lines.length;
  const rate = total ? state.correctCount / total : 1;
  const stars = rate >= 0.95 ? 3 : rate >= 0.7 ? 2 : 1;
  const prog = getProgress();
  prog[curEp.id] = Math.max(prog[curEp.id] || 0, stars);
  saveProgress(prog);
  document.getElementById('doneStars').textContent =
    `你说对了 ${state.correctCount}/${total} 句，获得 ${'⭐'.repeat(stars)}（${stars} 颗）`;
  document.getElementById('doneOv').classList.add('on');
}

/* =========================================================
   角色扮演（第二阶段新增）：选角色 → 我说/对方说 → 看答案/重听 → 星星
   ========================================================= */
function rpExtractRoles(ep) {
  const m = {};
  ep.lines.forEach(l => { m[l.who] = (m[l.who] || 0) + 1; });
  return Object.keys(m).map(name => ({ name, count: m[name] }));
}

/* 漫画对话看完 → 选角色 */
function showCast() {
  state.mode = 'cast';
  state.playing = false;
  clearTimeout(state.timer);
  ttsCancel();
  document.getElementById('bubble').classList.remove('show');
  document.getElementById('myCard').classList.remove('on');
  document.getElementById('player').classList.add('rp');
  const roles = rpExtractRoles(curEp);
  const list = document.getElementById('castList');
  list.innerHTML = '';
  roles.forEach(r => {
    const btn = document.createElement('div');
    btn.className = 'cast-card-v2';
    btn.innerHTML = `<img src="${CHAR_V2[r.name] || ''}" alt="${r.name}"><div class="cn">${r.name}</div><div class="cc">要说 ${r.count} 句</div>`;
    btn.addEventListener('click', () => rpPickRole(r.name));
    list.appendChild(btn);
  });
  document.getElementById('castOv').classList.add('on');
}

function rpPickRole(name) {
  state.myRole = name;
  const others = rpExtractRoles(curEp).filter(r => r.name !== name).sort((a, b) => b.count - a.count);
  state.otherRole = others.length ? others[0].name : name;
  state.myLineCount = curEp.lines.filter(l => l.who === name).length;
  state.correctCount = 0;
  state.rpIndex = 0;
  state.revealed = false;
  document.getElementById('castOv').classList.remove('on');
  rpRenderLine();
}

/* 播放一句 mp3（失败回退系统嗓） */
function playLine(key, en, cb, slow) {
  const audio = new Audio(`audio/${key}${slow ? '_slow' : ''}.mp3`);
  state.curAudio = audio;   // 登记当前音频，连点重听时才能先停旧的，避免声音叠加
  let done = false;
  const fin = () => { if (done) return; done = true; cb && cb(); };
  audio.onended = fin;
  audio.onerror = () => { speakEn(en); fin(); };
  const p = audio.play();
  if (p && p.catch) p.catch(() => { speakEn(en); fin(); });
}

function rpRenderLine() {
  clearTimeout(state.timer);
  const lines = curEp.lines;
  if (state.rpIndex >= lines.length) { finishEpisode(); return; }
  state.mode = 'roleplay';
  document.getElementById('player').classList.add('rp');
  const line = lines[state.rpIndex];
  document.querySelectorAll('#progress .dot').forEach((d, idx) =>
    d.classList.toggle('on', idx <= state.rpIndex));
  if (line.who === state.myRole) rpMyTurn(line);
  else rpOtherTurn(line);
}

function rpMyTurn(line) {
  state.revealed = false;
  state.saidThisLine = false;
  document.getElementById('bubble').classList.remove('show');
  document.getElementById('myImg').src = CHAR_V2[line.who] || '';
  document.getElementById('myZh').textContent = line.zh;
  document.getElementById('myHint').textContent = '先自己说一遍 👄';
  document.getElementById('myEn').textContent = line.en;
  document.getElementById('myAnswer').classList.remove('revealed');
  document.getElementById('btnReveal').style.display = '';
  document.getElementById('mcFlag').textContent = '轮到你说了！';
  document.getElementById('myCard').classList.add('on');
  document.getElementById('lpEn').textContent = '❓';
  document.getElementById('lpZh').textContent = line.zh;
}

function rpOtherTurn(line) {
  document.getElementById('myCard').classList.remove('on');
  const a = anchors[line.who] || { x: 50, y: 60 };
  showBubble(a, line, 140);
  document.getElementById('lpEn').textContent = line.en;
  document.getElementById('lpZh').textContent = line.zh;
  playLine(`${curEp.id}_l${state.rpIndex}`, line.en, () => {
    state.timer = setTimeout(rpAdvance, 700);
  });
}

function rpReveal() {
  if (state.revealed) return;
  state.revealed = true;
  const line = curEp.lines[state.rpIndex];
  document.getElementById('myAnswer').classList.add('revealed');
  document.getElementById('myHint').textContent = '跟着读一遍！👂';
  document.getElementById('btnReveal').style.display = 'none';
  playLine(`${curEp.id}_l${state.rpIndex}`, line.en);
}

function rpSaid() {
  if (state.saidThisLine) return;   // 这句已记过，防连点重复计数
  state.saidThisLine = true;
  if (!state.revealed) rpReveal();
  state.correctCount++;
  const st = document.createElement('div');
  st.textContent = '⭐';
  st.style.cssText = 'position:absolute;left:45%;top:46%;font-size:34px;z-index:8;pointer-events:none;transition:.9s;';
  document.getElementById('stage').appendChild(st);
  setTimeout(() => { st.style.top = '18%'; st.style.opacity = '0'; }, 30);
  setTimeout(() => st.remove(), 950);
  state.timer = setTimeout(rpAdvance, 550);
}

function rpAgain() {
  const line = curEp.lines[state.rpIndex];
  if (line.who !== state.myRole) { playLine(`${curEp.id}_l${state.rpIndex}`, line.en); return; }
  if (!state.revealed) { rpReveal(); return; }
  playLine(`${curEp.id}_l${state.rpIndex}`, line.en, null, true);
  document.getElementById('myHint').textContent = '跟着慢慢读一遍 👂';
}

function rpAdvance() {
  clearTimeout(state.timer);
  state.rpIndex++;
  rpRenderLine();
}

/* 重听本句（右栏常驻按钮）：先停当前音频再播，避免叠加 */
function replayCurrent() {
  clearTimeout(state.timer);
  if (state.curAudio) { state.curAudio.pause(); state.curAudio = null; }
  ttsCancel();
  if (state.mode === 'roleplay') { rpAgain(); return; }
  if (state.phase === 'narration') { skipNarration(); return; }
  const line = curEp.lines[state.i];
  if (line) playLine(`${curEp.id}_l${state.i}`, line.en);
}

/* ---------- 控件 ---------- */
function togglePlay() {
  if (state.phase === 'narration') { skipNarration(); return; }
  state.playing = !state.playing;
  document.getElementById('playBtn').textContent = state.playing ? '⏸' : '▶';
  if (state.playing) startLine(state.i);
  else { clearTimeout(state.timer); ttsCancel(); }
}
function goPrev() { clearTimeout(state.timer); startLine(Math.max(0, state.i - 1)); }
function goNext() { clearTimeout(state.timer); startLine(state.i + 1); }

/* ---------- 绑定（容错：缺元素或绑定异常只影响单个按钮，不拖垮其余） ---------- */
function bind(id, ev, fn) {
  const el = document.getElementById(id);
  if (!el) { console.warn('[story] 缺少元素 #' + id); return; }
  try { el.addEventListener(ev, fn); } catch (e) { console.warn('[story] 绑定失败 #' + id, e); }
}
bind('backBtn', 'click', () => {
  state.playing = false; state.phase = 'idle'; state.mode = 'dialogue'; clearTimeout(state.timer);
  ttsCancel();
  document.getElementById('player').classList.remove('on', 'narrating', 'rp');
  document.getElementById('doneOv').classList.remove('on');
  document.getElementById('castOv').classList.remove('on');
  document.getElementById('myCard').classList.remove('on');
  document.getElementById('sceneImg').style.visibility = '';
  document.getElementById('home').style.display = '';
  buildHome();
});
bind('skipBtn', 'click', skipNarration);
bind('playBtn', 'click', togglePlay);
bind('prevBtn', 'click', goPrev);
bind('nextBtn', 'click', goNext);
bind('doneHome', 'click', () => {
  document.getElementById('doneOv').classList.remove('on');
  state.playing = false; state.phase = 'idle'; state.mode = 'dialogue'; clearTimeout(state.timer);
  document.getElementById('player').classList.remove('on', 'narrating', 'rp');
  document.getElementById('castOv').classList.remove('on');
  document.getElementById('myCard').classList.remove('on');
  document.getElementById('home').style.display = '';
  buildHome();
});
bind('btnReveal', 'click', rpReveal);
bind('btnSaid', 'click', rpSaid);
bind('btnAgain', 'click', rpAgain);
bind('btnCast', 'click', showCast);
bind('btnReplay', 'click', replayCurrent);
bind('autoChk', 'change', e => autoplay = e.target.checked);

/* ---------- 启动 ---------- */
buildHome();
