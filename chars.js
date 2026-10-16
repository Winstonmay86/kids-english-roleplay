/* ===================================================================
   角色资产映射
   -------------------------------------------------------------------
   每个角色 3 个表情：happy（默认）/ wave（打招呼、兴奋）/ think（疑问）
   根据台词内容自动挑选表情
   =================================================================== */

const CHARS = {
  Lily:     { name: 'Lily',     happy: 'assets/chars/lily-happy.png',     wave: 'assets/chars/lily-wave.png',     think: 'assets/chars/lily-think.png' },
  Tom:      { name: 'Tom',      happy: 'assets/chars/tom-happy.png',      wave: 'assets/chars/tom-wave.png',      think: 'assets/chars/tom-think.png' },
  Mum:      { name: 'Mum',      happy: 'assets/chars/mum-happy.png',      wave: 'assets/chars/mum-wave.png',      think: 'assets/chars/mum-think.png' },
  Dad:      { name: 'Dad',      happy: 'assets/chars/dad-happy.png',      wave: 'assets/chars/dad-wave.png',      think: 'assets/chars/dad-think.png' },
  Teacher:  { name: 'Teacher',  happy: 'assets/chars/teacher-happy.png',  wave: 'assets/chars/teacher-wave.png',  think: 'assets/chars/teacher-think.png' },
  Grandma:  { name: 'Grandma',  happy: 'assets/chars/grandma-happy.png',  wave: 'assets/chars/grandma-wave.png',  think: 'assets/chars/grandma-think.png' }
};

/**
 * 根据台词内容选择表情
 * 规则（按优先级）：
 *   1. 问号结尾 / how what where who 开头且非感叹 → think（疑问）
 *   2. 感叹号 / 打招呼 / 赞叹词                → wave（挥手、兴奋）
 *   3. 其余                                    → happy（微笑）
 * 注意：感叹句优先于疑问词——"What a nice family!" 是赞叹，不是提问
 */
function pickExpression(line) {
  const en = line.en || '';
  const t = en.toLowerCase().trim();

  const isQuestion = /\?/.test(en) ||
    (/^(how|what|where|who|why|which|whose|when|is|are|do|does|can|could|will|would)\b/.test(t) && !/!/.test(en));
  if (isQuestion) return 'think';

  if (/!/.test(en) ||
      /\b(hi|hello|good\s*(morning|afternoon|evening|night)|bye|see you|thanks|thank you|wow|great|yes|ok|okay|let's|let us)\b/.test(t)) {
    return 'wave';
  }
  return 'happy';
}

/**
 * 获取角色图片路径（找不到角色时返回 null）
 */
function charImg(roleName, expression) {
  const c = CHARS[roleName];
  if (!c) return null;
  return c[expression] || c.happy;
}

if (typeof module !== 'undefined') {
  module.exports = CHARS;
  module.exports.pickExpression = pickExpression;
  module.exports.charImg = charImg;
}
