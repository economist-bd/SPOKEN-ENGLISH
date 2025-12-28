// কমন অর্ডার বাটন (সব পেজে দেখানোর জন্য)
const orderBtnHTML = `
    <div style="text-align:center; margin-top:30px; padding:15px; background:#f0fff4; border:2px dashed #38ef7d; border-radius:10px;">
        <h4 style="color:#009432;">পিডিএফ বই বা প্রিমিয়াম কোর্স দরকার?</h4>
        <p>৩০ দিনের এই কোর্সের সম্পূর্ণ ভিডিও ও পিডিএফ পেতে নিচের বাটনে ক্লিক করুন।</p>
        <a href="https://demand-supply.vercel.app" target="_blank" 
           style="background: #27ae60; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display:inline-block;">
           🛒 অর্ডার করুন
        </a>
    </div>
`;

const bookData = [
    {
        title: "🏠 সূচিপত্র (Home)",
        content: `
            <div style="text-align:center; padding: 20px;">
                <h1 style="color:#2E86DE;">৩০ দিনে ইংরেজিতে কথা বলুন</h1>
                <p style="color:#555;">শূন্য থেকে ইংরেজি শেখার কমপ্লিট গাইডলাইন</p>
                
                

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:20px;">
                    <button class="primary-btn" onclick="loadChapterByIndex(1)" style="background:#ff9f43;">সপ্তাহ ১ (Basics)</button>
                    <button class="primary-btn" onclick="loadChapterByIndex(8)" style="background:#54a0ff;">সপ্তাহ ২ (Daily)</button>
                    <button class="primary-btn" onclick="loadChapterByIndex(15)" style="background:#5f27cd;">সপ্তাহ ৩ (Smart)</button>
                    <button class="primary-btn" onclick="loadChapterByIndex(22)" style="background:#ff6b6b;">সপ্তাহ ৪ (Fluency)</button>
                </div>
                
                <p style="margin-top:20px; font-size:0.9rem; color:#888;">শুরু করতে উপরের বাটনে ক্লিক করুন</p>
                ${orderBtnHTML}
            </div>
        `
    },

    // ==========================================
    // WEEK 1: Basics (Day 1-7)
    // ==========================================
    {
        title: "Day 01: শুরুটা যেভাবে করবেন",
        content: `
            <h2>ইংরেজির ভয় কাটানো</h2>
            <p>ইংরেজি কোনো রকেট সায়েন্স নয়, এটি একটি ভাষা মাত্র। ভুল করার ভয় পাবেন না।</p>
            
            <div class="rule-box">
                <strong>টিপস:</strong> আজ থেকে ছোট ছোট বাংলা বাক্যের সাথে ইংরেজি শব্দ মেশানো শুরু করুন।
                যেমন: "Water দাও" (পানি দাও), "Door টা close করো"।
            </div>
            
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 02: Subject & Verb (মৌলিক গঠন)",
        content: `
            <h2>বাক্য তৈরির প্রধান সূত্র</h2>
            <p>Structure: <strong>Subject (কর্তা) + Verb (কাজ) + Object (বাকি অংশ)</strong></p>
            
            <table border="1">
                <tr><th>Subject</th><th>Verb</th><th>Object</th></tr>
                <tr><td>I (আমি)</td><td>eat (খাই)</td><td>rice (ভাত)</td></tr>
                <tr><td>He (সে)</td><td>plays ( খেলে)</td><td>football</td></tr>
            </table>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 03: Tense ছাড়া কথা বলা (Present)",
        content: `
            <h2>বর্তমান কালের সাধারণ বাক্য</h2>
            <p>নিজের অভ্যাস বা সাধারণ সত্য বলতে <strong>Present Indefinite</strong> ব্যবহার করুন।</p>
            <ul>
                <li>I wake up early. (আমি ভোরে উঠি)</li>
                <li>He goes to school. (সে স্কুলে যায়)</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 04: অতীত ও ভবিষ্যৎ (Past & Future)",
        content: `
            <h2>অতীত ও ভবিষ্যৎ কাল</h2>
            <ul>
                <li><strong>Past (অতীত):</strong> Verb এর পাস্ট ফর্ম। (I <strong>went</strong> - আমি গিয়েছিলাম)।</li>
                <li><strong>Future (ভবিষ্যৎ):</strong> Will + Verb. (I <strong>will go</strong> - আমি যাব)।</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 05: প্রশ্ন করা শিখুন (Do/Does)",
        content: `
            <h2>Yes/No Questions</h2>
            <p>প্রশ্ন করতে বাক্যের শুরুতে Do বা Does আনুন।</p>
            <ul>
                <li>তুমি কি খেলো? -> <strong>Do</strong> you play?</li>
                <li>সে কি যায়? -> <strong>Does</strong> he go?</li>
            </ul>
            
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 06: Wh-Questions (কেন, কোথায়, কিভাবে)",
        content: `
            <h2>Wh-Words এর ব্যবহার</h2>
            <p>বিস্তারিত জানতে চাইলে Wh শব্দ ব্যবহার করুন।</p>
            <ul>
                <li>What (কি) - What do you want?</li>
                <li>Where (কোথায়) - Where do you live?</li>
                <li>Why (কেন) - Why are you sad?</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 07: সপ্তাহ ১ এর রিভিউ",
        content: `
            <h2>Self Test - Week 1</h2>
            <p>নিচের বাক্যগুলো ইংরেজিতে বলুন:</p>
            <ol>
                <li>আমি বই পড়ি।</li>
                <li>তুমি কি যাবে?</li>
                <li>সে গতকাল এসেছিল।</li>
            </ol>
            <p><strong>Solutions:</strong> 1. I read books. 2. Will you go? 3. He came yesterday.</p>
            ${orderBtnHTML}
        `
    },

    // ==========================================
    // WEEK 2: Daily Conversation (Day 8-14)
    // ==========================================
    {
        title: "Day 08: পরিচিত হওয়া (Greeting)",
        content: `
            <h2>Self Introduction</h2>
            <p>নিজের পরিচয় দেওয়ার স্মার্ট উপায়:</p>
            <ul>
                <li>Hi, I am [Name]. I am from [Place].</li>
                <li>I work as a [Profession].</li>
                <li>Nice to meet you.</li>
            </ul>
            
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 09: সময় ও তারিখ বলা",
        content: `
            <h2>Telling Time</h2>
            <ul>
                <li>১০টা বাজে - It is 10 o'clock.</li>
                <li>সোয়া ১০টা - It is quarter past 10.</li>
                <li>সাড়ে ১০টা - It is half past 10.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 10: দৈনন্দিন রুটিন (Daily Routine)",
        content: `
            <h2>My Daily Life</h2>
            <p>সকাল থেকে রাত পর্যন্ত আপনি যা করেন তা ইংরেজিতে বলার চেষ্টা করুন।</p>
            <p>Example: I get up at 6 AM. Then I brush my teeth. I take breakfast at 8 AM...</p>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 11: পরিবার নিয়ে কথা (Family)",
        content: `
            <h2>Talking about Family</h2>
            <ul>
                <li>There are 5 members in my family.</li>
                <li>My father is a teacher.</li>
                <li>I have one brother and one sister.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 12: পছন্দ-অপছন্দ (Likes/Dislikes)",
        content: `
            <h2>Likes & Dislikes</h2>
            <ul>
                <li>I like / I love playing cricket.</li>
                <li>I am fond of music.</li>
                <li>I dislike / I hate smoking.</li>
                <li>I don't like lazy people.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 13: কেনাকাটা (Shopping)",
        content: `
            <h2>Shopping Conversation</h2>
            <ul>
                <li>How much is this? (দাম কত?)</li>
                <li>Do you have a red one? (লাল হবে?)</li>
                <li>It's too expensive. (অনেক দাম)</li>
            </ul>
            
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 14: রেস্তোরাঁয় (Restaurant)",
        content: `
            <h2>Ordering Food</h2>
            <ul>
                <li>Can I see the menu, please?</li>
                <li>I would like to have a burger.</li>
                <li>Can I have the bill?</li>
            </ul>
            ${orderBtnHTML}
        `
    },

    // ==========================================
    // WEEK 3: Smart English (Day 15-21)
    // ==========================================
    {
        title: "Day 15: Modals (Can, Could, Should)",
        content: `
            <h2>ক্ষমতা ও উচিত অর্থে</h2>
            <ul>
                <li><strong>Can:</strong> I can do it. (পারি)</li>
                <li><strong>Should:</strong> You should go. (উচিত)</li>
                <li><strong>Must:</strong> We must obey rules. (অবশ্যই)</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 16: অনুভূতি প্রকাশ (Feelings)",
        content: `
            <h2>Expressing Emotions</h2>
            <ul>
                <li>I am excited / nervous.</li>
                <li>I feel bored.</li>
                <li>It is disgusting!</li>
                <li>I am grateful to you.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 17: টেলিফোনে কথা (Phone Call)",
        content: `
            <h2>Telephone Manners</h2>
            <ul>
                <li>Hello, who is speaking?</li>
                <li>Can I speak to Rahim?</li>
                <li>Please hold on. (অপেক্ষা করুন)</li>
                <li>Call me back later.</li>
            </ul>
            
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 18: রাস্তা চেনা (Directions)",
        content: `
            <h2>Asking Directions</h2>
            <ul>
                <li>Excuse me, where is the bank?</li>
                <li>Go straight and turn left.</li>
                <li>Is it far from here?</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 19: অনুরোধ করা (Request)",
        content: `
            <h2>Polite Requests</h2>
            <p>ভদ্রভাবে কিছু চাইতে <strong>Could</strong> বা <strong>Would</strong> ব্যবহার করুন।</p>
            <ul>
                <li>Could you help me?</li>
                <li>Would you please give me a pen?</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 20: আবহাওয়া (Weather)",
        content: `
            <h2>Weather Talk</h2>
            <ul>
                <li>It is raining today.</li>
                <li>It is very hot/cold.</li>
                <li>The sky is cloudy.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 21: চাকরির ইন্টারভিউ (Interview)",
        content: `
            <h2>Job Interview Basics</h2>
            <ul>
                <li>Tell me about yourself.</li>
                <li>Why should we hire you?</li>
                <li>My strength is hard work.</li>
            </ul>
            

[Image of interview]

            ${orderBtnHTML}
        `
    },

    // ==========================================
    // WEEK 4: Fluency & Advanced (Day 22-30)
    // ==========================================
    {
        title: "Day 22: বাক্য বড় করা (Connectors)",
        content: `
            <h2>Connectors এর জাদু</h2>
            <p>ছোট বাক্যকে বড় করতে And, But, Because, So ব্যবহার করুন।</p>
            <p>Ex: I wanted to go <strong>but</strong> it was raining, <strong>so</strong> I stayed home.</p>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 23: গল্প বলা (Storytelling)",
        content: `
            <h2>Past Tense Practice</h2>
            <p>অতীতের ঘটনা বর্ণনা করতে শিখুন।</p>
            <p>"Yesterday I went to market. I bought a shirt. Then I met my friend..."</p>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 24: প্রবাদ বাক্য (Proverbs)",
        content: `
            <h2>Smart Proverbs</h2>
            <ul>
                <li>নানা মুনির নানা মত - Many men, many minds.</li>
                <li>নাই মামার চেয়ে কানা মামা ভালো - Something is better than nothing.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 25: ভুল সংশোধন (Common Mistakes)",
        content: `
            <h2>সতর্কতা</h2>
            <ul>
                <li>ভুল: I am agree. | সঠিক: I agree.</li>
                <li>ভুল: He go to school. | সঠিক: He goes to school.</li>
                <li>ভুল: One of my friend. | সঠিক: One of my friends.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 26: ঝগড়া ও তর্ক (Arguments)",
        content: `
            <h2>Arguments</h2>
            <ul>
                <li>Are you crazy?</li>
                <li>Don't talk nonsense.</li>
                <li>Mind your own business.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 27: বিদায় জানানো (Farewell)",
        content: `
            <h2>Saying Goodbye</h2>
            <ul>
                <li>See you later.</li>
                <li>Have a nice day.</li>
                <li>Take care.</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 28: উচ্চারণ ঠিক করা (Pronunciation)",
        content: `
            <h2>Pronunciation Tips</h2>
            <ul>
                <li>'P' এর উচ্চারণ 'ফ' এর মতো বাতাস বের করে হবে (Pen -> Phen).</li>
                <li>'T' এর উচ্চারণ 'ঠ' এর মতো হবে (Time -> Thime).</li>
            </ul>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 29: স্পিকিং প্র্যাকটিস টিপস",
        content: `
            <h2>কিভাবে চর্চা করবেন?</h2>
            <ol>
                <li>আয়নার সামনে দাঁড়িয়ে কথা বলুন।</li>
                <li>নিজের ভয়েস রেকর্ড করে শুনুন।</li>
                <li>ইংলিশ মুভি বা কার্টুন দেখুন।</li>
            </ol>
            ${orderBtnHTML}
        `
    },
    {
        title: "Day 30: গ্রাজুয়েশন ও গাইডলাইন",
        content: `
            <h2>অভিনন্দন! 🎉</h2>
            <p>আপনি ৩০ দিনের বেসিক কোর্স শেষ করেছেন। এখন থেকে থামবেন না। প্রতিদিন অন্তত ১০ মিনিট প্র্যাকটিস চালিয়ে যান।</p>
            
            <div style="text-align:center;">
                

[Image of author]

                <h3>মঞ্জুরুল হক</h3>
                <p>প্রভাষক, অর্থনীতি</p>
                <p>মোবাইল: ০১৭১৫২৪৭৫৮৮</p>
            </div>
            
            <p style="text-align:center; color:green; font-weight:bold;">Keep Learning, Keep Growing!</p>
            ${orderBtnHTML}
        `
    }
];