// All news and events. Replace with real items (invented samples for now).
export type Lang = "en" | "ar";
type T = { en: string; ar: string };
export const cats: Record<string, T> = {
  all: { en: "All", ar: "الكل" }, admissions: { en: "Admissions", ar: "القبول" }, academics: { en: "Academics", ar: "الأكاديميات" },
  achievements: { en: "Achievements", ar: "الإنجازات" }, events: { en: "Events", ar: "الفعاليات" },
};
export const articles: { slug: string; cat: string; date: string; photo: number; title: T; excerpt: T; body: Record<Lang, string[]> }[] = [
  { slug: "applications-open", cat: "admissions", date: "2026-10-26", photo: 40378006,
    title: { en: "Applications open for the new academic year", ar: "فتح باب التقديم للعام الدراسي الجديد" },
    excerpt: { en: "Families are invited to apply and visit our campus.", ar: "ندعو الأسر إلى التقديم وزيارة حرمنا المدرسي." },
    body: {
      en: [
        "Applications are now open for the 2027–2028 academic year, from our early years programme through to the final years of secondary school. We welcome families from across the city and from more than eighteen nationalities, and we are proud to build a community in which every child is known by name.",
        "This year we have expanded places in the early years and primary sections, and we have added a small number of seats in the middle and secondary years. Classes remain deliberately capped so that teachers can give each student the attention their learning deserves. Where a year group is full, we operate a short waiting list and review it each term.",
        "Our admissions process is designed to be straightforward and human. It begins with a conversation: tell us about your child, their interests, their previous school and what you are hoping for. We then invite you for a campus visit, followed by an age-appropriate assessment and a meeting with the relevant head of section. There is no preparation required for the assessment; it helps us understand how your child thinks, not how much they have memorised.",
        "Key dates for the coming cycle are published on the Admissions page and updated weekly. Families who apply before the end of January are considered in the first round of offers, and we continue to accept applications throughout the year wherever places remain. Financial information, including payment plans, is available from the admissions team on request.",
        "To begin, send an inquiry through the Admissions page or contact the admissions office directly. We aim to respond within two working days, and we are always happy to arrange a visit even if you are still deciding whether our school is the right fit for your family.",
      ],
      ar: [
        "باب التقديم مفتوح الآن للعام الدراسي ٢٠٢٧–٢٠٢٨، من المرحلة التمهيدية وحتى السنوات الأخيرة من المرحلة الثانوية. نرحّب بأسر من مختلف أنحاء المدينة ومن أكثر من ثماني عشرة جنسية، ونفخر ببناء مجتمع يُعرَف فيه كل طفل باسمه.",
        "وسّعنا هذا العام المقاعد في المرحلتين التمهيدية والابتدائية، وأضفنا عددًا محدودًا من المقاعد في المرحلتين المتوسطة والثانوية. تبقى أعداد الطلاب في الصفوف محدودة عمدًا ليتمكّن المعلمون من منح كل طالب الاهتمام الذي يستحقه تعلّمه. وحين يكتمل الصف، نفتح قائمة انتظار قصيرة نراجعها كل فصل دراسي.",
        "صمّمنا عملية القبول لتكون واضحة وإنسانية. تبدأ بمحادثة: أخبرنا عن طفلك واهتماماته ومدرسته السابقة وما تطمح إليه. ثم ندعوكم لزيارة الحرم المدرسي، يتبعها تقييم مناسب للعمر ولقاء مع رئيس القسم المعني. لا حاجة للتحضير للتقييم؛ فهو يساعدنا على فهم طريقة تفكير طفلك، لا مقدار ما حفظه.",
        "ننشر مواعيد الدورة القادمة الرئيسية على صفحة القبول ونحدّثها أسبوعيًا. وتُدرس طلبات الأسر التي تقدّم قبل نهاية يناير في الجولة الأولى من العروض، ونواصل استقبال الطلبات طوال العام حيثما تبقّت مقاعد. وتتوفر المعلومات المالية، بما فيها خطط الدفع، من فريق القبول عند الطلب.",
        "للبدء، أرسل استفسارك عبر صفحة القبول أو تواصل مع مكتب القبول مباشرة. نستهدف الرد خلال يومَي عمل، ويسعدنا دائمًا ترتيب زيارة حتى إن كنتم ما زلتم تفكّرون في مدى ملاءمة مدرستنا لأسرتكم.",
      ],
    } },
  { slug: "science-fair", cat: "events", date: "2026-10-19", photo: 8471855,
    title: { en: "Annual science fair invites families", ar: "معرض العلوم السنوي يدعو الأسر" },
    excerpt: { en: "Students present experiments and projects to visitors.", ar: "يعرض الطلاب تجاربهم ومشاريعهم على الزوار." },
    body: {
      en: [
        "Preparations are well underway for this year's science fair, our largest celebration of curiosity and investigation. Students across the primary and secondary years have spent the term working in small teams, guided by their science teachers, on questions they chose themselves — from the chemistry of baking to the efficiency of solar panels on the school roof.",
        "Visitors will find more than forty exhibits in the main hall and the science laboratories. Younger students have focused on observation and playful experiment, while older students have designed controlled trials, collected data over several weeks and presented their conclusions with graphs, models and short demonstrations.",
        "A panel of teachers, visiting engineers and two university researchers will speak with each team about their method rather than only their result. We want students to explain what surprised them, what went wrong, and what they would change if they started again — the habits of real scientists.",
        "Families are warmly invited to explore the exhibits, ask questions and vote in the visitors' choice award. The afternoon will include two short talks in the auditorium: one on careers in engineering and one on simple experiments families can try at home. Refreshments will be served in the courtyard, and the library will stay open for younger siblings.",
        "The fair is one of the clearest expressions of our philosophy: that children learn best when they are given time, tools and permission to follow their own questions. We are grateful to the parent volunteers and local partners who make it possible, and we look forward to welcoming you.",
      ],
      ar: [
        "تجري الاستعدادات على قدم وساق لمعرض العلوم هذا العام، أكبر احتفال لدينا بالفضول والاستقصاء. قضى طلاب المرحلتين الابتدائية والثانوية الفصل الدراسي يعملون في فرق صغيرة، بإشراف معلمي العلوم، على أسئلة اختاروها بأنفسهم — من كيمياء الخَبز إلى كفاءة الألواح الشمسية على سطح المدرسة.",
        "سيجد الزوار أكثر من أربعين معرضًا في القاعة الرئيسية ومختبرات العلوم. ركّز الطلاب الأصغر على الملاحظة والتجربة المرحة، بينما صمّم الطلاب الأكبر تجارب مضبوطة، وجمعوا البيانات على مدى أسابيع، وقدّموا استنتاجاتهم برسوم بيانية ومجسّمات وعروض قصيرة.",
        "ستتحاور لجنة من المعلمين والمهندسين الزائرين وباحثَين جامعيَّين مع كل فريق حول منهجه لا نتيجته فقط. نريد أن يشرح الطلاب ما فاجأهم، وما لم ينجح، وما سيغيّرونه لو بدؤوا من جديد — وهي عادات العلماء الحقيقيين.",
        "ندعو الأسر بحرارة لاستكشاف المعروضات وطرح الأسئلة والتصويت في جائزة اختيار الزوار. سيتضمّن اليوم محاضرتين قصيرتين في القاعة الكبرى: الأولى عن المهن الهندسية، والثانية عن تجارب بسيطة يمكن للأسر تجربتها في المنزل. وسيُقدَّم الضيافة في الساحة، وتبقى المكتبة مفتوحة للأشقاء الصغار.",
        "المعرض من أوضح تجليات فلسفتنا: أن الأطفال يتعلّمون أفضل حين تُمنح لهم الوقت والأدوات والحرية لمتابعة أسئلتهم. نشكر متطوعي الأسر وشركاءنا المحليين الذين يجعلونه ممكنًا، ونتطلع إلى ترحيبنا بكم.",
      ],
    } },
  { slug: "inter-school-competition", cat: "achievements", date: "2026-10-12", photo: 14111037,
    title: { en: "Students shine at an inter-school competition", ar: "تألق الطلاب في مسابقة بين المدارس" },
    excerpt: { en: "Teamwork and sportsmanship on display.", ar: "عمل جماعي وروح رياضية." },
    body: {
      en: [
        "Our students represented the school with composure and character at this season's inter-school competition, returning with two first-place finishes, three runner-up positions and a team award for sportsmanship. More than sixty students took part across athletics, football, basketball and swimming.",
        "The athletics team opened the day with a series of personal bests, including a school record in the 4x100m relay. The football squad played four matches in difficult heat, conceding only once from open play, while the basketball team came from behind in the final quarter to secure a place in the final. The swimmers, many of them competing for the first time, improved on every previous time.",
        "Preparation began weeks earlier, with early-morning training sessions and a focus on recovery, nutrition and rest. Coaches also ran workshops on handling pressure, supporting teammates after mistakes and congratulating opponents — lessons that matter far beyond the scoreboard.",
        "Perhaps the moment we are proudest of came after the final whistle, when our players formed a guard of honour for the opposing team and stayed to thank the officials and volunteers. Several parents remarked that our students were as gracious in victory as in defeat, which is exactly the culture we hope to build.",
        "We congratulate every participant, the coaches who gave up their weekends, and the families who travelled to support the teams. The next fixtures are already scheduled, and trials for the winter season will be announced in the student bulletin.",
      ],
      ar: [
        "مثّل طلابنا المدرسة برباطة جأش وخلق في مسابقة هذا الموسم بين المدارس، وعادوا بمركزين أولين وثلاثة مراكز ثانية وجائزة جماعية للروح الرياضية. شارك أكثر من ستين طالبًا في ألعاب القوى وكرة القدم وكرة السلة والسباحة.",
        "افتتح فريق ألعاب القوى اليوم بسلسلة أرقام شخصية قياسية، منها رقم مدرسي جديد في سباق التتابع ٤×١٠٠ متر. وخاض فريق كرة القدم أربع مباريات في حرارة صعبة، فاستقبل هدفًا واحدًا فقط من اللعب المفتوح، بينما عاد فريق كرة السلة من تأخّر في الربع الأخير ليضمن مكانه في النهائي. أما السبّاحون، وكثير منهم يشارك لأول مرة، فقد حسّنوا كل أرقامهم السابقة.",
        "بدأ الإعداد قبل أسابيع، بتدريبات صباحية مبكرة وتركيز على الاستشفاء والتغذية والراحة. كما نظّم المدربون ورشًا حول التعامل مع الضغط، ومساندة الزملاء بعد الأخطاء، وتهنئة المنافسين — دروس تتجاوز بكثير لوحة النتائج.",
        "لعلّ اللحظة التي نفخر بها أكثر جاءت بعد صافرة النهاية، حين اصطفّ لاعبونا تحيةً للفريق المنافس، وبقوا ليشكروا الحكام والمتطوعين. لاحظ عدد من أولياء الأمور أن طلابنا كانوا لطفاء في الفوز كما في الخسارة، وهي بالضبط الثقافة التي نطمح إلى بنائها.",
        "نبارك لكل مشارك، وللمدربين الذين ضحّوا بعطل نهاية الأسبوع، وللأسر التي سافرت لدعم الفرق. المواعيد التالية محدّدة بالفعل، وستُعلن اختبارات الموسم الشتوي في نشرة الطلاب.",
      ],
    } },
  { slug: "reading-corners", cat: "academics", date: "2026-10-05", photo: 8419263,
    title: { en: "New reading corners open in the library", ar: "افتتاح أركان قراءة جديدة في المكتبة" },
    excerpt: { en: "Quiet spaces to explore books and ideas.", ar: "مساحات هادئة لاستكشاف الكتب والأفكار." },
    body: {
      en: [
        "The library has opened four new reading corners, each designed for a different age group and mood. There are low shelves and floor cushions for our youngest readers, window seats for quiet independent reading, a small group table for book clubs, and a silent corner for older students preparing for examinations.",
        "Every corner was shaped with student feedback. A short survey last term asked what made reading easier and what got in the way; the most common answers were comfortable seating, better light and fewer distractions. The new spaces respond to all three, with adjustable lamps, acoustic panels and clear sightlines for supervising staff.",
        "Alongside the physical changes, the library has launched a reading challenge that runs until the end of term. Students choose their own books, record short reflections and collect stamps for every finished title. There is no fixed list and no minimum number — the aim is to build a habit, not to race through titles.",
        "Families can help in simple ways: ask what your child is reading, read together for ten minutes at bedtime, and visit the library on Saturday mornings, when it opens to parents and children. The librarian is always happy to recommend titles for reluctant readers or for children who have read everything on the shelf.",
        "The library is open before school, during breaks and after lessons until 16:00. We hope these corners become some of the calmest and most loved places on campus — proof that a school can make room for silence in a busy day.",
      ],
      ar: [
        "افتتحت المكتبة أربعة أركان قراءة جديدة، صُمّم كل منها لفئة عمرية ومزاج مختلفين. فهناك رفوف منخفضة ووسائد أرضية لأصغر قرّائنا، ومقاعد عند النوافذ للقراءة المستقلة الهادئة، وطاولة صغيرة لمجموعات الكتاب، وركن صامت للطلاب الأكبر استعدادًا للاختبارات.",
        "تشكّل كل ركن بناءً على ملاحظات الطلاب. سأل استبيان قصير الفصل الماضي عمّا يسهّل القراءة وما يعيقها؛ وكانت أكثر الإجابات شيوعًا: مقاعد مريحة، وإضاءة أفضل، وتشتيت أقل. تستجيب المساحات الجديدة للثلاثة معًا، بمصابيح قابلة للتعديل وألواح عازلة للصوت وخطوط رؤية واضحة للمشرفين.",
        "إلى جانب التغييرات المادية، أطلقت المكتبة تحدي القراءة الذي يستمر حتى نهاية الفصل. يختار الطلاب كتبهم بأنفسهم، ويسجّلون تأملات قصيرة، ويجمعون أختامًا عن كل كتاب يُكملونه. لا قائمة ثابتة ولا حدّ أدنى للعدد — الهدف بناء عادة، لا التسابق على العناوين.",
        "يمكن للأسر المساعدة بطرق بسيطة: اسألوا طفلكم عمّا يقرأ، واقرؤوا معًا عشر دقائق قبل النوم، وزوروا المكتبة صباح السبت حين تُفتح للآباء والأطفال. وأمينة المكتبة سعيدة دائمًا بترشيح عناوين للقرّاء المترددين أو لمن قرأ كل ما على الرف.",
        "المكتبة مفتوحة قبل الدوام وفي الاستراحات وبعد الحصص حتى الساعة ١٦:٠٠. نأمل أن تصبح هذه الأركان من أهدأ أماكن الحرم وأحبّها إلى القلوب — دليلًا على أن المدرسة تستطيع أن تفسح مكانًا للصمت في يوم مزدحم.",
      ],
    } },
  { slug: "cultural-day", cat: "events", date: "2026-09-28", photo: 34526421,
    title: { en: "Cultural day celebrates our community", ar: "يوم ثقافي يحتفي بمجتمعنا" },
    excerpt: { en: "Stories, music and traditions shared by students.", ar: "قصص وموسيقى وتقاليد يشاركها الطلاب." },
    body: {
      en: [
        "Our annual cultural day brought together students, families and staff for a joyful celebration of the many traditions that make up our community. More than twenty nationalities were represented through food, music, dress, poetry and craft, with every stall hosted by students themselves.",
        "The morning opened with a parade through the courtyard, followed by performances on the main stage: a drumming ensemble, a bilingual poetry reading, folk dances learned in after-school clubs, and a short play written by the secondary drama group about arriving in a new country.",
        "In the hall, families shared dishes prepared at home and explained their stories to visitors. Younger students carried 'passports' between stalls, collecting stamps and asking questions, while older students interviewed grandparents and family friends about the traditions they had brought with them.",
        "What struck us most was how naturally students moved between languages and cultures — translating for a parent, teaching a friend a dance step, or proudly explaining a recipe. These small acts of generosity are the real curriculum of the day, and they echo the values we try to live by every week.",
        "Thank you to the families who cooked, sewed, rehearsed and travelled; to the staff who gave their time; and to the students who led with curiosity and warmth. Plans are already forming for next year, and we would love even more families to take part.",
      ],
      ar: [
        "جمع يومنا الثقافي السنوي الطلاب والأسر والعاملين في احتفال بهيج بالتقاليد المتعددة التي يتكوّن منها مجتمعنا. مثّلت أكثر من عشرين جنسية عبر الطعام والموسيقى واللباس والشعر والحِرف، وكان كل جناح يديره الطلاب أنفسهم.",
        "افتتح الصباح بعرض سير في الساحة، تبعه عروض على المسرح الرئيسي: فرقة إيقاع، وقراءة شعرية بلغتين، ورقصات شعبية تعلّمها الطلاب في أندية ما بعد الدوام، ومسرحية قصيرة كتبتها مجموعة المسرح الثانوية عن الوصول إلى بلد جديد.",
        "في القاعة، شاركت الأسر أطباقًا أعدّتها في المنزل وشرحت قصصها للزوار. حمل الطلاب الأصغر «جوازات سفر» بين الأجنحة، يجمعون الأختام ويطرحون الأسئلة، بينما قابل الطلاب الأكبر الأجداد وأصدقاء العائلة عن التقاليد التي حملوها معهم.",
        "أكثر ما أدهشنا هو سهولة تنقّل الطلاب بين اللغات والثقافات — يترجمون لوالد أحدهم، أو يعلّمون صديقًا خطوة رقص، أو يشرحون وصفة بفخر. هذه الأفعال الصغيرة الكريمة هي المنهج الحقيقي لليوم، وهي تردّد صدى القيم التي نحاول أن نعيشها كل أسبوع.",
        "شكرًا للأسر التي طبخت وخاطت وتدرّبت وسافرت؛ وللعاملين الذين منحوا وقتهم؛ وللطلاب الذين قادوا بفضول ودفء. بدأت الخطط تتشكّل للعام القادم، ونودّ أن تشارك أسر أكثر.",
      ],
    } },
];
export const events: { date: string; title: T }[] = [
  { date: "2026-11-14", title: { en: "Open day for new families", ar: "يوم مفتوح للأسر الجديدة" } },
  { date: "2026-11-28", title: { en: "Annual science fair", ar: "معرض العلوم السنوي" } },
  { date: "2026-12-10", title: { en: "Parent–teacher meetings", ar: "لقاءات أولياء الأمور والمعلمين" } },
  { date: "2026-12-18", title: { en: "Winter concert", ar: "الحفل الشتوي" } },
  { date: "2027-01-23", title: { en: "Sports day", ar: "اليوم الرياضي" } },
];
export const fmt = (iso: string, lang: Lang, o: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) =>
  new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-GB", { ...o, timeZone: "UTC" }).format(new Date(iso));
