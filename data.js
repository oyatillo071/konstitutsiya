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
    title: "Tarix 1-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "“O‘zbekistonning eng yangi tarixi” fanining xronologik doirasini aniqlang.",
    "options": [
      "1991-yil 31-avgustdan hozirgi davrgacha bo'lgan davr.",
      "1980-yillar oxiri va mustaqillik yillaridagi tarixiy jarayonlar.",
      "1917-yildan 1991-yilgacha bo'lgan sovet davri va mustaqillik yillari.",
      "XX asrning boshidan boshlab Yangi O'zbekiston davrigacha."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning eng yangi tarixi fanining predmeti nimadan iborat?",
    "options": [
      "Mustaqillik yillaridagi ijtimoiy-siyosiy va madaniy hayot faktlari.",
      "Mustaqillikka erishish, milliy davlat qurilishi va jamiyat taraqqiyoti qonuniyatlari.",
      "O'rta Osiyo xalqlarining sovet mustamlakachiligiga qarshi kurashi.",
      "O'zbekistonning jahon hamjamiyatidagi o'rni va tashqi siyosati."
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik deklaratsiyasi qabul qilingan sana va uning ahamiyatini belgilang.",
    "options": [
      "1991-yil 31-avgust – O'zbekiston to'liq suverenitetga erishgan kun.",
      "1990-yil 24-mart – Prezidentlik boshqaruvi joriy etilgan kun.",
      "1990-yil 20-iyun – Davlat mustaqilligining huquqiy asosi qo'yilgan sana.",
      "1991-yil 29-dekabr – Umumxalq referendumi o'tkazilgan sana."
    ],
    "correct": 2
  },
  {
    "q": "XX asrning 80-yillarida O'zbekistonga qarshi qaratilgan siyosiy qatag'onning rasmiy nomi nima edi?",
    "options": [
      "“O'zbeklar ishi” yoki “Paxta ishi”.",
      "“Qayta qurish” inqirozi.",
      "“Farg'ona voqealari” aybdorlari ishi.",
      "“Shtafanov ishi”."
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekistonning o‘z istiqlol va taraqqiyot yo‘li” asarining mazmuni nima bilan bog'liq?",
    "options": [
      "O'zbekistonning tarixiy taraqqiyotini 7 bosqichga bo'lish.",
      "Mustaqillikning dastlabki yillarida ijtimoiy-iqtisodiy rivojlanish strategiyasi.",
      "Tarixiy xotirasiz kelajak yo'qligi haqidagi falsafiy g'oyalar.",
      "Harakatlar strategiyasining ustuvor yo'nalishlari."
    ],
    "correct": 1
  },
  {
    "q": "Orol dengizining qurishiga sabab bo'lgan asosiy omillarni ko'rsating.",
    "options": [
      "Iqlim o'zgarishi va global isish natijasida suv bug'lanishi.",
      "Suv resurslaridan samarasiz foydalanish va paxta yakkahokimligi.",
      "Amudaryo va Sirdaryo o'zanlarining boshqa davlatlar tomonidan to'silishi.",
      "Orolbo'yi hududidagi sanoat korxonalarining zaharli chiqindilari."
    ],
    "correct": 1
  },
  {
    "q": "“O‘zbek modeli”ning besh tamoyilidan birinchi va eng asosiysi qaysi?",
    "options": [
      "Kuchli ijtimoiy siyosat.",
      "Iqtisodiyotning siyosatdan ustunligi.",
      "Qonun ustuvorligi.",
      "Davlat - bosh islohotchi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Konstitutsiyasi qachon qabul qilingan?",
    "options": [
      "1990-yil 20-iyun.",
      "1991-yil 1-sentyabr.",
      "1992-yil 8-dekabr.",
      "1994-yil 1-iyul."
    ],
    "correct": 2
  },
  {
    "q": "Milliy valyuta – so‘m qachondan boshlab yagona to'lov vositasi sifatida muomalaga kiritilgan?",
    "options": [
      "1991-yil 18-noyabr.",
      "1992-yil 2-mart.",
      "1993-yil 15-noyabr.",
      "1994-yil 1-iyul."
    ],
    "correct": 3
  },
  {
    "q": "“O‘zbeklar ishi” deb nomlangan siyosiy kampaniya qaysi yillar oralig'ini qamrab oladi?",
    "options": [
      "1980-1985-yillar.",
      "1983-1989-yillar.",
      "1985-1991-yillar.",
      "1989-1992-yillar."
    ],
    "correct": 1
  },
  {
    "q": "2017-yil 7-fevralda qabul qilingan tarixiy hujjat qaysi?",
    "options": [
      "Taraqqiyot strategiyasi.",
      "Harakatlar strategiyasi.",
      "Yangi O'zbekiston deklaratsiyasi.",
      "Konstitutsiyaviy islohotlar dasturi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zini o‘zi boshqarish organlarining qadimiy shakli sifatida e'tirof etiladigan tuzilma?",
    "options": [
      "Oqsoqollar kengashi.",
      "Fuqarolar yig'ini.",
      "Mahalla.",
      "Xalq deputatlari kengashi."
    ],
    "correct": 2
  },
  {

"q": "“Korrupsiyaga qarshi kurashish to‘g‘risida”gi Qonun qachon qabul qilingan?",
    "options": [
      "2016-yil 5-oktyabr.",
      "2017-yil 3-yanvar.",
      "2020-yil 29-iyun.",
      "2023-yil 30-aprel."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining davlat tili haqidagi Qonuni qabul qilingan vaqtdagi tarixiy sharoitni belgilang.",
    "options": [
      "Mustaqillik e'lon qilingandan so'ng (1991-yil oktyabr).",
      "Mustaqillik ostonasida, sovet davrida (1989-yil 21-oktyabr).",
      "Konstitutsiya qabul qilinishi arafasida (1992-yil).",
      "Referendum o'tkazilgan yili (1991-yil)."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston tarixini 7 davrga bo‘lib o‘rganishni taklif qilgan akademik olim kim?",
    "options": [
      "Abdulla Oripov.",
      "Ahmadali Asqarov.",
      "Islom Karimov.",
      "Ismoil Gasprinskiy."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston modelining to'rtinchi tamoyili qanday nomlanadi?",
    "options": [
      "Qonun ustuvorligini ta'minlash.",
      "Bozor iqtisodiyotiga bosqichma-bosqich o'tish.",
      "Kuchli ijtimoiy siyosat.",
      "Iqtisodiyotni mafkuradan xoli qilish."
    ],
    "correct": 2
  },
  {
    "q": "O'zbekistonda ikki palatali parlament tizimiga qachon va qanday asosda o'tildi?",
    "options": [
      "1990-yil 24-martda Prezident farmoni bilan.",
      "1991-yil 31-avgustda mustaqillik qonuni bilan.",
      "2002-yilgi referendum natijasiga ko'ra.",
      "2017-yilda Harakatlar strategiyasi doirasida."
    ],
    "correct": 2
  },
  {
    "q": "“O‘zbekiston – bozor munosabatlariga o‘tishning o‘ziga xos yo‘li” asari qaysi yili nashr etilgan?",
    "options": [
      "1991-yil.",
      "1992-yil.",
      "1993-yil.",
      "1994-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda o‘lim jazosi butunlay bekor qilingan muddatni aniqlang.",
    "options": [
      "1991-yil 1-sentyabr.",
      "2005-yil 1-avgust.",
      "2008-yil 1-yanvar.",
      "2017-yil 7-fevral."
    ],
    "correct": 2
  },
  {
    "q": "Jadidchilik harakati asoschisi sifatida tanilgan ma'rifatparvar kim?",
    "options": [
      "Abdulla Avloniy.",
      "Mahmudxo'ja Behbudiy.",
      "Ismoil Gasprinskiy.",
      "Munavvarkori Abdurashidxonov."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining Davlat gerbidagi Humo qushi qanday ramziy ma'noga ega?",
    "options": [
      "Davlat mustaqilligi va qudrati ramzi.",
      "Tinchlik va birdamlik timsoli.",
      "Baxt va hurlik ramzi.",
      "Adolat va tenglik belgisi."
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida O'zbekiston iqtisodiyotining “lokomotivi” deb e'tirof etilgan sohani toping.",
    "options": [
      "Yengil sanoat va to'qimachilik.",
      "Qishloq xo'jaligi va paxtachilik.",
      "Avtomobilsozlik.",
      "Neft va gaz sanoati."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Birlashgan Millatlar Tashkilotiga (BMT) qachon a’zo bo‘lgan?",
    "options": [
      "1991-yil 31-avgust.",
      "1991-yil 18-noyabr.",
      "1992-yil 2-mart.",
      "1992-yil 8-dekabr."
    ],
    "correct": 2
  },
  {
    "q": "“Yuksak ma’naviyat – yengilmas kuch” asari qaysi yili e'lon qilingan?",
    "options": [
      "1993-yil.",
      "1998-yil.",
      "2005-yil.",
      "2008-yil."
    ],
    "correct": 3
  },
  {
    "q": "“Kadrlar tayyorlash milliy dasturi” qaysi yili qabul qilingan va tizimli islohotlarga asos bo'lgan?",
    "options": [
      "1992-yil.",
      "1995-yil.",
      "1997-yil.",
      "2001-yil."
    ],
    "correct": 2
  },
  {
    "q": "Korrupsiyaga qarshi kurashish agentligi tashkil etilgan sana?",
    "options": [
      "2017-yil 3-yanvar.",
      "2019-yil 25-iyun.",
      "2020-yil 29-iyun.",
      "2021-yil 1-yanvar."
    ],
    "correct": 2
  },
  {
    "q": "Siyosiy partiya tuzish uchun qonunchilikda belgilangan eng kam imzo miqdori qancha?",
    "options": [
      "5 ming imzo.",
      "10 ming imzo.",
      "20 ming imzo.",
      "50 ming imzo."
    ],
    "correct": 2

  },

  {
    "q": "“Yangi O‘zbekiston taraqqiyot strategiyasi” necha yo‘nalishni qamrab oladi va u qaysi tamoyilga asoslanadi?",
    "options": [
      "5 ta yo'nalish – “Milliy tiklanishdan milliy yuksalish sari”;",
      "7 ta yo'nalish – “Inson qadri uchun” tamoyili;",
      "10 ta yo'nalish – “Xalq davlat idoralariga emas, davlat idoralari xalqqa xizmat qilishi kerak”;",
      "12 ta yo'nalish – “Kuchli davlatdan – kuchli fuqarolik jamiyati sari”."
    ],
    "correct": 1
  },
  {
    "q": "2023-yil 30-aprelda o'tkazilgan umumxalq tadbirining asosiy maqsadi va natijasi nima edi?",
    "options": [
      "Prezidentlik muddatini cheksiz etib belgilash;",
      "Yangi tahrirdagi Konstitutsiyani qabul qilish orqali huquqiy islohotlarni mustahkamlash;",
      "Parlament quyi palatasiga muddatidan oldin saylovlar o'tkazish;",
      "Shanxay hamkorlik tashkilotiga a'zolik masalasini hal qilish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda Prezidentlik muddati necha yil qilib belgilangan va bu qaysi hujjatda o'z aksini topgan?",
    "options": [
      "5 yil – 2017-yilgi Harakatlar strategiyasida;",
      "7 yil – Yangi tahrirdagi Konstitutsiyada;",
      "4 yil – 1992-yilgi dastlabki Konstitutsiyada;",
      "10 yil – 2022-yilgi Samarqand sammiti qarorlarida."
    ],
    "correct": 1
  },
  {
    "q": "“Kuchli davlatdan – kuchli fuqarolik jamiyati sari” g'oyasining fundamental mazmuni nimadan iborat?",
    "options": [
      "Davlat organlari sonini ko'paytirish;",
      "Siyosiy tizimni demokratlashtirish va boshqaruv funksiyalarini jamoatchilikka o'tkazish;",
      "Bozor iqtisodiyotini davlat tomonidan qat'iy nazorat qilish;",
      "Yagona siyosiy partiyaviylik tizimiga qaytish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda milliy valyuta muomalaga kiritilgunga qadar qanday vaqtinchalik to'lov vositasidan foydalanilgan?",
    "options": [
      "Rossiya rubli;",
      "So'm-kuponlar;",
      "Markaziy Osiyo dinori;",
      "O'zbek so'mining vaqtinchalik nusxasi."
    ],
    "correct": 1
  },
  {
    "q": "“Xabeas korpus” institutining O'zbekiston sud-huquq tizimidagi roli nimada?",
    "options": [
      "Advokatlarning huquqlarini cheklash;",
      "Qamoqqa olishga sanksiya berish vakolatining prokuraturadan sudlarga o'tkazilishi;",
      "Oliy sud va Oliy xo'jalik sudining birlashtirilishi;",
      "Sudyalarni saylash tizimini joriy etish."
    ],
    "correct": 1
  },
  {
    "q": "“O‘zbekistonning yangi tarixi” markazi qachon tashkil etilgan va u nima bilan shug'ullanadi?",
    "options": [
      "1991-yil – Arxiv hujjatlarini yo'q qilish;",
      "1996-yil – Mustaqillik davri tarixini ilmiy tadqiq etish;",
      "2012-yil – Faqat darsliklar yozish;",
      "2017-yil – Xalqaro reytinglarni o'rganish."
    ],
    "correct": 1
  },
  {
    "q": "O'zbekistonda “Yoshlar kuni” qaysi voqea munosabati bilan 30-iyun etib belgilangan?",
    "options": [
      "O'zbekiston Yoshlar ittifoqi tashkil topgan kun munosabati bilan;",
      "Mustaqillik deklaratsiyasi qabul qilingan kun;",
      "“Kadrlar tayyorlash milliy dasturi” imzolangan sana;",
      "Konstitutsiya qabul qilingan kun."
    ],
    "correct": 0
  },
  {
    "q": "Prezidentlik boshqaruvi O'zbekistonda qachon va qanday siyosiy vaziyatda joriy etilgan?",
    "options": [
      "1990-yil 24-martda – Ittifoq tarkibida bo'lgan birinchi respublika sifatida;",
      "1991-yil 31-avgustda – Mustaqillik e'lon qilingan paytda;",
      "1992-yil 8-dekabrda – Konstitutsiya tasdiqlanganda;",
      "2016-yil dekabrda – Saylovlar natijasiga ko'ra."
    ],
    "correct": 0
  },
  {
    "q": "“Obod qishloq” va “Obod mahalla” dasturlari qaysi yildan boshlab amalga oshirila boshlandi?",
    "options": [
      "1991-yildan;",
      "2012-yildan;",
      "2017-yildan;",
      "2018-yildan."
    ],
    "correct": 3
  },
  {
    "q": "O'zbekistonning Shanxay Hamkorlik Tashkilotiga (ShHT) 2022-yilgi raisligi qaysi shahar sammiti bilan yakunlandi?",
    "options": [
      "Toshkent;",
      "Buxoro;",
      "Samarqand;",
      "Xiva."
    ],
    "correct": 2
  },

{
    "q": "Yangi tahrirdagi Konstitutsiyada moddalar soni qanchaga yetdi?",
    "options": [
      "128 ta;",
      "144 ta;",
      "155 ta;",
      "168 ta."
    ],
    "correct": 2
  },
  {
    "q": "“Tarix falsafasi” fanining asosiy vazifasi nimadan iborat?",
    "options": [
      "Faqat sanalarni yodlash;",
      "Tarixiy jarayonning mohiyati, rivojlanish yo'nalishi va ma'nosini falsafiy anglash;",
      "Qadimgi buyumlarni tavsiflash;",
      "Arxeologik qazishmalar o'tkazish."
    ],
    "correct": 1
  },

 
  {
    "q": "O‘zbekistonda 1980-yillarning ikkinchi yarmida amalga oshirilgan “qayta qurish” siyosatining respublika hayotidagi eng og‘ir oqibati nima bo‘ldi?",
    "options": [
      "Sanoat korxonalarining xususiylashtirilishi;",
      "Iqtisodiy inqiroz va aholi turmush darajasining keskin pasayishi;",
      "Yangi siyosiy partiyalarning nazoratsiz ko'payishi;",
      "Qishloq xo'jaligida texnika yetishmovchiligi."
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik arafasida O'zbekistonning iqtisodiy mustaqilligi yo'lidagi birinchi muhim qadam qaysi edi?",
    "options": [
      "Oltin qazib olishni to'xtatish;",
      "Respublika hududidagi barcha ittifoq tasarrufidagi korxonalarni O'zbekiston yurisdiksiyasiga o'tkazish;",
      "Rossiya bilan bojxona ittifoqini tuzish;",
      "Paxta yetishtirishdan butunlay voz kechish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Davlat gerbi qabul qilingan sana va undagi ramziy ma’nolarning asosi?",
    "options": [
      "1992-yil 2-iyul – Milliy davlatchilik, tinchlik va tabiat boyliklarining uyg'unligi;",
      "1991-yil 31-avgust – Faqat mustaqillik g'oyasi;",
      "1993-yil 8-dekabr – Ma'naviy yuksalish va adolat tantanasi;",
      "1990-yil 20-iyun – Suverenitet deklaratsiyasi tamoyillari."
    ],
    "correct": 0
  },
  {
    "q": "Amir Temur saltanatida boshqaruvning qaysi ikki tamoyili davlat barqarorligini ta’minlagan?",
    "options": [
      "Faqat harbiy intizom va jazoning muqarrarligi;",
      "Kengash va mashvarat hamda adolatli qonunlar (Tuzuklar);",
      "Soliqlarni ko'paytirish va tashqi savdo nazorati;",
      "Diniy ulamolarning mutlaq xukmronligi va qo'rquv."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning eng yangi tarixi fanining asosiy manbalari sirasiga nimalar kiradi?",
    "options": [
      "Faqat o'rta asr qo'lyozmalari;",
      "Arxiv hujjatlari, statistik ma'lumotlar va davlat qonunlari to'plami;",
      "Faqat chet ellik sayyohlarning xotiralari;",
      "Badiiy adabiyotlar va darsliklar."
    ],
    "correct": 1
  },
  {
    "q": "“Kadrlar tayyorlash milliy dasturi” doirasida ta’lim tizimining qaysi yangi bosqichlari joriy etilgan edi?",
    "options": [
      "Faqat oliy ta'lim va maktabgacha ta'lim;",
      "9 yillik umumiy va 3 yillik o'rta maxsus (kollej va litseylar);",
      "7 yillik majburiy va 4 yillik ixtiyoriy ta'lim;",
      "11 yillik majburiy va 2 yillik kasbiy ta'lim."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2023-yilgi farmoniga ko‘ra, davlat boshqaruvida qanday islohot (transformatsiya) amalga oshirildi?",
    "options": [
      "Vazirlik va idoralar soni qisqartirilib, ixcham davlat apparati tashkil etildi;",
      "Barcha hokimliklar bekor qilinib, vazirliklar nazoratiga o'tkazildi;",
      "Yangi iqtisodiy zonalar tashkil etish vakolati faqat vazirlarga berildi;",
      "Barcha davlat organlari Toshkent shahridan viloyatlarga ko'chirildi."
    ],
    "correct": 0
  },
  {
    "q": "Jahon iqtisodiy hamjamiyatida O'zbekistonning nufuzini oshirgan “Navoiy” erkin iqtisodiy zonasi qachon tashkil etilgan?",
    "options": [
      "1991-yilda;",
      "2005-yilda;",
      "2008-yilda;",
      "2017-yilda."
    ],
    "correct": 2
  },
  {
    "q": "“Ijtimoiy sheriklik to‘g‘risida”gi Qonunning maqsadi nimadan iborat?",
    "options": [
      "Davlat va biznes vakillarining birgalikda foyda ko'rishi;",
      "Davlat organlari va fuqarolik jamiyati institutlari o'rtasidagi hamkorlikni mustahkamlash;",
      "Faqat siyosiy partiyalar o'rtasidagi ittifoqni ta'minlash;",
      "Xorijiy investitsiyalarni davlat kafolati ostida taqsimlash."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning 2022-2026 yillarga mo‘ljallangan Taraqqiyot strategiyasining ikkinchi yo‘nalishi nimaga qaratilgan?",
    "options": [
      "Davlat boshqaruvini takomillashtirish;",
      "Adolat va qonun ustuvorligini ta'minlash, inson qadrini yuksaltirish;",
      "Milliy iqtisodiyotni rivojlantirish;",
      "Xavfsizlik va tashqi siyosatni isloh qilish."
    ],
"correct": 1

 
 
   },
    ]),
  },

  ///////////////////////////////////////////////////////////////////////////////////
 
  topic2: {
    title: "Tarix 2-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "O‘zbekistonda 1980-yillar oxiridagi ijtimoiy-siyosiy vaziyatda “Navro‘z” bayramining taqiqlanishiga rasmiy sabab sifatida nima ko‘rsatilgan edi?",
    "options": [
      "Iqtisodiy inqiroz va mablag' yetishmasligi;",
      "Bayramning diniy xarakterga egaligi va mafkuraviy yotligi;",
      "Ommaviy tartibsizliklarning oldini olish zarurati;",
      "Paxta rejasining bajarilmay qolishi xavfi."
    ],
    "correct": 1
  },
  {
    "q": "1986-yilda “Navro‘z” bayrami o‘rniga qaysi sun’iy bayram joriy etilgan edi?",
    "options": [
      "“Hosil bayrami”;",
      "“Navbahor”;",
      "“Gullar bayrami”;",
      "“Bahor nafasi”."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston mustaqillikka erishish ostonasida turgan paytda, 1989-yilda yuz bergan “Farg‘ona voqealari”ning asl sababi markaz tomonidan qanday talqin qilingan?",
    "options": [
      "Millatlararo nizo va ekstremizm;",
      "Ijtimoiy-iqtisodiy muammolar va markazning xatolari;",
      "Mesketi turklarining o'zboshimchaligi;",
      "Ekologik fojianing ta'siri."
    ],
    "correct": 1
  },
  {
    "q": "Jaloliddin Manguberdining mo‘g‘ullarga qarshi kurashdagi ilk yirik strategik g‘alabasi qaysi jangda qo‘lga kiritilgan?",
    "options": [
      "Sind daryosi bo'yidagi jang;",
      "Valiyon jangi;",
      "Parvon jangi;",
      "Niso jangi."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonning mustaqillikka o‘tish davrida “tayyor andozalarni ko‘r-ko‘rona nusxalash”dan voz kechishining asosiy sababi nima edi?",
    "options": [
      "G'arb davlatlari bilan aloqalarning yomonligi;",
      "Milliy-tarixiy va mental xususiyatlarning inobatga olinishi zarurati;",
      "Xalqaro tashkilotlarning tavsiyasi;",
      "Iqtisodiy resurslarning yetishmasligi."
    ],
    "correct": 1
  },
  {
    "q": "Advokatlar palatasi O'zbekistonda qachon tashkil etilgan va uning asosiy maqsadi nima?",
    "options": [
      "2005-yil – Sudyalar faoliyatini nazorat qilish;",
      "2008-yil – Advokatura institutining mustaqilligini ta'minlash;",
      "2017-yil – Prokuratura tizimini isloh qilish;",
      "2020-yil – Yuridik xizmat sifatini oshirish."
    ],
    "correct": 1
  },
  {
    "q": "I.A. Karimov vafoti munosabati bilan mamlakatda necha kunlik motam e'lon qilingan edi?",
    "options": [
      "1 kunlik;",
      "3 kunlik;",
      "7 kunlik;",
      "40 kunlik."
    ],
    "correct": 1
  },
  {
    "q": "2016-yil 5-oktabrda qabul qilingan “Tadbirkorlik faoliyatining jadal rivojlanishini ta'minlash to'g'risida”gi farmonning o'ziga xosligi nimada?",
    "options": [
      "Tadbirkorlarga soliq imtiyozlari berilishi;",
      "Tekshiruvlarning asossiz aralashuviga chek qo'yilishi;",
      "Yangi valyuta tizimiga o'tilishi;",
      "Eksport hajmining majburiy belgilanishi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Ekologik partiyasi (partiya sifatida) qachon rasman tashkil etilgan?",
    "options": [
      "2008-yil (Harakat sifatida);",
      "2017-yil (Harakatlar strategiyasi doirasida);",
      "2019-yil (Siyosiy partiya sifatida);",
      "2021-yil (Saylovlar arafasida)."
    ],
    "correct": 2
  },
  {
    "q": "“Inson qadri uchun” tamoyili qaysi strategik hujjatning bosh g'oyasi hisoblanadi?",
    "options": [
      "2017-2021 Harakatlar strategiyasi;",
      "2022-2026 Taraqqiyot strategiyasi;",
      "2030-yilgacha bo'lgan rivojlanish dasturi;",
      "Yangi tahrirdagi Konstitutsiya deklaratsiyasi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning Shanxay Hamkorlik Tashkiloti (ShHT) doirasidagi faoliyatida “Toshkent sammiti-2016” qaysi muhim qaror bilan tarixda qolgan?",
    "options": [
      "ShHTning aksilterror tuzilmasi (RATS) tashkil etilishi;",
      "Hindiston va Pokistonning tashkilotga a'zo bo'lishi bo'yicha memorandum imzolanishi;",
      "Eronning tashkilotga kuzatuvchi sifatida kirishi;",
      "Yagona valyuta hududini yaratish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning eng yangi tarixi fanining davrlashtirilishida “Yangi O‘zbekiston taraqqiyot bosqichi” qaysi yildan boshlanadi?",

"options": [
      "1991-yildan;",
      "2012-yildan;",
      "2016-yilning ikkinchi yarmidan;",
      "2023-yildan."
    ],
    "correct": 2
  },
  {
    "q": "Amir Temurning davlatchilik siyosatida “Kuch - adolatdadir” shiori qaysi sohada ustuvor bo'lgan?",
    "options": [
      "Faqat harbiy yurishlarda;",
      "Qonun ustuvorligi va ijtimoiy boshqaruvda;",
      "Tashqi savdo aloqalarida;",
      "Me'morchilik va san'atda."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining “Virtual qabulxonasi” tashkil etilishidan asosiy maqsad nima edi?",
    "options": [
      "Internet tezligini oshirish;",
      "Aholi bilan to'g'ridan-to'g'ri muloqotni yo'lga qo'yish va muammolarni hal etish;",
      "Elektron darsliklar bazasini yaratish;",
      "Xalqaro tashkilotlar reytingini kuzatish."
    ],
    "correct": 1
  },
  {
    "q": "Tarixiy manbalarda “Turkiston jadidlarining otasi” deb e'tirof etiladigan shaxsni ko'rsating.",
    "options": [
      "Mahmudxo'ja Behbudiy;",
      "Munavvarkori Abdurashidxonov;",
      "Abdurauf Fitrat;",
      "Ismoil Gasprinskiy."
    ],
    "correct": 0
  },
  {
    "q": "“Ma'naviyat - insonning ichki olami va irodasini shakllantiruvchi kuch” deb ta'rif berilgan asarni aniqlang.",
    "options": [
      "“O'zbekistonning o'z istiqlol va taraqqiyot yo'li”;",
      "“Yuksak ma'naviyat - yengilmas kuch”;",
      "“O'zbekiston XXI asr bo'sag'asida”;",
      "“Yangi O'zbekiston strategiyasi”."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining mustaqillik to‘g‘risidagi Oliy Kengash qarori qaysi tilda e'lon qilingan?",
    "options": [
      "Faqat o'zbek tilida;",
      "Faqat rus tilida;",
      "O'zbek va rus tillarida;",
      "O'zbek, rus va ingliz tillarida."
    ],
    "correct": 2
  },
  {
    "q": "Jahon sivilizatsiyasi tarixida “Ilm-fan markazi” bo'lgan Xorazm Ma'mun akademiyasi qachon qayta tiklandi?",
    "options": [
      "1991-yilda;",
      "1997-yilda;",
      "2006-yilda;",
      "2017-yilda."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda “Kichik biznes va xususiy tadbirkorlik yili” deb qaysi yil e'lon qilingan edi?",
    "options": [
      "1997-yil;",
      "2005-yil;",
      "2011-yil;",
      "2016-yil."
    ],
    "correct": 2
  },
  {
    "q": "Konstitutsiyaviy islohotlar doirasida “O‘zbekiston – ijtimoiy davlat” tamoyili qaysi tahrirdagi bosh qonunda mustahkamlandi?",
    "options": [
      "1992-yilgi dastlabki tahrirda;",
      "2011-yilgi o'zgarishlarda;",
      "2017-yilgi tuzatishlarda;",
      "2023-yilgi yangi tahrirda."
    ],
    "correct": 3
  },


 
  {
    "q": "O‘zbekiston Respublikasining Birinchi Prezidenti I.A. Karimov qachon vafot etgan va necha kunlik motam e’lon qilingan?",
    "options": [
      "2016-yil 31-avgust – 1 kunlik motam;",
      "2016-yil 1-sentyabr – 2 kunlik motam;",
      "2016-yil 2-sentyabr – 3 kunlik motam;",
      "2016-yil 5-sentyabr – 7 kunlik motam."
    ],
    "correct": 2
  },
  {
    "q": "Siyosiy partiyalar faoliyatini tartibga soluvchi qoidalarga ko‘ra, O‘zbekistonda partiya ro‘yxatga olinishi uchun zarur bo‘lgan imzolar soni qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "8 tadan kam bo'lmagan hududda 10 mingta imzo;",
      "Qoraqalpog'iston va viloyatlarni qamrab olgan 20 mingta imzo;",
      "Toshkent shahri va viloyatlarda jami 15 mingta imzo;",
      "Faqat poytaxt hududidan 25 mingta imzo."
    ],
    "correct": 1
  },
  {
    "q": "“O‘zbekiston Respublikasining Davlat tili haqida”gi Qonun qabul qilingan tarixiy sana va uning hozirgi maqomi?",
    "options": [
      "1989-yil 21-oktyabr – O'zbek tili davlat tili maqomini olgan;",
      "1991-yil 31-avgust – O'zbek tili rasmiy muloqot tili deb e'lon qilingan;",
      "1992-yil 8-dekabr – Konstitutsiya bilan birga qabul qilingan;",
      "1995-yil 21-dekabr – Yangi tahriri tasdiqlangan."
    ],
    "correct": 0
  },
  {
    "q": "Prezident Shavkat Mirziyoyev tomonidan ilgari surilgan “Milliy tiklanishdan – milliy yuksalish sari” g'oyasi qaysi davrning bosh maqsadi etib belgilangan?",
    "options": [
      "Mustaqillikning dastlabki o'n yilligi;",
      "Harakatlar strategiyasi amalga oshirilgan 2017-2021 yillar;",
      "Taraqqiyot strategiyasining 2022-2026 yillardagi bosqichi;",
      "2030-yilgacha bo'lgan uzoq muddatli istiqbol."
    ],
    "correct": 1
  },
  {
    "q": "Amir Temur davlatchiligida “Tuzuklar” asari qanday ahamiyatga ega bo‘lgan?",
    "options": [
      "Faqat harbiy yurishlar rejasi sifatida;",
      "Davlat boshqaruvi va huquqiy tartibning asosiy majmuasi sifatida;",
      "Amir Temurning shaxsiy kundaligi sifatida;",
      "Qo'shni davlatlar bilan tuzilgan shartnomalar to'plami sifatida."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Davlat madhiyasi matni va musiqasi mualliflarini aniqlang.",
    "options": [
      "Abdulla Oripov va Mutal Burxonov;",
      "Erkin Vohidov va Mutal Burxonov;",
      "Abdulla Oripov va Sherali Jo'rayev;",
      "Zulfiya va Mutal Burxonov."
    ],
    "correct": 0
  },
  {
    "q": "“O‘zbekiston Respublikasining Davlat bayrog‘i to‘g‘risida”gi Qonun qachon qabul qilingan?",
    "options": [
      "1991-yil 31-avgust;",
      "1991-yil 18-noyabr;",
      "1992-yil 2-mart;",
      "1992-yil 8-dekabr."
    ],
    "correct": 1
  },
  {
    "q": "2018-yilda qabul qilingan “Faol tadbirkorlik, innovatsion g'oyalar va texnologiyalarni qo'llab-quvvatlash yili” dasturining asosiy maqsadi nima edi?",
    "options": [
      "Faqat paxta xomashyosini eksport qilish;",
      "Raqamli iqtisodiyotga o'tish uchun poydevor yaratish;",
      "Yangi siyosiy partiyalarni tashkil etish;",
      "Harbiy sanoat majmuasini isloh qilish."
    ],
    "correct": 1
  },
  {
    "q": "Jadid ma’rifatparvarlari tomonidan ochilgan “Usuli jadid” maktablarining an’anaviy maktablardan asosiy farqi nimada edi?",
    "options": [
      "Faqat diniy fanlarning o'qitilishi;",
      "Dunyoqarashni kengaytiruvchi dunyoviy fanlar va yangi metodlarning joriy etilishi;",
      "O'qishning bepul va ixtiyoriy ekanligi;",
      "Faqat boy tabaqa farzandlari uchun mo'ljallanganligi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning UNESCO tashkilotiga a’zo bo‘lishi qaysi sohalardagi xalqaro hamkorlikni kuchaytirdi?",
    "options": [
      "Faqat harbiy va strategik qurollanish;",
      "Ta'lim, fan va madaniy merosni saqlash;",
      "Bank-moliya va kredit tizimi;",
      "Qishloq xo'jaligi va suv resurslari."
    ],
    "correct": 1
  },
  {
    "q": "“Oliy Majlis” atamasining tarixiy ildizlari qaysi davr davlatchilik an’analariga borib taqaladi?",
    "options": [
      "Qadimiy turk xoqonligi kengashlariga;",

"Amir Temur va Temuriylar davridagi qurultoy va kengashlarga;",
      "Xiva va Qo'qon xonliklaridagi devonlarga;",
      "Buxoro amirligidagi oliy ulamolar kengashiga."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining birinchi Konstitutsiyasi (1992-yil) loyihasi ustida ish olib borgan komissiyaga kim raislik qilgan?",
    "options": [
      "Islom Karimov;",
      "Yo'ldosh Oxunboboyev;",
      "Shavkat Mirziyoyev;",
      "Akmal Saidov."
    ],
    "correct": 0
  },
  {
    "q": "2022-yilda Samarqandda bo‘lib o‘tgan ShHT sammitida qaysi davlat tashkilotga to‘laqonli a’zo bo‘lish uchun memorandum imzoladi?",
    "options": [
      "Hindiston;",
      "Eron;",
      "Turkiya;",
      "Afg'oniston."
    ],
    "correct": 1
  },
  {
    "q": "“Fuqarolarning o‘zini o‘zi boshqarish organlari to‘g‘risida”gi Qonun mahalla tizimiga qanday huquqiy maqom berdi?",
    "options": [
      "Davlat boshqaruvi organi maqomini;",
      "Nodavlat notijorat tashkiloti va jamoatchilik tuzilmasi maqomini;",
      "Siyosiy partiyaning hududiy bo'limi maqomini;",
      "Sud hokimiyatining quyi bo'g'ini maqomini."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda milliy valyuta “so‘m”ning qadrini tushirmaslik uchun 1994-yilda qanday iqtisodiy choralar ko‘rildi?",
    "options": [
      "Ichki bozorda faqat xorijiy valyuta ishlatishga ruxsat berildi;",
      "Markaziy bankning qat'iy pul-kredit siyosati va valyuta birjasining tashkil etilishi;",
      "Oltin zaxiralarini butunlay sotib yuborish;",
      "Narx-navoni davlat tomonidan cheklanmagan tarzda oshirish."
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida o‘tkazilgan “Referendum - 2002” natijasida qabul qilingan eng muhim siyosiy o‘zgarish?",
    "options": [
      "Prezidentlik boshqaruvidan voz kechildi;",
      "Ikki palatali parlament tizimiga o'tish va Prezident muddatini uzaytirish;",
      "O'lim jazosining bekor qilinishi;",
      "Sudyalarning umrbod saylanishi."
    ],
    "correct": 1
  },
  {
    "q": "“Inson huquqlari umumjahon deklaratsiyasi” O'zbekiston Parlamenti tomonidan qachon ratifikatsiya qilingan?",
    "options": [
      "1991-yil 30-sentyabr;",
      "1992-yil 8-dekabr;",
      "1995-yil 21-oktyabr;",
      "2017-yil 7-fevral."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda “Kichik biznes va tadbirkorlikni rivojlantirish agentligi” qaysi strategiya doirasida tashkil etildi?",
    "options": [
      "O'zbek modeli davrida;",
      "Harakatlar strategiyasi davrida;",
      "Taraqqiyot strategiyasi davrida;",
      "2030 iqtisodiy rejasi doirasida."
    ],
    "correct": 1
  },
  {
    "q": "2021-yil 6-noyabrda O‘zbekiston Respublikasi Prezidentining lavozimga kirishish marosimida e’lon qilingan asosiy konseptual g‘oya?",
    "options": [
      "“Ozod va obod Vatan”;",
      "“Yangi O'zbekiston - xalqchil va demokratik davlat”;",
      "“Kuch adolatdadir”;",
      "“O'zbekiston kelajagi buyuk davlat”."
    ],
    "correct": 1
  },
  {
    "q": "“Tarix xotirasi - ma’naviyat asosi” degan fikr mustaqillik davri tarixshunosligida qanday tamoyilni ifodalaydi?",
    "options": [
      "Tarixni siyosiylashtirishni;",
      "Milliy o'zlikni anglash va tarixiy haqiqatni tiklashni;",
      "Faqat qadimiy davrni o'rganishni;",
      "Xorijiy tarixchilarning fikrini inkor etishni."
    ],
    "correct": 1
  },


  {
    "q": "O‘zbekistonda 1980-yillarda avj olgan “Paxta ishi” qatag‘onining asosiy maqsadi aslida nima edi?",
    "options": [
      "Paxta yetishtirish texnologiyasini yaxshilash;",
      "Respublika rahbarlarini almashtirish va O'zbekistonning mustaqillikka intilish ruhini sindirish;",
      "O'zbekistonda yangi sanoat korxonalarini qurish;",
      "Ittifoq miqyosida paxta narxini pasaytirish."
    ],
    "correct": 1
  },
  {
    "q": "“O‘zbekiston ostonasida” iborasi tarixshunoslikda qaysi davrni tavsiflash uchun ishlatiladi?",
    "options": [
      "1917-yilgi inqilob arafasidagi davrni;",
      "1980-yillar oxiri, mustaqillikka erishish arafasidagi ijtimoiy-siyosiy jarayonlarni;",
      "Ikkinchi jahon urushidan keyingi tiklanish davrini;",
      "Yangi O'zbekistonning 2023-yildan keyingi bosqichini."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining 1991-yil 31-avgustda qabul qilingan “Davlat mustaqilligining asoslari to‘g‘risida”gi Qonunining ahamiyati nimada?",
    "options": [
      "U faqat iqtisodiy islohotlarni belgilab bergan;",
      "O'zbekistonni xalqaro huquqning mustaqil sub’ekti sifatida huquqiy mustahkamlagan;",
      "Faqat yangi poytaxtni belgilash haqidagi hujjat bo'lgan;",
      "Sovet Ittifoqi tarkibida qolish shartlarini ko'rsatib bergan."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning “O‘zbek modeli” doirasidagi “Davlat – bosh islohotchi” tamoyili nimani nazarda tutadi?",
    "options": [
      "Bozor iqtisodiyotidan voz kechib, rejalashtirishga qaytishni;",
      "Islohotlarning tartibsiz ketmasligi uchun davlat mas’uliyatni o‘z zimmasiga olishini;",
      "Xususiy mulkni butunlay davlat tasarrufiga o'tkazishni;",
      "Xalqaro banklar nazoratidan butunlay chiqib ketishni."
    ],
    "correct": 1
  },
  {
    "q": "Tarixiy xotira tushunchasining milliy o‘zlikni anglashdagi o‘rnini ko‘rsatuvchi eng to‘g‘ri javobni toping.",
    "options": [
      "Faqat o'tmishdagi urushlar haqida ma'lumotga ega bo'lish;",
      "Xalqning o‘z tarixi, ajdodlari merosi va milliy qadriyatlari asosida kelajagini qurishi;",
      "Boshqa xalqlar tarixini o'rganishni inkor etish;",
      "Tarixiy filmlarni ko'paytirish va ularni targ'ib qilish."
    ],
    "correct": 1
  },
  {
    "q": "2017-2021 yillarga mo‘ljallangan Harakatlar strategiyasining beshinchi yo‘nalishi nima deb nomlangan?",
    "options": [
      "Iqtisodiy rivojlanish va liberallashtirish;",
      "Xavfsizlik, millatlararo totuvlik va diniy bag‘rikenglikni ta’minlash hamda chuqur o‘ylangan tashqi siyosat;",
      "Ijtimoiy sohani rivojlantirish;",
      "Davlat va jamiyat qurilishini takomillashtirish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda 1992-yilda tashkil etilgan milliy aviakompaniya qanday nomlanadi?",
    "options": [
      "O'zbekiston havo yo'llari;",
      "Humo Air;",
      "Air Uzbekistan;",
      "Toshkent avia-yo'llari."
    ],
    "correct": 0
  },
  {
    "q": "Prezident Shavkat Mirziyoyevning BMT Bosh Assambleyasining 72-sessiyasidagi nutqi nima bilan tarixda qoldi?",
    "options": [
      "Faqat iqtisodiy yordam so'rash bilan;",
      "Markaziy Osiyoni tinchlik va hamkorlik hududiga aylantirish hamda Orol muammosini xalqaro darajaga ko'tarish bilan;",
      "Yangi harbiy blok tuzish taklifi bilan;",
      "BMTning qarorgohini Toshkentga ko'chirish taklifi bilan."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda 2020-yilda tashkil etilgan Mahalla va oilani qo‘llab-quvvatlash vazirligi (hozirgi Mahalla va nuroniylarni qo'llab-quvvatlash vazirligi)ning asosiy maqsadi?",
    "options": [
      "Faqat statistik ma'lumotlar to'plash;",
      "Jamiyatning eng quyi bo'g'ini bo'lgan mahalla institutini mustahkamlash va oilaviy qadriyatlarni himoya qilish;",
      "Aholi o'rtasida soliq yig'ishni tashkil etish;",
      "Chet elga chiquvchilarni nazorat qilish."
    ],
    "correct": 1
  },
  {
    "q": "Yangi O‘zbekiston taraqqiyot bosqichida “Inson qadri” tushunchasi huquqiy jihatdan qanday ta’riflanadi?",
    "options": [

"Faqat moddiy boylikka ega bo'lish huquqi;",
      "Har bir fuqaroning huquq va erkinliklari, qonuniy manfaatlarini davlat tomonidan kafolatlanishi;",
      "Faqat oliy ma'lumot olish imkoniyati;",
      "Davlat lavozimlarida ishlash huquqi."
    ],
    "correct": 1


 
 
   },
    ]),
  },




///////////////////////////////////////////////////////////////////////////////////////

   topic3: {
    title: "Tarix 3-Bo'lim",
    questions: randomizeQuestions([


 
  {
    "q": "O‘zbekiston Respublikasi 'Inson huquqlari bo‘yicha milliy markazi' qachon tashkil etilgan?",
    "options": [
      "1991-yil 31-avgust;",
      "1992-yil 8-dekabr;",
      "1996-yil 31-oktabr;",
      "2005-yil 27-yanvar."
    ],
    "correct": 2
  },
  {
    "q": "Islom Karimov qalamiga mansub 'O‘zbekiston mustaqillikka erishish ostonasida' asari qaysi davr voqealarini tahlil qiladi?",
    "options": [
      "1917-1924 yillar;",
      "Mustaqillik arafasidagi ijtimoiy-siyosiy vaziyatni;",
      "2017-yildan keyingi islohotlarni;",
      "Faqat iqtisodiy islohotlar tarixini."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda xususiy mulk huquqi qaysi huquqiy hujjatlar bilan kafolatlangan?",
    "options": [
      "Faqat Ma'muriy javobgarlik to'g'risidagi kodeks;",
      "Konstitutsiya va 'Xususiy mulkni himoya qilish va mulkdorlar huquqlarining kafolatlari to‘g‘risida'gi Qonun;",
      "Faqat 'Siyosiy partiyalar to'g'risida'gi qonun;",
      "Xalqaro kurash assotsiatsiyasi nizomi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi YeXHT (OBSE)ga qaysi yili a’zo bo‘lgan?",
    "options": [
      "1991-yil;",
      "1992-yil;",
      "1996-yil;",
      "2001-yil."
    ],
    "correct": 1
  },
  {
    "q": "2011-yilgi davlat dasturining asosini qaysi tamoyil tashkil etgan?",
    "options": [
      "Qishloq xo'jaligini isloh qilish;",
      "Kichik biznes va xususiy tadbirkorlikka keng yo‘l ochish;",
      "Yirik sanoat korxonalarini davlatlashtirish;",
      "Tashqi qarzlarni uzish strategiyasi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning birinchi xalqaro avtomobil yo‘li yo'nalishini aniqlang:",
    "options": [
      "Toshkent-Termiz-Mozori Sharif;",
      "Andijon-O‘sh-Qashqar;",
      "Buxoro-Ashxobod-Tehron;",
      "Samarqand-Dushanbe."
    ],
    "correct": 1
  },
  {
    "q": "Toshkent islom universiteti qachon tashkil etilgan?",
    "options": [
      "1991-yilda;",
      "1994-yilda;",
      "1999-yilda;",
      "2014-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda 'Siyosiy partiyalar to‘g‘risida'gi Qonun qabul qilingan sana?",
    "options": [
      "1991-yil 18-noyabr;",
      "1996-yil 26-dekabr;",
      "1994-yil 22-sentabr;",
      "1997-yil 29-avgust."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Senatining ilk majlisi qachon o'tkazilgan?",
    "options": [
      "1992-yil 2-iyul;",
      "2005-yil 27-yanvar;",
      "1991-yil 31-avgust;",
      "2010-yil 1-yanvar."
    ],
    "correct": 1
  },
  {
    "q": "'O‘zbekiston XXI asr bo‘sag‘asida: xavfsizlikka tahdid, barqarorlik shartlari va taraqqiyot kafolatlari' asari nechanchi yili nashr etilgan?",
    "options": [
      "1991-yil;",
      "1993-yil;",
      "1997-yil;",
      "2000-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Markaziy banki qaysi bank negizida tashkil etilgan?",
    "options": [
      "Sobiq Ittifoq jamg'arma banki;",
      "O‘zbekiston Respublikasi Davlat banki;",
      "Xalqaro valyuta jamg'armasi;",
      "Milliy bank (NBU)."
    ],
    "correct": 1
  },
  {
    "q": "Yunesko tomonidan 'Jahon merosi ro‘yxati'ga kiritilgan O‘zbekistondagi birinchi shahar (ob’ekt) qaysi?",
    "options": [
      "Samarqand ('Registon' majmuasi);",
      "Buxoro ('Ark' qal'asi);",
      "Xiva ('Ichan-qal’a' majmuasi);",
      "Termiz ('Fayoztepa')."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Islom hamkorlik tashkilotiga (IHT) qachon a’zo bo‘lgan?",
    "options": [
      "1992-yil;",
      "1996-yil;",
      "2005-yil;",
      "2017-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda ilk bor Prezidentlik saylovi muqobillik asosida qachon o‘tkazilgan?",
    "options": [
      "1990-yil 24-mart;",
      "1991-yil 29-dekabr;",
      "2000-yil 9-yanvar;",
      "2016-yil 4-dekabr."
    ],
    "correct": 1
  },
  {
    "q": "'Paxta yakka-hokimligi' tushunchasining mazmuni nima?",
    "options": [
      "Faqat yuqori sifatli paxta yetishtirish;",

"Qishloq xo‘jaligida faqat paxtaga e’tibor qaratilib, boshqa tarmoqlarning chetda qolishi;",
      "Paxta sanoatida yangi texnologiyalarni qo'llash;",
      "Paxta eksportini to'liq davlat nazoratiga olish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyaviy sudi qachon tashkil etilgan?",
    "options": [
      "1991-yilda;",
      "1992-yilda;",
      "1995-yilda;",
      "2008-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda akademik litseylar va kasb-hunar kollejlari tizimi qaysi hujjat asosida joriy etilgan?",
    "options": [
      "Ta'lim to'g'risidagi qonun (1991);",
      "Kadrlar tayyorlash milliy dasturi (1997);",
      "Harakatlar strategiyasi (2017);",
      "Prezident farmoni (2020)."
    ],
    "correct": 1
  },
  {
    "q": "Amir Temur tavalludining 660 yilligi Yunesko shafeligida qachon nishonlangan?",
    "options": [
      "1991-yilda;",
      "1996-yilda;",
      "2007-yilda;",
      "1994-yilda."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda lotin yozuviga asoslangan o‘zbek alifbosini joriy etish to‘g‘risidagi qonun qachon qabul qilingan?",
    "options": [
      "1989-yil 21-oktabr;",
      "1991-yil 31-avgust;",
      "1993-yil 2-sentabr;",
      "1996-yil 31-oktabr."
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan yirik issiqlik elektr stansiyasi qaysi?",
    "options": [
      "Sirdaryo IES;",
      "Toshkent IES;",
      "Talimarjon IES;",
      "Navoiy IES."
    ],
    "correct": 2
  }
,
  {
    "q": "O‘zbekistonda nodavlat-notijorat tashkilotlari (NNT) faoliyatini tartibga soluvchi qonun qachon qabul qilingan?",
    "options": [
      "1991-yil 15-fevral;",
      "1996-yil 26-dekabr;",
      "1999-yil 14-aprel;",
      "2017-yil 3-yanvar."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston iqtisodiyotini modernizatsiya qilishning asosiy strategik maqsadini aniqlang:",
    "options": [
      "Faqat xomashyo eksportini ko'paytirish;",
      "Jahon bozorida raqobatbardosh bo‘lgan tayyor mahsulotlar ishlab chiqarish;",
      "Barcha korxonalarni davlat tasarrufiga qaytarish;",
      "Faqat ichki bozorni mahsulot bilan to'ldirish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Qahramoni unvoni nechanchi yili ta’sis etilgan?",
    "options": [
      "1991-yil;",
      "1992-yil;",
      "1994-yil;",
      "1996-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda prokuratura organlari xodimlari kuni qachon nishonlanadi?",
    "options": [
      "8-yanvar;",
      "14-yanvar;",
      "2-sentabr;",
      "8-dekabr."
    ],
    "correct": 0
  },
  {
    "q": "Samarqand shahrining 2750 yillik yubileyi nechanchi yilda keng nishonlandi?",
    "options": [
      "1996-yil;",
      "2001-yil;",
      "2007-yil;",
      "2010-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda 'Saxovat va ko‘mak' jamg‘armasi qachon va nima maqsadda tashkil etilgan?",
    "options": [
      "1991-yil - mustaqillikni mustahkamlash uchun;",
      "1999-yil - terrorizmga qarshi kurash uchun;",
      "2020-yil - pandemiya davrida aholini qo'llab-quvvatlash uchun;",
      "2017-yil - tadbirkorlikni rivojlantirish uchun."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining 'Referendum to‘g‘risida'gi Qonuni qachon qabul qilingan?",
    "options": [
      "1991-yil 31-avgust;",
      "1991-yil 18-noyabr;",
      "1992-yil 8-dekabr;",
      "2023-yil 30-aprel."
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan birinchi yirik va zamonaviy masjid qaysi?",
    "options": [
      "Hazrati Imom masjidi;",
      "Minor masjidi;",
      "Ko'kaldosh masjidi;",
      "Shayx Zayniddin masjidi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Mudofaa vazirligi tashkil etilgan sanani ko'rsating:",
    "options": [
      "1991-yil 31-avgust;",
      "1991-yil 6-sentabr;",
      "1992-yil 14-yanvar;",
      "1992-yil 2-mart."
    ],
    "correct": 1
  },
  {
    "q": "'Inson manfaatlari hamma narsadan ustun' g‘oyasi qaysi yilning asosiy shiori bo‘lgan?",
    "options": [
      "2010-yil;",
      "2011-yil;",
      "2017-yil;",
      "2020-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda birinchi marta xususiylashtirish jarayoni qaysi yildan boshlangan?",
    "options": [
      "1990-yildan;",
      "1991-yildan;",
      "1992-yildan;",
      "1994-yildan."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Tashqi ishlar vazirligi qachon tashkil etilgan?",
    "options": [
      "1991-yil avgust oxiri;",
      "1992-yil mart;",
      "1991-yil dekabr;",
      "1990-yil iyun."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston iqtisodiyotida 'erkin iqtisodiy zonalar' (EIZ) tashkil etish qaysi hududdan boshlangan?",
    "options": [
      "Toshkent shahridan;",
      "Navoiy viloyatidan;",
      "Jizzax viloyatidan;",
      "Angren shahridan."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi 'Davlat gerbi'ning muallifi kim?",
    "options": [
      "Abdulla Oripov;",
      "Mutal Burxonov;",
      "Anvar Mamajonov;",
      "Akmal Saidov."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksi qachon qabul qilingan?",
    "options": [
      "1991-yil;",
      "1992-yil;",
      "1994-yil 22-sentabr;",
      "1996-yil."
    ],
    "correct": 2
  },
  {
    "q": "'Sog‘lom avlod uchun' ordeni nechanchi yili ta’sis etilgan?",
    "options": [
      "1991-yil;",
      "1993-yil 4-mart;",
      "1995-yil;",
      "1998-yil."
    ],

"correct": 1
  },
  {
    "q": "O‘zbekistonda 'Bilimlar kuni' qachon nishonlanadi?",
    "options": [
      "1-sentabr;",
      "2-sentabr;",
      "5-sentabr;",
      "1-oktabr."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining 'Davlat chegarasi to‘g‘risida'gi Qonuni birinchi marta qachon qabul qilingan?",
    "options": [
      "1991-yilda;",
      "1995-yilda;",
      "1999-yil 20-avgustda;",
      "2023-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston iqtisodiy islohotlariga doir 'O‘zbekiston iqtisodiy islohotlarni chuqurlashtiyorish yo‘lida' asari muallifi kim?",
    "options": [
      "Shavkat Mirziyoyev;",
      "Islom Karimov;",
      "Akmal Saidov;",
      "Sodiq Safoyev."
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro moliya korporatsiyasi (IFC)ga O‘zbekiston qachon a’zo bo‘lgan?",
    "options": [
      "1991-yil;",
      "1992-yil;",
      "1993-yil;",
      "1996-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda «Xalqaro kurash assotsiatsiyasi» (IKA) qachon va qayerda tashkil etilgan?",
    "options": [
      "1991-yil, Nukusda;",
      "1998-yil, Toshkentda;",
      "2001-yil, Termizda;",
      "2017-yil, Samarqandda."
    ],
    "correct": 1
  },
  {
    "q": "«O‘zbekiston: milliy istiqlol, iqtisod, siyosat, mafkura» asari nechanchi yili nashr etilgan?",
    "options": [
      "1991-yil;",
      "1993-yil;",
      "1996-yil;",
      "1999-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining xalqaro maydondagi nufuzini oshirgan YeXHT (OBSE)ga a’zo bo‘lgan aniq sanasini ko‘rsating:",
    "options": [
      "1992-yil 2-mart;",
      "1992-yil 26-fevral;",
      "1991-yil 31-avgust;",
      "1993-yil 10-may."
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkent shahrida barpo etilgan «Minor» masjidi qachon rasman ochilgan?",
    "options": [
      "1999-yil;",
      "2005-yil;",
      "2014-yil;",
      "2017-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda «Siyosiy partiyalar to‘g‘risida»gi Qonunning qabul qilinishi qaysi jarayonni huquqiy mustahkamladi?",
    "options": [
      "Bir partiyaviylik tizimini;",
      "Ko‘ppartiyaviylik va siyosiy plyuralizmni;",
      "Faqat davlat organlari faoliyatini;",
      "Saylov komissiyalari tarkibini."
    ],
    "correct": 1
  },
  {
    "q": "RAQMLASHMAGAN.docx ma'lumotlariga ko'ra, O‘zbekiston Respublikasi Oliy Majlisi Senatining birinchi majlisi qachon bo‘lib o‘tgan?",
    "options": [
      "2002-yil 27-yanvar;",
      "2004-yil 26-dekabr;",
      "2005-yil 27-yanvar;",
      "2010-yil 1-yanvar."
    ],
    "correct": 2
  },
  {
    "q": "Inson huquqlari bo‘yicha milliy markazning asosiy vazifasi nima?",
    "options": [
      "Jinoyatchilarni jazolash;",
      "Inson huquqlari sohasidagi davlat siyosatini amalga oshirish va xalqaro tashkilotlar bilan hamkorlik qilish;",
      "Faqat yangi qonunlar loyihasini yozish;",
      "Sud qarorlarini bekor qilish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda xususiy mulkni himoya qilishga oid maxsus Qonun nechanchi yili qabul qilingan?",
    "options": [
      "1991-yil;",
      "1996-yil;",
      "2012-yil (Yangi tahriri);",
      "2017-yil."
    ],
    "correct": 2
  },
  {
    "q": "Toshkent islom universitetining tashkil etilishi qaysi sohadagi islohotlarning bir qismi hisoblanadi?",
    "options": [
      "Faqat iqtisodiy islohotlar;",
      "Diniy-ma'rifiy sohadagi islohotlar va kadrlar tayyorlash;",
      "Mudofaa tizimini mustahkamlash;",
      "Qishloq xo'jaligini modernizatsiya qilish."
    ],
    "correct": 1
  },
  {
    "q": "«Inson manfaatlari hamma narsadan ustun» tamoyili asosida amalga oshirilgan islohotlar asosan qaysi davrni qamrab oladi?",
    "options": [
      "1980-yillar oxirini;",
      "Mustaqillikning dastlabki 5 yilini;",
      "2017-yildan keyingi Yangi O‘zbekiston bosqichini;",
      "Faqat sovet davri oxirini."
    ],
    "correct": 2

 
   },
    ]),
  },

  
//////////////////////////////////////////////////////////////////////////////////////

  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////

   topic3: {
    title: "Tarix 3-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "O‘zbekistonda soliq tizimining huquqiy va tashkiliy shakllanishi qaysi davrga to‘g‘ri keladi?",
    "options": [
      "1990-yil o'rtalariga;",
      "1991-yil oxiri – 1992-yil boshlariga;",
      "1994-yil so'm muomalaga kiritilgan davrga;",
      "2017-yilgi soliq islohotlari davriga."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning Shanxay Hamkorlik Tashkilotiga (ShHT) asoschi davlat sifatida kirishi qachon yuz bergan?",
    "options": [
      "1996-yil 26-aprelda;",
      "2001-yil 15-iyunda;",
      "2002-yil 7-iyunda;",
      "2016-yil 24-iyunda."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda «Onaning va bolaning sog‘lomligi» yili deb e’lon qilingan yilni aniqlang:",
    "options": [
      "1998-yil;",
      "2000-yil;",
      "2014-yil;",
      "2016-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining 1-moddasida davlatning huquqiy maqomi Yangi tahrirda qanday belgilangan?",
    "options": [
      "Suveren demokratik respublika;",
      "Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat;",
      "Mustaqil va bozor iqtisodiyotiga asoslangan davlat;",
      "Dunyo hamjamiyatining teng huquqli sub'ekti."
    ],
    "correct": 1
  },
  {
    "q": "«Alpomish» dostonining 1000 yilligi keng nishonlangan yilni ko'rsating:",
    "options": [
      "1991-yil;",
      "1996-yil;",
      "1999-yil;",
      "2001-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda Milliy gvardiya mustaqil organ sifatida qachon qayta tashkil etilgan?",
    "options": [
      "1992-yilda;",
      "2005-yilda;",
      "2017-yilda;",
      "2021-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Markaziy bankining raisini lavozimga tayinlash tartibi qanday?",
    "options": [
      "Prezident tomonidan bevosita tayinlanadi;",
      "Prezident taqdimiga binoan Senat tomonidan tayinlanadi;",
      "Vazirlar Mahkamasi tomonidan tasdiqlanadi;",
      "Oliy Majlis Qonunchilik palatasi tomonidan saylanadi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda «Sog‘lom ona va bola yili» deb e’lon qilingan yil qaysi?",
    "options": [
      "2000-yil;",
      "2012-yil;",
      "2016-yil;",
      "2018-yil."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining deputatlari soni necha kishidan iborat?",
    "options": [
      "100 nafar;",
      "120 nafar;",
      "150 nafar;",
      "250 nafar."
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan Toshkent shahridagi eng yirik sport inshootlaridan biri – «Bunyodkor» stadioni qachon ochilgan?",
    "options": [
      "2008-yil;",
      "2012-yil;",
      "2015-yil;",
      "2019-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda «Obod turmush yili» deb e’lon qilingan yilni aniqlang:",
    "options": [
      "2011-yil;",
      "2013-yil;",
      "2015-yil;",
      "2017-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Moliya vazirligi huzuridagi Sug‘urta nazorati davlat inspeksiyasi qachon tashkil etilgan?",
    "options": [
      "1991-yil;",
      "1994-yil;",
      "1998-yil;",
      "2002-yil."
    ],
    "correct": 1
  },
  {
    "q": "Iqtisodiyotni «liberalizatsiyalash» tushunchasining mohiyati nima?",
    "options": [
      "Davlat nazoratini har bir sohada kuchaytirish;",
      "Davlatning iqtisodiyotga aralashuvini kamaytirish va bozor erkinligini oshirish;",
      "Faqat xorijiy investitsiyalarga tayanish;",
      "Barcha narxlarni davlat tomonidan belgilash."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi «Ma’naviyat va ma’rifat» markazi rahbari kim tomonidan tayinlanadi?",
    "options": [
      "Bosh vazir tomonidan;",
      "Prezident tomonidan;",
      "Oliy Majlis Senati tomonidan;",
      "Madaniyat vaziri tomonidan."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda birinchi marta «Milliy gvardiya kuni» qachon belgilangan?",
    "options": [
      "14-yanvar;",
      "23-iyun;",
      "30-iyun;",
      "1-sentabr."
    ],

"correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining eski tahririda oila, bolalar va yoshlar masalalari nechanchi bobda aks etgan edi?",
    "options": [
      "10-bob;",
      "12-bob;",
      "14-bob;",
      "18-bob."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda «Faol tadbirkorlik va innovatsion g‘oyalarni qo‘llab-quvvatlash yili» qaysi yil edi?",
    "options": [
      "2017-yil;",
      "2018-yil;",
      "2019-yil;",
      "2020-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining birinchi spikeri kim bo‘lgan?",
    "options": [
      "Erkin Xalilov;",
      "Dilorom Toshmuhammedova;",
      "Nurdinjon Ismoilov;",
      "Akmal Saidov."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining «Eksport nazorati to‘g‘risida»gi Qonuni qachon qabul qilingan?",
    "options": [
      "1994-yil;",
      "2000-yil;",
      "2004-yil;",
      "2012-yil."
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Toshkent shahrida barpo etilgan «Xotira maydoni» va «Motamsaro ona» haykali qachon ochilgan?",
    "options": [
      "1991-yil 1-sentabr;",
      "1999-yil 9-may;",
      "1995-yil 31-avgust;",
      "2005-yil 9-may."
    ],
    "correct": 1
  }
,
  {
    "q": "O‘zbekistonda iqtisodiyotni «liberalizatsiyalash» jarayonining asosiy yo‘nalishlaridan biri nima?",
    "options": [
      "Davlat korxonalarini ko'paytirish;",
      "Valyuta bozorini tartibga solish va tashqi savdoni erkinlashtirish;",
      "Soliq stavkalarini muttasil oshirib borish;",
      "Markazlashgan rejalashtirish tizimiga qaytish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi «Moliya vazirligi» huzuridagi Sug‘urta nazorati davlat inspeksiyasi qachon tashkil etilgan?",
    "options": [
      "1991-yilda;",
      "1994-yilda;",
      "1998-yilda;",
      "2002-yilda."
    ],
    "correct": 1
  },
  {
    "q": "«Ma’naviyat va ma’rifat» markazi rahbari lavozimiga tayinlov qaysi davlat organi tomonidan amalga oshiriladi?",
    "options": [
      "Vazirlar Mahkamasi;",
      "Oliy Majlis Senati;",
      "O‘zbekiston Respublikasi Prezidenti;",
      "Madaniyat vazirligi."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda «Milliy gvardiya kuni» qaysi sanada nishonlanishi belgilangan?",
    "options": [
      "14-yanvar;",
      "23-iyun;",
      "30-iyun;",
      "25-oktabr."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining eski tahririda «Oila» bobi nechanchi bob hisoblangan?",
    "options": [
      "12-bob;",
      "14-bob;",
      "16-bob;",
      "18-bob."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda «Obod turmush yili» deb e’lon qilingan yilni ko'rsating:",
    "options": [
      "2011-yil;",
      "2013-yil;",
      "2015-yil;",
      "2017-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining «Eksport nazorati to‘g‘risida»gi Qonuni qachon qabul qilingan?",
    "options": [
      "2000-yilda;",
      "2004-yilda;",
      "2008-yilda;",
      "2012-yilda."
    ],
    "correct": 1
  },
  {
    "q": "Toshkent shahridagi «Xotira maydoni» va «Motamsaro ona» haykali qachon ochilgan?",
    "options": [
      "1991-yil 1-sentabr;",
      "1995-yil 9-may;",
      "1999-yil 9-may;",
      "2005-yil 1-sentabr."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining birinchi spikeri kim bo‘lgan?",
    "options": [
      "Erkin Xalilov;",
      "Akmal Saidov;",
      "Dilorom Toshmuhammedova;",
      "Nurdinjon Ismoilov."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda «Faol tadbirkorlik va innovatsion g‘oyalarni qo‘llab-quvvatlash yili» qaysi yil edi?",
    "options": [
      "2017-yil;",
      "2018-yil;",
      "2019-yil;",
      "2020-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Markaziy bankining raisi qanday tartibda lavozimga tayinlanadi?",
    "options": [
      "Bosh vazir taqdimiga binoan Prezident tomonidan;",
      "Prezident taqdimiga binoan Senat tomonidan;",
      "Prezident tomonidan bevosita;",
      "Xalq deputatlari kengashi tomonidan."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonning Shanxay Hamkorlik Tashkilotiga (ShHT) asoschi davlat sifatida kirishi qaysi sanada yuz bergan?",
    "options": [
      "1996-yil 26-aprel;",
      "2001-yil 15-iyun;",
      "2005-yil 10-iyul;",
      "2016-yil 24-iyun."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda «Onaning va bolaning sog‘lomligi» yili deb e’lon qilingan yilni aniqlang:",
    "options": [
      "1998-yil;",
      "2000-yil;",
      "2005-yil;",
      "2016-yil."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining 1-moddasida O‘zbekiston qanday davlat deb e’lon qilingan (yangi tahrirda)?",
    "options": [
      "Suveren demokratik respublika;",
      "Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat;",
      "Mustaqil va bozor iqtisodiyotiga asoslangan respublika;",
      "Markaziy Osiyodagi yetakchi demokratik davlat."
    ],
    "correct": 1
  },
  {
    "q": "«Alpomish» dostonining 1000 yilligi nechanchi yilda nishonlangan?",
    "options": [
      "1991-yilda;",
      "1996-yilda;",
      "1999-yilda;",
      "2001-yilda."
    ],
    "correct": 2
  },
  {

"q": "O‘zbekistonda Milliy gvardiya qachon mustaqil organ sifatida qayta tashkil etilgan?",
    "options": [
      "1992-yilda;",
      "2005-yilda;",
      "2017-yilda;",
      "2021-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining deputatlari necha kishidan iborat?",
    "options": [
      "100 nafar;",
      "120 nafar;",
      "150 nafar;",
      "250 nafar."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda «Sog‘lom ona va bola yili» qaysi yil edi?",
    "options": [
      "2000-yil;",
      "2012-yil;",
      "2016-yil;",
      "2020-yil."
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan «Bunyodkor» stadioni nechanchi yili foydalanishga topshirilgan?",
    "options": [
      "2008-yilda;",
      "2010-yilda;",
      "2012-yilda;",
      "2015-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda soliq tizimini shakllantirish jarayoni qachon boshlangan?",
    "options": [
      "1990-yil iyunida;",
      "1991-yil oxiri – 1992-yil boshlarida;",
      "1994-yil so'm muomalaga kiritilgach;",
      "2017-yil Harakatlar strategiyasi doirasida."
    ],
    "correct": 1
  }
,
  {
    "q": "O‘zbekiston Respublikasi «Eksport nazorati to‘g‘risida»gi Qonunining maqsadi nimadan iborat?",
    "options": [
      "Faqat qishloq xo'jaligi mahsulotlari eksportini ko'paytirish;",
      "Ommaviy qirg'in qurollari va boshqa turdagi qurollar eksportini xalqaro normalar asosida tartibga solish;",
      "Barcha eksport qilinadigan tovarlardan bojxona to'lovlarini bekor qilish;",
      "Faqat qo'shni davlatlar bilan savdo aloqalarini cheklash."
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan Toshkent shahridagi «Bunyodkor» sport majmuasi (stadioni) necha kishiga mo‘ljallangan?",
    "options": [
      "15 000;",
      "34 000;",
      "55 000;",
      "75 000."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda «Obod turmush yili» dasturi doirasida asosiy e’tibor nimaga qaratilgan?",
    "options": [
      "Faqat yangi korxonalar qurishga;",
      "Aholi turmush darajasini oshirish, mahalla va oilalarda tinchlik-totuvlikni mustahkamlashga;",
      "Siyosiy partiyalar sonini oshirishga;",
      "Oliy ta'lim muassasalari sonini ko'paytirishga."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining deputatlari necha yil muddatga saylanadi?",
    "options": [
      "3 yil;",
      "5 yil;",
      "7 yil;",
      "Umrbod."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Markaziy banki raisining vakolat muddati necha yil?",
    "options": [
      "3 yil;",
      "5 yil;",
      "7 yil;",
      "Prezident xohishiga ko'ra."
    ],
    "correct": 1
  },
  {
    "q": "Shanxay Hamkorlik Tashkiloti (ShHT)ning doimiy faoliyat ko‘rsatuvchi organi – Mintaqaviy aksilterror tuzilmasi (RATS) qarorgohi qaysi shaharda joylashgan?",
    "options": [
      "Pekin;",
      "Moskva;",
      "Toshkent;",
      "Ostona."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda «Sog‘lom ona va bola yili» (2016-yil) davlat dasturining asosiy maqsadi nima edi?",
    "options": [
      "Faqat maktablar qurish;",
      "Oila, ona va bolani ijtimoiy himoya qilish, tibbiy xizmat sifatini oshirish;",
      "Yangi turdagi dori-darmonlar eksportini yo'lga qo'yish;",
      "Xotin-qizlar uchun yangi siyosiy partiya tuzish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahririga ko‘ra, O‘zbekiston qanday davlat deb e'tirof etiladi?",
    "options": [
      "Faqat suveren respublika;",
      "Suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat;",
      "Bozor iqtisodiyoti rivojlangan respublika;",
      "Markaziy Osiyo ittifoqi a'zosi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston iqtisodiyotini «liberalizatsiyalash» jarayonida valyuta bozorini isloh qilish qachon yangi bosqichga ko‘tarildi?",
    "options": [
      "1994-yilda;",
      "2003-yilda (konvertatsiya joriy etilishi bilan);",
      "2017-yilda (valyuta bozorini to'liq erkinlashtirish bilan);",
      "2021-yilda."
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda soliq islohotlari natijasida jismoniy shaxslardan olinadigan daromad solig‘ining yagona stavkasi necha foiz qilib belgilangan?",
    "options": [
      "10%;",
      "12%;",
      "15%;",
      "23%."
    ],
    "correct": 1

 
 
   },
    ]),
  },
  
///////////////////////////////////////////////////////////////

  
   // topic2: {
 //    title: "Tarix 2-Bo'lim",
 //    questions: randomizeQuestions([


 
 
 //   },
 //    ]),
 //  },

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  topic10: {
    title: "1-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Konstitutsiyaviy huquq fani predmeti hisoblangan ijtimoiy munosabatlar doirasini aniqlang:",
        options: [
          "Davlat tuzilishi hamda inson huquq va erkinliklari bilan bog'liq ijtimoiy munosabatlar.",
          "Davlat apparati mexanizmi hamda fuqarolar bilan bo'ladigan ma'muriy munosabatlar.",
          "Jamiyatning siyosiy tizimi hamda xalqaro huquq subyektlari bilan munosabatlari.",
          "Davlat organlari faoliyatini hamda jamoat birlashmalari tizimini tartibga soluvchi normalar.",
        ],
        correct: 0,
      },
      {
        q: "Konstitutsiyaviy huquqiy munosabatlar subyektlari tizimiga qaysi qatordagilar kiritiladi?",
        options: [
          "Davlat, fuqarolar, jamoat birlashmalari va korxonalar.",
          "Davlat, fuqarolar, jamoat birlashmalari va xalqaro tashkilotlar.",
          "Davlat organlari, mansabdor shaxslar va chet el fuqarolari.",
          "Davlat hokimiyati subyektlari, xalq va diniy tashkilotlar.",
        ],
        correct: 1,
      },
      {
        q: "Quyidagilarning qaysi biri mustaqil Konstitutsiyaviy huquqiy institut hisoblanadi?",
        options: [
          "Davlat hokimiyati, saylov tizimi, inson huquqlari va Konstitutsiyaviy nazorat.",
          "Prezident devoni, Vazirlar Mahkamasi, sudlar va prokuratura organlari.",
          "Qonun ustuvorligi, ijtimoiy adolat, birdamlik va xalq hokimiyatchiligi.",
          "Sud hokimiyati, prokuratura nazorati va ma'muriy javobgarlik tizimi.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston Respublikasi Konstitutsiyaviy huquqining manbalari iyerarxiyasini ko'rsating:",
        options: [
          "Konstitutsiya, qonunlar, xalqaro shartnomalar, Prezident farmonlari va qarorlari.",
          "Konstitutsiya, qonunlar, xalqaro shartnomalar va Vazirlar Mahkamasi qarorlari.",
          "Konstitutsiya, kodekslar, xalqaro huquq normalari va sud pretsedentlari.",
          "Konstitutsiya, qonunlar, Prezident farmonlari hamda idoraviy normativ hujjatlar.",
        ],
        correct: 0,
      },
      {
        q: "Konstitutsiyaning funksiyalari to'g'ri bayon etilgan bandni toping:",
        options: [
          "Normativ, siyosiy, tartibga soluvchi, himoya va tarbiyaviy.",
          "Yuridik, mafkuraviy, tashkiliy, nazorat va yo'naltiruvchi.",
          "Ijtimoiy, iqtisodiy, huquqiy, diplomatik va metodologik.",
          "Siyosiy, tartibga soluvchi, nazorat qiluvchi va jazolovchi.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston Respublikasi Konstitutsiyasining tarkibiy tuzilishi qaysi tizimda shakllantirilgan?",
        options: [
          "Muqaddima, qismlar, boblar va moddalar.",
          "Muqaddima, bo'limlar, boblar va moddalar.",
          "Kirish qismi, bo'limlar, fasllar va moddalar.",
          "Kirish qismi, qismlar, bandlar va moddalar.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaga ko'ra davlat suvereniteti tushunchasining mohiyati nima?",
        options: [
          "Davlatning ichki munosabatlarda ustunligi va tashqi munosabatlarda mustaqilligi.",
          "Davlatning o'z hududida mutloq va cheklanmagan hokimiyatga ega bo'lishi.",
          "Davlat chegaralarining daxlsizligi hamda hududiy butunligining tan olinishi.",
          "Davlat hokimiyati organlarining xalqaro huquq normalaridan ustuvorligi.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston Respublikasining boshqaruv shakli qanday belgilangan?",
        options: [
          "Demokratik respublika.",
          "Unitar respublika.",
          "Respublika.",
          "Suveren respublika.",
        ],
        correct: 2,
      },
      {
        q: "Davlat tili to'g'risidagi Konstitutsiyaviy qoida qaysi javobda to'liq aks etgan?",
        options: [
          "O'zbekiston Respublikasining davlat tili o'zbek tilidir.",
          "O'zbekiston Respublikasining davlat tili o'zbek tili va qoraqalpoq tilidir.",
          "O'zbekiston Respublikasining davlat tili o'zbek tili bo'lib, u yagona tildir.",
          "O'zbek tili davlat tili sifatida millatlararo muloqot tili hisoblanadi.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston Respublikasining davlat ramzlari qaysi qatorda to'liq ko'rsatilgan?",
        options: [
          "Bayroq, gerb, madhiya.",
          "Bayroq, gerb, valyuta.",
          "Bayroq, gerb, madhiya, poytaxt.",
          "Bayroq, gerb, konstitutsiya.",
        ],
        correct: 0,
      },
      {
        q: "Davlat hokimiyatini amalga oshirish tizimi qaysi organlar bo'linishiga asoslanadi?",
        options: [
          "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati organlari.",
          "Vakillik, ijro etuvchi va sud hokimiyati organlari.",
          "Markaziy, hududiy va mahalliy davlat hokimiyati organlari.",
          "Davlat boshqaruvi, qonun chiqaruvchi va nazorat organlari.",
        ],
        correct: 0,
      },
      {
        q: "Konstitutsiyaga ko'ra O'zbekiston xalqini kimlar tashkil etadi?",
        options: [
          "O'zbekiston Respublikasi hududida istiqomat qiluvchi barcha shaxslar.",
          "Kelib chiqishidan qat’i nazar, O'zbekiston Respublikasining fuqarolari.",
          "O'zbekiston Respublikasida doimiy yashovchi mahalliy millat vakillari.",
          "Saylov huquqiga ega bo'lgan O'zbekiston Respublikasi fuqarolari.",
        ],
        correct: 1,
      },
      {
        q: "Umumxalq ovoziga – referendumga qo'yiladigan masalalar doirasini aniqlang:",
        options: [
          "Konstitutsiyaga o'zgartirishlar hamda muhim davlat masalalari.",
          "Konstitutsiyaviy qonunlar hamda hududiy o'zgarishlar masalasi.",
          "Prezident saylovi hamda davlat byudjetini tasdiqlash masalalari.",
          "Hukumat tarkibini o'zgartirish hamda qonunlar qabul qilish.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston xalqi nomidan ish olib borish huquqi kimga tegishli?",
        options: [
          "O'zbekiston Respublikasi Prezidenti va Vazirlar Mahkamasi.",
          "O'zbekiston Respublikasi Prezidenti va Oliy Majlis.",
          "Oliy Majlis Qonunchilik palatasi va Senati.",
          "Davlat hokimiyatining barcha yuqori darajadagi organlari.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasida davlat hokimiyati tizimi qaysi prinsipga asoslanadi?",
        options: [
          "Hokimiyatning yagonaligi va qonun chiqaruvchi hokimiyat ustunligi.",
          "Hokimiyatning bo'linishi, vakillik va qonuniylik prinsiplari.",
          "Markazlashgan boshqaruv va mahalliy hokimiyat mustaqilligi.",
          "Demokratik plyuralizm va ijro etuvchi hokimiyat mas'uliyati.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasida ijtimoiy hayot qanday asosda rivojlanadi?",
        options: [
          "Siyosiy institutlar, mafkuralar va fikrlarning xilma-xilligi asosida.",
          "Inson huquqlari va erkinliklarining qonuniy kafolati asosida.",
          "Yagona davlat mafkurasi va ijtimoiy adolat prinsiplari asosida.",
          "Milliy qadriyatlar va xalqaro huquqiy normalar uyg'unligi asosida.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekistonda demokratiya qaysi prinsiplarga tayanadi?",
        options: [
          "Umuminsoniy prinsiplar, inson huquqlari va erkinliklarining ustuvorligi.",
          "Fuqarolarning siyosiy tengligi va davlat boshqaruvidagi ishtiroki.",
          "Qonun ustuvorligi va davlat organlarining jamoatchilik nazorati.",
          "Xalqaro huquq normalari va milliy an'analarning ustuvorligi.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston Respublikasida nima oliy qadriyat hisoblanadi?",
        options: [
          "Davlat suvereniteti va hududiy yaxlitligi.",
          "Inson, uning hayoti, erkinligi, sha’ni va qadr-qimmati.",
          "Konstitutsiya va qonunlarning ustuvorligi.",
          "Xalq farovonligi va jamiyat barqarorligi.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda demokratik huquq va erkinliklarning himoya vositasi nima?",
        options: [
          "Inson huquqlari bo'yicha milliy markaz va ombudsman.",
          "Konstitutsiya va qonunlar bilan himoya qilinishi.",
          "Huquqni muhofaza qiluvchi organlar va sudlar faoliyati.",
          "Xalqaro shartnomalar va davlatning majburiyatlari.",
        ],
        correct: 1,
      },
      {
        q: "Davlat o'z faoliyatini amalga oshirishda qaysi prinsiplarga asoslanadi?",
        options: [
          "Inson farovonligi, qonuniylik, ijtimoiy adolat va birdamlik.",
          "Demokratiya, oshkoralik, xalqparvarlik va qonun ustuvorligi.",
          "Ijtimoiy himoya, tenglik, adolat va qonuniy tartib.",
          "Iqtisodiy barqarorlik, siyosiy plyuralizm va qonuniylik.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekistonda Konstitutsiya va qonunlarning qaysi jihati so'zsiz tan olinadi?",
        options: [
          "Yuridik kuchi va barcha organlar tomonidan qo'llanilishi.",
          "Ustunligi va barcha davlat organlari tomonidan bajarilishi.",
          "Iyerarxiyasi va jamiyatdagi tartibga soluvchi o'rni.",
          "Tizimliligi va xalqaro normalar bilan muvofiqligi.",
        ],
        correct: 1,
      },
      {
        q: "Mamlakatning butun hududida oliy yuridik kuchga ega bo'lgan hujjatni aniqlang:",
        options: [
          "O'zbekiston Respublikasining Konstitutsiyaviy qonunlari.",
          "O'zbekiston Respublikasining Konstitutsiyasi.",
          "O'zbekiston Respublikasi Prezidentining Farmonlari.",
          "Oliy Majlis tomonidan qabul qilingan barcha qonunlar.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasi Konstitutsiyasining amal qilish tartibi qanday?",
        options: [
          "Boshqa barcha qonunlar bilan birgalikda qo'llaniladi.",
          "To'g'ridan-to'g'ri amal qiladi.",
          "Maxsus huquqiy aktlar qabul qilingandan so'ng amal qiladi.",
          "Faqat sud organlari faoliyatida bevosita qo'llaniladi.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda yagona huquqiy makonning asosini qaysi hujjat tashkil etadi?",
        options: [
          "Normativ-huquqiy hujjatlar to'g'risidagi qonun.",
          "O'zbekiston Respublikasining Konstitutsiyasi.",
          "O'zbekiston Respublikasining milliy qonunchilik tizimi.",
          "Konstitutsiyaviy sudning yakuniy qarorlari majmuasi.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonning xalqaro shartnomalari huquqiy tizimda qanday maqomga ega?",
        options: [
          "Xalqaro shartnomalar milliy qonunlardan ustun turuvchi alohida tizimdir.",
          "Xalqaro shartnomalar huquqiy tizimning tarkibiy qismidir.",
          "Xalqaro shartnomalar faqat qonunlarda bo'shliq bo'lganda qo'llaniladi.",
          "Xalqaro shartnomalar huquqiy tizimning yordamchi manbai hisoblanadi.",
        ],
        correct: 1,
      },
    ]),
  },

  // ======================================================================
  // topic2: {
  //   title: "2-Bo'lim",
  //   questions: randomizeQuestions([
  //     {
  //       q: "O'zbekiston Respublikasining xalqaro shartnomalarini huquqiy tizimga munosabati qanday tavsiflanadi?",
  //       options: [
  //         "Xalqaro shartnomalar milliy qonunlardan ustun turuvchi alohida huquqiy manbadir.",
  //         "Xalqaro shartnomalar xalqaro huquq normalari bilan bir qatorda huquqiy tizimning tarkibiy qismidir.",
  //         "Xalqaro shartnomalar faqatgina xalqaro huquqning umume'tirof etilgan prinsiplari hisoblanadi.",
  //         "Xalqaro shartnomalar qonunlar bilan bir xil darajadagi yuridik kuchga ega hujjatlardir.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Xalqaro shartnoma va qonun qoidalari o'zaro zid kelsa, qanday huquqiy yechim qo'llaniladi?",
  //       options: [
  //         "O'zbekiston Respublikasining Konstitutsiyaviy qonunlari qo'llaniladi.",
  //         "O'zbekiston Respublikasining xalqaro shartnomasi qoidalari qo'llaniladi.",
  //         "Ziddiyat yuzaga kelgan qonunning eng so'nggi tahriri qo'llaniladi.",
  //         "Konstitutsiyaviy sudning maxsus ruxsati bilan milliy qonun qo'llaniladi.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Davlat organlari, mansabdor shaxslar va fuqarolik jamiyati institutlari o'z faoliyatini nima asosida yuritadilar?",
  //       options: [
  //         "Faqatgina normativ-huquqiy hujjatlar asosida.",
  //         "Xalqaro huquqiy standartlar va deklaratsiyalar asosida.",
  //         "Konstitutsiyaga muvofiq.",
  //         "Davlat boshqaruvi va ma'muriy tartib-taomillar asosida.",
  //       ],
  //       correct: 2,
  //     },
  //     {
  //       q: "O'zbekiston Respublikasining qonunlari va boshqa normativ-huquqiy hujjatlari nima asosida qabul qilinadi?",
  //       options: [
  //         "Qonun ustuvorligi prinsipi asosida.",
  //         "Konstitutsiya asosida.",
  //         "Oliy Majlisning vakolatli qarorlari asosida.",
  //         "Inson huquqlari va xalq manfaatlari asosida.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Qonunlar va boshqa normativ-huquqiy hujjatlar Konstitutsiyaning qaysi jihatlariga zid bo'lmasligi shart?",
  //       options: [
  //         "Konstitutsiyaning g'oyaviy asosi va muqaddimasiga.",
  //         "Konstitutsiyaning prinsip va normalariga.",
  //         "Konstitutsiyaning bo'limlari va boblariga.",
  //         "Konstitutsiyaning huquqiy tartibga solish mexanizmiga.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "O'zbekiston Respublikasining tashqi siyosati prinsiplari qaysi javobda to'g'ri aks etgan?",
  //       options: [
  //         "Suveren tenglik, kuch ishlatmaslik, chegaralar buzilmasligi va hududiy yaxlitlik.",
  //         "Milliy manfaatlar ustuvorligi va iqtisodiy hamkorlikni kengaytirish.",
  //         "Mintaqaviy xavfsizlik va davlatlararo harbiy bitimlar daxlsizligi.",
  //         "Demokratik qadriyatlar va xalqaro tashkilotlar tavsiyalari ustuvorligi.",
  //       ],
  //       correct: 0,
  //     },
  //     {
  //       q: "O'zbekiston qaysi maqsadda ittifoqlar tuzishi yoki davlatlararo tuzilmalarga kirishi mumkin?",
  //       options: [
  //         "Mintaqaviy yetakchilik va iqtisodiy barqarorlikni ta'minlash maqsadida.",
  //         "Davlatning, xalqning oliy manfaatlaridan, uning farovonligi va xavfsizligidan kelib chiqib.",
  //         "Xalqaro hamjamiyat oldidagi majburiyatlari va diplomatik aloqalari asosida.",
  //         "Chegaralar xavfsizligi va tashqi tajovuzdan himoyalanish ehtiyoji sababli.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Insonning huquq va erkinliklari nimaga asosan e’tirof etiladi va kafolatlanadi?",
  //       options: [
  //         "Faqatgina inson huquqlari bo'yicha xalqaro paktlar asosida.",
  //         "Xalqaro huquqning umume’tirof etilgan normalariga hamda Konstitutsiyaga muvofiq.",
  //         "Inson huquqlari bo'yicha vakil (Ombudsman) va Konstitutsiyaviy sud tomonidan.",
  //         "Huquqiy davlat prinsiplari va milliy qonunchilik tizimiga asosan.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Insonga uning huquq va erkinliklari qaysi paytdan boshlab tegishli bo'ladi?",
  //       options: [
  //         "Tug'ilgan vaqtdan boshlab.",
  //         "Voyaga yetgan kundan boshlab.",
  //         "Fuqarolik maqomini olgan vaqtdan boshlab.",
  //         "ID-karta yoki pasport berilgan vaqtdan boshlab.",
  //       ],
  //       correct: 0,
  //     },
  //     {
  //       q: "Fuqarolarga beriladigan imtiyozlar qanday tartibda belgilanadi?",
  //       options: [
  //         "Prezident farmonlari va farmoyishlari bilan.",
  //         "Qonun bilan.",
  //         "Vazirlar Mahkamasi va mahalliy hokimiyat qarorlari bilan.",
  //         "Davlat byudjeti imkoniyatlaridan kelib chiqqan holda.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Imtiyozlar belgilanishida qaysi prinsipga rioya etilishi shart?",
  //       options: [
  //         "Huquqiy tenglik prinsipiga.",
  //         "Ijtimoiy adolat prinsiplariga.",
  //         "Demokratik plyuralizm prinsipiga.",
  //         "Shaffoflik va ochiqlik prinsiplariga.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Fuqaro va davlat bir-biriga nisbatan huquqiy jihatdan qanday bog'langan?",
  //       options: [
  //         "Ijtimoiy himoya va sadoqat majburiyatlari bilan.",
  //         "O'zaro huquq va majburiyatlar bilan.",
  //         "Konstitutsiyaviy burch va tartib-intizom bilan.",
  //         "Siyosiy daxldorlik va huquqiy maqom bilan.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Insonning Konstitutsiya va qonunlardagi huquqlari qanday holatda cheklanishi mumkin?",
  //       options: [
  //         "Prokuror sanksiyasi yoki ichki ishlar organlari qarori bilan.",
  //         "Faqat sud qarori bilan.",
  //         "Ma'muriy tartibda davlat xavfsizligi zaruriyati tug'ilganda.",
  //         "Hukumatning maxsus qarori yoki qarorlari asosida.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Insonning huquq va erkinliklari amal qilish xususiyati qanday?",
  //       options: [
  //         "Boshqa qonun hujjatlari qabul qilingandan so'ng amal qiladi.",
  //         "Bevosita amal qiladi.",
  //         "Sudlar tomonidan qo'llanilgandagina huquqiy kuchga ega bo'ladi.",
  //         "Faqatgina Konstitutsiyaviy sud tushuntirishidan keyin amal qiladi.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Qonunlarning va davlat organlari faoliyatining mohiyati va mazmunini nima belgilaydi?",
  //       options: [
  //         "Davlat boshqaruvi prinsiplari va milliy xavfsizlik.",
  //         "Insonning huquq va erkinliklari.",
  //         "Oliy Majlis va hukumatning siyosiy irodasi.",
  //         "Sud hokimiyati va prokuratura nazorati.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Davlat organlari tomonidan insonga nisbatan qo'llaniladigan ta’sir choralari qaysi prinsipga tayanadi?",
  //       options: [
  //         "Insonparvarlik prinsipiga.",
  //         "Mutanosiblik prinsipiga.",
  //         "Qonuniylik va jazolash muqarrarligi prinsipiga.",
  //         "Ijtimoiy tenglik va adolat prinsipiga.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Davlatning huquqiy ta’sir choralari qanday darajada bo'lishi kerak?",
  //       options: [
  //         "Sodir etilgan huquqbuzarlikning og'irligiga mutloq mos.",
  //         "Qonunlarda nazarda tutilgan maqsadlarga erishish uchun yetarli.",
  //         "Boshqa shaxslar uchun ogohlantiruvchi darajada keskin.",
  //         "Davlat organining vakolatlari doirasida cheklanmagan.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Inson bilan davlat munosabatlaridagi qonunchilik ziddiyatlari kimning foydasiga talqin qilinadi?",
  //       options: [
  //         "Sud organlari va davlat manfaatlari foydasiga.",
  //         "Inson manfaatlariga.",
  //         "Qaysi tarafning dalillari ko'proq ekanligiga ko'ra.",
  //         "Yuridik kuchi yuqori bo'lgan organ foydasiga.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Kimlar o'z shaxsini erkin kamol toptirish huquqiga ega?",
  //       options: [
  //         "Har bir fuqaro.",
  //         "Har bir inson.",
  //         "Har kim.",
  //         "Har bir shaxs.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Qanday holatda insonga qonunchilikda belgilanmagan majburiyat yuklatilishi mumkin?",
  //       options: [
  //         "Favqulodda holat davrida davlat boshlig'i farmoni bilan.",
  //         "Hech kimga qonunchilikda belgilanmagan majburiyat yuklatilishi mumkin emas.",
  //         "Sud organlarining alohida ajrimi bilan.",
  //         "Insonning roziligi bo'lgandagina ixtiyoriy ravishda.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Inson o'z huquqlarini amalga oshirishda kimning manfaatlariga putur yetkazmasligi shart?",
  //       options: [
  //         "Faqat davlat va jamiyat manfaatlariga.",
  //         "Boshqa shaxslar, davlat va jamiyat manfaatlariga.",
  //         "Atrof-muhit va xalqaro hamjamiyat manfaatlariga.",
  //         "Mansabdor shaxslarning xizmat faoliyati manfaatlariga.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Insonning huquq va erkinliklari qanday cheklanishi mumkin?",
  //       options: [
  //         "Faqat qonun bilan va zarur bo'lgan darajada.",
  //         "Hukumat qarorlari bilan maxsus tartibda.",
  //         "Faqat urush yoki favqulodda vaziyatlar davrida.",
  //         "Davlat organlarining ichki nizomlari asosida.",
  //       ],
  //       correct: 0,
  //     },
  //     {
  //       q: "O'zbekistonda fuqarolik tizimi qanday shaklda o'rnatilgan?",
  //       options: [
  //         "Ikki tomonlama fuqarolik.",
  //         "Yagona fuqarolik.",
  //         "Shartli fuqarolik.",
  //         "Mintaqaviy fuqarolik.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Qoraqalpog'iston Respublikasining fuqaroligi bo'yicha to'g'ri qoidani toping:",
  //       options: [
  //         "U alohida xalqaro huquqiy maqomga ega fuqarolikdir.",
  //         "Qoraqalpog'iston Respublikasining fuqarosi ayni vaqtda O'zbekiston Respublikasining fuqarosi hisoblanadi.",
  //         "U faqat Qoraqalpog'iston hududida amal qiluvchi fuqarolikdir.",
  //         "Qoraqalpog'iston fuqarosi O'zbekiston fuqaroligini olishi shart emas.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "O'zbekiston Respublikasi fuqarolarini kim himoya qiladi?",
  //       options: [
  //         "Xalqaro inson huquqlari tashkilotlari.",
  //         "Davlat.",
  //         "Milliy gvardiya va Qurolli Kuchlar.",
  //         "Faqatgina O'zbekistonning elchixonalari.",
  //       ],
  //       correct: 1,
  //     },
  //     {
  //       q: "Vatandoshlar bilan aloqalarni rivojlantirishda davlat qaysi hujjatga tayanadi?",
  //       options: [
  //         "Ikki tomonlama shartnomalarga.",
  //         "Xalqaro huquq normalariga.",
  //         "Xorijdagi vatandoshlar to'g'risidagi qonunga.",
  //         "Konsullik xizmati nizomlariga.",
  //       ],
  //       correct: 1,
  //     },
  //   ]),
  // },

  // ======================================================================
  topic11: {
    title: "2-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "O'zbekiston Respublikasining xalqaro shartnomalarini huquqiy tizimga munosabati qanday tavsiflanadi?",
        options: [
          "Xalqaro shartnomalar milliy qonunlardan ustun turuvchi alohida huquqiy manbadir.",
          "Xalqaro shartnomalar xalqaro huquq normalari bilan bir qatorda huquqiy tizimning tarkibiy qismidir.",
          "Xalqaro shartnomalar faqatgina xalqaro huquqning umume'tirof etilgan prinsiplari hisoblanadi.",
          "Xalqaro shartnomalar qonunlar bilan bir xil darajadagi yuridik kuchga ega hujjatlardir.",
        ],
        correct: 1,
      },
      {
        q: "Xalqaro shartnoma va qonun qoidalari o'zaro zid kelsa, qanday huquqiy yechim qo'llaniladi?",
        options: [
          "O'zbekiston Respublikasining Konstitutsiyaviy qonunlari qo'llaniladi.",
          "O'zbekiston Respublikasining xalqaro shartnomasi qoidalari qo'llaniladi.",
          "Ziddiyat yuzaga kelgan qonunning eng so'nggi tahriri qo'llaniladi.",
          "Konstitutsiyaviy sudning maxsus ruxsati bilan milliy qonun qo'llaniladi.",
        ],
        correct: 1,
      },
      {
        q: "Davlat organlari, mansabdor shaxslar va fuqarolik jamiyati institutlari o'z faoliyatini nima asosida yuritadilar?",
        options: [
          "Faqatgina normativ-huquqiy hujjatlar asosida.",
          "Xalqaro huquqiy standartlar va deklaratsiyalar asosida.",
          "Konstitutsiyaga muvofiq.",
          "Davlat boshqaruvi va ma'muriy tartib-taomillar asosida.",
        ],
        correct: 2,
      },
      {
        q: "O'zbekiston Respublikasining qonunlari va boshqa normativ-huquqiy hujjatlari nima asosida qabul qilinadi?",
        options: [
          "Qonun ustuvorligi prinsipi asosida.",
          "Konstitutsiya asosida.",
          "Oliy Majlisning vakolatli qarorlari asosida.",
          "Inson huquqlari va xalq manfaatlari asosida.",
        ],
        correct: 1,
      },
      {
        q: "Qonunlar va boshqa normativ-huquqiy hujjatlar Konstitutsiyaning qaysi jihatlariga zid bo'lmasligi shart?",
        options: [
          "Konstitutsiyaning g'oyaviy asosi va muqaddimasiga.",
          "Konstitutsiyaning prinsip va normalariga.",
          "Konstitutsiyaning bo'limlari va boblariga.",
          "Konstitutsiyaning huquqiy tartibga solish mexanizmiga.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasining tashqi siyosati prinsiplari qaysi javobda to'g'ri aks etgan?",
        options: [
          "Suveren tenglik, kuch ishlatmaslik, chegaralar buzilmasligi va hududiy yaxlitlik.",
          "Milliy manfaatlar ustuvorligi va iqtisodiy hamkorlikni kengaytirish.",
          "Mintaqaviy xavfsizlik va davlatlararo harbiy bitimlar daxlsizligi.",
          "Demokratik qadriyatlar va xalqaro tashkilotlar tavsiyalari ustuvorligi.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekiston qaysi maqsadda ittifoqlar tuzishi yoki davlatlararo tuzilmalarga kirishi mumkin?",
        options: [
          "Mintaqaviy yetakchilik va iqtisodiy barqarorlikni ta'minlash maqsadida.",
          "Davlatning, xalqning oliy manfaatlaridan, uning farovonligi va xavfsizligidan kelib chiqib.",
          "Xalqaro hamjamiyat oldidagi majburiyatlari va diplomatik aloqalari asosida.",
          "Chegaralar xavfsizligi va tashqi tajovuzdan himoyalanish ehtiyoji sababli.",
        ],
        correct: 1,
      },
      {
        q: "Insonning huquq va erkinliklari nimaga asosan e’tirof etiladi va kafolatlanadi?",
        options: [
          "Faqatgina inson huquqlari bo'yicha xalqaro paktlar asosida.",
          "Xalqaro huquqning umume’tirof etilgan normalariga hamda Konstitutsiyaga muvofiq.",
          "Inson huquqlari bo'yicha vakil (Ombudsman) va Konstitutsiyaviy sud tomonidan.",
          "Huquqiy davlat prinsiplari va milliy qonunchilik tizimiga asosan.",
        ],
        correct: 1,
      },
      {
        q: "Insonga uning huquq va erkinliklari qaysi paytdan boshlab tegishli bo'ladi?",
        options: [
          "Tug'ilgan vaqtdan boshlab.",
          "Voyaga yetgan kundan boshlab.",
          "Fuqarolik maqomini olgan vaqtdan boshlab.",
          "ID-karta yoki pasport berilgan vaqtdan boshlab.",
        ],
        correct: 0,
      },
      {
        q: "Fuqarolarga beriladigan imtiyozlar qanday tartibda belgilanadi?",
        options: [
          "Prezident farmonlari va farmoyishlari bilan.",
          "Qonun bilan.",
          "Vazirlar Mahkamasi va mahalliy hokimiyat qarorlari bilan.",
          "Davlat byudjeti imkoniyatlaridan kelib chiqqan holda.",
        ],
        correct: 1,
      },
      {
        q: "Imtiyozlar belgilanishida qaysi prinsipga rioya etilishi shart?",
        options: [
          "Huquqiy tenglik prinsipiga.",
          "Ijtimoiy adolat prinsiplariga.",
          "Demokratik plyuralizm prinsipiga.",
          "Shaffoflik va ochiqlik prinsiplariga.",
        ],
        correct: 1,
      },
      {
        q: "Fuqaro va davlat bir-biriga nisbatan huquqiy jihatdan qanday bog'langan?",
        options: [
          "Ijtimoiy himoya va sadoqat majburiyatlari bilan.",
          "O'zaro huquq va majburiyatlar bilan.",
          "Konstitutsiyaviy burch va tartib-intizom bilan.",
          "Siyosiy daxldorlik va huquqiy maqom bilan.",
        ],
        correct: 1,
      },
      {
        q: "Insonning Konstitutsiya va qonunlardagi huquqlari qanday holatda cheklanishi mumkin?",
        options: [
          "Prokuror sanksiyasi yoki ichki ishlar organlari qarori bilan.",
          "Faqat sud qarori bilan.",
          "Ma'muriy tartibda davlat xavfsizligi zaruriyati tug'ilganda.",
          "Hukumatning maxsus qarori yoki qarorlari asosida.",
        ],
        correct: 1,
      },
      {
        q: "Insonning huquq va erkinliklari amal qilish xususiyati qanday?",
        options: [
          "Boshqa qonun hujjatlari qabul qilingandan so'ng amal qiladi.",
          "Bevosita amal qiladi.",
          "Sudlar tomonidan qo'llanilgandagina huquqiy kuchga ega bo'ladi.",
          "Faqatgina Konstitutsiyaviy sud tushuntirishidan keyin amal qiladi.",
        ],
        correct: 1,
      },
      {
        q: "Qonunlarning va davlat organlari faoliyatining mohiyati va mazmunini nima belgilaydi?",
        options: [
          "Davlat boshqaruvi prinsiplari va milliy xavfsizlik.",
          "Insonning huquq va erkinliklari.",
          "Oliy Majlis va hukumatning siyosiy irodasi.",
          "Sud hokimiyati va prokuratura nazorati.",
        ],
        correct: 1,
      },
      {
        q: "Davlat organlari tomonidan insonga nisbatan qo'llaniladigan ta’sir choralari qaysi prinsipga tayanadi?",
        options: [
          "Insonparvarlik prinsipiga.",
          "Mutanosiblik prinsipiga.",
          "Qonuniylik va jazolash muqarrarligi prinsipiga.",
          "Ijtimoiy tenglik va adolat prinsipiga.",
        ],
        correct: 1,
      },
      {
        q: "Davlatning huquqiy ta’sir choralari qanday darajada bo'lishi kerak?",
        options: [
          "Sodir etilgan huquqbuzarlikning og'irligiga mutloq mos.",
          "Qonunlarda nazarda tutilgan maqsadlarga erishish uchun yetarli.",
          "Boshqa shaxslar uchun ogohlantiruvchi darajada keskin.",
          "Davlat organining vakolatlari doirasida cheklanmagan.",
        ],
        correct: 1,
      },
      {
        q: "Inson bilan davlat munosabatlaridagi qonunchilik ziddiyatlari kimning foydasiga talqin qilinadi?",
        options: [
          "Sud organlari va davlat manfaatlari foydasiga.",
          "Inson manfaatlariga.",
          "Qaysi tarafning dalillari ko'proq ekanligiga ko'ra.",
          "Yuridik kuchi yuqori bo'lgan organ foydasiga.",
        ],
        correct: 1,
      },
      {
        q: "Kimlar o'z shaxsini erkin kamol toptirish huquqiga ega?",
        options: [
          "Har bir fuqaro.",
          "Har bir inson.",
          "Har kim.",
          "Har bir shaxs.",
        ],
        correct: 1,
      },
      {
        q: "Qanday holatda insonga qonunchilikda belgilanmagan majburiyat yuklatilishi mumkin?",
        options: [
          "Favqulodda holat davrida davlat boshlig'i farmoni bilan.",
          "Hech kimga qonunchilikda belgilanmagan majburiyat yuklatilishi mumkin emas.",
          "Sud organlarining alohida ajrimi bilan.",
          "Insonning roziligi bo'lgandagina ixtiyoriy ravishda.",
        ],
        correct: 1,
      },
      {
        q: "Inson o'z huquqlarini amalga oshirishda kimning manfaatlariga putur yetkazmasligi shart?",
        options: [
          "Faqat davlat va jamiyat manfaatlariga.",
          "Boshqa shaxslar, davlat va jamiyat manfaatlariga.",
          "Atrof-muhit va xalqaro hamjamiyat manfaatlariga.",
          "Mansabdor shaxslarning xizmat faoliyati manfaatlariga.",
        ],
        correct: 1,
      },
      {
        q: "Insonning huquq va erkinliklari qanday cheklanishi mumkin?",
        options: [
          "Faqat qonun bilan va zarur bo'lgan darajada.",
          "Hukumat qarorlari bilan maxsus tartibda.",
          "Faqat urush yoki favqulodda vaziyatlar davrida.",
          "Davlat organlarining ichki nizomlari asosida.",
        ],
        correct: 0,
      },
      {
        q: "O'zbekistonda fuqarolik tizimi qanday shaklda o'rnatilgan?",
        options: [
          "Ikki tomonlama fuqarolik.",
          "Yagona fuqarolik.",
          "Shartli fuqarolik.",
          "Mintaqaviy fuqarolik.",
        ],
        correct: 1,
      },
      {
        q: "Qoraqalpog'iston Respublikasining fuqaroligi bo'yicha to'g'ri qoidani toping:",
        options: [
          "U alohida xalqaro huquqiy maqomga ega fuqarolikdir.",
          "Qoraqalpog'iston Respublikasining fuqarosi ayni vaqtda O'zbekiston Respublikasining fuqarosi hisoblanadi.",
          "U faqat Qoraqalpog'iston hududida amal qiluvchi fuqarolikdir.",
          "Qoraqalpog'iston fuqarosi O'zbekiston fuqaroligini olishi shart emas.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasi fuqarolarini kim himoya qiladi?",
        options: [
          "Xalqaro inson huquqlari tashkilotlari.",
          "Davlat.",
          "Milliy gvardiya va Qurolli Kuchlar.",
          "Faqatgina O'zbekistonning elchixonalari.",
        ],
        correct: 1,
      },
      {
        q: "Vatandoshlar bilan aloqalarni rivojlantirishda davlat qaysi hujjatga tayanadi?",
        options: [
          "Ikki tomonlama shartnomalarga.",
          "Xalqaro huquq normalariga.",
          "Xorijdagi vatandoshlar to'g'risidagi qonunga.",
          "Konsullik xizmati nizomlariga.",
        ],
        correct: 1,
      },
    ]),
  },

  // ========================================================================
  topic4: {
    title: "3-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Ayni bir jinoyat uchun takroran hukm qilinishga yo‘l qo‘yilmasligi Konstitutsiyada qanday mustahkamlangan?",
        options: [
          "Sudlanganlik holati tugallanmagan shaxslar qayta javobgarlikka tortilmaydi.",
          "Hech bir shaxs ayni bir jinoyat uchun takroran hukm qilinishi mumkin emas.",
          "Jazo muddatini o'tab bo'lgan shaxsga nisbatan yangi ayblov e'lon qilinishi taqiqlanadi.",
          "Jinoyat qonunchiligining insonparvarlik prinsipi asosida qayta sud qilishga yo'l qo'yilmaydi.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaga ko‘ra, shaxsiy va oilaviy sirga ega bo‘lish huquqi kimlarga tegishli?",
        options: [
          "O'zbekiston Respublikasi fuqarolariga.",
          "Voyaga yetgan va muomala layoqatiga ega shaxslarga.",
          "Har bir insonga.",
          "Har kimga.",
        ],
        correct: 3,
      },
      {
        q: "Yozishmalar, telefon orqali so‘zlashuvlar hamda boshqa xabarlar sir saqlanishi huquqini cheklashning qonuniy tartibi qanday?",
        options: [
          "Prokuror sanksiyasi yoki tergovchi qarori asosida.",
          "Qonunda belgilangan hollarda va tartibda sud qaroriga asosan.",
          "Tezkor-qidiruv faoliyati to'g'risidagi qonunda nazarda tutilgan asoslarda.",
          "Davlat xavfsizligiga tahdid soluvchi ma'lumotlar mavjud bo'lganda ma'muriy tartibda.",
        ],
        correct: 1,
      },
      {
        q: "Uy-joyga unda yashovchi shaxslarning xohishiga qarshi kirishga qaysi holda yo‘l qo‘yiladi?",
        options: [
          "Ichki ishlar organlarining yozma farmoyishi bo'lganda.",
          "Qonunda nazarda tutilgan hollarda va tartibda sud qaroriga ko‘ra.",
          "Gumon qilinuvchi shaxsni ta'qib qilish zarurati tug'ilganda mahalla vakili ishtirokida.",
          "Favqulodda vaziyatlarda tergov harakatlarini kechiktirib bo'lmasligi to'g'risidagi dalolatnoma bilan.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasida fikrlash, so‘z va e’tiqod erkinligi huquqi kimga tegishli?",
        options: [
          "Siyosiy huquqqa ega bo'lgan fuqarolarga.",
          "Har bir shaxsga.",
          "Har kimga.",
          "Har bir insonga.",
        ],
        correct: 2,
      },
      {
        q: "Axborotni izlash, olish va tarqatish huquqi qanday maqsadlarda qonun bilan cheklanishi mumkin?",
        options: [
          "Mavjud konstitutsiyaviy tuzumni, axloqni, sog‘liqni saqlashni va boshqa shaxslarning huquqlarini himoya qilish uchun.",
          "Davlat organlarining ish faoliyatiga oid maxfiy ma'lumotlar tarqalishining oldini olish maqsadida.",
          "Jamoat tartibini buzishga qaratilgan har qanday axborot oqimini to'xtatish zaruriyatida.",
          "Milliy manfaatlar va tashqi siyosiy barqarorlikni ta'minlash ehtiyojidan kelib chiqib.",
        ],
        correct: 0,
      },
      {
        q: "Davlat organlari va tashkilotlari o‘z faoliyatiga oid hujjatlar bilan tanishish imkoniyatini kimlarga yaratishi shart?",
        options: [
          "Davlat xizmatida faoliyat yuritayotgan xodimlarga.",
          "Har kimga.",
          "O'zbekiston Respublikasi fuqarolariga.",
          "Huquqiy manfaatdorligini isbotlagan shaxslarga.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolarning jamiyat va davlat ishlarini boshqarishda ishtirok etishi qaysi usulda amalga oshiriladi?",
        options: [
          "Davlat organlarining qarorlari ustidan sudga murojaat qilish orqali.",
          "Bevosita hamda o‘z vakillari orqali.",
          "Ijtimoiy so'rovlar va jamoatchilik eshituvlarida qatnashish yo'li bilan.",
          "Siyosiy partiyalar safiga kirish va ularning dasturlarini qo'llab-quvvatlash asosida.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda mitinglar, yig‘ilishlar va namoyishlar o‘tkazish huquqi qanday amalga oshiriladi?",
        options: [
          "Mahalliy hokimliklarning ruxsati olingandan so'ng.",
          "Amaldagi qonunlarga muvofiq.",
          "Jamoat tartibini buzmagan holda ixtiyoriy ravishda.",
          "Faqatgina dam olish kunlari maxsus belgilangan maydonlarda.",
        ],
        correct: 1,
      },
      {
        q: "Vakolatli organlar tomonidan miting yoki namoyishlarni to‘xtatish asosi nima?",
        options: [
          "Tashkilotchilarning shaxsi shubha ostiga olinganda.",
          "Xavfsizlik nuqtai nazaridan qonunda belgilangan asoslarda.",
          "Ishtirokchilar soni belgilangan me'yordan oshib ketganda.",
          "Davlat organlarining ish tartibiga xalaqit berganda.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi fuqarolarining uyushish huquqi doirasiga nimalar kiradi?",
        options: [
          "Kasaba uyushmalarini tuzish va ularda rahbarlik lavozimlarini egallash.",
          "Siyosiy partiyalarga, kasaba uyushmalariga va boshqa jamoat birlashmalariga uyushish.",
          "Xalqaro nodavlat tashkilotlarining mahalliy bo'linmalarini shakllantirish.",
          "Harbiy va yarim harbiy tuzilmalarga ixtiyoriy a'zo bo'lish.",
        ],
        correct: 1,
      },
      {
        q: "Mulkdor bo‘lgan har bir shaxsning qaysi huquqi Konstitutsiya bilan kafolatlanadi?",
        options: [
          "Tadbirkorlikdan keladigan foydani soliqdan ozod qilish.",
          "Bank operatsiyalari, omonatlari va hisobvaraqlarining sir tutilishi, shuningdek meros huquqi.",
          "Mulkini istalgan narxda davlatga sotish majburiyati.",
          "Mulkiga daxldor bo'lgan barcha ma'lumotlarni ochiq e'lon qilish.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda mulkchilikning shakllari qaysi javobda Konstitutsiyaga muvofiq ko'rsatilgan?",
        options: [
          "Davlat mulki va jamoat mulki.",
          "Xususiy mulk va ommaviy mulk.",
          "Xususiy mulk hamda munitsipal mulk.",
          "Milliy mulk va xalqaro mulk.",
        ],
        correct: 1,
      },
      {
        q: "MHEKMni (mehnatga haq to‘lashning eng kam miqdorini) belgilashda nima inobatga olinishi shart?",
        options: [
          "Iste'mol savatchasining joriy narxlari.",
          "Insonning munosib yashashini ta’minlash zarurati.",
          "Byudjet tashkilotlarining moliyaviy barqarorligi.",
          "Ish beruvchi va xodim o'rtasidagi kelishuv miqdori.",
        ],
        correct: 1,
      },
      {
        q: "Ayollarga nisbatan mehnat munosabatlarida qanday taqiq o'rnatilgan?",
        options: [
          "Og'ir mehnat sharoitlariga ishga qabul qilish mutloq taqiqlanadi.",
          "Homiladorligi yoki bolasi borligi sababli ishga qabul qilishni rad etish, ishdan bo‘shatish va ish haqini kamaytirish taqiqlanadi.",
          "Ayollarning tungi vaqtlarda mehnat faoliyati bilan shug'ullanishi cheklanadi.",
          "Rahbarlik lavozimlariga tanlov asosida qabul qilishda ustunlik berilmaydi.",
        ],
        correct: 1,
      },
      {
        q: "Bolalar mehnatining qaysi shakllari Konstitutsiya bilan taqiqlanadi?",
        options: [
          "Haq to'lanmaydigan har qanday jamoat ishlari.",
          "Bolaning sog‘lig‘iga, xavfsizligiga, ahloqiga, aqliy va jismoniy rivojlanishiga xavf soluvchi, ta’lim olishiga to‘sqinlik qiluvchi shakllari.",
          "18 yoshga yetmagan shaxslarning xizmat ko'rsatish sohasidagi mehnati.",
          "Oila a'zolariga yordam berishga qaratilgan dehqonchilik mehnat shakllari.",
        ],
        correct: 1,
      },
      {
        q: "Yollanib ishlovchilarning dam olish huquqi tarkibiga nimalar kiradi?",
        options: [
          "Har haftalik dam olish kunlari va sihatgohlarda bepul davolanish.",
          "Ish vaqtining muddati, dam olish kunlari, shuningdek har yilgi haq to‘lanadigan mehnat ta’tili.",
          "Faqatgina davlat tomonidan belgilangan umumxalq bayramlari.",
          "Sog'lig'i yomonlashganda beriladigan muddatsiz haq to'lanmaydigan ta'tillar.",
        ],
        correct: 1,
      },
      {
        q: "Ijtimoiy ta’minot huquqi qaysi hollarda kafolatlanadi?",
        options: [
          "Iqtisodiy inqiroz va ishsizlik darajasi oshgan davrlarda.",
          "Qariganda, mehnat qobiliyatini yo‘qotganda, boquvchisidan mahrum bo‘lganda va qonunda nazarda tutilgan boshqa hollarda.",
          "Yashash joyi bo'lmagan va doimiy daromad manbaiga ega bo'lmagan shaxslarga.",
          "Davlat byudjetida ijtimoiy xarajatlar uchun mablag' yetarli bo'lganda.",
        ],
        correct: 1,
      },
      {
        q: "Pensiyalar va nafaqalar miqdoriga qo'yilgan konstitutsiyaviy talab nima?",
        options: [
          "Bazaviy hisoblash miqdorining kamida 50 foizini tashkil etishi.",
          "Belgilangan eng kam iste’mol xarajatlaridan oz bo‘lishi mumkin emas.",
          "Hududiy o'rtacha ish haqining yarmidan kam bo'lmasligi.",
          "Inflyatsiya darajasiga mutanosib ravishda har chorakda oshib borishi.",
        ],
        correct: 1,
      },
      {
        q: "Uy-joydan mahrum qilish tartibi bo'yicha qaysi qoida to'g'ri?",
        options: [
          "Mahalliy davlat hokimiyati organlarining asoslantirilgan qarori bilan.",
          "Qonunda nazarda tutilgan hollarda va tartibda sudning qaroriga ko‘ra.",
          "Kompensatsiya to'lash to'g'risida shartnoma imzolangan paytdan boshlab.",
          "Uy-joy yashash uchun yaroqsiz deb topilgan ma'muriy dalolatnoma asosida.",
        ],
        correct: 1,
      },
      {
        q: "Murojaatlarni ko'rib chiqish majburiyati kimlar zimmasiga yuklatilgan?",
        options: [
          "Faqat adliya organlari va xalq qabulxonalari.",
          "Davlat organlari, tashkilotlar va ularning mansabdor shaxslari.",
          "Oliy Majlis deputatlari va Senat a'zolari.",
          "Mahalla fuqarolar yig'ini va jamoat komissiyalari.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolar o'z ijtimoiy faolligini qanday shakllarda amalga oshirishlari mumkin?",
        options: [
          "Faqat saylovlarda ovoz berish va referendumlarda qatnashish.",
          "Mitinglar, yig‘ilishlar va namoyishlar orqali.",
          "Chet el ommaviy axborot vositalariga intervyu berish yo'li bilan.",
          "Ijtimoiy tarmoqlarda davlat siyosatini tahlil qilish orqali.",
        ],
        correct: 1,
      },
      {
        q: "Bilim olish huquqi doirasida davlat nimani kafolatlaydi?",
        options: [
          "Barcha xususiy bog'cha va maktablarda imtiyozli ta'lim olishni.",
          "Bepul umumiy o‘rta ta’lim va boshlang‘ich professional ta’lim olishni.",
          "Oliy ta'lim muassasalariga imtihonsiz kirish imkoniyatlarini.",
          "Faqat iqtidorli yoshlar uchun xorijiy stipendiyalar ajratilishini.",
        ],
        correct: 1,
      },
      {
        q: "Har kimning qulay atrof-muhitga ega bo'lish huquqi nima bilan bog'liq?",
        options: [
          "Ekologik soliqlar va yashil energetika loyihalari bilan.",
          "Atrof-muhit holati to‘g‘risidagi ishonchli axborotga ega bo‘lish bilan.",
          "Tabiatni muhofaza qilish bo'yicha ko'ngilli guruhlar faoliyati bilan.",
          "Shaharsozlik normalarida ko'kalamzorlashtirish miqdorining oshishi bilan.",
        ],
        correct: 1,
      },
      {
        q: "Sud qarorisiz uy-joyidan mahrum etilgan shaxsga ko'rilgan zarar qanday qoplanadi?",
        options: [
          "Mulkdorning arizasiga ko'ra bosqichma-bosqich qoplanadi.",
          "Oldindan va teng qiymatda qoplanishi ta’minlanadi.",
          "Keyingi moliya yilining byudjet xarajatlaridan kelib chiqib to'lanadi.",
          "Yangi qurilgan uylardan ijtimoiy ijara asosida joy beriladi.",
        ],
        correct: 1,
      },
    ]),
  },

  // ========================================================================

  topic5: {
    title: "4-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "O‘zbekiston Respublikasi fuqarolarining saylov huquqi vujudga kelish yoshi qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "16 yoshga to'lgan kundan boshlab.",
          "18 yoshga to'lgan kundan boshlab.",
          "21 yoshga to'lgan kundan boshlab.",
          "Muomala layoqati vujudga kelgan paytdan boshlab.",
        ],
        correct: 1,
      },
      {
        q: "Qanday holatda fuqarolarning saylovda ishtirok etish huquqi cheklanishi mumkin?",
        options: [
          "Og'ir jinoyat sodir etganligi uchun qidiruvda bo'lgan shaxslarda.",
          "Sud tomonidan muomalaga layoqatsiz deb topilgan fuqarolarning.",
          "Sud hukmi bilan ozodlikdan mahrum etish joylarida saqlanayotgan shaxslarning.",
          "Saylov kuni o'z yashash joyida bo'lmagan fuqarolarning.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Prezidentini saylash tartibi qanday belgilangan?",
        options: [
          "Oliy Majlis palatalarining qo'shma majlisida saylanadi.",
          "Umumiy, teng va to‘g‘ridan-to‘g‘ri saylov huquqi asosida yashirin ovoz berish yo‘li bilan saylanadi.",
          "Siyosiy partiyalar vakillari hamda mahalliy kengashlar deputatlari tomonidan saylanadi.",
          "Konstitutsiyaviy sud va Vazirlar Mahkamasi tomonidan tasdiqlanadi.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Oliy Majlisining tuzilishi qaysi javobda to'g'ri aks etgan?",
        options: [
          "Qonunchilik palatasi va Vazirlar Mahkamasidan iborat.",
          "Qonunchilik palatasi (quyi palata) va Senatdan (yuqori palata) iborat.",
          "Xalq vakillari majlisi va Oliy Kengashdan iborat.",
          "Prezident huzuridagi Milliy kengash va Senatdan iborat.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Oliy Majlisining Qonunchilik palatasi necha deputatdan iborat?",
        options: [
          "100 deputatdan.",
          "150 deputatdan.",
          "120 deputatdan.",
          "65 deputatdan.",
        ],
        correct: 1,
      },
      {
        q: "Oliy Majlis palatalari hamda mahalliy Kengashlar deputatlarining vakolat muddati qancha?",
        options: ["4 yil.", "5 yil.", "7 yil.", "Muddatsiz."],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Vazirlar Mahkamasini shakllantirish jarayoni qanday kechadi?",
        options: [
          "Prezident tomonidan mustaqil ravishda tayinlanadi.",
          "Bosh vazir taqdimiga binoan Prezident tomonidan tayinlanadi va Qonunchilik palatasi tomonidan ma’qullanadi.",
          "Siyosiy partiyalar ko'pchiligi tomonidan ovoz berish orqali tuziladi.",
          "Oliy sud va Adliya vazirligi xulosasi asosida shakllantiriladi.",
        ],
        correct: 1,
      },
      {
        q: "Mahalliy davlat hokimiyati asosini nimalar tashkil etadi?",
        options: [
          "Mahalla qo'mitalari va jamoatchilik kengashlari.",
          "Viloyat, tuman, shahar Kengashlari hamda tegishli hokimlar boshqaradigan ijro etuvchi hokimiyat.",
          "Viloyat hokimliklari va hududiy adliya boshqarmalari.",
          "Xalq qabulxonalari va sektor rahbarlari.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Prezidentining vakolatlari qaysi holda muddatidan oldin tugatiladi?",
        options: [
          "Siyosiy partiyalar unga ishonchsizlik bildirganda.",
          "O'z vazifalarini bajara olmaydigan holatga kelganda (sog'lig'i yoki iste'fosi sababli).",
          "Vazirlar Mahkamasi qarori bilan hukumat inqirozi yuz berganda.",
          "Xalqaro sudlar tomonidan ayblangan taqdirda.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasining davlat tili qaysi tilda e'lon qilingan?",
        options: [
          "O'zbek tili va qoraqalpoq tili.",
          "O'zbek tili.",
          "O'zbek tili va rus tili.",
          "Davlat tili — Markaziy Osiyo xalqlari tillarining umumiy yig'indisi.",
        ],
        correct: 1,
      },
      {
        q: "Davlat organlari va tashkilotlarida ish yuritish tili bo'yicha qaysi qoida belgilangan?",
        options: [
          "Ish yuritish ixtiyoriy tanlangan tilda olib boriladi.",
          "Davlat tilida, zaruriyatga ko'ra boshqa tillardan foydalanish qonun bilan tartibga solinadi.",
          "Faqatgina xalqaro diplomatik tillarda yuritiladi.",
          "Hududiy aholining ko'pchiligi so'zlashadigan tilda yuritiladi.",
        ],
        correct: 1,
      },
      {
        q: "Millatlararo totuvlik va bag‘rikenglikni ta’minlash vazifasi kimning zimmasida?",
        options: [
          "Diniy idoralar va tashkilotlar zimmasida.",
          "Davlat va jamiyat zimmasida.",
          "Siyosiy partiyalar va harakatlar zimmasida.",
          "Xalqaro huquqni muhofaza qiluvchi organlar zimmasida.",
        ],
        correct: 1,
      },
      {
        q: "Vijdon erkinligi huquqi doirasida har kim nimalarga haqli?",
        options: [
          "Istalgan diniy tashkilotni ro'yxatdan o'tkazmasdan faoliyatini yuritishga.",
          "Xohlagan dinga e'tiqod qilish yoki hech qaysi dinga e'tiqod qilmaslikka.",
          "Davlat muassasalarida diniy marosimlarni majburiy o'tkazishga.",
          "Diniy qarashlari asosida qonuniy majburiyatlarni bajarishdan bosh tortishga.",
        ],
        correct: 1,
      },
      {
        q: "Chet el fuqarolari va fuqaroligi bo‘lmagan shaxslarning burchlari qanday belgilangan?",
        options: [
          "Ularga nisbatan burchlar belgilanmagan, faqat huquqlar berilgan.",
          "O'zbekiston Respublikasining Konstitutsiyasi, qonunlari va xalqaro shartnomalarida belgilangan burchlarni ado etadilar.",
          "Faqatgina o'z davlatlarining qonunlari doirasidagi majburiyatlarni bajaradilar.",
          "Soliq to'lashdan tashqari boshqa har qanday majburiyatdan ozod qilinadilar.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston hududidagi shaxslarning huquq va erkinliklari asosi qayerda mustahkamlangan?",
        options: [
          "Ma'muriy javobgarlik to'g'risidagi kodeksda.",
          "O‘zbekiston Respublikasi Konstitutsiyasida.",
          "Inson huquqlari bo'yicha milliy markaz nizomida.",
          "Prezidentning yillik murojaatnomalarida.",
        ],
        correct: 1,
      },
      {
        q: "Jinoyatlarni tergov qilish va qonunlar ijrosini nazorat qilish qaysi organning vakolatiga kiradi?",
        options: [
          "Adliya vazirligi.",
          "Prokuratura organlari.",
          "Sudlar va advokatura.",
          "Konstitutsiyaviy sud.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi bayrog‘i, gerbi va madhiyasi qanday maqomga ega?",
        options: [
          "Madaniy meros ob'ektlari maqomiga.",
          "Davlat suverenitetining ramzlari bo'lib, ular qonun bilan muhofaza qilinadi.",
          "Tashqi reklama va targ'ibot vositalari hisoblanadi.",
          "Faqatgina rasmiy bayramlarda ishlatiladigan atributlardir.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolik tashabbuslari va murojaatlarni ko'rib chiqish muddati qanday?",
        options: [
          "Murojaat kelib tushgan kundan boshlab muddatsiz ko'rib chiqiladi.",
          "Qonunda belgilangan tartib va muddatlarda.",
          "Faqatgina shaxsning o'zi kelib murojaat qilgandagina ko'riladi.",
          "Murojaatning muhimlik darajasiga ko'ra mansabdor shaxs ixtiyorida.",
        ],
        correct: 1,
      },
      {
        q: "Prezident vakolatlarini bajarish imkoniyati bo'lmaganda uning vazifasi kimga yuklatiladi?",
        options: [
          "Bosh vazirga.",
          "Oliy Majlis Senati Raisiga.",
          "Qonunchilik palatasi Spikeriga.",
          "Konstitutsiyaviy sud raisiga.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda millatlararo totuvlikni ta'minlashda kimning roli ustuvor?",
        options: [
          "Xalqaro tashkilotlar vakolatxonalarining.",
          "Davlat va barcha fuqarolarning.",
          "Faqat milliy madaniy markazlarning.",
          "Mahalla raislari va oqsoqollarning.",
        ],
        correct: 1,
      },
      {
        q: "Senat a'zolarining tarkibi bo'yicha yangi tahrirdagi (2023-yil) qoida qanday?",
        options: [
          "Senat a'zolari soni 100 nafarni tashkil etadi.",
          "Senat a'zolari soni 65 nafarni tashkil etadi.",
          "Senat tarkibi faqat Prezident tomonidan tayinlanadigan shaxslardan iborat.",
          "Senat a'zolari soni xalq deputatlari kengashlari tomonidan belgilangan kvotaga binoan shakllanadi.",
        ],
        correct: 1,
      },
      {
        q: "Davlat tilining rivojlanishini ta'minlash bo'yicha davlatning majburiyati nima?",
        options: [
          "Boshqa tillardan foydalanishni taqiqlash.",
          "O‘zbek tilining davlat tili sifatidagi mavqeini mustahkamlash va o'rganish uchun sharoitlar yaratish.",
          "Faqat o'zbek tilida ta'lim beruvchi muassasalar ochish.",
          "Lotin alifbosiga o'tishni majburiy jazo choralari bilan ta'minlash.",
        ],
        correct: 1,
      },
      {
        q: "Qonun ustuvorligi prinsipi nimani anglatadi?",
        options: [
          "Qonunlar faqat davlat organlari uchun majburiy ekanligini.",
          "Konstitutsiya va qonunlarning so'zsiz ustunligi hamda barchaning qonun oldida tengligini.",
          "Sud organlarining qonun chiqaruvchi organlardan ustunligini.",
          "Xalqaro huquq normalarining milliy qonunlardan har doim ustun turishini.",
        ],
        correct: 1,
      },
      {
        q: "Chet el fuqarosini O'zbekistondan chiqarib yuborish (deportatsiya) asosi nima?",
        options: [
          "Shaxsiy adovat yoki norozilik.",
          "Qonunda nazarda tutilgan asoslar va tartibda.",
          "Faqatgina siyosiy qarashlari mos kelmaganda.",
          "Yashash guvohnomasining muddati tugashidan bir kun oldin.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolarning milliy va madaniy qadriyatlarini saqlash huquqi nimani o'z ichiga oladi?",
        options: [
          "O'z ona tili, urf-odatlari va madaniyatidan foydalanish hamda ularni rivojlantirish.",
          "Faqatgina muzey va kutubxonalarga bepul kirish huquqini.",
          "Davlat tomonidan o'tkaziladigan barcha bayramlarda majburiy ishtirok etishni.",
          "Boshqa millat vakillarining qadriyatlarini tanqid qilish erkinligini.",
        ],
        correct: 0,
      },
    ]),
  },

  // ========================================================================

  topic6: {
    title: "5-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Jinoyat sodir etilganligini aniqlash va dalillarni to‘plash jarayonida qaysi organlar faoliyati Konstitutsiyada nazarda tutilgan?",
        options: [
          "Faqat ichki ishlar va milliy gvardiya bo'linmalari.",
          "Prokuratura va tergov faoliyatini amalga oshiruvchi vakolatli organlar.",
          "Sudlar va jamoatchilik nazorati organlari.",
          "Adliya organlari va advokatura tuzilmalari.",
        ],
        correct: 1,
      },
      {
        q: "Shaxsning hibsga olinishi qanday holatda qonuniy hisoblanadi?",
        options: [
          "Tergovchi qarori va prokurorning og'zaki ruxsati bo'lganda.",
          "Qonunda nazarda tutilgan asoslarda va tartibda.",
          "Gumon qilinuvchining iqrorlik ko'rsatuvi mavjud bo'lganda.",
          "Jinoyat izlari issiqligida ma'muriy bayonnoma tuzilganda.",
        ],
        correct: 1,
      },
      {
        q: "Shaxsni sud qarorisiz qamoqda saqlash masalasi Konstitutsiyada qanday tartibga solingan?",
        options: [
          "Og'ir jinoyatlarda prokuror sanksiyasi bilan 72 soatgacha ruxsat etiladi.",
          "Shaxs sudning qarorisiz qirq sakkiz soatdan ortiq muddat ushlab turilishi mumkin emas.",
          "O'z aybini tan olmagan taqdirda sud qarorisiz saqlash muddati cheklanmagan.",
          "Tergov davomida shaxsning qayerdaligi noma'lum bo'lsa sud qarori talab etilmaydi.",
        ],
        correct: 1,
      },
      {
        q: "Gumon qilinuvchi yoki sudlanuvchining himoyaga bo‘lgan huquqi qachon vujudga keladi?",
        options: [
          "Sud majlisi boshlangan rasmiy paytdan boshlab.",
          "U ushlangan yoki uning harakatlanish erkinligi huquqi amalda cheklangan paytdan boshlab.",
          "Faqatgina dastlabki tergov hujjatlari imzolanganidan so'ng.",
          "Ayblov xulosasi prokuror tomonidan tasdiqlangan vaqtdan boshlab.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolarning mulk huquqi Konstitutsiyada qanday mustahkamlangan?",
        options: [
          "Mulkdan foydalanish faqat davlat nazorati ostida amalga oshiriladi.",
          "Mulkdor o'z mulkiga o'z xohishicha egalik qiladi, undan foydalanadi va uni tasarruf etadi.",
          "Xususiy mulk huquqi iqtisodiy vaziyatdan kelib chiqib o'zgarishi mumkin.",
          "Mulk huquqi faqatgina yuridik shaxslar uchun daxlsizdir.",
        ],
        correct: 1,
      },
      {
        q: "Davlat mulki va xususiy mulkning huquqiy maqomi o'rtasidagi munosabat qanday?",
        options: [
          "Davlat mulki xususiy mulkdan ustuvor yuridik kuchga ega.",
          "Mulkning barcha shakllari teng huquqlidir va davlat tomonidan bir xilda himoya qilinadi.",
          "Xususiy mulk faqatgina uy-joy va iste'mol buyumlaridan iborat bo'ladi.",
          "Davlat mulki daxlsizdir, xususiy mulk esa sud qarorisiz olib qo'yilishi mumkin.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolarning mehnat qilish huquqi doirasida davlat qanday kafolatlar beradi?",
        options: [
          "Barcha fuqarolarni mutaxassisligi bo'yicha majburiy ish bilan ta'minlaydi.",
          "Har kim munosib mehnat qilish, kasb va faoliyat turini erkin tanlash huquqiga ega.",
          "Ishsizlik nafaqasi faqat mehnat staji 10 yildan ortiq bo'lganlarga to'lanadi.",
          "Xodimni ish beruvchi xohlagan vaqtda asossiz ishdan bo'shatishi mumkin.",
        ],
        correct: 1,
      },
      {
        q: "Bolalar uchun majburiy ta'lim darajasi qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "Boshlang'ich 4 yillik ta'lim.",
          "Umumiy o‘rta ta’lim.",
          "Oliy ta'limgacha bo'lgan barcha bosqichlar.",
          "Professional va o'rta maxsus ta'lim.",
        ],
        correct: 1,
      },
      {
        q: "Oliy ta’lim muassasalarida bepul ta'lim olish tartibi qanday?",
        options: [
          "Faqat ijtimoiy himoyaga muhtoj shaxslar uchun bepul.",
          "Davlat granti asosida tanlov yo'li bilan qonunda belgilangan tartibda.",
          "Barcha fuqarolar uchun oliy ta'lim mutloq bepul.",
          "Faqatgina fan olimpiadalarida g'olib bo'lganlar uchun bepul.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolarning tibbiy xizmatdan foydalanish huquqi bo'yicha Konstitutsiyada nima belgilangan?",
        options: [
          "Barcha xususiy klinikalarda xizmat ko'rsatish bepul bo'lishi shart.",
          "Har kim sog‘lig‘ini saqlash va malakali tibbiy xizmatdan foydalanish huquqiga ega.",
          "Tibbiy yordam faqat sug'urta polisi mavjud bo'lganda ko'rsatiladi.",
          "Davlat tibbiy xizmatlar uchun mablag' ajratishni rad etishi mumkin.",
        ],
        correct: 1,
      },
      {
        q: "Davlat muassasalarida bepul tibbiy yordam ko'rsatish hajmi qanday aniqlanadi?",
        options: [
          "Shifokorning ichki qarori bilan.",
          "Qonunda belgilangan kafolatlangan hajmda.",
          "Faqat favqulodda jarrohlik amaliyotlari doirasida.",
          "Bemorning yashash joyi va daromadiga qarab.",
        ],
        correct: 1,
      },
      {
        q: "Uy-joy daxlsizligi huquqi buzilishiga qachon yo'l qo'yilmaydi?",
        options: [
          "Faqatgina egasining roziligi bo'lmaganda.",
          "Hech kim uy-joyga unda yashovchi shaxslarning xohishiga qarshi kirishi mumkin emas, sud qarori mavjud hollar bundan mustasno.",
          "Soliq organlari tekshiruv o'tkazmoqchi bo'lgan holatlarda.",
          "Yong'in xavfsizligi qoidalariga rioya etilmaganda.",
        ],
        correct: 1,
      },
      {
        q: "Shaxsning shaxsiy ma’lumotlarini himoya qilish qanday amalga oshiriladi?",
        options: [
          "Ma'lumotlar ochiq internet resurslariga joylashtirilishi majburiy.",
          "Qonunda belgilangan tartibda shaxsiy ma'lumotlar himoyalanishi kafolatlanadi.",
          "Faqat bank sirlariga oid ma'lumotlar himoyalanadi.",
          "Davlat organlari xohlagan shaxs ma'lumotlarini ruxsatsiz tarqatishi mumkin.",
        ],
        correct: 1,
      },
      {
        q: "Matbuot va OAV erkinligi bo'yicha Konstitutsiyaviy talab nima?",
        options: [
          "OAV faoliyati ustidan senzuraga yo'l qo'yiladi.",
          "Ommaviy axborot vositalari erkindir va qonunga muvofiq ish olib boradi.",
          "OAV faoliyati faqat hukumat dasturlarini targ'ib qilishga qaratilgan bo'lishi shart.",
          "Axborot tarqatish uchun davlat idoralaridan oldindan ruxsat olinadi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy e’tiqod erkinligi qaysi maqsadda qonun bilan cheklanishi mumkin?",
        options: [
          "Ijtimoiy bir xillikni ta'minlash maqsadida.",
          "Jamoat tartibini, sog‘liqni, ahloqni, boshqa shaxslarning huquq va erkinliklarini himoya qilish uchun zarur bo'lgan darajada.",
          "Diniy qarashlar davlat siyosatiga mos kelmagan barcha hollarda.",
          "Diniy tashkilotlar sonini kamaytirish maqsadida.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolar tashkilotlar va jamoat birlashmalariga birlashish huquqiga ko'ra nimalarga haqli?",
        options: [
          "Yarim harbiy va maxfiy jamiyatlar tuzishga.",
          "O'z manfaatlarini himoya qilish uchun jamoat birlashmalarini tuzish va ularga a'zo bo'lishga.",
          "Faqat davlat tomonidan tavsiya etilgan partiyalarga kirishga.",
          "Mavjud davlat tuzumini zo'ravonlik bilan o'zgartirishga qaratilgan uyushmalar ochishga.",
        ],
        correct: 1,
      },
      {
        q: "Jamoat birlashmalarining huquqiy maqomi qanday himoyalanadi?",
        options: [
          "Ularning faoliyatiga davlat organlarining aralashishiga yo'l qo'yilmaydi.",
          "Ular har oy davlat organlariga hisobot topshirishga majbur.",
          "Jamoat birlashmalari rahbarlarini davlat tayinlaydi.",
          "Ular siyosiy qarashlarini bildirish huquqidan mahrum etiladi.",
        ],
        correct: 0,
      },
      {
        q: "Fuqarolarning ish joyidagi huquqlari doirasida nimalar taqiqlanadi?",
        options: [
          "Ish haqining miqdorini oshirishni talab qilish.",
          "Majburiy mehnatdan foydalanish taqiqlanadi.",
          "Kasaba uyushmalariga a'zo bo'lish.",
          "Mehnat intizomiga rioya qilish to'g'risidagi qoidalar.",
        ],
        correct: 1,
      },
      {
        q: "Ijtimoiy ta’minot huquqi doirasida davlat kimlarni qo'llab-quvvatlaydi?",
        options: [
          "Faqat iqtisodiy faol bo'lmagan yoshlarni.",
          "Qariyalar, nogironligi bo'lgan shaxslar va boquvchisini mahrum etganlarni.",
          "Faqat davlat xizmatida ishlab pensiyaga chiqqanlarni.",
          "Xorijda ishlashni xohlovchi fuqarolarni.",
        ],
        correct: 1,
      },
      {
        q: "Insonning shaxsiy daxlsizligi huquqi nimani o'z ichiga oladi?",
        options: [
          "Faqatgina jismoniy tan jarohati yetkazmaslikni.",
          "Shaxsning sha’ni va qadr-qimmati, shaxsiy hayoti va daxlsizligi himoya qilinishini.",
          "O'z ixtiyori bilan qonunlarni buzish huquqini.",
          "Har qanday soliq va to'lovlardan ozod bo'lishni.",
        ],
        correct: 1,
      },
      {
        q: "Mehnatga layoqatsiz shaxslar uchun ijtimoiy yordamni kim kafolatlaydi?",
        options: [
          "Xalqaro xayriya jamg'armalari.",
          "Davlat.",
          "Xususiy tadbirkorlik sub'ektlari.",
          "Faqatgina ularning farzandlari va qarindoshlari.",
        ],
        correct: 1,
      },
      {
        q: "Sudlanuvchining advokat bilan uchrashuvlari qanday tartibda amalga oshiriladi?",
        options: [
          "Tergovchi ishtirokida va uning nazorati ostida.",
          "Maxfiy tarzda hamda uchrashuvlar soni va muddati cheklanmagan holda.",
          "Faqat hafta oxiri kunlari qisqa muddatga.",
          "Ayblov e'lon qilinganidan bir oy o'tgach ruxsat beriladi.",
        ],
        correct: 1,
      },
      {
        q: "Mulkdorning huquqlari ijtimoiy foyda uchun cheklanganda nima talab etiladi?",
        options: [
          "Mulkdorning mutloq roziligi.",
          "Qonunda nazarda tutilgan tartibda yetkazilgan zararning o'rni oldindan qoplanishi.",
          "Faqatgina ma'naviy zarar uchun uzr so'rash.",
          "Mulkni davlat balansiga tekinga o'tkazish.",
        ],
        correct: 1,
      },
      {
        q: "Ta'lim olish huquqi bo'yicha davlatning majburiyati nimadan iborat?",
        options: [
          "Barcha talabalarni turar-joy bilan majburiy ta'minlash.",
          "Ta’limning turli shakllari va turlari rivojlanishini ta’minlash.",
          "Faqat o'zbek tilida darsliklar chop etish.",
          "Xususiy ta'lim muassasalari faoliyatini taqiqlash.",
        ],
        correct: 1,
      },
      {
        q: "Shaxsning shaxsiy siri deb topilgan axborotlar qanday himoyalanadi?",
        options: [
          "Axborotlashtirish markazi tomonidan ochiq e'lon qilinadi.",
          "Ularni to‘plash, saqlash, foydalanish va tarqatishga faqat shaxsning roziligi bilan yo'l qo'yiladi.",
          "Har qanday jurnalist ularni ruxsatsiz yoritishi mumkin.",
          "Ma'muriy idoralar xizmat zarurati tug'ilganda roziliksiz tarqatishi mumkin.",
        ],
        correct: 1,
      },
    ]),
  },

  // ========================================================================

  topic8: {
    title: "6-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "O‘zbekiston Respublikasining konstitutsiyaviy qonunlarini qabul qilish hamda ularga o‘zgartishlar kiritish qaysi organning mutloq vakolatiga kiradi?",
        options: [
          "O‘zbekiston Respublikasi Prezidenti va Vazirlar Mahkamasi.",
          "O‘zbekiston Respublikasi Oliy Majlisi.",
          "O'zbekiston Respublikasi Konstitutsiyaviy sudi.",
          "Oliy Majlis Qonunchilik palatasi va Adliya vazirligi.",
        ],
        correct: 1,
      },
      {
        q: "Viloyatlar, tumanlar va shaharlarni tashkil etish hamda ularning chegaralarini o‘zgartirish tartibi qanday?",
        options: [
          "Mahalliy kengashlar qarori va Vazirlar Mahkamasi ruxsati bilan.",
          "O‘zbekiston Respublikasi Prezidentining roziligi bilan Oliy Majlis tomonidan.",
          "Faqatgina tegishli hududiy referendum o'tkazish yo'li bilan.",
          "Davlat soliq qo'mitasi va Yer resurslari agentligi xulosasi asosida.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaga ko‘ra saylash huquqiga ega bo‘lmagan shaxslar guruhi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        options: [
          "Xorijiy davlatlarda vaqtincha istiqomat qilayotgan fuqarolar.",
          "Sud tomonidan muomalaga layoqatsiz deb topilgan shaxslar.",
          "Sud hukmi bilan og'ir jinoyat uchun jazo o'tayotgan barcha mahkumlar.",
          "Ikki yildan ortiq muddatga ozodlikdan mahrum etilgan shaxslar.",
        ],
        correct: 1,
      },
      {
        q: "Qonunchilik palatasi Spikeri va uning o‘rinbosarlari saylanish tartibi qanday?",
        options: [
          "O'zbekiston Respublikasi Prezidenti taqdimiga binoan Senat tomonidan.",
          "Qonunchilik palatasi deputatlari orasidan yashirin ovoz berish orqali.",
          "Siyosiy partiyalarning fraksiyalari tomonidan kelishilgan holda tayinlanadi.",
          "Saylovda eng ko'p ovoz olgan partiya rahbarlari orasidan avtomatik saylanadi.",
        ],
        correct: 1,
      },
      {
        q: "Qonunchilik palatasi deputatligiga nomzodlar uchun belgilangan yosh senzi qaysi javobda to'g'ri ko'rsatilgan?",
        options: ["21 yosh.", "25 yosh.", "30 yosh.", "35 yosh."],
        correct: 1,
      },
      {
        q: "Davlat byudjetining ijro etilishi ustidan nazoratni amalga oshirish kimning vakolatiga kiradi?",
        options: [
          "Markaziy bank va Moliya vazirligi.",
          "Oliy Majlis palatalari va Hisob palatasi.",
          "Vazirlar Mahkamasi huzuridagi Nazorat inspeksiyasi.",
          "Iqtisodiyot va moliya boshqarmalari.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Bosh prokurorining hisobotini kim eshitadi?",
        options: [
          "Faqat O'zbekiston Respublikasi Prezidenti.",
          "Oliy Majlis palatalari (ayrim hollarda qo'shma majlisda).",
          "O'zbekiston Respublikasi Vazirlar Mahkamasi.",
          "Konstitutsiyaviy sud raisi va sudyalari.",
        ],
        correct: 1,
      },
      {
        q: "Qoraqalpog‘iston Respublikasining hududi va chegaralarini o‘zgartirish sharti qanday?",
        options: [
          "Oliy Majlisning bir tomonlama qarori asosida.",
          "Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesining roziligi bilan.",
          "Markaziy saylov komissiyasining maxsus qarori bilan.",
          "Faqatgina Vazirlar Mahkamasi taqdimiga binoan Prezident farmoni bilan.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy saylov komissiyasi a’zolarini saylash tartibi qanday belgilangan?",
        options: [
          "Prezident tomonidan tayinlanadi va vazirliklar tomonidan tasdiqlanadi.",
          "Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesi, viloyatlar va Toshkent shahar Kengashlarining tavsiyasi bilan Oliy Majlis palatalari tomonidan saylanadi.",
          "Siyosiy partiyalarning qurultoylarida teng taqsimot asosida tanlanadi.",
          "Sudyalar oliy kengashi tomonidan malaka imtihoni asosida tayinlanadi.",
        ],
        correct: 1,
      },
      {
        q: "Qonunchilik tashabbusi huquqiga ega bo'lmagan subyektni toping?",
        options: [
          "O'zbekiston Respublikasi Prezidenti.",
          "Markaziy bank Boshqaruvi.",
          "Oliy Majlisning Qonunchilik palatasi deputatlari.",
          "O‘zbekiston Respublikasi Konstitutsiyaviy sudi.",
        ],
        correct: 1,
      },
      {
        q: "Oliy Majlis Qonunchilik palatasi deputati va Senat a’zosining daxlsizlik huquqi nimani anglatadi?",
        options: [
          "Ular har qanday holatda ham ma'muriy javobgarlikka tortilmaydi.",
          "Tegishli palataning roziligisiz jinoiy javobgarlikka tortilishi, ushlab turilishi yoki qamoqqa olinishi mumkin emas.",
          "Ular o'z vakolati davomida sud organlari faoliyatiga aralashish huquqiga ega.",
          "Deputatlar daxlsizligi saylov okrugi hududi bilan cheklanadi.",
        ],
        correct: 1,
      },
      {
        q: "Bosh vazir nomzodini ko‘rib chiqish va ma’qullashda Qonunchilik palatasiga kim taqdimnoma kiritadi?",
        options: [
          "Siyosiy partiyalarning parlamentdagi fraksiyalari.",
          "O‘zbekiston Respublikasi Prezidenti.",
          "Oliy Majlis Senati Raisi.",
          "Vazirlar Mahkamasining amaldagi a'zolari.",
        ],
        correct: 1,
      },
      {
        q: "Mahalliy davlat hokimiyati vakillik organlarining (Kengashlarning) qonunga zid qarorlarini bekor qilish vakolati kimga tegishli?",
        options: [
          "Mahalliy hokimlarga.",
          "Oliy Majlis Senatiga.",
          "Adliya boshqarmalariga.",
          "Mahalliy prokuratura organlariga.",
        ],
        correct: 1,
      },
      {
        q: "Qoraqalpog‘iston Respublikasining O‘zbekiston Respublikasi tarkibidan ajralib chiqish huquqi qanday amalga oshiriladi?",
        options: [
          "Jo'qorg'i Kenges raisining bir tomonlama farmoni bilan.",
          "Qoraqalpog‘iston xalqi o‘rtasida o‘tkazilgan umumiy referendum asosida.",
          "Birlashgan Millatlar Tashkiloti xulosasi asosida.",
          "Faqatgina iqtisodiy inqiroz yuz berganda Oliy Majlis ruxsati bilan.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyada belgilangan saylov prinsiplari tarkibiga kirmaydigan elementni toping?",
        options: [
          "Ovoz berishning yashirinligi.",
          "Saylovlarning majburiyligi (ishtirok etmaganlik uchun jazo).",
          "Saylov huquqining tengligi.",
          "Saylovlarning to'g'ridan-to'g'riligi.",
        ],
        correct: 1,
      },
      {
        q: "Saylov kampaniyasi boshlanganligi haqidagi e'lon saylovlardan necha oy oldin e'lon qilinadi?",
        options: [
          "Bir oy oldin.",
          "Uch oy oldin.",
          "Oti oylik muddatda.",
          "Olti oy oldin.",
        ],
        correct: 1,
      },
      {
        q: "Senat a’zosi etib saylanish uchun fuqaro necha yoshga to'lgan bo'lishi lozim?",
        options: ["21 yosh.", "25 yosh.", "30 yosh.", "35 yosh."],
        correct: 1,
      },
      {
        q: "Qonunchilik palatasi deputati va Senat a’zosi bir vaqtning o‘zida qanday faoliyat bilan shug'ullanishi mumkin emas?",
        options: [
          "Ilmiy faoliyat bilan.",
          "Haq to‘lanadigan boshqa turdagi faoliyat (pedagogik va ijodiy faoliyatdan tashqari).",
          "Xayriya tashkilotlari faoliyatida ishtirok etish.",
          "Jamoatchilik asosida kitob nashr ettirish.",
        ],
        correct: 1,
      },
      {
        q: "Qoraqalpog‘iston Respublikasi o'z Konstitutsiyasiga egami?",
        options: [
          "Yo'q, u faqat O'zbekiston Konstitutsiyasi asosida ish yuritadi.",
          "Ha, Qoraqalpog‘iston o‘z Konstitutsiyasiga ega va u O‘zbekiston Konstitutsiyasiga zid bo‘lishi mumkin emas.",
          "Faqatgina ma'muriy boshqaruv nizomiga ega.",
          "Ha, lekin uning Konstitutsiyasi xalqaro tashkilotlar tomonidan tasdiqlanishi shart.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy saylov komissiyasining Raisi qanday tartibda saylanadi?",
        options: [
          "Komissiya a'zolari orasidan komissiya majlisida saylanadi.",
          "Prezident tomonidan to'g'ridan-to'g'ri tayinlanadi.",
          "Oliy Majlis Qonunchilik palatasi Spikeri tomonidan tayinlanadi.",
          "Adliya vaziri taqdimiga binoan Vazirlar Mahkamasi tomonidan.",
        ],
        correct: 0,
      },
      {
        q: "Senat a'zolarining necha nafari Prezident tomonidan tayinlanadi?",
        options: ["16 nafari.", "9 nafari.", "10 nafari.", "20 nafari."],
        correct: 1,
      },
      {
        q: "Qonun loyihasi Qonunchilik palatasida qabul qilingandan so'ng necha kun ichida Senatga yuborilishi lozim?",
        options: ["5 kun.", "10 kun.", "15 kun.", "30 kun."],
        correct: 1,
      },
      {
        q: "Senat tomonidan ma'qullangan qonun necha kun ichida Prezidentga imzolash uchun yuboriladi?",
        options: ["3 kun.", "10 kun.", "20 kun.", "30 kun."],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasi Oliy Majlisi palatalarining qo'shma majlislarida qanday masalalar ko'riladi?",
        options: [
          "Har qanday yangi qonun loyihasi muhokamasi.",
          "O'zbekiston Respublikasi Prezidentining qasamyod keltirishi va mamlakat ijtimoiy-iqtisodiy hayotining muhim masalalari bo'yicha ma'ruzalarini eshitish.",
          "Siyosiy partiyalarni ro'yxatdan o'tkazish masalalari.",
          "Jinoyat ishlarini apellyatsiya tartibida ko'rib chiqish.",
        ],
        correct: 1,
      },
      {
        q: "Qonun loyihasini tayyorlashda kamida necha nafar fuqaro qonunchilik taklifini kiritish huquqiga ega?",
        options: [
          "50 ming nafar.",
          "100 ming nafar.",
          "150 ming nafar.",
          "200 ming nafar.",
        ],
        correct: 1,
      },
    ]),
  },

  // ========================================================================

  topic9: {
    title: "7-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "O‘zbekiston Respublikasi Prezidenti qaysi holda Oliy Majlis palatalarini tarqatib yuborish huquqiga ega?",
        options: [
          "Palatalar o'rtasida kelishmovchilik vujudga kelgan har qanday holatda.",
          "Konstitutsiyaviy sud bilan kelishilgan holda, palatalarning faoliyati davlat xavfsizligiga tahdid solsa.",
          "Oliy Majlis tarkibida doimiy kelishmovchiliklar yuz berganda yoki palatalar o'z vakolatlarini bajara olmaydigan holatga kelganda.",
          "Vazirlar Mahkamasi tomonidan ishonchsizlik votumi e'lon qilingan taqdirda.",
        ],
        correct: 2,
      },
      {
        q: "O‘zbekiston Respublikasi Vazirlar Mahkamasining konstitutsiyaviy maqomi va javobgarligi qaysi javobda to‘g‘ri aks etgan?",
        options: [
          "Vazirlar Mahkamasi faqat O'zbekiston Respublikasi Prezidenti oldida javobgardir.",
          "Vazirlar Mahkamasi ijro etuvchi hokimiyatni amalga oshiradi hamda o'z faoliyatida Prezident va Oliy Majlis oldida javobgardir.",
          "Vazirlar Mahkamasi mustaqil boshqaruv organi bo'lib, uning qarorlari ustidan nazorat o'rnatilmaydi.",
          "Hukumat a'zolari faqatgina Qonunchilik palatasi spikeri oldida hisobdor hisoblanadi.",
        ],
        correct: 1,
      },
      {
        q: "Vazirlar Mahkamasi o‘z vakolatlari doirasida qanday huquqiy hujjatlar qabul qiladi?",
        options: [
          "Farmonlar va qarorlar.",
          "Qarorlar va farmoyishlar.",
          "Nizomlar va qonunosti hujjatlari.",
          "Farmonlar, qarorlar va ko'rsatmalar.",
        ],
        correct: 1,
      },
      {
        q: "Vazirlar Mahkamasiga nisbatan ishonchsizlik votumi bildirish tartibi bo'yicha qaysi qoida to'g'ri?",
        options: [
          "Senat a'zolarining oddiy ko'pchiligi tomonidan qaror qabul qilinadi.",
          "Qonunchilik palatasi deputatlari umumiy sonining kamida uchdan bir qismi tomonidan taklif kiritiladi va kamida uchdan ikki qismi ovozi bilan qabul qilinadi.",
          "Prezident farmoni bilan Hukumat a'zolari bir vaqtda iste'foga chiqariladi.",
          "Konstitutsiyaviy sudning maxsus xulosasi asosida Vazirlar Mahkamasi tarqatiladi.",
        ],
        correct: 1,
      },
      {
        q: "Mahalliy davlat hokimiyati tizimida vakillik va ijro etuvchi hokimiyatni kimlar amalga oshiradi?",
        options: [
          "Xalq deputatlari Kengashlari va hokimlar.",
          "Mahalla qo'mitalari va sektor rahbarlari.",
          "Hududiy adliya boshqarmalari va viloyat prokuraturasi.",
          "Kengash kotibiyati va viloyat departamentlari.",
        ],
        correct: 0,
      },
      {
        q: "Viloyat va Toshkent shahar hokimi lavozimiga nomzodlarni tasdiqlash jarayoni qanday?",
        options: [
          "Prezident tomonidan tayinlanadi va Oliy Majlis Senati tomonidan ma'qullanadi.",
          "Prezident tomonidan taqdim etiladi va tegishli xalq deputatlari Kengashi tomonidan tasdiqlanadi.",
          "Siyosiy partiyalar tomonidan ko'rsatiladi va hududiy saylov komissiyasi tomonidan ro'yxatga olinadi.",
          "Vazirlar Mahkamasi raisligi ostida o'tkaziladigan tanlov asosida tanlanadi.",
        ],
        correct: 1,
      },
      {
        q: "Hokimlarning qonun hujjatlariga zid bo‘lgan hujjatlarini bekor qilish vakolati kimga tegishli?",
        options: [
          "Tegishli xalq deputatlari Kengashiga yoki yuqori turuvchi ijro etuvchi organ (hukumat/Prezident)ga.",
          "Faqat tuman sudlarining ma'muriy hay'atiga.",
          "Adliya vazirligining hududiy bo'linmalariga.",
          "Hududiy prokuratura organlarining protestiga ko'ra mahalla raisiga.",
        ],
        correct: 0,
      },
      {
        q: "Fuqarolarning o‘zini o‘zi boshqarish organlari (mahalla) maqomi bo'yicha Konstitutsiyada nima belgilangan?",
        options: [
          "Ular davlat hokimiyati organlari tizimiga kiradi.",
          "O‘zini o‘zi boshqarish organlari davlat hokimiyati organlari tizimiga kirmaydi va mustaqil ravishda mahalliy ahamiyatga molik masalalarni hal etadi.",
          "Mahalla raislari Prezident tomonidan tayinlanadigan mansabdor shaxslardir.",
          "Ular faqatgina ijtimoiy yordam ko'rsatish bilan shug'ullanuvchi nodavlat tashkilotlardir.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaviy sud tarkibi qanday shakllantiriladi?",
        options: [
          "Prezident tomonidan 10 yil muddatga tayinlanadi.",
          "Prezident taqdimiga binoan Senat tomonidan saylanadi.",
          "Sudyalar oliy kengashi tomonidan muddatli tanlov asosida tayinlanadi.",
          "Qonunchilik palatasi deputatlari orasidan saylov yo'li bilan tanlanadi.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaviy sud sudyalari necha yil muddatga saylanadi?",
        options: [
          "5 yil muddatga.",
          "10 yil muddatga, lekin qayta saylanish huquqisiz.",
          "Muddatsiz (umrbod).",
          "7 yil muddatga, bir marta qayta saylanish huquqi bilan.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaviy sud qaysi masalalarni ko'rib chiqishga vakolatli?",
        options: [
          "Fuqarolar o'rtasidagi mulkiy nizolarni hal qilish.",
          "Qonunlar, farmonlar va boshqa hujjatlarning Konstitutsiyaga muvofiqligini aniqlash.",
          "Jinoyat ishlarini apellyatsiya tartibida ko'rib chiqish.",
          "Siyosiy partiyalarni davlat ro'yxatidan o'tkazishni rad etish ustidan shikoyatlarni ko'rish.",
        ],
        correct: 1,
      },
      {
        q: "Sud hokimiyatining mustaqilligi prinsipiga ko'ra sudyalar kimga bo'ysunadilar?",
        options: [
          "Yuqori turuvchi sud raislariga.",
          "Faqat qonunga.",
          "Prezident va Oliy Majlisga.",
          "Adliya vazirligi nazorat inspeksiyasiga.",
        ],
        correct: 1,
      },
      {
        q: "Bosh vazir nomzodi Qonunchilik palatasi tomonidan rad etilgan taqdirda Prezident necha marta yangi nomzod kiritish huquqiga ega?",
        options: [
          "Cheklanmagan marta.",
          "Ikki marta.",
          "Uch marta.",
          "Faqat bir marta.",
        ],
        correct: 1,
      },
      {
        q: "Tuman va shahar hokimlarini lavozimidan ozod etish tartibi qanday?",
        options: [
          "Mahalla raislarining umumiy yig'ilishi qarori bilan.",
          "Viloyat hokimi tomonidan tegishli Kengash roziligi bilan yoki Prezident qarori bilan.",
          "Faqatgina hududiy referendum o'tkazish yo'li bilan.",
          "Siyosiy partiya fraksiyasi talabiga ko'ra.",
        ],
        correct: 1,
      },
      {
        q: "Sudyalarning daxlsizligi nimani anglatadi?",
        options: [
          "Ularga nisbatan har qanday jinoiy ish qo'zg'atish mutloq taqiqlanadi.",
          "Sudya daxlsizdir va u tegishli xulosa yoki sudya roziligisiz jinoiy javobgarlikka tortilishi mumkin emas.",
          "Sudya o'zining barcha xatti-harakatlari uchun faqat sud raisiga hisob beradi.",
          "Sudyaning xonadonida tintuv o'tkazish uchun hech qanday ruxsatnoma talab etilmaydi.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaviy sud raisi va o‘rinbosari kim tomonidan saylanadi?",
        options: [
          "Prezident tomonidan tayinlanadi.",
          "Sudyaning o'zlari orasidan Konstitutsiyaviy sud majlisida saylanadi.",
          "Senat tomonidan raislikka tavsiya etilgan shaxslar orasidan saylanadi.",
          "Vazirlar Mahkamasi tomonidan tasdiqlanadi.",
        ],
        correct: 1,
      },
      {
        q: "Prezident palatalarni tarqatib yuborganda, yangi saylovlar necha oy ichida o'tkazilishi shart?",
        options: [
          "Bir oy ichida.",
          "Uch oy ichida.",
          "Olti oy ichida.",
          "Ikki oy ichida.",
        ],
        correct: 1,
      },
      {
        q: "Qaysi organ qonunlarga rasmiy sharh berish huquqiga ega emas?",
        options: [
          "O'zbekiston Respublikasi Oliy Majlisi.",
          "Konstitutsiyaviy sud.",
          "Oliy sud.",
          "Adliya vazirligi.",
        ],
        correct: 3,
      },
      {
        q: "Vazirlar Mahkamasining iste'foga chiqishi qachon majburiy hisoblanadi?",
        options: [
          "Yangi saylangan Oliy Majlis oldida o'z vakolatlarini topshirganda.",
          "Bosh vazir almashganda.",
          "Davlat byudjeti ijro etilmaganda.",
          "Har bir yil yakunida.",
        ],
        correct: 0,
      },
      {
        q: "Mahalliy Kengash deputati daxlsizligi kim tomonidan ta'minlanadi?",
        options: [
          "Faqat tegishli hokim tomonidan.",
          "Qonun bilan va tegishli Kengash roziligisiz uni javobgarlikka tortish cheklangan.",
          "Daxlsizlik huquqi mahalliy deputatlar uchun amal qilmaydi.",
          "Faqatgina prokuror roziligi bilan daxlsizlik bekor qilinadi.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasida sud tizimi qanday shaklda bo'ladi?",
        options: [
          "Konstitutsiyaviy sud, Oliy sud, harbiy sudlar, viloyat, Toshkent shahar sudlari va tuman sudlari.",
          "Faqatgina ma'muriy va iqtisodiy sudlar tizimi.",
          "Prezident huzuridagi maxsus sud hay'atlari.",
          "Xalqaro arbitrlar va mahalliy hakamlik sudlari yig'indisi.",
        ],
        correct: 0,
      },
      {
        q: "Konstitutsiyaviy sud sudyasining yoshiga qo'yilgan talab nima?",
        options: [
          "Kamida 30 yosh.",
          "Kamida 35 yosh.",
          "Kamida 40 yosh.",
          "Yosh bo'yicha cheklov mavjud emas.",
        ],
        correct: 1,
      },
      {
        q: "Sud ishlari qaysi tilda yuritiladi?",
        options: [
          "Faqat o'zbek tilida.",
          "O‘zbek tilida, qoraqalpoq tilida yoki muayyan joydagi ko‘pchilik aholi so‘zlashadigan tilda.",
          "Har qanday xalqaro diplomatik tilda.",
          "Faqat sudya tanlagan tilda.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda odil sudlovni faqat kim amalga oshiradi?",
        options: [
          "Prezident huzuridagi inspeksiya.",
          "Sud.",
          "Prokuratura va ichki ishlar organlari.",
          "Davlat xavfsizlik xizmati.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasi Bosh vaziri qaysi vazifani bajaradi?",
        options: [
          "Vazirlar Mahkamasi faoliyatini tashkil etadi va unga rahbarlik qiladi.",
          "Qonun chiqaruvchi hokimiyat ustidan nazorat o'rnatadi.",
          "Sudya va prokurorlarni tayinlashga tavsiya beradi.",
          "Davlatning tashqi siyosatini belgilaydi.",
        ],
        correct: 0,
      },
    ]),
  },

  // ========================================================================  topic7: {
  topic10: {
    title: "8-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Fuqarolar va yuridik shaxslarning Konstitutsiyaviy sudga murojaat qilish huquqi qanday holatda vujudga keladi?",
        options: [
          "Agar sud orqali himoya qilishning barcha boshqa vositalari tugagan bo‘lsa va qonun ularning konstitutsiyaviy huquqlarini buzayotgan bo‘lsa.",
          "Har qanday huquqiy nizo yuzaga kelgan vaqtda prokuror ruxsati bilan.",
          "Faqatgina jinoiy javobgarlikka tortilganidan so‘ng sud hukmi ustidan shikoyat sifatida.",
          "Ma’muriy organlarning qarorlaridan norozi bo‘lgan barcha hollarda to‘g‘ridan-to‘g‘ri.",
        ],
        correct: 0,
      },
      {
        q: "O‘zbekiston Respublikasi Oliy sudi sudyalarini saylash tartibi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        options: [
          "Sudyalar oliy kengashi tomonidan muddatsiz tayinlanadi.",
          "O‘zbekiston Respublikasi Prezidentining taqdimiga binoan Senat tomonidan saylanadi.",
          "Qonunchilik palatasi deputatlari tomonidan yashirin ovoz berish orqali tasdiqlanadi.",
          "Oliy sud raisi tomonidan malaka imtihonlari asosida ishga qabul qilinadi.",
        ],
        correct: 1,
      },
      {
        q: "Sudyalar oliy kengashining tarkibi va raisini shakllantirish bo‘yicha konstitutsiyaviy qoida qanday?",
        options: [
          "Rais va a’zolar faqat sudyalar orasidan Oliy sud tomonidan saylanadi.",
          "Kengash raisi va a’zolari Prezident taqdimiga binoan Senat tomonidan saylanadi.",
          "Kengash tarkibi faqatgina Adliya vazirligi xodimlaridan iborat bo‘ladi.",
          "Kengash a’zolari Qonunchilik palatasi spikeri tomonidan 5 yilga tayinlanadi.",
        ],
        correct: 1,
      },
      {
        q: "Sudyalik lavozimiga birinchi marta tayinlanadigan (saylanadigan) shaxslar uchun belgilangan vakolat muddati qancha?",
        options: [
          "5 yil muddatga.",
          "10 yil muddatga.",
          "Muddatsiz davrga.",
          "7 yil muddatga.",
        ],
        correct: 0,
      },
      {
        q: "Sudyalik lavozimida bo‘lishning eng yuqori yoshi qaysi javobda to‘g‘ri aks etgan?",
        options: [
          "60 yosh, ayollar uchun 55 yosh.",
          "65 yosh, zarurat bo‘lganda qonun bilan belgilangan tartibda uzaytirilishi mumkin.",
          "75 yoshga qadar cheklovsiz faoliyat yuritiladi.",
          "Faqatgina pensiya yoshiga yetgunga qadar.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasi Bosh prokurorini lavozimiga tayinlash va ozod qilish tartibi qanday?",
        options: [
          "Prezident tomonidan tayinlanadi va Senat tomonidan tasdiqlanadi.",
          "Oliy Majlis Qonunchilik palatasi tomonidan saylanadi.",
          "Prezident tomonidan tayinlanadi va ozod qilinadi (Senatning tasdig'i bilan).",
          "Vazirlar Mahkamasi taqdimiga binoan Adliya vaziri tomonidan tayinlanadi.",
        ],
        correct: 2,
      },
      {
        q: "Prokuratura organlarining yagona markazlashtirilgan tizimiga rahbarlikni kim amalga oshiradi?",
        options: [
          "Oliy sud raisi.",
          "O‘zbekiston Respublikasi Bosh prokurori.",
          "Ichki ishlar vaziri.",
          "Prezident huzuridagi Xavfsizlik kengashi kotibi.",
        ],
        correct: 1,
      },
      {
        q: "Bosh prokuror va unga bo‘ysunuvchi prokurorlarning vakolatlari muddati necha yil?",
        options: ["3 yil.", "5 yil.", "10 yil.", "Muddatsiz."],
        correct: 1,
      },
      {
        q: "Qoraqalpog‘iston Respublikasi prokurorini lavozimiga tayinlash tartibi qanday?",
        options: [
          "O‘zbekiston Respublikasi Bosh prokurori tomonidan mustaqil ravishda.",
          "Qoraqalpog‘iston Respublikasining oliy vakillik organi (Jo‘qorg‘i Kenges) bilan kelishilgan holda O‘zbekiston Respublikasi Bosh prokurori tomonidan.",
          "Faqatgina Qoraqalpog‘iston Respublikasi Vazirlar Kengashi raisi tomonidan.",
          "Saylov yo‘li bilan xalq tomonidan.",
        ],
        correct: 1,
      },
      {
        q: "Prokuratura organlari o‘z vakolatlarini amalga oshirishda kimga bo‘ysunadilar?",
        options: [
          "Mahalliy hokimiyat organlariga.",
          "Har qanday davlat organlaridan mustaqil ravishda, faqat qonunga.",
          "Faqat Oliy sud Plenumiga.",
          "Siyosiy partiyalarning hududiy bo‘linmalariga.",
        ],
        correct: 1,
      },
      {
        q: "Sudyalik lavozimiga nomzodlar uchun qo‘yilgan minimal yosh senzi qancha?",
        options: ["25 yosh.", "30 yosh.", "35 yosh.", "40 yosh."],
        correct: 2,
      },
      {
        q: "O‘zbekiston Respublikasi Oliy sudi Plenumi qanday vakolatga ega?",
        options: [
          "Faqatgina xo‘jalik nizolarini birinchi instansiyada ko‘rib chiqish.",
          "Sud amaliyotini umumlashtirish asosida sudlarga qonun hujjatlarini qo‘llash masalalari bo‘yicha tushuntirishlar berish.",
          "Yangi qonunlarni qabul qilish va ularga o'zgartirish kiritish.",
          "Sudyalarni intizomiy javobgarlikka tortish va ishdan bo'shatish.",
        ],
        correct: 1,
      },
      {
        q: "Sudyalarning mustaqilligi va daxlsizligi qaysi hujjat bilan kafolatlanadi?",
        options: [
          "Faqat ichki idoraviy yo'riqnomalar bilan.",
          "Konstitutsiya va qonunlar bilan.",
          "Viloyat hokimlarining farmoyishlari bilan.",
          "Siyosiy partiyalar ustavlari bilan.",
        ],
        correct: 1,
      },
      {
        q: "Konstitutsiyaviy sud qarorlarining huquqiy kuchi qanday?",
        options: [
          "Ular tavsiyaviy xarakterga ega.",
          "Ular qat'iy va ularning ustidan shikoyat qilinishi mumkin emas.",
          "Ular faqatgina bir yil davomida amal qiladi.",
          "Ular Oliy sud tomonidan bekor qilinishi mumkin.",
        ],
        correct: 1,
      },
      {
        q: "Prokuratura organlari faoliyatida qaysi prinsip ustuvor hisoblanadi?",
        options: [
          "Markazlashtirilganlik va quyi prokurorlarning yuqori prokurorlarga bo‘ysunishi.",
          "Mahalliy davlat hokimiyati bilan kelishgan holda ish yuritish.",
          "Faqatgina fuqarolarning arizalariga asosan tekshiruv o'tkazish.",
          "Sudlar faoliyatiga rahbarlik qilish.",
        ],
        correct: 0,
      },

      // ======

      {
        q: "Prokuror nazorati hujjatlari (prokurorning choralar ko‘rish hujjatlari) tizimiga qaysi javobdagi elementlar kiradi?",
        options: [
          "Faqat sud majlisining bayonnomasi va ma'muriy jarima qarori.",
          "Protest, taqdimnoma, qaror va ogohlantirish.",
          "Litsenziyani bekor qilish to'g'risidagi buyruq va nizom.",
          "Faqatgina jinoyat ishini qo'zg'atish haqidagi ko'rsatma.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekiston Respublikasida advokaturaning huquqiy maqomi va asosiy vazifasi bo'yicha Konstitutsiyaviy qoida qanday?",
        options: [
          "Advokatura davlat organi bo'lib, sud qarorlarini ijro etish bilan shug'ullanadi.",
          "Jismoniy va yuridik shaxslarga malakali huquqiy yordam ko‘rsatish uchun advokatura faoliyat ko‘rsatadi.",
          "Advokatlar faqatgina davlat tomonidan tayinlangan taqdirdagina faoliyat yuritadi.",
          "Advokatura prokuratura tizimining bir qismi bo'lib, ayblovni quvvatlashga yordam beradi.",
        ],
        correct: 1,
      },
      {
        q: "Advokatlik faoliyatining mustaqilligi qanday kafolatlanadi?",
        options: [
          "Advokatning professional faoliyatiga aralashishga yo'l qo'yilmaydi va u o'z faoliyatida faqat qonunga bo'ysunadi.",
          "Advokat har bir qilgan ishi bo'yicha mahalliy hokimiyatga hisobot beradi.",
          "Advokatning barcha hujjatlari prokuratura tomonidan oldindan tasdiqlanishi shart.",
          "Advokat faqat sud raisi ruxsat bergan mijozlarnigina himoya qila oladi.",
        ],
        correct: 0,
      },
      {
        q: "Konstitutsiyaga ko'ra, shaxsni ushlash chog'ida uning huquqlari bo'yicha advokatning o'rni qanday?",
        options: [
          "Advokat faqat sud hukmi o'qilgandan so'ng jalb qilinishi mumkin.",
          "Shaxs ushlangan paytdan boshlab o'ziga advokat yollash, himoyachi yordamidan foydalanish huquqiga ega.",
          "Advokatga murojaat qilish uchun shaxs kamida 24 soat hibsda bo'lishi shart.",
          "Faqat og'ir jinoyat sodir etilgan hollardagina advokat yordami kafolatlanadi.",
        ],
        correct: 1,
      },
      {
        q: "Prokuratura organlari faoliyatida ochiqlik va hisobdorlik prinsipi qanday amalga oshiriladi?",
        options: [
          "Bosh prokuror har yili Oliy Majlis Senatiga hisobot taqdim etadi.",
          "Prokuratura faqat yuridik shaxslar uchun ochiq hisoblanadi.",
          "Prokurorlar o'z ish usullarini sir saqlashlari shart.",
          "Hisobotlar faqatgina ichki idoraviy yig'ilishlarda ko'rib chiqiladi.",
        ],
        correct: 0,
      },

      // =======
    ]),
  },
  // ========================================================================
  // ========================================================================  topic7: {
  // topic11: {
  //   title: "11-Bo'lim",
  //   questions: randomizeQuestions(),
  // },
*/
  // ========================================================================
};
