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






  // ========================================================================
};
