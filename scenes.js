/* ===================================================================
   《开口说英语》卡通场景绘制
   -------------------------------------------------------------------
   每个主题一个手绘风格场景（纯 SVG，离线、秒开、体积为 0）
   提供 scenes.render(unitId) → 返回 SVG 字符串
   =================================================================== */

const SCENES = (function () {

  /* ---------- 公共元素 ---------- */

  // 地面
  const floor = (color) => `
    <rect x="0" y="330" width="800" height="120" fill="${color}"/>
    <rect x="0" y="326" width="800" height="8" rx="4" fill="rgba(0,0,0,.06)"/>
  `;

  // 墙裙
  const wallLine = (y, color) => `<rect x="0" y="${y}" width="800" height="5" fill="${color}"/>`;

  /* ---------- 场景 1：卧室早晨（早上好） ---------- */
  function morning() {
    return `
      <rect width="800" height="450" fill="#FFF6E5"/>
      ${wallLine(300, '#F2DFC4')}
      ${floor('#E8D3B4')}
      <!-- 窗户 -->
      <rect x="80" y="60" width="230" height="200" rx="14" fill="#BFE4F5" stroke="#fff" stroke-width="12"/>
      <line x1="195" y1="60" x2="195" y2="260" stroke="#fff" stroke-width="10"/>
      <line x1="80" y1="160" x2="310" y2="160" stroke="#fff" stroke-width="10"/>
      <!-- 太阳 -->
      <circle cx="150" cy="115" r="34" fill="#FFD166"/>
      <circle cx="150" cy="115" r="46" fill="#FFD166" opacity=".28"/>
      <!-- 云 -->
      <ellipse cx="255" cy="105" rx="34" ry="19" fill="#fff" opacity=".9"/>
      <ellipse cx="285" cy="112" rx="24" ry="14" fill="#fff" opacity=".9"/>
      <!-- 床 -->
      <rect x="420" y="215" width="330" height="125" rx="16" fill="#F5B7C0"/>
      <rect x="420" y="196" width="330" height="42" rx="18" fill="#fff"/>
      <rect x="440" y="175" width="86" height="52" rx="14" fill="#FFE1E6"/>
      <rect x="410" y="330" width="350" height="26" rx="10" fill="#C9938F"/>
      <!-- 枕头 -->
      <ellipse cx="485" cy="212" rx="42" ry="24" fill="#fff" stroke="#F0DDE0" stroke-width="3"/>
      <!-- 被子格子 -->
      <line x1="520" y1="270" x2="740" y2="270" stroke="#fff" stroke-width="4" opacity=".65"/>
      <line x1="520" y1="305" x2="740" y2="305" stroke="#fff" stroke-width="4" opacity=".65"/>
      <!-- 挂画 -->
      <rect x="560" y="70" width="120" height="92" rx="10" fill="#fff" stroke="#E8C9A0" stroke-width="7"/>
      <circle cx="600" cy="105" r="17" fill="#FFB7B2"/>
      <path d="M585 148 L615 112 L640 148 Z" fill="#A8E6CF"/>
      <!-- 地毯 -->
      <ellipse cx="250" cy="390" rx="150" ry="42" fill="#FBD9C4" opacity=".85"/>
    `;
  }

  /* ---------- 场景 2：客厅数数（你几岁了） ---------- */
  function living() {
    let blocks = '';
    const cols = ['#FF9AA2', '#A8E6CF', '#FFD166', '#B5D8EB', '#C7CEEA'];
    for (let i = 0; i < 5; i++) {
      blocks += `<rect x="${120 + i * 74}" y="${348 - i * 12}" width="58" height="58" rx="10"
                   fill="${cols[i]}" stroke="#fff" stroke-width="5"/>
                 <text x="${149 + i * 74}" y="${388 - i * 12}" font-size="30" font-weight="900"
                   fill="#fff" text-anchor="middle">${i + 1}</text>`;
    }
    return `
      <rect width="800" height="450" fill="#EAF7F0"/>
      ${wallLine(300, '#D3EBDE')}
      ${floor('#C9E4D6')}
      <!-- 气球 -->
      <line x1="640" y1="90" x2="660" y2="250" stroke="#E0A7A0" stroke-width="3"/>
      <circle cx="640" cy="86" r="40" fill="#FF9AA2"/>
      <ellipse cx="628" cy="72" rx="12" ry="8" fill="#fff" opacity=".55" transform="rotate(-28 628 72)"/>
      <line x1="720" y1="120" x2="735" y2="255" stroke="#E0A7A0" stroke-width="3"/>
      <circle cx="720" cy="116" r="32" fill="#FFD166"/>
      <ellipse cx="710" cy="105" rx="10" ry="7" fill="#fff" opacity=".55" transform="rotate(-28 710 105)"/>
      <!-- 数字挂牌 -->
      <rect x="330" y="70" width="180" height="130" rx="20" fill="#fff" stroke="#A8E6CF" stroke-width="9"/>
      <text x="420" y="165" font-size="86" font-weight="900" fill="#6ECFA8" text-anchor="middle">1 2 3</text>
      <!-- 积木堆 -->
      ${blocks}
      <!-- 沙发 -->
      <rect x="530" y="240" width="240" height="105" rx="20" fill="#FFD1DC"/>
      <rect x="510" y="215" width="46" height="130" rx="20" fill="#FFB7C5"/>
      <rect x="744" y="215" width="46" height="130" rx="20" fill="#FFB7C5"/>
      <rect x="560" y="262" width="180" height="60" rx="14" fill="#FFE4EA"/>
    `;
  }

  /* ---------- 场景 3：花园气球（颜色） ---------- */
  function garden() {
    const balloons = [
      { x: 130, y: 130, c: '#FF6B6B', s: 46 },
      { x: 240, y: 95,  c: '#4D96FF', s: 54 },
      { x: 355, y: 140, c: '#FFD166', s: 44 },
      { x: 465, y: 100, c: '#6BCB77', s: 52 },
      { x: 580, y: 135, c: '#B983FF', s: 46 }
    ];
    let bs = '';
    balloons.forEach(b => {
      bs += `
        <line x1="${b.x}" y1="${b.y + b.s}" x2="${b.x + 8}" y2="330" stroke="#D8B98C" stroke-width="3"/>
        <circle cx="${b.x}" cy="${b.y}" r="${b.s}" fill="${b.c}"/>
        <ellipse cx="${b.x - b.s * 0.3}" cy="${b.y - b.s * 0.35}" rx="${b.s * 0.28}" ry="${b.s * 0.18}"
          fill="#fff" opacity=".5" transform="rotate(-30 ${b.x} ${b.y})"/>
        <path d="M${b.x} ${b.y + b.s} l9 16 l-18 0 Z" fill="${b.c}" opacity=".8"/>
      `;
    });
    return `
      <rect width="800" height="450" fill="#EAF6FF"/>
      <!-- 云 -->
      <ellipse cx="120" cy="60" rx="52" ry="26" fill="#fff"/>
      <ellipse cx="165" cy="68" rx="38" ry="20" fill="#fff"/>
      <ellipse cx="660" cy="70" rx="48" ry="24" fill="#fff"/>
      ${floor('#B7E4A8')}
      <!-- 草丛 -->
      <path d="M0 340 q40 -34 80 0 q40 -44 80 0 q40 -30 80 0 q40 -44 80 0 q40 -32 80 0 q40 -42 80 0 q40 -30 80 0 q40 -40 80 0 q40 -32 80 0 L800 450 L0 450 Z"
        fill="#8FD67A"/>
      <!-- 小雏菊 -->
      <circle cx="200" cy="400" r="9" fill="#fff"/><circle cx="200" cy="400" r="4" fill="#FFD166"/>
      <circle cx="420" cy="415" r="9" fill="#fff"/><circle cx="420" cy="415" r="4" fill="#FFD166"/>
      <circle cx="620" cy="398" r="9" fill="#fff"/><circle cx="620" cy="398" r="4" fill="#FFD166"/>
      ${bs}
    `;
  }

  /* ---------- 场景 4：餐厅（吃饭） ---------- */
  function dining() {
    return `
      <rect width="800" height="450" fill="#FFF4EC"/>
      ${wallLine(300, '#F2DCCB')}
      ${floor('#D9B596')}
      <!-- 墙上的时钟 -->
      <circle cx="660" cy="110" r="46" fill="#fff" stroke="#E0B98F" stroke-width="9"/>
      <line x1="660" y1="110" x2="660" y2="82" stroke="#8B7A6B" stroke-width="5" stroke-linecap="round"/>
      <line x1="660" y1="110" x2="682" y2="122" stroke="#8B7A6B" stroke-width="5" stroke-linecap="round"/>
      <!-- 橱柜 -->
      <rect x="80" y="90" width="240" height="180" rx="12" fill="#E8C9A8"/>
      <line x1="80" y1="180" x2="320" y2="180" stroke="#CEA97F" stroke-width="5"/>
      <circle cx="188" cy="222" r="7" fill="#A8876A"/>
      <circle cx="212" cy="222" r="7" fill="#A8876A"/>
      <circle cx="188" cy="136" r="7" fill="#A8876A"/>
      <circle cx="212" cy="136" r="7" fill="#A8876A"/>
      <!-- 餐桌 -->
      <rect x="180" y="255" width="460" height="34" rx="14" fill="#D9A87C"/>
      <rect x="215" y="289" width="26" height="130" fill="#C2936B"/>
      <rect x="580" y="289" width="26" height="130" fill="#C2936B"/>
      <!-- 桌上食物 -->
      <ellipse cx="300" cy="248" rx="62" ry="24" fill="#fff" stroke="#F0DDCB" stroke-width="4"/>
      <ellipse cx="300" cy="244" rx="44" ry="15" fill="#FFF7E8"/>
      <circle cx="288" cy="240" r="9" fill="#FFD166" opacity=".9"/>
      <circle cx="306" cy="243" r="7" fill="#FF9AA2" opacity=".9"/>
      <!-- 碗 -->
      <path d="M420 232 q42 3 42 22 q0 14 -42 14 q-42 0 -42 -14 q0 -19 42 -22 Z" fill="#B5D8EB"/>
      <ellipse cx="420" cy="234" rx="42" ry="11" fill="#D8ECF7"/>
      <!-- 杯子 -->
      <rect x="520" y="222" width="42" height="46" rx="8" fill="#fff" stroke="#EBD9C8" stroke-width="4"/>
      <path d="M562 234 q22 8 0 22" stroke="#EBD9C8" stroke-width="6" fill="none"/>
      <!-- 椅子 -->
      <rect x="245" y="300" width="120" height="26" rx="10" fill="#E8B48D"/>
      <rect x="255" y="326" width="18" height="96" fill="#D9A87C"/>
      <rect x="338" y="326" width="18" height="96" fill="#D9A87C"/>
    `;
  }

  /* ---------- 场景 5：客厅全家福（家人） ---------- */
  function familyRoom() {
    return `
      <rect width="800" height="450" fill="#F2F0FB"/>
      ${wallLine(300, '#DEDAF2')}
      ${floor('#B9B2DE')}

      <!-- 墙上大全家福：最醒目的元素 -->
      <rect x="255" y="40" width="290" height="190" rx="18" fill="#fff" stroke="#A99FD6" stroke-width="12"/>
      <!-- 框内背景 -->
      <rect x="263" y="48" width="274" height="174" rx="12" fill="#EAF6FF"/>
      <!-- 爸爸 -->
      <circle cx="335" cy="112" r="26" fill="#FFC9A8"/>
      <rect x="309" y="142" width="52" height="62" rx="20" fill="#8FC4DF"/>
      <!-- 妈妈 -->
      <circle cx="400" cy="100" r="26" fill="#FFD9BB"/>
      <rect x="374" y="130" width="52" height="74" rx="20" fill="#FF9AA2"/>
      <!-- 孩子 -->
      <circle cx="465" cy="118" r="22" fill="#FFC9A8"/>
      <rect x="443" y="144" width="44" height="60" rx="18" fill="#A8E6CF"/>
      <!-- 心形装饰 -->
      <text x="400" y="80" font-size="26" text-anchor="middle">❤️</text>

      <!-- 小相框 -->
      <rect x="105" y="80" width="120" height="100" rx="12" fill="#fff" stroke="#C4BBE8" stroke-width="8"/>
      <circle cx="165" cy="122" r="24" fill="#FFD166"/>
      <text x="165" y="128" font-size="20" text-anchor="middle">⭐</text>

      <!-- 绿植 -->
      <rect x="620" y="255" width="70" height="76" rx="10" fill="#E0A87C"/>
      <path d="M655 255 q-42 -60 -14 -96 q14 40 14 96 Z" fill="#6BCB77"/>
      <path d="M655 255 q42 -66 8 -104 q-16 44 -8 104 Z" fill="#8FD67A"/>

      <!-- 沙发（缩小，不抢全家福） -->
      <rect x="180" y="268" width="440" height="96" rx="24" fill="#C7CEEA"/>
      <rect x="158" y="244" width="50" height="122" rx="24" fill="#AEB7E0"/>
      <rect x="592" y="244" width="50" height="122" rx="24" fill="#AEB7E0"/>
      <rect x="215" y="288" width="176" height="60" rx="16" fill="#DDE2F5"/>
      <rect x="409" y="288" width="176" height="60" rx="16" fill="#DDE2F5"/>

      <!-- 抱枕 -->
      <rect x="245" y="300" width="54" height="46" rx="12" fill="#FFB7B2"/>
      <rect x="450" y="300" width="54" height="46" rx="12" fill="#FFD166"/>

      <!-- 地毯 -->
      <ellipse cx="400" cy="412" rx="200" ry="38" fill="#9C93D4" opacity=".55"/>
    `;
  }

  /* ---------- 场景 6：上学路上（上学去） ---------- */
  function schoolRoad() {
    return `
      <rect width="800" height="450" fill="#DFF0FA"/>
      <!-- 云 -->
      <ellipse cx="150" cy="70" rx="58" ry="28" fill="#fff"/>
      <ellipse cx="200" cy="78" rx="40" ry="22" fill="#fff"/>
      <ellipse cx="640" cy="62" rx="50" ry="26" fill="#fff"/>
      <!-- 太阳 -->
      <circle cx="720" cy="80" r="42" fill="#FFD166"/>
      <circle cx="720" cy="80" r="58" fill="#FFD166" opacity=".25"/>
      <!-- 学校大楼 -->
      <rect x="230" y="150" width="340" height="200" rx="14" fill="#FFF0DC"/>
      <rect x="290" y="110" width="220" height="46" rx="10" fill="#F0A868"/>
      <text x="400" y="146" font-size="34" font-weight="900" fill="#fff" text-anchor="middle">SCHOOL</text>
      <!-- 门窗 -->
      <rect x="368" y="240" width="64" height="110" rx="8" fill="#B5D8EB" stroke="#E0B98F" stroke-width="6"/>
      <circle cx="420" cy="296" r="5" fill="#E0B98F"/>
      <rect x="262" y="230" width="70" height="70" rx="8" fill="#B5D8EB" stroke="#fff" stroke-width="6"/>
      <line x1="297" y1="230" x2="297" y2="300" stroke="#fff" stroke-width="5"/>
      <rect x="468" y="230" width="70" height="70" rx="8" fill="#B5D8EB" stroke="#fff" stroke-width="6"/>
      <line x1="503" y1="230" x2="503" y2="300" stroke="#fff" stroke-width="5"/>
      <!-- 旗杆 -->
      <line x1="120" y1="140" x2="120" y2="350" stroke="#B9C7D0" stroke-width="7"/>
      <path d="M120 148 l72 24 l-72 24 Z" fill="#FF9AA2"/>
      <!-- 树 -->
      <rect x="640" y="270" width="22" height="80" fill="#B98A5E"/>
      <circle cx="651" cy="248" r="54" fill="#6BCB77"/>
      <circle cx="616" cy="268" r="38" fill="#8FD67A"/>
      <circle cx="686" cy="268" r="38" fill="#8FD67A"/>
      <!-- 人行道 -->
      <path d="M0 350 L800 350 L800 450 L0 450 Z" fill="#C9CDD4"/>
      <path d="M0 400 L800 400" stroke="#fff" stroke-width="7" stroke-dasharray="34 26"/>
    `;
  }

  /* ---------- 场景 7：浴室镜子（身体部位） ---------- */
  function bathroom() {
    const tiles = (() => {
      let t = '';
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 9; c++) {
          t += `<rect x="${c * 90}" y="${r * 78}" width="88" height="76" rx="6"
                  fill="#E4F4FB" stroke="#D0E9F5" stroke-width="3"/>`;
        }
      }
      return t;
    })();
    return `
      ${tiles}
      <!-- 镜子 -->
      <rect x="240" y="70" width="320" height="220" rx="26" fill="#CFEAF8" stroke="#fff" stroke-width="12"/>
      <ellipse cx="330" cy="130" rx="60" ry="34" fill="#fff" opacity=".45" transform="rotate(-22 330 130)"/>
      <!-- 洗手台 -->
      <rect x="270" y="290" width="260" height="40" rx="18" fill="#fff"/>
      <path d="M330 290 q70 3 70 24 q0 14 -70 14 q-70 0 -70 -14 q0 -21 70 -24 Z" fill="#B5D8EB"/>
      <rect x="400" y="238" width="14" height="52" rx="6" fill="#C9D6DE"/>
      <path d="M407 238 q34 -6 34 20" stroke="#C9D6DE" stroke-width="12" fill="none" stroke-linecap="round"/>
      <!-- 水珠 -->
      <circle cx="441" cy="278" r="5" fill="#8FC4DF"/>
      <circle cx="441" cy="294" r="4" fill="#8FC4DF" opacity=".7"/>
      <!-- 毛巾 -->
      <rect x="620" y="120" width="34" height="180" rx="12" fill="#FFD1DC"/>
      <rect x="614" y="108" width="46" height="20" rx="8" fill="#E0B98F"/>
      <!-- 地面 -->
      <rect x="0" y="352" width="800" height="98" fill="#D8ECF7"/>
      <ellipse cx="400" cy="400" rx="200" ry="34" fill="#fff" opacity=".5"/>
    `;
  }

  /* ---------- 场景 8：窗边天气（天气） ---------- */
  function weather() {
    return `
      <rect width="800" height="450" fill="#EAF4FF"/>
      ${wallLine(300, '#D5E5F5')}
      ${floor('#C3B8A8')}
      <!-- 大窗 -->
      <rect x="160" y="55" width="480" height="235" rx="20" fill="#A8D8F0" stroke="#fff" stroke-width="14"/>
      <line x1="400" y1="55" x2="400" y2="290" stroke="#fff" stroke-width="11"/>
      <line x1="160" y1="172" x2="640" y2="172" stroke="#fff" stroke-width="11"/>
      <!-- 窗内太阳+云 -->
      <circle cx="250" cy="115" r="34" fill="#FFD166"/>
      <ellipse cx="520" cy="115" rx="46" ry="24" fill="#fff" opacity=".92"/>
      <ellipse cx="560" cy="124" rx="32" ry="18" fill="#fff" opacity=".92"/>
      <!-- 窗内雨滴 -->
      <line x1="470" y1="200" x2="462" y2="228" stroke="#7FB8D6" stroke-width="5" stroke-linecap="round"/>
      <line x1="520" y1="206" x2="512" y2="234" stroke="#7FB8D6" stroke-width="5" stroke-linecap="round"/>
      <line x1="570" y1="200" x2="562" y2="228" stroke="#7FB8D6" stroke-width="5" stroke-linecap="round"/>
      <!-- 窗台 -->
      <rect x="140" y="288" width="520" height="26" rx="10" fill="#F0E4D2"/>
      <!-- 雨伞桶 -->
      <rect x="60" y="290" width="66" height="90" rx="12" fill="#B5D8EB"/>
      <line x1="93" y1="200" x2="93" y2="300" stroke="#8B7A6B" stroke-width="7"/>
      <path d="M45 205 q48 -52 96 0 Z" fill="#FF9AA2"/>
      <path d="M45 205 q24 14 48 0 q24 14 48 0" fill="none" stroke="#fff" stroke-width="5"/>
      <!-- 小地毯 -->
      <ellipse cx="420" cy="398" rx="180" ry="38" fill="#9FC6DC" opacity=".5"/>
      <!-- 雨靴 -->
      <path d="M300 330 h44 v60 q0 12 -12 12 h-20 q-12 0 -12 -12 Z" fill="#FFD166"/>
      <path d="M360 330 h44 v60 q0 12 -12 12 h-20 q-12 0 -12 -12 Z" fill="#FF9AA2"/>
    `;
  }

  /* ---------- 场景 9：玩具房（一起玩吧） ---------- */
  function playroom() {
    return `
      <rect width="800" height="450" fill="#FFF1F6"/>
      ${wallLine(300, '#F5DBE6')}
      ${floor('#E0C4B0')}
      <!-- 玩具车 -->
      <rect x="90" y="300" width="140" height="58" rx="18" fill="#FF6B6B"/>
      <rect x="130" y="270" width="80" height="42" rx="14" fill="#FF9AA2"/>
      <circle cx="130" cy="366" r="24" fill="#4A4453"/><circle cx="130" cy="366" r="11" fill="#D5D0DC"/>
      <circle cx="196" cy="366" r="24" fill="#4A4453"/><circle cx="196" cy="366" r="11" fill="#D5D0DC"/>
      <rect x="88" y="318" width="26" height="20" rx="7" fill="#FFE9A8"/>
      <!-- 积木塔 -->
      <rect x="330" y="332" width="56" height="56" rx="10" fill="#FFD166"/>
      <rect x="386" y="332" width="56" height="56" rx="10" fill="#A8E6CF"/>
      <rect x="358" y="276" width="56" height="56" rx="10" fill="#B5D8EB"/>
      <text x="386" y="318" font-size="34" font-weight="900" fill="#fff" text-anchor="middle">A</text>
      <!-- 球 -->
      <circle cx="540" cy="352" r="52" fill="#fff" stroke="#FFB7B2" stroke-width="9"/>
      <path d="M540 300 q22 26 0 52 q-22 26 0 52" fill="none" stroke="#B5D8EB" stroke-width="7"/>
      <path d="M488 352 q26 -22 52 0 q26 22 52 0" fill="none" stroke="#FFD166" stroke-width="7"/>
      <!-- 玩具熊 -->
      <circle cx="666" cy="300" r="40" fill="#E8B98C"/>
      <circle cx="666" cy="258" r="32" fill="#F0C99C"/>
      <circle cx="648" cy="238" r="15" fill="#E8B98C"/>
      <circle cx="684" cy="238" r="15" fill="#E8B98C"/>
      <circle cx="656" cy="254" r="4" fill="#5A4A3A"/>
      <circle cx="676" cy="254" r="4" fill="#5A4A3A"/>
      <ellipse cx="666" cy="266" rx="9" ry="7" fill="#C9926A"/>
      <rect x="626" y="336" width="80" height="14" rx="7" fill="#D9A87C"/>
      <!-- 地毯 -->
      <ellipse cx="400" cy="410" rx="220" ry="42" fill="#FFD1DC" opacity=".62"/>
      <!-- 气球 -->
      <line x1="742" y1="120" x2="726" y2="200" stroke="#D8B98C" stroke-width="3"/>
      <circle cx="742" cy="116" r="30" fill="#C7CEEA"/>
    `;
  }

  /* ---------- 场景 10：卧室夜晚（心情） ---------- */
  function night() {
    return `
      <rect width="800" height="450" fill="#3D3A5C"/>
      <!-- 窗外星空 -->
      <rect x="90" y="50" width="240" height="200" rx="16" fill="#2B2949" stroke="#fff" stroke-width="11"/>
      <circle cx="150" cy="100" r="4" fill="#fff"/><circle cx="200" cy="80" r="3" fill="#fff"/>
      <circle cx="250" cy="120" r="4" fill="#fff"/><circle cx="180" cy="150" r="3" fill="#fff"/>
      <circle cx="270" cy="170" r="4" fill="#fff"/><circle cx="130" cy="180" r="3" fill="#fff"/>
      <!-- 月亮 -->
      <circle cx="255" cy="105" r="30" fill="#FFE9A8"/>
      <circle cx="242" cy="98" r="8" fill="#F5D98C" opacity=".55"/>
      <circle cx="264" cy="118" r="5" fill="#F5D98C" opacity=".55"/>
      <!-- 地面 -->
      <rect x="0" y="300" width="800" height="150" fill="#332F4E"/>
      <!-- 床 -->
      <rect x="400" y="230" width="360" height="120" rx="18" fill="#5C5784"/>
      <rect x="400" y="206" width="360" height="44" rx="18" fill="#7A74A8"/>
      <ellipse cx="470" cy="222" rx="46" ry="26" fill="#EDEAFB"/>
      <rect x="392" y="344" width="376" height="28" rx="10" fill="#292645"/>
      <!-- 星空投影灯（月亮光晕） -->
      <circle cx="700" cy="150" r="60" fill="#FFE9A8" opacity=".12"/>
      <circle cx="700" cy="150" r="34" fill="#FFE9A8" opacity=".22"/>
      <!-- 小夜灯 -->
      <rect x="740" y="256" width="30" height="44" rx="10" fill="#FFD166" opacity=".9"/>
      <ellipse cx="755" cy="300" rx="40" ry="12" fill="#FFD166" opacity=".22"/>
      <!-- 月亮灯串 -->
      <path d="M60 320 q120 -40 240 0" stroke="#8B85B8" stroke-width="3" fill="none"/>
      <circle cx="120" cy="302" r="7" fill="#FFD166"/>
      <circle cx="180" cy="292" r="7" fill="#FFE9A8"/>
      <circle cx="240" cy="300" r="7" fill="#FFD166"/>
      <!-- 地毯 -->
      <ellipse cx="220" cy="400" rx="150" ry="38" fill="#4A4570" opacity=".75"/>
    `;
  }

  /* ===================================================================
     新场景 u11 ~ u40
     =================================================================== */

  /* 公共小元素 */
  const sunIcon = (cx, cy, r) => `
    <circle cx="${cx}" cy="${cy}" r="${r * 1.5}" fill="#FFD166" opacity=".25"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD166"/>`;
  const cloudIcon = (cx, cy, s) => `
    <ellipse cx="${cx}" cy="${cy}" rx="${46 * s}" ry="${22 * s}" fill="#fff" opacity=".92"/>
    <ellipse cx="${cx + 34 * s}" cy="${cy + 7 * s}" rx="${32 * s}" ry="${16 * s}" fill="#fff" opacity=".92"/>`;
  const treeIcon = (x, y, s) => `
    <rect x="${x - 9 * s}" y="${y}" width="${18 * s}" height="${70 * s}" fill="#B98A5E"/>
    <circle cx="${x}" cy="${y - 18 * s}" r="${52 * s}" fill="#6BCB77"/>
    <circle cx="${x - 38 * s}" cy="${y + 8 * s}" r="${34 * s}" fill="#8FD67A"/>
    <circle cx="${x + 38 * s}" cy="${y + 8 * s}" r="${34 * s}" fill="#8FD67A"/>`;

  /* u11 教室（黑板课桌） */
  function classroom() {
    return `
      <rect width="800" height="450" fill="#FDF3E0"/>
      <rect x="0" y="330" width="800" height="120" fill="#E5CBA8"/>
      <!-- 黑板 -->
      <rect x="120" y="60" width="560" height="180" rx="12" fill="#4E7A5A" stroke="#B98A5E" stroke-width="12"/>
      <text x="400" y="150" font-size="42" font-weight="900" fill="#fff" text-anchor="middle">A B C</text>
      <text x="400" y="205" font-size="26" fill="#DFF0D8" text-anchor="middle">Good morning!</text>
      <!-- 讲台 -->
      <rect x="330" y="240" width="140" height="90" rx="10" fill="#D9A87C"/>
      <rect x="318" y="232" width="164" height="16" rx="8" fill="#E8B48D"/>
      <!-- 课桌 -->
      <rect x="80" y="290" width="180" height="22" rx="8" fill="#F0C08A"/>
      <rect x="96" y="312" width="14" height="70" fill="#D9A87C"/>
      <rect x="230" y="312" width="14" height="70" fill="#D9A87C"/>
      <rect x="540" y="290" width="180" height="22" rx="8" fill="#F0C08A"/>
      <rect x="556" y="312" width="14" height="70" fill="#D9A87C"/>
      <rect x="690" y="312" width="14" height="70" fill="#D9A87C"/>
      <!-- 书 -->
      <rect x="100" y="272" width="60" height="18" rx="4" fill="#FF9AA2"/>
      <rect x="108" y="258" width="46" height="16" rx="4" fill="#A8E6CF"/>
      <!-- 国旗装饰 -->
      <rect x="700" y="80" width="8" height="70" fill="#B9C7D0"/>
      <path d="M708 84 l56 16 l-56 16 Z" fill="#FF6B6B"/>
    `;
  }

  /* u12 美术室（画架） */
  function artRoom() {
    return `
      <rect width="800" height="450" fill="#FFF1E8"/>
      <rect x="0" y="330" width="800" height="120" fill="#EBD3BB"/>
      <!-- 墙上儿童画 -->
      <rect x="90" y="60" width="130" height="100" rx="10" fill="#fff" stroke="#E0B98F" stroke-width="7"/>
      <circle cx="155" cy="100" r="26" fill="#FFD166"/>
      <path d="M115 145 q40 -34 80 0 Z" fill="#A8E6CF"/>
      <rect x="580" y="60" width="130" height="100" rx="10" fill="#fff" stroke="#E0B98F" stroke-width="7"/>
      <circle cx="645" cy="105" r="24" fill="#FF9AA2"/>
      <rect x="612" y="130" width="66" height="16" rx="6" fill="#B5D8EB"/>
      <!-- 画架 -->
      <path d="M230 300 L260 130 L330 130 L360 300" stroke="#B98A5E" stroke-width="12" fill="none"/>
      <rect x="252" y="150" width="86" height="100" rx="6" fill="#fff" stroke="#D9A87C" stroke-width="6"/>
      <circle cx="295" cy="195" r="26" fill="#FFD166"/>
      <path d="M262 238 q33 -30 66 0 Z" fill="#6BCB77"/>
      <path d="M480 300 L510 150 L580 150 L610 300" stroke="#B98A5E" stroke-width="12" fill="none"/>
      <rect x="502" y="170" width="86" height="100" rx="6" fill="#fff" stroke="#D9A87C" stroke-width="6"/>
      <circle cx="545" cy="215" r="26" fill="#FF9AA2"/>
      <rect x="515" y="250" width="60" height="14" rx="6" fill="#C7CEEA"/>
      <!-- 颜料盒 -->
      <rect x="660" y="290" width="110" height="40" rx="10" fill="#fff" stroke="#E0B98F" stroke-width="5"/>
      <circle cx="685" cy="310" r="9" fill="#FF6B6B"/>
      <circle cx="712" cy="310" r="9" fill="#4D96FF"/>
      <circle cx="739" cy="310" r="9" fill="#FFD166"/>
      <circle cx="766" cy="310" r="9" fill="#6BCB77"/>
    `;
  }

  /* u13 音乐室（钢琴音符） */
  function musicRoom() {
    let notes = '';
    const cols = ['#FF9AA2', '#FFD166', '#A8E6CF', '#B5D8EB', '#C7CEEA'];
    for (let i = 0; i < 5; i++) {
      notes += `<text x="${120 + i * 130}" y="${100 + (i % 2) * 40}" font-size="44" fill="${cols[i]}">♪</text>`;
    }
    return `
      <rect width="800" height="450" fill="#F0EEFA"/>
      <rect x="0" y="330" width="800" height="120" fill="#C4BBD9"/>
      ${notes}
      <!-- 钢琴 -->
      <rect x="200" y="250" width="400" height="90" rx="12" fill="#3D3846"/>
      <rect x="220" y="238" width="360" height="18" rx="8" fill="#524D60"/>
      <!-- 白键 -->
      ${Array.from({length: 12}, (_, i) =>
        `<rect x="${222 + i * 30}" y="262" width="26" height="70" rx="4" fill="#fff"/>`).join('')}
      <!-- 黑键 -->
      ${Array.from({length: 7}, (_, i) =>
        `<rect x="${244 + i * 30}" y="262" width="16" height="42" rx="3" fill="#2A2733"/>`).join('')}
      <!-- 琴凳 -->
      <rect x="330" y="352" width="140" height="24" rx="10" fill="#B98A5E"/>
      <rect x="345" y="376" width="14" height="54" fill="#A87850"/>
      <rect x="441" y="376" width="14" height="54" fill="#A87850"/>
      <!-- 小鼓 -->
      <ellipse cx="680" cy="320" rx="52" ry="18" fill="#FFD1DC"/>
      <rect x="628" y="300" width="104" height="42" fill="#FFB7C5"/>
      <ellipse cx="680" cy="300" rx="52" ry="18" fill="#FFE4EA"/>
      <path d="M650 300 l60 -30 M710 300 l-60 -30" stroke="#E0B98F" stroke-width="5"/>
    `;
  }

  /* u14 操场（跑道大树） */
  function playground() {
    return `
      <rect width="800" height="450" fill="#DFF0FA"/>
      ${cloudIcon(140, 70, 1)}
      ${cloudIcon(600, 55, .8)}
      ${sunIcon(720, 80, 34)}
      <!-- 跑道 -->
      <path d="M0 340 L800 340 L800 450 L0 450 Z" fill="#E07A5F"/>
      <path d="M0 340 L800 340" stroke="#fff" stroke-width="7"/>
      <path d="M0 395 L800 395" stroke="#fff" stroke-width="6" stroke-dasharray="30 24"/>
      <!-- 草地 -->
      <rect x="0" y="300" width="800" height="44" fill="#8FD67A"/>
      <!-- 终点树 -->
      ${treeIcon(690, 200, 1)}
      <!-- 起点树 -->
      ${treeIcon(110, 210, .9)}
      <!-- 足球门 -->
      <path d="M300 330 L300 270 L390 270 L390 330" stroke="#fff" stroke-width="8" fill="none"/>
      <path d="M308 330 L308 278 L382 278" stroke="#B9C7D0" stroke-width="2" fill="none"/>
      <!-- 足球 -->
      <circle cx="500" cy="352" r="30" fill="#fff" stroke="#4A4453" stroke-width="5"/>
      <path d="M500 328 l14 10 l-5 16 h-18 l-5 -16 Z" fill="#3D3846"/>
      <!-- 接力棒 -->
      <rect x="570" y="330" width="70" height="14" rx="7" fill="#FF6B6B" transform="rotate(-18 605 337)"/>
    `;
  }

  /* u15 图书馆（书架） */
  function library() {
    let books1 = '', books2 = '';
    const cols = ['#FF9AA2', '#FFD166', '#A8E6CF', '#B5D8EB', '#C7CEEA', '#FFB7B2'];
    for (let i = 0; i < 6; i++) {
      books1 += `<rect x="${100 + i * 44}" y="${200 - (i % 3) * 8}" width="34" height="${80 + (i % 3) * 8}" rx="4" fill="${cols[i]}"/>`;
      books2 += `<rect x="${420 + i * 44}" y="${190 - (i % 2) * 8}" width="34" height="${90 + (i % 2) * 8}" rx="4" fill="${cols[(i + 3) % 6]}"/>`;
    }
    return `
      <rect width="800" height="450" fill="#F6F1E3"/>
      <rect x="0" y="330" width="800" height="120" fill="#D9C9A8"/>
      <!-- 左书架 -->
      <rect x="90" y="70" width="270" height="240" rx="10" fill="#B98A5E"/>
      <rect x="102" y="82" width="246" height="220" rx="6" fill="#E8C9A8"/>
      ${books1}
      <rect x="102" y="196" width="246" height="10" fill="#B98A5E"/>
      <!-- 右书架 -->
      <rect x="410" y="70" width="270" height="240" rx="10" fill="#B98A5E"/>
      <rect x="422" y="82" width="246" height="220" rx="6" fill="#E8C9A8"/>
      ${books2}
      <rect x="422" y="196" width="246" height="10" fill="#B98A5E"/>
      <!-- 阅读桌 -->
      <rect x="270" y="330" width="260" height="24" rx="10" fill="#D9A87C"/>
      <rect x="290" y="354" width="16" height="76" fill="#C2936B"/>
      <rect x="494" y="354" width="16" height="76" fill="#C2936B"/>
      <!-- 打开的书 -->
      <path d="M340 330 q50 -22 100 0 q-50 -16 -100 0 Z" fill="#fff" stroke="#E0B98F" stroke-width="3"/>
      <!-- 台灯 -->
      <rect x="620" y="300" width="10" height="34" fill="#8B7A6B"/>
      <path d="M600 300 l40 0 l-10 -26 l-20 0 Z" fill="#FFD166"/>
    `;
  }

  /* u16 星星榜（教室） */
  function starBoard() {
    let stars = '';
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 5; c++) {
        stars += `<text x="${170 + c * 115}" y="${120 + r * 60}" font-size="40" text-anchor="middle">⭐</text>`;
      }
    }
    return `
      <rect width="800" height="450" fill="#FFF8E7"/>
      <rect x="0" y="330" width="800" height="120" fill="#EBD9BC"/>
      <!-- 星星榜 -->
      <rect x="120" y="50" width="560" height="220" rx="14" fill="#fff" stroke="#FFC93C" stroke-width="10"/>
      <text x="400" y="90" font-size="24" font-weight="900" fill="#E8A33D" text-anchor="middle">★ STAR CHART ★</text>
      ${stars}
      <!-- 讲台上的金星 -->
      <rect x="330" y="250" width="140" height="80" rx="10" fill="#D9A87C"/>
      <text x="400" y="308" font-size="44" text-anchor="middle">🌟</text>
      <!-- 彩带 -->
      <path d="M60 300 q30 -40 60 0 q30 40 60 0" stroke="#FF9AA2" stroke-width="6" fill="none"/>
      <path d="M620 300 q30 -40 60 0 q30 40 60 0" stroke="#A8E6CF" stroke-width="6" fill="none"/>
    `;
  }

  /* u17 动物园 */
  function zoo() {
    return `
      <rect width="800" height="450" fill="#E8F6E4"/>
      ${cloudIcon(140, 60, 1)}
      ${sunIcon(700, 70, 32)}
      <rect x="0" y="300" width="800" height="150" fill="#B7E4A8"/>
      ${treeIcon(80, 190, .8)}
      ${treeIcon(720, 180, .9)}
      <!-- 围栏 -->
      ${Array.from({length: 9}, (_, i) =>
        `<rect x="${60 + i * 84}" y="290" width="12" height="60" rx="4" fill="#C9936B"/>`).join('')}
      <rect x="40" y="282" width="740" height="12" rx="6" fill="#B98A5E"/>
      <!-- 大象 -->
      <ellipse cx="330" cy="290" rx="86" ry="56" fill="#A9B4C2"/>
      <circle cx="272" cy="252" r="42" fill="#B4BFCC"/>
      <ellipse cx="238" cy="262" rx="16" ry="30" fill="#A9B4C2" transform="rotate(20 238 262)"/>
      <circle cx="262" cy="246" r="4" fill="#3D3846"/>
      <ellipse cx="404" cy="288" rx="22" ry="26" fill="#98A5B5"/>
      ${[380, 404, 428].map(x => `<rect x="${x - 8}" y="330" width="16" height="44" rx="6" fill="#98A5B5"/>`).join('')}
      <!-- 猴子（树上） -->
      <circle cx="700" cy="160" r="20" fill="#B98A5E"/>
      <circle cx="700" cy="140" r="14" fill="#C99A6E"/>
      <path d="M700 180 q-20 20 -6 40" stroke="#B98A5E" stroke-width="8" fill="none"/>
      <!-- 鸟 -->
      <path d="M460 90 q12 -12 24 0 q12 -12 24 0" stroke="#7A8B99" stroke-width="4" fill="none"/>
      <path d="M500 120 q10 -10 20 0 q10 -10 20 0" stroke="#7A8B99" stroke-width="4" fill="none"/>
    `;
  }

  /* u18 超市 */
  function supermarket() {
    return `
      <rect width="800" height="450" fill="#F2F7F2"/>
      <rect x="0" y="330" width="800" height="120" fill="#D5E0D5"/>
      <!-- 货架 -->
      <rect x="80" y="90" width="280" height="230" rx="10" fill="#C7CFC7"/>
      <rect x="94" y="104" width="252" height="66" rx="6" fill="#E8EEE8"/>
      <rect x="94" y="184" width="252" height="66" rx="6" fill="#E8EEE8"/>
      <rect x="94" y="264" width="252" height="42" rx="6" fill="#E8EEE8"/>
      <!-- 商品：牛奶盒 -->
      ${[110, 150, 190, 230, 270].map(x =>
        `<rect x="${x}" y="112" width="26" height="50" rx="4" fill="#B5D8EB"/>
         <rect x="${x}" y="112" width="26" height="12" rx="4" fill="#8FC4DF"/>`).join('')}
      <!-- 面包 -->
      ${[110, 150, 190, 230, 270].map(x =>
        `<ellipse cx="${x + 16}" cy="212" rx="20" ry="14" fill="#E8B48D"/>`).join('')}
      <!-- 苹果篮 -->
      <ellipse cx="220" cy="286" rx="90" ry="20" fill="#C9936B"/>
      ${[150, 190, 230, 270].map(x =>
        `<circle cx="${x}" cy="270" r="14" fill="#FF6B6B"/>`).join('')}
      <!-- 右货架 -->
      <rect x="440" y="120" width="280" height="200" rx="10" fill="#C7CFC7"/>
      <rect x="454" y="134" width="252" height="76" rx="6" fill="#E8EEE8"/>
      <rect x="454" y="224" width="252" height="76" rx="6" fill="#E8EEE8"/>
      ${[470, 510, 550, 590, 630].map(x =>
        `<rect x="${x}" y="146" width="24" height="52" rx="4" fill="#FFD166"/>`).join('')}
      ${[470, 510, 550, 590, 630].map(x =>
        `<circle cx="${x + 12}" cy="262" r="16" fill="#A8E6CF"/>`).join('')}
      <!-- 购物车 -->
      <path d="M620 330 l40 -60 l50 0" stroke="#9AA5A0" stroke-width="10" fill="none"/>
      <path d="M600 276 l90 0 l-14 62 l-62 0 Z" stroke="#8B9791" stroke-width="8" fill="none"/>
      <circle cx="614" cy="352" r="12" fill="#4A4453"/>
      <circle cx="678" cy="352" r="12" fill="#4A4453"/>
    `;
  }

  /* u19 公交站 */
  function busStop() {
    return `
      <rect width="800" height="450" fill="#DFF0FA"/>
      ${cloudIcon(150, 60, .9)}
      ${sunIcon(700, 70, 32)}
      <rect x="0" y="330" width="800" height="120" fill="#C9CDD4"/>
      <path d="M0 400 L800 400" stroke="#fff" stroke-width="7" stroke-dasharray="34 26"/>
      <!-- 公交车 -->
      <rect x="200" y="190" width="420" height="150" rx="26" fill="#FFD166"/>
      <rect x="190" y="210" width="440" height="60" rx="20" fill="#FFE09A"/>
      <!-- 车窗 -->
      <rect x="220" y="222" width="90" height="40" rx="8" fill="#BFE4F5"/>
      <rect x="330" y="222" width="90" height="40" rx="8" fill="#BFE4F5"/>
      <rect x="440" y="222" width="90" height="40" rx="8" fill="#BFE4F5"/>
      <!-- 车门 -->
      <rect x="552" y="222" width="56" height="118" rx="8" fill="#BFE4F5" stroke="#E0A72C" stroke-width="4"/>
      <!-- 车轮 -->
      <circle cx="290" cy="352" r="30" fill="#3D3846"/><circle cx="290" cy="352" r="13" fill="#D5D0DC"/>
      <circle cx="540" cy="352" r="30" fill="#3D3846"/><circle cx="540" cy="352" r="13" fill="#D5D0DC"/>
      <!-- 车灯 -->
      <circle cx="212" cy="312" r="8" fill="#FFF3C4"/>
      <circle cx="608" cy="312" r="8" fill="#FFF3C4"/>
      <!-- 站牌 -->
      <rect x="90" y="200" width="10" height="130" fill="#9AA5A0"/>
      <rect x="60" y="160" width="72" height="46" rx="8" fill="#4D96FF"/>
      <text x="96" y="192" font-size="30" font-weight="900" fill="#fff" text-anchor="middle">BUS</text>
      <!-- 站台顶棚 -->
      <rect x="650" y="150" width="130" height="14" rx="7" fill="#A8E6CF"/>
      <rect x="662" y="164" width="10" height="166" fill="#8FD67A"/>
      <rect x="758" y="164" width="10" height="166" fill="#8FD67A"/>
    `;
  }

  /* u20 医院 */
  function hospital() {
    return `
      <rect width="800" height="450" fill="#EAF6F6"/>
      <rect x="0" y="330" width="800" height="120" fill="#CFE3E3"/>
      <!-- 十字旗 -->
      <rect x="380" y="60" width="8" height="60" fill="#9AA5A0"/>
      <rect x="368" y="66" width="32" height="10" fill="#FF6B6B"/>
      <rect x="379" y="55" width="10" height="32" fill="#FF6B6B"/>
      <!-- 病床 -->
      <rect x="180" y="240" width="440" height="26" rx="10" fill="#fff" stroke="#D5E0E0" stroke-width="4"/>
      <rect x="160" y="216" width="70" height="50" rx="14" fill="#fff" stroke="#D5E0E0" stroke-width="4"/>
      <rect x="230" y="222" width="110" height="44" rx="14" fill="#B5D8EB"/>
      <rect x="345" y="222" width="110" height="44" rx="14" fill="#B5D8EB"/>
      <rect x="460" y="222" width="150" height="44" rx="14" fill="#A8E6CF"/>
      <rect x="196" y="266" width="16" height="64" fill="#B9C7D0"/>
      <rect x="588" y="266" width="16" height="64" fill="#B9C7D0"/>
      <!-- 床头柜 -->
      <rect x="640" y="240" width="100" height="90" rx="10" fill="#D9A87C"/>
      <rect x="655" y="260" width="70" height="20" rx="6" fill="#E8B48D"/>
      <!-- 药瓶 -->
      <rect x="665" y="200" width="26" height="42" rx="8" fill="#FFD166"/>
      <rect x="665" y="196" width="26" height="10" rx="4" fill="#E0A72C"/>
      <rect x="700" y="212" width="22" height="30" rx="7" fill="#FF9AA2"/>
      <!-- 输液架 -->
      <rect x="120" y="180" width="8" height="150" fill="#B9C7D0"/>
      <path d="M124 184 q60 -20 90 10" stroke="#B9C7D0" stroke-width="6" fill="none"/>
      <rect x="206" y="192" width="24" height="34" rx="6" fill="#fff" stroke="#D5E0E0" stroke-width="3"/>
      <rect x="214" y="210" width="8" height="30" fill="#B5D8EB"/>
    `;
  }

  /* u21 生日派对 */
  function birthday() {
    const balloons = [
      { x: 130, y: 130, c: '#FF6B6B' }, { x: 230, y: 90, c: '#FFD166' },
      { x: 620, y: 110, c: '#4D96FF' }, { x: 700, y: 150, c: '#B983FF' }
    ];
    let bs = '';
    balloons.forEach(b => {
      bs += `
        <line x1="${b.x}" y1="${b.y + 40}" x2="${b.x + 10}" y2="290" stroke="#D8B98C" stroke-width="3"/>
        <circle cx="${b.x}" cy="${b.y}" r="40" fill="${b.c}"/>
        <ellipse cx="${b.x - 12}" cy="${b.y - 14}" rx="12" ry="8" fill="#fff" opacity=".5" transform="rotate(-30 ${b.x} ${b.y})"/>
        <path d="M${b.x} ${b.y + 40} l8 14 l-16 0 Z" fill="${b.c}"/>`;
    });
    return `
      <rect width="800" height="450" fill="#FFF0F5"/>
      <rect x="0" y="330" width="800" height="120" fill="#F5D3DE"/>
      ${bs}
      <!-- 彩旗 -->
      <path d="M40 60 q180 60 360 0 q180 60 360 0" stroke="#C7CEEA" stroke-width="3" fill="none"/>
      ${[80, 160, 240, 320, 400, 480, 560, 640, 720].map((x, i) => {
        const c = ['#FF9AA2', '#FFD166', '#A8E6CF', '#B5D8EB'][i % 4];
        const y = 60 + (i % 3) * 22;
        return `<path d="M${x} ${y} l20 0 l-10 26 Z" fill="${c}"/>`;
      }).join('')}
      <!-- 桌子 -->
      <rect x="230" y="300" width="340" height="26" rx="12" fill="#D9A87C"/>
      <rect x="265" y="326" width="18" height="70" fill="#C2936B"/>
      <rect x="517" y="326" width="18" height="70" fill="#C2936B"/>
      <!-- 蛋糕 -->
      <ellipse cx="400" cy="298" rx="80" ry="22" fill="#FFE4EA"/>
      <path d="M330 298 q0 -60 70 -60 q70 0 70 60 Z" fill="#FFB7C5"/>
      <path d="M330 278 q70 -26 140 0" stroke="#fff" stroke-width="6" fill="none"/>
      <!-- 蜡烛 -->
      <rect x="392" y="222" width="8" height="22" rx="3" fill="#4D96FF"/>
      <rect x="404" y="222" width="8" height="22" rx="3" fill="#FF6B6B"/>
      <path d="M396 218 q4 -10 0 -16 q6 8 0 16 Z" fill="#FFD166"/>
      <path d="M408 218 q4 -10 0 -16 q6 8 0 16 Z" fill="#FFD166"/>
      <!-- 礼物盒 -->
      <rect x="560" y="262" width="60" height="44" rx="8" fill="#A8E6CF"/>
      <rect x="586" y="262" width="8" height="44" fill="#5CBE97"/>
      <rect x="556" y="256" width="68" height="10" rx="4" fill="#5CBE97"/>
    `;
  }

  /* u22 公园野餐 */
  function picnic() {
    return `
      <rect width="800" height="450" fill="#EAF6FF"/>
      ${cloudIcon(140, 60, 1)}
      ${sunIcon(700, 70, 32)}
      <rect x="0" y="310" width="800" height="140" fill="#8FD67A"/>
      <!-- 大树 -->
      ${treeIcon(120, 170, 1.1)}
      ${treeIcon(690, 180, .95)}
      <!-- 野餐垫 -->
      <ellipse cx="400" cy="390" rx="230" ry="52" fill="#FF9AA2"/>
      <ellipse cx="400" cy="390" rx="200" ry="42" fill="#FFC4CB"/>
      ${Array.from({length: 8}, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return `<circle cx="${400 + Math.cos(a) * 150}" cy="${390 + Math.sin(a) * 32}" r="7" fill="#fff" opacity=".7"/>`;
      }).join('')}
      <!-- 野餐篮 -->
      <rect x="330" y="336" width="90" height="52" rx="12" fill="#D9A87C"/>
      <path d="M330 350 q45 -30 90 0" stroke="#B98A5E" stroke-width="7" fill="none"/>
      <rect x="340" y="330" width="70" height="12" rx="6" fill="#E8B48D"/>
      <!-- 三明治 -->
      <path d="M450 352 l50 -14 l50 14 l-50 16 Z" fill="#F5D98C" stroke="#D9B96C" stroke-width="3"/>
      <!-- 果汁盒 -->
      <rect x="540" y="330" width="34" height="50" rx="6" fill="#FF9AA2"/>
      <rect x="540" y="330" width="34" height="12" rx="6" fill="#FF7B8A"/>
      <!-- 小狗 -->
      <circle cx="200" cy="378" r="20" fill="#E8B98C"/>
      <circle cx="192" cy="360" r="13" fill="#F0C99C"/>
      <ellipse cx="196" cy="368" rx="6" ry="5" fill="#5A4A3A"/>
      <!-- 小花 -->
      ${[300, 500, 620, 660].map(x => `<circle cx="${x}" cy="360" r="7" fill="#fff"/><circle cx="${x}" cy="360" r="3" fill="#FFD166"/>`).join('')}
    `;
  }

  /* u23 游泳池 */
  function pool() {
    return `
      <rect width="800" height="450" fill="#EAF6FF"/>
      ${sunIcon(110, 70, 34)}
      ${cloudIcon(600, 55, .9)}
      <rect x="0" y="300" width="800" height="150" fill="#F0E4D2"/>
      <!-- 池水 -->
      <rect x="80" y="240" width="640" height="170" rx="30" fill="#7FC8E8"/>
      <rect x="80" y="240" width="640" height="40" rx="30" fill="#A5DBF2"/>
      <!-- 水波 -->
      <path d="M120 320 q30 -14 60 0 q30 14 60 0 q30 -14 60 0 q30 14 60 0" stroke="#fff" stroke-width="5" fill="none" opacity=".8"/>
      <path d="M400 360 q30 -14 60 0 q30 14 60 0 q30 -14 60 0" stroke="#fff" stroke-width="5" fill="none" opacity=".7"/>
      <path d="M180 390 q30 -14 60 0 q30 14 60 0 q30 -14 60 0" stroke="#fff" stroke-width="5" fill="none" opacity=".6"/>
      <!-- 泳道浮球 -->
      ${[140, 260, 380, 500, 620].map(x => `<circle cx="${x}" cy="256" r="14" fill="#FF9AA2"/>`).join('')}
      <!-- 游泳圈 -->
      <circle cx="300" cy="330" r="52" fill="none" stroke="#FF6B6B" stroke-width="18"/>
      <circle cx="300" cy="330" r="52" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="14 12"/>
      <!-- 小鱼 -->
      <ellipse cx="560" cy="300" rx="24" ry="14" fill="#FFD166"/>
      <path d="M584 300 l18 -10 l0 20 Z" fill="#FFD166"/>
      <circle cx="550" cy="296" r="3" fill="#3D3846"/>
      <ellipse cx="640" cy="350" rx="18" ry="11" fill="#FF9AA2"/>
      <path d="M658 350 l14 -8 l0 16 Z" fill="#FF9AA2"/>
      <!-- 池边梯子 -->
      <path d="M700 240 l0 60 M726 240 l0 60 M700 262 l26 0 M700 284 l26 0" stroke="#B9C7D0" stroke-width="6"/>
    `;
  }

  /* u24 春天 */
  function spring() {
    let petals = '';
    for (let i = 0; i < 10; i++) {
      petals += `<circle cx="${60 + i * 82}" cy="${80 + (i % 3) * 40}" r="6" fill="#FFB7C5" opacity=".8"/>`;
    }
    return `
      <rect width="800" height="450" fill="#FFF0F6"/>
      ${sunIcon(700, 70, 32)}
      ${cloudIcon(140, 60, .9)}
      <rect x="0" y="310" width="800" height="140" fill="#B7E4A8"/>
      <!-- 樱花树 -->
      <rect x="180" y="200" width="24" height="120" fill="#B98A5E"/>
      <circle cx="192" cy="180" r="80" fill="#FFB7C5"/>
      <circle cx="130" cy="210" r="52" fill="#FFC9D6"/>
      <circle cx="254" cy="210" r="52" fill="#FFC9D6"/>
      <circle cx="192" cy="130" r="50" fill="#FFD6E0"/>
      ${petals}
      <!-- 绿树 -->
      ${treeIcon(660, 190, .95)}
      <!-- 风筝 -->
      <path d="M420 90 l46 40 l-46 40 l-46 -40 Z" fill="#FFD166" stroke="#E0A72C" stroke-width="4"/>
      <path d="M420 90 l0 80 M374 130 l92 0" stroke="#E0A72C" stroke-width="3"/>
      <path d="M420 170 q20 30 -10 50 q30 10 50 -10" stroke="#FF9AA2" stroke-width="4" fill="none"/>
      <!-- 小花 -->
      ${[100, 300, 500, 560, 740].map((x, i) =>
        `<circle cx="${x}" cy="${360 + (i % 2) * 30}" r="9" fill="#fff"/><circle cx="${x}" cy="${360 + (i % 2) * 30}" r="4" fill="#FFD166"/>`).join('')}
      <!-- 小鸟 -->
      <path d="M520 100 q12 -12 24 0 q12 -12 24 0" stroke="#B98A5E" stroke-width="4" fill="none"/>
      <path d="M580 140 q10 -10 20 0 q10 -10 20 0" stroke="#B98A5E" stroke-width="4" fill="none"/>
    `;
  }

  /* u25 夏天海滩 */
  function summer() {
    return `
      <rect width="800" height="450" fill="#FFEFD9"/>
      ${sunIcon(400, 80, 44)}
      <!-- 海 -->
      <rect x="0" y="250" width="800" height="130" fill="#5FB8D9"/>
      <path d="M0 250 q100 -18 200 0 q100 18 200 0 q100 -18 200 0 q100 18 200 0" stroke="#A5DBF2" stroke-width="7" fill="none"/>
      <path d="M0 300 q100 -14 200 0 q100 14 200 0 q100 -14 200 0 q100 14 200 0" stroke="#A5DBF2" stroke-width="6" fill="none" opacity=".7"/>
      <!-- 沙滩 -->
      <rect x="0" y="370" width="800" height="80" fill="#F5D98C"/>
      ${Array.from({length: 20}, (_, i) => `<circle cx="${30 + i * 40}" cy="${380 + (i % 4) * 16}" r="3" fill="#E0C26C"/>`).join('')}
      <!-- 遮阳伞 -->
      <rect x="150" y="230" width="10" height="150" fill="#B98A5E"/>
      <path d="M60 236 q95 -80 190 0 Z" fill="#FF6B6B"/>
      <path d="M60 236 q48 -40 95 0 q48 -40 95 0" stroke="#fff" stroke-width="6" fill="none"/>
      <!-- 冰淇淋 */
      <path d="M600 300 l-30 80 l90 0 Z" fill="#E8B48D"/>
      <circle cx="585" cy="288" r="28" fill="#FFB7C5"/>
      <circle cx="625" cy="272" r="26" fill="#A8E6CF"/>
      <circle cx="600" cy="240" r="22" fill="#FFD166"/>
      <!-- 沙堡 -->
      <rect x="380" y="380" width="90" height="50" rx="6" fill="#E8C98C"/>
      ${[380, 410, 440].map(x => `<rect x="${x}" y="368" width="22" height="16" rx="4" fill="#E8C98C"/>`).join('')}
      <path d="M425 368 l0 -22 l22 22 Z" fill="#E8C98C"/>
      <!-- 海星 -->
      <path d="M250 420 l10 -22 l10 22 l22 8 l-16 16 l4 22 l-20 -12 l-20 12 l4 -22 l-16 -16 Z" fill="#FF8B6B"/>
    `;
  }

  /* u26 秋天 */
  function autumn() {
    let leaves = '';
    const cols = ['#FF9AA2', '#FFB347', '#E07A5F', '#D9A87C'];
    for (let i = 0; i < 12; i++) {
      const x = 60 + i * 62, y = 60 + (i * 37) % 120;
      leaves += `<ellipse cx="${x}" cy="${y}" rx="14" ry="9" fill="${cols[i % 4]}" transform="rotate(${i * 40} ${x} ${y})"/>`;
    }
    return `
      <rect width="800" height="450" fill="#FFF4E0"/>
      ${cloudIcon(150, 55, .9)}
      <rect x="0" y="310" width="800" height="140" fill="#E8C98C"/>
      <!-- 秋天的树 -->
      <rect x="300" y="190" width="26" height="130" fill="#B98A5E"/>
      <circle cx="313" cy="170" r="76" fill="#FFB347"/>
      <circle cx="255" cy="200" r="50" fill="#FFC966"/>
      <circle cx="371" cy="200" r="50" fill="#E07A5F"/>
      ${treeIcon(640, 200, .8)}
      ${leaves}
      <!-- 落叶堆 -->
      <ellipse cx="200" cy="400" rx="90" ry="26" fill="#E07A5F"/>
      <ellipse cx="500" cy="410" rx="100" ry="28" fill="#FFB347"/>
      <!-- 小朋友的篮子 -->
      <ellipse cx="640" cy="390" rx="46" ry="18" fill="#C9936B"/>
      <path d="M640 372 q-30 -22 -8 -34" stroke="#B98A5E" stroke-width="6" fill="none"/>
      ${[620, 640, 660].map(x => `<ellipse cx="${x}" cy="376" rx="12" ry="8" fill="#FF9AA2"/>`).join('')}
      <!-- 松鼠 -->
      <circle cx="420" cy="330" r="18" fill="#C97B4A"/>
      <circle cx="412" cy="312" r="12" fill="#D98E5F"/>
      <path d="M434 322 q26 -8 20 22 q-10 -14 -20 -22 Z" fill="#C97B4A"/>
      <circle cx="408" cy="310" r="2.5" fill="#3D3846"/>
    `;
  }

  /* u27 冬天雪人 */
  function winter() {
    let flakes = '';
    for (let i = 0; i < 14; i++) {
      flakes += `<circle cx="${40 + i * 56}" cy="${40 + (i * 43) % 130}" r="${5 + (i % 3) * 2}" fill="#fff" opacity=".9"/>`;
    }
    return `
      <rect width="800" height="450" fill="#D6EAF5"/>
      ${flakes}
      <!-- 远山 -->
      <path d="M0 300 L160 190 L320 300 Z" fill="#B8D4E8"/>
      <path d="M300 300 L480 170 L660 300 Z" fill="#C9DFEE"/>
      <path d="M560 300 L720 200 L800 300 Z" fill="#B8D4E8"/>
      <!-- 雪地 -->
      <rect x="0" y="300" width="800" height="150" fill="#F4FAFF"/>
      <path d="M0 300 q200 -20 400 0 q200 20 400 0" stroke="#fff" stroke-width="8" fill="none"/>
      <!-- 雪人 -->
      <circle cx="400" cy="270" r="62" fill="#fff"/>
      <circle cx="400" cy="352" r="82" fill="#fff"/>
      <circle cx="378" cy="258" r="6" fill="#3D3846"/>
      <circle cx="422" cy="258" r="6" fill="#3D3846"/>
      <path d="M380 280 q20 16 40 0" stroke="#E07A5F" stroke-width="5" fill="none"/>
      <path d="M400 272 l-24 -8 l24 -8 l24 8 l-24 8" fill="#FF8B6B"/>
      <!-- 帽子 -->
      <rect x="366" y="196" width="68" height="12" rx="4" fill="#3D3846"/>
      <rect x="376" y="160" width="48" height="40" rx="6" fill="#4A4453"/>
      <!-- 围巾 -->
      <path d="M368 300 q32 22 64 0" stroke="#FF6B6B" stroke-width="12" fill="none"/>
      <rect x="424" y="300" width="16" height="52" rx="6" fill="#FF6B6B" transform="rotate(14 432 326)"/>
      <!-- 树枝手 -->
      <path d="M318 300 l-50 -30 M268 270 l-16 -8 M268 270 l-4 18" stroke="#B98A5E" stroke-width="7" fill="none"/>
      <path d="M482 300 l50 -30 M530 270 l16 -8 M530 270 l4 18" stroke="#B98A5E" stroke-width="7" fill="none"/>
      <!-- 松树雪 -->
      <path d="M110 300 l40 -90 l40 90 Z" fill="#5E9E6E"/>
      <path d="M110 300 l40 -90 l40 90 Z" fill="#fff" opacity=".28"/>
      <rect x="142" y="300" width="16" height="30" fill="#B98A5E"/>
    `;
  }

  /* u28 绘画墙（爱好） */
  function artWall() {
    const pics = [
      { x: 90,  y: 70,  w: 150, h: 110, c: '#FFD1DC', d: '<circle cx="165" cy="115" r="28" fill="#FFD166"/><path d="M105 165 q60 -46 120 0 Z" fill="#A8E6CF"/>' },
      { x: 270, y: 60,  w: 150, h: 110, c: '#D8ECFB', d: '<rect x="330" y="90" width="60" height="60" rx="10" fill="#FF9AA2"/><path d="M290 150 l60 -50 l50 50 Z" fill="#6BCB77"/>' },
      { x: 450, y: 70,  w: 150, h: 110, c: '#FFF3D6', d: '<circle cx="525" cy="118" r="32" fill="#B983FF"/><ellipse cx="525" cy="155" rx="46" ry="12" fill="#C7CEEA"/>' },
      { x: 600, y: 120, w: 140, h: 100, c: '#E9FBF2', d: '<circle cx="670" cy="162" r="26" fill="#FF8B6B"/><path d="M636 205 q34 -28 68 0 Z" fill="#8FC4DF"/>' }
    ];
    let frames = '';
    pics.forEach(p => {
      frames += `
        <rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="10" fill="#fff" stroke="#E0B98F" stroke-width="7"/>
        ${p.d}`;
    });
    return `
      <rect width="800" height="450" fill="#FFF6F0"/>
      <rect x="0" y="330" width="800" height="120" fill="#EFD9C8"/>
      ${frames}
      <!-- 蜡笔 -->
      ${[100, 140, 180, 220, 260, 300, 340].map((x, i) => {
        const c = ['#FF6B6B', '#FFD166', '#6BCB77', '#4D96FF', '#B983FF', '#FF8B6B', '#4A4453'][i];
        return `<rect x="${x}" y="${300 - (i % 2) * 10}" width="26" height="70" rx="6" fill="${c}"/>
                <path d="M${x} ${300 - (i % 2) * 10} l13 -14 l13 14 Z" fill="${c}"/>`;
      }).join('')}
      <!-- 画笔桶 -->
      <rect x="620" y="270" width="70" height="62" rx="10" fill="#B5D8EB"/>
      <path d="M640 270 l-8 -60 M655 270 l0 -70 M670 270 l8 -60" stroke="#B98A5E" stroke-width="6"/>
      <circle cx="632" cy="206" r="8" fill="#FF6B6B"/>
      <circle cx="655" cy="198" r="8" fill="#4D96FF"/>
      <circle cx="678" cy="206" r="8" fill="#6BCB77"/>
      <!-- 画架 -->
      <path d="M450 380 L470 340 L530 340 L550 380" stroke="#B98A5E" stroke-width="8" fill="none"/>
    `;
  }

  /* u29 小狗（宠物） */
  function dogHouse() {
    return `
      <rect width="800" height="450" fill="#EAF6E8"/>
      ${cloudIcon(140, 55, .9)}
      ${sunIcon(700, 70, 32)}
      <rect x="0" y="310" width="800" height="140" fill="#B7E4A8"/>
      <!-- 狗屋 -->
      <path d="M540 320 L610 240 L680 320 Z" fill="#E07A5F"/>
      <rect x="558" y="300" width="104" height="60" rx="8" fill="#F0A868"/>
      <ellipse cx="610" cy="330" rx="26" ry="30" fill="#5A3A2A"/>
      <!-- 小狗 -->
      <ellipse cx="300" cy="330" rx="76" ry="46" fill="#E8B98C"/>
      <circle cx="238" cy="296" r="38" fill="#F0C99C"/>
      <ellipse cx="206" cy="278" rx="14" ry="22" fill="#D9A87C"/>
      <ellipse cx="268" cy="278" rx="14" ry="22" fill="#D9A87C"/>
      <circle cx="228" cy="292" r="5" fill="#3D3846"/>
      <circle cx="252" cy="292" r="5" fill="#3D3846"/>
      <ellipse cx="240" cy="312" rx="10" ry="8" fill="#5A4A3A"/>
      <path d="M234 320 q6 8 12 0" stroke="#5A4A3A" stroke-width="3" fill="none"/>
      <ellipse cx="240" cy="326" rx="5" ry="4" fill="#FF8B94"/>
      <!-- 腿和尾巴 -->
      ${[250, 290, 330, 366].map(x => `<rect x="${x - 9}" y="352" width="18" height="46" rx="8" fill="#E8B98C"/>`).join('')}
      <path d="M376 322 q34 -16 26 22" stroke="#E8B98C" stroke-width="14" fill="none" stroke-linecap="round"/>
      <!-- 项圈 -->
      <path d="M228 322 q12 14 24 0" stroke="#FF6B6B" stroke-width="8" fill="none"/>
      <circle cx="240" cy="332" r="7" fill="#FFD166"/>
      <!-- 食盆 -->
      <ellipse cx="440" cy="372" rx="40" ry="14" fill="#B5D8EB"/>
      <ellipse cx="440" cy="368" rx="30" ry="9" fill="#D8ECF7"/>
      <!-- 骨头 -->
      <rect x="470" y="330" width="60" height="12" rx="6" fill="#fff" transform="rotate(-16 500 336)"/>
      <!-- 骨头 -->
      <path d="M120 350 l0 -30 M120 320 l-8 -8 M120 320 l8 -8" stroke="#B98A5E" stroke-width="6"/>
    `;
  }

  /* u30 找铅笔（课桌特写） */
  function lostPencil() {
    return `
      <rect width="800" height="450" fill="#FDF3E0"/>
      <rect x="0" y="330" width="800" height="120" fill="#E5CBA8"/>
      <!-- 课桌（特写） -->
      <rect x="150" y="220" width="500" height="34" rx="12" fill="#F0C08A"/>
      <rect x="180" y="254" width="22" height="90" fill="#D9A87C"/>
      <rect x="598" y="254" width="22" height="90" fill="#D9A87C"/>
      <!-- 桌肚 -->
      <rect x="220" y="254" width="360" height="70" rx="10" fill="#E8B48D"/>
      <!-- 书包在桌肚 -->
      <rect x="250" y="262" width="120" height="56" rx="12" fill="#FF9AA2"/>
      <path d="M250 288 q60 -26 120 0" stroke="#E57C93" stroke-width="6" fill="none"/>
      <!-- 桌上书本 -->
      <rect x="300" y="196" width="110" height="24" rx="6" fill="#A8E6CF"/>
      <rect x="310" y="176" width="90" height="22" rx="6" fill="#B5D8EB"/>
      <!-- 橡皮 -->
      <rect x="470" y="204" width="46" height="18" rx="6" fill="#fff" stroke="#E0B98F" stroke-width="3"/>
      <!-- 椅子 -->
      <rect x="360" y="330" width="90" height="22" rx="8" fill="#D9A87C"/>
      <rect x="372" y="352" width="16" height="66" fill="#C2936B"/>
      <rect x="422" y="352" width="16" height="66" fill="#C2936B"/>
      <rect x="352" y="300" width="106" height="34" rx="8" fill="#E8B48D"/>
      <!-- 椅下铅笔（主角） -->
      <rect x="392" y="386" width="90" height="12" rx="6" fill="#FFD166" transform="rotate(8 437 392)"/>
      <path d="M482 392 l22 6 l-22 6 Z" fill="#F0D9A8" transform="rotate(8 493 395)"/>
      <path d="M504 398 l12 3 l-12 3 Z" fill="#5A4A3A" transform="rotate(8 510 399)"/>
      <!-- 问号 -->
      <text x="180" y="150" font-size="60" font-weight="900" fill="#FFB7C5">?</text>
      <text x="620" y="140" font-size="46" font-weight="900" fill="#FFD166">?</text>
    `;
  }

  /* u31 打碎的杯子 */
  function brokenCup() {
    return `
      <rect width="800" height="450" fill="#FFF0F0"/>
      <rect x="0" y="330" width="800" height="120" fill="#EFD3D3"/>
      <!-- 桌子 -->
      <rect x="180" y="260" width="440" height="28" rx="12" fill="#D9A87C"/>
      <rect x="220" y="288" width="20" height="76" fill="#C2936B"/>
      <rect x="560" y="288" width="20" height="76" fill="#C2936B"/>
      <!-- 碎杯子片 -->
      <path d="M300 380 l30 -34 l20 30 l-24 22 Z" fill="#B5D8EB" stroke="#8FC4DF" stroke-width="3"/>
      <path d="M360 386 l22 -20 l18 22 l-30 8 Z" fill="#B5D8EB" stroke="#8FC4DF" stroke-width="3"/>
      <path d="M410 378 l26 -12 l10 26 l-28 6 Z" fill="#D8ECF7" stroke="#8FC4DF" stroke-width="3"/>
      <path d="M330 350 l16 -10 l8 14 l-18 6 Z" fill="#D8ECF7"/>
      <circle cx="395" cy="356" r="6" fill="#8FC4DF"/>
      <circle cx="440" cy="380" r="5" fill="#8FC4DF"/>
      <!-- 水渍 -->
      <ellipse cx="380" cy="392" rx="90" ry="18" fill="#B5D8EB" opacity=".45"/>
      <!-- 拖把/扫帚 -->
      <rect x="620" y="240" width="10" height="150" rx="4" fill="#B98A5E"/>
      <path d="M600 386 l50 0 l-8 -26 l-34 0 Z" fill="#E8B48D"/>
      ${[608, 622, 636, 650].map(x => `<rect x="${x}" y="360" width="6" height="26" rx="3" fill="#D9A87C"/>`).join('')}
      <!-- 桌上的完整杯子（对比） -->
      <rect x="250" y="222" width="44" height="38" rx="8" fill="#fff" stroke="#EBD9C8" stroke-width="4"/>
      <path d="M294 234 q20 8 0 22" stroke="#EBD9C8" stroke-width="6" fill="none"/>
      <!-- 心形（道歉氛围） -->
      <text x="500" y="180" font-size="40">💗</text>
    `;
  }

  /* u32 厨房摆餐具 */
  function kitchen() {
    return `
      <rect width="800" height="450" fill="#FFF4EC"/>
      <rect x="0" y="330" width="800" height="120" fill="#E5CBA8"/>
      <!-- 橱柜 -->
      <rect x="80" y="80" width="250" height="180" rx="12" fill="#E8C9A8"/>
      <line x1="80" y1="170" x2="330" y2="170" stroke="#CEA97F" stroke-width="5"/>
      <circle cx="190" cy="212" r="7" fill="#A8876A"/>
      <circle cx="220" cy="212" r="7" fill="#A8876A"/>
      <circle cx="190" cy="126" r="7" fill="#A8876A"/>
      <circle cx="220" cy="126" r="7" fill="#A8876A"/>
      <!-- 餐桌 -->
      <rect x="380" y="250" width="380" height="30" rx="14" fill="#D9A87C"/>
      <rect x="410" y="280" width="22" height="90" fill="#C2936B"/>
      <rect x="708" y="280" width="22" height="90" fill="#C2936B"/>
      <!-- 三个位置 -->
      ${[440, 570, 700].map(x => `
        <ellipse cx="${x}" cy="250" rx="42" ry="14" fill="#fff" stroke="#F0DDCB" stroke-width="3"/>
        <rect x="${x - 22}" y="216" width="44" height="18" rx="6" fill="#FFE4EA"/>
        <rect x="${x - 16}" y="196" width="14" height="20" rx="4" fill="#B5D8EB"/>
        <rect x="${x + 2}" y="196" width="14" height="20" rx="4" fill="#A8E6CF"/>`).join('')}
      <!-- 中间菜盘 -->
      <ellipse cx="570" cy="248" rx="60" ry="20" fill="#fff" stroke="#F0DDCB" stroke-width="4"/>
      <ellipse cx="570" cy="244" rx="42" ry="13" fill="#FFD166"/>
      <circle cx="558" cy="242" r="6" fill="#FF9AA2"/>
      <circle cx="580" cy="246" r="5" fill="#A8E6CF"/>
    `;
  }

  /* u33 睡前故事角 */
  function storyCorner() {
    return `
      <rect width="800" height="450" fill="#3D3A5C"/>
      <!-- 星空窗 -->
      <rect x="480" y="50" width="260" height="200" rx="16" fill="#2B2949" stroke="#fff" stroke-width="11"/>
      <circle cx="540" cy="100" r="4" fill="#fff"/><circle cx="600" cy="80" r="3" fill="#fff"/>
      <circle cx="660" cy="120" r="4" fill="#fff"/><circle cx="560" cy="160" r="3" fill="#fff"/>
      <circle cx="700" cy="90" r="3" fill="#fff"/><circle cx="620" cy="190" r="4" fill="#fff"/>
      <circle cx="640" cy="105" r="30" fill="#FFE9A8"/>
      <circle cx="628" cy="98" r="7" fill="#F5D98C" opacity=".6"/>
      <circle cx="652" cy="118" r="5" fill="#F5D98C" opacity=".6"/>
      <!-- 书架 -->
      <rect x="80" y="90" width="280" height="230" rx="10" fill="#5C5784"/>
      <rect x="94" y="104" width="252" height="202" rx="6" fill="#6E6894"/>
      ${[0, 1, 2, 3, 4, 5].map(i => {
        const x = 108 + i * 40, y = 130 + (i % 2) * 90;
        const c = ['#FF9AA2', '#FFD166', '#A8E6CF', '#B5D8EB', '#C7CEEA', '#FFB7B2'][i];
        return `<rect x="${x}" y="${y}" width="30" height="72" rx="4" fill="${c}"/>`;
      }).join('')}
      <!-- 摇椅 -->
      <path d="M120 400 q40 -50 90 0" stroke="#B98A5E" stroke-width="10" fill="none"/>
      <rect x="150" y="330" width="130" height="24" rx="10" fill="#D9A87C"/>
      <rect x="160" y="280" width="110" height="56" rx="14" fill="#E8B48D"/>
      <rect x="168" y="354" width="14" height="52" fill="#B98A5E" transform="rotate(-12 175 380)"/>
      <rect x="250" y="354" width="14" height="52" fill="#B98A5E" transform="rotate(12 257 380)"/>
      <!-- 台灯 -->
      <rect x="400" y="290" width="10" height="50" fill="#8B85B8"/>
      <path d="M378 290 l54 0 l-12 -30 l-30 0 Z" fill="#FFD166"/>
      <ellipse cx="405" cy="292" rx="40" ry="10" fill="#FFD166" opacity=".25"/>
      <!-- 打开的故事书 -->
      <path d="M330 352 q40 -18 80 0 q40 -18 80 0 l0 14 q-40 -16 -80 0 q-40 16 -80 0 Z" fill="#fff" stroke="#E0B98F" stroke-width="3"/>
      <!-- 地毯 -->
      <ellipse cx="400" cy="415" rx="240" ry="30" fill="#4A4570"/>
    `;
  }

  /* u34 过马路 */
  function crossing() {
    return `
      <rect width="800" height="450" fill="#DFF0FA"/>
      ${cloudIcon(150, 55, .9)}
      <!-- 马路 -->
      <rect x="0" y="300" width="800" height="150" fill="#8B8F96"/>
      <!-- 斑马线 -->
      ${[60, 130, 200, 270, 340, 410, 480, 550, 620, 690].map(x =>
        `<rect x="${x}" y="320" width="44" height="110" rx="6" fill="#fff" opacity=".92"/>`).join('')}
      <!-- 红绿灯 -->
      <rect x="80" y="60" width="14" height="240" fill="#5A6068"/>
      <rect x="52" y="60" width="70" height="170" rx="16" fill="#3D3846"/>
      <circle cx="87" cy="105" r="24" fill="#FF4D4D"/>
      <circle cx="87" cy="155" r="24" fill="#FFD166" opacity=".22"/>
      <circle cx="87" cy="205" r="24" fill="#6BCB77" opacity=".22"/>
      <!-- 对面建筑 -->
      <rect x="560" y="130" width="200" height="170" rx="10" fill="#F0E4D2"/>
      <rect x="585" y="160" width="46" height="46" rx="6" fill="#BFE4F5"/>
      <rect x="650" y="160" width="46" height="46" rx="6" fill="#BFE4F5"/>
      <rect x="585" y="225" width="46" height="46" rx="6" fill="#BFE4F5"/>
      <rect x="650" y="225" width="46" height="46" rx="6" fill="#BFE4F5"/>
      <!-- 树 -->
      ${treeIcon(400, 240, .7)}
      <!-- 小车（远处） -->
      <rect x="700" y="380" width="80" height="34" rx="12" fill="#FF9AA2"/>
      <rect x="716" y="368" width="48" height="18" rx="8" fill="#FFC4CB"/>
      <circle cx="718" cy="416" r="10" fill="#3D3846"/>
      <circle cx="764" cy="416" r="10" fill="#3D3846"/>
    `;
  }

  /* u35 玩具火车 */
  function toyTrain() {
    return `
      <rect width="800" height="450" fill="#FFF1F6"/>
      <rect x="0" y="330" width="800" height="120" fill="#F0D9C8"/>
      <!-- 轨道 -->
      <rect x="40" y="340" width="720" height="16" rx="6" fill="#8B7A6B"/>
      ${Array.from({length: 13}, (_, i) =>
        `<rect x="${60 + i * 56}" y="328" width="10" height="30" fill="#B98A5E"/>`).join('')}
      <!-- 火车头 -->
      <rect x="120" y="250" width="150" height="90" rx="20" fill="#FF6B6B"/>
      <rect x="150" y="218" width="90" height="46" rx="16" fill="#FF9AA2"/>
      <rect x="165" y="230" width="60" height="26" rx="8" fill="#BFE4F5"/>
      <circle cx="160" cy="346" r="22" fill="#3D3846"/><circle cx="160" cy="346" r="9" fill="#D5D0DC"/>
      <circle cx="235" cy="346" r="22" fill="#3D3846"/><circle cx="235" cy="346" r="9" fill="#D5D0DC"/>
      <!-- 烟囱 -->
      <rect x="238" y="196" width="26" height="30" rx="6" fill="#E05555"/>
      ${cloudIcon(262, 168, .45)}
      ${cloudIcon(292, 148, .32)}
      <!-- 车厢 -->
      ${[300, 430, 560].map((x, i) => {
        const c = ['#FFD166', '#A8E6CF', '#B5D8EB'][i];
        return `
          <rect x="${x}" y="262" width="100" height="78" rx="14" fill="${c}"/>
          <rect x="${x + 14}" y="278" width="72" height="34" rx="8" fill="#fff" opacity=".85"/>
          <circle cx="${x + 24}" cy="346" r="18" fill="#3D3846"/><circle cx="${x + 24}" cy="346" r="7" fill="#D5D0DC"/>
          <circle cx="${x + 78}" cy="346" r="18" fill="#3D3846"/><circle cx="${x + 78}" cy="346" r="7" fill="#D5D0DC"/>`;
      }).join('')}
      <!-- 信号灯 -->
      <rect x="700" y="200" width="10" height="130" fill="#5A6068"/>
      <rect x="682" y="170" width="46" height="100" rx="12" fill="#3D3846"/>
      <circle cx="705" cy="192" r="14" fill="#FF4D4D"/>
      <circle cx="705" cy="248" r="14" fill="#6BCB77"/>
    `;
  }

  /* u36 蔬菜（健康饮食） */
  function veggies() {
    return `
      <rect width="800" height="450" fill="#F0FBF0"/>
      <rect x="0" y="330" width="800" height="120" fill="#D5E8D5"/>
      <!-- 砧板 -->
      <rect x="180" y="270" width="440" height="60" rx="16" fill="#E8C9A0"/>
      <rect x="220" y="282" width="360" height="12" rx="6" fill="#D9B183"/>
      <!-- 胡萝卜 -->
      <path d="M320 330 l-24 -80 l48 0 Z" fill="#FF8B3D"/>
      <path d="M320 250 l-14 -22 l14 -12 l14 12 Z" fill="#6BCB77"/>
      <!-- 西兰花 -->
      <circle cx="440" cy="270" r="30" fill="#5E9E4E"/>
      <circle cx="418" cy="258" r="20" fill="#6BCB77"/>
      <circle cx="462" cy="258" r="20" fill="#6BCB77"/>
      <rect x="432" y="296" width="16" height="34" fill="#B7D98C"/>
      <!-- 番茄 -->
      <circle cx="540" cy="286" r="28" fill="#FF5252"/>
      <path d="M540 258 l-10 -14 l20 0 Z" fill="#5E9E4E"/>
      <circle cx="530" cy="276" r="7" fill="#fff" opacity=".4"/>
      <!-- 玉米 -->
      <ellipse cx="620" cy="278" rx="20" ry="46" fill="#FFD166"/>
      ${[-20, 0, 20].map(o => `<line x1="${620 + o}" y1="240" x2="${620 + o}" y2="316" stroke="#E0B347" stroke-width="3"/>`).join('')}
      <path d="M598 240 q-24 -20 -10 -40 q16 16 14 40 Z" fill="#8FD67A"/>
      <path d="M642 240 q24 -20 10 -40 q-16 16 -14 40 Z" fill="#8FD67A"/>
      <!-- 糖果（画叉） -->
      <circle cx="280" cy="200" r="22" fill="#FF9AA2" opacity=".55"/>
      <path d="M262 182 l36 36 M298 182 l-36 36" stroke="#FF5252" stroke-width="7"/>
      <circle cx="330" cy="200" r="16" fill="#FFD1DC" opacity=".55"/>
      <path d="M318 188 l24 24 M342 188 l-24 24" stroke="#FF5252" stroke-width="6"/>
      <!-- 牛奶 -->
      <rect x="100" y="240" width="52" height="80" rx="10" fill="#fff" stroke="#D5E0E0" stroke-width="4"/>
      <path d="M100 268 h52" stroke="#B5D8EB" stroke-width="8"/>
      <rect x="100" y="232" width="52" height="12" rx="5" fill="#B5D8EB"/>
    `;
  }

  /* u37 整洁的房间 */
  function tidyRoom() {
    return `
      <rect width="800" height="450" fill="#F2F0FB"/>
      <rect x="0" y="330" width="800" height="120" fill="#C9C2E4"/>
      <!-- 床 -->
      <rect x="90" y="250" width="280" height="90" rx="16" fill="#C7CEEA"/>
      <rect x="90" y="228" width="280" height="34" rx="16" fill="#AEB7E0"/>
      <rect x="110" y="258" width="240" height="62" rx="14" fill="#DDE2F5"/>
      <ellipse cx="160" cy="244" rx="40" ry="20" fill="#fff"/>
      <rect x="80" y="336" width="300" height="20" rx="8" fill="#8B85B8"/>
      <!-- 书架 -->
      <rect x="420" y="120" width="240" height="180" rx="10" fill="#B98A5E"/>
      <rect x="432" y="132" width="216" height="156" rx="6" fill="#E8C9A8"/>
      ${[0, 1, 2, 3, 4].map(i =>
        `<rect x="${446 + i * 40}" y="${150 + (i % 2) * 60}" width="30" height="56" rx="4" fill="${['#FF9AA2', '#FFD166', '#A8E6CF', '#B5D8EB', '#C7CEEA'][i]}"/>`).join('')}
      <!-- 书桌 -->
      <rect x="420" y="290" width="240" height="24" rx="10" fill="#D9A87C"/>
      <rect x="440" y="314" width="16" height="60" fill="#C2936B"/>
      <rect x="624" y="314" width="16" height="60" fill="#C2936B"/>
      <!-- 书包在桌下（重点） -->
      <rect x="480" y="316" width="110" height="52" rx="14" fill="#FF9AA2"/>
      <path d="M480 342 q55 -22 110 0" stroke="#E57C93" stroke-width="6" fill="none"/>
      <rect x="528" y="318" width="14" height="48" rx="6" fill="#FF7B8A"/>
      <!-- 台灯 -->
      <rect x="620" y="262" width="8" height="28" fill="#8B7A6B"/>
      <path d="M602 262 l44 0 l-10 -24 l-24 0 Z" fill="#FFD166"/>
      <!-- 星星贴纸 -->
      <text x="200" y="140" font-size="34">⭐</text>
      <text x="290" y="180" font-size="26">⭐</text>
      <!-- 地毯 -->
      <ellipse cx="400" cy="410" rx="220" ry="34" fill="#9C93D4" opacity=".5"/>
    `;
  }

  /* u38 新年 */
  function newYear() {
    let fire = '';
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const r = 60 + (i % 3) * 22;
      fire += `<line x1="${640 + Math.cos(a) * 30}" y1="${110 + Math.sin(a) * 30}"
                x2="${640 + Math.cos(a) * r}" y2="${110 + Math.sin(a) * r}"
                stroke="${['#FF6B6B', '#FFD166', '#A8E6CF', '#B983FF'][i % 4]}" stroke-width="5" stroke-linecap="round"/>`;
    }
    return `
      <rect width="800" height="450" fill="#C93B3B"/>
      <rect x="0" y="330" width="800" height="120" fill="#A82E2E"/>
      <!-- 灯笼 -->
      ${[120, 680].map(x => `
        <line x1="${x}" y1="40" x2="${x}" y2="90" stroke="#FFD166" stroke-width="4"/>
        <rect x="${x - 8}" y="84" width="16" height="14" fill="#FFD166"/>
        <ellipse cx="${x}" cy="160" rx="56" ry="62" fill="#FF4D4D"/>
        <ellipse cx="${x}" cy="160" rx="56" ry="62" fill="none" stroke="#FFD166" stroke-width="5"/>
        <path d="M${x - 30} 118 q30 -16 60 0 M${x - 30} 160 q30 -16 60 0 M${x - 30} 202 q30 -16 60 0" stroke="#E03B3B" stroke-width="4" fill="none"/>
        <rect x="${x - 8}" y="222" width="16" height="14" fill="#FFD166"/>
        <line x1="${x}" y1="236" x2="${x}" y2="290" stroke="#FFD166" stroke-width="4"/>`).join('')}
      <!-- 窗花 -->
      ${[260, 420, 540].map(x => `<text x="${x}" y="150" font-size="52" fill="#FFD166" text-anchor="middle">福</text>`).join('')}
      <!-- 烟花 -->
      ${fire}
      <circle cx="640" cy="110" r="18" fill="#FFD166"/>
      <!-- 红包 -->
      <rect x="300" y="300" width="110" height="70" rx="12" fill="#FF4D4D" stroke="#FFD166" stroke-width="5"/>
      <circle cx="355" cy="330" r="20" fill="#FFD166"/>
      <text x="355" y="340" font-size="20" font-weight="900" fill="#C93B3B" text-anchor="middle">福</text>
      <!-- 鞭炮 -->
      ${[80, 140, 200].map((x, i) => `
        <rect x="${x}" y="${300 + (i % 2) * 14}" width="26" height="60" rx="8" fill="#FF6B6B"/>
        <rect x="${x + 6}" y="${294 + (i % 2) * 14}" width="14" height="10" fill="#FFD166"/>`).join('')}
    `;
  }

  /* u39 梦想舞台 */
  function dreamStage() {
    let stars = '';
    for (let i = 0; i < 10; i++) {
      stars += `<text x="${60 + i * 78}" y="${70 + (i % 3) * 40}" font-size="26" fill="#FFD166" opacity=".85">⭐</text>`;
    }
    return `
      <rect width="800" height="450" fill="#2E3A59"/>
      ${stars}
      <!-- 舞台 -->
      <path d="M100 330 L700 330 L640 240 L160 240 Z" fill="#8B5E3C"/>
      <rect x="100" y="326" width="600" height="16" rx="8" fill="#A87850"/>
      <!-- 幕布 -->
      <path d="M60 330 L60 80 q60 40 60 120 q0 -80 60 -120 L180 330 Z" fill="#C93B3B"/>
      <path d="M740 330 L740 80 q-60 40 -60 120 q0 -80 -60 -120 L620 330 Z" fill="#C93B3B"/>
      <!-- 听诊器（医生梦） -->
      <path d="M340 250 q60 -70 120 0" stroke="#8FA3B8" stroke-width="8" fill="none"/>
      <circle cx="340" cy="254" r="14" fill="#C7CFD8"/>
      <circle cx="460" cy="254" r="14" fill="#C7CFD8"/>
      <rect x="394" y="246" width="12" height="60" rx="6" fill="#8FA3B8"/>
      <circle cx="400" cy="316" r="16" fill="#C7CFD8"/>
      <circle cx="400" cy="316" r="8" fill="#fff"/>
      <!-- 医药箱 -->
      <rect x="560" y="270" width="100" height="60" rx="10" fill="#fff"/>
      <rect x="600" y="266" width="20" height="12" rx="4" fill="#B9C7D0"/>
      <rect x="605" y="292" width="50" height="10" fill="#FF6B6B"/>
      <rect x="625" y="272" width="10" height="50" fill="#FF6B6B"/>
      <!-- 聚光灯 -->
      <path d="M400 20 L340 100 L460 100 Z" fill="#FFD166" opacity=".25"/>
      <path d="M200 20 L150 100 L250 100 Z" fill="#FFD166" opacity=".15"/>
      <path d="M600 20 L550 100 L650 100 Z" fill="#FFD166" opacity=".15"/>
    `;
  }

  /* u40 校门口告别 */
  function farewell() {
    return `
      <rect width="800" height="450" fill="#DFF0FA"/>
      ${cloudIcon(140, 55, .95)}
      ${sunIcon(700, 65, 32)}
      <!-- 学校 -->
      <rect x="240" y="110" width="330" height="220" rx="14" fill="#FFF0DC"/>
      <rect x="300" y="70" width="210" height="44" rx="10" fill="#F0A868"/>
      <text x="405" y="102" font-size="28" font-weight="900" fill="#fff" text-anchor="middle">SCHOOL</text>
      <rect x="378" y="210" width="60" height="120" rx="8" fill="#B5D8EB" stroke="#E0B98F" stroke-width="6"/>
      <rect x="270" y="200" width="66" height="66" rx="8" fill="#BFE4F5" stroke="#fff" stroke-width="6"/>
      <rect x="474" y="200" width="66" height="66" rx="8" fill="#BFE4F5" stroke="#fff" stroke-width="6"/>
      <!-- 校门 -->
      <path d="M60 330 L60 240 L180 240 L180 330" stroke="#B98A5E" stroke-width="10" fill="none"/>
      <path d="M620 330 L620 240 L740 240 L740 330" stroke="#B98A5E" stroke-width="10" fill="none"/>
      <!-- 地面 -->
      <rect x="0" y="330" width="800" height="120" fill="#C9CDD4"/>
      <path d="M0 400 L800 400" stroke="#fff" stroke-width="7" stroke-dasharray="34 26"/>
      <!-- 书包（地上） -->
      <rect x="330" y="360" width="90" height="56" rx="14" fill="#FF9AA2"/>
      <path d="M330 388 q45 -18 90 0" stroke="#E57C93" stroke-width="6" fill="none"/>
      <!-- 树 -->
      ${treeIcon(110, 230, .8)}
      ${treeIcon(700, 230, .85)}
      <!-- 信封（飞起来的信） -->
      <rect x="430" y="140" width="56" height="40" rx="6" fill="#fff" stroke="#E0B98F" stroke-width="4" transform="rotate(-12 458 160)"/>
      <path d="M430 146 l28 20 l28 -20" stroke="#E0B98F" stroke-width="4" fill="none" transform="rotate(-12 458 160)"/>
      <!-- 心 -->
      <text x="510" y="170" font-size="30">💌</text>
    `;
  }
  const MAP = {
    u01: morning,
    u02: living,
    u03: garden,
    u04: dining,
    u05: familyRoom,
    u06: schoolRoad,
    u07: bathroom,
    u08: weather,
    u09: playroom,
    u10: night,
    u11: classroom,   u12: artRoom,     u13: musicRoom,   u14: playground,
    u15: library,     u16: starBoard,   u17: zoo,         u18: supermarket,
    u19: busStop,     u20: hospital,    u21: birthday,    u22: picnic,
    u23: pool,        u24: spring,      u25: summer,      u26: autumn,
    u27: winter,      u28: artWall,     u29: dogHouse,    u30: lostPencil,
    u31: brokenCup,   u32: kitchen,     u33: storyCorner, u34: crossing,
    u35: toyTrain,    u36: veggies,     u37: tidyRoom,    u38: newYear,
    u39: dreamStage,  u40: farewell
  };

  /**
   * 渲染场景 SVG
   * @param {string} unitId
   * @returns {string} SVG 字符串（不含外层 svg 标签，便于嵌入）
   */
  function render(unitId) {
    const fn = MAP[unitId];
    if (!fn) return `<rect width="800" height="450" fill="#FFF6E5"/>`;
    return fn();
  }

  return { render, MAP };

})();

if (typeof module !== 'undefined') module.exports = SCENES;
