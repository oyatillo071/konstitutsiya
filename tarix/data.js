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



 topic9: {
     title: "Tarix  umumiy",
    questions: randomizeQuestions([
{
    "q": "Shavkat Mirziyoyev birinchi marotaba O'zbekiston Prezidentligiga qachon saylandi?",
    "options": [
      "2016-yil 4-dekabrda",
      "2015-yil 23-oktyabrda",
      "2017-yil 14-yanvarda",
      "2016-yil 18-noyabrda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston – 2023' strategiyasida aholining o'rtacha umr davomiyligini qancha yoshga yetkazish maqsad qilingan?",
    "options": [
      "78 yoshga",
      "76 yoshga",
      "80 yoshga",
      "75 yoshga"
    ],
    "correct": 0
  },
  {
    "q": "'XXI asr' ijtimoiy-siyosiy gazetasi qaysi siyosiy partiyaning nashr organi hisoblanadi?",
    "options": [
      "Milliy tiklanish demokratik partiyasi",
      "Adolat sotsial-demokratik partiyasi",
      "O'zbekiston Liberal-demokratik partiyasi",
      "Xalq demokratik partiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Arabcha 'joy', 'o'rin' ma'nosini anglatuvchi so'z qaysi?",
    "options": [
      "Mavze",
      "Maqom",
      "Madrasa",
      "Maskan"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston – 2030' strategiyasi nechta ustuvor yo'nalishlardan iborat?",
    "options": [
      "5 ta yo'nalishdan",
      "6 ta yo'nalishdan",
      "7 ta yo'nalishdan",
      "4 ta yo'nalishdan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda o'lim jazosi qaysi yildan rasman jinoiy jazo sifatida butunlay bekor qilingan?",
    "options": [
      "2008-yil 1-yanvardan",
      "2005-yil 1-avgustdan",
      "2010-yil 1-yanvardan",
      "2006-yil 1-iyuldan"
    ],
    "correct": 0
  },
  {
    "q": "2017-yil may oyida Prezident Shavkat Mirziyoyevning davlat tashrifi qaysi davlatga amalga oshirildi?",
    "options": [
      "Xitoy Xalq Respublikasiga",
      "Rossiya Federatsiyasiga",
      "Turkiya Respublikasiga",
      "Germaniya Federativ Respublikasiga"
    ],
    "correct": 0
  },
  {
    "q": "2017 yilga kelib Zulfiya mukofoti sovrindorlari soni nechtaga yetdi?",
    "options": [
      "244 nafarga",
      "220 nafarga",
      "260 nafarga",
      "238 nafarga"
    ],
    "correct": 0
  },
  {
    "q": "SSSR davrida O'zbekistonda nechta madrasa faoliyat yuritgan?",
    "options": [
      "2 ta",
      "4 ta",
      "1 ta",
      "3 ta"
    ],
    "correct": 0
  },
  {
    "q": "2004-yili Toshkent Islom universitetida Qur'oni Karimning izohli nashri kim tahriri ostida tayyorlandi?",
    "options": [
      "Shayx Abdulaziz Mansur",
      "Shayx Muhammad Sodiq Muhammad Yusuf",
      "Shayx Ziyovuddin Askarov",
      "Shayx Abdulaziz Zokirov"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston aholisining qancha qismi 30 yoshgacha bo'lganlarni tashkil etadi?",
    "options": [
      "60 foizini",
      "55 foizini",
      "65 foizini",
      "58 foizini"
    ],
    "correct": 0
  },
  {
    "q": "'Adolat' sotsial-demokratik partiyasi qachon tashkil etilgan?",
    "options": [
      "1995-yil 18-fevralda",
      "1993-yil 4-martda",
      "1996-yil 21-oktyabrda",
      "1994-yil 12-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "AQSHni sinovli damlarda qo'llab-quvvatlagani uchun 'Xalqaro miqyosdagi lider' mukofoti bilan taqdirlangan O'zbekiston siyosatchisi kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Inomjon Majidov",
      "Abdulaziz Komilov"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi mustaqilligini 1991-yil 27-dekabrda tan olib, 1992-yil yanvarda diplomatik munosabatlar o'rnatgan davlat qaysi?",
    "options": [
      "Eron Islom Respublikasi",
      "Turkiya Respublikasi",
      "Pokiston Islom Respublikasi",
      "Afg'oniston Islom Amirligi"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbek ishi — 30 va 50-yillardagi qatag'onlarning mantiqiy davomidir' degan fikr qaysi adibga tegishli?",
    "options": [
      "Shukur Xolmirzayev",
      "O'tkir Hoshimov",
      "Said Ahmad",
      "Erkin Vohidov"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur va Temuriylar davri tarixi muzeyi qayerda qurilgan?",
    "options": [
      "Toshkent shahrida, Amir Temur xiyoboni yonida",
      "Toshkent shahrida, Alisher Navoiy ko'chasida",
      "Samarqand shahrida, Registon maydoni yonida",
      "Shahrisabz shahrida, Ko'k Gumbaz masjidi yonida"
    ],
    "correct": 0
  },
  {
    "q": "BMT tomonidan qaysi sana 'Xalqaro bag'rikenglik kuni' deb e'lon qilingan?",
    "options": [
      "16-noyabr",
      "21-fevral",
      "8-mart",
      "4-noyabr"
    ],
    "correct": 0
  },
  {
    "q": "YuNESKO tomonidan qaysi sana 'Xalqaro ona tili kuni' deb e'lon qilingan?",
    "options": [
      "21-fevral",
      "17-aprel",
      "3-may",
      "16-noyabr"
    ],
    "correct": 0
  },
  {
    "q": "2007-yilda AYSESKO tomonidan 'Islom madaniyati poytaxti' maqomi berilgan shahar qaysi?",
    "options": [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Namangan"
    ],
    "correct": 0
  },
  {
    "q": "Markaziy Osiyodagi yagona Toshkent islom universiteti qachon tashkil etilgan?",
    "options": [
      "1999-yil 7-aprelda",
      "1997-yil 12-sentyabrda",
      "2001-yil 3-iyunda",
      "2000-yil 28-fevralda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Davlat bayrog'i qachon qabul qilingan?",
    "options": [
      "1991-yil 18-noyabrda",
      "1991-yil 31-avgustda",
      "1992-yil 8-dekabrda",
      "1991-yil 1-sentyabrda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston-2030' strategiyasining birinchi ustuvor yo'nalishi nima deb nomlanadi?",
    "options": [
      "Har bir insonga o'z salohiyatini ro'yobga chiqarish uchun munosib sharoitlar yaratish",
      "Barqaror iqtisodiy o'sish orqali aholi farovonligini ta'minlash",
      "Adolatli va zamonaviy davlat tashkil etish, xalq xizmatidagi boshqaruvni joriy etish",
      "Suv resurslarini tejash va atrof-muhitni muhofaza qilish"
    ],
    "correct": 0
  },
  {
    "q": "'Sharq taronalari' xalqaro musiqa festivali qachondan o'tkazila boshlandi?",
    "options": [
      "1997-yildan",
      "1995-yildan",
      "1999-yildan",
      "2001-yildan"
    ],
    "correct": 0
  },
  {
    "q": "Xorazm Ma'mun akademiyasi qachon qayta tiklangan?",
    "options": [
      "1997-yil 20-martda",
      "1995-yil 14-iyunda",
      "1999-yil 7-aprelda",
      "1996-yil 3-noyabrda"
    ],
    "correct": 0
  },
  {
    "q": "1992-yil 2-martda qaysi xalqaro tashkilotga a'zo bo'ldi O'zbekiston?",
    "options": [
      "Birlashgan Millatlar Tashkilotiga (BMT)",
      "Mustaqil Davlatlar Hamdo'stligiga (MDH)",
      "Shanxay Hamkorlik Tashkilotiga (SHT)",
      "Islom hamkorlik tashkilotiga (IHT)"
    ],
    "correct": 0
  },
  {
    "q": "'9+1' uchrashuvi 1991-yil aprel oyida qayerda bo'lib o'tgan?",
    "options": [
      "Moskva yaqinidagi Novo-Ogaryovo qarorgohida",
      "Moskvadagi Kreml saroyida",
      "Sankt-Peterburgdagi Qish saroyida",
      "Toshkentdagi O'zbekiston saroyi konferens-zalida"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston SSR Oliy Kengashida 'Mustaqillik deklaratsiyasi' qachon qabul qilingan?",
    "options": [
      "1990-yil 20-iyunda",
      "1991-yil 31-avgustda",
      "1990-yil 24-martda",
      "1991-yil 19-avgustda"
    ],
    "correct": 0
  },
  {
    "q": "1992-yil 8-dekabrda qabul qilingan O'zbekiston Konstitutsiyasi (2023-yil yangi tahriri) necha moddadan iborat?",
    "options": [
      "155 ta moddadan",
      "128 ta moddadan",
      "136 ta moddadan",
      "168 ta moddadan"
    ],
    "correct": 0
  },
  {
    "q": "1991-yilgi Prezidentlik saylovida saylovchilarning qancha foizi I.Karimov nomzodini qo'llab-quvvatladi?",
    "options": [
      "86,5 foizi",
      "79,4 foizi",
      "91,2 foizi",
      "83,1 foizi"
    ],
    "correct": 0
  },
  {
    "q": "I.Karimov O'zbekiston SSR Prezidenti etib qachon saylangan?",
    "options": [
      "1990-yil 24-martda",
      "1989-yil 16-oktyabrda",
      "1991-yil 29-dekabrda",
      "1990-yil 1-noyabrda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda so'm-kupon muomalaga qachon kiritildi?",
    "options": [
      "1993-yil 15-noyabrdan",
      "1992-yil 1-yanvardan",
      "1994-yil 1-iyuldan",
      "1993-yil 1-martdan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda milliy valyuta — so'm qachon muomalaga kiritildi?",
    "options": [
      "1994-yil 1-iyuldan",
      "1993-yil 15-noyabrdan",
      "1994-yil 1-yanvardan",
      "1995-yil 1-yanvardan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Konstitutsiyasining nechanchi moddasida davlatning tinchliksevar tashqi siyosat olib borishi belgilangan?",
    "options": [
      "17-moddasida",
      "12-moddasida",
      "20-moddasida",
      "15-moddasida"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston Respublikasining qonun chiqaruvchi organi qanday nomlanadi?",
    "options": [
      "Jo'qorg'i Kenges",
      "Oliy Kengash",
      "Milliy Majlis",
      "Qoraqalpog'iston parlamenti"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston Respublikasining maydoni qancha?",
    "options": [
      "166,6 ming kv. km",
      "112,4 ming kv. km",
      "144,9 ming kv. km",
      "82,0 ming kv. km"
    ],
    "correct": 0
  },
  {
    "q": "So'nggi 50-55 yil ichida Orol dengizi suv hajmi qancha qisqargan?",
    "options": [
      "13-14 barobardan ziyod",
      "7-8 barobar",
      "10-11 barobar",
      "5-6 barobar"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi madhiyasi matnining muallifi kim?",
    "options": [
      "Abdulla Oripov",
      "Erkin Vohidov",
      "Muhammad Yusuf",
      "O'tkir Hoshimov"
    ],
    "correct": 0
  },
  {
    "q": "2002-yil 27-yanvarda O'zbekistonda qaysi masala bo'yicha referendum o'tkazildi?",
    "options": [
      "Parlamentni ikki palatali bo'lishiga rozilik",
      "Prezidentlik muddatini uzaytirish to'g'risida",
      "Lotin yozuviga o'tish to'g'risida",
      "O'zbekiston Konstitutsiyasiga o'zgartishlar kiritish to'g'risida"
    ],
    "correct": 0
  },
  {
    "q": "Senatning necha nafar a'zosi O'zbekiston Prezidenti tomonidan tayinlanadi?",
    "options": [
      "9 nafari",
      "6 nafari",
      "12 nafari",
      "16 nafari"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasining Bosh Vaziri lavozimi qachon ta'sis etilgan?",
    "options": [
      "1990-yil 1-noyabrda",
      "1989-yil 28-iyunda",
      "1991-yil 31-avgustda",
      "1992-yil 4-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda Vitse-Prezident lavozimi qachon tugatildi?",
    "options": [
      "1992-yil 4-yanvarda",
      "1991-yil 31-avgustda",
      "1993-yil 3-martda",
      "1994-yil 14-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston Respublikasining davlat gerbi to'g'risida'gi qonun qachon qabul qilindi?",
    "options": [
      "1992-yil 2-iyulda",
      "1991-yil 18-noyabrda",
      "1992-yil 8-dekabrda",
      "1993-yil 4-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida 1998-yil kim tavalludining 1200 yilligi nishonlangan?",
    "options": [
      "Ahmad al-Farg'oniy",
      "Al-Xorazmiy",
      "Imom al-Buxoriy",
      "Abu Ali ibn Sino"
    ],
    "correct": 0
  },
  {
    "q": "'Avesto'ning yaratilganining 2700 yilligi qachon nishonlangan?",
    "options": [
      "2001-yilda",
      "1998-yilda",
      "1999-yilda",
      "2003-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Kamoliddin Behzod tavalludining qaysi yilligi 2000-yilda nishonlangan?",
    "options": [
      "500-yilligi",
      "550-yilligi",
      "450-yilligi",
      "600-yilligi"
    ],
    "correct": 0
  },
  {
    "q": "O'z Fanlar Akademiyasining Adabiyot institutiga qachon Alisher Navoiy nomi berildi?",
    "options": [
      "1940-yilda",
      "1936-yilda",
      "1944-yilda",
      "1948-yilda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda necha yoshga to'lgan fuqarolar viloyat, tuman, shahar Kengashlariga deputatlikka saylanishi mumkin?",
    "options": [
      "21 yoshga to'lgan",
      "18 yoshga to'lgan",
      "25 yoshga to'lgan",
      "30 yoshga to'lgan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda mahalliy ijro hokimiyati organi sifatida hokim lavozimi qaysi yilda ta'sis etilgan?",
    "options": [
      "1992-yilda",
      "1991-yilda",
      "1993-yilda",
      "1994-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Toshkentdagi 'Turkiston' saroyi qachon foydalanishga topshirildi?",
    "options": [
      "1993-yilda",
      "1991-yilda",
      "1995-yilda",
      "1996-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Prezident farmoni bilan O'zbekistonda Badiiy akademiya qachon tashkil etildi?",
    "options": [
      "1997-yil 23-yanvarda",
      "1995-yil 14-martda",
      "1996-yil 30-avgustda",
      "1999-yil 7-aprelda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Liberal Demokratik partiyasi (O'zLiDeP) qachon tashkil topgan?",
    "options": [
      "2003-yil 15-noyabrda",
      "2000-yil 18-iyunda",
      "2001-yil 12-dekabrda",
      "2005-yil 9-aprelda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning 'O'zbek modeli' necha tamoyildan iborat?",
    "options": [
      "5 ta tamoyildan",
      "3 ta tamoyildan",
      "6 ta tamoyildan",
      "7 ta tamoyildan"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi yildan boshlab har yili 1-oktabr 'O'qituvchilar va murabbiylar kuni' sifatida nishonlanib kelinmoqda?",
    "options": [
      "1997-yildan",
      "1993-yildan",
      "1999-yildan",
      "2000-yildan"
    ],
    "correct": 0
  },
  {
    "q": "SSSR tarkibiga nechta ittifoqdosh respublika kirgan?",
    "options": [
      "15 ta",
      "12 ta",
      "14 ta",
      "16 ta"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi parlamenti necha palatadan iborat?",
    "options": [
      "2 ta palatadan",
      "1 ta palatadan",
      "3 ta palatadan",
      "4 ta palatadan"
    ],
    "correct": 0
  },
  {
    "q": "Orol fojiasi qanday muammo sifatida tavsiflanadi?",
    "options": [
      "Global umumjahon ekologik muammo",
      "Mintaqaviy siyosiy muammo",
      "Iqtisodiy inqiroz muammosi",
      "Milliy suv resurslari muammosi"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Konstitutsiyasi qaysi chaqiriq Oliy Kengashining qaysi sessiyasida qabul qilingan?",
    "options": [
      "O'n ikkinchi chaqiriq, o'n birinchi sessiyasida",
      "O'n birinchi chaqiriq, to'qqizinchi sessiyasida",
      "O'n ikkinchi chaqiriq, o'ninchi sessiyasida",
      "O'n uchinchi chaqiriq, birinchi sessiyasida"
    ],
    "correct": 0
  },
  {
    "q": "Sobiq SSSR qancha yil faoliyat ko'rsatdi?",
    "options": [
      "69 yil",
      "65 yil",
      "72 yil",
      "74 yil"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda 1991-yil 6-sentyabrda tashkil etilgan vazirlikni toping?",
    "options": [
      "Mudofaa ishlari vazirligi",
      "Ichki ishlar vazirligi",
      "Tashqi ishlar vazirligi",
      "Davlat xavfsizligi vazirligi"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasida davlat hokimiyati nechta tarmoqqa bo'linadi?",
    "options": [
      "3 ta tarmoqqa",
      "2 ta tarmoqqa",
      "4 ta tarmoqqa",
      "5 ta tarmoqqa"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasida oliy ta'limni rivojlantirish konsepsiyasi qaysi yilgacha bo'lgan davrni o'z ichiga oladi?",
    "options": [
      "2030-yilgacha",
      "2025-yilgacha",
      "2028-yilgacha",
      "2035-yilgacha"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Ekologik harakati qachon tashkil topgan?",
    "options": [
      "2008-yil 2-avgustda",
      "2003-yil 15-noyabrda",
      "2006-yil 18-martda",
      "2010-yil 7-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi kunda O'zbekistonda nechta rasmiy siyosiy partiya faoliyat yuritmoqda?",
    "options": [
      "5 ta",
      "3 ta",
      "4 ta",
      "6 ta"
    ],
    "correct": 0
  },
  {
    "q": "1991-yil avgustida SSSR GKChP (Favqulodda holat davlat qo'mitasi)ni kim boshchilik qildi?",
    "options": [
      "Gennadiy Yanayev",
      "Mixail Gorbachyov",
      "Yegor Ligachyov",
      "Vladimir Kryuchkov"
    ],
    "correct": 0
  },
  {
    "q": "Toshkent xalqaro aeroportiga qachon Islom Karimov nomi berildi?",
    "options": [
      "2017-yil 25-yanvarda",
      "2016-yil 2-sentyabrda",
      "2017-yil 14-iyulda",
      "2018-yil 30-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston-2030' strategiyasining to'rtinchi ustuvor yo'nalishi qanday nomlanadi?",
    "options": [
      "Adolatli va zamonaviy davlat tashkil etish, xalq xizmatidagi davlat boshqaruvini joriy etish",
      "Barqaror iqtisodiy o'sish orqali aholi farovonligini ta'minlash",
      "Suv resurslarini tejash va atrof-muhitni muhofaza qilish",
      "Xavfsiz va tinchliksevar davlat, izchil tashqi siyosat"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda 2023-yil qanday yil deb e'lon qilingan?",
    "options": [
      "Insonga e'tibor va sifatli ta'lim yili",
      "Yoshlar va biznesni qo'llab-quvvatlash yili",
      "Insonparvarlik va sog'lom avlod yili",
      "Kichik biznes va xususiy tadbirkorlik yili"
    ],
    "correct": 0
  },
  {
    "q": "2015-yilga kelib JSST ma'lumotlariga ko'ra O'zbekistonda tug'ilayotgan bolalarning necha foizi mutlaq sog'lom hisoblangan?",
    "options": [
      "92 foizi",
      "87 foizi",
      "89 foizi",
      "95 foizi"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda qaysi o'quv yilidan 1-sinflar o'qishni lotin alifbosida amalga oshirish belgilangan?",
    "options": [
      "1996-1997-o'quv yilidan",
      "1994-1995-o'quv yilidan",
      "1998-1999-o'quv yilidan",
      "2000-2001-o'quv yilidan"
    ],
    "correct": 0
  },
  {
    "q": "1989-yil Farg'ona voqealari qaysi millatlar o'rtasida yuz berdi?",
    "options": [
      "O'zbeklar va mesxeti turklari o'rtasida",
      "O'zbeklar va qirg'izlar o'rtasida",
      "O'zbeklar va tojiklar o'rtasida",
      "O'zbeklar va qozoqlar o'rtasida"
    ],
    "correct": 0
  },
  {
    "q": "Zulfiya nomidagi davlat mukofoti qachon ta'sis etilgan?",
    "options": [
      "1999-yil 10-iyunda",
      "1997-yil 23-martda",
      "2001-yil 8-martda",
      "1995-yil 14-dekabrda"
    ],
    "correct": 0
  },
  {
    "q": "2017-yilda qaysi davlatda 'O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev' nomli kitob chop etildi?",
    "options": [
      "Janubiy Koreyada",
      "Germaniyada",
      "Rossiyada",
      "Xitoyda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston-2030' strategiyasining beshinchi ustuvor yo'nalishi qanday nomlanadi?",
    "options": [
      "Xavfsiz va tinchliksevar davlat, izchil tashqi siyosat",
      "Har bir insonga o'z salohiyatini ro'yobga chiqarish uchun munosib sharoitlar yaratish",
      "Adolatli va zamonaviy davlat tashkil etish, xalq xizmatidagi boshqaruvni joriy etish",
      "Barqaror iqtisodiy o'sish orqali aholi farovonligini ta'minlash"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda 2000-yildan boshlab o'tkaziladigan uch bosqichli yaxlit sport musobaqalari qaysilar?",
    "options": [
      "'Universiada', 'Barkamol avlod' va 'Umid nihollari'",
      "'Olimp', 'Yoshlar' va 'Sport umidi'",
      "'Navro'z', 'Mustaqillik' va 'Yoshlik'",
      "'Vatan', 'Kelajak' va 'Do'stlik' musobaqalari"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda ta'lim necha tilda olib boriladi?",
    "options": [
      "7 ta tilda",
      "5 ta tilda",
      "6 ta tilda",
      "8 ta tilda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda qaysi yil 'Xalq bilan muloqot va inson manfaatlari yili' deb e'lon qilingan?",
    "options": [
      "2017-yil",
      "2016-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 0
  },
  {
    "q": "1991-yil 29-dekabrda o'tkazilgan umumxalq Prezidentlik saylovida I.Karimov bilan qatorda muqobil nomzod sifatida kim ishtirok etdi?",
    "options": [
      "Muhammad Solih",
      "Abdurrahim Po'latov",
      "Shukrullo Mirsaidov",
      "Bahodir Choriyev"
    ],
    "correct": 0
  },
  {
    "q": "2016-yil 4-dekabrda o'tkazilgan Prezidentlik saylovida Shavkat Mirziyoyev necha foiz ovoz bilan saylandi?",
    "options": [
      "88,61 foiz ovoz bilan",
      "84,3 foiz ovoz bilan",
      "86,9 foiz ovoz bilan",
      "91,5 foiz ovoz bilan"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi yillarda O'zbekiston parlamenti Oliy Kengash nomi bilan atalgan (mustaqillik davri)?",
    "options": [
      "1991-1994-yillarda",
      "1989-1992-yillarda",
      "1992-1996-yillarda",
      "1990-1995-yillarda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston-2030' strategiyasi nechta maqsadni o'z ichiga oladi?",
    "options": [
      "100 ta maqsadni",
      "75 ta maqsadni",
      "85 ta maqsadni",
      "120 ta maqsadni"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda qaysi partiyaning asosiy maqsad-vazifasi milliy an'analarni va qadriyatlarni saqlashdan iborat?",
    "options": [
      "Milliy tiklanish demokratik partiyasi",
      "Xalq demokratik partiyasi",
      "Adolat sotsial-demokratik partiyasi",
      "Ekologik partiya"
    ],
    "correct": 0
  },
  {
    "q": "2017-yil 6-dekabrda qabul qilingan afv farmoni bilan necha nafar mahkum ozod qilindi?",
    "options": [
      "2700 nafar",
      "1850 nafar",
      "2450 nafar",
      "3100 nafar"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Oliy sudi va Oliy xo'jalik sudi qachon birlashtirilib yagona Oliy sud tashkil etildi?",
    "options": [
      "2017-yil 1-iyundan",
      "2016-yil 1-yanvardan",
      "2017-yil 1-sentyabrdan",
      "2018-yil 1-yanvardan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda 14-yanvar 'Vatan himoyachilari kuni' deb qachon e'lon qilingan?",
    "options": [
      "1993-yil 29-dekabrdagi qonun bilan",
      "1991-yil 31-avgustdagi qonun bilan",
      "1992-yil 4-yanvardagi qaror bilan",
      "1995-yil 14-yanvardagi farmon bilan"
    ],
    "correct": 0
  },
  {
    "q": "Xalq qabulxonalari qachongi farmon asosida tashkil etilgan?",
    "options": [
      "2016-yil 28-dekabrdagi farmon asosida",
      "2017-yil 7-fevraldagi farmon asosida",
      "2016-yil 14-sentyabrdagi farmon asosida",
      "2015-yil 14-noyabrdagi farmon asosida"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi mintaqaning nechta davlati bilan umumiy chegaraga ega?",
    "options": [
      "5 ta davlat bilan",
      "4 ta davlat bilan",
      "6 ta davlat bilan",
      "3 ta davlat bilan"
    ],
    "correct": 0
  },
  {
    "q": "Orol dengizining qurishi avvalo qaysi jarayon oqibatida yuz bergan?",
    "options": [
      "Amudaryo va Sirdaryo suvlarining haddan tashqari sug'orishga olinishi oqibatida",
      "Iqlim o'zgarishi va yog'inlarning keskin kamayishi oqibatida",
      "Sanoat chiqindilari tufayli dengiz qatlamining ifloslanganligi oqibatida",
      "Neft qazib olish faoliyati tufayli suv osti tuzilmasining buzilishi oqibatida"
    ],
    "correct": 0
  },
  {
    "q": "Hozirda O'zbekistonda qancha millat va elat vakillari yashaydi?",
    "options": [
      "130 dan ortiq",
      "60 dan ortiq",
      "80 dan ortiq",
      "100 dan ortiq"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Prezidentligiga saylanish uchun nomzod kamida necha yoshda bo'lishi kerak?",
    "options": [
      "35 yoshdan kam bo'lmagan",
      "30 yoshdan kam bo'lmagan",
      "40 yoshdan kam bo'lmagan",
      "45 yoshdan kam bo'lmagan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Xalq demokratik partiyasiga qachon asos solindi?",
    "options": [
      "1991-yil 1-noyabrda",
      "1990-yil 24-martda",
      "1992-yil 8-dekabrda",
      "1993-yil 28-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Milliy tiklanish demokratik partiyasi qachon tashkil etilgan?",
    "options": [
      "1995-yil 3-iyunda",
      "1993-yil 5-dekabrda",
      "1996-yil 14-fevralda",
      "1997-yil 19-aprelda"
    ],
    "correct": 0
  },
  {
    "q": "Shahrisabzdagi Amir Temur haykali qachon ochilgan?",
    "options": [
      "1996-yilda",
      "1993-yilda",
      "1999-yilda",
      "2001-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasi qachon tasdiqlandi?",
    "options": [
      "2017-yil 7-fevralda",
      "2016-yil 28-dekabrda",
      "2017-yil 4-yanvarda",
      "2017-yil 1-martda"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasi qaysi yillarga mo'ljallangan edi?",
    "options": [
      "2017-2021-yillarga",
      "2016-2020-yillarga",
      "2018-2022-yillarga",
      "2019-2023-yillarga"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasi nechta ustuvor yo'nalishdan iborat?",
    "options": [
      "5 ta yo'nalishdan",
      "4 ta yo'nalishdan",
      "6 ta yo'nalishdan",
      "7 ta yo'nalishdan"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasini nazorat qiluvchi Milliy komissiya necha kishidan iborat bo'lgan?",
    "options": [
      "41 kishidan",
      "32 kishidan",
      "36 kishidan",
      "50 kishidan"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasining birinchi yo'nalishi qanday nomlanadi?",
    "options": [
      "Davlat va jamiyat qurilishi tizimini takomillashtirishning ustuvor yo'nalishlari",
      "Iqtisodiyotni rivojlantirish va liberallashtirishning ustuvor yo'nalishlari",
      "Qonun ustuvorligini ta'minlash va sud-huquq tizimini yanada isloh qilishning ustuvor yo'nalishlari",
      "Ijtimoiy sohani rivojlantirishning ustuvor yo'nalishlari"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasining ikkinchi yo'nalishi qanday nomlanadi?",
    "options": [
      "Qonun ustuvorligini ta'minlash va sud-huquq tizimini yanada isloh qilishning ustuvor yo'nalishlari",
      "Davlat va jamiyat qurilishi tizimini takomillashtirishning ustuvor yo'nalishlari",
      "Iqtisodiyotni rivojlantirish va liberallashtirishning ustuvor yo'nalishlari",
      "Xavfsizlik, millatlararo totuvlik va diniy bag'rikenglikni ta'minlash sohasidagi ustuvor yo'nalishlar"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasining uchinchi yo'nalishi qanday nomlanadi?",
    "options": [
      "Iqtisodiyotni rivojlantirish va liberallashtirishning ustuvor yo'nalishlari",
      "Ijtimoiy sohani rivojlantirishning ustuvor yo'nalishlari",
      "Qonun ustuvorligini ta'minlash va sud-huquq tizimini yanada isloh qilishning ustuvor yo'nalishlari",
      "Davlat va jamiyat qurilishi tizimini takomillashtirishning ustuvor yo'nalishlari"
    ],
    "correct": 0
  },
  {
    "q": "Harakatlar strategiyasining to'rtinchi yo'nalishi qanday nomlanadi?",
    "options": [
      "Ijtimoiy sohani rivojlantirishning ustuvor yo'nalishlari",
      "Iqtisodiyotni rivojlantirish va liberallashtirishning ustuvor yo'nalishlari",
      "Xavfsizlik, millatlararo totuvlik va diniy bag'rikenglikni ta'minlash sohasidagi ustuvor yo'nalishlar",
      "Qonun ustuvorligini ta'minlash va sud-huquq tizimini yanada isloh qilishning ustuvor yo'nalishlari"
    ],
    "correct": 0
  },
  {
    "q": "Toshkentdagi Soka universitetiga kim haykali o'rnatildi?",
    "options": [
      "Alisher Navoiy",
      "Amir Temur",
      "Mirzo Ulug'bek",
      "Kamoliddin Behzod"
    ],
    "correct": 0
  },
  {
    "q": "Hozirda O'zbekistonda nechta diniy konfessiya faoliyat yuritmoqda?",
    "options": [
      "16 ta",
      "9 ta",
      "12 ta",
      "22 ta"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston SSR Oliy Kengashi qachon o'zbek tiliga davlat tili maqomini berdi?",
    "options": [
      "1989-yil 21-oktyabrda",
      "1988-yil 14-noyabrda",
      "1990-yil 20-iyunda",
      "1991-yil 31-avgustda"
    ],
    "correct": 0
  },
  {
    "q": "Shavkat Mirziyoyev BMT Bosh Assambleyasining qaysi sessiyasida ilk marotaba nutq so'zladi?",
    "options": [
      "72-sessiyasida",
      "70-sessiyasida",
      "74-sessiyasida",
      "75-sessiyasida"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug'bek tavalludining qaysi yilligi 1994-yilda YUNESKO qarorgohi Parijda nishonlandi?",
    "options": [
      "600-yilligi",
      "550-yilligi",
      "650-yilligi",
      "500-yilligi"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Prezidentining farmoni asosida Islom akademiyasi qachon tashkil qilindi?",
    "options": [
      "2017-yil 15-dekabrda",
      "2016-yil 28-fevralda",
      "2018-yil 14-avgustda",
      "2019-yil 30-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "2024-yil O'zbekistonda qanday yil deb e'lon qilindi?",
    "options": [
      "Yoshlar va biznesni qo'llab-quvvatlash yili",
      "Insonga e'tibor va sifatli ta'lim yili",
      "Insonparvarlik va sog'lom avlod yili",
      "Ilm-fan, ta'lim va raqamli iqtisodiyot yili"
    ],
    "correct": 0
  },
  {
    "q": "Qosim shayx Azizon xonaqosi qaysi shaharda joylashgan?",
    "options": [
      "Navoiy viloyatining Karmana shahrida",
      "Buxoro viloyatining G'ijduvon shahrida",
      "Samarqand viloyatining Kattaqo'rg'on shahrida",
      "Qashqadaryo viloyatining Shahrisabz shahrida"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda maydoni jihatdan eng katta viloyat qaysi (Qoraqalpog'istondan tashqari)?",
    "options": [
      "Navoiy viloyati",
      "Qashqadaryo viloyati",
      "Surxondaryo viloyati",
      "Buxoro viloyati"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistondagi hozirgi qishloq xo'jaligidagi etakchi xo'jalik shakli qaysi?",
    "options": [
      "Fermer xo'jaliklari",
      "Kolxozlar",
      "Ijarachi xo'jaliklar",
      "Shirkat xo'jaliklari"
    ],
    "correct": 0
  },
  {
    "q": "Hadis ilmida shuhrat qozongan buyuk alloma kim?",
    "options": [
      "Imom al-Buxoriy",
      "Ahmad al-Farg'oniy",
      "Al-Xorazmiy",
      "Abu Ali ibn Sino"
    ],
    "correct": 0
  },
  {
    "q": "Mo'g'ullarga qarshi qahramonona kurashgan tarixiy shaxs kim?",
    "options": [
      "Jaloliddin Manguberdi",
      "Muqanna",
      "Spitamen",
      "Bahromshoh G'aznaviy"
    ],
    "correct": 0
  },
  {
    "q": "Jaloliddin Manguberdi haykali qaysi shaharda o'rnatilgan?",
    "options": [
      "Xorazm viloyatining Urganch shahrida",
      "Toshkent shahrida, Amir Temur xiyobonida",
      "Xiva shahrida, Ichan qal'a yonida",
      "Nukus shahrida, markaziy maydonda"
    ],
    "correct": 0
  },
  {
    "q": "Sh. Mirziyoyevning ilk ma'ruzasi BMT Bosh Assambleyasining qaysi sessiyasida bo'ldi?",
    "options": [
      "72-sessiyasida",
      "68-sessiyasida",
      "70-sessiyasida",
      "74-sessiyasida"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro madaniy yutuqlarni targ'ib etuvchi xalqaro tashkilot qaysi?",
    "options": [
      "YuNESKO",
      "UNICEF",
      "JSST (JSST)",
      "Jahon banki"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston YuNESKO tashkiloti a'zoligiga qachon qabul qilindi?",
    "options": [
      "1993-yil 26-oktyabrda",
      "1992-yil 2-martda",
      "1994-yil 14-iyunda",
      "1995-yil 18-fevralda"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi yildan boshlab 31-avgust qatag'on qurbonlarini yod etish kuni sifatida nishonlanadigan bo'ldi?",
    "options": [
      "2001-yildan",
      "1998-yildan",
      "2003-yildan",
      "2005-yildan"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug'bek tavalludining necha yilligini nishonlash YuNESKO dasturiga kiritildi?",
    "options": [
      "600-yilligini",
      "550-yilligini",
      "500-yilligini",
      "650-yilligini"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning qaysi shaharlari 1997-yili YuNESKOning jahon madaniy qadriyatlari ro'yxatiga kiritildi?",
    "options": [
      "Buxoro va Xiva",
      "Samarqand va Buxoro",
      "Toshkent va Samarqand",
      "Xiva va Shahrisabz"
    ],
    "correct": 0
  },
  {
    "q": "YuNESKO qaroriga binoan O'zbekistondan nechta tarixiy ob'ekt jahon madaniyati ro'yxatiga kiritildi?",
    "options": [
      "5 ta moddiy ob'ekt",
      "3 ta moddiy ob'ekt",
      "7 ta moddiy ob'ekt",
      "4 ta moddiy ob'ekt"
    ],
    "correct": 0
  },
  {
    "q": "YuNESKO qaroriga binoan O'zbekistonning qaysi viloyatida Markaziy Osiyo tadqiqotlari instituti tashkil etildi?",
    "options": [
      "Samarqand viloyatida",
      "Buxoro viloyatida",
      "Toshkent viloyatida",
      "Namangan viloyatida"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temurning nomining xalqimizga qaytarilishi kimning nomi bilan bog'liq?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulaziz Komilov",
      "Inomjon Majidov"
    ],
    "correct": 0
  },
  {
    "q": "YuNESKO loyihasi doirasida Amir Temur tavalludining 660 yilligi xalqaro miqyosda qachon nishonlandi?",
    "options": [
      "1996-yilda",
      "1994-yilda",
      "1998-yilda",
      "2000-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur tavalludining 660 yilligi tantanalari xalqaro miqyosda qaysi shaharda nishonlandi?",
    "options": [
      "Parijda va O'zbekiston shaharlarida",
      "Samarqandda va Moskvada",
      "Toshkentda va Berlinda",
      "Buxoroda va Nyu-Yorkda"
    ],
    "correct": 0
  },
  {
    "q": "Qachondan boshlab O'zbekistonning tashqi siyosatida Markaziy Osiyo davlatlari asosiy o'rin egallay boshladi?",
    "options": [
      "2016-yil oxiri va 2017-yildan boshlab",
      "2010-yildan boshlab",
      "2013-yildan boshlab",
      "2018-yildan boshlab"
    ],
    "correct": 0
  },
  {
    "q": "Samarqandda Amir Temur haykali qachon ochildi?",
    "options": [
      "1996-yilda",
      "1993-yilda",
      "1998-yilda",
      "2001-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Toshkentda Amir Temur haykali qachon ochildi?",
    "options": [
      "1993-yil 31-avgustda",
      "1991-yil 1-sentyabrda",
      "1996-yil 18-oktyabrda",
      "1994-yil 4-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "1996-yili qaysi shaharlar 'Amir Temur' ordeni bilan mukofotlandi?",
    "options": [
      "Samarqand va Shahrisabz",
      "Toshkent va Samarqand",
      "Buxoro va Xiva",
      "Shahrisabz va Buxoro"
    ],
    "correct": 0
  },
  {
    "q": "Hamid Olimjon va Zulfiya xotirasiga bag'ishlangan yodgorlik majmuasi qayerda ochildi?",
    "options": [
      "Jizzax shahrida",
      "Toshkent shahrida",
      "Samarqand shahrida",
      "Namangan shahrida"
    ],
    "correct": 0
  },
  {
    "q": "Prezident Sh. Mirziyoyev tashabbusi bilan Jizzax tumaniga Sharof Rashidov nomi qachon berildi?",
    "options": [
      "2016-yil 23-dekabrda",
      "2017-yil 7-aprelda",
      "2015-yil 14-noyabrda",
      "2018-yil 30-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "Qachondan Qurbon va Ramazon hayit kunlarini bayram va dam olish kuni deb e'lon qilish haqida qaror qabul qilindi?",
    "options": [
      "1990-yildan boshlab",
      "1992-yildan boshlab",
      "1989-yildan boshlab",
      "1991-yildan boshlab"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasining Birinchi Prezidenti Islom Karimov yashab faoliyat ko'rsatgan yillarni toping?",
    "options": [
      "1938–2016-yillar",
      "1940–2016-yillar",
      "1936–2016-yillar",
      "1938–2017-yillar"
    ],
    "correct": 0
  },
  {
    "q": "Mansabdor shaxslarning vakolatlari va huquqlardan o'zlarining shaxsiy manfaatlarini ko'zlab qonunchilikka zid ravishda foydalanishi nima deyiladi?",
    "options": [
      "Korrupsiya",
      "Firibgarlik",
      "Suiiste'mol",
      "Mansabdan foydalanish"
    ],
    "correct": 0
  },
  {
    "q": "1992-yil yurtimizda ilk bor nashr qilingan kitobni toping?",
    "options": [
      "O'zbekiston Respublikasining Konstitutsiyasi",
      "Mustaqillik deklaratsiyasi",
      "O'zbek tilining imlo qoidalari",
      "Islom Karimovning 'O'zbekiston: milliy istiqlol, iqtisod, siyosat, mafkura' asari"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda oliy ta'limdan keyingi ta'lim shaklini toping?",
    "options": [
      "Tayanch doktorantura (PhD) va Doktorantura (DSc)",
      "Magistratura va aspirantura",
      "Ordinatura va dissertantura",
      "Ilmiy stajirovka va doktorantura"
    ],
    "correct": 0
  },
  {
    "q": "Yurtimizda 2003-yili qaysi vatandoshimiz tavalludining 900 yilligi keng nishonlandi?",
    "options": [
      "Xoja Abdulxoliq G'ijduvoniy",
      "Ahmad Yassaviy",
      "Bahouddin Naqshband",
      "Sulaymon Boqirg'oniy"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning ilk avtomobil zavodi nomini toping?",
    "options": [
      "'O'zDEUavto' (UzDaewooAuto)",
      "'O'zAvto' (UzAuto)",
      "'AsiaAvto' O'zbekiston",
      "'NamAvto' (NamAuto)"
    ],
    "correct": 0
  },
  {
    "q": "'Korrupsiyaga qarshi kurashish to'g'risida'gi Qonun qachon qabul qilingan?",
    "options": [
      "2017-yil 3-yanvarda",
      "2016-yil 24-noyabrda",
      "2015-yil 18-avgustda",
      "2018-yil 7-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "Bugungi kunda mamlakatimizda nechta teatr faoliyat ko'rsatadi?",
    "options": [
      "40 ga yaqin (rasmiy davlat tizimida 39 ta)",
      "25 ta",
      "55 ta",
      "32 ta"
    ],
    "correct": 0
  },
  {
    "q": "Kamolot yoshlar ijtimoiy harakati qachon tugatildi?",
    "options": [
      "2017-yil 30-iyunda",
      "2016-yil 14-avgustda",
      "2018-yil 1-yanvarda",
      "2017-yil 1-sentyabrda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston yoshlar ittifoqi qachon tashkil topgan?",
    "options": [
      "2017-yil 30-iyunda",
      "2016-yil 28-dekabrda",
      "2018-yil 7-fevralda",
      "2019-yil 1-martda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda aholining necha foizi 30 yoshgacha bo'lganlarni tashkil etadi?",
    "options": [
      "Taxminan 60 foizini",
      "Taxminan 50 foizini",
      "Taxminan 55 foizini",
      "Taxminan 65 foizini"
    ],
    "correct": 0
  },
  {
    "q": "'Umid' jamg'armasini tashkil etish bo'yicha prezident farmoni qachon e'lon qilindi?",
    "options": [
      "1997-yil 7-yanvarda",
      "1995-yil 12-martda",
      "1998-yil 22-avgustda",
      "1999-yil 10-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "2016-yil o'zbek xalqining qanday merosi YuNESKOning nomoddiy madaniy meros ro'yxatiga kiritildi?",
    "options": [
      "Palov madaniyati va an'anasi hamda Navro'z bayrami",
      "Shashmaqom va lapar san'ati",
      "Navroz va Shashmaqom",
      "O'zbek milliy o'yinlari va urf-odatlari"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning eng yangi tarix fani qaysi davrlar tarixini o'rganadi?",
    "options": [
      "1991-yil 31-avgustdan hozirgi kungacha bo'lgan davrni",
      "1985-yildan hozirgi kungacha bo'lgan davrni",
      "1991-yildan 2010-yilgacha bo'lgan davrni",
      "1989-yildan hozirgi kungacha bo'lgan davrni"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning eng yangi tarixi davriy jihatdan necha bosqichdan iborat?",
    "options": [
      "2 ta bosqichdan",
      "3 ta bosqichdan",
      "4 ta bosqichdan",
      "1 ta bosqichdan"
    ],
    "correct": 0
  },
  {
    "q": "Respublikamizdagi harbiy akademik litseylarga 2017-yildan boshlab qanday nom berildi?",
    "options": [
      "'Temurbeklar maktabi'",
      "'Harbiy litseylar'",
      "'Zafar maktabi'",
      "'Qo'mondonlik kolleji'"
    ],
    "correct": 0
  },
  {
    "q": "Kamoliddin Behzod qaysi soha rivojlanishida katta hissa qo'shgan?",
    "options": [
      "Tasviriy san'at (minyatura maktabi)",
      "Me'morchilik va muhandislik",
      "Astronomiya va matematika",
      "Adabiyot va she'riyat"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston davlat jismoniy tarbiya instituti qayerga ko'chirildi?",
    "options": [
      "Toshkent viloyati, Chirchiq shahriga",
      "Samarqand shahriga",
      "Namangan shahriga",
      "Angren shahriga"
    ],
    "correct": 0
  },
  {
    "q": "'Al-jome' as-saxih' asarining muallifini toping?",
    "options": [
      "Imom al-Buxoriy",
      "Ahmad al-Farg'oniy",
      "Al-Xorazmiy",
      "Abu Ali ibn Sino"
    ],
    "correct": 0
  },
  {
    "q": "'Davlat mulkini boshqarish va xususiylashtirish davlat qo'mitasi' qachon tuzildi?",
    "options": [
      "1992-yil fevralda",
      "1991-yil noyabrda",
      "1993-yil aprelda",
      "1994-yil yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "I.A.Karimov ketma-ket necha marotaba Prezidentlik saylovida g'alaba qilgan?",
    "options": [
      "4 marotaba",
      "3 marotaba",
      "5 marotaba",
      "2 marotaba"
    ],
    "correct": 0
  },
  {
    "q": "Afg'oniston muammosini bartaraf etish maqsadida tashkil etilgan '6+2' muloqot guruhini tuzish tashabbuskori kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulaziz Komilov",
      "Bahodir Choriyev"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning AQSHdagi elchixonasi qachon ochilgan?",
    "options": [
      "1993-yil fevralda",
      "1992-yil dekabrda",
      "1994-yil martda",
      "1993-yil oktyabrda"
    ],
    "correct": 0
  },
  {
    "q": "AQSHning O'zbekistondagi elchixonasi qachon ochilgan?",
    "options": [
      "1992-yil martda",
      "1991-yil dekabrda",
      "1993-yil yanvarda",
      "1992-yil iyunda"
    ],
    "correct": 0
  },
  {
    "q": "Toshkentda Markaziy Osiyo Hamdo'stligi (MOH) qachon tashkil etildi?",
    "options": [
      "1993-yil yanvarda",
      "1991-yil dekabrda",
      "1994-yil martda",
      "1995-yil fevralda"
    ],
    "correct": 0
  },
  {
    "q": "'Tarixga murojaat qilar ekanmiz, bu xalq xotirasi ekanligini nazarda tutishimiz kerak...' ushbu fikrlar muallifi kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Mahmudxo'ja Behbudiy",
      "Abdulla Avloniy"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi shahardagi 'Texnik global' korxonasida Samsung brendi ostida yiliga 150 ming televizor ishlab chiqariladi?",
    "options": [
      "Jizzax shahridagi",
      "Angren shahridagi",
      "Chirchiq shahridagi",
      "Navoiy shahridagi"
    ],
    "correct": 0
  },
  {
    "q": "1991-yil dekabrdan 1992-yil iyul oyigacha O'zbekistonni nechta davlat tan olgan?",
    "options": [
      "30 dan ortiq davlat",
      "20 dan ortiq davlat",
      "40 dan ortiq davlat",
      "50 dan ortiq davlat"
    ],
    "correct": 0
  },
  {
    "q": "Shanxay hamkorlik tashkiloti qachon tuzilgan?",
    "options": [
      "2001-yil 15-iyunda",
      "1999-yil 26-aprelda",
      "2003-yil 7-iyunda",
      "2000-yil 14-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "Bugun O'zbekistonda nechta milliy-madaniy markazlar mavjud?",
    "options": [
      "150 ga yaqin (140 dan ziyod)",
      "80 ga yaqin",
      "200 dan ortiq",
      "100 ga yaqin"
    ],
    "correct": 0
  },
  {
    "q": "Namanganda kimning xotirasini abadiylashtirish bo'yicha yirik tadbirlar o'tkazildi?",
    "options": [
      "Boborahim Mashrab",
      "Usmon Nosir",
      "Muqimiy",
      "Hamza Hakimzoda Niyoziy"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida Mahmud Zamaxshariy necha yilligi nishonlangan edi?",
    "options": [
      "920-yilligi",
      "900-yilligi",
      "950-yilligi",
      "800-yilligi"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida Najmiddin Kubro necha yilligi nishonlangan edi?",
    "options": [
      "825-yilligi",
      "800-yilligi",
      "850-yilligi",
      "750-yilligi"
    ],
    "correct": 0
  },
  {
    "q": "Zulfiya nomidagi davlat mukofoti qachon qabul qilingan?",
    "options": [
      "1999-yil 10-iyunda",
      "1997-yil 23-martda",
      "2001-yil 8-martda",
      "1995-yil 14-dekabrda"
    ],
    "correct": 0
  },
  {
    "q": "Qur'oni Karim ilk bor 1992-yil kim tomonidan o'zbek tiliga tarjima qilindi?",
    "options": [
      "Alouddin Mansur",
      "Shayx Abdulaziz Mansur",
      "Abdulaziz Zokirov",
      "Muhammad Sodiq Muhammad Yusuf"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Konstitutsiyasiga o'zgartirishlar kiritish bo'yicha umumxalq referendumi qachon o'tkazildi?",
    "options": [
      "2023-yil 30-aprelda",
      "2022-yil 27-iyunda",
      "2021-yil 14-fevralda",
      "2024-yil 1-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonni rivojlantirish bo'yicha 'Harakatlar strategiyasi' qaysi yillarga mo'ljallangan?",
    "options": [
      "2017–2021-yillarga",
      "2016–2020-yillarga",
      "2018–2022-yillarga",
      "2019–2023-yillarga"
    ],
    "correct": 0
  },
  {
    "q": "'G'aflatda yotgan xalqni uyg'otish uchun, avvalo, uning tarixini uyg'ot' ushbu fikrlar muallifi kim?",
    "options": [
      "Mahmudxo'ja Behbudiy",
      "Abdulla Avloniy",
      "Munavvar qori",
      "Abdurauf Fitrat"
    ],
    "correct": 0
  },
  {
    "q": "Sh.M.Mirziyoyevning 2017-yil 22-dekabrdagi Murojaatnomasida qaysi muhim fikr bayon qilingan?",
    "options": [
      "Milliy o'zligimizni anglash va tarixni o'rganish, ilmiy tadqiqotlarni kuchaytirish zarurligi",
      "2018-yilni qanday yil deb nomlash masalasi",
      "Sud-huquq tizimini isloh qilish dasturi",
      "Parlament tizimini qayta tashkil etish zarurligi"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston tarixini 7 ta davrga bo'lib o'rganish maqsadga muvofiqligi qaysi asarda ilgari surilgan?",
    "options": [
      "'O'zbekiston tarixi' fundamental konsepsiyasi va darsliklarida",
      "I.Karimovning 'O'zbekiston: milliy istiqlol...' asarida",
      "Sh.Mirziyoyevning 'Buyuk kelajagimizni...' asarida",
      "'Tarixiy xotirasiz kelajak yo'q' risolasida"
    ],
    "correct": 0
  },
  {
    "q": "'Tarixiy xotirasiz kelajak yo'q' risolasi qachon chop etilgan?",
    "options": [
      "1998-yilda",
      "1995-yilda",
      "2000-yilda",
      "1997-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Ilmiy o'rganishning eng qulay usullari, g'oyalar va nazariyalar majmuidan iborat fan qanday nomlanadi?",
    "options": [
      "Metodologiya",
      "Epistemologiya",
      "Sinergetika",
      "Ontologiya"
    ],
    "correct": 0
  },
  {
    "q": "Dunyoda mavjud 3,5 mingdan ziyod xalqlarning faqat qanchasi o'z davlatchiligiga ega?",
    "options": [
      "200 ga yaqini",
      "100 ga yaqini",
      "300 ga yaqini",
      "150 ga yaqini"
    ],
    "correct": 0
  },
  {
    "q": "'Kimki tutmas qalbida tarixini...' to'rtligining muallifi kim?",
    "options": [
      "Ibrohim Yusupov",
      "Erkin Vohidov",
      "Abdulla Oripov",
      "Muhammad Yusuf"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonni yanada rivojlantirishga mo'ljallangan 'Taraqqiyot strategiyasi' qaysi yillarga mo'ljallangan?",
    "options": [
      "2022–2026-yillarga",
      "2020–2025-yillarga",
      "2021–2025-yillarga",
      "2023–2027-yillarga"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning eng yangi tarixi bo'yicha Jamoatchilik kengashi tashkil etish to'g'risidagi Prezident qarori qachon qabul qilingan?",
    "options": [
      "2012-yil 27-yanvarda",
      "2010-yil 14-martda",
      "2014-yil 22-avgustda",
      "2011-yil 3-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "'Davlat – huquqqa rioya etish, u umum manfaati yo'lida tuzilgan erkin kishilarning mukammal ittifoqi' ushbu fikrlar muallifi kim?",
    "options": [
      "Sitseron",
      "Aristotel",
      "Platon",
      "Monteskye"
    ],
    "correct": 0
  },
  {
    "q": "O'zbek xalqi ajdodlarining ilk davlatchilik tizimiga o'tish jarayoni qaysi davrdan boshlangan?",
    "options": [
      "Bronza (sopol) davridan",
      "Tosh davridan",
      "Temir davridan",
      "Eneolit davridan"
    ],
    "correct": 0
  },
  {
    "q": "Yoshligida abjir, jasur, otda chopish va kamon otishda tengi bo'lmagan, onasi sug'd, otasi sak qabilasidan bo'lgan shaxs kim?",
    "options": [
      "Spitamen",
      "Jaloliddin Manguberdi",
      "Muqanna",
      "Afrig'"
    ],
    "correct": 0
  },
  {
    "q": "Jadidchilik harakati dastlab qaysi hududda vujudga keldi?",
    "options": [
      "Turkiston o'lkasida va Qrimda",
      "Faqat Toshkent va Samarqandda",
      "Fors va Hindiston ta'sirida",
      "Buxoro amirligi hududida"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur 1395-yil 15-aprelda To'xtamish bilan qayerda jang qilib, uni yengdi?",
    "options": [
      "Terak daryosi bo'yida",
      "Volga daryosi bo'yida",
      "Don daryosi bo'yida",
      "Kura daryosi bo'yida"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur 1393-yil boshida Iroq tomonga yurish qilib olinmas deb atalgan qaysi qal'ani egalladi?",
    "options": [
      "Kalon (Qal'ai Safed) qal'asini",
      "Takrit qal'asini",
      "Mosul qal'asini",
      "Hillah qal'asini"
    ],
    "correct": 0
  },
  {
    "q": "Jaloliddin Manguberdi voyaga yetgach, otasi unga bergan hududlar qaysilar?",
    "options": [
      "G'azna, Bamiyon, G'or, Bo'st va Takinobod",
      "Xorazm, Urganch, Vazir va Ko'hna-Urgench",
      "Nishopur, Marv, Hirot va Balx",
      "Samarqand, Buxoro, Termiz va Kesh"
    ],
    "correct": 0
  },
  {
    "q": "'Men turk, arab tilidan bexabarman' degan fikr qaysi tarixiy shaxs haqida aytilgan?",
    "options": [
      "Jaloliddin Manguberdi",
      "Amir Temur",
      "Muqanna",
      "Spitamen"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston Respublikasining Davlat madhiyasi to'g'risida'gi qonun qachon qabul qilindi?",
    "options": [
      "1992-yil 10-dekabrda",
      "1991-yil 18-noyabrda",
      "1992-yil 2-iyulda",
      "1993-yil 4-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "Aleksandr Makedonskiy bostirib kirgan Tanais hozirgi qaysi hudud?",
    "options": [
      "Sirdaryo bo'yi",
      "Amudaryo bo'yi",
      "Zarafshon bo'yi",
      "Qashqadaryo bo'yi"
    ],
    "correct": 0
  },
  {
    "q": "1986-yilga kelib qaysi bayram bekor etilgan?",
    "options": [
      "Navro'z bayrami",
      "Qurbon hayit",
      "Ramazon hayit",
      "Mustaqillik bayrami"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonning 'Mustaqillik Deklaratsiyasi' qachon qabul qilindi?",
    "options": [
      "1990-yil 20-iyunda",
      "1991-yil 31-avgustda",
      "1991-yil 19-avgustda",
      "1990-yil 24-martda"
    ],
    "correct": 0
  },
  {
    "q": "1989-yil may-iyun oylarida O'zbekistonning qaysi hududida millatlararo mojarolar kelib chiqdi?",
    "options": [
      "Farg'ona viloyatida",
      "Toshkent viloyatida",
      "Namangan viloyatida",
      "Qoraqalpog'istonda"
    ],
    "correct": 0
  },
  {
    "q": "1988-yilda Toshkent shahrida nechta oliy o'quv yurti bo'lgan?",
    "options": [
      "19 ta oliy o'quv yurti",
      "12 ta oliy o'quv yurti",
      "25 ta oliy o'quv yurti",
      "16 ta oliy o'quv yurti"
    ],
    "correct": 0
  },
  {
    "q": "SSSRda 'Qayta qurish' siyosatining birinchi bosqichi qaysi yillarni o'z ichiga olgan?",
    "options": [
      "1985–1987-yillarni",
      "1983–1985-yillarni",
      "1987–1990-yillarni",
      "1986–1988-yillarni"
    ],
    "correct": 0
  },
  {
    "q": "Islom Karimov O'zbekiston SSR rahbari etib qachon saylandi?",
    "options": [
      "1989-yil 23-iyunda",
      "1988-yil 14-fevralda",
      "1990-yil 24-martda",
      "1989-yil 1-oktyabrda"
    ],
    "correct": 0
  },
  {
    "q": "Tojikistonning Leninobod viloyati hozirgi qaysi hududga to'g'ri keladi?",
    "options": [
      "Sog'd viloyatiga",
      "Xatlon viloyatiga",
      "Dushanbe viloyatiga",
      "VKAO hududiga"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston tarixida birinchi marta qachon Prezidentlik lavozimini ta'sis etish to'g'risida qaror qabul qilindi?",
    "options": [
      "1990-yil 24-martda",
      "1989-yil 23-iyunda",
      "1991-yil 31-avgustda",
      "1990-yil 20-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi yilda 'O'zbekiston Respublikasi davlat mustaqilligining asoslari to'g'risida'gi Qonun tasdiqlandi?",
    "options": [
      "1991-yil 31-avgustda",
      "1990-yil 20-iyunda",
      "1991-yil 19-avgustda",
      "1992-yil 8-dekabrda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston SSR Oliy Sovetining qaysi sessiyasida 'O'zbekiston SSRning Davlat tili haqida' Qonuni qabul qilingan?",
    "options": [
      "XI chaqiriq, XI sessiyasida",
      "X chaqiriq, IX sessiyasida",
      "XII chaqiriq, VIII sessiyasida",
      "XI chaqiriq, X sessiyasida"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbek tilining asosiy imlo qoidalarini tasdiqlash haqida'gi Vazirlar Mahkamasining qarori qachon e'lon qilingan?",
    "options": [
      "1995-yil 24-avgustda",
      "1993-yil 2-sentyabrda",
      "1997-yil 15-iyulda",
      "1996-yil 6-mayda"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston Respublikasining Davlat mustaqilligi to'g'risida'gi Qonun necha moddadan iborat?",
    "options": [
      "17 ta moddadan",
      "12 ta moddadan",
      "21 ta moddadan",
      "14 ta moddadan"
    ],
    "correct": 0
  },
  {
    "q": "1991-yil 29-dekabrda Prezidentlik saylovida Saloy Madaminov qaysi partiyadan nomzod etib ko'rsatilgan edi?",
    "options": [
      "'Erk' demokratik partiyasidan",
      "Xalq demokratik partiyasidan",
      "Adolat partiyasidan",
      "Milliy tiklanish partiyasidan"
    ],
    "correct": 0
  },
  {
    "q": "'Paxta ishi' deb atalgan siyosiy qatag'onlar davrida 1983-yilda tuzilgan tergov guruhining rahbarlari kim edi?",
    "options": [
      "T. Gdlyan va N. Ivanov",
      "Yu. Andropov va K. Chernenko",
      "V. Fedorchuk va G. Aliyev",
      "M. Gorbachyov va B. Yeltsin"
    ],
    "correct": 0
  },
  {
    "q": "Orol dengizi qurishiga asosiy sabab qilib nima ko'rsatiladi?",
    "options": [
      "Amudaryo va Sirdaryo suvlarining me'yordan ortiq va samarasiz sarflanishi",
      "Global iqlim isishi va muzliklarning erishi",
      "Orol bo'yidagi sanoat korxonalari chiqindilari",
      "Neft qazib olish natijasida suv osti qatlamlarining o'zgarishi"
    ],
    "correct": 0
  },
  {
    "q": "Farg'ona voqealari davrida O'zbekiston SSR davlat rahbari kim bo'lgan edi?",
    "options": [
      "Rafiq Nishonov",
      "Inoqboy O'rinboyev",
      "Islom Karimov",
      "Nuriddin Muxtarov"
    ],
    "correct": 0
  },
  {
    "q": "1989-yil Farg'ona voqealari davrida qaysi etnik birliklar o'rtasida nizo kelib chiqqan edi?",
    "options": [
      "O'zbeklar va mesxeti turklari",
      "O'zbeklar va qirg'izlar",
      "O'zbeklar va tojiklar",
      "O'zbeklar va qozoqlar"
    ],
    "correct": 0
  },
  {
    "q": "Sobiq Sovet Ittifoqi davrida O'zbekiston SSRda asosiy davlat tili qaysi til bo'lgan?",
    "options": [
      "Rus tili",
      "O'zbek tili",
      "Fors tili",
      "Turk tili"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston SSR birinchi prezidenti kim bo'lgan?",
    "options": [
      "Islom Abdug'aniyevich Karimov",
      "Rafiq Nishonov",
      "Shukrullo Mirsaidov",
      "Inoqboy O'rinboyev"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda fuqarolik jamiyatini qurish va rivojlantirishga oid konseptual hujjatlarning qabul qilinishi qaysi yillarni o'z ichiga oladi?",
    "options": [
      "2010–2020-yillarni",
      "2005–2015-yillarni",
      "2015–2025-yillarni",
      "2000–2010-yillarni"
    ],
    "correct": 0
  },
  {
    "q": "'Xalq davlat idoralariga emas, davlat idoralari xalqimizga xizmat qilishi kerak' prinsipini kim ilgari surdi?",
    "options": [
      "Shavkat Mirziyoyev",
      "Islom Karimov",
      "Nigmatilla Yuldoshev",
      "Abdulaziz Komilov"
    ],
    "correct": 0
  },
  {
    "q": "Bozor munosabatlariga o'tishning tamoyillarini kim taklif qilgan edi?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulhoshim Muxtarov",
      "Baxtiyor Hamidov"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston mustaqillikka erishgandan so'ng tashkil qilingan birinchi siyosiy partiya qaysi edi?",
    "options": [
      "O'zbekiston Xalq demokratik partiyasi (XDP)",
      "Adolat sotsial-demokratik partiyasi",
      "Milliy tiklanish demokratik partiyasi",
      "'Erk' demokratik partiyasi"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Advokatlar palatasi qaysi yilda tuzildi?",
    "options": [
      "2008-yilda",
      "2004-yilda",
      "2012-yilda",
      "2006-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Mamlakatimizda qachondan boshlab jinoiy jazo turi sifatida o'lim jazosi bekor qilindi?",
    "options": [
      "2008-yil 1-yanvardan boshlab",
      "2005-yil 1-avgustdan boshlab",
      "2010-yil 1-yanvardan boshlab",
      "2006-yil 1-iyuldan boshlab"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi kunda parlamentda qancha partiya ishtirok etmoqda?",
    "options": [
      "5 ta siyosiy partiya",
      "3 ta siyosiy partiya",
      "4 ta siyosiy partiya",
      "6 ta siyosiy partiya"
    ],
    "correct": 0
  },
  {
    "q": "Mamlakat rahbarining mahalliy boshqaruv tizimiga 'hokim yordamchisi' lavozimi joriy etilishi qachondan boshlandi?",
    "options": [
      "2022-yil 1-yanvardan boshlab",
      "2020-yil 1-sentyabrdan boshlab",
      "2021-yil 1-martdan boshlab",
      "2023-yil 1-yanvardan boshlab"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi dastur oldinroq e'lon qilingan?",
    "options": [
      "'Harakatlar strategiyasi' (2017-yil)",
      "'Taraqqiyot strategiyasi' (2022-yil)",
      "'O'zbekiston – 2030' strategiyasi (2023-yil)",
      "Barcha bir vaqtda e'lon qilingan"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi paytda O'zbekistonda qancha o'zini o'zi boshqarish organi (mahalla) faoliyat ko'rsatmoqda?",
    "options": [
      "9 500 dan ortiq",
      "6 000 ga yaqin",
      "12 000 dan ortiq",
      "7 500 ga yaqin"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston – bozor munosabatlariga o'tishning o'ziga xos yo'li' nomli asarning muallifi kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulla Aripov",
      "Baxtiyor Hamidov"
    ],
    "correct": 0
  },
  {
    "q": "Milliy valyuta – so'm Prezident farmoni va Vazirlar Mahkamasining qaroriga binoan qachondan muomalaga kiritildi?",
    "options": [
      "1994-yil 1-iyuldan boshlab",
      "1993-yil 15-noyabrdan boshlab",
      "1995-yil 1-yanvardan boshlab",
      "1992-yil 1-oktyabrdan boshlab"
    ],
    "correct": 0
  },
  {
    "q": "Mamlakat rahbari tomonidan 2019-yil O'zbekistonda qanday yil deb e'lon qilindi?",
    "options": [
      "'Faol investitsiyalar va ijtimoiy rivojlanish yili'",
      "'Ilm-ma'rifat va raqamli iqtisodiyot yili'",
      "'Yoshlarni qo'llab-quvvatlash yili'",
      "'Kichik biznes yili'"
    ],
    "correct": 0
  },
  {
    "q": "Sovet Ittifoqi davrida O'zbekiston iqtisodiyoti qanday sohaga asoslangan edi?",
    "options": [
      "Agrar sohaga — paxta yakkahokimligiga va xomashyo yetkazib berishga",
      "Og'ir sanoat va metallurgiyaga",
      "Neft va gaz qazib olish sanoatiga",
      "Harbiy-sanoat kompleksiga"
    ],
    "correct": 0
  },
  {
    "q": "1992-yilda qaysi davlat bilan hamkorlikda O'zbekistonda avtomobil ishlab chiqaruvchi korxona barpo etildi?",
    "options": [
      "Janubiy Koreya (Daewoo korporatsiyasi bilan)",
      "Yaponiya (Toyota korporatsiyasi bilan)",
      "Germaniya (Volkswagen korporatsiyasi bilan)",
      "Italiya (FIAT korporatsiyasi bilan)"
    ],
    "correct": 0
  },
  {
    "q": "Sho'rtan gaz-kimyo majmuasi qachon ishga tushirildi?",
    "options": [
      "2001-yil dekabr oyida",
      "1999-yil may oyida",
      "2003-yil mart oyida",
      "2000-yil avgustda"
    ],
    "correct": 0
  },
  {
    "q": "2017-yilda Jahon bankining 'Doing Business' reytingida O'zbekiston 190 davlat ichidan nechinchi o'rinni egallagan?",
    "options": [
      "74-o'rinni",
      "55-o'rinni",
      "87-o'rinni",
      "62-o'rinni"
    ],
    "correct": 0
  },
  {
    "q": "'Tanqidiy tahlil, qat'iy tartib-intizom va shaxsiy javobgarlik...' nomli kitob muallifi kim?",
    "options": [
      "Shavkat Mirziyoyev",
      "Islom Karimov",
      "Rustam Azimov",
      "Abdulla Aripov"
    ],
    "correct": 0
  },
  {
    "q": "So'm qisman konvertatsiyalanadigan valyuta maqomiga qachon ko'tarildi?",
    "options": [
      "2003-yil 15-oktyabrdan (XVJ Bitimining 8-moddasi qabul qilingandan so'ng)",
      "2000-yil 1-yanvardan",
      "2005-yil 1-avgustdan",
      "2001-yil 14-maydan"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda ilk bor so'mdagi plastik kartochkalar qachon paydo bo'lgan?",
    "options": [
      "2004-yilda",
      "2000-yilda",
      "2007-yilda",
      "2002-yilda"
    ],
    "correct": 0
  },
  {
    "q": "1997-yil O'zbekistonda qanday yil deb nomlangan?",
    "options": [
      "'Inson manfaatlari yili'",
      "'Mustaqillik yili'",
      "'Ma'naviyat yili'",
      "'Ta'lim yili'"
    ],
    "correct": 0
  },
  {
    "q": "'Kamolot' yoshlar ijtimoiy harakati Yoshlar ittifoqiga qachon aylantirildi?",
    "options": [
      "2017-yil 30-iyunda",
      "2016-yil 28-dekabrda",
      "2018-yil 1-yanvarda",
      "2017-yil 1-oktyabrda"
    ],
    "correct": 0
  },
  {
    "q": "2003-yil 31-oktyabrda BMT tomonidan qanday hujjat qabul qilingan?",
    "options": [
      "BMTning Korrupsiyaga qarshi Konvensiyasi",
      "BMTning Terrorizimga qarshi Konvensiyasi",
      "BMTning Inson huquqlari Deklaratsiyasi",
      "BMTning Bolalar huquqlari Konvensiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Oliy Majlisning Inson huquqlari bo'yicha Vakili qanday nomlanadi?",
    "options": [
      "Ombudsman",
      "Prokolor",
      "Mediator",
      "Advokat"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston Respublikasining davlat gerbi to'g'risida'gi qonun qachon qabul qilindi?",
    "options": [
      "1992-yil 2-iyulda",
      "1991-yil 18-noyabrda",
      "1993-yil 4-martda",
      "1992-yil 8-dekabrda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda qachon Korrupsiyaga qarshi kurashish agentligi tashkil etildi?",
    "options": [
      "2020-yil 29-iyunda (Prezident farmoniga binoan)",
      "2018-yil 14-mayda",
      "2017-yil 3-yanvarda",
      "2019-yil 7-oktyabrda"
    ],
    "correct": 0
  },
  {
    "q": "1999-yil 27-yanvarda Yevropa Kengashi tomonidan qanday hujjat qabul qilingan?",
    "options": [
      "Korrupsiya uchun jinoiy javobgarlik to'g'risidagi Konvensiya",
      "Terrorizimga qarshi kurash Konvensiyasi",
      "Inson huquqlari va asosiy erkinliklar to'g'risidagi Konvensiya",
      "Fuqarolik va siyosiy huquqlar to'g'risidagi Pakt"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi tomonidan 'Korrupsiyaga qarshi kurashish to'g'risida'gi Qonun qachon qabul qilindi?",
    "options": [
      "2016-yil 24-noyabrda",
      "2017-yil 3-yanvarda",
      "2015-yil 18-avgustda",
      "2016-yil 13-dekabrda"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Korrupsiyaga qarshi Konvensiyasi O'zbekiston tomonidan qachon ratifikatsiya qilingan?",
    "options": [
      "2008-yil 7-iyulda",
      "2005-yil 14-martda",
      "2010-yil 22-oktyabrda",
      "2006-yil 30-mayda"
    ],
    "correct": 0
  },
  {
    "q": "'Jamiyatimizda korrupsiya illati o'zining turli ko'rinishlari bilan taraqqiyotimizga g'ov bo'lmoqda...' ushbu fikrlar kim tomonidan aytilgan?",
    "options": [
      "Shavkat Mirziyoyev",
      "Islom Karimov",
      "Abdulaziz Komilov",
      "Alisher Ergashev"
    ],
    "correct": 0
  },
  {
    "q": "'Yuksak ma'naviyat – yengilmas kuch' asari muallifi kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulla Oripov",
      "Erkin Vohidov"
    ],
    "correct": 0
  },
  {
    "q": "I.Karimovning farmoni asosida 'Ma'naviyat va ma'rifat' jamoatchilik markazi qachon tashkil etildi?",
    "options": [
      "1994-yil 23-aprelda",
      "1992-yil 14-iyunda",
      "1996-yil 7-martda",
      "1993-yil 30-avgustda"
    ],
    "correct": 0
  },
  {
    "q": "Birinchi uyg'onish davri (Sharq Renessansi) qaysi davrlarni o'z ichiga oladi?",
    "options": [
      "IX–XII asrlarni",
      "VI–IX asrlarni",
      "XI–XIV asrlarni",
      "X–XIII asrlarni"
    ],
    "correct": 0
  },
  {
    "q": "Ikkinchi uyg'onish davri qaysi davrlarni o'z ichiga oladi?",
    "options": [
      "XIV asrning ikkinchi yarmi – XVI asrlarni (Temuriylar davri)",
      "XIII–XV asrlarni",
      "XII–XIV asrlarni",
      "XV–XVII asrlarni"
    ],
    "correct": 0
  },
  {
    "q": "1993-yil O'zbekistonda qaysi buyuk allomaning 510 yillik yubileyi nishonlangan?",
    "options": [
      "Zahiriddin Muhammad Boburning",
      "Alisher Navoiyning",
      "Mirzo Ulug'bekning",
      "Kamoliddin Behzodning"
    ],
    "correct": 0
  },
  {
    "q": "YuNESKO tomonidan nechinchi yil 'Amir Temur yili' deb e'lon qilingan?",
    "options": [
      "1996-yil",
      "1994-yil",
      "1998-yil",
      "1997-yil"
    ],
    "correct": 0
  },
  {
    "q": "'Xavfsizlik va barqaror taraqqiyot yo'lida' asarining muallifi kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulaziz Komilov",
      "Inomjon Majidov"
    ],
    "correct": 0
  },
  {
    "q": "'O'zbekiston xalqini, millatidan qat'i nazar, O'zbekiston Respublikasining fuqarolari tashkil etadi' qoidasi Konstitutsiyaning qaysi moddasida?",
    "options": [
      "8-moddasida",
      "4-moddasida",
      "12-moddasida",
      "16-moddasida"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda nechta diniy konfessiyaga oid diniy tashkilotlar faoliyat olib bormoqda?",
    "options": [
      "16 ta diniy konfessiya",
      "8 ta diniy konfessiya",
      "22 ta diniy konfessiya",
      "12 ta diniy konfessiya"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekistonda Kadrlar tayyorlash milliy dasturi qachon qabul qilindi?",
    "options": [
      "1997-yil 29-avgustda",
      "1995-yil 14-aprelda",
      "1999-yil 7-iyunda",
      "1996-yil 18-oktyabrda"
    ],
    "correct": 0
  },
  {
    "q": "Yurtimizda birinchi marta qachon Maktabgacha ta'lim vazirligi tashkil etildi?",
    "options": [
      "2017-yil 30-sentyabrda",
      "2016-yil 14-avgustda",
      "2019-yil 7-yanvarda",
      "2018-yil 1-martda"
    ],
    "correct": 0
  },
  {
    "q": "2000-yil 28-yanvardagi Farmon bilan qaysi oliy o'quv yurtiga 'Milliy universitet' maqomi berildi?",
    "options": [
      "Toshkent davlat universitetiga (hozirgi O'zMU)",
      "O'zbekiston Milliy universiteti",
      "Mirzo Ulug'bek nomidagi ToshDU",
      "Toshkent davlat texnika universitetiga"
    ],
    "correct": 0
  },
  {
    "q": "Toshkent viloyatida Chirchiq davlat pedagogika instituti qachon tashkil etildi?",
    "options": [
      "2017-yil 27-iyunda",
      "2015-yil 14-martda",
      "2019-yil 1-sentyabrda",
      "2016-yil 30-avgustda"
    ],
    "correct": 0
  },
  {
    "q": "2030-yilga borib PISA reytingida O'zbekistonning jahondagi yetakchi nechta mamlakat qatoridan joy egallashi maqsad qilib qo'yilgan?",
    "options": [
      "30 ta mamlakat",
      "20 ta mamlakat",
      "50 ta mamlakat",
      "40 ta mamlakat"
    ],
    "correct": 0
  },
  {
    "q": "2018-yil 25-sentabrda davlatimiz rahbarining farmoni bilan nima tashkil etildi?",
    "options": [
      "Vazirlar Mahkamasi huzuridagi 'Respublika Ma'naviyat va ma'rifat kengashi'",
      "Oliy ta'lim vazirligi",
      "Innovatsion rivojlanish vazirligi",
      "Milliy ta'lim sifat agentligi"
    ],
    "correct": 0
  },
  {
    "q": "Inklyuziv ta'lim nima?",
    "options": [
      "Imkoniyati cheklangan bolalarning sog'lom bolalar bilan birgalikda umumta'lim maktablarida ta'lim olish tizimi",
      "Iste'dodli bolalar uchun maxsus ta'lim tizimi",
      "Katta yoshdagi shaxslar uchun ta'lim dasturi",
      "Chet el tillari intensiv o'qitish tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Innovatsion rivojlanish vazirligi qachon tashkil etilgan?",
    "options": [
      "2017-yil 29-noyabrda",
      "2016-yil 14-avgustda",
      "2019-yil 1-martda",
      "2018-yil 7-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "'Ustoz' jamg'armasi qachon tashkil etildi?",
    "options": [
      "1997-yil iyun oyida",
      "1995-yil 18-mayda",
      "1999-yil 7-yanvarda",
      "2000-yil 1-oktyabrda"
    ],
    "correct": 0
  },
  {
    "q": "2019-yilda O'zbekistondagi oliy o'quv yurtlarining soni nechta edi?",
    "options": [
      "114 ta",
      "80 ta",
      "136 ta",
      "95 ta"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston qachon BMTga a'zo bo'ldi?",
    "options": [
      "1992-yil 2-martda",
      "1991-yil 21-dekabrda",
      "1993-yil 26-oktyabrda",
      "1992-yil 15-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston BMT doirasida quyidagi qaysi tashkilotga a'zo emas?",
    "options": [
      "NATO (Shimoliy Atlantika Alyansi)",
      "YuNESKO",
      "JSST (Jahon sog'liqni saqlash tashkiloti)",
      "Jahon banki"
    ],
    "correct": 0
  },
  {
    "q": "Toshkentda YuNESKOning vakolatxonasi qachon ochildi?",
    "options": [
      "1996-yil 23-aprelda",
      "1993-yil 14-martda",
      "1997-yil 8-iyulda",
      "1994-yil 22-sentyabrda"
    ],
    "correct": 0
  },
  {
    "q": "2000-yil 28-dekabrda O'zbekistonning qaysi shahri YuNESKO ro'yxatiga kiritildi?",
    "options": [
      "Shahrisabz shahrining tarixiy markazi",
      "Buxoroning qadimiy shahri",
      "Xivaning Ichan qal'asi",
      "Samarqandning tarixiy markazi"
    ],
    "correct": 0
  },
  {
    "q": "Samarqand shahrining yubileyi necha yillik sifatida nishonlangan?",
    "options": [
      "2750-yillik (2007-y.)",
      "2500-yillik (1997-y.)",
      "3000-yillik (2007-y.)",
      "2200-yillik (2009-y.)"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston qaysi tashkilotga a'zo emas?",
    "options": [
      "Yevrosiyo iqtisodiy ittifoqi (YeII)",
      "Shanxay hamkorlik tashkiloti",
      "MDH",
      "Islom hamkorlik tashkiloti"
    ],
    "correct": 0
  },
  {
    "q": "SHHTning terrorizimga qarshi kurashish qarorgohi (MATT) qayerda joylashgan?",
    "options": [
      "Toshkent shahrida",
      "Pekin shahrida",
      "Moskva shahrida",
      "Bishkek shahrida"
    ],
    "correct": 0
  },
  {
    "q": "2016-yil iyun oyida qaysi shaharda ShHT yig'ilishida Pokiston va Hindistonni tashkilotga kiritish memorandumi imzolandi?",
    "options": [
      "Toshkent sammitida",
      "Pekin sammitida",
      "Moskva sammitida",
      "Dushanbe sammitida"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqil Davlatlar Hamdo'stligi (MDH) tashkilotiga qachon asos solindi?",
    "options": [
      "1991-yil 8-dekabrda (Belovej bitimi)",
      "1991-yil 21-dekabrda (Olmaota protokoli)",
      "1991-yil 25-dekabrda (Kreml qaroriga binoan)",
      "1992-yil 1-yanvarda"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temurning poytaxti qaysi shahar bo'lgan?",
    "options": [
      "Samarqand",
      "Buxoro",
      "Shahrisabz",
      "Balx"
    ],
    "correct": 0
  },
  {
    "q": "'Temur tuzuklari' asari nimaga bag'ishlangan?",
    "options": [
      "Davlatni boshqarish qonun-qoidalari, harbiy mahorat va saltanat tuzilishiga",
      "Amir Temurning harbiy yurishlariga",
      "Temurning otasiga bag'ishlangan tarjimai holiga",
      "Qur'on va hadislarga sharhlarga"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug'bek kimning nabirasi bo'lgan?",
    "options": [
      "Amir Temurning (Shohruh Mirzoning o'g'li)",
      "Shohruh Mirzoning (Amir Temurning nabirasi)",
      "Ulug'bek Amir Temurning o'g'li",
      "Xalil Sultonning o'g'li"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug'bek rasadxonasi qayerda qurilgan?",
    "options": [
      "Samarqandda (Ko'hak tepaligida)",
      "Buxoroda (Ark qal'asi yonida)",
      "Toshkentda (Hazrati Imom mahallasida)",
      "Shahrisabzda (Oq Saroy yonida)"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug'bek qaysi ilm sohasida mashhur?",
    "options": [
      "Astronomiya (falakiyot) va matematika",
      "Tarix va geografiya",
      "Tibbiyot va botanika",
      "Falsafa va mantiq"
    ],
    "correct": 0
  },
  {
    "q": "Alisher Navoiy qaysi tilda asarlar yozgan?",
    "options": [
      "Eski o'zbek tili ('Navoiy' taxallusi bilan) va fors tili ('Foniy' taxallusi bilan)",
      "Faqat eski o'zbek tilida",
      "Arab va fors tillarida",
      "Faqat fors va turkiy tillarda"
    ],
    "correct": 0
  },
  {
    "q": "Alisher Navoiyning 'Xamsa'si nechta dostondan iborat?",
    "options": [
      "5 ta dostondan iborat",
      "4 ta dostondan iborat",
      "7 ta dostondan iborat",
      "3 ta dostondan iborat"
    ],
    "correct": 0
  },
  {
    "q": "'Hayrat ul-abror' qaysi muallifga tegishli?",
    "options": [
      "Alisher Navoiyga ('Xamsa'ning birinchi dostoni)",
      "Lutfiyga",
      "Atoiyga",
      "Sakkokiyga"
    ],
    "correct": 0
  },
  {
    "q": "Zahiriddin Muhammad Bobur qayerda tug'ilgan?",
    "options": [
      "Andijonda",
      "Farg'onada",
      "Samarqandda",
      "Buxoroda"
    ],
    "correct": 0
  },
  {
    "q": "Bobur qaysi sulolaga asos solgan?",
    "options": [
      "Boburiylar sulolasiga (Buyuk Mo'g'ullar saltanati)",
      "Temuriylar sulolasiga",
      "Shayboniylar sulolasiga",
      "Ashtarxoniylar sulolasiga"
    ],
    "correct": 0
  },
  {
    "q": "'Boburnoma' asari qaysi janrga mansub?",
    "options": [
      "Memuar (tarjimai hol, tarixiy-biografik va qomusiy asar)",
      "Tarixiy roman",
      "Ilmiy-falsafiy risolat",
      "Epik doston"
    ],
    "correct": 0
  },
  {
    "q": "Abdurauf Fitrat qaysi harakat vakili bo'lgan?",
    "options": [
      "Jadidchilik harakati (Buxoro jadidlarining yetakchisi)",
      "Isyonchilar harakati",
      "Bosmachilar harakati",
      "Kommunistik harakat"
    ],
    "correct": 0
  },
  {
    "q": "Fitrat asarlarining asosiy g'oyasi nima?",
    "options": [
      "Milliy ozodlik, millatni jaholatdan qutqarish va Vatan mustaqilligi",
      "Islom dinini mustahkamlash va shariat qoidalarini joriy etish",
      "Sovet hokimiyatini himoya qilish va kommunizmni targ'ib etish",
      "Rus madaniyati va tilini o'rganish zarurligi"
    ],
    "correct": 0
  },
  {
    "q": "Abdulla Avloniy kim bo'lgan?",
    "options": [
      "Mashhur jadid ma'rifatparvari, shoir, dramaturg, murabbiy va jamoat arbobi",
      "Buxoro amirligining harbiy sardori",
      "Sovet davridagi yirik siyosatchi",
      "Rus tili o'qituvchisi va tarjimon"
    ],
    "correct": 0
  },
  {
    "q": "'Turkiy guliston yoxud axloq' asari muallifi kim?",
    "options": [
      "Abdulla Avloniy",
      "Abdurauf Fitrat",
      "Munavvar qori",
      "Mahmudxo'ja Behbudiy"
    ],
    "correct": 0
  },
  {
    "q": "Mahmudxo'ja Behbudiy qaysi sohalarda faol bo'lgan?",
    "options": [
      "Nashriyot, dramaturgiya, teatr, yangi usul maktablari va ijtimoiy-siyosiy soha",
      "Faqat harbiy va diplomatik soha",
      "Sovet ta'lim tizimini rivojlantirish",
      "Qishloq xo'jaligi va iqtisod"
    ],
    "correct": 0
  },
  {
    "q": "Behbudiy qaysi dramaning muallifi?",
    "options": [
      "'Padarkush' (Turkistondagi ilk sahna asari)",
      "'Maysaradir ishi'",
      "'O'tmishdan bir sahifa'",
      "'Baxtsiz kuyov'"
    ],
    "correct": 0
  },
  {
    "q": "Munavvar qori Abdurashidxon kim bo'lgan?",
    "options": [
      "Toshkent jadidchilik harakatining asoschisi va g'oyaviy rahbari, matbuotchi va pedagog",
      "Buxoro amirligining bosh vaziri",
      "Sovet davridagi qomusnavis olim",
      "Chor Rossiyasi razvedkasi agenti"
    ],
    "correct": 0
  },
  {
    "q": "Munavvar qori faoliyatining asosiy maqsadi nima edi?",
    "options": [
      "Turkiston xalqini ma'rifatli qilish, milliy mustaqil davlat qurish va ziyolilar qatlamini shakllantirish",
      "Rus tilini targ'ib etish va Rossiyaga integratsiya",
      "Faqat yangi usul maktablarini ochish",
      "Islom qonunlarini qat'iy joriy etish"
    ],
    "correct": 0
  },
  {
    "q": "Ishoqxon Ibrat qaysi sohalarda mashhur?",
    "options": [
      "Tilshunoslik (poliglot), xattotlik, matbaachilik va she'riyatda",
      "Harbiy san'at va strategiyada",
      "Tibbiyot va shifobaxsh o'simliklar ilmida",
      "Astronomiya va matematikada"
    ],
    "correct": 0
  },
  {
    "q": "Ishoqxon Ibrat nechta tilni bilgan?",
    "options": [
      "7 ta tilni mukammal bilgan",
      "4 ta tilni bilgan",
      "10 ta tilni bilgan",
      "5 ta tilni bilgan"
    ],
    "correct": 0
  },
  {
    "q": "Abdulla Qodiriy qaysi asar bilan mashhur?",
    "options": [
      "'O'tkan kunlar' (shuningdek, 'Mehrobdan chayon')",
      "'Sarob' romani",
      "'Shum bola' qissasi",
      "'Qoraqalpog' tarixiga' esse"
    ],
    "correct": 0
  },
  {
    "q": "'O'tkan kunlar' asari qaysi janrda yozilgan?",
    "options": [
      "Tarixiy roman (o'zbek adabiyotidagi ilk roman)",
      "Qissa",
      "Dramatik poema",
      "Tarixiy esse"
    ],
    "correct": 0
  },
  {
    "q": "'O'tkan kunlar'da qaysi davr tasvirlangan?",
    "options": [
      "XIX asr o'rtalaridagi Qo'qon xonligi davri",
      "XVIII asrdagi Buxoro amirligi davri",
      "XX asrdagi Sovet davri",
      "XVI asrdagi Shayboniylar sulolasi davri"
    ],
    "correct": 0
  },
  {
    "q": "Usmon Nosir ijodining asosiy mavzusi nima?",
    "options": [
      "Jo'shqin muhabbat, hayot go'zalligi, erkinlik va tabiat lirikasi",
      "Og'ir mehnat va qishloq turmushi",
      "Siyosiy satirik she'rlar",
      "Urush va qahramon obrazlari"
    ],
    "correct": 0
  },
  {
    "q": "Jadidlarning asosiy maqsadi nima edi?",
    "options": [
      "Turkistonni mustamlakachilik va qoloqlikdan qutqarish, milliy ozodlikka erishish va taraqqiy etgan davlat barpo etish",
      "Rus imperiyasi bilan hamkorlikni mustahkamlash",
      "Faqat diniy ta'limni isloh qilish",
      "Iqtisodiy rivojlanish va boyishga erishish"
    ],
    "correct": 0
  },
  {
    "q": "Jadidlar qaysi sohani eng muhim deb bilishgan?",
    "options": [
      "Xalq ta'limi va maorifni (yangi usul maktablarini ochish, matbuotni rivojlantirish)",
      "Harbiy qurollanish va lashkar tuzishni",
      "Savdo-iqtisodiy aloqalarni rivojlantirishni",
      "Diniy tashkilotlarni kuchaytirish va madrasalarni isloh qilishni"
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur qaysi unvon bilan tanilgan?",
    "options": [
      "Amir (Amiri kabir — Buyuk amir) va Sohibqiron",
      "Xoqon va Botir",
      "Shoh va Sulton",
      "Qodir va Zafar"
    ],
    "correct": 0
  },
  {
    "q": "Mirzo Ulug'bek tuzgan mashhur asar qaysi?",
    "options": [
      "'Ziji jadidi Ko'ragoniy' (Yulduzlar jadvali)",
      "'Miftoh ul-adl' (Adolat kaliti)",
      "'Tarixi arba' ulus' (To'rt ulus tarixi)",
      "'Risola-yi ulumiyya' (Ilmlar risollasi)"
    ],
    "correct": 0
  },
  {
    "q": "Alisher Navoiy qaysi adabiy oqimga mansub?",
    "options": [
      "Mumtoz adabiyot hamda gumanizm (parvarlik) oqimiga",
      "Realistik adabiyot oqimiga",
      "Tasavvuf va so'fizm oqimiga",
      "Diniy-didaktik adabiyot oqimiga"
    ],
    "correct": 0
  },
  {
    "q": "Bobur qaysi davlatda vafot etgan?",
    "options": [
      "Hindistonning Agra shahrida",
      "Afg'onistonning Qobul shahrida",
      "O'zbekistonning Andijonda",
      "Eron Isfahonida"
    ],
    "correct": 0
  },
  {
    "q": "Jadid adabiyotining asosiy xususiyati nima?",
    "options": [
      "Realistik yo'nalish, ijtimoiy va milliy muammolarni tanqid qilish, ma'rifatparvarlik va xalqchil ruhda ekanligi",
      "Diniy qonun-qoidalarni ulug'lash va shar'iy adabiyot an'analari",
      "Tabiiy go'zallik va romantik muhabbatni kuylash",
      "Sovet mafkurasini qo'llab-quvvatlash va kommunizmni targ'ib etish"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston Jo'qorg'i Kengeshi raisi necha yil muddatga saylanadi?",
    "options": [
      "5 yil muddatga",
      "4 yil muddatga",
      "7 yil muddatga",
      "6 yil muddatga"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston Respublikasining Davlat bayrog'i qachon tasdiqlandi?",
    "options": [
      "1992-yil 14-dekabrda",
      "1991-yil 18-noyabrda",
      "1993-yil 9-aprelda",
      "1992-yil 2-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston Respublikasi Davlat gerbi qachon tasdiqlandi?",
    "options": [
      "1993-yil 9-aprelda",
      "1992-yil 14-dekabrda",
      "1994-yil 24-iyunda",
      "1993-yil 24-dekabrda"
    ],
    "correct": 0
  },
  {
    "q": "Qo'ng'irot tumanida 'Ustyurtgaz' (Ustyurt gaz-kimyo majmuasi) korxonasi qachon ochildi?",
    "options": [
      "2016-yil may oyida",
      "2014-yil sentyabrida",
      "2018-yil avgustda",
      "2012-yil iyunida"
    ],
    "correct": 0
  },
  {
    "q": "Nukus va Xo'jayli shaharlarini birlashtiruvchi yangi ko'prik qachon qurildi?",
    "options": [
      "2024-yil fevral oyida",
      "2022-yil iyunida",
      "2023-yil may oyida",
      "2021-yil sentyabrida"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston O'zbekiston SSR tarkibiga qachon kiritilgan?",
    "options": [
      "1936-yil 5-dekabrda",
      "1924-yil 27-oktyabrda",
      "1929-yil 14-martda",
      "1932-yil 20-martda"
    ],
    "correct": 0
  },
  {
    "q": "Qoraqalpog'iston Respublikasi nechta asosiy tabiiy landshaft qismga bo'linadi?",
    "options": [
      "3 ta asosiy qismga (Ustyurt, Qizilqum va Amudaryo deltasi)",
      "4 ta qismga",
      "2 ta qismga",
      "5 ta qismga"
    ],
    "correct": 0
  },
  {
    "q": "Xo'jayli va Nukusni bog'laydigan katta ko'prik qachon foydalanishga topshirildi?",
    "options": [
      "2024-yil boshida",
      "2022-yil noyabrida",
      "2023-yil iyulida",
      "2021-yil oktyabrida"
    ],
    "correct": 0
  },
  {
    "q": "'Qoraqalpog'iston Respublikasi Davlat madhiyasi' to'g'risida qonun qachon qabul qilindi?",
    "options": [
      "1993-yil 24-dekabrda",
      "1992-yil 14-dekabrda",
      "1994-yil 9-aprelda",
      "1993-yil 2-iyulda"
    ],
    "correct": 0
  },
  {
    "q": "Dunyodagi nechadan ortiq davlatda O'zbekiston elchixonalari va moliya tashkilotlari ishlab turibdi?",
    "options": [
      "50 dan ortiq davlatda",
      "30 dan ortiq davlatda",
      "70 dan ortiq davlatda",
      "40 dan ortiq davlatda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasini bugungi kunda nechadan ortiq davlat tan olgan?",
    "options": [
      "180 dan ortiq davlat",
      "120 dan ortiq davlat",
      "150 dan ortiq davlat",
      "160 dan ortiq davlat"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasida bugungi kunda nechata chet davlat vakolatxonalari ro'yxatdan o'tgan?",
    "options": [
      "40 dan ortiq chet davlat elchixonalari va xalqaro tashkilotlar vakolatxonalari",
      "25 dan ortiq",
      "60 dan ortiq",
      "30 dan ortiq"
    ],
    "correct": 0
  },
  {
    "q": "Jahonning nechta mamlakati bilan O'zbekiston savdo-iqtisodiy munosabatlar o'rnatgan?",
    "options": [
      "140 dan ortiq mamlakat bilan",
      "80 dan ortiq mamlakat bilan",
      "100 dan ortiq mamlakat bilan",
      "120 dan ortiq mamlakat bilan"
    ],
    "correct": 0
  },
  {
    "q": "Munavvar qori qayerda tug'ilgan?",
    "options": [
      "Toshkent shahrida (Shayxontohur dahasi, Darxon mahallasida)",
      "Namangan viloyatida",
      "Samarqand viloyatida",
      "Farg'ona shahridagi"
    ],
    "correct": 0
  },
  {
    "q": "Ishoqxon Ibrat qayerda tug'ilgan?",
    "options": [
      "Namangan viloyati, To'raqo'rg'on qishlog'ida",
      "Toshkent shahrida",
      "Andijonda",
      "Farg'ona shahridagi"
    ],
    "correct": 0
  },
  {
    "q": "Abdulla Qodiriy qayerda tug'ilgan?",
    "options": [
      "Toshkent shahrida (Eski shahar, Qodiriya mahallasida)",
      "Samarqandda",
      "Namanganda",
      "Andijonda"
    ],
    "correct": 0
  },
  {
    "q": "O'zbekiston Respublikasi Prezidentining taklifi bilan mahalliy boshqaruv tizimida 'hokim yordamchisi' lavozimi joriy etilishi qachondan boshlandi?",
    "options": [
      "2022-yil 1-yanvardan boshlab",
      "2021-yil 1-sentyabrdan boshlab",
      "2020-yil 1-martdan boshlab",
      "2023-yil 1-yanvardan boshlab"
    ],
    "correct": 0
  }

     ]),
   },

      ///////////////////////////////////////////////////////////////////////////////


      
  
  // ========================================================================
};
