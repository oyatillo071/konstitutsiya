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


//////////////////////////////////////////////////////////////////////////////////
 topic1: {
    title: "Falsafa 5-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Qiyosiy konstitutsiyaviy huquq iborasi qaysi atamalardan iborat?",
    "options": [
      "Qiyosiy, konstitutsiyaviy va huquq",
      "Qiyosiy, konstitutsiyaviy va huquqlar",
      "Qiyosiy, huquqiy va konstitutsiyaviy",
      "Qiyosiy, konstitutsiyaviy va norma"
    ],
    "correct": 0
  },
  {
    "q": "Dekret atamasi birinchi bor qayerda paydo bo'lgan?",
    "options": [
      "Qadimgi Rimda",
      "Qadimgi Rimliklarda",
      "Qadimgi Yunonistonda",
      "Qadimgi Vizantiyada"
    ],
    "correct": 0
  },
  {
    "q": "XVIII–XIX asrlarda yashagan, 4 jildli “Ingliz qonunlariga sharhlar” asarini yozgan huquqshunos olim kim?",
    "options": [
      "Uilyam Blekston",
      "Uilyam Blekstoun",
      "Monteske",
      "J. Bentam"
    ],
    "correct": 0
  },
  {
    "q": "Dastlabki yozma Konstitutsiya qaysi davlatda qabul qilingan?",
    "options": [
      "AQShda (1787-yil)",
      "AQShda (1789-yil)",
      "Fransiyada (1791-yil)",
      "Shveysariyada (1848-yil)"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi huquq maktabi vakillari Konstitutsiyani xalqning umumiy irodasini ifodalovchi ijtimoiy shartnoma deb hisoblaydilar?",
    "options": [
      "Tabiiy huquq maktabi",
      "Tabiiy huquqlar maktabi",
      "Pozitiv huquq maktabi",
      "Normativ huquq maktabi"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq fani qachon falsafa va sotsiologiyadan ajralib chiqdi?",
    "options": [
      "XIX asr oxirida",
      "XIX asr boshida",
      "XX asr boshida",
      "XVIII asr oxirida"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq atamasi qanday uchta ma'noga ega?",
    "options": [
      "Huquq tarmog‘i, fan, o‘quv fani",
      "Huquq tarmog‘i, siyosat, fan",
      "Huquq tarmog‘i, fan, falsafa",
      "Huquq tarmog‘i, o‘quv fani, siyosat"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilardan qaysi biri konstitutsiyaviy huquq metodlaridan biri hisoblanmaydi?",
    "options": [
      "Iqtisodiy rag‘batlantirish",
      "Huquqiy tartibga solish",
      "Ma’muriy ta’sir",
      "Normativ tartibga solish"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq tizimi qanday elementlardan iborat?",
    "options": [
      "Normalar, institutlar, munosabatlar",
      "Normalar, institutlar, tamoyillar",
      "Normalar, tamoyillar, munosabatlar",
      "Institutlar, tamoyillar, munosabatlar"
    ],
    "correct": 0
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda umumiydan xususiyga o‘tish metodologiyasi qanday nomlanadi?",
    "options": [
      "Deduktiv metod",
      "Induktiv metod",
      "Analitik metod",
      "Sintetik metod"
    ],
    "correct": 0
  },
  {
    "q": "Qiyosiy metodda taqqoslashning qanday usullari mavjud?",
    "options": [
      "Makroqiyosiy va mikroqiyosiy",
      "Makroqiyosiy va analitik",
      "Mikroqiyosiy va sintetik",
      "Analitik va sintetik"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquqning manbalari qanday ikki ma’noda talqin qilinadi?",
    "options": [
      "Moddiy va rasmiy",
      "Moddiy va huquqiy",
      "Rasmiy va normativ",
      "Huquqiy va normativ"
    ],
    "correct": 0
  },
  {
    "q": "Qonunlar qanday turlarga bo‘linadi?",
    "options": [
      "Konstitutsiyaviy, organik, oddiy",
      "Konstitutsiyaviy, oddiy, maxsus",
      "Organik, oddiy, maxsus",
      "Konstitutsiyaviy, organik, maxsus"
    ],
    "correct": 0
  },
  {
    "q": "Italiya va Ispaniyada hukumat tomonidan qabul qilinadigan vaqtinchalik hujjat nima deb ataladi?",
    "options": [
      "Dekret-qonun",
      "Dekret-hujjat",
      "Dekret-farmoyish",
      "Dekret-buyruq"
    ],
    "correct": 0
  },
  {
    "q": "Sud pretsedenti qaysi davlatlarda huquq manbayi sifatida qo‘llanadi?",
    "options": [
      "Buyuk Britaniya, AQSh, Kanada",
      "Buyuk Britaniya, AQSh, Fransiya",
      "AQSh, Kanada, Germaniya",
      "Buyuk Britaniya, Germaniya, Avstriya"
    ],
    "correct": 0
  },
  {
    "q": "Og‘zaki xarakterga ega bo‘lgan manba qanday nomlanadi?",
    "options": [
      "Konstitutsiyaviy odat",
      "Konstitutsiyaviy kelishuv",
      "Konstitutsiyaviy norma",
      "Konstitutsiyaviy tamoyil"
    ],
    "correct": 0
  },
  {
    "q": "Arastu o‘zining iqtisodiy-siyosiy doktrinasini qaysi asarida yozib qoldirgan?",
    "options": [
      "Siyosat",
      "Etika",
      "Ritorika",
      "Metafizika"
    ],
    "correct": 0
  },
  {
    "q": "Shariat manbalari nimalardan iborat?",
    "options": [
      "Qur’on, Sunna, Ijmo, Qiyos",
      "Qur’on, Sunna, Fiqh, Qiyos",
      "Qur’on, Hadis, Ijmo, Qiyos",
      "Qur’on, Sunna, Ijmo, Fiqh"
    ],
    "correct": 0
  },
  {
    "q": "Shariatda rag‘batlantirilmaydigan ixtiyoriy xatti-harakatlar qanday nomlanadi?",
    "options": [
      "Makruh",
      "Mubah",
      "Mustahab",
      "Harom"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro huquqda majburiy bo‘lmagan hujjat qanday nomlanadi?",
    "options": [
      "Deklaratsiya",
      "Konvensiya",
      "Shartnoma",
      "Protokol"
    ],
    "correct": 0
  },
  {
    "q": "J. Burdo konstitutsiyani qanday ta’riflagan?",
    "options": [
      "Davlat hokimiyatini tashkil etuvchi qoidalar majmuasi",
      "Davlat hokimiyatini belgilovchi qoidalar majmuasi",
      "Davlat hokimiyatini tartibga soluvchi qoidalar majmuasi",
      "Davlat hokimiyatini boshqaruvchi qoidalar majmuasi"
    ],
    "correct": 0
  },
  {
    "q": "Oliy yuridik kuchga ega bo‘lgan hujjat qanday ataladi?",
    "options": [
      "Qattiq konstitutsiya",
      "Moslashuvchan konstitutsiya",
      "Yumshoq konstitutsiya",
      "Oddiy konstitutsiya"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi mamlakatda konstitutsiya faqat moddiy ma'noda mavjud, chunki oliy yuridik kuchga ega yagona huquqiy hujjat mavjud emas?",
    "options": [
      "Buyuk Britaniya",
      "Buyuk Britaniya davlati",
      "Isroil",
      "Yangi Zelandiya"
    ],
    "correct": 0
  },
  {
    "q": "Zamonaviy konstitutsiyaviy modellarning birinchi bosqichida qabul qilingan konstitutsiyalarning xususiyati nima edi?",
    "options": [
      "Liberal-burjua xususiyatiga ega",
      "Demokratik-burjua xususiyatiga ega",
      "Sotsialistik-burjua xususiyatiga ega",
      "Etatistik-burjua xususiyatiga ega"
    ],
    "correct": 0
  },
  {
    "q": "Ikkinchi bosqichda (1918–1945-yillar) 1920-yilda qaysi davlatlar konstitutsiyalari qabul qilingan?",
    "options": [
      "Avstriya va Chexoslovakiya",
      "Avstriya va Germaniya",
      "Chexoslovakiya va Vengriya",
      "Avstriya va Shveytsariya"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi kunda dunyoda qancha Konstitutsiya mavjud?",
    "options": [
      "500 dan ortiq",
      "400 dan ortiq",
      "300 dan ortiq",
      "600 dan ortiq"
    ],
    "correct": 0
  },
  {
    "q": "Liberal konstitutsiyaviy model qanday tavsiflanadi?",
    "options": [
      "Shaxs erkinligi va mulk huquqini ustuvor qiladi",
      "Shaxs erkinligi va davlat aralashuvini kuchaytiradi",
      "Mulk huquqini va davlat aralashuvini ustuvor qiladi",
      "Shaxs erkinligi va iqtisodiy huquqni ustuvor qiladi"
    ],
    "correct": 0
  },
  {
    "q": "Etatistik konstitutsiyaviy model asosan qaysi mamlakatlarda saqlanib qolgan?",
    "options": [
      "Xitoy, Kuba, KXDR",
      "Xitoy, Yaponiya, KXDR",
      "Kuba, Germaniya, KXDR",
      "Xitoy, Kuba, Vengriya"
    ],
    "correct": 0
  },
  {
    "q": "Boshqaruvning prezidentlik shaklini yaratishning ilk bosqichi qaysi Konstitutsiyada amalga oshirildi?",
    "options": [
      "1787-yilgi AQSh Konstitutsiyasi",
      "1791-yilgi Fransiya Konstitutsiyasi",
      "1848-yilgi Shveytsariya Konstitutsiyasi",
      "1920-yilgi Avstriya Konstitutsiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Yozilmagan shakldagi konstitutsiyalarga qaysi davlatlar konstitutsiyalari kiradi?",
    "options": [
      "Buyuk Britaniya, Isroil, Yangi Zelandiya",
      "Buyuk Britaniya, Kanada, Yangi Zelandiya",
      "Isroil, Avstraliya, Yangi Zelandiya",
      "Buyuk Britaniya, Isroil, Avstraliya"
    ],
    "correct": 0
  },
  {
    "q": "O'zgartirish kiritish tartibi murakkab bo'lgan konstitutsiya nima deb ataladi?",
    "options": [
      "Qattiq konstitutsiya",
      "Yumshoq konstitutsiya",
      "Moslashuvchan konstitutsiya",
      "Oddiy konstitutsiya"
    ],
    "correct": 0
  },
  {
    "q": "AQSh Konstitutsiyasiga ikki yuz yildan ortiq amal qilishi mobaynida nechta tuzatish kiritilgan?",
    "options": [
      "27 ta",
      "26 ta",
      "28 ta",
      "25 ta"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaning qaysi qismida maqsadlar bayon qilinadi?",
    "options": [
      "Muqaddima (preambula)",
      "Asosiy qism",
      "Xulosa qismi",
      "Qo‘shimcha qism"
    ],
    "correct": 0
  },
  {
    "q": "Ispaniya Konstitutsiyasining asosiy qismida avval boshida kim to'g'risidagi normalar berilgan?",
    "options": [
      "Shaxs va fuqarolar huquqlari",
      "Davlat hokimiyati tuzilishi",
      "Sud hokimiyati normalari",
      "Mahalliy hokimiyat normalari"
    ],
    "correct": 0
  },
  {
    "q": "Referendum yo'li bilan bevosita xalq tomonidan konstitutsiya qabul qilinadigan davlatlar qatorini toping?",
    "options": [
      "Fransiya, Italiya, Irlandiya, O'zbekiston",
      "Fransiya, Italiya, Germaniya, O'zbekiston",
      "Fransiya, Irlandiya, Kanada, O'zbekiston",
      "Italiya, Irlandiya, Shveytsariya, O'zbekiston"
    ],
    "correct": 0
  },
  {
    "q": "Mutlaq monarxiya sharoitida podsho tomonidan hadya qilingan konstitutsiyalarga qaysilar misol bo'la oladi?",
    "options": [
      "Yaponiya (1889), Prussiya, Avstriya",
      "Yaponiya (1889), Germaniya, Avstriya",
      "Prussiya, Avstriya, Vengriya",
      "Yaponiya (1889), Prussiya, Vengriya"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning birinchi konstitutsiyasi loyihasini tayyorlash uchun 1990-yilda tuzilgan komissiyaga kim rahbarlik qilgan?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulaziz Kamilov",
      "Rustam Azimov"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Konstitutsiyasiga 2003-yilda kiritilgan o'zgartirishlarga ko'ra Oliy Majlis qanday ko'rinishga keltirildi?",
    "options": [
      "Ikki palatali — Qonunchilik palatasi va Senat",
      "Bir palatali — Qonunchilik palatasi",
      "Ikki palatali — Senat va Mahalliy kengash",
      "Ikki palatali — Qonunchilik palatasi va Mahalliy kengash"
    ],
    "correct": 0
  },
  {
    "q": "Amaldagi prezident vazifasini bajara olmaydigan hollarda Senat Raisi vakolatni vaqtincha olishi qachon joriy qilingan?",
    "options": [
      "2003-yilgi o'zgartirishlarda",
      "2005-yilgi o'zgartirishlarda",
      "2000-yilgi o'zgartirishlarda",
      "2010-yilgi o'zgartirishlarda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Konstitutsiyasining yangi tahriri nechta bo'lim, bob va moddadan iborat?",
    "options": [
      "6 bo'lim, 26 bob, 155 modda",
      "6 bo'lim, 25 bob, 155 modda",
      "6 bo'lim, 26 bob, 157 modda",
      "6 bo'lim, 27 bob, 155 modda"
    ],
    "correct": 0
  }

    ]),
  },

/////////////////////////////////////////////////////
//  topic2: {
//     title: "Konstitutsiya 2-Bo'lim",
//     questions: randomizeQuestions([

 
//     ]),
//   },


//       // //////////////////////////////////////////////////////////////////////////////////
//       // //////////////////////////////////////////////////////////////////////////////////
//       // //////////////////////////////////////////////////////////////////////////////////
//  topic6: {
//     title: "Falsafa 6-Bo'lim",
//     questions: randomizeQuestions([

 
//     ]),
//   },



      ///////////////////////////////////////////////////////////////////////////////
  // ========================================================================
}

