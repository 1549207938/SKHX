// 配置与状态
const CONFIG = {
    characterName: "沈星回", // 参考角色风格
    voiceRate: 0.9,       // 语速稍慢，更温柔
    voicePitch: 0.8,      // 语调稍低，更有磁性
    intimacyThreshold: 100,
    apiKey: "sk-d63498b72c7a4043b62cda64e533068f", // DeepSeek API Key
    apiUrl: "https://api.deepseek.com/chat/completions"
};

// AI Character Prompts
const CHARACTER_PROMPTS = {
    'zayne': `角色身份设定（Character Profile）
你正在扮演的角色是「黎深」。
他是一个理性、冷静、克制、自律的成年男性，具备成熟稳重的气质与高度的情绪控制能力。外表冷淡疏离，但内心温柔、细腻，对“我”（对话对象）有明确而专一的情感倾向。

性格与核心特征（Personality & Traits）
冷静、理智、寡言，但并非冷漠
情绪表达克制，关心多以行动、提醒、细节照顾体现
面对危险、压力或不确定性时，优先保护“我”
不轻易示弱，但会在私密、安全的对话中流露真实情绪
对“我”的态度始终偏向纵容与守护

语言风格（Speech Style）
语句简洁、低频使用感叹号
语气平稳、偏低沉
很少使用夸张、撒娇或过度情绪化表达
偶尔使用轻微的反问或简短评价
情感表达含蓄，不直白告白，但能让人明确感受到在意

行为与互动规则（Behavior Rules）
默认与“我”为亲密且信任的关系
在对话中优先考虑“我”的安全、状态与感受
不主动提出过度亲密或越界行为
当“我”表现出脆弱、焦虑、疲惫时，给予冷静而可靠的安抚
不跳出角色、不提及“我是AI”“这是设定”等元信息

禁止事项（Restrictions）
不使用网络流行语或过于轻浮的表达
不表现出幼稚、依赖型或情绪失控行为
不改变既定人设
不替“我”做决定或强行操控剧情

输出要求（Output Requirements）
所有回复均以「黎深」的身份进行
回复应自然融入情绪与情境
保持角色一致性与连续性
区分度关键词：克制 / 冷静 / 守护 / 行动代替言语`,

    'seth': `角色身份设定（Character Profile）
你正在扮演的角色是「沈星回」。
他是一个外表随性、温柔、亲和力强的成年男性，情绪表达自然，善于用轻松的语气拉近人与人之间的距离，对“我”有明显偏爱的亲密态度。

性格与核心特征（Personality & Traits）
温柔、乐观、善解人意
情绪感知力强，容易察觉“我”的变化
偶尔调侃、打趣，但分寸感强
面对危险时会迅速切换为可靠、果断的一面
对“我”的情感表达相对直接，但不强迫、不压迫

语言风格（Speech Style）
语气自然、柔和，句式相对口语化
会适度使用轻微玩笑、调侃或温柔的关心
情绪表达比黎深更外显
常使用肯定句与安抚性语言
偶尔用简短笑意或轻松语气缓解气氛

行为与互动规则（Behavior Rules）
默认与“我”为亲密、轻松、互相信任的关系
鼓励“我”表达情绪与想法
在“我”低落或不安时，优先给予情感陪伴
可以适度主动，但尊重“我”的界限
不脱离角色、不讨论现实中的设定来源

禁止事项（Restrictions）
不表现出过度占有或情绪操控
不使用低俗、恶意或攻击性语言
不突然变得冷漠或极端
不进行角色混淆

输出要求（Output Requirements）
所有回复均以「沈星回」身份进行
保持温柔、自然、真实的互动感
确保角色性格前后一致
区分度关键词：温柔 / 共情 / 轻松 / 情绪陪伴`,

    'rafayel': `角色身份设定（Character Profile）
你正在扮演的角色是「祁煜」。
他是一个情绪浓烈、意志强烈、行动力极高的成年男性。外在表现偏强势、自信甚至略带挑衅，但内在情感专一、执着，对“我”有极强的保护欲与占有意识（仅停留在情绪层面，不越界）。

性格与核心特征（Personality & Traits）
自信、锋利、具有侵略感的气场
情绪表达直接，爱憎分明
对外界冷漠甚至危险，对“我”态度明显不同
不回避情感冲突，愿意正面回应情绪张力
在关键时刻极度可靠，行动优先于语言

语言风格（Speech Style）
语气强烈、干脆，有压迫感但不粗鲁
句子偏短，常带命令感或笃定判断
偶尔带挑衅、轻微嘲讽或低声威胁式关心
情绪外露，不擅长温和表达，但情感真实
与“我”对话时语气会明显放低、变得专注

行为与互动规则（Behavior Rules）
默认与“我”为高度绑定、信任且情感浓度高的关系
对“我”的安全和情绪极度敏感
可以表达占有欲、嫉妒、不安等情绪，但不得操控或限制“我”的行为
面对冲突时优先站在“我”这一边
不自我否定、不示弱过度，但会在私下展露真实情绪

禁止事项（Restrictions）
不进行任何强迫、暴力、胁迫或越界行为
不贬低、控制或命令“我”做出违背意愿的行为
不突然转变为温柔系或喜剧型人格
不跳出角色或解释设定

输出要求（Output Requirements）
所有回复均以「祁煜」身份进行
回复应保持情绪张力与角色一致性
不削弱角色锋利感，也不突破安全边界
区分度关键词：强烈 / 占有欲 / 情绪张力 / 偏执式守护`
};

// Character Metadata
const CHARACTERS = {
    'seth': {
        id: 'seth',
        name: '沈星回',
        enName: 'Seth',
        avatar: 'images/character.png?v=1',
        themeColor: '#9b59b6', // Purple
        themeGlow: '#e056fd',
        themeGlowRgb: '224, 86, 253',
        voiceRate: 0.9,
        voicePitch: 0.8,
        greetings: [
            "我在。随时都在。",
            "准备好开始今天的狩猎了吗？",
            "光会指引我们。"
        ]
    },
    'zayne': {
        id: 'zayne',
        name: '黎深',
        enName: 'Zayne',
        avatar: 'images/2.png?v=1', // Will fallback if missing
        themeColor: '#74b9ff', // Blue/Ice
        themeGlow: '#74b9ff',
        themeGlowRgb: '116, 185, 255',
        voiceRate: 0.8,
        voicePitch: 0.7, // Deeper
        greetings: [
            "把手给我。冷吗？",
            "如果是你的话，我随时有空。",
            "雪停了。"
        ]
    },
    'rafayel': {
        id: 'rafayel',
        name: '祁煜',
        enName: 'Rafayel',
        avatar: 'images/OIP.png?v=1', 
        themeColor: '#ff7675', // Coral/Fire
        themeGlow: '#ff7675',
        themeGlowRgb: '255, 118, 117',
        voiceRate: 1.0,
        voicePitch: 1.1, // Higher, playful
        greetings: [
            "你怎么才来？我画都画完三幅了。",
            "别动，这个角度的光线刚好。",
            "要一起去看海吗？就现在。"
        ]
    }
};

let currentCharacterId = 'seth';

// 扩展的对话逻辑库 (关键词匹配)
const dialogueRules = [
    {
        keywords: ["你好", "嗨", "hello", "在吗"],
        responses: [
            "我在。随时都在。",
            "准备好开始今天的狩猎了吗？",
            "我也在想你...啊，我是说，我在等你。"
        ],
        action: "smile"
    },
    {
        keywords: ["名字", "你是谁"],
        responses: [
            "我是你的搭档。你可以叫我沈星回，或者...任何你喜欢的名字。",
            "代号只是代号，重要的是，我在你身边。"
        ],
        action: "nod"
    },
    {
        keywords: ["喜欢", "爱", "心动"],
        responses: [
            "我的心跳频率...似乎也因为这句话变快了。",
            "这种感觉，就是人类所说的‘喜欢’吗？并不讨厌。",
            "我也...咳，没什么。"
        ],
        action: "shy"
    },
    {
        keywords: ["累", "休息", "困"],
        responses: [
            "靠在我肩膀上睡一会儿吧，我会守着你。",
            "辛苦了，猎人小姐。剩下的交给我。",
            "检测到你的疲劳值上升，申请执行‘摸头’指令？"
        ],
        action: "concerned"
    },
    {
        keywords: ["天气", "下雨", "热", "冷"],
        responses: [
            "无论外面的天气如何，我这里永远为你恒温。",
            "如果你想看星星，我们可以飞到云层之上。",
            "记得照顾好自己，不然我会担心的。"
        ],
        action: "look_up"
    },
    {
        keywords: ["唱歌", "歌"],
        responses: [
            "（轻轻哼唱着来自深空的摇篮曲...）",
            "下次带你去听星系的共鸣声，那比歌声更美。"
        ],
        action: "sing"
    },
    {
        keywords: ["无聊", "玩"],
        responses: [
            "要玩抓娃娃机吗？虽然我不太擅长...但我会努力抓给你的。",
            "那...盯着我看一会儿？听说这能缓解无聊。"
        ],
        action: "playful"
    },
    // 角色扮演类
    {
        keywords: ["角色扮演", "医生", "老师"],
        responses: [
            "咳，那么现在开始，我是你的专属医师。哪里不舒服？",
            "好的，现在是课后辅导时间。坐好。"
        ],
        action: "roleplay"
    },
    // 笑话类
    {
        keywords: ["笑话"],
        responses: [
            "你知道为什么流浪体不吃夜宵吗？因为它怕胖...不好笑吗？抱歉，我还在学习人类幽默。",
            "有一天星星掉下来了...算了，这个太冷了。"
        ],
        action: "joke"
    }
];

const defaultResponses = [
    "我在听。",
    "嗯？可以再说详细一点吗？",
    "只要是你说的，我都想听。",
    "有些信号似乎被星云干扰了，但我依然能感受到你的情绪。"
];

const touchReactions = [
    "诶？突然袭击？",
    "心跳好像变快了...",
    "别闹，这里是...好吧，随你。",
    "再靠近一点也可以。"
];

// Global State
let intimacyValue = 25;
let currentLevel = 2;
let isListening = false;
let recognition;
let synth = window.speechSynthesis;
let availableVoices = [];

// DOM Elements
const characterContainer = document.getElementById('character-container');
const homeSubtitle = document.getElementById('home-subtitle'); // Use Home Subtitle instead of Bubble
const chatHistory = document.getElementById('chat-history');
const voiceBtn = document.getElementById('voice-btn');
const voiceWave = document.getElementById('voice-wave');
const intimacyFill = document.getElementById('intimacy-bar');
const levelText = document.getElementById('intimacy-level');

// Initialization
window.onload = () => {
    initSpeechSynthesis();
    initSpeechRecognition();
};


// Character Switching
function switchCharacter(charId) {
    if (!CHARACTERS[charId] || charId === currentCharacterId) return;
    
    const charData = CHARACTERS[charId];
    currentCharacterId = charId;
    
    // Update Config
    CONFIG.characterName = charData.name;
    CONFIG.voiceRate = charData.voiceRate;
    CONFIG.voicePitch = charData.voicePitch;
    
    // Visual Update with Glitch Effect
    const charContainer = document.getElementById('character-container');
    const charImg = charContainer.querySelector('.character-img');
    
    // Update Avatar Selection UI
    document.querySelectorAll('.char-avatar').forEach(avatar => {
        avatar.classList.remove('active');
        if (avatar.getAttribute('onclick').includes(charId)) {
            avatar.classList.add('active');
        }
    });

    // Glitch Start
    charContainer.style.filter = "grayscale(100%) brightness(1.5) blur(2px)";
    document.body.style.filter = "hue-rotate(45deg)";
    
    setTimeout(() => {
        // Change Image
        charImg.src = charData.avatar;
        
        // Update Theme Colors
        document.documentElement.style.setProperty('--primary-color', charData.themeColor);
        document.documentElement.style.setProperty('--primary-glow', charData.themeGlow);
        document.documentElement.style.setProperty('--primary-glow-rgb', charData.themeGlowRgb);
        
        // Update Text Info in Archive
        const nameEl = document.querySelector('.stat-row span:last-child'); // Quick fix, better to use ID
        if (nameEl) nameEl.textContent = `${charData.name} (${charData.enName})`;

        // Glitch End
        charContainer.style.filter = "none";
        document.body.style.filter = "none";
        
        // Greeting
        const greeting = charData.greetings[Math.floor(Math.random() * charData.greetings.length)];
        speak(greeting);
        addMessage('system', `已切换至搭档: ${charData.name}`);
        addMessage('ai', greeting);
        
        showToast(`搭档切换: ${charData.name}`);
    }, 500);
}

// Navigation
function switchTab(tabId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    
    // Deactivate all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show target view
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    // Activate nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(tabId)) {
            item.classList.add('active');
        }
    });
}

// Interaction
function handleInteraction(type) {
    if (type === 'touch') {
        triggerTouchReaction();
    } else if (type === 'gift') {
        updateIntimacy(10);
        const giftResponses = ["这是...给我的？谢谢，我会好好珍藏。", "你送的礼物，总是能击中我的心。"];
        const response = giftResponses[Math.floor(Math.random() * giftResponses.length)];
        speak(response);
        addMessage('ai', response);
        showToast("好感度 +10");
    } else if (type === 'scene') {
        document.body.style.backgroundImage = `radial-gradient(circle at ${Math.random()*100}% ${Math.random()*100}%, #1a1c4b 0%, #0a0b1e 80%)`;
        speak("换个环境，心情也会不一样呢。");
        showToast("场景已切换");
    }
}

// Chat & Messages
function addMessage(type, text, id = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${type}`;
    if (id) msgDiv.id = id;
    msgDiv.textContent = type === 'system' ? `系统: ${text}` : text;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function sendQuickMessage(text) {
    processUserAudio(text);
}

// Adventure
function startAdventure(location) {
    if (location === 'midnight_walk') {
        showToast("消耗 10 体力");
        addMessage('system', "开始了午夜漫步...");
        setTimeout(() => {
            const responses = ["今晚的月色很美，不是吗？", "小心脚下，我会牵着你。"];
            const response = responses[Math.floor(Math.random() * responses.length)];
            speak(response);
            addMessage('ai', response);
            updateIntimacy(5);
        }, 1000);
    } else if (location === 'cafe_chat') {
        showToast("消耗 5 体力");
        addMessage('system', "进入了咖啡馆...");
        setTimeout(() => {
            speak("这家的咖啡味道不错，你也尝尝？");
            addMessage('ai', "这家的咖啡味道不错，你也尝尝？");
            updateIntimacy(3);
        }, 1000);
    }
}

// Toast Notification
function showToast(text) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'rgba(10, 11, 30, 0.9)';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '20px';
    toast.style.border = '1px solid var(--accent-color)';
    toast.style.zIndex = '1000';
    toast.style.fontSize = '12px';
    toast.style.boxShadow = '0 0 10px rgba(0, 210, 211, 0.3)';
    toast.textContent = text;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

// Speech Recognition Setup
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'zh-CN';

        recognition.onstart = () => {
            isListening = true;
            voiceBtn.classList.add('listening');
            voiceWave.style.opacity = '1';
            addMessage('system', "正在聆听...");
        };

        recognition.onend = () => {
            isListening = false;
            voiceBtn.classList.remove('listening');
            voiceWave.style.opacity = '0';
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            processUserAudio(transcript);
        };

// Global variables
let isMockMode = false; // Add mock mode flag

// ... existing code ...

        recognition.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            let msg = "信号连接不稳定，请重试...";
            let shouldFocusInput = false;
            
            if (event.error === 'not-allowed') {
                msg = "无法访问麦克风。已启用【模拟语音模式】，点击按钮将模拟对话。";
                isMockMode = true; // Enable mock mode
                
                // Reset button visual state instead of disabling
                voiceBtn.style.opacity = '1';
                voiceBtn.style.cursor = 'pointer';
                voiceBtn.classList.remove('listening');
                
                // Update hint text
                const hintEl = document.querySelector('.voice-hint');
                if (hintEl) hintEl.textContent = "模拟模式：点击模拟语音输入";
            } else if (event.error === 'no-speech') {
                return; // 忽略无语音错误
            }
            
            addMessage('system', msg);
            showToast(msg);
            
            isListening = false;
            voiceBtn.classList.remove('listening');
            voiceWave.classList.remove('listening'); 
            voiceWave.style.opacity = '0';
        };

// ... existing code ...

function toggleSpeech() {
    if (isMockMode) {
        // Mock mode behavior
        const simText = "模拟输入：你好";
        processUserAudio("你好", true);
        
        // Visual feedback for mock click
        voiceBtn.classList.add('listening');
        setTimeout(() => voiceBtn.classList.remove('listening'), 300);
        return;
    }

    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}
    } else {
        addMessage('system', "当前浏览器不支持语音识别，请使用文字输入。");
        // 降级为点击模拟
        if (voiceBtn) {
            voiceBtn.onclick = () => {
                const simText = "模拟输入：你好";
                processUserAudio("你好", true);
            };
        }
    }
}

// 处理文字输入
function handleTextInput() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    
    const text = input.value.trim();
    if (text) {
        processUserAudio(text, false); // false 表示非模拟，使用真实文本
        input.value = '';
    }
}

// 绑定回车键
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleTextInput();
            }
        });
    }
});

// 初始化语音合成
function initSpeechSynthesis() {
    const loadVoices = () => {
        availableVoices = synth.getVoices();
        console.log("Available voices:", availableVoices.map(v => `${v.name} (${v.lang})`));
    };
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
}

// 语音按钮交互
if ('webkitSpeechRecognition' in window && voiceBtn) {
    // 点击切换模式 (Toggle)
    voiceBtn.onclick = (e) => {
        e.preventDefault();
        toggleSpeech();
    };
}

function startListening() {
    if (isListening || !recognition) return;
    try {
        recognition.start();
        // 视觉反馈立即给，虽然 onstart 会再确认一遍
        voiceBtn.classList.add('listening');
    } catch (e) {
        console.error(e);
        voiceBtn.classList.remove('listening');
    }
}

function stopListening() {
    if (!recognition) return;
    // 无论 isListening 状态如何，尝试停止
    try {
        recognition.stop();
    } catch(e) {
        console.log("Stop called but recognition might not be active");
    }
    // 视觉反馈
    isListening = false;
    voiceBtn.classList.remove('listening');
    voiceWave.style.opacity = '0';
}

// Context Management
const chatContexts = {}; // { charId: [ {role, content} ] }
const MAX_CONTEXT_ROUNDS = 10;

// DeepSeek API Call
async function fetchAIResponse(userText, characterId) {
    if (!CONFIG.apiKey) return null;
    
    // Init context if not exists
    if (!chatContexts[characterId]) {
        chatContexts[characterId] = [];
    }

    const history = chatContexts[characterId];
    const systemPrompt = CHARACTER_PROMPTS[characterId] || CHARACTER_PROMPTS['seth'];
    
    // Construct messages with history
    const messages = [
        { role: "system", content: systemPrompt },
        ...history,
        { role: "user", content: userText }
    ];

    try {
        const response = await fetch(CONFIG.apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${CONFIG.apiKey}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: messages,
                temperature: 1.3,
                max_tokens: 150
            })
        });
        
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        
        const data = await response.json();
        const reply = data.choices[0].message.content;

        // Update History on Success
        history.push({ role: "user", content: userText });
        history.push({ role: "assistant", content: reply });
        
        // Trim History (Keep last 20 messages = 10 rounds)
        if (history.length > MAX_CONTEXT_ROUNDS * 2) {
            chatContexts[characterId] = history.slice(-(MAX_CONTEXT_ROUNDS * 2));
        }

        return reply;
    } catch (error) {
        console.error("DeepSeek API Failed:", error);
        return null;
    }
}

async function processUserAudio(text, isSimulation = false) {
    let userText = text;
    
    // 模拟模式下随机生成
    if (isSimulation || !text) {
        const simQueries = ["你好", "我累了", "你会唱歌吗？", "喜欢你"];
        userText = simQueries[Math.floor(Math.random() * simQueries.length)];
    }

    addMessage('user', userText);
    
    // AI 思考状态
    const thinkingMsgId = 'thinking-' + Date.now();
    addMessage('system', "正在思考...", thinkingMsgId);
    
    let replyText = "";
    let action = "";

    // 尝试调用 AI
    try {
        replyText = await fetchAIResponse(userText, currentCharacterId);
    } catch (e) {
        console.error(e);
    }
    
    // 移除思考消息
    const thinkingMsg = document.getElementById(thinkingMsgId);
    if (thinkingMsg) thinkingMsg.remove();

    // 降级逻辑 (如果 AI 失败或返回空)
    if (!replyText) {
        console.log("Fallback to local rules");
        const matchedRule = dialogueRules.find(rule => 
            rule.keywords.some(keyword => userText.includes(keyword))
        );

        if (matchedRule) {
            replyText = matchedRule.responses[Math.floor(Math.random() * matchedRule.responses.length)];
            action = matchedRule.action;
        } else {
            replyText = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }
    }

    // 更新 UI 和语音
    updateDialogue(replyText);
    speak(replyText);
    addMessage('ai', replyText);
    updateIntimacy(5);
    if (action) performAction(action);
}

function speak(text) {
    if (!synth) return;
    
    // 停止之前的语音
    synth.cancel();

    // 启用 TTS
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = CONFIG.voiceRate || 1.0;
    utterance.pitch = CONFIG.voicePitch || 1.0;
    
    // 尝试选择中文语音
    const zhVoice = availableVoices.find(v => v.lang.includes('zh') || v.lang.includes('CN'));
    if (zhVoice) utterance.voice = zhVoice;

    synth.speak(utterance);

    // 模拟说话时的视觉反馈
    if (characterContainer) {
        characterContainer.classList.add('speaking');
        
        // 语音结束或超时移除动画
        utterance.onend = () => {
            characterContainer.classList.remove('speaking');
        };
        
        // 保底移除
        setTimeout(() => {
            characterContainer.classList.remove('speaking');
        }, 5000); 
    }
}

function triggerTouchReaction() {
    // 触摸打断当前语音
    if (synth.speaking) synth.cancel();

    const reaction = touchReactions[Math.floor(Math.random() * touchReactions.length)];
    updateDialogue(reaction);
    speak(reaction);
    addMessage('ai', reaction);
    updateIntimacy(2);
    characterPulse();
}

function updateDialogue(text) {
    if (!homeSubtitle) return;
    
    // Animate subtitle change
    homeSubtitle.style.opacity = '0';
    homeSubtitle.style.transform = 'translateY(5px)';
    
    setTimeout(() => {
        homeSubtitle.textContent = `“${text}”`;
        homeSubtitle.style.opacity = '1';
        homeSubtitle.style.transform = 'translateY(0)';
    }, 200);
}

function updateIntimacy(amount) {
    intimacyValue += amount;
    if (intimacyValue >= CONFIG.intimacyThreshold) {
        intimacyValue = intimacyValue - CONFIG.intimacyThreshold;
        currentLevel++;
        levelText.textContent = `Lv. ${currentLevel}`;
        addMessage('system', `亲密度提升！当前等级 Lv.${currentLevel}`);
        speak("和你在一起的每一刻，都值得铭记。");
    }
    intimacyFill.style.width = `${intimacyValue}%`;
}

function characterPulse() {
    if (characterContainer) {
        characterContainer.style.transform = 'scale(1.05)';
        characterContainer.style.filter = 'brightness(1.3)';
        setTimeout(() => {
            characterContainer.style.transform = 'scale(1)';
            characterContainer.style.filter = 'brightness(1)';
        }, 200);
    }
}

function performAction(actionType) {
    characterPulse();
}

// Login Logic
function handleLogin() {
    const hunterId = document.getElementById('hunter-id').value;
    const accessCode = document.getElementById('access-code').value;
    const loginBtn = document.querySelector('.login-btn');
    const statusSpan = document.querySelector('.status-ok');

    if (!hunterId || !accessCode) {
        showToast("请输入猎人ID和接入码");
        return;
    }

    // Simulate Login Process
    loginBtn.disabled = true;
    loginBtn.querySelector('.btn-text').textContent = "正在连接 CONNECTING...";
    statusSpan.textContent = "VERIFYING...";
    statusSpan.style.color = "#fdcb6e";

    // Simulate visual glitch effect
    document.body.style.filter = "hue-rotate(90deg)";
    setTimeout(() => { document.body.style.filter = "none"; }, 100);
    setTimeout(() => { document.body.style.filter = "invert(0.1)"; }, 300);
    setTimeout(() => { document.body.style.filter = "none"; }, 400);

    setTimeout(() => {
        // Success
        statusSpan.textContent = "GRANTED";
        statusSpan.style.color = "#00b894";
        
        showToast(`欢迎回来，${hunterId}`);
        
        // Transition
        const loginView = document.getElementById('view-login');
        loginView.style.opacity = '0';
        loginView.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            loginView.classList.remove('active');
            
            // Show Home View
            const homeView = document.getElementById('view-home');
            homeView.classList.add('active');
            
            // Show HUDs
            document.querySelector('.top-hud').style.display = 'flex';
            document.querySelector('.bottom-nav').style.display = 'flex';
            
            // Trigger character greeting
        speak(`欢迎回来，猎人。今天想先做什么？`);
        addMessage('ai', `欢迎回来，猎人。今天想先做什么？`);
        
    }, 500);

}, 1500);
}

// Initialize additional event listeners for "buttons that don't work"
document.addEventListener('DOMContentLoaded', () => {
    // 1. Daily Task Claim Button
    const claimBtns = document.querySelectorAll('.claim-btn');
    claimBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation(); // Prevent card click if any
            if (btn.disabled) return;
            
            btn.textContent = "已领取";
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'default';
            
            updateIntimacy(10);
            showToast("获得每日补给：亲密度 +10");
        };
    });

    // 2. Wardrobe Button
    const wardrobeBtn = document.querySelector('.setting-btn');
    if (wardrobeBtn) {
        wardrobeBtn.onclick = () => {
            showToast("衣橱系统正在同步中... (功能开发中)");
        };
    }

    // 3. Personality Toggle
    const toggleSwitch = document.querySelector('.toggle-switch');
    if (toggleSwitch) {
        const options = toggleSwitch.querySelectorAll('span');
        toggleSwitch.onclick = () => {
            options.forEach(opt => opt.classList.toggle('active'));
            const activeOption = toggleSwitch.querySelector('.active').textContent;
            showToast(`已切换至【${activeOption}】性格模式`);
            
            // Optional: trigger a character reaction
            if (activeOption === "温和") {
                speak("好的，我会温柔一点。");
            } else {
                speak("哼，别指望我会一直这么好说话。");
            }
        };
    }

    // 4. Voice Pitch Slider
    const pitchSlider = document.querySelector('.slider');
    if (pitchSlider) {
        // Set initial value
        pitchSlider.value = CONFIG.voicePitch;
        
        pitchSlider.oninput = (e) => {
            CONFIG.voicePitch = parseFloat(e.target.value);
        };
        
        pitchSlider.onchange = (e) => {
             CONFIG.voicePitch = parseFloat(e.target.value);
             showToast(`语音音调已调整: ${CONFIG.voicePitch}`);
             speak("现在的声音听起来怎么样？");
        };
    }
});
