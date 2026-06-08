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


  ]),
},


      ///////////////////////////////////////////////////////////////////////////////



        //////////////////////////////////////////////////////////////////////////////////
 topic2: {
    title: "Tarix 2-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "2017-yil o‘tkazilgan 'Markaziy Osiyo: yagona tarix va umumiy kelajak' anjumani qaysi tashkilot homiyligida o‘tkazildi?",
    "options": [
      "YUNESKO",
      "BMT",
      "Yevropa Ittifoqi",
      "OIC"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda Parlamentni ikki palatali bo‘lishiga rozimisiz degan masalada qachon referendum o‘tkazilgan?",
    "options": [
      "2002-yil",
      "2003-yil",
      "2004-yil",
      "2001-yil"
    ],
    "correct": 0
  },
  {
    "q": "Oliy Majlisning quyi palatasi qanday nomlanadi?",
    "options": [
      "Qonunchilik palatasi",
      "Senat",
      "Oliy Kengash",
      "Vakillar palatasi"
    ],
    "correct": 0
  },
  {
    "q": "Senatning necha nafar a'zosi O‘zbekiston Respublikasi Prezidenti tomonidan tayinlanadi?",
    "options": [
      "16 nafar",
      "14 nafar",
      "18 nafar",
      "12 nafar"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda Qonun qaysi paytdan boshlab kuchga kiradi?",
    "options": [
      "E’lon qilingan kundan",
      "Prezident imzolagan kundan",
      "Oliy Majlisda qabul qilingan kundan",
      "Senat tasdiqlagan kundan"
    ],
    "correct": 0
  },
  {
    "q": "1990 yil 24 martda O‘zbekistonda qanday voqea sodir bo‘ldi?",
    "options": [
      "I.Karimov Prezident etib saylandi",
      "Mustaqillik e’lon qilindi",
      "Bayroq qabul qilindi",
      "Konstitutsiya loyihasi ishlab chiqildi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining Bosh Vaziri lavozimi qachon ta’sis etilgan?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1990-yil",
      "1993-yil"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda Vitse-Prezident lavozimi qachon tugatildi?",
    "options": [
      "1992-yil",
      "1991-yil",
      "1993-yil",
      "1990-yil"
    ],
    "correct": 0
  },
  {
    "q": "Vakillik organlariga necha yoshga to‘lgan fuqarolar saylanadi?",
    "options": [
      "21 yosh",
      "18 yosh",
      "25 yosh",
      "20 yosh"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda hokim lavozimi qachon ta’sis etilgan?",
    "options": [
      "1992-yil",
      "1991-yil",
      "1993-yil",
      "1990-yil"
    ],
    "correct": 0
  },
  {
    "q": "Tuman va shahar hokimlar kim tomonidan tayinlanadi va lavozimidan ozod qilinadi?",
    "options": [
      "Prezident",
      "Senat",
      "Qonunchilik palatasi",
      "Mahalliy kengash"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston Respublikasining davlat gerbi to‘g‘risida”gi qonun qachon qabul qilindi?",
    "options": [
      "1992-yil 2-iyul",
      "1991-yil 18-noyabr",
      "1993-yil 1-yanvar",
      "1990-yil 24-mart"
    ],
    "correct": 0
  },
  {
    "q": "Yurtimizda 'Avesto'ning yaratilganining 2700 yilligi qachon nishonlangan?",
    "options": [
      "2001-yil",
      "2000-yil",
      "2002-yil",
      "1999-yil"
    ],
    "correct": 0
  },
  {
    "q": "2000-yil Kamoliddin Behzod tavalludining necha yilligi nishonlangan?",
    "options": [
      "545 yilligi",
      "550 yilligi",
      "600 yilligi",
      "500 yilligi"
    ],
    "correct": 0
  },
  {
    "q": "O‘z Fanlar Akademiyasining Adabiyot institutiga qachon Alisher Navoiy nomi berildi?",
    "options": [
      "1947-yil",
      "1950-yil",
      "1945-yil",
      "1955-yil"
    ],
    "correct": 0
  },
  {
    "q": "Prezident Sh.Mirziyoyevning 5 ta muhim tashabbusidan birinchisi qanday nomlanadi?",
    "options": [
      "Yoshlarni musiqa va san’atga jalb qilish",
      "Sportni rivojlantirish",
      "Kitobxonlikni oshirish",
      "Axborot texnologiyalarini o‘rganish"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston hududida nechta fuqarolik o‘rnatilgan?",
    "options": [
      "Yagona fuqarolik",
      "Ikki fuqarolik",
      "Ko‘p fuqarolik",
      "Hududiy fuqarolik"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston-2030” strategiyasining uchinchi ustuvor yo‘nalishi qanday nomlanadi?",
    "options": [
      "Adolatli ijtimoiy siyosat",
      "Yashil taraqqiyot",
      "Innovatsion jamiyat",
      "Barqaror iqtisodiyot"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda nechanchi yildan boshlab 9-may 'Xotira va qadrlash kuni' sifatida nishonlanib kelmoqda?",
    "options": [
      "1999-yildan",
      "1995-yildan",
      "2000-yildan",
      "1997-yildan"
    ],
    "correct": 0
  },
  {
    "q": "Prezident Sh.Mirziyoyevning 5 ta muhim tashabbusidan ikkinchisi qanday nomlanadi?",
    "options": [
      "Yoshlarni sportga jalb qilish",
      "Kitobxonlikni oshirish",
      "Axborot texnologiyalarini o‘rganish",
      "San’atni rivojlantirish"
    ],
    "correct": 0
  },
  {
    "q": "Prezident Sh.Mirziyoyevning 5 ta muhim tashabbusidan uchinchisi qanday nomlanadi?",
    "options": [
      "Kitobxonlikni oshirish",
      "Yoshlarni sportga jalb qilish",
      "Axborot texnologiyalarini o‘rganish",
      "San’atni rivojlantirish"
    ],
    "correct": 0
  },
  {
    "q": "Prezident Sh.Mirziyoyev ilgari surgan 5 muhim tashabbusning uchinchi tashabbusi qanday nomlanadi?",
    "options": [
      "Aholi o‘rtasida kompyuter texnologiyalarini keng joriy etish",
      "Kitobxonlik madaniyatini oshirish va yoshlarni o‘qishga jalb etish",
      "Sport va jismoniy tarbiya infratuzilmasini kengaytirish",
      "Madaniyat va san’at muassasalarini rivojlantirish"
    ],
    "correct": 1
  },
  {
    "q": "Nechanchi yildan boshlab O‘zbekiston hukumatining qarori bilan 21-mart 'Navro‘z' milliy xalq bayrami sifatida belgilanib, dam olish kuni deb e'lon qilingan?",
    "options": [
      "1989-yil",
      "1991-yil",
      "1992-yil",
      "1994-yil"
    ],
    "correct": 2
  },
  {
    "q": "XX asr 80-yillari qatag‘onlari tarixga qanday nom bilan kirgan?",
    "options": [
      "Paxta ishi",
      "Oq oltin mojarosi",
      "Korrupsiya kampaniyasi",
      "Markaziy nazorat ishi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Prezidentining Ro‘za-Ramazon hayitining birinchi kuni dam olish kuni deb e'lon qilingan farmoni qachon chiqqan?",
    "options": [
      "1990-yil",
      "1991-yil",
      "1992-yil",
      "1993-yil"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Qur'oni Karim necha marta nashr etilgan?",
    "options": [
      "3 marta",
      "5 marta",
      "7 marta",
      "10 marta"
    ],
    "correct": 2
  },
  {
    "q": "Respublika Vazirlar Mahkamasi huzuridagi din ishlari bo‘yicha qo‘mita qachon tuzilgan?",
    "options": [
      "1992-yil",
      "1993-yil",
      "1994-yil",
      "1995-yil"
    ],
    "correct": 0
  },
  {
    "q": "1997-yil qabul qilingan 'Kadrlar tayyorlash to‘g‘risida'gi milliy dasturda O‘zbekistonda ta'lim sohasidagi islohotlarni amalga oshirish necha bosqichda amalga oshirish nazarda tutilgan edi?",
    "options": [
      "2 bosqich",
      "3 bosqich",
      "4 bosqich",
      "5 bosqich"
    ],
    "correct": 1
  },
  {
    "q": "Iqtidorli yoshlarni chet elga o‘qishga yuborish bilan shug‘ullanuvchi 'Umid' jamg‘armasi qachon tashkil etildi?",
    "options": [
      "1996-yil",
      "1997-yil",
      "1998-yil",
      "1999-yil"
    ],
    "correct": 1
  },
  {
    "q": "Prezident Sh.Mirziyoyev ilgari surgan 5 muhim tashabbusning to‘rtinchi tashabbusi qanday nomlanadi?",
    "options": [
      "Sport va jismoniy tarbiya infratuzilmasini kengaytirish",
      "Kitobxonlik madaniyatini oshirish",
      "Madaniyat va san’at muassasalarini rivojlantirish",
      "Yoshlarni kasb-hunarga jalb etish"
    ],
    "correct": 0
  },
  {
    "q": "Prezident Sh.Mirziyoyev ilgari surgan 5 muhim tashabbusning beshinchi tashabbusi qanday nomlanadi?",
    "options": [
      "Yoshlarni kasb-hunarga jalb etish",
      "Sportni rivojlantirish",
      "Kitobxonlikni kengaytirish",
      "Madaniyatni qo‘llab-quvvatlash"
    ],
    "correct": 0
  },
  {
    "q": "“Zamonaviy Oʻzbekistonning tarixi bu mamlakatimizning haqiqiy mustaqillikka erishish yоʻlida Islom Abdugʻanievich Karimov rahnamoligida olib borilgan оʻta murakkab va ogʻir kurashlar tarixidir” fikrlar muallifi kim?",
    "options": [
      "Shavkat Mirziyoyev",
      "Abdulla Aripov",
      "Islom Karimov",
      "Abdulaziz Kamilov"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekistonning davlat ramzlari to‘g‘risida” maxsus qaror qachon qabul qilindi?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1993-yil",
      "1994-yil"
    ],
    "correct": 1
  },
  {
    "q": "Toshkentdagi 'Turkiston' saroyi qachon foydalanishga topshirildi?",
    "options": [
      "1992-yil",
      "1993-yil",
      "1994-yil",
      "1995-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistondagi dastlabki xususiy kinostudiya bu...",
    "options": [
      "Uzbekfilm",
      "Samarqandfilm",
      "Moviefilm",
      "Mustaqilfilm"
    ],
    "correct": 3
  },
  {
    "q": "Prezident farmoniga muvofiq qachon O‘zbekistonda Badiiy akademiya tashkil etildi?",
    "options": [
      "1996-yil",
      "1997-yil",
      "1998-yil",
      "1999-yil"
    ],
    "correct": 1
  },
  {
    "q": "1997-yil 11-martda nima sodir bo‘lgan?",
    "options": [
      "Kadrlar tayyorlash milliy dasturi qabul qilindi",
      "Din ishlari qo‘mitasi tuzildi",
      "Badiiy akademiya tashkil etildi",
      "Umid jamg‘armasi tashkil etildi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda aholining muzeyshunoslik madaniyatini shakllantirish maqsadida 1999-yilda qanday jurnal ta'sis etilgan?",
    "options": [
      "Madaniyat va meros",
      "O‘zbekiston muzeylari",
      "Meros",
      "Tarix va madaniyat"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Liberal Demokratik partiyasi (O‘zLiDeP) qachon tashkil topgan?",
    "options": [
      "2002-yil",
      "2003-yil",
      "2004-yil",
      "2005-yil"
    ],
    "correct": 2
  },
  {
    "q": "Qayerda Sharof Rashidov xotiralarini abadiylashtirish bo‘yicha yirik tadbirlar o‘tkazildi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Jizzax",
      "Buxoro"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining Birinchi prezidenti I.Karimov tomonidan ishlab chiqilgan 'O‘zbek modeli' necha tamoyildan iborat?",
    "options": [
      "3 tamoyil",
      "4 tamoyil",
      "5 tamoyil",
      "6 tamoyil"
    ],
    "correct": 2
  },
  {
    "q": "Qaysi yildan boshlab har yili 1-oktabr 'O‘qituvchilar va murabbiylar kuni' sifatida nishonlanib kelinmoqda?",
    "options": [
      "1996-yil",
      "1997-yil",
      "1998-yil",
      "1999-yil"
    ],
    "correct": 0
  }

 
    ]),
  },
 
 //////////////////
 topic3: {
    title: "Tarix 3-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "SSSR tarkibiga nechta ittifoqdosh respublika kirgan?",
    "options": [
      "12 ta",
      "14 ta",
      "15 ta",
      "16 ta"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi parlamenti necha palatadan iborat?",
    "options": [
      "Bir palata",
      "Ikki palata",
      "Uch palata",
      "To‘rt palata"
    ],
    "correct": 1
  },
  {
    "q": "Sovet Ittifoqida davlat to‘ntarishi sodir bo‘lgan sanalarni ko‘rsating?",
    "options": [
      "1990-yil 25-avgust",
      "1991-yil 19-avgust",
      "1991-yil 1-sentabr",
      "1992-yil 15-yanvar"
    ],
    "correct": 1
  },
  {
    "q": "Orol fojeasi qanday muammo hisoblanadi?",
    "options": [
      "Ekologik muammo",
      "Iqtisodiy muammo",
      "Siyosiy muammo",
      "Ijtimoiy muammo"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi asosiy qonuni bo‘lmish Konstitutsiya nechanchi chaqiriq va qaysi sessiyasida qabul qilingan?",
    "options": [
      "12-chaqiriq, 11-sessiya",
      "12-chaqiriq, 12-sessiya",
      "13-chaqiriq, 11-sessiya",
      "13-chaqiriq, 12-sessiya"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda Qurolli kuchlarining Oliy bosh qo‘mondoni kim hisoblanadi?",
    "options": [
      "Mudofaa vaziri",
      "Prezident",
      "Bosh vazir",
      "Senat raisi"
    ],
    "correct": 1
  },
  {
    "q": "Sobiq sovet respublikasi (SSSR) necha yil yashadi?",
    "options": [
      "65 yil",
      "69 yil",
      "71 yil",
      "73 yil"
    ],
    "correct": 2
  },
  {
    "q": "Vijdon erkinligi nima?",
    "options": [
      "Shaxsning diniy e’tiqodini tanlash huquqi",
      "Shaxsning siyosiy qarashlarini bildirish huquqi",
      "Shaxsning iqtisodiy faoliyatini tanlash huquqi",
      "Shaxsning madaniy merosdan foydalanish huquqi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda 1991-yil 6-sentyabrda tuzilgan vazirlikni toping?",
    "options": [
      "Mudofaa vazirligi",
      "Ichki ishlar vazirligi",
      "Tashqi ishlar vazirligi",
      "Adliya vazirligi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasida hokimiyat nechchi qismga bo‘linadi?",
    "options": [
      "Ikki qism",
      "Uch qism",
      "To‘rt qism",
      "Besh qism"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda tuzilgan birinchi siyosiy partiya qaysi?",
    "options": [
      "O‘zbekiston Xalq demokratik partiyasi",
      "O‘zLiDeP",
      "Milliy tiklanish",
      "Adolat"
    ],
    "correct": 0
  },
  {
    "q": "Parlament nima?",
    "options": [
      "Ijro hokimiyati organi",
      "Qonun chiqaruvchi organ",
      "Sud hokimiyati organi",
      "Mahalliy hokimiyat organi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasida oliy ta’limni rivojlantirish konsepsiyasi nechanchi yilgacha bo‘lgan davrni o‘z ichiga oladi?",
    "options": [
      "2025-yilgacha",
      "2030-yilgacha",
      "2035-yilgacha",
      "2040-yilgacha"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston ekologik harakati qachon tashkil topgan?",
    "options": [
      "2007-yil",
      "2008-yil",
      "2009-yil",
      "2010-yil"
    ],
    "correct": 1
  },
  {
    "q": "Hozirgi kunda nechta siyosiy partiya faoliyat yuritmoqda?",
    "options": [
      "3 ta",
      "4 ta",
      "5 ta",
      "6 ta"
    ],
    "correct": 2
  },
  {
    "q": "1991-yil avgustda SSSRda kim boshchiligida Favqulodda Holat Davlat Qo‘mitasi (GKCHP) tuziladi?",
    "options": [
      "M.Gorbachyov",
      "G.Yanayev",
      "B.Yeltsin",
      "A.Yakovlev"
    ],
    "correct": 1
  },
  {
    "q": "1991-yil 19-avgustda Favqulodda Holat Davlat Qo‘mitasi (GKCHP) kim tomonidan tuziladi?",
    "options": [
      "M.Gorbachyov",
      "G.Yanayev",
      "B.Yeltsin",
      "A.Yakovlev"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston havo yo‘llari nechta mamlakatga parvozlarni amalga oshiradi?",
    "options": [
      "25 ta",
      "30 ta",
      "35 ta",
      "40 ta"
    ],
    "correct": 2
  },
  {
    "q": "Toshkent xalqaro aeroportiga qachon I.Karimov nomi berildi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston-2030” strategiyasining to‘rtinchi ustuvor yo‘nalishi qanday nomlanadi?",
    "options": [
      "Yashil taraqqiyot",
      "Adolatli jamiyat",
      "Innovatsion iqtisodiyot",
      "Kuchli fuqarolik jamiyati"
    ],
    "correct": 0
  }
,
  {
    "q": "Qaysi ta’lim tizimi uzluksiz ta’limning birlamchi, eng asosiy bo‘g‘inidir?",
    "options": [
      "Maktabgacha ta’lim",
      "Umumiy o‘rta ta’lim",
      "O‘rta maxsus ta’lim",
      "Oliy ta’lim"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda 2023-yil qanday nomlangan?",
    "options": [
      "Yoshlar yili",
      "Insonga e’tibor va sifatli ta’lim yili",
      "Xalq bilan muloqot yili",
      "Obod qishloq yili"
    ],
    "correct": 1
  },
  {
    "q": "2015-yilga kelib jahon sog‘liqni saqlash tashkiloti ma’lumotiga ko‘ra O‘zbekistonda tug‘ilayotgan bolalarning necha foizi mutlaq sog‘lom bolalarni tashkil etgan?",
    "options": [
      "85%",
      "90%",
      "92%",
      "95%"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda qaysi o‘quv yilidan 1-sinflar o‘qishni lotin alifbosida amalga oshirish belgilangan?",
    "options": [
      "1993-1994 o‘quv yili",
      "1994-1995 o‘quv yili",
      "1995-1996 o‘quv yili",
      "1996-1997 o‘quv yili"
    ],
    "correct": 1
  },
  {
    "q": "1989-yil may-iyun oylarida Quvasoyda yoshlar o‘rtasida bo‘lgan bezorilik vodiyda millatlararo to‘qnashuv qaysi xalqlar o‘rtasida kelib chiqdi?",
    "options": [
      "O‘zbeklar va qirg‘izlar",
      "O‘zbeklar va tojiklar",
      "O‘zbeklar va qozoqlar",
      "O‘zbeklar va ruslar"
    ],
    "correct": 0
  },
  {
    "q": "Zulfiya nomidagi davlat mukofoti qachon qabul qilingan?",
    "options": [
      "1998-yil",
      "1999-yil",
      "2000-yil",
      "2001-yil"
    ],
    "correct": 1
  },
  {
    "q": "2017-yilda qaysi davlatda 'O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev' nomli kitob chop etildi?",
    "options": [
      "Rossiya",
      "AQSh",
      "Xitoy",
      "Yaponiya"
    ],
    "correct": 0
  },
  {
    "q": "Oliy ta’lim dasturining birinchi bosqichini tugallagan talabalarning ilmiy darajasi qanday ataladi?",
    "options": [
      "Magistr",
      "Bakalavr",
      "Doktorant",
      "Professor"
    ],
    "correct": 1
  },
  {
    "q": "“O‘zbekiston-2030” strategiyasining beshinchi ustuvor yo‘nalishi qanday nomlanadi?",
    "options": [
      "Yashil taraqqiyot",
      "Adolatli jamiyat",
      "Innovatsion iqtisodiyot",
      "Kuchli fuqarolik jamiyati"
    ],
    "correct": 1
  },
  {
    "q": "Qachondan boshlab O‘zbekistonda 'Universiada', 'Barkamol avlod' va 'Umid nihollari' sport musobaqalari o‘tkazilib kelinmoqda?",
    "options": [
      "1999-yildan",
      "2000-yildan",
      "2001-yildan",
      "2002-yildan"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda ta’lim nechta tilda olib boriladi?",
    "options": [
      "5 ta",
      "7 ta",
      "9 ta",
      "11 ta"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda qaysi yil 'Xalq bilan muloqot va inson manfaatlari yili' deb e’lon qilingan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Qachon Toshkentdagi 'Bobur' bog‘iga 'Do‘stlik' bog‘i nomi berildi?",
    "options": [
      "1992-yil",
      "1993-yil",
      "1994-yil",
      "1995-yil"
    ],
    "correct": 2
  },
  {
    "q": "Davlat, jamiyat, iqtisodiyot, texnologiya va boshqa sohalarning yangilanishi, yangi uslublar, ixtirolarning qo‘llanishi asosidagi o‘zgarishlar bu-?",
    "options": [
      "Innovatsiya",
      "Modernizatsiya",
      "Integratsiya",
      "Globalizatsiya"
    ],
    "correct": 0
  },
  {
    "q": "1991-yil 29-dekabrda O‘zbekistonda ilk bor umumxalq tomonidan o‘tkazilgan prezidentlik saylovida Islom Karimov bilan qatorda muqobillik asosida kim o‘z nomzodini qo‘ygan edi?",
    "options": [
      "Muhammad Solih",
      "Abdulaziz Kamilov",
      "Shavkat Mirziyoyev",
      "Rustam Azimov"
    ],
    "correct": 0
  },
  {
    "q": "…da O‘zbekiston Konstitutsiyasi va 'O‘zbekiston Respublikasi Prezidenti saylovi to‘g‘risidagi'gi qonunga muvofiq, muqobillik va sog‘lom raqobat asosida Prezidentlik saylovi o‘tkazildi. Unda 88,61 % ovoz bilan Bosh vazir Shavkat Mirziyoyev prezident etib saylandi.",
    "options": [
      "2015-yil",
      "2016-yil",
      "2017-yil",
      "2018-yil"
    ],
    "correct": 1
  },
  {
    "q": "Qaysi yillarda mamlakatimiz parlamenti Oliy Kengash nomi bilan atalgan?",
    "options": [
      "1990-1992-yillar",
      "1991-1993-yillar",
      "1992-1994-yillar",
      "1993-1995-yillar"
    ],
    "correct": 2
  },
  {
    "q": "“O‘zbekiston-2030” strategiyasi nechta maqsadni o‘z ichiga oladi?",
    "options": [
      "5 ta",
      "7 ta",
      "10 ta",
      "12 ta"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda qaysi partiyaning asosiy maqsad vazifasi milliy an’analarni va qadriyatlarni saqlashdan iborat?",
    "options": [
      "O‘zLiDeP",
      "Milliy tiklanish",
      "Adolat",
      "XDP"
    ],
    "correct": 1
  },
  {
    "q": "…da O‘zbekiston Respublikasi Prezidenti tomonidan 2 ming 700 nafar mahkumni, shu jumladan, jazoni ijro etish koloniyalaridan 956 nafar shaxslarni mamlakatimiz tarixida ilk marotaba afv etish to‘g‘risida farmon qabul qilindi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  }

 
    ]),
  },



//////////////////////////////////////////////////
 topic4: {
    title: "Tarix 4-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Qachon Mazkur farmon asosida O‘zbekiston Respublikasi Oliy sudi va Oliy xo‘jalik sudi birlashtirilib, yagona oliy organ – O‘zbekiston Respublikasi Oliy sudi tashkil etildi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy sudi Harbiy hay’ati, Harbiy sudi, okrug va hududiy harbiy sudlar shtat birliklari O‘zbekiston Respublikasi Qurolli Kuchlari tarkibidan Oliy sud tizimiga o‘tkazildi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "14-yanvar O‘zbekiston Respublikasining …dagi qonuniga muvofiq 'Vatan himoyachilari kuni' deb e’lon qilindi?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1993-yil",
      "1994-yil"
    ],
    "correct": 1
  },
  {
    "q": "Qachon qabul qilingan farmonga ko‘ra Xalq qabulxonalari tashkil etilgan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi mintaqaning nechta mamlakati bilan umumiy chegaraga ega?",
    "options": [
      "3 ta",
      "4 ta",
      "5 ta",
      "6 ta"
    ],
    "correct": 2
  },
  {
    "q": "Orol dengizining fojiasi birinchi navbatda qaysi jarayon oqibatida shakllangan?",
    "options": [
      "Sug‘orish tizimining haddan tashqari kengayishi",
      "Sanoat chiqindilari ko‘payishi",
      "Iqlim o‘zgarishi",
      "Transport ifloslanishi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasida hozirgi vaqtda qancha millat va elat vakillari yashaydi?",
    "options": [
      "100 dan ortiq",
      "120 dan ortiq",
      "130 dan ortiq",
      "140 dan ortiq"
    ],
    "correct": 2
  },
  {
    "q": "Necha yoshdan kam bo‘lmagan fuqarolar Prezidentlikka saylanishi mumkin?",
    "options": [
      "30 yosh",
      "35 yosh",
      "40 yosh",
      "45 yosh"
    ],
    "correct": 1
  },
  {
    "q": "Necha yoshga to‘lgan fuqarolar Oliy Majlisga saylanishi mumkin?",
    "options": [
      "21 yosh",
      "23 yosh",
      "25 yosh",
      "27 yosh"
    ],
    "correct": 2
  },
  {
    "q": "Necha yoshga to‘lgan fuqarolar viloyat, tuman, shahar Kengashlariga deputatlikka saylanishi mumkin?",
    "options": [
      "18 yosh",
      "20 yosh",
      "21 yosh",
      "23 yosh"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Xalq demokratik partiyasiga qachon asos solindi?",
    "options": [
      "1990-yil",
      "1991-yil",
      "1992-yil",
      "1993-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Adolat sotsial-demokratik partiyasi qachon tashkil etilgan?",
    "options": [
      "1994-yil",
      "1995-yil",
      "1996-yil",
      "1997-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Milliy tiklanish demokratik partiyasi qachon tashkil etilgan?",
    "options": [
      "1994-yil",
      "1995-yil",
      "1996-yil",
      "1997-yil"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagi qaysi shaharda Amir Temur va temuriylar davri tarixi muzeyi qurildi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Shahrisabz",
      "Buxoro"
    ],
    "correct": 0
  },
  {
    "q": "Ta’lim tizimidagi innovatsion va kreativ yondashuvlar asosida tashkil etilgan aniq fanlarga ixtisoslashtirilgan maktablarga kimlarning nomi berilgan?",
    "options": [
      "Beruniy va Ulug‘bek",
      "Ibn Sino va Beruniy",
      "Al-Xorazmiy va Ulug‘bek",
      "Al-Farg‘oniy va Ibn Sino"
    ],
    "correct": 2
  },
  {
    "q": "Shahrisabzda Amir Temur haykali qachon ochilgan?",
    "options": [
      "1994-yil",
      "1995-yil",
      "1996-yil",
      "1997-yil"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi yildan boshlab O‘zbekistonda ilk bor mamlakat aholisi va hukumatning to‘g‘ridan-to‘g‘ri muloqoti yo‘lga qo‘yildi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Qachondan boshlab bosh vazir virtual qabulxonasi ochildi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Prezidentining 2017-yil 27-martdagi qaroriga muvofiq Sharof Rashidov tavalludining 100 yilligini nishonlash tadbirlari qayerda bo‘lib o‘tdi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Jizzax",
      "Buxoro"
    ],
    "correct": 2
  },
  {
    "q": "2016-yil 28-dekabrda qanday farmon ishlab chiqilgan?",
    "options": [
      "Davlat xizmatini rivojlantirish farmoni",
      "Xalq qabulxonalarini tashkil etish farmoni",
      "Sud-huquq tizimini isloh qilish farmoni",
      "Ta’lim tizimini rivojlantirish farmoni"
    ],
    "correct": 1
  }
,
  {
    "q": "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Konstitutsiya qabul qilinganining 25 yilligiga bag‘ishlangan marosimdagi ma’ruzasida Xalq qabulxonalari negizida … tashkil etilishini ilgari surdi?",
    "options": [
      "Virtual qabulxonalar",
      "Mahalla markazlari",
      "Prezident xalq qabulxonalari",
      "Fuqarolar majlisi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev BMTning nechanchi sessiyasida qatnashdi?",
    "options": [
      "71-sessiya",
      "72-sessiya",
      "73-sessiya",
      "74-sessiya"
    ],
    "correct": 1
  },
  {
    "q": "Harakatlar strategiyasi qachon tasdiqlandi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Harakatlar strategiyasi qaysi yillarga mo‘ljallangan?",
    "options": [
      "2016–2020",
      "2017–2021",
      "2017–2022",
      "2018–2022"
    ],
    "correct": 2
  },
  {
    "q": "Harakatlar strategiyasi nechta yo‘nalishdan iborat?",
    "options": [
      "3 ta",
      "4 ta",
      "5 ta",
      "6 ta"
    ],
    "correct": 2
  },
  {
    "q": "Harakatlar strategiyasi amalga oshishini qaysi tashkilot nazorat qiladi?",
    "options": [
      "Oliy Majlis",
      "Prezident Administratsiyasi",
      "Milliy komissiya",
      "Vazirlar Mahkamasi"
    ],
    "correct": 2
  },
  {
    "q": "Harakatlar strategiyasi amalga oshishini nazorat qiluvchi Prezident rahbarligidagi Milliy komissiya necha kishidan iborat?",
    "options": [
      "30 kishi",
      "35 kishi",
      "37 kishi",
      "40 kishi"
    ],
    "correct": 2
  },
  {
    "q": "Harakatlar strategiyasining birinchi yo‘nalishi qanday nomlanadi?",
    "options": [
      "Davlat va jamiyat qurilishi",
      "Iqtisodiy rivojlanish",
      "Ijtimoiy soha",
      "Xavfsizlik va tashqi siyosat"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasining ikkinchi yo‘nalishi qanday nomlanadi?",
    "options": [
      "Davlat va jamiyat qurilishi",
      "Iqtisodiy rivojlanish va liberallashtirish",
      "Ijtimoiy soha",
      "Xavfsizlik va tashqi siyosat"
    ],
    "correct": 1
  },
  {
    "q": "Harakatlar strategiyasining uchinchi yo‘nalishi qanday nomlanadi?",
    "options": [
      "Davlat va jamiyat qurilishi",
      "Iqtisodiy rivojlanish",
      "Ijtimoiy sohani rivojlantirish",
      "Xavfsizlik va tashqi siyosat"
    ],
    "correct": 2
  },
  {
    "q": "Harakatlar strategiyasining to‘rtinchi yo‘nalishi qanday nomlanadi?",
    "options": [
      "Davlat va jamiyat qurilishi",
      "Iqtisodiy rivojlanish",
      "Ijtimoiy soha",
      "Xavfsizlik, millatlararo totuvlik va diniy bag‘rikenglik"
    ],
    "correct": 3
  },
  {
    "q": "Harakatlar strategiyasining beshinchi yo‘nalishi qanday nomlanadi?",
    "options": [
      "Davlat va jamiyat qurilishi",
      "Iqtisodiy rivojlanish",
      "Ijtimoiy soha",
      "Tashqi siyosat va xavfsizlik"
    ],
    "correct": 3
  },
  {
    "q": "“SamAuto” (Samarqand avtomobil zavodi) qachon qurilgan?",
    "options": [
      "1996-yil",
      "1997-yil",
      "1998-yil",
      "1999-yil"
    ],
    "correct": 1
  },
  {
    "q": "“MAN Auto Uzbekistan” qachon tashkil qilindi?",
    "options": [
      "2007-yil",
      "2008-yil",
      "2009-yil",
      "2010-yil"
    ],
    "correct": 1
  },
  {
    "q": "Asaka shahridagi avtomobil zavodi hozirgi kunda qanday nomlanadi?",
    "options": [
      "GM Uzbekistan",
      "UzAuto Motors",
      "Chevrolet Uzbekistan",
      "AvtoVAZ Uzbekistan"
    ],
    "correct": 1
  },
  {
    "q": "Tokiodagi qaysi Universitetda buyuk o‘zbek mutafakkiri Alisher Navoiyga haykal o‘rnatildi?",
    "options": [
      "Tokio Universiteti",
      "Waseda Universiteti",
      "Meiji Universiteti",
      "Hitotsubashi Universiteti"
    ],
    "correct": 1
  },
  {
    "q": "Qachondan boshlab O‘zbekistonning qo‘shni davlatlar bilan munosabatida yangi davr boshlandi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Hozirda O‘zbekistonda nechta diniy konfessiya faoliyat yuritmoqda?",
    "options": [
      "14 ta",
      "16 ta",
      "18 ta",
      "20 ta"
    ],
    "correct": 2
  },
  {
    "q": "Markaziy Osiyoda yagona bo‘lgan Toshkent islom Universitetiga kimning tashabbusi bilan asos solindi?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulla Aripov",
      "Abdulaziz Kamilov"
    ],
    "correct": 0
  },
  {
    "q": "Qachon Respublika Oliy Sovetining XI sessiyasi 'O‘zbekiston SSR davlat tili haqida' Qonunni qabul qilib, o‘zbek tiliga davlat tili maqomini berdi?",
    "options": [
      "1988-yil",
      "1989-yil",
      "1990-yil",
      "1991-yil"
    ],
    "correct": 1
  }

 
    ]),
  },
 topic5: {
    title: "Tarix 5-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Qachon Respublika Oliy Sovetining XI sessiyasi 'O‘zbekiston SSR davlat tili haqida' Qonunni qabul qilib, o‘zbek tiliga davlat tili maqomini berdi?",
    "options": [
      "1988-yil",
      "1989-yil",
      "1990-yil",
      "1991-yil"
    ],
    "correct": 1
  },
  {
    "q": "Shavkat Mirziyoyev BMT Bosh Assambleyasining 'Ma’rifat va diniy bag‘rikenglik' deb nomlangan maxsus rezolyutsiyasini qabul qilish taklifini qaysi sessiyasida murojaat qildi?",
    "options": [
      "71-sessiya",
      "72-sessiya",
      "73-sessiya",
      "74-sessiya"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentning 2013-yildagi 'Yuridik kadrlar tayyorlash tizimini yanada takomillashtirish to‘g‘risida'gi qaroriga muvofiq…",
    "options": [
      "Yangi yuridik akademiya tashkil etildi",
      "Huquqshunoslik oliy maktabi ochildi",
      "Yuridik kadrlar tayyorlash tizimi isloh qilindi",
      "Advokatlar malaka oshirish markazi ochildi"
    ],
    "correct": 2
  },
  {
    "q": "Kimning tavalludi 1994-yil O‘zbekistonda va jahon miqyosida, xususan, YUNESKO qarorgohi Parijda keng nishonlangan?",
    "options": [
      "Alisher Navoiy",
      "Mirzo Ulug‘bek",
      "Ahmad Farg‘oniy",
      "Beruniy"
    ],
    "correct": 0
  },
  {
    "q": "Markaziy Osiyoda yagona bo‘lgan Toshkent islom Universitetiga qachon asos solindi?",
    "options": [
      "1997-yil",
      "1998-yil",
      "1999-yil",
      "2000-yil"
    ],
    "correct": 0
  },
  {
    "q": "Islom Karimov tavalludining 80 yilligi munosabati bilan Samarqandda xalqaro konferensiya qachon bo‘lib o‘tdi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Prezident Shavkat Mirziyoyev BMT Bosh Assambleyasining qaysi sessiyasida dinlararo totuvlik va tinchlikni saqlash haqida ta’kidlagan edi?",
    "options": [
      "71-sessiya",
      "72-sessiya",
      "73-sessiya",
      "74-sessiya"
    ],
    "correct": 2
  },
  {
    "q": "“Imom Buxoriy xalqaro ilmiy-tadqiqot markazini tashkil etish chora-tadbirlari to‘g‘risida”gi qaror qachon qabul qilindi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Imom Buxoriy yodgorlik majmuasi qaysi shaharda tashkil qilingan?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Jizzax"
    ],
    "correct": 1
  },
  {
    "q": "Qosim shayx Azizon xonaqosi qaysi shaharda joylashgan?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Xiva"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasida maydoni jihatdan eng katta viloyat qaysi?",
    "options": [
      "Qashqadaryo",
      "Samarqand",
      "Buxoro",
      "Navoiy"
    ],
    "correct": 3
  },
  {
    "q": "Hozirgi vaqtda O‘zbekiston qishloq xo‘jaligidagi etakchi xo‘jalik shaklini toping?",
    "options": [
      "Fermer xo‘jaligi",
      "Dehqon xo‘jaligi",
      "Kooperativ xo‘jaligi",
      "Davlat xo‘jaligi"
    ],
    "correct": 0
  },
  {
    "q": "Prezidentning qachongi farmoni asosida O‘zbekistonda Islom akademiyasi tashkil qilindi?",
    "options": [
      "2017-yil",
      "2018-yil",
      "2019-yil",
      "2020-yil"
    ],
    "correct": 0
  },
  {
    "q": "2024-yil O‘zbekistonda qanday yil deb e’lon qilindi?",
    "options": [
      "Yoshlar yili",
      "Insonga e’tibor va sifatli ta’lim yili",
      "Obod qishloq yili",
      "Innovatsiyalar yili"
    ],
    "correct": 1
  },
  {
    "q": "Qachon O‘zbekiston Prezidentining 'Respublika oliy ta’lim muassasalari bakalavriatiga kirish test sinovlarini o‘tkazish tartibini takomillashtirish to‘g‘risida'gi qarori qabul qilindi?",
    "options": [
      "2017-yil",
      "2018-yil",
      "2019-yil",
      "2020-yil"
    ],
    "correct": 1
  },
  {
    "q": "1989-yilgi 'Farg‘ona voqealari' qaysi millatlar o‘rtasida bo‘lib o‘tdi?",
    "options": [
      "O‘zbeklar va qirg‘izlar",
      "O‘zbeklar va mesxeti turklari",
      "O‘zbeklar va tojiklar",
      "O‘zbeklar va ruslar"
    ],
    "correct": 1
  },
  {
    "q": "Vijdon erkinligi va diniy tashkilotlar to‘g‘risidagi qonun qachon qabul qilingan?",
    "options": [
      "1997-yil",
      "1998-yil",
      "1999-yil",
      "2000-yil"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 'Islom Karimovning xotirasini abadiylashtirish to‘g‘risida'gi qarori qachon qabul qilingan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  },
  {
    "q": "Hadis ilmida shuxrat qozongan ulug‘ allomani toping?",
    "options": [
      "Imom Buxoriy",
      "Imom Termiziy",
      "Imom Moturidiy",
      "Imom G‘azzoliy"
    ],
    "correct": 0
  },
  {
    "q": "Mo‘g‘ullarga qarshi kurashgan xalq qahramoni kim?",
    "options": [
      "Amir Temur",
      "Jaloliddin Manguberdi",
      "Shiroq",
      "Najmiddin Kubro"
    ],
    "correct": 1
  },
  {
    "q": "Jaloliddin Manguberdi haykali qaysi shaharda o‘rnatilgan?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Urganch",
      "Buxoro"
    ],
    "correct": 2
  }
,
  {
    "q": "I.A. Karimov BMT Bosh Assambleyasining 48-sessiyasida nutq so‘zlagan bo‘lsa, Sh. Mirziyoyevning ilk ma’ruzasi BMT Bosh Assambleyasining qaysi sessiyasiga bo‘ldi?",
    "options": [
      "71-sessiya",
      "72-sessiya",
      "73-sessiya",
      "74-sessiya"
    ],
    "correct": 1
  },
  {
    "q": "Dunyo halqlarining madaniyati, ta’lim va fani borasida erishgan yutuqlarini xalqaro miqiyosda targ‘ib etuvchi xalqaro tashkilot qaysi qatorda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "BMT",
      "YuNESKO",
      "YUNISEF",
      "YUNIDO"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston YuNESKO xalqaro tashkiloti a’zoligiga qachon qabul qilindi?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1993-yil",
      "1994-yil"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi yildan e’tiboran 31-avgust sanasi yurtimizda qatag‘on qurbonlarini yod etish kuni sifatida nishonlanadigan bo‘ldi?",
    "options": [
      "1999-yil",
      "2000-yil",
      "2001-yil",
      "2002-yil"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug‘bek tavalludining necha yilligini xalqaro miqyosda nishonlash YuNESKO dasturiga kiritildi?",
    "options": [
      "500 yilligi",
      "550 yilligi",
      "560 yilligi",
      "600 yilligi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonning qaysi shaharlari 1997-yil YuNESKOning jahon madaniy qadriyatlari ro‘yxatiga kiritildi?",
    "options": [
      "Toshkent va Samarqand",
      "Samarqand va Buxoro",
      "Xiva va Buxoro",
      "Shahrisabz va Samarqand"
    ],
    "correct": 1
  },
  {
    "q": "YuNESKO qaroriga binoan O‘zbekistondan nechta tarixiy ob’ekt jahon madaniyati qadriyatlari ro‘yxatiga kiritildi?",
    "options": [
      "3 ta",
      "4 ta",
      "5 ta",
      "6 ta"
    ],
    "correct": 2
  },
  {
    "q": "YuNESKO qaroriga binoan O‘zbekistonning qaysi viloyatida Markaziy Osiyo tadqiqotlari instituti tashkil etildi?",
    "options": [
      "Toshkent viloyati",
      "Samarqand viloyati",
      "Buxoro viloyati",
      "Xorazm viloyati"
    ],
    "correct": 1
  },
  {
    "q": "Amir Temurning nomining xalqimizga qaytarilishi kimning nomi bilan bog‘liq?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Alisher Navoiy",
      "Mirzo Ulug‘bek"
    ],
    "correct": 0
  },
  {
    "q": "YuNESKO loyihasi doirasida Amir Temur tavalludining 660 yilligi xalqaro miqyosda qachon nishonlandi?",
    "options": [
      "1994-yil",
      "1995-yil",
      "1996-yil",
      "1997-yil"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur tavalludining 660 yilligi tantanalari xalqaro miqyosda qaysi shaharda nishonlandi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Shahrisabz",
      "Buxoro"
    ],
    "correct": 1
  },
  {
    "q": "Qachondan boshlab O‘zbekistonning tashqi siyosatida Markaziy Osiyo davlatlari asosiy o‘rin egallay boshladi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Qachon Samarqandda Amir Temur haykali ochildi?",
    "options": [
      "1994-yil",
      "1995-yil",
      "1996-yil",
      "1997-yil"
    ],
    "correct": 0
  },
  {
    "q": "Qachon Toshkentda Amir Temur haykali ochildi?",
    "options": [
      "1993-yil",
      "1994-yil",
      "1995-yil",
      "1996-yil"
    ],
    "correct": 1
  },
  {
    "q": "1996-yili qaysi shaharlar 'Amir Temur' ordeni bilan mukofotlandi?",
    "options": [
      "Toshkent va Samarqand",
      "Samarqand va Buxoro",
      "Xiva va Buxoro",
      "Shahrisabz va Samarqand"
    ],
    "correct": 0
  },
  {
    "q": "Qayerda Hamid Olimjon va Zulfiya xotirasiga bag‘ishlab barpo etilgan yodgorlik majmuasi ochildi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Farg‘ona"
    ],
    "correct": 0
  },
  {
    "q": "Qachon Prezident Shavkat Mirziyoyev tashabbusi bilan Jizzax tumaniga Sharof Rashidov nomi berildi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "Qachondan Qurbon va Ramazon hayit kunlarini doimiy ravishda bayram qilish va dam olish kunlari deb e’lon qilish haqida qaror qabul qilindi?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1993-yil",
      "1994-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Birinchi Prezidenti Islom Karimov yashab faoliyat ko‘rsatgan yillarni toping?",
    "options": [
      "1989–2016",
      "1990–2016",
      "1991–2016",
      "1992–2016"
    ],
    "correct": 2
  },
  {
    "q": "Mansabdor shaxslar tomonidan unga berilgan mansab vakolatlari va huquqlardan o‘zlarining shaxsiy manfaatlarini ko‘zlab qonunchilik va axloq qoidalariga zid ravishda foydalanishi nima deyiladi?",
    "options": [
      "Korrupsiya",
      "Jinoyat",
      "Poraxo‘rlik",
      "Vakolatni suiiste’mol qilish"
    ],
    "correct": 0
  }


 
    ]),
  },
 // topic9: {
 //    title: "inson huquqi 4-Bo'lim",
 //    questions: randomizeQuestions([

 
 //    ]),
 //  },

      ///////////////////////////////////////////////////////////////////////////////


      
  
  // ========================================================================
};
