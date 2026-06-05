// Savollari randomize qiluvchi funksiya
function randomizeQuestions(questions) {
  return questions.map((q) => {
    const correctText = q.options[q.correct];
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffled.indexOf(correctText);

    return {
      ...q,
      options: shuffled,
      correct: newCorrectIndex,
    };
  });
}

// MA'LUMOTLAR BAZASI

const quizDatabase = {


  // //////////////////////////////////////////////////////////////////////////////////
 topic1: {
    title: "Falsafa 1-Bo'lim",
    questions: randomizeQuestions([

 
  {
    "q": "Falsafaning predmeti sifatida qaysi tushunchalar muhim ahamiyatga ega?",
    "options": [
      "Obyektiv va subyektiv borliq",
      "Texnologiya va san’at",
      "Siyosiy va ijtimoiy masalalar",
      "Faqat axloq va qadriyatlar"
    ],
    "correct": 0
  },
  {
    "q": "Ontologiya qaysi masalani o‘rganadi?",
    "options": [
      "Borliq va mavjudlik mohiyatini",
      "Tabiiy hodisalarni",
      "Ilmiy metodlarni",
      "Shaxsiy tajribalarni"
    ],
    "correct": 0
  },
  {
    "q": "Falsafa va dinning umumiy maqsadi nima?",
    "options": [
      "Olam va inson mohiyatini anglash",
      "Axloqiy qadriyatlarni rivojlantirish",
      "Ilmiy haqiqatlarni aniqlash",
      "Tajribaga asoslanish"
    ],
    "correct": 0
  },
  {
    "q": "Falsafiy bilimlarning muhim tarkibiy qismlaridan biri nima?",
    "options": [
      "Gnoseologiya",
      "Axloqiy qadriyatlar",
      "Tajribaviy tafakkur",
      "Shaxsiy e’tiqodlar"
    ],
    "correct": 0
  },
  {
    "q": "Dinning kompensatorlik funksiyasi nimani anglatadi?",
    "options": [
      "Inson ehtiyojlarini ma’naviy qondirishni",
      "Jamiyatni boshqarish tamoyillarini",
      "G‘ayritabiiy kuchlarga ishonchni kuchaytirishni",
      "Diniy qadriyatlarni shakllantirishni"
    ],
    "correct": 0
  },
  {
    "q": "Diniy e’tiqodlarning asosiy shakllari qaysilar?",
    "options": [
      "Fetishizm, animizm, totemizm",
      "Materializm va idealizm",
      "Ontologiya va aksiologiya",
      "Skeptisizm va empirizm"
    ],
    "correct": 0
  },
  {
    "q": "Falsafa va fan orasidagi asosiy o‘xshashlik nima?",
    "options": [
      "Bilim va tushunchalarni shakllantirishga intiladi",
      "Har ikkisi eksperimentga asoslanadi",
      "Har ikkisi diniy tushunchalardan foydalanadi",
      "Faqat real voqelikni o‘rganadi"
    ],
    "correct": 0
  },
  {
    "q": "Falsafaning madaniy funksiyasi nimani anglatadi?",
    "options": [
      "Insoniyatning umumiy madaniy taraqqiyotiga xizmat qilish",
      "Diniy qadriyatlarni mustahkamlash",
      "Ilmiy qonunlarni tushuntirish",
      "Jamiyatni axloqiy tarbiyalash"
    ],
    "correct": 0
  },
  {
    "q": "Falsafaning ijtimoiy sohaga ta’siri qanday namoyon bo‘ladi?",
    "options": [
      "Jamiyatni boshqarishdagi qarashlarni shakllantirish orqali",
      "Faqat axloqiy qadriyatlarni o‘rgatishda",
      "Faqat tabiiy hodisalarni tushuntirishda",
      "Ilmiy haqiqatlarni targ‘ib qilishda"
    ],
    "correct": 0
  },
  {
    "q": "Falsafiy dunyoqarashning eng muhim vazifasi nima?",
    "options": [
      "Insonning o‘zini va borliqni anglashiga yordam berish",
      "Ilmiy ma’lumotlarni to‘plash",
      "Jamiyatni axloqiy tarbiyalash",
      "Diniy qoidalarni kuchaytirish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat qanday tizim sifatida qaraladi?",
    "options": [
      "Rivojlanuvchi va o‘zgaruvchan tizim",
      "Biologik birlik",
      "Faqat iqtisodiy tizim",
      "Statik ijtimoiy guruh"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat falsafasining asosiy vazifasi nimadan iborat?",
    "options": [
      "Jamiyatning umumiy tamoyillari va qonuniyatlarini aniqlash",
      "Moddiy ne’matlar iste’molini tahlil qilish",
      "Tarixiy hodisalarni tasodifiy talqin qilish",
      "Siyosiy qarorlarni o‘rganish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat hayoti nima uchun murakkab hisoblanadi?",
    "options": [
      "Barcha jarayonlarning o‘zaro uzviy bog‘liqligi",
      "Faqat iqtisodiy tizimlarning mavjudligi",
      "Ijtimoiy institutlarning yo‘qligi",
      "Subyektiv omillarning mavjud emasligi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning fanda o‘rganilishi qaysi fanlarga taalluqli?",
    "options": [
      "Sotsiologiya, tarix, siyosatshunoslik, huquqshunoslik",
      "Faqat iqtisodiyot va sotsiologiya",
      "Texnologiya va axborot texnologiyalari",
      "Biologiya va kimyo"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiyning fikriga ko‘ra, to‘liq jamiyat qaysi bosqichdan boshlanadi?",
    "options": [
      "Shahar",
      "Millat",
      "Oila",
      "Qishloq"
    ],
    "correct": 0
  },
  {
    "q": "Tarix falsafasi jamiyatni qanday o‘rganadi?",
    "options": [
      "Tarixiy jarayonlarning umumiy qonuniyatlari orqali",
      "Ijtimoiy institutlarning qisqacha talqini orqali",
      "Faqat shaxsiy fikrlarni hisobga olgan holda",
      "Texnologik taraqqiyot yutuqlarini tahlil qibly"
    ],
    "correct": 0
  },
  {
    "q": "Tarixiy rivojlanish jarayonida subyektiv omillar qanday rol o‘ynaydi?",
    "options": [
      "Jamiyatning rivojlanishiga muhim ta’sir ko‘rsatadi",
      "Tasodifiy hodisalarni boshqaradi",
      "Faqat iqtisodiy jarayonlarni shakllantiradi",
      "Umuman ahamiyatsizdir"
    ],
    "correct": 0
  },
  {
    "q": "Nikolay Danilevskiy nazariyasiga ko‘ra, madaniy-tarixiy tiplar qanday tavsiflanadi?",
    "options": [
      "Sivilizatsiyalar o‘zaro mustaqil rivojlanadi",
      "Faqat milliy o‘ziga xoslikka asoslanadi",
      "Barcha sivilizatsiyalar bir xil tamoyilga amal qiladi",
      "Tarixiy jarayonlar diniy boshqaruv ostida"
    ],
    "correct": 0
  },
  {
    "q": "Ibn Xaldunning fikriga ko‘ra, tarix mazmuni qayerda o‘z ifodasini topadi?",
    "options": [
      "Erkinlik va ijodiy faoliyatda",
      "Siyosiy hokimiyatda",
      "Faqat iqtisodiy rivojlanishda",
      "Tasodifiy hodisalarda"
    ],
    "correct": 0
  },
  {
    "q": "Karl Yaspersning fikricha, tarixning asosiy mazmuni nimada?",
    "options": [
      "Umuminsoniy aloqalar va madaniyatlar bog‘lanishida",
      "Faqat diniy an’analar bilan bog‘liq",
      "Xalqlar urf-odatlarida",
      "Faqat iqtisodiy resurslardan foydalanishda"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatni rivojlantiruvchi asosiy omillar qaysilar?",
    "options": [
      "Ijtimoiy o‘zgarishlar va madaniy taraqqiyot",
      "Biologik evolyutsiya",
      "Tasodifiy voqealar",
      "Moddiy resurslarning ko‘payishi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning tizimli rivojlanishida tarixiy jarayon qanday rol o‘ynaydi?",
    "options": [
      "Jamiyatning kelajak yo‘nalishini belgilaydi",
      "Hodisalarni tasodifiy boshqaradi",
      "Biologik moslashuvlarni boshqaradi",
      "Moddiy ne’matlar almashinuvi uchun sharoit yaratadi"
    ],
    "correct": 0
  },
  {
    "q": "Madaniyatning jamiyatdagi vazifasi nimadan iborat?",
    "options": [
      "Munosabatlar va qadriyatlarni tartibga solish",
      "Siyosiy boshqaruvni kuchaytirish",
      "Faqat iqtisodiy tizimlarni rivojlantirish",
      "Ijtimoiy guruhlarni bo‘lish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatni to‘liq va to‘liqsizga ajratishda qanday omillar muhim?",
    "options": [
      "Madaniy va ijtimoiy tizimlarning o‘zaro bog‘liqligi",
      "Moddiy va texnologik imkoniyatlar",
      "Milliy resurslar miqdori",
      "Faqat tabiiy sharoitlar"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi jamiyat to‘liqsiz hisoblanadi?",
    "options": [
      "Bir qishloq yoki ovul",
      "Shahar yoki milliy birlik",
      "Xalqaro sivilizatsiya",
      "Umumiy madaniy jamiyat"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning kelib chiqishi haqida ilmiy qarashlarda qanday izohlanadi?",
    "options": [
      "Mehnat va muloqot orqali",
      "Tasodifiy hodisalarning birlashuvi orqali",
      "Biologik evolyutsiya natijasida",
      "Tabiiy resurslarning mavjudligi asosida"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi omil jamiyatni tashkil qilishda eng muhim deb hisoblanadi?",
    "options": [
      "Ijtimoiy munosabatlar tizimi",
      "Faqat moddiy resurslar",
      "Xalqlarning urf-odatlari",
      "Hududiy sharoitlar"
    ],
    "correct": 0
  },
  {
    "q": "Inson jamiyatining shakllanishida qanday jarayonlar muhim?",
    "options": [
      "Mehnat, muloqot va tajriba yig‘ilishi",
      "Biologik moslashuv",
      "Faqat iqtisodiy boshqaruv",
      "Moddiy ne’matlar taqsimoti"
    ],
    "correct": 0
  }

    ]),
  },

  ///////////////////////////////////////////////////////////////////////////////////


 topic2: {
    title: "Falsafa 2-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Jamiyatni falsafiy o‘rganishda qanyan metodologiya qo‘llanadi?",
    "options": [
      "Umumiy qonuniyatlar va tamoyillarni tahlil qilish",
      "Matematik tahlil",
      "Faqat tarixiy tadqiqotlar",
      "Biologik nazariya"
    ],
    "correct": 0
  },
  {
    "q": "Subyektiv omillar jamiyatni qanday rivojlantiradi?",
    "options": [
      "Jamiyatning o‘zgaruvchanligini ta’minlaydi",
      "Iqtisodiy tizimlarni saqlaydi",
      "Tasodifiy jarayonlarni boshqaradi",
      "Faqat siyosiy qarorlarni belgilaydi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning rivojlanishida tarixning roli qanday?",
    "options": [
      "Ijtimoiy tamoyillarni shakllantirish",
      "Xalqlar o‘rtasidagi mojarolarni ko‘paytirish",
      "Faqat iqtisodiy resurslarni boshqarish",
      "Siyosiy tizimlarni tartibga solish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat hayotida uzviy bog‘liq jarayonlar qanday aks etadi?",
    "options": [
      "Bir jarayon boshqa jarayonga ta’sir ko‘rsatadi",
      "Biologik sharoitlarga moslashish orqali",
      "Hodisalarning tasodifiyligi orqali",
      "Texnologik imkoniyatlar orqali"
    ],
    "correct": 0
  },
  {
    "q": "Tarix falsafasida jamiyat rivojlanishining asosiy tamoyillari nima?",
    "options": [
      "Davrlarning uzviy birligi va tamoyillarni belgilash",
      "Xalqlar iqtisodiy raqobati",
      "Siyosiy tizimlarning barqarorligi",
      "Milliy resurslarni taqsimlash"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy va madaniy o‘zaro munosabatlar tizimi nima hisoblanadi?",
    "options": [
      "Jamiyat",
      "Faqat iqtisodiy omillarni hisobga oluvchi tizim",
      "Moddiy resurslar tizimi",
      "Nomoddiy resurslar tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Mehnat jamiyatning shakllanishida qanday ahamiyatga ega?",
    "options": [
      "Ijtimoiy hamkorlikni shakllantiradi",
      "Hodisalarni tasodifiy boshqaradi",
      "Faqat moddiy ishlab chiqarishni oshiradi",
      "Subyektiv ehtiyojlarni qondiradi"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiyning jamiyat haqidagi qarashlari nimaga asoslanadi?",
    "options": [
      "To‘liq va to‘liqsiz jamiyatlarga ajratishga",
      "Faqat diniy tamoyillarga",
      "Moddiy resurslarga tayanishga",
      "Texnologik imkoniyatlarga"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning tarixiy rivojlanishida qanday qonuniyatlar muhim?",
    "options": [
      "O‘zgaruvchanlik va uzviy bog‘liqlik",
      "Siyosiy o‘zgarishlar va texnologik taraqqiyot",
      "Biologik evolyutsiya va o‘zaro moslashuv",
      "Faqat madaniy meros"
    ],
    "correct": 0
  },
  {
    "q": "Tarix falsafasi qaysi masalalarni o‘rganadi?",
    "options": [
      "Tarixning davriyligi va tamoyillarini belgilash",
      "Faqat siyosiy jarayonlarni",
      "Texnologik imkoniyatlarning ta’sirini",
      "Hududiy rivojlanish qonuniyatlarini"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat va uning kelib chiqishini falsafiy tahlil qilishda qanday yondashuv muhim?",
    "options": [
      "Umumiy tamoyillar va uzviylikni aniqlash",
      "Hodisalarni faqat tarixiy ma’lumotlarga bog‘lash",
      "Faqat iqtisodiy tahlil",
      "Biologik evolyutsiyani asos qilish"
    ],
    "correct": 0
  },
  {
    "q": "Madaniy jarayonlarning jamiyat rivojlanishidagi roli nimadan iborat?",
    "options": [
      "Xulq-atvor me’yorlari va o‘zaro munosabatlarni shakllantirish",
      "Faqat moddiy boyliklarni oshirish",
      "Siyosiy hokimiyatni kuchaytirish",
      "Biologik ehtiyojlarni qondirish"
    ],
    "correct": 0
  },
  {
    "q": "Falsafaning vazifasi jamiyatni qanday tahlil qilishdan iborat?",
    "options": [
      "Umumiy tamoyillar va qonuniyatlar orqali",
      "Texnologik rivojlanish darajasiga ko‘ra",
      "Faqat tarixiy hujjatlar asosida",
      "Subyektiv mulohazalar yordamida"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiyning fikriga ko‘ra, to‘liq jamiyatning birinchi bosqichi nima?",
    "options": [
      "Shahar jamiyati",
      "Oila",
      "Milliy birlik",
      "Qishloq"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi nazariya madaniy-tarixiy tiplarni o‘rganishga asos bo‘lgan?",
    "options": [
      "Nikolay Danilevskiy nazariyasi",
      "Marksizm nazariyasi",
      "Evolyutsion nazariya",
      "Sivilizatsiyalar farqlari"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat hayotini falsafiy o‘rganishda qaysi omillar muhim hisoblanadi?",
    "options": [
      "Subyektiv omillar va tasodiflar",
      "Biologik moslashuv va yashash muhiti",
      "Texnologik taraqqiyot va iqtisodiy ko‘rsatkichlar",
      "Iqlim sharoitlari"
    ],
    "correct": 0
  },
  {
    "q": "Madaniyat의 asosiy funksiyalaridan biri nima?",
    "options": [
      "Jamiyatdagi munosabatlarni muvofiqlashtirish",
      "Siyosiy nazoratni kuchaytirish",
      "Texnologik rivojlanishni ta’minlash",
      "Tabiatni o‘zgartirish"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiy jamiyatni qanday bo‘lgan deb tasniflagan?",
    "options": [
      "To‘liq va to‘liqsiz jamiyat",
      "Milliy va xalqaro jamiyat",
      "Urbanizatsiyalashgan jamiyat",
      "Qishloq xo‘jalik jamiyati"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning rivojlanish jarayoni qanday belgilangan?",
    "options": [
      "Ijtimoiy va madaniy o‘zgarishlar orqali",
      "Biologik moslashuv malli",
      "To‘xtovsiz takrorlanish orqali",
      "Faqat siyosiy boshqaruv orqali"
    ],
    "correct": 0
  },
  {
    "q": "Falsafada jamiyatning o‘zgaruvchanligi nimaga asoslangan?",
    "options": [
      "Ijtimoiy jarayonlar va subyektiv omillarga",
      "Faqat iqtisodiy omillarga",
      "Siyosiy qarashlarga",
      "Biologik omillarga"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat tushunchasi fanga qanday maqsadlarda kerak?",
    "options": [
      "Jamiyatni yaxlit tizim sifatida tushunish uchun",
      "Faqat tarixiy hodisalarni saqlash uchun",
      "Iqtisodiy resurslarni boshqarish uchun",
      "Siyosiy boshqaruvni mustahkamlash uchun"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning kelib chiqishiga oid ilmiy nazariyalar nimalarga asoslangan?",
    "options": [
      "Mehnat, muloqot va tajriba",
      "Biologik moslashuvlar",
      "Tasodifiy hodisalar",
      "Faqat madaniy yutuqlar"
    ],
    "correct": 0
  },
  {
    "q": "Qadriyatlar tizimi jamiyatda qanday rol o‘ynaydi?",
    "options": [
      "Ijtimoiy munosabatlarni tartibga soladi",
      "Faqat shaxsiy manfaatlarni himoya qiladi",
      "Siyosiy tizimlarni barqarorlashtiradi",
      "Madaniy yutuqlarni o‘zlashtiradi"
    ],
    "correct": 0
  },
  {
    "q": "Forobiyning fikriga ko‘ra to‘liq jamiyatga qaysi darajalar kiradi?",
    "options": [
      "Yer yuzidagi jami insonlar, bir millat yoki bir dinga mansub kishilar, muayyan shahar jamiyati",
      "Bir oila, bir qishloq yoki bir ovul",
      "Faqat davlat darajasidagi jamiyat",
      "Faqat madaniy birliklar"
    ],
    "correct": 0
  },
  {
    "q": "P.A. Sorokin jamiyatni qanday tizim sifatida tasvirlagan?",
    "options": [
      "Gorizontal, vertikal va fluktuatsion tizimlar",
      "Ijtimoiy siyosiy tizimlar",
      "Faqat iqtisodiy tizim",
      "Etnik guruhlar yig‘indisi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning iqtisodiy sohasi nimani o‘z ichiga oladi?",
    "options": [
      "Ishlab chiqarish, iste’mol, taqsimot va mulkchilik munosabatlari",
      "Siyosiy hokimiyatning taqsimlanishi",
      "Madaniy qadriyatlarning rivojlanishi",
      "Huquqiy normalar va qonunlar"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy sohaning asosiy vazifasi nima?",
    "options": [
      "Jamiyat boshqaruvini tashkil qilish va hokimiyatni taqsimlash",
      "Mehnat resurslarini rivojlantirish",
      "Moddiy ne’matlar ishlab chiqarishni boshqarish",
      "Axloqiy me’yorlarni tartibga solish"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy soha qanday munosabatlarni o‘z ichiga oladi?",
    "options": [
      "Odamlar o‘rtasidagi o‘zaro munosabatlar va ijtimoiy guruhlar faoliyatini",
      "Faqat iqtisodiy jarayonlarni",
      "Siyosiy hokimiyat va boshqaruvni",
      "Ilm-fanning rivojlanishini"
    ],
    "correct": 0
  },
  {
    "q": "Madaniy sohaning asosiy xususiyati nima?",
    "options": [
      "Insonning axloqiy, estetik, diniy va bilim sohalaridagi faoliyati",
      "Siyosiy boshqaruvni tashkil qilish",
      "Huquqiy normalar ishlab chiqish",
      "Moddiy ne’matlar ishlab chiqarish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning qaysi sohasi axloqiy me’yorlarni shakllantiradi?",
    "options": [
      "Madaniy soha",
      "Iqtisodiy soha",
      "Siyosiy soha",
      "Huquqiy soha"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy va iqtisodiy sohalarning o‘zaro bog‘liqligi nimada namoyon bo‘ladi?",
    "options": [
      "Siyosiy qarorlar iqtisodiy tizimni boshqarishga ta’sir ko‘rsatadi",
      "Siyosiy hokimiyat faqat mulkni boshqaradi",
      "Iqtisodiyot siyosiy tizimga ta’sir ko‘rsatmaydi",
      "Har biri mustaqil faoliyat yuritadi"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy sohaning rivojlanishida qaysi omil muhim rol o‘ynaydi?",
    "options": [
      "Jamiyatdagi tenglik va adolatni ta’minlash",
      "Siyosiy qarorlarning qat’iyligi",
      "Moddiy resurslarning ko‘payishi",
      "Texnologik taraqqiyot"
    ],
    "correct": 0
  },
  {
    "q": "Madaniy sohaning rivojlanishiga qaysi jarayon ta’sir qiladi?",
    "options": [
      "Ta’lim, san’at, din va adabiyot rivojlanishi",
      "Moddiy resurslarni ko‘paytirish",
      "Siyosiy boshqaruv usullarining islohoti",
      "Xalqaro savdo aloqalari"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy soha va madaniy soha o‘rtasidagi bog‘liqlik nimadan iborat?",
    "options": [
      "Madaniyat ijtimoiy munosabatlarning axloqiy va estetik jihatlarini shakllantiradi",
      "Ijtimoiy soha faqat moddiy jarayonlarga asoslangan",
      "Madaniyat faqat ijtimoiy guruhlarni boshqaradi",
      "Ijtimoiy munosabatlar siyosiy tizimga bog‘liq"
    ],
    "correct": 0
  },
  {
    "q": "Huquqiy sohaning asosiy vazifasi nima?",
    "options": [
      "Qonunlar ishlab chiqish va ijtimoiy tartibni ta’minlash",
      "Axloqiy qadriyatlarni shakllantirish",
      "Siyosiy hokimiyatni rivojlantirish",
      "Ijtimoiy tenglikni ta’minlash"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat qanday tushuniladi?",
    "options": [
      "Odamlar o‘rtasidagi o‘zaro munosabatlarning ijtimoiy tizimi",
      "Iqtisodiy tizimlarning majmui",
      "Faqat siyosiy hokimiyatning shakli",
      "Tabiiy omillar yig‘indisi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat tushunchasi falsafada qanday yondashuvlarda o‘rganiladi?",
    "options": [
      "Formasion va sivilizasion yondashuvlarda",
      "Faqat iqtisodiy va biologik yondashuvlarda",
      "Diniy va tabiiy yondashuvlarda",
      "Tarixiy va geografik tahlil asosida"
    ],
    "correct": 0
  },
  {
    "q": "Gnoseologiya nima?",
    "options": [
      "Bilish haqidagi ta’limot",
      "Matematik nazariya",
      "Falsafiy metod",
      "Eksperimental o‘rganish"
    ],
    "correct": 0
  },
  {
    "q": "Epistemologiyaning asosiy o‘rganish obyekti nima?",
    "options": [
      "Haqiqiy bilimlarning mazmuni",
      "Axloqiy qoidalar",
      "San’at nazariyasi",
      "Iqtisodiy jarayonlar"
    ],
    "correct": 0
  },
  {
    "q": "Optimistlarning dunyoqarashiga ko‘ra, dunyoni bilish qanday?",
    "options": [
      "Mumkin",
      "Mumkin emas",
      "Shubhali",
      "Imkoniyat mavjud emas"
    ],
    "correct": 0
  },
  {
    "q": "Bilimning empirik turi qaysi olimlar tomonidan qo‘llab-quvvatlangan?",
    "options": [
      "F. Bekon, J. Lokk, T. Gobbs",
      "I. Kant, G. Gegel",
      "A. Avgustin, Platon",
      "Dekart, Spinoza"
    ],
    "correct": 0
  }

 
    ]),
  },

// /////////////////////////////////////////////////////////////////////////////////
  
 topic3: {
    title: "Falsafa 3-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Jamiyatni falsafiy o‘rganishda qanday metodologiya qo‘llanadi?",
    "options": [
      "Umumiy qonuniyatlar va tamoyillarni tahlil qilish",
      "Matematik tahlil",
      "Faqat tarixiy tadqiqotlar",
      "Biologik nazariya"
    ],
    "correct": 0
  },
  {
    "q": "Subyektiv omillar jamiyatni qanday rivojlantiradi?",
    "options": [
      "Jamiyatning o‘zgaruvchanligini ta’minlaydi",
      "Iqtisodiy tizimlarni saqlaydi",
      "Tasodifiy jarayonlarni boshqaradi",
      "Faqat siyosiy qarorlarni belgilaydi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning rivojlanishida tarixning roli qanday?",
    "options": [
      "Ijtimoiy tamoyillarni shakllantirish",
      "Xalqlar o‘rtasidagi mojarolarni ko‘paytirish",
      "Faqat iqtisodiy resurslarni boshqarish",
      "Siyosiy tizimlarni tartibga solish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat hayotida uzviy bog‘liq jarayonlar qanday aks etadi?",
    "options": [
      "Bir jarayon boshqa jarayonga ta’sir ko‘rsatadi",
      "Biologik sharoitlarga moslashish orqali",
      "Hodisalarning tasodifiyligi orqali",
      "Texnologik imkoniyatlar orqali"
    ],
    "correct": 0
  },
  {
    "q": "Tarix falsafasida jamiyat rivojlanishining asosiy tamoyillari nima?",
    "options": [
      "Davrlarning uzviy birligi va tamoyillarni belgilash",
      "Xalqlar iqtisodiy raqobati",
      "Siyosiy tizimlarning barqarorligi",
      "Milliy resurslarni taqsimlash"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy va madaniy o‘zaro munosabatlar tizimi nima hisoblanadi?",
    "options": [
      "Jamiyat",
      "Faqat iqtisodiy omillarni hisobga oluvchi tizim",
      "Moddiy resurslar tizimi",
      "Nomoddiy resurslar tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Mehnat jamiyatning shakllanishida qanday ahamiyatga ega?",
    "options": [
      "Ijtimoiy hamkorlikni shakllantiradi",
      "Hodisalarni tasodifiy boshqaradi",
      "Faqat moddiy ishlab chiqarishni oshiradi",
      "Subyektiv ehtiyojlarni qondiradi"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiyning jamiyat haqidagi qarashlari nimaga asoslanadi?",
    "options": [
      "To‘liq va to‘liqsiz jamiyatlarga ajratishga",
      "Faqat diniy tamoyillarga",
      "Moddiy resurslarga tayanishga",
      "Texnologik imkoniyatlarga"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning tarixiy rivojlanishida qanday qonuniyatlar muhim?",
    "options": [
      "O‘zgaruvchanlik va uzviy bog‘liqlik",
      "Siyosiy o‘zgarishlar va texnologik taraqqiyot",
      "Biologik evolyutsiya va o‘zaro moslashuv",
      "Faqat madaniy meros"
    ],
    "correct": 0
  },
  {
    "q": "Tarix falsafasi qaysi masalalarni o‘rganadi?",
    "options": [
      "Tarixning davriyligi va tamoyillarini belgilash",
      "Faqat siyosiy jarayonlarni",
      "Texnologik imkoniyatlarning ta’sirini",
      "Hududiy rivojlanish qonuniyatlarini"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat va uning kelib chiqishini falsafiy tahlil qilishda qanday yondashuv muhim?",
    "options": [
      "Umumiy tamoyillar va uzviylikni aniqlash",
      "Hodisalarni faqat tarixiy ma’lumotlarga bog‘lash",
      "Faqat iqtisodiy tahlil",
      "Biologik evolyutsiyani asos qilish"
    ],
    "correct": 0
  },
  {
    "q": "Madaniy jarayonlarning jamiyat rivojlanishidagi roli nimadan iborat?",
    "options": [
      "Xulq-atvor me’yorlari va o‘zaro munosabatlarni shakllantirish",
      "Faqat moddiy boyliklarni oshirish",
      "Siyosiy hokimiyatni kuchaytirish",
      "Biologik ehtiyojlarni qondirish"
    ],
    "correct": 0
  },
  {
    "q": "Falsafaning vazifasi jamiyatni qanday tahlil qilishdan iborat?",
    "options": [
      "Umumiy tamoyillar va qonuniyatlar orqali",
      "Texnologik rivojlanish darajasiga ko‘ra",
      "Faqat tarixiy hujjatlar asosida",
      "Subyektiv mulohazalar yordamida"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiyning fikriga ko‘ra, to‘liq jamiyatning birinchi bosqichi nima?",
    "options": [
      "Shahar jamiyati",
      "Oila",
      "Milliy birlik",
      "Qishloq"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi nazariya madaniy-tarixiy tiplarni o‘rganishga asos bo‘lgan?",
    "options": [
      "Nikolay Danilevskiy nazariyasi",
      "Marksizm nazariyasi",
      "Evolyutsion nazariya",
      "Sivilizatsiyalar farqlari"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat hayotini falsafiy o‘rganishda qaysi omillar muhim hisoblanadi?",
    "options": [
      "Subyektiv omillar va tasodiflar",
      "Biologik moslashuv va yashash muhiti",
      "Texnologik taraqqiyot va iqtisodiy koszatkichlar",
      "Iqlim sharoitlari"
    ],
    "correct": 0
  },
  {
    "q": "Madaniyatning asosiy funksiyalaridan biri nima?",
    "options": [
      "Jamiyatdagi munosabatlarni muvofiqlashtirish",
      "Siyosiy nazoratni kuchaytirish",
      "Texnologik rivojlanishni ta’minlash",
      "Tabiatni o‘zgartirish"
    ],
    "correct": 0
  },
  {
    "q": "Abu Nasr Forobiy jamiyatni qanday bo‘lgan deb tasniflagan?",
    "options": [
      "To‘liq va to‘liqsiz jamiyat",
      "Milliy va xalqaro jamiyat",
      "Urbanizatsiyalashgan jamiyat",
      "Qishloq xo‘jalik jamiyati"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning rivojlanish jarayoni qanday belgilangan?",
    "options": [
      "Ijtimoiy va madaniy o‘zgarishlar orqali",
      "Biologik moslashuv orqali",
      "To‘xtovsiz takrorlanish orqali",
      "Faqat siyosiy boshqaruv orqali"
    ],
    "correct": 0
  },
  {
    "q": "Falsafada jamiyatning o‘zgaruvchanligi nimaga asoslangan?",
    "options": [
      "Ijtimoiy jarayonlar va subyektiv omillarga",
      "Faqat iqtisodiy omillarga",
      "Siyosiy qarashlarga",
      "Biologik omillarga"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat tushunchasi fanga qanday maqsadlarda kerak?",
    "options": [
      "Jamiyatni yaxlit tizim sifatida tushunish uchun",
      "Faqat tarixiy hodisalarni saqlash uchun",
      "Iqtisodiy resurslarni boshqarish uchun",
      "Siyosiy boshqaruvni mustahkamlash uchun"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning kelib chiqishiga oid ilmiy nazariyalar nimalarga asoslangan?",
    "options": [
      "Mehnat, muloqot va tajriba",
      "Biologik moslashuvlar",
      "Tasodifiy hodisalar",
      "Faqat madaniy yutuqlar"
    ],
    "correct": 0
  },
  {
    "q": "Qadriyatlar tizimi jamiyatda qanday rol o‘ynaydi?",
    "options": [
      "Ijtimoiy munosabatlarni tartibga soladi",
      "Faqat shaxsiy manfaatlarni himoya qiladi",
      "Siyosiy tizimlarni barqarorlashtiradi",
      "Madaniy yutuqlarni o‘zlashtiradi"
    ],
    "correct": 0
  },
  {
    "q": "Forobiyning fikriga ko‘ra to‘liq jamiyatga qaysi darajalar kiradi?",
    "options": [
      "Yer yuzidagi jami insonlar, bir millat yoki bir dinga mansub kishilar, muayyan shahar jamiyati",
      "Bir oila, bir qishloq yoki bir ovul",
      "Faqat davlat darajasidagi jamiyat",
      "Faqat madaniy birliklar"
    ],
    "correct": 0
  },
  {
    "q": "P.A. Sorokin jamiyatni qanday tizim sifatida tasvirlagan?",
    "options": [
      "Gorizontal, vertikal va fluktuatsion tizimlar",
      "Ijtimoiy siyosiy tizimlar",
      "Faqat iqtisodiy tizim",
      "Etnik guruhlar yig‘indisi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning iqtisodiy sohasi nimani o‘z ichiga oladi?",
    "options": [
      "Ishlab chiqarish, iste’mol, taqsimot va mulkchilik munosabatlari",
      "Siyosiy hokimiyatning taqsimlanishi",
      "Madaniy qadriyatlarning rivojlanishi",
      "Huquqiy normalar va qonunlar"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy sohaning asosiy vazifasi nima?",
    "options": [
      "Jamiyat boshqaruvini tashkil qilish va hokimiyatni taqsimlash",
      "Mehnat resurslarini rivojlantirish",
      "Moddiy ne’matlar ishlab chiqarishni boshqarish",
      "Axloqiy me’yorlarni tartibga solish"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy soha qanday munosabatlarni o‘z ichiga oladi?",
    "options": [
      "Odamlar o‘rtasidagi o‘zaro munosabatlar va ijtimoiy guruhlar faoliyatini",
      "Faqat iqtisodiy jarayonlarni",
      "Siyosiy hokimiyat va boshqaruvni",
      "Ilm-fanning rivojlanishini"
    ],
    "correct": 0
  },
  {
    "q": "Madaniy sohaning asosiy xususiyati nima?",
    "options": [
      "Insonning axloqiy, estetik, diniy va bilim sohalaridagi faoliyati",
      "Siyosiy boshqaruvni tashkil qilish",
      "Huquqiy normalar ishlab chiqish",
      "Moddiy ne’matlar ishlab chiqarish"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatning qaysi sohasi axloqiy me’yorlarni shakllantiradi?",
    "options": [
      "Madaniy soha",
      "Iqtisodiy soha",
      "Siyosiy soha",
      "Huquqiy soha"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy va iqtisodiy sohalarning o‘zaro bog‘liqligi nimada namoyon bo‘ladi?",
    "options": [
      "Siyosiy qarorlar iqtisodiy tizimni boshqarishga ta’sir ko‘rsatadi",
      "Siyosiy hokimiyat faqat mulkni boshqaradi",
      "Iqtisodiyot siyosiy tizimga ta’sir ko‘rsatmaydi",
      "Har biri mustaqil faoliyat yuritadi"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy sohaning rivojlanishida qaysi omil muhim rol o‘ynaydi?",
    "options": [
      "Jamiyatdagi tenglik va adolatni ta’minlash",
      "Siyosiy qarorlarning qat’iyligi",
      "Moddiy resurslarning ko‘payishi",
      "Texnologik taraqqiyot"
    ],
    "correct": 0
  },
  {
    "q": "Madaniy sohaning rivojlanishiga qaysi jarayon ta’sir qiladi?",
    "options": [
      "Ta’lim, san’at, din va adabiyot rivojlanishi",
      "Moddiy resurslarni ko‘paytirish",
      "Siyosiy boshqaruv usullarining islohoti",
      "Xalqaro savdo aloqalari"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy soha va madaniy soha o‘rtasidagi bog‘liqlik nimadan iborat?",
    "options": [
      "Madaniyat ijtimoiy munosabatlarning axloqiy va estetik jihatlarini shakllantiradi",
      "Ijtimoiy soha faqat moddiy jarayonlarga asoslangan",
      "Madaniyat faqat ijtimoiy guruhlarni boshqaradi",
      "Ijtimoiy munosabatlar siyosiy tizimga bog‘liq"
    ],
    "correct": 0
  },
  {
    "q": "Huquqiy sohaning asosiy vazifasi nima?",
    "options": [
      "Qonunlar ishlab chiqish va ijtimoiy tartibni ta’minlash",
      "Axloqiy qadriyatlarni shakllantirish",
      "Siyosiy hokimiyatni rivojlantirish",
      "Ijtimoiy tenglikni ta’minlash"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat qanday tushuniladi?",
    "options": [
      "Odamlar o‘rtasidagi o‘zaro munosabatlarining ijtimoiy tizimi",
      "Iqtisodiy tizimlarning majmui",
      "Faqat siyosiy hokimiyatning shakli",
      "Tabiiy omillar yig‘indisi"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat tushunchasi falsafada qanday yondashuvlarda o‘rganiladi?",
    "options": [
      "Formasion va sivilizasion yondashuvlarda",
      "Faqat iqtisodiy va biologik yondashuvlarda",
      "Diniy va tabiiy yondashuvlarda",
      "Tarixiy va geografik tahlil asosida"
    ],
    "correct": 0
  },
  {
    "q": "Gnoseologiya nima?",
    "options": [
      "Bilish haqidagi ta’limot",
      "Matematik nazariya",
      "Falsafiy metod",
      "Eksperimental o‘rganish"
    ],
    "correct": 0
  },
  {
    "q": "Epistemologiyaning asosiy o‘rganish obyekti nima?",
    "options": [
      "Haqiqiy bilimlarning mazmuni",
      "Axloqiy qoidalar",
      "San’at nazariyasi",
      "Iqtisodiy jarayonlar"
    ],
    "correct": 0
  },
  {
    "q": "Optimistlarning dunyoqarashiga ko‘ra, dunyoni bilish qanday?",
    "options": [
      "Mumkin",
      "Mumkin emas",
      "Shubhali",
      "Imkoniyat mavjud emas"
    ],
    "correct": 0
  },
  {
    "q": "Bilimning empirik turi qaysi olimlar tomonidan qo‘llab-quvvatlangan?",
    "options": [
      "F. Bekon, J. Lokk, T. Gobbs",
      "I. Kant, G. Gegel",
      "A. Avgustin, Platon",
      "Dekart, Spinoza"
    ],
    "correct": 0
  }

 
    ]),
  },
// //////////////////////////////////////////////////////////////////////////////////
 topic4: {
    title: "Falsafa 4-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Amaldagi qonunlarga bo‘ysunmaydigan, ularni aksioma tarzida qo‘llab bo‘lmaydigan qism, borliq nima?",
    "options": [
      "Cheksizlik",
      "Cheklilik",
      "Cheklanmaganlik",
      "Cheklilik"
    ],
    "correct": 0
  },
  {
    "q": "Nisbiylik nazariyasi va kvant mexanikasi nechinchi asrda yaratilgan?",
    "options": [
      "XX asrda",
      "XXI asrda",
      "XI asrda",
      "XII asrda"
    ],
    "correct": 0
  },
  {
    "q": "Substansiyaning qaysi xususiyati hech narsaga bog‘liq bo‘lmagan, barqaror, o‘zgarmas va mutlaqlikni ifodalaydi?",
    "options": [
      "O‘z-o‘zini belgilash",
      "Universallik",
      "Go‘zallik",
      "Yagonalik"
    ],
    "correct": 0
  },
  {
    "q": "“Men fikrlayapman, demak men mavjudman” iborasi muallifi kim?",
    "options": [
      "Rene Descartes",
      "Baruch Spinoza",
      "Immanuel Kant",
      "Friedrich Nietzsche"
    ],
    "correct": 0
  },
  {
    "q": "Dualizm atamasini falsafaga kiritgan faylasuf kim?",
    "options": [
      "Volf",
      "Lametri",
      "Immanuel Kant",
      "Friedrich Nietzsche"
    ],
    "correct": 0
  },
  {
    "q": "Dualistik ta’limotga ko‘ra dunyoning asosi necha asosga ega deya ta’rif etilgan?",
    "options": [
      "2",
      "1",
      "3",
      "Cheksiz"
    ],
    "correct": 0
  },
  {
    "q": "O‘z-o‘zini to‘liq belgilovchi borliqni xizmat qiladigan tushuncha?",
    "options": [
      "Substansiya",
      "Materiya",
      "Reallik",
      "Dalil"
    ],
    "correct": 0
  },
  {
    "q": "Lotinchada “nisbiy” degan ma’noni bildiruvchi yo‘nalish nomini ko‘rsating?",
    "options": [
      "Relyatsion",
      "Materialistik",
      "Substansional",
      "To‘g‘ri javob yo‘q"
    ],
    "correct": 0
  },
  {
    "q": "O‘rta asrlar falsafasida nima makon va vaqtdan tashqarida deb yuritiladi?",
    "options": [
      "Xudo",
      "Dunyo",
      "Tabiat",
      "Inkor"
    ],
    "correct": 0
  },
  {
    "q": "Subyektiv idealizm vakillari to‘g‘ri ko‘rsatilgan qatorni toping?",
    "options": [
      "Berkli, Yum, Max",
      "Kant, Yum",
      "Gegel, Leybnis, Yum",
      "To‘g‘ri javob yo‘q"
    ],
    "correct": 0
  },
  {
    "q": "Leybnis yashagan yillarni ko‘rsating?",
    "options": [
      "1646–1716 yillar",
      "1711–1776 yillar",
      "1724–1804 yillar",
      "1725–1801 yillar"
    ],
    "correct": 0
  },
  {
    "q": "Makon va vaqt konsepsiyalarining tarixda shakllangan ikki muhim va bir-biridan farq qiladigan yo‘nalishlari qaysilar?",
    "options": [
      "Substansional va relyatsion",
      "Relyatsion va irratsional",
      "Chekli va cheksiz",
      "Chiziqli va nochiziqli"
    ],
    "correct": 0
  },
  {
    "q": "Subyektiv idealizm vakillari makon va vaqtga qay tarzda yondashadi?",
    "options": [
      "Individual ong sifatida",
      "Moddiy narsalar",
      "Obyektiv makon sifatida",
      "Barcha javoblar to‘g‘ri"
    ],
    "correct": 0
  },
  {
    "q": "«Falsafa» atamasini birinchi bo‘lib qaysi faylasuf o‘z asarida qo‘llagan?",
    "options": [
      "Pifagor",
      "Aristotel",
      "Suqrot",
      "Platon"
    ],
    "correct": 0
  },
  {
    "q": "Arxeolog olimlarning fikriga ko‘ra tik oyoqda yuruvchi “homo sapiens” odam taxminan necha million yil oldin vujudga kelgan?",
    "options": [
      "5 mln avval",
      "3,5 mln avval",
      "1,5 mln avval",
      "2 mln yil avval"
    ],
    "correct": 3
  },
  {
    "q": "Dunyoqarashning qanday funksiyalari mavjud?",
    "options": [
      "3 ta javob ham to‘g‘ri",
      "Qadriyatlarga munosabati",
      "Bilish funksiyasi",
      "Xulq-atvorni belgilash"
    ],
    "correct": 0
  },
  {
    "q": "Dunyoqarashning tuzilishi qanday?",
    "options": [
      "3 ta javob ham to‘g‘ri",
      "Dunyoni idrok etish",
      "Dunyoni tushunish",
      "Dunyoni sezish"
    ],
    "correct": 0
  },
  {
    "q": "Dunyoni sezish bu?",
    "options": [
      "Bu o‘zini qurshagan dunyoni sezgilar yordamida hissiy idrok etish",
      "Faqat obyektlarni anglash",
      "Inson o‘zini tushunish",
      "Aql yordamida tushunish"
    ],
    "correct": 0
  },
  {
    "q": "Insonga xos xususiyatni aniqlang?",
    "options": [
      "Barcha javoblar noto‘g‘ri",
      "Dunyoni idrok etish",
      "Dunyoni tushunish",
      "Dunyoni sezish"
    ],
    "correct": 0
  },
  {
    "q": "Tarixan dunyoqarashning shakllari bu?",
    "options": [
      "Mif, din, falsafa, fan",
      "Mif, fan, ov",
      "Din, san’at, mehnat",
      "Fan, falsafa, ov"
    ],
    "correct": 0
  },
  {
    "q": "Mif atamasi qanday ma’nolarni anglatadi?",
    "options": [
      "Rivoyat, afsona",
      "San’at, voqea",
      "O‘yin, san’at",
      "Afsona, urush"
    ],
    "correct": 0
  },
  {
    "q": "Miflar nimalar orqali ifodalanadi?",
    "options": [
      "Rivoyat, ertaklar",
      "Ertaklar, qo‘shiqlar",
      "Mehnat, ov",
      "Qo‘shiq, kuy"
    ],
    "correct": 0
  },
  {
    "q": "Fetishizm bu?",
    "options": [
      "U yoki bu predmetni odamlar hayotida ta’sir ko‘rsatadi deb sig‘inish",
      "Odamlarga sig‘inish",
      "Ruhlar va tabiat kuchlariga sig‘inish",
      "Bulutlarga sig‘inish"
    ],
    "correct": 0
  },
  {
    "q": "Magiya bu?",
    "options": [
      "Ruhlar va ins-jinslarga sig‘inish",
      "Hayvonlarga sig‘inish",
      "Odamlarga sig‘inish",
      "Yomg‘irga sig‘inish"
    ],
    "correct": 0
  },
  {
    "q": "Monoteizm bu?",
    "options": [
      "Yakka xudolik",
      "Ko‘p xudolik",
      "Xudosizlik",
      "Ruhlarga sig‘inish"
    ],
    "correct": 0
  },
  {
    "q": "Dunyoqarashning qaysi shakllari e’tiqod va tuyg‘ularga tayangan?",
    "options": [
      "Mifologik va diniy dunyoqarash",
      "Falsafiy dunyoqarash",
      "Ilmiy dunyoqarash",
      "Kundalik dunyoqarash"
    ],
    "correct": 0
  },
  {
    "q": "Falsafiy dunyoqarash dunyoni nimalarga tayangan holda tushuntiradi?",
    "options": [
      "Aql va bilimlarda",
      "Tuyg‘ularda",
      "E’tiqodda",
      "Sezgilarda"
    ],
    "correct": 0
  },
  {
    "q": "Falsafada nima birinchi o‘rinda turadi?",
    "options": [
      "Savol, masala",
      "Obraz",
      "Aniq javob",
      "Dalillar"
    ],
    "correct": 0
  },
  {
    "q": "Falsafaning predmeti bu?",
    "options": [
      "Olamning yaxlit birligi",
      "Borliq",
      "Inson",
      "Fan"
    ],
    "correct": 0
  },
  {
    "q": "Kosmotsentrizmning asosiy xususiyati nimadan iborat?",
    "options": [
      "Kosmos va tabiatni anglash",
      "Yerni tadqiq etish",
      "Odamni tadqiq etish",
      "Hayotni anglash"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilardan qaysi biri dialektik bilimlar sohasiga tegishli?",
    "options": [
      "Rivojlanish va o‘zgarishlar haqidagi ta’limot",
      "Axloq haqidagi ta’limot",
      "Hayot haqidagi ta’limot",
      "Qonunlar va usullarni o‘rganuvchi fan"
    ],
    "correct": 0
  },
  {
    "q": "Tafakkur qonunlari va usullari haqidagi fan bu?",
    "options": [
      "Mantiq",
      "Dialektika",
      "Etika",
      "Tarix"
    ],
    "correct": 0
  },
  {
    "q": "Materialistlar deb qaysi toifadagi kishilarni aytish mumkin?",
    "options": [
      "Olamni azaldan moddiy deb, ong bu materiyaning mahsuli deyuvchilar",
      "Ongni birinchi o‘ringa qo‘yuvchilar",
      "Olamning markaziga madaniyatni qo‘yuvchilar",
      "To‘g‘ri javob yo‘q"
    ],
    "correct": 0
  },
  {
    "q": "Mexanistik materializm tarafdorlari kimlar?",
    "options": [
      "Golbax, Lametri",
      "Gegel, Kant",
      "Fixte, Yum",
      "Berkli, Bekon"
    ],
    "correct": 0
  },
  {
    "q": "Antik falsafaning asosiy savoli?",
    "options": [
      "Dunyo nimadan yaratilgan?",
      "Hayot yashashga arziydimi?",
      "Inson nima?",
      "Xudoning borligini qanday asoslash mumkin?"
    ],
    "correct": 0
  },
  {
    "q": "Ekzistensializm tarafdorlarining eng yirik vakillari qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "Kamyu, Sartr",
      "Fixte, Golbax",
      "Baxtin, Sartr",
      "Kant, Gegel"
    ],
    "correct": 0
  },
  {
    "q": "Gnoseologik optimizm ta’limoti qanday qarashni ilgari suradi?",
    "options": [
      "Dunyoni anglash va bilish mumkin",
      "Dunyoni bilib bo‘lmaydi",
      "Dunyoni bilish mumkin, lekin shubha bilan qarash kerak",
      "Hamma javob to‘g‘ri"
    ],
    "correct": 0
  },
  {
    "q": "Agnostitsizm namoyondalarining asosiy g‘oyasi qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "Dunyoni bilib bo‘lmaydi",
      "Dunyoni faqat sezgilar orqali bilish mumkin",
      "Dunyoni to‘liq bilish mumkin",
      "Dunyoni aqliy bilish mumkin"
    ],
    "correct": 0
  },
  {
    "q": "Falsafaning qaysi funksiyasi yetakchi o‘rinni egallaydi?",
    "options": [
      "Dunyoqarash funksiyasi",
      "Gnoseologik funksiyasi",
      "Ontologik funksiyasi",
      "Tarbiyaviy funksiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Qadimgi mutafakkirlar har tomonlama komil insonni qanday atama bilan ifodalagan?",
    "options": [
      "Paydeyya",
      "Animiya",
      "Idealistlar",
      "Sofistlar"
    ],
    "correct": 0
  },
  {
    "q": "“Umumiy nisbiylik nazariyasi” ta’limotining asoschisi kim?",
    "options": [
      "Eynshteyn",
      "I. Nyuton",
      "N. Bor",
      "R. Ernest"
    ],
    "correct": 0
  },
  {
    "q": "Fanning mohiyati bu - ...?",
    "options": [
      "Borliq to‘g‘risidagi obyektiv bilimlarni aniqlash va tizimlashtirish",
      "Borliq to‘g‘risidagi subyektiv bilimlar",
      "Dalillarsiz aniqlash",
      "Hujjatlarni yig‘ish"
    ],
    "correct": 0
  },
  {
    "q": "Klassik mexanikaning qonunlarini qaysi olim ta’riflagan?",
    "options": [
      "I. Nyuton",
      "R. Dekart",
      "A. Eynshteyn",
      "N. Bor"
    ],
    "correct": 0
  },
  {
    "q": "XX asrning 30–40-yillarida fan-texnikaning taraqqiyoti nimaga olib keldi?",
    "options": [
      "Fan inqilobiga",
      "Ma’naviyatning inqirozi",
      "Olamni anglashning qiyinlashuviga",
      "To‘g‘ri javob yo‘q"
    ],
    "correct": 0
  },
  {
    "q": "Mantiq qanday fan?",
    "options": [
      "To‘g‘ri fikrlash shakllari va usullari haqidagi fan",
      "Matematik nazariyalar to‘plami",
      "Til tahlili bilan shug‘ullanuvchi fan",
      "San’at asarlarini tadqiq qiluvchi soha"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqda fikrlarning mazmuniga qaraganda nima muhimroq?",
    "options": [
      "Fikrlarning shakli",
      "Fikrlarning hissiy jihati",
      "Fikrlarning subyektivligi",
      "Fikrlarning individual xususiyatlari"
    ],
    "correct": 0
  },
  {
    "q": "Aristotel qaysi mantiq tizimining asoschisi hisoblanadi?",
    "options": [
      "An’anaviy mantiq",
      "Matematik mantiq",
      "Modal mantiq",
      "Formal semantika"
    ],
    "correct": 0
  },
  {
    "q": "Zamonaviy matematik mantiqning tamal toshini qaysi olim qo‘ygan?",
    "options": [
      "G. Frege",
      "I. Kant",
      "A. Platon",
      "J. Lokk"
    ],
    "correct": 0
  },
  {
    "q": "Dialektik mantiqning predmeti nima?",
    "options": [
      "Tafakkur jarayoni",
      "Tabiatdagi qonuniyatlar",
      "Matematik formulalar",
      "Ritorik munosabatlar"
    ],
    "correct": 0
  },
  {
    "q": "Mantiqning asosiy shakllaridan biri nima?",
    "options": [
      "Hukmlar",
      "Tasavvurlar",
      "Emosiyalar",
      "O‘yinlar"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq nimani o‘rganadi?",
    "options": [
      "Fikrlating shakllarini va ulardagi belgilarning tartibini",
      "Fikrlating mazmunini va hissiyotlarini",
      "Tilning sintaktik tahlilini",
      "Muloqot usullarini"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqning rivojlanish bosqichlari qaysilar?",
    "options": [
      "An’anaviy va matematik",
      "Dialektik va intuitiv",
      "Formal va noformal",
      "Semantik va sintaktik"
    ],
    "correct": 0
  },
  {
    "q": "Mantiq qanday usullar bilan yangi bilimlarni yaratadi?",
    "options": [
      "Tafakkur qonuniyatlari asosida",
      "Tajriba va kuzatuv asosida",
      "Hissiy idrok orqali",
      "Til tahlili yordamida"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq qaysi fan bilan uzviy bog‘liq?",
    "options": [
      "Matematika",
      "Ritorika",
      "Biologiya",
      "San’atshunoslik"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqni boshqa fanlardan ajratib turuvchi asosiy xususiyat nima?",
    "options": [
      "Fikrlating shakli nuqtai nazaridan o‘rganilishi",
      "Fikrlating hissiy mazmuni bilan bog‘liqligi",
      "Tilning semantik tomonini tadqiq qilishi",
      "Kundalik nutqni tahlil qilishi"
    ],
    "correct": 0
  },
  {
    "q": "Dialektik mantiqning asoschisi kim hisoblanadi?",
    "options": [
      "Georg Wilhelm Friedrich Hegel",
      "Aristotel",
      "Gottlob Frege",
      "George Boole"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq qaysi shakldagi tafakkur qonuniyatlarini o‘rganadi?",
    "options": [
      "Rasmiy va matematik",
      "Hissiy va intuitiv",
      "Tabiiy va tasviriy",
      "Dialektik va ratsional"
    ],
    "correct": 0
  },
  {
    "q": "Zamonaviy mantiqda validlik deganda nimani anglatadi?",
    "options": [
      "Xulosaning hukmlardan kelib chiqishi",
      "Hukmlarning hissiy asoslanishi",
      "Fikrlating bevosita kuzatuv natijasida hosil bo‘lishi",
      "Xulosaning dalillardan mustaqil bo‘lishi"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq tarixda qanday nom bilan atalgan?",
    "options": [
      "Timsoliy mantiq",
      "Dialektik mantiq",
      "Eksperimental mantiq",
      "Noformal mantiq"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqda “P&Q” degan ibora nimani anglatadi?",
    "options": [
      "Har qanday P va Q hukmlarining bog‘lanishi",
      "Fikrlating qarama-qarshiligini",
      "Hukmlarning dalilsizligi",
      "Hissiy bog‘lanishni"
    ],
    "correct": 0
  },
  {
    "q": "Dialektik mantiqni an’anaviy mantiqdan farqlovchi asosiy tamoyil nima?",
    "options": [
      "Harakat va o‘zgarish mantig‘iga asoslanishi",
      "Fikrlating shakliga e’tibor berishi",
      "Fikrlating hissiy tomondan tahlil qilishi",
      "Tilda mulohazalarni mustahkamlashi"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqda xulosa chiqarishning asosiy tamoyili nima?",
    "options": [
      "Hukmlarni bog‘lash orqali yangi bilim hosil qilish",
      "Kuzatuvlarni qayta ishlash",
      "Mazmunni tahlil qilish orqali qaror qabul qilish",
      "Intuitiv qarashlardan foydalanish"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqda P va Q belgilari nimani ifodalaydi?",
    "options": [
      "Har qanday hukmlarni",
      "Sezgilarni va hissiyotlarni",
      "Dialektik tahlil elementlarini",
      "Ritorik munosabatlarni"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqning rivojlanishiga qaysi olim katta hissa qo‘shgan?",
    "options": [
      "Gottfried Wilhelm Leibniz",
      "Suqrot",
      "Immanuel Kant",
      "Rene Descartes"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqda “a=a” degan ifoda nimani bildiradi?",
    "options": [
      "Ayniyat qonunini",
      "Ziddiyat qonunini",
      "Uchinchi istisno qonunini",
      "Dalillash usulini"
    ],
    "correct": 0
  },
  {
    "q": "Ziddiyat qonuni qaysi fikrlarni inkor etadi?",
    "options": [
      "Qarama-qarshi hukmlar bir vaqtda to‘g‘ri bo‘lishini",
      "Mazmun va shakl birligini",
      "Dialektik tahlilning natijalarini",
      "Hukmlarning bir-biridan mustaqil bo‘lishini"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq qaysi tildan foydalanadi?",
    "options": [
      "Rasmiylashtirilgan til",
      "Tabiiy til",
      "Ritorik til",
      "Tasviriy til"
    ],
    "correct": 0
  },
  {
    "q": "Dialektik mantiq nima bilan shug‘ullanadi?",
    "options": [
      "Tafakkurning o‘zgarish va rivojlanish qonuniyatlarini o‘rganish",
      "Fikrlating bevosita kuzatuv natijasida hosil bo‘lishini tahlil qilish",
      "Tabiatdagi hodisalarni tasvirlash",
      "Matematik mantiq elementlarini qo‘llash"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq tarixida birinchi tizimli taqdimot kim tomonidan amalga oshirilgan?",
    "options": [
      "Aristotel",
      "Rene Descartes",
      "Immanuel Kant",
      "Georg Wilhelm Friedrich Hegel"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiqning asosiy qonunlaridan biri qaysi?",
    "options": [
      "Yetarli asos qonuni",
      "Qarama-qarshilik qonuni",
      "Hukmlarning dalillash usuli",
      "Xulosalarning mazmuni"
    ],
    "correct": 1
  },
  {
    "q": "Formal mantiqda xatolar qaysi ikki turga bo‘linadi?",
    "options": [
      "Paralogizm va sofizm",
      "Intuitsiya va emotsiya",
      "Tasviriy va rasmiy",
      "Kuzatuv va tajriba"
    ],
    "correct": 0
  },
  {
    "q": "Mantiqda “to‘g‘ri fikr” deganda nimani anglatiladi?",
    "options": [
      "Haqiqatga mos keluvchi fikrni",
      "Dalilsiz shakllangan fikrni",
      "Hissiy taassurotlarga asoslangan fikrni",
      "Xatolarni o‘z ichiga olgan fikrni"
    ],
    "correct": 0
  },
  {
    "q": "Formal mantiq qaysi uslubiy vositalarni o‘rganadi?",
    "options": [
      "Tafakkur shakllarini va ulardagi belgilarning o‘zaro bog‘lanishini",
      "His-tuyg‘ularni va ularning tasviriy ifodalarini",
      "Til va nutqning grammatik qoidalarini",
      "Ritorikaning samaradorligini"
    ],
    "correct": 0
  },
  {
    "q": "Mantiqda “fikr” deganda nimani tushunamiz?",
    "options": [
      "Bilish jarayonining natijasisi sifatida hukmlar yoki tushunchalar",
      "Faqat hissiy idrok natijasida hosil bo‘lgan ma’lumotlar",
      "Tabiiy til orqali ifodalangan hislar",
      "Mazmuni dalillarsiz tasvirlangan ma’lumotlar"
    ],
    "correct": 0
  },
  {
    "q": "Tafakkur jarayonining asosiy belgisi nima?",
    "options": [
      "Umumlashgan obrazlarda voqelikni aks ettirishi",
      "His-tuyg‘ularni ifodalashi",
      "Bevosita kuzatuv orqali shakllanishi",
      "Tilda tasviriy ifodalanishi"
    ],
    "correct": 0
  },
  {
    "q": "Mantiqiy tahlilda qanday til turlari qo‘llaniladi?",
    "options": [
      "Formal va rasmiylashtirilgan tillar",
      "Tabiiy va hissiy tillar",
      "Ritorik va tasviriy tillar",
      "Matematik va amaliy tillar"
    ],
    "correct": 0
  },
  {
    "q": "Dialektik mantiq qaysi kategoriyalar bilan ishlaydi?",
    "options": [
      "Umumiy va universal qonuniyatlar bilan",
      "Dalillash va tasvirlash usullari bilan",
      "Intuitsiya va emotsiyalar bilan",
      "Kuzatuv va tajribalar bilan"
    ],
    "correct": 0
  }

 
    ]),
  },

//       /////////////////////////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////////////////
//  topic5: {
//     title: "Falsafa 5-Bo'lim",
//     questions: randomizeQuestions([

 
//     ]),
//   },
// /////////////////////////////////////////////////////
//       // //////////////////////////////////////////////////////////////////////////////////
//  topic6: {
//     title: "Falsafa 6-Bo'lim",
//     questions: randomizeQuestions([

 
//     ]),
//   },



      ///////////////////////////////////////////////////////////////////////////////
  // ========================================================================
};
