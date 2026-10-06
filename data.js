window.CODEVA_DATA={
  "courses": [
    {
      "id": "html",
      "title": "HTML من الصفر",
      "level": "مبتدئ",
      "icon": "🌐",
      "desc": "ابنِ أول صفحة ويب وفهم هيكل المواقع قبل ما تدخل CSS وJavaScript.",
      "lessons": [
        {
          "id": "h1",
          "title": "ما هي HTML؟",
          "mins": 8,
          "video": "6QAELgirvjs",
          "body": "HTML هي لغة ترميز تصف محتوى صفحة الويب وهيكلها. المتصفح يقرأ العناصر ويحوّلها إلى صفحة يراها المستخدم. HTML ليست لغة برمجة بالمعنى التقليدي؛ هي تخبر المتصفح ماذا يوجد في الصفحة، بينما CSS تهتم بالشكل وJavaScript بالسلوك والتفاعل.",
          "points": [
            "HTML = هيكل ومحتوى الصفحة",
            "العناصر تكتب عادة بين < >",
            "الصفحة الأساسية تحتوي على html وhead وbody",
            "المتصفح يعرض النتيجة ولا يعرض الوسوم نفسها"
          ],
          "code": "<!doctype html>\\n<html lang=\"ar\" dir=\"rtl\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <title>أول صفحة</title>\\n</head>\\n<body>\\n  <h1>أهلاً بالعالم!</h1>\\n  <p>هذه أول صفحة لي.</p>\\n</body>\\n</html>"
        },
        {
          "id": "h2",
          "title": "العناوين والفقرات",
          "mins": 10,
          "body": "العناوين تبدأ من h1 حتى h6. استخدم h1 للعنوان الرئيسي للصفحة، ثم h2 للأقسام وh3 للأقسام الفرعية. لا تختار العنوان بسبب حجمه فقط؛ المعنى والتنظيم أهم، ويمكن تغيير الشكل لاحقًا باستخدام CSS.",
          "points": [
            "استخدم h1 مرة واحدة غالبًا للعنوان الرئيسي",
            "h2 وh3 لبناء تسلسل منطقي",
            "p للنصوص والفقرات",
            "لا تستخدم العناوين لمجرد تكبير الخط"
          ],
          "code": "<h1>موقعي الشخصي</h1>\\n<h2>من أنا؟</h2>\\n<p>أنا أتعلم تطوير الويب وأبني مشاريعي بنفسي.</p>"
        },
        {
          "id": "h3",
          "title": "الروابط والصور",
          "mins": 12,
          "body": "الرابط يستخدم العنصر a مع الخاصية href. أما الصورة فتستخدم img مع src لمسار الصورة وalt لوصفها. قيمة alt مهمة عندما لا تظهر الصورة ولإتاحة الوصول.",
          "points": [
            "a + href = رابط",
            "img + src = صورة",
            "alt يصف الصورة",
            "يمكن جعل الرابط يفتح صفحة أخرى أو موقعًا خارجيًا"
          ],
          "code": "<a href=\"https://example.com\">افتح الموقع</a>\\n<img src=\"photo.jpg\" alt=\"صورة للواجهة الرئيسية\">"
        },
        {
          "id": "h4",
          "title": "القوائم والجداول",
          "mins": 12,
          "body": "القائمة غير المرتبة تستخدم ul وعناصرها li، والقائمة المرتبة تستخدم ol. الجداول مناسبة للبيانات الجدولية مثل الدرجات والأسعار، وليست لبناء تخطيط الصفحة.",
          "points": [
            "ul لقائمة نقطية",
            "ol لقائمة مرتبة",
            "li عنصر داخل القوائم",
            "table للبيانات المنظمة"
          ],
          "code": "<ul>\\n  <li>HTML</li>\\n  <li>CSS</li>\\n  <li>JavaScript</li>\\n</ul>"
        },
        {
          "id": "h5",
          "title": "النماذج Form",
          "mins": 15,
          "body": "النماذج تجمع بيانات المستخدم مثل الاسم والبريد وكلمة البحث. label يربط الوصف بالحقل، وinput له أنواع متعددة. لا تعتمد على placeholder بدل label.",
          "points": [
            "form يجمع حقول الإدخال",
            "label يحسن الوضوح وإمكانية الوصول",
            "type يحدد نوع الحقل",
            "required يجعل الحقل مطلوبًا في المتصفح"
          ],
          "code": "<form>\\n  <label for=\"name\">اسمك</label>\\n  <input id=\"name\" type=\"text\" required>\\n  <button type=\"submit\">إرسال</button>\\n</form>"
        },
        {
          "id": "h6",
          "title": "مشروع: صفحة تعريف شخصية",
          "mins": 20,
          "body": "اجمع ما تعلمته في صفحة واحدة: عنوان رئيسي، نبذة، قائمة مهارات، صورة، روابط، ونموذج تواصل. ركز على المعنى والتنظيم أولًا؛ سنعطي الصفحة شكلًا احترافيًا في CSS.",
          "points": [
            "استخدم HTML دلالية ومنظمة",
            "ضع alt للصور",
            "اجعل العناوين مرتبة",
            "اختبر الصفحة في المتصفح"
          ],
          "code": "<header>\\n  <h1>عبدالله</h1>\\n  <p>مطور ويب تحت التدريب</p>\\n</header>\\n<main>\\n  <h2>مهاراتي</h2>\\n  <ul><li>HTML</li><li>CSS</li></ul>\\n</main>"
        }
      ]
    },
    {
      "id": "css",
      "title": "CSS لتصميم الواجهات",
      "level": "مبتدئ",
      "icon": "🎨",
      "desc": "حوّل صفحة HTML العادية إلى واجهة مرتبة ومتجاوبة.",
      "lessons": [
        {
          "id": "c1",
          "title": "ما هي CSS؟",
          "mins": 9,
          "video": "X1ulCwyhCVM",
          "body": "CSS هي اللغة المسؤولة عن عرض صفحة HTML: الألوان، الخطوط، المسافات، الأحجام، الحدود والتخطيط. الفكرة الأساسية هي اختيار عنصر ثم تحديد الخصائص التي تريد تغييرها.",
          "points": [
            "selector يحدد العناصر",
            "property هي الخاصية",
            "value هي القيمة",
            "يمكن كتابة CSS داخل ملف خارجي"
          ],
          "code": "body {\\n  font-family: Arial;\\n  background: #101522;\\n  color: white;\\n}\\n\\nh1 { color: #7c73ff; }"
        },
        {
          "id": "c2",
          "title": "الألوان والخطوط",
          "mins": 12,
          "body": "يمكن تحديد اللون باسم أو HEX أو RGB. استخدم font-size لحجم الخط وfont-weight لسمكه وline-height للمسافة بين السطور. اختر خطًا سهل القراءة قبل التفكير في الزخرفة.",
          "points": [
            "HEX مناسب للألوان الدقيقة",
            "font-size لحجم النص",
            "font-weight لسمك النص",
            "line-height لتحسين القراءة"
          ],
          "code": "h1 {\\n  color: #6c63ff;\\n  font-size: 40px;\\n  font-weight: 800;\\n}\\n\\np { line-height: 1.8; }"
        },
        {
          "id": "c3",
          "title": "Box Model",
          "mins": 15,
          "body": "كل عنصر يمكن التفكير فيه كصندوق: content ثم padding ثم border ثم margin. فهم هذا النموذج يحل جزءًا كبيرًا من مشاكل المسافات في CSS.",
          "points": [
            "padding مساحة داخلية",
            "border حد حول العنصر",
            "margin مساحة خارجية",
            "box-sizing:border-box يجعل التحكم أسهل"
          ],
          "code": "* { box-sizing: border-box; }\\n.card {\\n  padding: 20px;\\n  border: 1px solid #29334a;\\n  margin: 15px;\\n}"
        },
        {
          "id": "c4",
          "title": "Flexbox",
          "mins": 18,
          "body": "Flexbox ممتاز لترتيب العناصر في صف أو عمود. ابدأ بـ display:flex ثم استخدم gap وjustify-content وalign-items. جرّب تغيير flex-direction لترى الفرق.",
          "points": [
            "display:flex يبدأ نظام Flex",
            "gap للمسافات",
            "justify-content على المحور الرئيسي",
            "align-items على المحور المتقاطع"
          ],
          "code": ".menu {\\n  display: flex;\\n  gap: 16px;\\n  justify-content: center;\\n  align-items: center;\\n}"
        },
        {
          "id": "c5",
          "title": "Responsive Design",
          "mins": 18,
          "body": "الموقع المتجاوب يتكيف مع الشاشات المختلفة. Media Queries تسمح لك بتغيير التصميم عند عرض معين. لا تفترض أن المستخدم على شاشة كمبيوتر.",
          "points": [
            "استخدم وحدات مرنة مثل % وrem",
            "اختبر الموبايل",
            "@media يغير القواعد حسب الشاشة",
            "صمم المحتوى أولًا ثم حسّن الشكل"
          ],
          "code": ".grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }\\n@media (max-width:700px) {\\n  .grid { grid-template-columns:1fr; }\\n}"
        },
        {
          "id": "c6",
          "title": "مشروع: بطاقة كورس",
          "mins": 25,
          "body": "أنشئ بطاقة لكورس تحتوي على أيقونة، اسم، وصف، نسبة تقدم وزر. استخدم Box Model وFlexbox وMedia Query. الهدف أن تبدو البطاقة جيدة على الهاتف والكمبيوتر.",
          "points": [
            "قسّم البطاقة إلى أجزاء واضحة",
            "استخدم gap بدل كثرة الهوامش",
            "اجعل الزر واضحًا",
            "اختبر عند عرض 360px"
          ],
          "code": ".course { padding:20px; border-radius:18px; background:#151c2d; }\\n.course-row { display:flex; justify-content:space-between; gap:12px; }"
        }
      ]
    },
    {
      "id": "js",
      "title": "JavaScript للمبتدئين",
      "level": "مبتدئ → متوسط",
      "icon": "⚡",
      "desc": "تعلم منطق البرمجة واجعل صفحاتك تفاعلية.",
      "lessons": [
        {
          "id": "j1",
          "title": "ما هي JavaScript؟",
          "mins": 9,
          "video": "GM6dQBmc-Xg",
          "body": "JavaScript تضيف السلوك والتفاعل للصفحة. تستطيع تغيير النصوص والعناصر، التعامل مع الضغط على الأزرار، التحقق من النماذج، والتواصل مع APIs. وهي أيضًا لغة برمجة كاملة خارج المتصفح.",
          "points": [
            "HTML = هيكل",
            "CSS = شكل",
            "JavaScript = سلوك",
            "الكود يمكن تشغيله في Console أو ملف JS"
          ],
          "code": "const name = \"Codeva\";\\nconsole.log(\"أهلًا من \" + name);"
        },
        {
          "id": "j2",
          "title": "المتغيرات وأنواع البيانات",
          "mins": 15,
          "body": "المتغير اسم يشير إلى قيمة. في JavaScript استخدم const عندما لا تحتاج لتغيير الإسناد، وlet عندما ستعيد إسناده. من الأنواع الشائعة string وnumber وboolean وnull وundefined.",
          "points": [
            "const للإسناد الثابت",
            "let للقيمة التي قد تتغير",
            "typeof يساعدك على معرفة النوع",
            "لا تعتمد على var في الأكواد الجديدة إلا لسبب واضح"
          ],
          "code": "const name = \"Ali\";\\nlet score = 10;\\nscore = score + 5;\\nconst passed = score >= 10;\\nconsole.log(name, score, passed);"
        },
        {
          "id": "j3",
          "title": "الشروط",
          "mins": 15,
          "body": "الشروط تجعل البرنامج يتخذ قرارًا. if تنفذ الكود عند تحقق الشرط، ويمكن استخدام else وelse if للحالات الأخرى. المقارنات مثل === و> و< مهمة جدًا.",
          "points": [
            "if لاتخاذ قرار",
            "else للحالة البديلة",
            "=== للمقارنة الصارمة",
            "يمكن دمج الشروط باستخدام && و||"
          ],
          "code": "const score = 85;\\nif (score >= 50) {\\n  console.log(\"ناجح\");\\n} else {\\n  console.log(\"حاول مرة أخرى\");\\n}"
        },
        {
          "id": "j4",
          "title": "الحلقات والمصفوفات",
          "mins": 18,
          "body": "المصفوفة تخزن مجموعة قيم. الحلقات تسمح لك بتكرار مهمة بدل كتابة نفس السطر مرات كثيرة. ابدأ بـ for ثم تعلم for...of عندما تصبح مرتاحًا.",
          "points": [
            "[] لإنشاء Array",
            "length لمعرفة عدد العناصر",
            "for للتكرار",
            "for...of سهل عند المرور على القيم"
          ],
          "code": "const skills = [\"HTML\", \"CSS\", \"JS\"];\\nfor (const skill of skills) {\\n  console.log(skill);\\n}"
        },
        {
          "id": "j5",
          "title": "الدوال",
          "mins": 18,
          "body": "الدالة تجمع خطوات تحت اسم يمكن استدعاؤه أكثر من مرة. يمكن أن تستقبل parameters وتعيد نتيجة باستخدام return. تقسيم البرنامج إلى دوال يجعل الكود أوضح وأسهل للاختبار.",
          "points": [
            "function تعرّف الدالة",
            "parameter قيمة تدخل للدالة",
            "return يعيد نتيجة",
            "اسم الدالة يجب أن يصف ما تفعله"
          ],
          "code": "function add(a, b) {\\n  return a + b;\\n}\\nconst result = add(7, 5);\\nconsole.log(result);"
        },
        {
          "id": "j6",
          "title": "DOM والتفاعل",
          "mins": 20,
          "body": "DOM هو تمثيل الصفحة الذي يسمح لـJavaScript بالوصول للعناصر وتغييرها. يمكنك اختيار عنصر بـ querySelector ثم تعديل textContent أو classList، وربط حدث click بزر.",
          "points": [
            "querySelector لاختيار عنصر",
            "textContent لتغيير النص",
            "classList لإدارة الأصناف",
            "addEventListener للاستجابة للأحداث"
          ],
          "code": "const button = document.querySelector(\"button\");\\nbutton.addEventListener(\"click\", () => {\\n  document.querySelector(\"h1\").textContent = \"تم الضغط!\";\\n});"
        },
        {
          "id": "j7",
          "title": "مشروع: عداد تفاعلي",
          "mins": 25,
          "body": "اصنع عدادًا بثلاثة أزرار: زيادة، نقصان، وإعادة ضبط. خزّن الرقم في متغير، حدّث النص في الصفحة، واربط الأزرار بأحداث click. هذا المشروع يثبت فهمك للمتغيرات والدوال والـDOM والأحداث.",
          "points": [
            "أنشئ state بسيطًا للعداد",
            "اكتب دالة واحدة للتحديث",
            "اربط 3 أحداث",
            "اختبر الوصول إلى الصفر والقيم السالبة"
          ],
          "code": "let count = 0;\\nconst value = document.querySelector(\"#value\");\\nfunction render(){ value.textContent = count; }\\ndocument.querySelector(\"#plus\").onclick = () => { count++; render(); };\\ndocument.querySelector(\"#minus\").onclick = () => { count--; render(); };\\ndocument.querySelector(\"#reset\").onclick = () => { count=0; render(); };"
        }
      ]
    },
    {
      "id": "git",
      "title": "Git و GitHub",
      "level": "مبتدئ",
      "icon": "📦",
      "desc": "تعلم حفظ نسخ مشاريعك وإدارتها ورفعها على GitHub.",
      "lessons": [
        {
          "id": "g1",
          "title": "لماذا Git؟",
          "mins": 10,
          "video": "ACOiGZoqC8w",
          "body": "Git نظام للتحكم في الإصدارات. بدل أن تنشئ عشرات النسخ من مشروعك، تسجل نقاطًا زمنية للتغييرات ويمكنك الرجوع إليها. Git يعمل على جهازك، بينما GitHub خدمة تستضيف مستودعات Git وتساعدك على مشاركتها.",
          "points": [
            "Git محلي",
            "GitHub منصة استضافة وتعاون",
            "commit = نقطة محفوظة في تاريخ المشروع",
            "repository = مستودع المشروع"
          ],
          "code": "git init\\ngit status\\ngit add .\\ngit commit -m \"first commit\""
        },
        {
          "id": "g2",
          "title": "أول Repository",
          "mins": 12,
          "body": "أنشئ مجلد المشروع ثم شغّل git init. بعد ذلك أضف الملفات إلى staging باستخدام git add ثم أنشئ commit. افحص الحالة دائمًا بـ git status.",
          "points": [
            "git init يبدأ مستودعًا",
            "git status يعرض الحالة",
            "git add يجهز الملفات",
            "git commit يحفظ لقطة من التغييرات"
          ],
          "code": "git init\\ngit add .\\ngit commit -m \"إنشاء المشروع\""
        },
        {
          "id": "g3",
          "title": "رفع المشروع إلى GitHub",
          "mins": 15,
          "body": "بعد إنشاء مستودع على GitHub، تربطه بالمستودع المحلي ثم ترفع commits. لا تضع كلمات المرور أو مفاتيح API داخل المستودع.",
          "points": [
            "remote هو عنوان المستودع البعيد",
            "push يرفع commits",
            "pull يجلب التغييرات",
            "لا ترفع الأسرار والمفاتيح"
          ],
          "code": "git remote add origin YOUR_REPOSITORY_URL\\ngit branch -M main\\ngit push -u origin main"
        },
        {
          "id": "g4",
          "title": "تحديث المشروع بأمان",
          "mins": 12,
          "body": "كل مرة تنجز فيها جزءًا منطقيًا: راجع التغييرات، اختبر المشروع، ثم commit برسالة واضحة. هذه العادة أهم من حفظ عشرات الأوامر.",
          "points": [
            "اختبر قبل commit",
            "اكتب رسالة تصف التغيير",
            "اجعل commits صغيرة ومنطقية",
            "اسحب تغييرات الفريق قبل العمل عليها"
          ],
          "code": "git status\\ngit diff\\ngit add .\\ngit commit -m \"إضافة صفحة الكورسات\"\\ngit push"
        },
        {
          "id": "g5",
          "title": "مشروع: نشر موقعك",
          "mins": 20,
          "body": "خذ مشروع HTML/CSS/JS، ضعه في مستودع GitHub، ثم فعّل GitHub Pages أو استخدم خدمة استضافة ثابتة. الهدف أن تحصل على رابط حقيقي لمشروعك في Portfolio.",
          "points": [
            "رتّب ملفات المشروع",
            "اكتب README بسيطًا",
            "ارفع المشروع",
            "انشر نسخة تعمل على الإنترنت"
          ],
          "code": "README.md\\nindex.html\\nstyle.css\\napp.js"
        }
      ]
    }
  ],
  "videos": [
    {
      "title": "كيف تبدأ تتعلم البرمجة؟",
      "author": "Elzero Web School",
      "id": "LdJbP0NbFRw",
      "desc": "نصائح عربية لتنظيم بداية رحلة التعلم."
    },
    {
      "title": "HTML 2021 — البداية",
      "author": "Elzero Web School",
      "id": "6QAELgirvjs",
      "desc": "أول درس في مسار HTML العربي."
    },
    {
      "title": "CSS 2021 — المقدمة",
      "author": "Elzero Web School",
      "id": "X1ulCwyhCVM",
      "desc": "مقدمة عربية عن CSS وما تحتاج لتعلمه."
    },
    {
      "title": "JavaScript 2021 — المقدمة",
      "author": "Elzero Web School",
      "id": "GM6dQBmc-Xg",
      "desc": "تعريف JavaScript وبداية المسار."
    },
    {
      "title": "Git & GitHub — المقدمة",
      "author": "Elzero Web School",
      "id": "ACOiGZoqC8w",
      "desc": "مقدمة عربية عن Git وGitHub."
    }
  ]
};