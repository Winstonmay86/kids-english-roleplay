/* ===================================================================
   《开口说英语》交互逻辑  v2 — 角色扮演版
   -------------------------------------------------------------------
   核心玩法：
   1. 先看一遍完整的动画对话
   2. 孩子选一个角色来演
   3. 轮到孩子 → 看中文自己说 → 点开对答案
      轮到对方   → APP 自动朗读
   4. 对话走完 → 结算给星星
   =================================================================== */

(function () {
  'use strict';

  const STORE_KEY = 'kids_english_roleplay_v1';

  /* ---------- 状态 ---------- */
  let state = {
    unitIndex: 0,
    lineIndex: 0,
    myRole: null,        // 孩子扮演的角色名
    otherRole: null,     // 对方角色名
    revealed: false,
    correctCount: 0,
    myLineCount: 0,      // 孩子需要说的句子总数
    progress: {}         // { unitId: { done: n, stars: n } }
  };

  let playTimers = [];
  let voices = [];

  const $ = (id) => document.getElementById(id);

  const screens = {
    home:      $('screen-home'),
    dialogue:  $('screen-dialogue'),
    cast:      $('screen-cast'),
    roleplay:  $('screen-roleplay'),
    finish:    $('screen-finish')
  };

  /* =========================================================
     本地存储
     ========================================================= */
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        state.progress = d.progress || {};
      }
    } catch (e) { /* ignore */ }
  }

  function saveProgress() {
    try {
      const totalStars = Object.values(state.progress)
        .reduce((s, u) => s + (u.stars || 0), 0);
      localStorage.setItem(STORE_KEY, JSON.stringify({
        progress: state.progress,
        totalStars: totalStars
      }));
    } catch (e) { /* ignore */ }
  }

  function totalStars() {
    return Object.values(state.progress)
      .reduce((s, u) => s + (u.stars || 0), 0);
  }

  /* =========================================================
     屏幕切换
     ========================================================= */
  function show(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  /* =========================================================
     语音朗读
     ========================================================= */
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = window.speechSynthesis.getVoices();
    updateVoiceTip();
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  /* 检测英文语音包：缺失时在首页显示安装提示（给家长看的，孩子不用管） */
  function updateVoiceTip() {
    const tip = $('voice-tip');
    if (!tip) return;
    if (!('speechSynthesis' in window)) {
      tip.hidden = false;
      tip.querySelector('.vt-text').textContent = '当前浏览器不支持语音朗读，请换用 Chrome 或 Edge 打开本页。';
      return;
    }
    // 语音列表还没加载完时不误报，等 onvoiceschanged 事件到了再判断
    if (voices.length && !pickEnglishVoice()) {
      tip.hidden = false;
    } else {
      tip.hidden = true;
    }
  }
  // 兜底：个别浏览器的 voiceschanged 在我们绑定之前就已经触发
  setTimeout(updateVoiceTip, 800);

  function pickEnglishVoice(roleName) {
    if (!voices.length) loadVoices();
    // 关键：Edge 的在线嗓音（名字里带 "Online (Natural)"）在境内网络下
    // 实测全部合成失败（synthesis-failed），必须优先用"本机"英文嗓。
    const local = voices.filter(x => /^en/i.test(x.lang) && x.localService);
    // 女角色（Lily/Mum/Teacher/Grandma）优先 Zira，男角色（Tom/Dad）优先 Mark
    const maleRoles = ['Tom', 'Dad'];
    const femaleFirst = ['Microsoft Zira', 'Microsoft Eva', 'Microsoft Susan', 'Microsoft Hazel'];
    const maleFirst = ['Microsoft Mark', 'Microsoft David', 'Microsoft George'];
    const order = maleRoles.includes(roleName)
      ? maleFirst.concat(femaleFirst)
      : femaleFirst.concat(maleFirst);
    for (const p of order) {
      const v = local.find(x => x.name && x.name.includes(p));
      if (v) return v;
    }
    if (local.length) return local[0];          // 本机有其他英文嗓也行
    const online = voices.filter(x => /^en/i.test(x.lang));
    return online.length ? online[0] : null;    // 实在没有本机英文嗓才退在线
  }

  /**
   * 朗读英文（不同角色用不同音色区分，双人玩时更好分辨）
   */
  function speak(text, audioKey, roleName, slow) {
    if (audioKey) {
      // slow=true 时优先播放预生成的慢速版（<key>_slow.mp3），
      // 文件不存在则回退浏览器 TTS 慢速朗读
      const audio = new Audio('audio/' + audioKey + (slow ? '_slow' : '') + '.mp3');
      let fellBack = false;
      const fallback = () => {
        if (fellBack) return;
        fellBack = true;
        speakSystem(text, roleName, slow);
      };
      audio.onerror = fallback;
      audio.play().catch(fallback);
      return;
    }
    speakSystem(text, roleName, slow);
  }

  /* 角色嗓音配置：孩子角色用"升调"在现有成人嗓上模拟童声
     （Zira 女嗓升调模拟小女孩、Mark 男嗓升调模拟小男孩），
     家长/老师角色保持自然音区，孩子和家长一听就能区分 */
  const VOICE_PROFILE = {
    Lily:    { pitch: 1.42, rate: 0.78 },  // 小女孩
    Tom:     { pitch: 1.30, rate: 0.78 },  // 小男孩
    Mum:     { pitch: 1.05, rate: 0.82 },
    Dad:     { pitch: 0.95, rate: 0.82 },
    Teacher: { pitch: 1.05, rate: 0.82 },
    Grandma: { pitch: 0.92, rate: 0.80 },
  };

  function speakSystem(text, roleName, slow) {
    if (!('speechSynthesis' in window)) return;
    // 语音列表为空时主动刷新一次（个别浏览器首次加载有延迟）
    if (!voices.length) loadVoices();
    try {
      const profile = VOICE_PROFILE[roleName] || { pitch: 1.1, rate: 0.82 };
      const rate = slow ? 0.55 : profile.rate;
      const pitch = profile.pitch;

      // 统一发声函数：指定嗓音（voice 为空则用浏览器默认）
      const speakWith = (voice) => {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = rate;
        u.pitch = pitch;
        u.volume = 1;
        if (voice) u.voice = voice;
        window.speechSynthesis.speak(u);
        return u;
      };

      const enVoice = pickEnglishVoice(roleName);
      let succeeded = false;
      const u1 = speakWith(enVoice);

      // 自动降级：Edge 的在线英文嗓经常"列得出、读不出"（静默失败，不报错）。
      // 1.6 秒内没开始朗读就取消，改用任意一个本机嗓音硬读——
      // 中文嗓音读英文发音不标准，但至少能出声，孩子不会完全没反应。
      const degrade = () => {
        if (succeeded) return;
        succeeded = true;
        if (voices.length) speakWith(voices[0]);
      };
      u1.onstart = () => { succeeded = true; };
      u1.onend = () => { succeeded = true; };
      u1.onerror = () => { degrade(); };
      const timer = setTimeout(degrade, 1600);
      // 朗读正常开始后清掉降级定时器
      const clear = () => clearTimeout(timer);
      u1.addEventListener('boundary', clear, { once: true });
    } catch (e) { /* ignore */ }
  }

  /* =========================================================
     首页
     ========================================================= */
  function renderHome() {
    $('total-stars').textContent = totalStars();

    const grid = $('unit-grid');
    grid.innerHTML = '';

    LESSONS.forEach((unit, i) => {
      const p = state.progress[unit.id] || { done: 0, stars: 0 };
      const card = document.createElement('div');
      card.className = 'unit-card';
      card.style.background = unit.color;

      const total = unit.lines.length;
      const doneCount = Math.min(p.done || 0, total);
      let dots = '';
      const shown = Math.min(total, 8);
      for (let k = 0; k < shown; k++) {
        const filled = k < Math.round(doneCount / total * shown);
        dots += `<span class="dot${filled ? ' done' : ''}"></span>`;
      }

      card.innerHTML = `
        ${p.stars >= 3 ? '<span class="unit-badge">🏆</span>' : ''}
        <span class="unit-emoji">${unit.icon}</span>
        <span class="unit-name">${unit.title}</span>
        <span class="unit-progress">${dots}</span>
      `;

      card.addEventListener('click', () => startUnit(i));
      grid.appendChild(card);
    });
  }

  function startUnit(i) {
    state.unitIndex = i;
    state.lineIndex = 0;
    state.correctCount = 0;
    state.myLineCount = 0;
    state.revealed = false;
    state.myRole = null;
    state.otherRole = null;
    showDialogue();
  }

  /* =========================================================
     第一幕：漫画式对话
     场景图做背景，两个角色站在场景里，
     轮到谁说话，气泡就出现在谁头顶上，说话人高亮
     ========================================================= */
  function showDialogue() {
    const unit = LESSONS[state.unitIndex];
    $('dlg-title').textContent = unit.icon + ' ' + unit.title;

    // 场景背景
    $('scene-bg-dialogue').innerHTML =
      '<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">' +
      SCENES.render(unit.id) + '</svg>';

    // 角色站在场景里
    const roles = extractRoles(unit);
    const actorsBox = $('comic-actors');
    actorsBox.innerHTML = '';
    roles.forEach((role, i) => {
      const holder = document.createElement('div');
      holder.className = 'actor-holder';
      holder.dataset.role = role.name;
      holder.innerHTML = `
        <span class="ask-badge">?</span>
        <img class="actor-img" src="${CHARS[role.name].happy}" alt="${role.name}">
        <span class="actor-name">${role.name}</span>
      `;
      actorsBox.appendChild(holder);
    });

    // 点气泡重听当前句
    $('comic-bubble').addEventListener('click', () => {
      const line = unit.lines[comicIdx];
      if (line) speak(line.en, unit.id + '_l' + comicIdx, line.who);
    });

    show('dialogue');
    comicIdx = -1;
    setTimeout(playDialogue, 400);
  }

  let comicIdx = -1;

  function clearTimers() {
    playTimers.forEach(t => clearTimeout(t));
    playTimers = [];
  }

  function playDialogue() {
    clearTimers();
    const unit = LESSONS[state.unitIndex];
    comicIdx = -1;

    // 播放第一句（后续由 nextComicLine 接力）
    nextComicLine();
  }

  function nextComicLine() {
    const unit = LESSONS[state.unitIndex];
    comicIdx++;

    if (comicIdx >= unit.lines.length) return;   // 播完了

    const line = unit.lines[comicIdx];
    const bubble = $('comic-bubble');
    const whoEl = bubble.querySelector('.cb-who');
    const enEl = bubble.querySelector('.cb-en');
    const zhEl = bubble.querySelector('.cb-zh');

    // 气泡内容
    whoEl.textContent = line.who;
    enEl.textContent = line.en;
    zhEl.textContent = line.zh;

    // 气泡位置：左角色→左下，右角色→右上（通过类切换）
    const roles = extractRoles(unit);
    const roleIdx = roles.findIndex(r => r.name === line.who);
    bubble.classList.remove('pos-left', 'pos-right');
    bubble.classList.add(roleIdx % 2 === 0 ? 'pos-left' : 'pos-right');

    // 高亮说话人，压暗另一个
    document.querySelectorAll('#comic-actors .actor-holder').forEach(h => {
      const mine = h.dataset.role === line.who;
      h.classList.toggle('speaking', mine);
      h.classList.toggle('dimmed', !mine);
      const img = h.querySelector('.actor-img');
      const expr = pickExpression(line);
      img.src = (CHARS[h.dataset.role] || {})[expr] || CHARS[h.dataset.role].happy;
      // 疑问表情时头顶显示 "?" 徽章
      h.classList.toggle('asking', expr === 'think');
    });

    // 气泡弹跳动画
    bubble.classList.remove('pop');
    void bubble.offsetHeight;
    bubble.classList.add('pop');

    // 朗读
    speak(line.en, unit.id + '_l' + comicIdx, line.who);

    // 读完自动下一句
    const dur = Math.max(1900, line.en.length * 62 + 1000);
    playTimers.push(setTimeout(nextComicLine, dur));
  }

  /* =========================================================
     第二幕：选角色
     ========================================================= */
  function showCast() {
    clearTimers();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    const unit = LESSONS[state.unitIndex];
    const roles = extractRoles(unit);
    const list = $('cast-list');
    list.innerHTML = '';

    roles.forEach(role => {
      const btn = document.createElement('button');
      btn.className = 'cast-card';
      const img = CHARS[role.name] ? CHARS[role.name].happy : '';
      btn.innerHTML = `
        <img class="cast-avatar-img" src="${img}" alt="${role.name}">
        <span class="cast-name">${role.name}</span>
        <span class="cast-count">要说 ${role.count} 句</span>
      `;
      btn.addEventListener('click', () => pickRole(role.name));
      list.appendChild(btn);
    });

    show('cast');
  }

  function pickRole(roleName) {
    const unit = LESSONS[state.unitIndex];

    state.myRole = roleName;

    // 对方角色：优先选对话里出现最多的另一个角色
    const others = extractRoles(unit).filter(r => r.name !== roleName);
    others.sort((a, b) => b.count - a.count);
    state.otherRole = others.length ? others[0].name : roleName;

    // 统计孩子要说的句子数
    state.myLineCount = unit.lines.filter(l => l.who === roleName).length;
    state.correctCount = 0;
    state.lineIndex = 0;

    startRoleplay();
  }

  /* =========================================================
     第三幕：角色扮演（核心）
     ========================================================= */
  function startRoleplay() {
    state.lineIndex = 0;
    state.correctCount = 0;

    // 场景背景
    const unit = LESSONS[state.unitIndex];
    $('scene-bg-rp').innerHTML =
      '<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">' +
      SCENES.render(unit.id) + '</svg>';

    show('roleplay');
    renderLine();
  }

  /**
   * 找到下一句属于"我"的台词的位置
   * 从 from 开始往后找；找不到则返回 -1
   */
  function findNextMyLine(from) {
    const unit = LESSONS[state.unitIndex];
    for (let i = from; i < unit.lines.length; i++) {
      if (unit.lines[i].who === state.myRole) return i;
    }
    return -1;
  }

  function findPrevMyLine(before) {
    const unit = LESSONS[state.unitIndex];
    for (let i = before - 1; i >= 0; i--) {
      if (unit.lines[i].who === state.myRole) return i;
    }
    return -1;
  }

  /**
   * 渲染当前这一句（无论是我说的还是对方说的）
   */
  function renderLine() {
    const unit = LESSONS[state.unitIndex];
    const line = unit.lines[state.lineIndex];

    if (!line) { finishUnit(); return; }

    const isMine = line.who === state.myRole;

    // ---------- 进度 ----------
    // 用"我已经说过的句数 / 我要说的总句数"来算进度
    const saidSoFar = unit.lines
      .slice(0, state.lineIndex)
      .filter(l => l.who === state.myRole).length;
    const pct = state.myLineCount ? (saidSoFar / state.myLineCount * 100) : 0;
    $('progress-fill').style.width = pct + '%';
    $('progress-text').textContent = `${saidSoFar} / ${state.myLineCount}`;

    if (isMine) {
      renderMyTurn(line);
    } else {
      renderOtherTurn(line);
    }
  }

  /* ---------- 轮到孩子说 ---------- */
  function renderMyTurn(line) {
    state.revealed = false;

    $('scene-other').classList.remove('show');
    $('my-turn-card').style.display = 'flex';
    $('my-turn-card').classList.add('show');
    $('roleplay-actions').style.display = 'flex';

    $('turn-flag').textContent = '轮到你说了！';
    const myExpr = pickExpression(line);
    $('my-img').src = charImg(line.who, myExpr) || CHARS[line.who].happy;
    $('my-actor').classList.toggle('asking', myExpr === 'think');
    $('my-zh').textContent = line.zh;
    $('my-hint').textContent = '先自己说一遍 👄';
    $('my-en').textContent = line.en;
    $('my-answer').classList.remove('revealed');
    $('btn-reveal').classList.remove('hidden');

    $('btn-notyet').textContent = '再听一遍 🔁';

    // 入场动画
    const card = $('my-turn-card');
    card.style.animation = 'none';
    void card.offsetHeight;
    card.style.animation = 'turnIn .35s cubic-bezier(.34,1.4,.64,1)';
  }

  /* ---------- 轮到对方说 ---------- */
  function renderOtherTurn(line) {
    $('my-turn-card').style.display = 'none';
    $('roleplay-actions').style.display = 'none';

    const box = $('scene-other');
    box.classList.add('show');
    const otherExpr = pickExpression(line);
    $('other-img').src = charImg(line.who, otherExpr) || CHARS[line.who].happy;
    $('other-actor').classList.toggle('asking', otherExpr === 'think');
    $('other-who').textContent = line.who;
    $('other-en').textContent = line.en;
    $('other-zh').textContent = line.zh;

    // 气泡位置：和角色左右对应
    const unit = LESSONS[state.unitIndex];
    const roles = extractRoles(unit);
    const roleIdx = roles.findIndex(r => r.name === line.who);
    $('other-bubble').classList.remove('pos-left', 'pos-right');
    $('other-bubble').classList.add(roleIdx % 2 === 0 ? 'pos-left' : 'pos-right');

    // 弹跳动画
    const bub = $('other-bubble');
    bub.classList.remove('pop');
    void bub.offsetHeight;
    bub.classList.add('pop');

    // 自动朗读对方台词，然后前进到下一句
    const idx = state.lineIndex;
    speak(line.en, unit.id + '_l' + idx, line.who);

    // 估算朗读时长（0.82 倍语速约为每字符 62ms），留 800ms 缓冲
    const dur = Math.max(1700, line.en.length * 62 + 800);
    playTimers.push(setTimeout(() => {
      state.lineIndex++;
      renderLine();
    }, dur));
  }

  /* ---------- 翻开答案 ---------- */
  function revealAnswer() {
    if (state.revealed) return;
    state.revealed = true;

    const unit = LESSONS[state.unitIndex];
    const line = unit.lines[state.lineIndex];

    $('my-answer').classList.add('revealed');
    $('my-hint').textContent = '跟着读一遍！👂';
    $('btn-reveal').classList.add('hidden');
    $('btn-notyet').textContent = '再听一遍 🔁';

    speak(line.en, unit.id + '_l' + state.lineIndex, line.who);
  }

  /* ---------- 说对了，继续 ---------- */
  function markSaid() {
    if (!state.revealed) revealAnswer();

    state.correctCount++;
    flyStar();
    advance();
  }

  /* ---------- 再听一遍（不前进） ---------- */
  function repeatAgain() {
    const unit = LESSONS[state.unitIndex];
    const line = unit.lines[state.lineIndex];

    // 如果还没翻开答案，先翻开
    if (!state.revealed) {
      revealAnswer();
      return;
    }
    // 已翻开过 → 再读一遍（慢速，优先预生成的慢速音频）
    speak(line.en, unit.id + '_l' + state.lineIndex, line.who, true);
    $('my-hint').textContent = '跟着慢慢读一遍 👂';
  }

  /* ---------- 前进 ---------- */
  function advance() {
    const unit = LESSONS[state.unitIndex];
    const current = state.lineIndex;

    // 记录这个单元说过的句子数
    const p = state.progress[unit.id] || { done: 0, stars: 0 };
    const saidTotal = unit.lines
      .slice(0, current + 1)
      .filter(l => l.who === state.myRole).length;
    if (saidTotal > (p.done || 0)) p.done = saidTotal;
    state.progress[unit.id] = p;

    state.lineIndex++;

    if (state.lineIndex >= unit.lines.length) {
      finishUnit();
    } else {
      setTimeout(renderLine, 260);
    }
  }

  function flyStar() {
    const el = document.createElement('div');
    el.className = 'fly-star';
    el.textContent = '⭐';
    el.style.left = (30 + Math.random() * 40) + '%';
    el.style.top  = (50 + Math.random() * 12) + '%';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  /* =========================================================
     结算
     ========================================================= */
  function finishUnit() {
    clearTimers();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    const unit = LESSONS[state.unitIndex];
    const total = state.myLineCount;
    const rate = total ? state.correctCount / total : 0;

    let stars = 0;
    if (rate >= 0.95) stars = 3;
    else if (rate >= 0.7) stars = 2;
    else if (rate >= 0.4) stars = 1;

    const p = state.progress[unit.id] || { done: 0, stars: 0 };
    if (stars > (p.stars || 0)) p.stars = stars;
    p.done = total;
    state.progress[unit.id] = p;
    saveProgress();

    let emoji = '🎉', title = '演得真好！';
    if (stars === 3)      { emoji = '🏆'; title = '完美演出！'; }
    else if (stars === 2) { emoji = '🌟'; title = '演得很棒！'; }
    else if (stars === 1) { emoji = '👍'; title = '继续加油！'; }
    else                  { emoji = '💪'; title = '再试一次吧'; }

    const roleObj = extractRoles(unit).find(r => r.name === state.myRole);
    $('finish-emoji').textContent = emoji;
    $('finish-title').textContent = title;
    $('finish-role').textContent =
      `你扮演的是 ${roleObj ? roleObj.avatar : '🎭'} ${state.myRole}`;
    $('finish-stars').textContent = stars;
    $('finish-detail').textContent =
      `「${unit.title}」你有 ${total} 句台词，开口说出了 ${state.correctCount} 句`;

    show('finish');
  }

  /* =========================================================
     事件绑定
     ========================================================= */
  function bind() {
    // 返回首页
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', () => {
        clearTimers();
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        renderHome();
        show('home');
      });
    });

    $('btn-play-dialogue').addEventListener('click', playDialogue);
    $('btn-to-practice').addEventListener('click', showCast);

    $('btn-reveal').addEventListener('click', revealAnswer);
    $('btn-said').addEventListener('click', markSaid);
    $('btn-notyet').addEventListener('click', repeatAgain);

    // 点答案框重听
    $('my-answer').addEventListener('click', () => {
      if (!state.revealed) return;
      const unit = LESSONS[state.unitIndex];
      const line = unit.lines[state.lineIndex];
      speak(line.en, unit.id + '_l' + state.lineIndex, line.who);
    });

    // 长按答案框慢速朗读
    let pressTimer = null;
    $('my-answer').addEventListener('touchstart', () => {
      if (!state.revealed) return;
      pressTimer = setTimeout(() => {
        const unit = LESSONS[state.unitIndex];
        const line = unit.lines[state.lineIndex];
        speak(line.en, unit.id + '_l' + state.lineIndex, line.who, true);
      }, 600);
    });
    $('my-answer').addEventListener('touchend', () => clearTimeout(pressTimer));

    // 退出角色扮演，回到选角色
    $('btn-exit-roleplay').addEventListener('click', () => {
      clearTimers();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      showCast();
    });

    // 换个角色重演
    $('btn-swap').addEventListener('click', () => {
      showCast();
    });

    $('btn-home').addEventListener('click', () => {
      renderHome();
      show('home');
    });

    $('btn-reset').addEventListener('click', () => {
      if (confirm('确定要清空所有学习记录吗？')) {
        localStorage.removeItem(STORE_KEY);
        state.progress = {};
        renderHome();
      }
    });

    const vtClose = $('voice-tip-close');
    if (vtClose) vtClose.addEventListener('click', () => {
      const tip = $('voice-tip');
      if (tip) tip.hidden = true;
    });

    // 页面重新可见时恢复语音引擎
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && 'speechSynthesis' in window) loadVoices();
    });
  }

  /* =========================================================
     启动
     ========================================================= */
  function init() {
    loadProgress();
    renderHome();
    bind();
    show('home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
