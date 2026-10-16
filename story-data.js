/* ===================================================================
   《森林小镇大冒险》故事剧本库  v3（第二阶段）
   -------------------------------------------------------------------
   结构：7 个篇章 × 共 42 集，每集一段中文旁白 + 8 句改编对白。
   角色（2026-10-15 家庭重构：熊的一家是熊、兔子的一家是兔子）：
     Lily 莉莉兔 / Tom 汤姆熊 / Teacher 鸮老师（猫头鹰）
     汤姆家（熊系）：熊妈妈 / 熊爸爸 / 熊奶奶
     莉莉家（兔系）：兔妈妈 / 兔爸爸 / 兔奶奶
     奇妙萌可篇章：乐美 / 爱心萌可 / 诗雅
   对白保留原教学序列与难度递增，按情节微调措辞。
   音频 key 仍为 单元id + '_l' + 序号（如 u01_l0），与 audio/ 目录对应；
   改编行的音频待 ElevenLabs 额度重置后批量重录，过渡期走系统 TTS。
   =================================================================== */

const STORY = {
  title: '森林小镇大冒险',
  subtitle: '和小动物朋友们一起，冒险一学年',

  chapters: [

    /* ================= 篇章一：开学季 · 新朋友（u01-u10） ================= */
    {
      id: 'c1', title: '开学季 · 新朋友', icon: '🌸', color: '#FFB7B2',
      episodes: [
        {
          id: 'u01', title: '早安，森林小镇', icon: '👋', color: '#FFB7B2',
          narration: '春天来了，森林小镇的樱花开了。小兔莉莉一家刚搬来，今天是她上学的第一天。走到蒲公英路口，她看见一只背绿书包的小熊，正朝她用力挥手……',
          lines: [
            { who: 'Lily', avatar: '🐰', en: "Good morning, Tom!",   zh: '早上好，汤姆！' },
            { who: 'Tom',  avatar: '🐻', en: "Good morning, Lily!",  zh: '早上好，莉莉！' },
            { who: 'Lily', avatar: '🐰', en: 'How are you?',         zh: '你好吗？' },
            { who: 'Tom',  avatar: '🐻', en: "I'm fine, thank you!", zh: '我很好，谢谢你！' },
            { who: 'Tom',  avatar: '🐻', en: 'And you?',             zh: '你呢？' },
            { who: 'Lily', avatar: '🐰', en: "I'm fine too.",        zh: '我也很好。' },
            { who: 'Lily', avatar: '🐰', en: "Let's go to school!",  zh: '我们去上学吧！' },
            { who: 'Tom',  avatar: '🐻', en: 'OK! See you at school!', zh: '好！学校见！' }
          ]
        },
        {
          id: 'u02', title: '年龄之谜', icon: '🔢', color: '#A8E6CF',
          narration: '鸮老师的宝箱上挂着一把数字锁："猜出两位新同学的年龄，宝箱就会打开。"莉莉和汤姆互相打量着，谁都不好意思先开口……',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'How old are you?',           zh: '你几岁了？' },
            { who: 'Lily', avatar: '🐰', en: 'I am seven.',                zh: '我七岁。' },
            { who: 'Lily', avatar: '🐰', en: 'How old are you?',           zh: '你几岁了？' },
            { who: 'Tom',  avatar: '🐻', en: 'I am eight.',                zh: '我八岁。' },
            { who: 'Tom',  avatar: '🐻', en: "Let's count together!",      zh: '我们一起数数吧！' },
            { who: 'Lily', avatar: '🐰', en: 'One, two, three, four, five!', zh: '一、二、三、四、五！' },
            { who: 'Tom',  avatar: '🐻', en: 'Six, seven, eight, nine, ten!', zh: '六、七、八、九、十！' },
            { who: 'Lily', avatar: '🐰', en: 'You are so clever!',         zh: '你真聪明！' }
          ]
        },
        {
          id: 'u03', title: '彩虹气球大救援', icon: '🎈', color: '#FFDAC1',
          narration: '森林气球节到了！莉莉举着一只红气球，汤姆抱着一只蓝气球。突然，一阵大风刮过——"啊！我的气球！"蓝气球和黄气球一起飞上了天……',
          lines: [
            { who: 'Lily', avatar: '🐰', en: 'Look at my balloon!',    zh: '看我的气球！' },
            { who: 'Tom',  avatar: '🐻', en: 'Wow! What color is it?', zh: '哇！它是什么颜色？' },
            { who: 'Lily', avatar: '🐰', en: "It's red.",              zh: '是红色。' },
            { who: 'Tom',  avatar: '🐻', en: 'I like red too.',        zh: '我也喜欢红色。' },
            { who: 'Tom',  avatar: '🐻', en: 'My balloon is blue.',    zh: '我的气球是蓝色。' },
            { who: 'Lily', avatar: '🐰', en: 'Blue is pretty!',        zh: '蓝色很漂亮！' },
            { who: 'Tom',  avatar: '🐻', en: 'Look! A yellow one!',    zh: '看！还有一个黄色的！' },
            { who: 'Lily', avatar: '🐰', en: 'How nice! I want it.',   zh: '真好看！我想要。' }
          ]
        },
        {
          id: 'u04', title: '午餐大作战', icon: '🍚', color: '#B5EAD7',
          narration: '跑了一上午，汤姆的肚子咕咕叫。"妈妈，我饿啦——"熊妈妈系上围围裙宣布：今天的任务是，先通过洗手关，才能开饭！',
          lines: [
            { who: 'Tom', avatar: '🐻', en: 'Mum, I am hungry.',        zh: '妈妈，我饿了。' },
            { who: '熊妈妈', avatar: '🐻', en: "It's time for lunch!",     zh: '该吃午饭啦！' },
            { who: 'Tom', avatar: '🐻', en: 'What do we have today?',   zh: '我们今天吃什么？' },
            { who: '熊妈妈', avatar: '🐻', en: 'Rice, fish and eggs.',     zh: '米饭、鱼和鸡蛋。' },
            { who: 'Tom', avatar: '🐻', en: 'Great! I like fish.',      zh: '太好了！我喜欢吃鱼。' },
            { who: '熊妈妈', avatar: '🐻', en: 'Wash your hands first.',   zh: '先洗手。' },
            { who: 'Tom', avatar: '🐻', en: 'OK, Mum. I am ready!',     zh: '好的，妈妈。我准备好了！' },
            { who: '熊妈妈', avatar: '🐻', en: 'Enjoy your meal!',         zh: '用餐愉快！' }
          ]
        },
        {
          id: 'u05', title: '全家福拼图', icon: '🖼️', color: '#C7CEEA',
          narration: '莉莉从口袋里掏出一张小照片——那是她的全家福。一阵风刮过，照片碎成了八块拼图，散落在草地上。"快！在风把它们吹进小河之前拼起来！"',
          lines: [
            { who: 'Lily', avatar: '🐰', en: 'This is my family photo.', zh: '这是我的全家福。' },
            { who: 'Tom',  avatar: '🐻', en: 'Who is he?',               zh: '他是谁？' },
            { who: 'Lily', avatar: '🐰', en: 'He is my father.',         zh: '他是我的爸爸。' },
            { who: 'Tom',  avatar: '🐻', en: 'And who is she?',          zh: '那她是谁呢？' },
            { who: 'Lily', avatar: '🐰', en: 'She is my mother.',        zh: '她是我的妈妈。' },
            { who: 'Tom',  avatar: '🐻', en: 'Is this your sister?',     zh: '这是你姐姐吗？' },
            { who: 'Lily', avatar: '🐰', en: 'Yes! I love my family.',   zh: '是的！我爱我的家人。' },
            { who: 'Tom',  avatar: '🐻', en: 'What a nice family!',      zh: '多好的一家人啊！' }
          ]
        },
        {
          id: 'u06', title: '书包大搜查', icon: '🎒', color: '#FFB7B2',
          narration: '糟糕，要迟到了！汤姆站在原地急得转圈——"等等！我的书包在哪儿？"莉莉当起了小侦探，开始一样一样排查……',
          lines: [
            { who: 'Lily', avatar: '🐰', en: "Let's go to school!",   zh: '我们去上学吧！' },
            { who: 'Tom',  avatar: '🐻', en: 'Wait! Where is my bag?', zh: '等等！我的书包在哪儿？' },
            { who: 'Lily', avatar: '🐰', en: "It's on the chair.",    zh: '在椅子上。' },
            { who: 'Tom',  avatar: '🐻', en: 'Oh, I see it. Thanks!',  zh: '哦，我看到了。谢谢！' },
            { who: 'Lily', avatar: '🐰', en: 'Do you have your book?', zh: '你带书了吗？' },
            { who: 'Tom',  avatar: '🐻', en: 'Yes, and my pencil too.', zh: '带了，还有我的铅笔。' },
            { who: 'Lily', avatar: '🐰', en: "Let's hurry up!",       zh: '我们快点吧！' },
            { who: 'Tom',  avatar: '🐻', en: 'We are good friends.',   zh: '我们是好朋友。' }
          ]
        },
        {
          id: 'u07', title: '身体寻宝图', icon: '🧍', color: '#E2F0CB',
          narration: '鸮老师发给每个小朋友一张"寻宝图"：按图上的指令摸摸自己的身体，全部摸对，就能获得今天的第一枚贴纸！',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'Touch your head!',        zh: '摸摸你的头！' },
            { who: 'Lily', avatar: '🐰', en: 'This is my head.',        zh: '这是我的头。' },
            { who: 'Tom',  avatar: '🐻', en: 'Touch your nose!',        zh: '摸摸你的鼻子！' },
            { who: 'Lily', avatar: '🐰', en: 'This is my nose. Ha ha!', zh: '这是我的鼻子。哈哈！' },
            { who: 'Tom',  avatar: '🐻', en: 'Touch your ears!',        zh: '摸摸你的耳朵！' },
            { who: 'Lily', avatar: '🐰', en: 'These are my ears.',      zh: '这是我的耳朵。' },
            { who: 'Tom',  avatar: '🐻', en: 'Now wash your hands!',    zh: '现在洗洗你的手！' },
            { who: 'Lily', avatar: '🐰', en: 'Good idea!',              zh: '好主意！' }
          ]
        },
        {
          id: 'u08', title: '天气变色龙', icon: '🌤️', color: '#B5D8EB',
          narration: '周末的早上，太阳笑眯眯的。莉莉和汤姆约好去草地上放风筝。可是森林的天气说变就变——刚才还晴空万里，转眼乌云飘来了……',
          lines: [
            { who: 'Lily', avatar: '🐰', en: 'How is the weather today?', zh: '今天天气怎么样？' },
            { who: 'Tom',  avatar: '🐻', en: "It's sunny!",               zh: '是晴天！' },
            { who: 'Lily', avatar: '🐰', en: 'Great! Let us play outside.', zh: '太好了！我们去外面玩吧。' },
            { who: 'Tom',  avatar: '🐻', en: 'Oh no, it is raining now!', zh: '哦不，现在下雨了！' },
            { who: 'Lily', avatar: '🐰', en: 'Let us go home quickly.',   zh: '我们快点回家吧。' },
            { who: 'Tom',  avatar: '🐻', en: 'I am all wet.',             zh: '我全身都湿了。' },
            { who: 'Lily', avatar: '🐰', en: 'Take a hot bath, please.',  zh: '快去洗个热水澡。' },
            { who: 'Tom',  avatar: '🐻', en: 'Thank you, Lily!',          zh: '谢谢你，莉莉！' }
          ]
        },
        {
          id: 'u09', title: '玩具分享日', icon: '🧸', color: '#FFD1DC',
          narration: '汤姆的生日礼物到了一辆崭新的木头小汽车！他紧紧抱在怀里，生怕别人碰。莉莉眼睛亮晶晶的，轻轻问了一句……',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'Look at my new toy car!',      zh: '看我的新玩具车！' },
            { who: 'Lily', avatar: '🐰', en: 'Wow! Can I play?',             zh: '哇！我可以玩吗？' },
            { who: 'Tom',  avatar: '🐻', en: 'Sure. Let us play together.',  zh: '当然。我们一起玩吧。' },
            { who: 'Lily', avatar: '🐰', en: 'Thank you! You are so kind.',  zh: '谢谢！你真好。' },
            { who: 'Tom',  avatar: '🐻', en: 'I have blocks too.',           zh: '我还有积木。' },
            { who: 'Lily', avatar: '🐰', en: 'Great! I love blocks!',        zh: '太好了！我喜欢积木！' },
            { who: 'Tom',  avatar: '🐻', en: 'Let us build a house!',        zh: '我们搭一座房子吧！' },
            { who: 'Lily', avatar: '🐰', en: 'What a happy day!',            zh: '多么开心的一天！' }
          ]
        },
        {
          id: 'u10', title: '星星徽章', icon: '⭐', color: '#FFE0AC',
          narration: '今天汤姆在幼儿园得了一枚星星徽章，走路都在蹦。熊妈妈看出他累坏了："我们的冠军，是不是该充电啦？"',
          lines: [
            { who: '熊妈妈', avatar: '🐻', en: 'How do you feel today?',  zh: '你今天感觉怎么样？' },
            { who: 'Tom', avatar: '🐻', en: 'I am very happy!',        zh: '我非常开心！' },
            { who: '熊妈妈', avatar: '🐻', en: 'Why are you so happy?',   zh: '你为什么这么开心？' },
            { who: 'Tom', avatar: '🐻', en: 'I got a star today.',     zh: '我今天得了一颗星星。' },
            { who: '熊妈妈', avatar: '🐻', en: 'That is wonderful!',      zh: '太棒了！' },
            { who: 'Tom', avatar: '🐻', en: 'But I am tired now.',     zh: '但我现在累了。' },
            { who: '熊妈妈', avatar: '🐻', en: 'Let us have a rest.',     zh: '我们休息一下吧。' },
            { who: 'Tom', avatar: '🐻', en: 'Good night, Mum.',        zh: '晚安，妈妈。' }
          ]
        }
      ]
    },

    /* ================= 篇章二：校园生活（u11-u16） ================= */
    {
      id: 'c2', title: '校园生活', icon: '🏫', color: '#A8E6CF',
      episodes: [
        {
          id: 'u11', title: '课前准备大挑战', icon: '🏫', color: '#FFB7B2',
          narration: '第一节课前的铃声响了！鸮老师站在门口宣布：今天谁的动作最快、应答最响亮，谁就能当"课前小队长"。',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'Good morning, class!',   zh: '早上好，同学们！' },
            { who: 'Lily',    avatar: '🐰', en: 'Good morning, Teacher!', zh: '早上好，老师！' },
            { who: 'Teacher', avatar: '🦉', en: 'Sit down, please.',      zh: '请坐下。' },
            { who: 'Lily',    avatar: '🐰', en: 'Thank you, Teacher.',    zh: '谢谢老师。' },
            { who: 'Teacher', avatar: '🦉', en: 'Are you ready?',         zh: '你们准备好了吗？' },
            { who: 'Lily',    avatar: '🐰', en: 'Yes, I am ready!',       zh: '是的，我准备好了！' },
            { who: 'Teacher', avatar: '🦉', en: 'Let us read together.',  zh: '我们一起读吧。' },
            { who: 'Lily',    avatar: '🐰', en: 'OK! I like English.',    zh: '好！我喜欢英语。' }
          ]
        },
        {
          id: 'u12', title: '红色蜡笔失踪案', icon: '🎨', color: '#FFDAC1',
          narration: '美术课上，汤姆要画一只大苹果，伸手一摸——红色蜡笔不见了！"美术课大救援"开始：问问老师，看看桌肚，看看地板……',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'Today we draw pictures.',    zh: '今天我们画画。' },
            { who: 'Tom',     avatar: '🐻', en: 'Great! I like drawing.',     zh: '太好了！我喜欢画画。' },
            { who: 'Teacher', avatar: '🦉', en: 'What do you want to draw?',  zh: '你想画什么？' },
            { who: 'Tom',     avatar: '🐻', en: 'I want to draw a cat.',      zh: '我想画一只猫。' },
            { who: 'Teacher', avatar: '🦉', en: 'That is a good idea.',       zh: '那是个好主意。' },
            { who: 'Tom',     avatar: '🐻', en: 'May I use the red crayon?',  zh: '我可以用红色蜡笔吗？' },
            { who: 'Teacher', avatar: '🦉', en: 'Sure. Here you are.',        zh: '当然，给你。' },
            { who: 'Tom',     avatar: '🐻', en: 'Thank you very much!',       zh: '非常感谢！' }
          ]
        },
        {
          id: 'u13', title: '森林合唱团', icon: '🎵', color: '#C7CEEA',
          narration: '森林音乐节要选一首开场歌，鸮老师决定带上全班去试音。手帕准备好了吗？小手掌拍起来！',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'Let us sing a song!',         zh: '我们唱首歌吧！' },
            { who: 'Lily',    avatar: '🐰', en: 'Wonderful! I love singing.',  zh: '太棒了！我喜欢唱歌。' },
            { who: 'Teacher', avatar: '🦉', en: 'Can you clap your hands?',    zh: '你能拍拍手吗？' },
            { who: 'Lily',    avatar: '🐰', en: 'Yes, I can clap my hands.',   zh: '是的，我会拍手。' },
            { who: 'Teacher', avatar: '🦉', en: 'Listen to the music now.',    zh: '现在听音乐。' },
            { who: 'Lily',    avatar: '🐰', en: 'It is so beautiful!',         zh: '真好听！' },
            { who: 'Teacher', avatar: '🦉', en: 'Now sing with me, please.',   zh: '现在请跟我一起唱。' },
            { who: 'Lily',    avatar: '🐰', en: 'La la la, I am happy!',       zh: '啦啦啦，我很开心！' }
          ]
        },
        {
          id: 'u14', title: '运动会资格赛', icon: '🏃', color: '#A8E6CF',
          narration: '森林运动会只剩最后一个名额！鸮老师指着远处的大树："谁先安全地跑到树下，谁就赢得名额——注意，是安全地跑，不是拼命地跑。"',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'It is time for sports!',      zh: '运动时间到了！' },
            { who: 'Tom',     avatar: '🐻', en: 'Hurray! I can run fast.',     zh: '好哇！我跑得很快。' },
            { who: 'Teacher', avatar: '🦉', en: 'Let us run to the tree!',     zh: '我们跑到那棵树吧！' },
            { who: 'Tom',     avatar: '🐻', en: 'One, two, three, go!',        zh: '一、二、三，跑！' },
            { who: 'Teacher', avatar: '🦉', en: 'Well done, Tom!',             zh: '做得好，汤姆！' },
            { who: 'Tom',     avatar: '🐻', en: 'I am a little tired now.',    zh: '我现在有点累了。' },
            { who: 'Teacher', avatar: '🦉', en: 'Have some water, please.',    zh: '请喝点水。' },
            { who: 'Tom',     avatar: '🐻', en: 'Thank you, Teacher!',         zh: '谢谢老师！' }
          ]
        },
        {
          id: 'u15', title: '静音模式', icon: '📚', color: '#B5D8EB',
          narration: '图书馆的地毯软绵绵的，走路不能出声，说话只能用悄悄话。莉莉抽到一本新书，封面画着一只小熊——她回头冲汤姆挤挤眼，迫不及待想翻开……',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'Be quiet in the library.',      zh: '在图书馆里要安静。' },
            { who: 'Lily',    avatar: '🐰', en: 'OK, I will be quiet.',          zh: '好的，我会安静的。' },
            { who: 'Teacher', avatar: '🦉', en: 'Do you like reading?',          zh: '你喜欢阅读吗？' },
            { who: 'Lily',    avatar: '🐰', en: 'Yes, I like story books.',      zh: '是的，我喜欢故事书。' },
            { who: 'Teacher', avatar: '🦉', en: 'Here is a book for you.',       zh: '这本书给你。' },
            { who: 'Lily',    avatar: '🐰', en: 'Thank you! What is it about?',  zh: '谢谢！它是关于什么的？' },
            { who: 'Teacher', avatar: '🦉', en: 'It is about a little bear.',    zh: '它是关于一只小熊的。' },
            { who: 'Lily',    avatar: '🐰', en: 'Great! I love bears!',          zh: '太好了！我喜欢熊！' }
          ]
        },
        {
          id: 'u16', title: '金星争夺战', icon: '⭐', color: '#FFE0AC',
          narration: '每周五的颁奖时间！鸮老师宣布：这周的金星，要发给"上课最认真、进步最大"的同学。她念出了那个名字……',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'Tom, you did very well today.', zh: '汤姆，你今天表现得很好。' },
            { who: 'Tom',     avatar: '🐻', en: 'Really? Thank you!',            zh: '真的吗？谢谢！' },
            { who: 'Teacher', avatar: '🦉', en: 'Here is a gold star for you.',  zh: '这颗金星是给你的。' },
            { who: 'Tom',     avatar: '🐻', en: 'Wow! I am so happy!',           zh: '哇！我好开心！' },
            { who: 'Teacher', avatar: '🦉', en: 'You worked hard in class.',     zh: '你上课很认真。' },
            { who: 'Tom',     avatar: '🐻', en: 'I will work harder tomorrow.',  zh: '我明天会更努力。' },
            { who: 'Teacher', avatar: '🦉', en: 'Keep up the good work!',        zh: '继续保持！' },
            { who: 'Tom',     avatar: '🐻', en: 'Yes, I will!',                  zh: '好的，我会的！' }
          ]
        }
      ]
    },

    /* ================= 篇章三：出门去（u17-u23） ================= */
    {
      id: 'c3', title: '出门去', icon: '🚗', color: '#FFD166',
      episodes: [
        {
          id: 'u17', title: '动物管理员体验日', icon: '🦁', color: '#FFD166',
          narration: '兔爸爸搞到两张"动物管理员"体验券！父女俩一大早就进了动物园。第一站看什么？莉莉早就想好了……',
          lines: [
            { who: '兔爸爸',  avatar: '🐰', en: 'Today we go to the zoo!',         zh: '今天我们去动物园！' },
            { who: 'Lily', avatar: '🐰', en: 'Yay! I want to see monkeys.',     zh: '耶！我想看猴子。' },
            { who: '兔爸爸',  avatar: '🐰', en: 'What else do you want to see?',   zh: '你还想看什么？' },
            { who: 'Lily', avatar: '🐰', en: 'I want to see the big elephant.', zh: '我想看大象。' },
            { who: '兔爸爸',  avatar: '🐰', en: 'Look! The elephant is so big!',   zh: '看！大象真大！' },
            { who: 'Lily', avatar: '🐰', en: 'It has a long nose!',             zh: '它有长长的鼻子！' },
            { who: '兔爸爸',  avatar: '🐰', en: 'Yes, that is its trunk.',         zh: '是的，那是它的象鼻。' },
            { who: 'Lily', avatar: '🐰', en: 'I love animals so much!',         zh: '我太喜欢动物了！' }
          ]
        },
        {
          id: 'u18', title: '购物清单大作战', icon: '🛒', color: '#B5EAD7',
          narration: '冰箱空了！熊妈妈写下购物清单：牛奶、面包……"跟紧我，别走丢，今天的任务是把清单上的东西全找到。"',
          lines: [
            { who: '熊妈妈', avatar: '🐻', en: 'We need some milk and bread.',           zh: '我们需要一些牛奶和面包。' },
            { who: 'Tom', avatar: '🐻', en: 'Can I have some apples too?',            zh: '我也能要些苹果吗？' },
            { who: '熊妈妈', avatar: '🐻', en: 'Sure. Let us buy apples.',               zh: '当然，我们买苹果吧。' },
            { who: 'Tom', avatar: '🐻', en: 'Where are the apples, Mum?',             zh: '妈妈，苹果在哪里？' },
            { who: '熊妈妈', avatar: '🐻', en: 'They are over there, in that basket.',   zh: '在那边，那个篮子里。' },
            { who: 'Tom', avatar: '🐻', en: 'The red ones look so nice!',             zh: '红色的看起来真好！' },
            { who: '熊妈妈', avatar: '🐻', en: 'Let us take four apples.',               zh: '我们拿四个苹果吧。' },
            { who: 'Tom', avatar: '🐻', en: 'OK! I will carry them.',                 zh: '好！我来拿。' }
          ]
        },
        {
          id: 'u19', title: '坐反的公交车', icon: '🚌', color: '#B5D8EB',
          narration: '去外婆家的公交车来了！父女俩冲上车，找了个靠窗的位置。车子拐过一个弯，窗外的树怎么越来越陌生了……',
          lines: [
            { who: '兔爸爸',  avatar: '🐰', en: 'The bus is coming!',             zh: '公交车来了！' },
            { who: 'Lily', avatar: '🐰', en: 'Let us get on the bus.',         zh: '我们上车吧。' },
            { who: '兔爸爸',  avatar: '🐰', en: 'Please sit down here.',          zh: '请坐在这里。' },
            { who: 'Lily', avatar: '🐰', en: 'Dad, look out of the window!',   zh: '爸爸，看窗外！' },
            { who: '兔爸爸',  avatar: '🐰', en: 'I see a big red bus too!',       zh: '我看到另一辆红色大巴士！' },
            { who: 'Lily', avatar: '🐰', en: 'And there is a green tree!',     zh: '还有一棵绿色的树！' },
            { who: '兔爸爸',  avatar: '🐰', en: 'We are almost there now.',       zh: '我们快到了。' },
            { who: 'Lily', avatar: '🐰', en: 'I like riding the bus!',         zh: '我喜欢坐公交车！' }
          ]
        },
        {
          id: 'u20', title: '勇敢徽章', icon: '🏥', color: '#E2F0CB',
          narration: '汤姆浑身发烫，耳朵都耷拉下来了。熊妈妈摸摸他的额头："有点发烧，我们去看医生。别怕，森林诊所的医生最温柔了。"',
          lines: [
            { who: '熊妈妈', avatar: '🐻', en: 'You have a fever, Tom.',        zh: '汤姆，你发烧了。' },
            { who: 'Tom', avatar: '🐻', en: 'I do not feel well.',           zh: '我感觉不舒服。' },
            { who: '熊妈妈', avatar: '🐻', en: 'Let us see the doctor.',        zh: '我们去看医生吧。' },
            { who: 'Tom', avatar: '🐻', en: 'Will it hurt, Mum?',            zh: '妈妈，会疼吗？' },
            { who: '熊妈妈', avatar: '🐻', en: 'No, the doctor is very kind.',  zh: '不会的，医生很温柔。' },
            { who: 'Tom', avatar: '🐻', en: 'OK, I will be brave.',          zh: '好的，我会勇敢的。' },
            { who: '熊妈妈', avatar: '🐻', en: 'Good boy. Take the medicine.',  zh: '好孩子，把药吃了。' },
            { who: 'Tom', avatar: '🐻', en: 'I want to get well soon!',      zh: '我想快点好起来！' }
          ]
        },
        {
          id: 'u21', title: '惊喜生日派对', icon: '🎂', color: '#FFD1DC',
          narration: '早上刚起床，莉莉就被蒙住眼睛带到了屋后——"生日快乐！"兔奶奶从大树后探出头，桌上摆着一个插着蜡烛的大蛋糕……',
          lines: [
            { who: '兔奶奶', avatar: '🐰', en: 'Happy birthday, Lily!',            zh: '生日快乐，莉莉！' },
            { who: 'Lily',    avatar: '🐰', en: 'Thank you, Grandma!',              zh: '谢谢奶奶！' },
            { who: '兔奶奶', avatar: '🐰', en: 'Make a wish now.',                 zh: '现在许个愿吧。' },
            { who: 'Lily',    avatar: '🐰', en: 'I wish for a new doll!',           zh: '我想要一个新娃娃！' },
            { who: '兔奶奶', avatar: '🐰', en: 'Blow out the candles!',            zh: '吹灭蜡烛吧！' },
            { who: 'Lily',    avatar: '🐰', en: 'One, two, three... puff!',         zh: '一、二、三……噗！' },
            { who: '兔奶奶', avatar: '🐰', en: 'Here is a gift for you.',          zh: '这是给你的礼物。' },
            { who: 'Lily',    avatar: '🐰', en: 'Wow! A story book! Thank you!',    zh: '哇！一本故事书！谢谢！' }
          ]
        },
        {
          id: 'u22', title: '野餐篮失踪谜案', icon: '🧺', color: '#B5EAD7',
          narration: '郊游日！熊爸爸背上野餐篮，汤姆抱着果汁，铺开格子餐布——咦，篮子怎么轻了一半？"三明治……是不是忘在厨房台面上了？"',
          lines: [
            { who: '熊爸爸',  avatar: '🐻', en: 'What a sunny day!',             zh: '多晴朗的天啊！' },
            { who: 'Tom',  avatar: '🐻', en: 'Let us have a picnic!',         zh: '我们去野餐吧！' },
            { who: '熊爸爸',  avatar: '🐻', en: 'Good idea. I have sandwiches.', zh: '好主意，我做了三明治。' },
            { who: 'Tom',  avatar: '🐻', en: 'I brought some juice.',         zh: '我带了一些果汁。' },
            { who: '熊爸爸',  avatar: '🐻', en: 'Do you like the park?',         zh: '你喜欢这个公园吗？' },
            { who: 'Tom',  avatar: '🐻', en: 'Yes! The flowers are pretty.',  zh: '喜欢！花儿真美。' },
            { who: '熊爸爸',  avatar: '🐻', en: 'Let us sit under that tree.',   zh: '我们坐到那棵树下吧。' },
            { who: 'Tom',  avatar: '🐻', en: 'Great! I am hungry now.',       zh: '太好了！我现在饿了。' }
          ]
        },
        {
          id: 'u23', title: '小鱼泳技班', icon: '🏊', color: '#B5D8EB',
          narration: '森林游泳池开放了！兔妈妈带着莉莉来上第一节课。水凉凉的，莉莉却一点也不怕——"看我的！"',
          lines: [
            { who: '兔妈妈',  avatar: '🐰', en: 'The water is so cool!',               zh: '水真凉啊！' },
            { who: 'Lily', avatar: '🐰', en: 'I can swim like a fish!',             zh: '我能像鱼一样游泳！' },
            { who: '兔妈妈',  avatar: '🐰', en: 'Be careful in the water.',            zh: '在水里要小心。' },
            { who: 'Lily', avatar: '🐰', en: 'Yes, Mum. I can float.',              zh: '好的，妈妈。我会漂浮。' },
            { who: '兔妈妈',  avatar: '🐰', en: 'Can you put your face in the water?', zh: '你能把脸埋进水里吗？' },
            { who: 'Lily', avatar: '🐰', en: 'Yes, I can hold my breath!',          zh: '能，我能憋气！' },
            { who: '兔妈妈',  avatar: '🐰', en: 'You are a good swimmer!',             zh: '你真是游泳小能手！' },
            { who: 'Lily', avatar: '🐰', en: 'I love swimming so much!',            zh: '我太喜欢游泳了！' }
          ]
        }
      ]
    },

    /* ================= 篇章四：四季之歌（u24-u29） ================= */
    {
      id: 'c4', title: '四季之歌', icon: '🍂', color: '#B5D8EB',
      episodes: [
        {
          id: 'u24', title: '春日风筝救援', icon: '🌸', color: '#FFD1DC',
          narration: '春天的草地上开满了小花。莉莉和汤姆的风筝挂在了老橡树的枝丫上。"别爬树！"汤姆拉拉莉莉的袖子，"我们先欣赏一下春天，再想办法。"',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'Look! The flowers are out!',      zh: '看！花儿开了！' },
            { who: 'Lily', avatar: '🐰', en: 'Spring is coming at last!',       zh: '春天终于来了！' },
            { who: 'Tom',  avatar: '🐻', en: 'The trees are green again.',      zh: '树又变绿了。' },
            { who: 'Lily', avatar: '🐰', en: 'And the birds are singing!',      zh: '鸟儿也在唱歌！' },
            { who: 'Tom',  avatar: '🐻', en: 'What do you like about spring?',  zh: '你喜欢春天的什么？' },
            { who: 'Lily', avatar: '🐰', en: 'I like the warm sunshine.',       zh: '我喜欢温暖的阳光。' },
            { who: 'Tom',  avatar: '🐻', en: 'Let us fly a kite!',              zh: '我们去放风筝吧！' },
            { who: 'Lily', avatar: '🐰', en: 'Wonderful idea!',                 zh: '好主意！' }
          ]
        },
        {
          id: 'u25', title: '融化的冰淇淋', icon: '🌞', color: '#FFE0AC',
          narration: '夏天的太阳把石子路烤得发烫。汤姆的冰淇淋"啪嗒"滴在了鞋面上。"化得太快了！"他灵机一动，"我们去做夏天最棒的两件事！"',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'It is so hot today!',               zh: '今天真热啊！' },
            { who: 'Lily', avatar: '🐰', en: 'I am sweating a lot!',              zh: '我出了好多汗！' },
            { who: 'Tom',  avatar: '🐻', en: 'Let us eat some ice cream!',        zh: '我们吃冰淇淋吧！' },
            { who: 'Lily', avatar: '🐰', en: 'Great! I like cold ice cream.',     zh: '太好了！我喜欢凉凉的冰淇淋。' },
            { who: 'Tom',  avatar: '🐻', en: 'Do you like swimming in summer?',   zh: '夏天你喜欢游泳吗？' },
            { who: 'Lily', avatar: '🐰', en: 'Yes! The pool feels wonderful.',    zh: '喜欢！游泳池真舒服。' },
            { who: 'Tom',  avatar: '🐻', en: 'Summer is my favorite season!',     zh: '夏天是我最喜欢的季节！' },
            { who: 'Lily', avatar: '🐰', en: 'Mine too! Let us go now!',          zh: '我也是！我们走吧！' }
          ]
        },
        {
          id: 'u26', title: '落叶寻宝图', icon: '🍂', color: '#FFDAC1',
          narration: '秋天把森林染成了金黄色。兔奶奶拿出一张"落叶寻宝图"：找到红色和棕色的叶子各一片，就能换一杯热苹果汁！',
          lines: [
            { who: 'Lily', avatar: '🐰', en: 'Look at the yellow leaves!',        zh: '看这些黄叶子！' },
            { who: 'Tom',  avatar: '🐻', en: 'Autumn is so beautiful!',           zh: '秋天真美啊！' },
            { who: 'Lily', avatar: '🐰', en: 'The leaves are falling down.',      zh: '叶子正在落下来。' },
            { who: 'Tom',  avatar: '🐻', en: 'Let us collect some leaves.',       zh: '我们捡些叶子吧。' },
            { who: 'Lily', avatar: '🐰', en: 'I have a red one and a brown one!', zh: '我有一片红的和一片棕的！' },
            { who: 'Tom',  avatar: '🐻', en: 'I can make a leaf picture!',        zh: '我可以做一幅树叶画！' },
            { who: 'Lily', avatar: '🐰', en: 'What can I make with mine?',        zh: '我的能做什么呢？' },
            { who: 'Tom',  avatar: '🐻', en: 'Let us make it together!',          zh: '我们一起做吧！' }
          ]
        },
        {
          id: 'u27', title: '雪人鼻子保卫战', icon: '⛄', color: '#B5D8EB',
          narration: '冬天的第一场雪下了整整一夜！汤姆和熊奶奶堆了一个漂亮的雪人，正愁没有胡萝卜当鼻子，小松鼠蹦过来："我仓库里有，跟我来！"',
          lines: [
            { who: 'Tom',     avatar: '🐻', en: 'Grandma, it is snowing!',            zh: '奶奶，下雪了！' },
            { who: '熊奶奶', avatar: '🐻', en: 'Wow! The ground is white!',           zh: '哇！地上白茫茫的！' },
            { who: 'Tom',     avatar: '🐻', en: 'Can we build a snowman?',             zh: '我们能堆雪人吗？' },
            { who: '熊奶奶', avatar: '🐻', en: 'Sure. Let us find a hat for him.',    zh: '当然，我们给他找顶帽子吧。' },
            { who: 'Tom',     avatar: '🐻', en: 'I will find two stones for his eyes!', zh: '我来找两颗石头做他的眼睛！' },
            { who: '熊奶奶', avatar: '🐻', en: 'And a carrot for his nose!',          zh: '再用胡萝卜做他的鼻子！' },
            { who: 'Tom',     avatar: '🐻', en: 'Our snowman is so cute!',             zh: '我们的雪人真可爱！' },
            { who: '熊奶奶', avatar: '🐻', en: 'But my hands are so cold!',           zh: '但是我的手好冷啊！' }
          ]
        },
        {
          id: 'u28', title: '墙上的小画家', icon: '🖼️', color: '#FFD1DC',
          narration: '莉莉拿着蜡笔在客厅里转圈，想找个大地方画画。雪白的墙在向她招手……"妈妈！我想在墙上画！"',
          lines: [
            { who: 'Lily', avatar: '🐰', en: 'Mum, look at my picture!',        zh: '妈妈，看我的画！' },
            { who: '兔妈妈',  avatar: '🐰', en: 'What a beautiful flower!',        zh: '多美的花啊！' },
            { who: 'Lily', avatar: '🐰', en: 'I drew it all by myself.',        zh: '这是我自己画的。' },
            { who: '兔妈妈',  avatar: '🐰', en: 'You are a little artist!',        zh: '你真是个小艺术家！' },
            { who: 'Lily', avatar: '🐰', en: 'Can I draw on the wall?',         zh: '我能在墙上画吗？' },
            { who: '兔妈妈',  avatar: '🐰', en: 'No, dear. Please use this paper.', zh: '不行，亲爱的，请用这张纸。' },
            { who: 'Lily', avatar: '🐰', en: 'OK! I will draw a big house.',     zh: '好！我要画一座大房子。' },
            { who: '兔妈妈',  avatar: '🐰', en: 'I will put it on the fridge!',    zh: '我会把它贴在冰箱上！' }
          ]
        },
        {
          id: 'u29', title: '小狗求收养记', icon: '🐶', color: '#B5EAD7',
          narration: '雨天放学的路上，一只湿漉漉的小棕狗缩在纸箱里发抖。汤姆蹲下来："爸爸……我们能养它吗？"熊爸爸没有马上回答——养小狗，可是个大承诺。',
          lines: [
            { who: 'Tom', avatar: '🐻', en: 'Dad, can we keep the puppy?',         zh: '爸爸，我们能养这只小狗吗？' },
            { who: '熊爸爸', avatar: '🐻', en: 'A puppy needs a lot of care.',        zh: '小狗需要很多照顾。' },
            { who: 'Tom', avatar: '🐻', en: 'I will feed him every day!',          zh: '我会每天喂他的！' },
            { who: '熊爸爸', avatar: '🐻', en: 'And who will walk him?',              zh: '那谁来遛它呢？' },
            { who: 'Tom', avatar: '🐻', en: 'I will! After school, I promise!',    zh: '我来！放学后，我保证！' },
            { who: '熊爸爸', avatar: '🐻', en: 'OK, but you must be responsible.',    zh: '好吧，但你必须负责。' },
            { who: 'Tom', avatar: '🐻', en: 'Thank you, Dad! I love puppies!',     zh: '谢谢爸爸！我喜欢小狗！' },
            { who: '熊爸爸', avatar: '🐻', en: "Let us find his owner first!",        zh: '我们先帮他找到主人吧！' }
          ]
        }
      ]
    },

    /* ================= 篇章五：好习惯（u30-u37） ================= */
    {
      id: 'c5', title: '好习惯', icon: '🌟', color: '#C7CEEA',
      episodes: [
        {
          id: 'u30', title: '铅笔失踪事件', icon: '🙋', color: '#C7CEEA',
          narration: '画画时间到了，莉莉一摸笔袋——心凉了半截：铅笔不见了！她深深吸一口气，想起鸮老师的话：东西不见了，先别慌，按顺序找。',
          lines: [
            { who: 'Lily',    avatar: '🐰', en: 'Excuse me, Teacher.',              zh: '打扰一下，老师。' },
            { who: 'Teacher', avatar: '🦉', en: 'Yes, Lily? What is it?',            zh: '怎么了，莉莉？' },
            { who: 'Lily',    avatar: '🐰', en: 'I cannot find my pencil.',          zh: '我找不到我的铅笔了。' },
            { who: 'Teacher', avatar: '🦉', en: 'Look in your desk first.',          zh: '先看看你的课桌里。' },
            { who: 'Lily',    avatar: '🐰', en: 'It is not in my desk.',             zh: '课桌里没有。' },
            { who: 'Teacher', avatar: '🦉', en: 'Maybe it is on the floor.',         zh: '也许它在地上。' },
            { who: 'Lily',    avatar: '🐰', en: 'Oh, here it is! Under my chair!',   zh: '哦，它在这儿！在我的椅子下面！' },
            { who: 'Teacher', avatar: '🦉', en: 'Well done! You found it!',          zh: '真棒！你找到了！' }
          ]
        },
        {
          id: 'u31', title: '打碎的杯子', icon: '😔', color: '#E2F0CB',
          narration: '"哐当——！"汤姆的尾巴扫过了桌子，熊奶奶送他的蓝杯子在地上摔成了两半。客厅里安静得能听见心跳……',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'Oh no! I broke your cup!',         zh: '哦不！我打碎了你的杯子！' },
            { who: 'Lily', avatar: '🐰', en: 'That was my favorite cup!',        zh: '那是我最喜欢的杯子！' },
            { who: 'Tom',  avatar: '🐻', en: 'I am really sorry, Lily.',         zh: '我真的对不起，莉莉。' },
            { who: 'Lily', avatar: '🐰', en: 'You should be more careful.',      zh: '你应该更小心一点。' },
            { who: 'Tom',  avatar: '🐻', en: 'I will buy you a new one.',        zh: '我会给你买一个新的。' },
            { who: 'Lily', avatar: '🐰', en: 'That is OK. I forgive you.',       zh: '没关系，我原谅你。' },
            { who: 'Tom',  avatar: '🐻', en: 'Thank you for forgiving me!',      zh: '谢谢你原谅我！' },
            { who: 'Lily', avatar: '🐰', en: 'Let us clean it up together.',     zh: '我们一起打扫干净吧。' }
          ]
        },
        {
          id: 'u32', title: '餐具摆位挑战', icon: '🧹', color: '#B5EAD7',
          narration: '熊妈妈的围裙还没解开，新任务就来了："小帮手，晚餐摆餐具！"汤姆挽起袖子——这可是他第一次独立完成任务。',
          lines: [
            { who: '熊妈妈', avatar: '🐻', en: 'Tom, can you help me?',             zh: '汤姆，你能帮我吗？' },
            { who: 'Tom', avatar: '🐻', en: 'Of course! What can I do?',         zh: '当然！我能做什么？' },
            { who: '熊妈妈', avatar: '🐻', en: 'Please set the table.',             zh: '请把餐具摆好。' },
            { who: 'Tom', avatar: '🐻', en: 'Where are the plates?',             zh: '盘子在哪里？' },
            { who: '熊妈妈', avatar: '🐻', en: 'They are in the cupboard.',         zh: '它们在橱柜里。' },
            { who: 'Tom', avatar: '🐻', en: 'One plate for you, one for Dad!',   zh: '一个盘子给你，一个给爸爸！' },
            { who: '熊妈妈', avatar: '🐻', en: 'And one for you too!',              zh: '还有一个给你的！' },
            { who: 'Tom', avatar: '🐻', en: 'Helping at home is fun!',           zh: '在家帮忙真有趣！' }
          ]
        },
        {
          id: 'u33', title: '再讲一个故事嘛', icon: '🌙', color: '#C7CEEA',
          narration: '墙上的钟指向八点，该睡觉了。莉莉抱着枕头蹭到兔奶奶床边："奶奶……再讲一个故事嘛，就一个！"',
          lines: [
            { who: '兔奶奶', avatar: '🐰', en: "It is eight o'clock now.",           zh: '现在八点钟了。' },
            { who: 'Lily',    avatar: '🐰', en: 'Just one more story, please!',       zh: '请再讲一个故事嘛！' },
            { who: '兔奶奶', avatar: '🐰', en: 'All right. One little story.',       zh: '好吧，一个小故事。' },
            { who: 'Lily',    avatar: '🐰', en: 'Is it about the moon?',              zh: '是关于月亮的故事吗？' },
            { who: '兔奶奶', avatar: '🐰', en: 'Yes! The moon says goodnight.',      zh: '是的！月亮说晚安。' },
            { who: 'Lily',    avatar: '🐰', en: 'Goodnight, moon and stars!',         zh: '晚安，月亮和星星！' },
            { who: '兔奶奶', avatar: '🐰', en: 'Now close your eyes and sleep.',     zh: '现在闭上眼睛睡觉吧。' },
            { who: 'Lily',    avatar: '🐰', en: 'Goodnight, Grandma. I love you!',    zh: '晚安，奶奶。我爱你！' }
          ]
        },
        {
          id: 'u34', title: '红绿灯大考验', icon: '🚦', color: '#FFE0AC',
          narration: '周末的街道真热闹，可人行横道前的红灯亮着。"记住：宁等三分，不抢一秒。"熊爸爸趁机给汤姆上了今天的路考课。',
          lines: [
            { who: '熊爸爸',  avatar: '🐻', en: 'We must cross the road now.',    zh: '我们现在必须过马路了。' },
            { who: 'Tom',  avatar: '🐻', en: 'The light is red, Dad!',         zh: '爸爸，灯是红的！' },
            { who: '熊爸爸',  avatar: '🐻', en: 'Right. We must wait here.',      zh: '对，我们必须在这里等。' },
            { who: 'Tom',  avatar: '🐻', en: 'Look! Now it is green!',         zh: '看！现在变绿了！' },
            { who: '熊爸爸',  avatar: '🐻', en: 'Look left, then look right.',    zh: '看看左边，再看看右边。' },
            { who: 'Tom',  avatar: '🐻', en: 'The road is clear now!',         zh: '现在路上没车了！' },
            { who: '熊爸爸',  avatar: '🐻', en: 'Hold my hand and walk fast.',    zh: '牵着我的手，快走。' },
            { who: 'Tom',  avatar: '🐻', en: 'Safety first! We made it!',      zh: '安全第一！我们过来了！' }
          ]
        },
        {
          id: 'u35', title: '小火车轮流开', icon: '🚂', color: '#FFD1DC',
          narration: '兔奶奶送的木头小火车是莉莉的宝贝。汤姆眼睛都亮了，话到嘴边又咽回去——"我可以玩吗？"莉莉大大方方地把车递了过去。',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'What a big toy train!',           zh: '好大的玩具火车啊！' },
            { who: 'Lily', avatar: '🐰', en: 'My grandma gave it to me.',       zh: '这是我奶奶给我的。' },
            { who: 'Tom',  avatar: '🐻', en: 'May I play with it?',             zh: '我可以玩吗？' },
            { who: 'Lily', avatar: '🐰', en: 'Sure! You can be the driver.',    zh: '当然！你可以当司机。' },
            { who: 'Tom',  avatar: '🐻', en: 'Thank you! Choo choo!',           zh: '谢谢！呜——呜！' },
            { who: 'Lily', avatar: '🐰', en: 'I will be the passenger!',        zh: '我来当乘客！' },
            { who: 'Tom',  avatar: '🐻', en: 'Sharing toys is more fun!',       zh: '分享玩具更有趣！' },
            { who: 'Lily', avatar: '🐰', en: 'Yes! Let us play together!',      zh: '是的！我们一起玩吧！' }
          ]
        },
        {
          id: 'u36', title: '胡萝卜品尝任务', icon: '🥕', color: '#B5EAD7',
          narration: '午饭时间，莉莉的盘子里躺着一小堆胡萝卜。"我只想吃蛋糕！"兔妈妈举起叉子："挑战任务：先尝一小口，你可能会改写对它的看法哦。"',
          lines: [
            { who: '兔妈妈',  avatar: '🐰', en: 'What do you want for lunch?',     zh: '午饭你想吃什么？' },
            { who: 'Lily', avatar: '🐰', en: 'I want cake and candy!',          zh: '我想吃蛋糕和糖果！' },
            { who: '兔妈妈',  avatar: '🐰', en: 'Too much sugar is not good.',     zh: '吃太多糖不好。' },
            { who: 'Lily', avatar: '🐰', en: 'But candy is so sweet!',          zh: '但是糖果很甜啊！' },
            { who: '兔妈妈',  avatar: '🐰', en: 'Vegetables make you strong.',     zh: '蔬菜让你强壮。' },
            { who: 'Lily', avatar: '🐰', en: 'Do I have to eat carrots?',       zh: '我必须吃胡萝卜吗？' },
            { who: '兔妈妈',  avatar: '🐰', en: 'Just try a little bit first.',    zh: '先尝一小口就好。' },
            { who: 'Lily', avatar: '🐰', en: 'OK! Crunch crunch... not bad!',   zh: '好吧！咔嚓咔嚓……还不错！' }
          ]
        },
        {
          id: 'u37', title: '房间整理大赛', icon: '🛏️', color: '#C7CEEA',
          narration: '熊奶奶来检查"小绅士的房间"，汤姆骄傲地推开门——被子方方正正，书架整整齐齐。奶奶笑着掏出老花镜："让我看看有没有漏网之鱼。"',
          lines: [
            { who: '熊奶奶', avatar: '🐻', en: 'Your room is very tidy!',           zh: '你的房间真整洁！' },
            { who: 'Tom',     avatar: '🐻', en: 'Thank you, Grandma!',               zh: '谢谢奶奶！' },
            { who: '熊奶奶', avatar: '🐻', en: 'Where is your schoolbag?',          zh: '你的书包在哪里？' },
            { who: 'Tom',     avatar: '🐻', en: 'It is on the bed.',                 zh: '它在床上。' },
            { who: '熊奶奶', avatar: '🐻', en: 'Put it under the desk, please.',    zh: '请把它放到书桌下面。' },
            { who: 'Tom',     avatar: '🐻', en: 'OK! And my books are on the shelf.', zh: '好的！我的书在书架上。' },
            { who: '熊奶奶', avatar: '🐻', en: 'What a clean and nice room!',       zh: '多干净漂亮的房间啊！' },
            { who: 'Tom',     avatar: '🐻', en: 'I clean it every Sunday!',          zh: '我每个星期天都打扫！' }
          ]
        }
      ]
    },

    /* ================= 篇章六：新年与梦想（u38-u40） ================= */
    {
      id: 'c6', title: '新年与梦想', icon: '🧨', color: '#FF9AA2',
      episodes: [
        {
          id: 'u38', title: '红包惊喜', icon: '🧨', color: '#FF9AA2',
          narration: '除夕夜，森林小镇挂满了红灯笼。兔奶奶从怀里掏出一个小红包："莉莉，新年快乐！里面装的不是糖——打开看看？"',
          lines: [
            { who: '兔奶奶', avatar: '🐰', en: 'Happy New Year, Lily!',              zh: '新年快乐，莉莉！' },
            { who: 'Lily',    avatar: '🐰', en: 'Happy New Year, Grandma!',           zh: '新年快乐，奶奶！' },
            { who: '兔奶奶', avatar: '🐰', en: 'Here is a red envelope for you!',    zh: '这是给你的红包！' },
            { who: 'Lily',    avatar: '🐰', en: 'Thank you! What is inside?',         zh: '谢谢！里面是什么？' },
            { who: '兔奶奶', avatar: '🐰', en: 'Open it and see!',                   zh: '打开看看！' },
            { who: 'Lily',    avatar: '🐰', en: 'Wow! Lucky money! Thank you!',       zh: '哇！压岁钱！谢谢！' },
            { who: '兔奶奶', avatar: '🐰', en: 'Wish you a happy new year!',         zh: '祝你新年快乐！' },
            { who: 'Lily',    avatar: '🐰', en: 'I wish you good health too!',        zh: '也祝您身体健康！' }
          ]
        },
        {
          id: 'u39', title: '梦想分享会', icon: '👨‍⚕️', color: '#B5D8EB',
          narration: '开学第一课，鸮老师不教单词，先问了一个大问题："你长大了想做什么？"教室里安静了一秒，然后一只只手举得高高的……',
          lines: [
            { who: 'Teacher', avatar: '🦉', en: 'What do you want to be?',           zh: '你长大了想做什么？' },
            { who: 'Tom',     avatar: '🐻', en: 'I want to be a doctor!',             zh: '我想当医生！' },
            { who: 'Teacher', avatar: '🦉', en: 'That is a wonderful dream!',         zh: '那是个很棒的梦想！' },
            { who: 'Tom',     avatar: '🐻', en: 'I want to help sick people.',        zh: '我想帮助生病的人。' },
            { who: 'Teacher', avatar: '🦉', en: 'You must study hard then.',          zh: '那你必须努力学习。' },
            { who: 'Tom',     avatar: '🐻', en: 'I will study every day!',            zh: '我会每天学习的！' },
            { who: 'Teacher', avatar: '🦉', en: 'Never give up your dream!',          zh: '永远不要放弃你的梦想！' },
            { who: 'Tom',     avatar: '🐻', en: 'I will not! Thank you, Teacher!',    zh: '我不会的！谢谢老师！' }
          ]
        },
        {
          id: 'u40', title: '假期通信计划', icon: '🎒', color: '#C7CEEA',
          narration: '学年结束了，暑假正式开始！火车站台前，莉莉和汤姆拉钩约定：虽然要分开一个月，但友谊不断线——"我们写信吧！"',
          lines: [
            { who: 'Tom',  avatar: '🐻', en: 'The holiday is coming at last!',    zh: '假期终于要来了！' },
            { who: 'Lily', avatar: '🐰', en: 'Yes! But I will miss you!',         zh: '是的！但我会想你的！' },
            { who: 'Tom',  avatar: '🐻', en: 'I will miss you too, my friend.',   zh: '我也会想你的，我的朋友。' },
            { who: 'Lily', avatar: '🐰', en: 'Let us write to each other!',       zh: '我们互相写信吧！' },
            { who: 'Tom',  avatar: '🐻', en: 'Good idea! I will send you photos!', zh: '好主意！我会给你寄照片！' },
            { who: 'Lily', avatar: '🐰', en: 'And I will tell you stories!',      zh: '我会给你讲故事！' },
            { who: 'Tom',  avatar: '🐻', en: 'See you after the holiday!',        zh: '假期后见！' },
            { who: 'Lily', avatar: '🐰', en: 'See you! Take good care!',          zh: '再见！保重！' }
          ]
        }
      ]
    },

    /* ================= 篇章七：爱心萌可 · 魔法森林（u41 试点集） ================= */
    {
      id: 'c7', title: '爱心萌可 · 魔法森林', icon: '💗', color: '#FF9FB2',
      episodes: [
        {
          id: 'u41', title: '魔法森林的约定', icon: '💗', color: '#FF9FB2',
          narration: '乐美公主来到闪闪发光的魔法森林，寻找一只迷路的小萌可。花丛后面传来轻轻的声音："谁在找我呀，啾？"乐美笑着伸出手——从这天起，她们就是最好的搭档了。',
          lines: [
            { who: '乐美',     avatar: '👑', en: 'Heartsping! Where are you?',             zh: '爱心萌可！你在哪里？' },
            { who: '爱心萌可', avatar: '💗', en: 'Who is looking for me, joo?',            zh: '谁在找我呀，啾？' },
            { who: '乐美',     avatar: '👑', en: 'I am Leme. I came to find you.',         zh: '我是乐美，我是来找你的。' },
            { who: '爱心萌可', avatar: '💗', en: 'Find me? Why, joo?',                     zh: '找我？为什么呀，啾？' },
            { who: '乐美',     avatar: '👑', en: 'Because we are partners!',              zh: '因为我们是搭档呀！' },
            { who: '爱心萌可', avatar: '💗', en: 'Partners? I am so happy, joo!',          zh: '搭档？我好开心，啾！' },
            { who: '乐美',     avatar: '👑', en: "Let's go to the magic forest together!", zh: '我们一起去魔法森林吧！' },
            { who: '爱心萌可', avatar: '💗', en: 'Together forever, joo!',                 zh: '永远在一起，啾！' }
          ]
        },
        {
          id: 'u42', title: '茶几后的秘密', icon: '🫖', color: '#FF9FB2',
          narration: '放学后，乐美的同班同学诗雅来家里玩。茶几后面，一只粉色的小精灵正抱着小竖琴偷偷往外看——哇，被发现了！爱心萌可有点害羞，请诗雅一定要保守秘密……',
          lines: [
            { who: '诗雅',     avatar: '🎀', en: 'Wow! A little fairy!',                    zh: '哇！一只小精灵！' },
            { who: '爱心萌可', avatar: '💗', en: 'Oh! Do not tell anyone, joo!',            zh: '哦！不要告诉别人哦，啾！' },
            { who: '诗雅',     avatar: '🎀', en: 'Do not worry. I can keep a secret.',      zh: '别担心，我会保密。' },
            { who: '爱心萌可', avatar: '💗', en: 'Really? You are so kind, joo!',           zh: '真的吗？你真好，啾！' },
            { who: '诗雅',     avatar: '🎀', en: 'Let us be friends!',                      zh: '我们做朋友吧！' },
            { who: '爱心萌可', avatar: '💗', en: 'Friends! I am so happy, joo!',            zh: '朋友！我好开心，啾！' },
            { who: '诗雅',     avatar: '🎀', en: 'Let us play together every day!',         zh: '我们每天一起玩吧！' },
            { who: '爱心萌可', avatar: '💗', en: 'I will play my harp for you, joo!',       zh: '我弹竖琴给你听，啾！' }
          ]
        }
      ]
    }

  ]
};

/* ---------- 拍平成 LESSONS 兼容数组（保持 uXX_lN 音频 key 不变） ---------- */
const STORY_EPISODES = [];
STORY.chapters.forEach(ch => {
  ch.episodes.forEach(ep => {
    ep.chapterId = ch.id;
    ep.chapterTitle = ch.title;
    STORY_EPISODES.push(ep);
  });
});

if (typeof module !== 'undefined') {
  module.exports = { STORY, STORY_EPISODES };
}
