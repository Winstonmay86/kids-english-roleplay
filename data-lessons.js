/* ===================================================================
   《开口说英语》内容库  v2
   面向 6-8 岁小学低年级 / 日常高频会话
   -------------------------------------------------------------------
   结构说明：
   每个 unit 是一段完整的对话（有来有回），孩子选一个角色来演。

   lines: [
     { who: 'Lily', avatar: '👧', en: '...', zh: '...', emoji: '🌅' }
   ]
   └ who/avatar 说话人；en 英文；zh 中文（孩子看到的提示）；emoji 配图

   系统会自动从 lines 里提取出所有角色供孩子选择。
   =================================================================== */

const LESSONS = [

  /* ================= 单元 1：早上好 ================= */
  {
    id: 'u01',
    title: '早上好',
    icon: '👋',
    color: '#FF9AA2',
    lines: [
      { who: 'Lily', avatar: '👧', en: 'Good morning, Tom!',      zh: '早上好，汤姆！',     emoji: '🌅' },
      { who: 'Tom',  avatar: '👦', en: 'Good morning, Lily!',     zh: '早上好，莉莉！',     emoji: '🌅' },
      { who: 'Lily', avatar: '👧', en: 'How are you?',            zh: '你好吗？',           emoji: '🙂' },
      { who: 'Tom',  avatar: '👦', en: "I'm fine, thank you!",    zh: '我很好，谢谢你！',   emoji: '😊' },
      { who: 'Tom',  avatar: '👦', en: 'And you?',                zh: '你呢？',             emoji: '🤔' },
      { who: 'Lily', avatar: '👧', en: "I'm fine too.",           zh: '我也很好。',         emoji: '😄' },
      { who: 'Lily', avatar: '👧', en: "Let's go to school!",     zh: '我们去上学吧！',     emoji: '🏫' },
      { who: 'Tom',  avatar: '👦', en: 'OK! See you tomorrow!',   zh: '好！明天见！',       emoji: '👋' }
    ]
  },

  /* ================= 单元 2：你几岁了 ================= */
  {
    id: 'u02',
    title: '你几岁了',
    icon: '🔢',
    color: '#A8E6CF',
    lines: [
      { who: 'Tom',  avatar: '👦', en: 'How old are you?',            zh: '你几岁了？',       emoji: '🎂' },
      { who: 'Lily', avatar: '👧', en: 'I am seven.',                 zh: '我七岁。',         emoji: '7️⃣' },
      { who: 'Lily', avatar: '👧', en: 'How old are you?',            zh: '你几岁了？',       emoji: '🎂' },
      { who: 'Tom',  avatar: '👦', en: 'I am eight.',                 zh: '我八岁。',         emoji: '8️⃣' },
      { who: 'Tom',  avatar: '👦', en: "Let's count together!",       zh: '我们一起数数吧！', emoji: '🔢' },
      { who: 'Lily', avatar: '👧', en: 'One, two, three, four, five!', zh: '一、二、三、四、五！', emoji: '5️⃣' },
      { who: 'Tom',  avatar: '👦', en: 'Six, seven, eight, nine, ten!', zh: '六、七、八、九、十！', emoji: '🔟' },
      { who: 'Lily', avatar: '👧', en: 'You are so clever!',          zh: '你真聪明！',       emoji: '🌟' }
    ]
  },

  /* ================= 单元 3：这是什么颜色 ================= */
  {
    id: 'u03',
    title: '这是什么颜色',
    icon: '🎨',
    color: '#FFDAC1',
    lines: [
      { who: 'Lily', avatar: '👧', en: 'Look at my balloon!',    zh: '看我的气球！',       emoji: '🎈' },
      { who: 'Tom',  avatar: '👦', en: 'Wow! What color is it?', zh: '哇！它是什么颜色？', emoji: '🤩' },
      { who: 'Lily', avatar: '👧', en: "It's red.",              zh: '是红色。',           emoji: '🔴' },
      { who: 'Tom',  avatar: '👦', en: 'I like red too.',        zh: '我也喜欢红色。',     emoji: '❤️' },
      { who: 'Tom',  avatar: '👦', en: 'My balloon is blue.',    zh: '我的气球是蓝色。',   emoji: '🔵' },
      { who: 'Lily', avatar: '👧', en: 'Blue is pretty!',        zh: '蓝色很漂亮！',       emoji: '💙' },
      { who: 'Tom',  avatar: '👦', en: 'Look! A yellow one!',    zh: '看！还有一个黄色的！', emoji: '🟡' },
      { who: 'Lily', avatar: '👧', en: 'How nice! I want it.',   zh: '真好看！我想要。',   emoji: '🥰' }
    ]
  },

  /* ================= 单元 4：我饿了 ================= */
  {
    id: 'u04',
    title: '我饿了',
    icon: '🍚',
    color: '#B5EAD7',
    lines: [
      { who: 'Tom',  avatar: '👦', en: 'Mum, I am hungry.',          zh: '妈妈，我饿了。',       emoji: '😋' },
      { who: 'Mum',  avatar: '👩', en: "It's time for lunch!",       zh: '该吃午饭啦！',         emoji: '🍽️' },
      { who: 'Tom',  avatar: '👦', en: 'What do we have today?',     zh: '我们今天吃什么？',     emoji: '🤔' },
      { who: 'Mum',  avatar: '👩', en: 'Rice, fish and eggs.',       zh: '米饭、鱼和鸡蛋。',     emoji: '🍚' },
      { who: 'Tom',  avatar: '👦', en: 'Great! I like fish.',        zh: '太好了！我喜欢吃鱼。', emoji: '🐟' },
      { who: 'Mum',  avatar: '👩', en: 'Wash your hands first.',     zh: '先洗手。',             emoji: '🧼' },
      { who: 'Tom',  avatar: '👦', en: 'OK, Mum. I am ready!',       zh: '好的，妈妈。我准备好了！', emoji: '👍' },
      { who: 'Mum',  avatar: '👩', en: 'Enjoy your meal!',           zh: '用餐愉快！',           emoji: '😊' }
    ]
  },

  /* ================= 单元 5：这是我的家 ================= */
  {
    id: 'u05',
    title: '这是我的家',
    icon: '👨‍👩‍👧',
    color: '#C7CEEA',
    lines: [
      { who: 'Lily', avatar: '👧', en: 'This is my family photo.', zh: '这是我的全家福。',   emoji: '🖼️' },
      { who: 'Tom',  avatar: '👦', en: 'Who is he?',               zh: '他是谁？',           emoji: '🤔' },
      { who: 'Lily', avatar: '👧', en: 'He is my father.',         zh: '他是我的爸爸。',     emoji: '👨' },
      { who: 'Tom',  avatar: '👦', en: 'And who is she?',          zh: '那她是谁呢？',       emoji: '🙋' },
      { who: 'Lily', avatar: '👧', en: 'She is my mother.',        zh: '她是我的妈妈。',     emoji: '👩' },
      { who: 'Tom',  avatar: '👦', en: 'Is this your sister?',     zh: '这是你姐姐吗？',     emoji: '👧' },
      { who: 'Lily', avatar: '👧', en: 'Yes! I love my family.',   zh: '是的！我爱我的家人。', emoji: '❤️' },
      { who: 'Tom',  avatar: '👦', en: 'What a nice family!',      zh: '多好的一家人啊！',   emoji: '🥰' }
    ]
  },

  /* ================= 单元 6：上学去 ================= */
  {
    id: 'u06',
    title: '上学去',
    icon: '🎒',
    color: '#FFB7B2',
    lines: [
      { who: 'Lily', avatar: '👧', en: "Let's go to school!",   zh: '我们去上学吧！',     emoji: '🏫' },
      { who: 'Tom',  avatar: '👦', en: 'Wait! Where is my bag?', zh: '等等！我的书包在哪儿？', emoji: '🎒' },
      { who: 'Lily', avatar: '👧', en: "It's on the chair.",     zh: '在椅子上。',         emoji: '🪑' },
      { who: 'Tom',  avatar: '👦', en: 'Oh, I see it. Thanks!',  zh: '哦，我看到了。谢谢！', emoji: '😄' },
      { who: 'Lily', avatar: '👧', en: 'Do you have your book?', zh: '你带书了吗？',       emoji: '📖' },
      { who: 'Tom',  avatar: '👦', en: 'Yes, and my pencil too.', zh: '带了，还有我的铅笔。', emoji: '✏️' },
      { who: 'Lily', avatar: '👧', en: "Let's hurry up!",        zh: '我们快点吧！',       emoji: '🏃' },
      { who: 'Tom',  avatar: '👦', en: 'We are good friends.',   zh: '我们是好朋友。',     emoji: '🤝' }
    ]
  },

  /* ================= 单元 7：摸摸你的头 ================= */
  {
    id: 'u07',
    title: '摸摸你的头',
    icon: '🧍',
    color: '#E2F0CB',
    lines: [
      { who: 'Tom',  avatar: '👦', en: 'Touch your head!',       zh: '摸摸你的头！',       emoji: '🧠' },
      { who: 'Lily', avatar: '👧', en: 'This is my head.',       zh: '这是我的头。',       emoji: '🙂' },
      { who: 'Tom',  avatar: '👦', en: 'Touch your nose!',       zh: '摸摸你的鼻子！',     emoji: '👃' },
      { who: 'Lily', avatar: '👧', en: 'This is my nose. Ha ha!', zh: '这是我的鼻子。哈哈！', emoji: '😄' },
      { who: 'Tom',  avatar: '👦', en: 'Touch your ears!',       zh: '摸摸你的耳朵！',     emoji: '👂' },
      { who: 'Lily', avatar: '👧', en: 'These are my ears.',     zh: '这是我的耳朵。',     emoji: '😊' },
      { who: 'Tom',  avatar: '👦', en: 'Now wash your hands!',   zh: '现在洗洗你的手！',   emoji: '✋' },
      { who: 'Lily', avatar: '👧', en: 'Good idea!',             zh: '好主意！',           emoji: '🧼' }
    ]
  },

  /* ================= 单元 8：今天天气怎么样 ================= */
  {
    id: 'u08',
    title: '今天天气怎么样',
    icon: '🌤️',
    color: '#B5D8EB',
    lines: [
      { who: 'Lily', avatar: '👧', en: 'How is the weather today?', zh: '今天天气怎么样？',   emoji: '🌦️' },
      { who: 'Tom',  avatar: '👦', en: "It's sunny!",               zh: '是晴天！',           emoji: '☀️' },
      { who: 'Lily', avatar: '👧', en: 'Great! Let us play outside.', zh: '太好了！我们去外面玩吧。', emoji: '🏃' },
      { who: 'Tom',  avatar: '👦', en: 'Oh no, it is raining now!', zh: '哦不，现在下雨了！', emoji: '🌧️' },
      { who: 'Lily', avatar: '👧', en: 'Let us go home quickly.',   zh: '我们快点回家吧。',   emoji: '🏠' },
      { who: 'Tom',  avatar: '👦', en: 'I am all wet.',             zh: '我全身都湿了。',     emoji: '💧' },
      { who: 'Lily', avatar: '👧', en: 'Take a hot bath, please.',  zh: '快去洗个热水澡。',   emoji: '🛁' },
      { who: 'Tom',  avatar: '👦', en: 'Thank you, Lily!',          zh: '谢谢你，莉莉！',     emoji: '😊' }
    ]
  },

  /* ================= 单元 9：一起玩吧 ================= */
  {
    id: 'u09',
    title: '一起玩吧',
    icon: '🧸',
    color: '#FFD1DC',
    lines: [
      { who: 'Tom',  avatar: '👦', en: 'Look at my new toy car!', zh: '看我的新玩具车！',   emoji: '🚗' },
      { who: 'Lily', avatar: '👧', en: 'Wow! Can I play?',        zh: '哇！我可以玩吗？',   emoji: '🙋' },
      { who: 'Tom',  avatar: '👦', en: 'Sure. Let us play together.', zh: '当然。我们一起玩吧。', emoji: '🤗' },
      { who: 'Lily', avatar: '👧', en: 'Thank you! You are so kind.', zh: '谢谢！你真好。', emoji: '💖' },
      { who: 'Tom',  avatar: '👦', en: 'I have blocks too.',      zh: '我还有积木。',       emoji: '🧱' },
      { who: 'Lily', avatar: '👧', en: 'Great! I love blocks!',   zh: '太好了！我喜欢积木！', emoji: '😍' },
      { who: 'Tom',  avatar: '👦', en: 'Let us build a house!',   zh: '我们搭一座房子吧！', emoji: '🏠' },
      { who: 'Lily', avatar: '👧', en: 'What a happy day!',       zh: '多么开心的一天！',   emoji: '🎉' }
    ]
  },

  /* ================= 单元 10：我有点累了 ================= */
  {
    id: 'u10',
    title: '我有点累了',
    icon: '😊',
    color: '#FFE0AC',
    lines: [
      { who: 'Mum',  avatar: '👩', en: 'How do you feel today?',  zh: '你今天感觉怎么样？', emoji: '🙂' },
      { who: 'Tom',  avatar: '👦', en: 'I am very happy!',        zh: '我非常开心！',       emoji: '😄' },
      { who: 'Mum',  avatar: '👩', en: 'Why are you so happy?',   zh: '你为什么这么开心？', emoji: '🤔' },
      { who: 'Tom',  avatar: '👦', en: 'I got a star today.',     zh: '我今天得了一颗星星。', emoji: '⭐' },
      { who: 'Mum',  avatar: '👩', en: 'That is wonderful!',      zh: '太棒了！',           emoji: '🎉' },
      { who: 'Tom',  avatar: '👦', en: 'But I am tired now.',     zh: '但我现在累了。',     emoji: '😪' },
      { who: 'Mum',  avatar: '👩', en: 'Let us have a rest.',     zh: '我们休息一下吧。',   emoji: '🛋️' },
      { who: 'Tom',  avatar: '👦', en: 'Good night, Mum.',        zh: '晚安，妈妈。',       emoji: '💤' }
    ]
  }

];

/* 从一段对话里提取所有角色（自动去重） */
function extractRoles(unit) {
  const map = new Map();
  unit.lines.forEach(line => {
    if (!map.has(line.who)) {
      map.set(line.who, { name: line.who, avatar: line.avatar, count: 0 });
    }
    map.get(line.who).count++;
  });
  return Array.from(map.values());
}

if (typeof module !== 'undefined') {
  module.exports = LESSONS;
  module.exports.extractRoles = extractRoles;
}
