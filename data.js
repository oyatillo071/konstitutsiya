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
[
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
]
 
    ]),
  },
// //////////////////////////////////////////////////////////////////////////////////
 topic3: {
    title: "Falsafa 3-Bo'lim",
    questions: randomizeQuestions([

 
    ]),
  },

      /////////////////////////////////////////////////////////////////////////////////



      ///////////////////////////////////////////////////////////////////////////////
  // ========================================================================
};
