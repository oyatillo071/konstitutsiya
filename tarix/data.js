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


      /////////////////////////////////////////////////////////////////////////////////
topic1: {
    title: "inson huquqi 1-Bo'lim",
    questions: randomizeQuestions(
[
  {
    "q": "Shavkat Mirziyoyev birinchi marotaba O‘zbekiston Prezidentligiga qachon saylandi?",
    "options": [
      "2016-yil dekabr oyida",
      "2017-yil mart oyida",
      "2015-yil noyabr oyida",
      "2018-yil yanvar oyida"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston -2023” strategiyasida aholining o‘rtacha umr davomiyligini necha foizga yetkazish maqsad qilingan?",
    "options": [
      "73 foizga",
      "70 foizga",
      "75 foizga",
      "72 foizga"
    ],
    "correct": 0
  },
  {
    "q": "“XXI asr” ijtimoiy-siyosiy gazetasi qaysi siyosiy partiyaning gazetasi hisoblanadi?",
    "options": [
      "Milliy tiklanish demokratik partiyasi",
      "Adolat sotsial-demokratik partiyasi",
      "O‘zbekiston Liberal-demokratik partiyasi",
      "Xalq demokratik partiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi so‘z asli arabcha “joy”, “o‘rin” ma’nosini anglatadi?",
    "options": [
      "Maqom",
      "Madrasa",
      "Masjid",
      "Maqbara"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston – 2030” strategiyasi nechta ustuvor yo‘nalishlardan iborat?",
    "options": [
      "7 ta yo‘nalish",
      "5 ta yo‘nalish",
      "6 ta yo‘nalish",
      "8 ta yo‘nalish"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidenti qachongi qarori bilan o‘lim jazosi bekor qilindi?",
    "options": [
      "2008-yil 1-yanvar",
      "2007-yil 1-iyul",
      "2006-yil 1-oktabr",
      "2009-yil 1-mart"
    ],
    "correct": 0
  },
  {
    "q": "2017-yil 11–13-may kunlari Prezident Shavkat Mirziyoyevning davlat tashrifi qaysi davlatga amalga oshirildi?",
    "options": [
      "Xitoy",
      "Rossiya",
      "Qozog‘iston",
      "Turkiya"
    ],
    "correct": 0
  },
  {
    "q": "2017 yilga kelib Zulfiya mukofoti sovrindorlari soni nechtaga yetdi?",
    "options": [
      "250 nafar",
      "200 nafar",
      "300 nafar",
      "220 nafar"
    ],
    "correct": 0
  },
  {
    "q": "2017–2018-yillarda Islom Karimov xotiralarini abadiylashtirish bo‘yicha qayerlarda yirik tadbirlar o‘tkazildi?",
    "options": [
      "Samarqand va Toshkent",
      "Buxoro va Xiva",
      "Andijon va Farg‘ona",
      "Navoiy va Qarshi"
    ],
    "correct": 0
  },
  {
    "q": "SSSR davrida O‘zbekistonda nechta madrasa bo‘lgan?",
    "options": [
      "2 ta",
      "3 ta",
      "4 ta",
      "5 ta"
    ],
    "correct": 0
  },
  {
    "q": "2004-yili Toshkent Islom universitetida kim tomonidan Qur’oni Karimning tarjimasida izohli nashri tayyorlandi?",
    "options": [
      "Alouddin Mansur",
      "Muhammad Sodiq Muhammad Yusuf",
      "Shayx Abdulaziz Mansur",
      "Abdulhamid Cho‘lpon"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda aholining necha foizi 30 yoshgacha bo‘lganlarni tashkil etadi?",
    "options": [
      "60 foiz",
      "55 foiz",
      "50 foiz",
      "65 foiz"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston “Adolat” sotsial-demokratik partiyasi qachon tashkil etilgan?",
    "options": [
      "1995-yil",
      "1996-yil",
      "1994-yil",
      "1997-yil"
    ],
    "correct": 0
  },
  {
    "q": "AQSHni sinovli damlarda qo‘llab-quvvatlagani uchun “Xalqaro miqyosdagi lider” mukofoti bilan taqdirlangan shaxs kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulaziz Kamilov",
      "Rustam Azimov"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davlat O‘zbekiston Respublikasi mustaqilligini 1991-yil 27-dekabrda tan olgan?",
    "options": [
      "AQSH",
      "Turkiya",
      "Rossiya",
      "Xitoy"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbek ishi” haqida qatag‘onlar mantiqiy davomi sifatida fikr bildirgan adib kim?",
    "options": [
      "Sharof Rashidov",
      "Ozod Sharafiddinov",
      "Cho‘lpon",
      "Abdulla Qodiriy"
    ],
    "correct": 1
  },
  {
    "q": "A.Navoiyga o‘rnatilgan haykal qayerda joylashgan edi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Andijon"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur va temuriylar davri tarixi muzeyi qayerda qurildi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Shahrisabz",
      "Buxoro"
    ],
    "correct": 0
  },
  {
    "q": "BMT qaysi kunni “Xalqaro bag‘rikenglik kuni” deb e’lon qilgan?",
    "options": [
      "16-noyabr",
      "10-dekabr",
      "21-sentabr",
      "1-may"
    ],
    "correct": 0
  },
  {
    "q": "1999-yil YUNESKO qaysi kunni “Xalqaro ona tili kuni” deb e’lon qilgan?",
    "options": [
      "21-fevral",
      "1-mart",
      "15-aprel",
      "10-yanvar"
    ],
    "correct": 0
  }
,
  {
    "q": "1999-yil YUNESKO tashkiloti tomonidan qaysi kun 'Xalqaro ona tili kuni' deb e’lon qilingan?",
    "options": [
      "21-fevral",
      "1-mart",
      "15-aprel",
      "10-yanvar"
    ],
    "correct": 0
  },
  {
    "q": "2017 yilda Toshkentdagi 'Bobur' bog‘iga qanday nom berildi?",
    "options": [
      "Istiqbol bog‘i",
      "Do‘stlik bog‘i",
      "Yoshlar bog‘i",
      "Millatlar bog‘i"
    ],
    "correct": 2
  },
  {
    "q": "2007-yilda qaysi shaharimizga AYSESKO tomonidan 'Islom madaniyati poytaxti' maqomi berildi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Xiva"
    ],
    "correct": 1
  },
  {
    "q": "BMT homiyligidagi ta’lim, fan va madaniyat bilan shug‘ullanuvchi xalqaro tashkilot bu?",
    "options": [
      "YUNESKO",
      "VOZ",
      "FAO",
      "XMT"
    ],
    "correct": 0
  },
  {
    "q": "YUNESKO tashkiloti qarorgohi qayerda joylashgan?",
    "options": [
      "Parij",
      "Nyu-York",
      "Jeneva",
      "London"
    ],
    "correct": 0
  },
  {
    "q": "Markaziy Osiyoda yagona bo‘lgan Toshkent Islom Universitetiga qachon asos solindi?",
    "options": [
      "1999-yil",
      "1998-yil",
      "2000-yil",
      "1997-yil"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida 1998-yil kimning 1200 yillik yubileylari nishonlangan?",
    "options": [
      "Imom Buxoriy",
      "Ahmad Yassaviy",
      "Al-Farobiy",
      "Abu Rayhon Beruniy"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Davlat bayrog‘i qachon qabul qilingan?",
    "options": [
      "1991-yil 18-noyabr",
      "1992-yil 1-iyul",
      "1990-yil 10-dekabr",
      "1991-yil 1-sentabr"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston-2030” strategiyasining birinchi ustuvor yo‘nalishi qanday nomlanadi?",
    "options": [
      "Yashil taraqqiyot",
      "Barqaror iqtisodiyot",
      "Innovatsion jamiyat",
      "Ijtimoiy adolat"
    ],
    "correct": 0
  },
  {
    "q": "1997-yildagi qaror bilan har ikki yilda bir marotaba o‘tkaziladigan musiqa festivali bu?",
    "options": [
      "Sharq taronalari",
      "Navro‘z taronalari",
      "Milliy qo‘shiqlar",
      "Yoshlar musiqasi"
    ],
    "correct": 0
  },
  {
    "q": "Samarqand shahrida 'Sharq taronalari' xalqaro musiqa festivali qachondan o‘tkazila boshlandi?",
    "options": [
      "1997-yildan",
      "1995-yildan",
      "1999-yildan",
      "2000-yildan"
    ],
    "correct": 0
  },
  {
    "q": "Imom Buxoriy xalqaro ilmiy-tadqiqot markazi qaysi shaharda tashkil qilingan?",
    "options": [
      "Samarqand",
      "Buxoro",
      "Toshkent",
      "Xiva"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston-2030” strategiyasining ikkinchi ustuvor yo‘nalishi qanday nomlanadi?",
    "options": [
      "Adolatli jamiyat",
      "Innovatsion taraqqiyot",
      "Iqtisodiy barqarorlik",
      "Yoshlar siyosati"
    ],
    "correct": 0
  },
  {
    "q": "Xorazm Ma’mun akademiyasi qachon qayta tiklanib, Fanlar akademiyasining mintaqaviy bo‘linmasi sifatida tashkil etildi?",
    "options": [
      "1997-yil",
      "1998-yil",
      "1999-yil",
      "2000-yil"
    ],
    "correct": 1
  },
  {
    "q": "1992-yil 2-martda O‘zbekiston Respublikasi qaysi tashkilotga a’zo bo‘ldi?",
    "options": [
      "BMT",
      "YUNESKO",
      "XMT",
      "VOZ"
    ],
    "correct": 0
  },
  {
    "q": "SSSRni isloh qilish bo‘yicha o‘tkazilgan '9+1' uchrashuvi 1991-yil aprel oyida qayerda bo‘lib o‘tgan edi?",
    "options": [
      "Novo-Ogarevo",
      "Minsk",
      "Moskva",
      "Kiyev"
    ],
    "correct": 0
  },
  {
    "q": "1991-yil aprel oyida qayerda Ukraina, Rossiya, Belarus, O‘zbekiston, Qozog‘iston rahbarlari uchrashuvi bo‘ldi?",
    "options": [
      "Minsk",
      "Kiyev",
      "Moskva",
      "Alma-Ata"
    ],
    "correct": 1
  },
  {
    "q": "1990-yil 20-iyunda O‘zbekiston Respublikasi Oliy Kengashi qanday hujjatni qabul qildi?",
    "options": [
      "Davlat suvereniteti deklaratsiyasi",
      "Mustaqillik to‘g‘risida qaror",
      "Konstitutsiya loyihasi",
      "Bayroq to‘g‘risida qonun"
    ],
    "correct": 0
  },
  {
    "q": "Berilgan qonunlardan qay biri 12 moddadan iborat?",
    "options": [
      "Davlat suvereniteti deklaratsiyasi",
      "Konstitutsiya",
      "Bayroq to‘g‘risida qonun",
      "Gerb to‘g‘risida qonun"
    ],
    "correct": 0
  },
  {
    "q": "Moskvada fojiali hodisalar (GKChP) qaysi davrda ro‘y bergan?",
    "options": [
      "1991-yil avgust",
      "1990-yil iyun",
      "1991-yil aprel",
      "1992-yil yanvar"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Prezidentining nechanchi yilgi Farmoniga binoan IIV va Davlat xavfsizligi Qo‘mitasi O‘zbekiston tasarrufiga olindi?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1990-yil",
      "1993-yil"
    ],
    "correct": 0
  }
]


    ),
  },


      ///////////////////////////////////////////////////////////////////////////////



        // //////////////////////////////////////////////////////////////////////////////////
 // topic9: {
 //    title: "inson huquqi 4-Bo'lim",
 //    questions: randomizeQuestions([

 
 //    ]),
 //  },

      ///////////////////////////////////////////////////////////////////////////////


      
  
  // ========================================================================
};
