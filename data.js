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
//tarix
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

   topic4: {
    title: "Tarix 4-Bo'lim",
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

  
   topic5: {
    title: "Tarix 5-Bo'lim",
    questions: randomizeQuestions([


  {
    "q": "O‘zbekiston Respublikasi \"Inson huquqlari bo‘yicha milliy markazi\" qachon tashkil etilgan?",
    "options": [
      "1991-yil 31-avgust",
      "1996-yil 31-oktabr",
      "2000-yil 1-yanvar",
      "1995-yil 8-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "\"O‘zbekiston mustaqillikka erishish ostonasida\" asari muallifi kim?",
    "options": [
      "Abdulla Oripov",
      "Erkin Vohidov",
      "Islom Karimov",
      "Shavkat Mirziyoyev"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda xususiy mulk huquqi qaysi hujjatlar bilan himoyalangan?",
    "options": [
      "Faqat Fuqarolik kodeksi bilan",
      "Faqat Ma'muriy kodeks bilan",
      "Konstitutsiya va \"Xususiy mulkni himoya qilish va mulkdorlar huquqlarining kafolatlari to‘g‘risida\"gi Qonun bilan",
      "Faqat xalqaro shartnomalar bilan"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi YeXHT (OBSE)ga qachon a’zo bo‘lgan?",
    "options": [
      "1991-yil 1-sentabr",
      "1992-yil 26-fevral",
      "1996-yil 31-oktabr",
      "1993-yil 10-mart"
    ],
    "correct": 1
  },
  {
    "q": "\"Kichik biznes va xususiy tadbirkorlikka keng yo‘l ochish\" tamoyili qaysi yilgi dasturning asosi bo‘lgan?",
    "options": [
      "2005-yil",
      "2010-yil",
      "2011-yil",
      "2015-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonning birinchi xalqaro avtomobil yo‘li qaysi?",
    "options": [
      "Toshkent-Samarqand yo‘li",
      "Andijon-O‘sh-Qashqar avtomobil yo‘li",
      "G‘uzor-Termiz yo‘li",
      "Toshkent-O‘sh yo‘li"
    ],
    "correct": 1
  },
  {
    "q": "Toshkent islom universiteti qachon tashkil etilgan?",
    "options": [
      "1991-yil",
      "1995-yil",
      "1999-yil",
      "2004-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Siyosiy partiyalar to‘g‘risida\"gi Qonun qachon qabul qilingan?",
    "options": [
      "1992-yil 8-dekabr",
      "1996-yil 26-dekabr",
      "1998-yil 1-aprel",
      "2003-yil 15-fevral"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Senatining birinchi majlisi qachon bo‘lib o‘tgan?",
    "options": [
      "2004-yil 25-dekabr",
      "2005-yil 27-yanvar",
      "2000-yil 1-sentabr",
      "2010-yil 14-yanvar"
    ],
    "correct": 1
  },
  {
    "q": "\"O‘zbekiston XXI asr bo‘sag‘asida: xavfsizlikka tahdid, barqarorlik shartlari va taraqqiyot kafolatlari\" asari qachon nashr etilgan?",
    "options": [
      "1991-yil",
      "1995-yil",
      "1997-yil",
      "2001-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Markaziy banki qachon va nima negizida tashkil etilgan?",
    "options": [
      "1991-yil 15-fevralda O‘zbekiston Respublikasi Davlat banki negizida",
      "1992-yil 8-dekabrda moliya vazirligi negizida",
      "1990-yil 1-sentabrda mustaqil ravishda",
      "1994-yil 1-iyulda milliy valyuta joriy etilganda"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda \"Bilimlar kuni\" qachon nishonlanadi?",
    "options": [
      "1-sentabr",
      "2-sentabr",
      "1-oktabr",
      "30-iyun"
    ],
    "correct": 1
  },
  {
    "q": "Yunesko tomonidan \"Jahon merosi ro‘yxati\"ga kiritilgan O'zbekistondagi birinchi shahar qaysi?",
    "options": [
      "Samarqand",
      "Buxoro",
      "Xiva (\"Ichan-qal’a\" majmuasi)",
      "Shahrisabz"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Islom hamkorlik tashkilotiga (IHT) qachon a’zo bo‘lgan?",
    "options": [
      "1992-yil",
      "1994-yil",
      "1996-yil",
      "2001-yil"
    ],
    "correct": 2
  },
  {
    "q": "\"Mustaqillik\" ordeni qachon ta’sis etilgan?",
    "options": [
      "1991-yil 31-avgust",
      "1992-yil 8-dekabr",
      "1994-yil 30-avgust",
      "1996-yil 1-sentabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda qachon ilk bor Prezidentlik saylovi muqobillik asosida o‘tkazilgan?",
    "options": [
      "1990-yil 24-mart",
      "1991-yil 29-dekabr",
      "2000-yil 9-yanvar",
      "2007-yil 23-dekabr"
    ],
    "correct": 1
  },
  {

"q": "O‘zbekiston iqtisodiyotini modernizatsiya qilishning asosiy maqsadi nima?",
    "options": [
      "Faqat xomashyo eksportini ko‘paytirish",
      "Jahon bozorida raqobatbardosh bo‘lgan tayyor mahsulotlar ishlab chiqarish",
      "Import hajmini oshirish",
      "Qishloq xo‘jaligini to‘liq mexanizatsiyalash"
    ],
    "correct": 1
  },
  {
    "q": "\"Paxta yakka-hokimligi\" tushunchasi nimani anglatadi?",
    "options": [
      "Paxta hosildorligini oshirishni",
      "Paxta eksportini nazorat qilishni",
      "Qishloq xo‘jaligida faqat paxta yetishtirishga e’tibor qaratilib, boshqa tarmoqlarning chetda qolishi",
      "Yangi paxta navlarini yaratishni"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyaviy sudi qachon tashkil etilgan?",
    "options": [
      "1992-yil",
      "1993-yil",
      "1995-yil",
      "1998-yil"
    ],
    "correct": 2
  },
  {
    "q": "\"Milliy tiklanish\" demokratik partiyasi qachon tashkil etilgan?",
    "options": [
      "1991-yil 1-noyabr",
      "1995-yil 3-iyun",
      "2000-yil 15-may",
      "2004-yil 2-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda akademik litseylar va kasb-hunar kollejlari tizimi qaysi dastur asosida joriy etilgan?",
    "options": [
      "Sog‘lom avlod dasturi",
      "Kadrlar tayyorlash milliy dasturi (1997)",
      "Ta’lim to‘g‘risidagi yangi qonun",
      "Maktab ta’limini rivojlantirish dasturi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat chegarasi to‘g‘risida\"gi Qonuni birinchi marta qachon qabul qilingan?",
    "options": [
      "1992-yil 8-dekabr",
      "1999-yil 20-avgust",
      "2005-yil 1-yanvar",
      "2023-yil 15-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro moliya korporatsiyasi (IFC)ga O‘zbekiston qachon a’zo bo‘lgan?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1993-yil",
      "1995-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Qahramoni unvoni qachon ta’sis etilgan?",
    "options": [
      "1992-yil 31-avgust",
      "1994-yil 5-may",
      "1996-yil 1-sentabr",
      "1998-yil 8-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "Amir Temur tavalludining 660 yilligi Yunesko shafeligida qachon nishonlangan?",
    "options": [
      "1991-yil",
      "1994-yil",
      "1996-yil",
      "2000-yil"
    ],
    "correct": 2
  }
,
  {
    "q": "O‘zbekistonda \"Oila yili\" deb qaysi yil e’lon qilingan edi?",
    "options": [
      "1991-yil",
      "1998-yil",
      "2005-yil",
      "2010-yil"
    ],
    "correct": 1
  },
  {
    "q": "\"O‘zbekiston iqtisodiy islohotlarni chuqurlashtirish yo‘lida\" asari muallifi kim?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulla Oripov",
      "Erkin Vohidov"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida qurilgan yirik issiqlik elektr stansiyasi qaysi?",
    "options": [
      "Sirdaryo IES",
      "Talimarjon IES",
      "Toshkent IES",
      "Navoiy IES"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda lotin yozuviga asoslangan o‘zbek alifbosini joriy etish to‘g‘risida qonun qachon qabul qilingan?",
    "options": [
      "1991-yil 31-avgust",
      "1992-yil 8-dekabr",
      "1993-yil 2-sentabr",
      "1995-yil 21-oktabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston mustaqilligining bir yilligi munosabati bilan Toshkentda qaysi maydon ochilgan?",
    "options": [
      "Amir Temur maydoni",
      "Mustaqillik maydoni",
      "Xotira maydoni",
      "Do'stlik maydoni"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Ayollar yili\" deb qaysi yil e’lon qilingan?",
    "options": [
      "1995-yil",
      "1999-yil",
      "2001-yil",
      "2004-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining birinchi Konstitutsiyaviy komissiyasi raisi kim bo‘lgan?",
    "options": [
      "Erkin Xalilov",
      "Akmal Saidov",
      "Islom Karimov",
      "Nig'matilla Yo'ldoshev"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda nodavlat-notijorat tashkilotlari (NNT) faoliyatini tartibga soluvchi qonun qachon qabul qilingan?",
    "options": [
      "1991-yil",
      "1995-yil",
      "1999-yil 14-aprel",
      "2003-yil"
    ],
    "correct": 2
  },
  {
    "q": "\"O‘zbekneftegaz\" milliy xolding kompaniyasi qachon tashkil etilgan?",
    "options": [
      "1992-yil",
      "1998-yil",
      "2000-yil",
      "2005-yil"
    ],
    "correct": 1
  },
  {
    "q": "Samarqand shahrining 2750 yilligi qachon nishonlangan?",
    "options": [
      "1996-yil",
      "2001-yil",
      "2007-yil",
      "2010-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Saxovat va ko‘mak\" jamg‘armasi qachon (qaysi davrda) tashkil etilgan?",
    "options": [
      "1991-yil mustaqillik ostonasida",
      "2000-yil onalar yili munosabati bilan",
      "2020-yil (pandemiya davrida)",
      "2017-yil harakatlar strategiyasi doirasida"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Referendum to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1991-yil 18-noyabr",
      "1992-yil 8-dekabr",
      "1995-yil 30-avgust",
      "2002-yil 27-yanvar"
    ],
    "correct": 0
  },
  {
    "q": "\"O‘zbekiston: milliy istiqlol, iqtisod, siyosat, mafkura\" asari qachon nashr etilgan?",
    "options": [
      "1991-yil",
      "1993-yil",
      "1996-yil",
      "1998-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda prokuratura organlari xodimlari kuni qachon nishonlanadi?",
    "options": [
      "14-yanvar",
      "8-yanvar",
      "1-oktabr",
      "25-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Sog‘lom avlod uchun\" ordeni qachon ta’sis etilgan?",
    "options": [
      "1991-yil",
      "1993-yil 4-mart",
      "1996-yil",
      "2000-yil"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan birinchi yirik masjid qaysi?",
    "options": [
      "Hazrati Imom masjidi",
      "Minor masjidi",
      "Ko'kaldosh masjidi",
      "Islom ota masjidi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksi qachon qabul qilingan?",
    "options": [
      "1991-yil",
      "1994-yil 22-sentabr",
      "1998-yil",
      "2001-yil"
    ],
    "correct": 1
  },
  {
    "q": "\"Xalqaro kurash assotsiatsiyasi\" qayerda tashkil etilgan?",
    "options": [

"London",
      "Parij",
      "Toshkent",
      "Nyu-York"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda birinchi marta xususiylashtirish jarayoni qaysi yildan boshlangan?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1994-yil",
      "1996-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Mudofaa vazirligi qachon tashkil etilgan?",
    "options": [
      "1991-yil 31-avgust",
      "1991-yil 6-sentabr",
      "1992-yil 14-yanvar",
      "1992-yil 8-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "\"Inson manfaatlari hamma narsadan ustun\" g‘oyasi qaysi yilning asosiy shiori bo‘lgan?",
    "options": [
      "2010-yil",
      "2015-yil",
      "2017-yil",
      "2020-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Tashqi ishlar vazirligi qachon tashkil etilgan?",
    "options": [
      "1991-yil avgust oxiri",
      "1992-yil yanvar",
      "1992-yil dekabr",
      "1993-yil mart"
    ],
    "correct": 0
  },
  {
    "q": "\"Barkamol avlod yili\" qaysi yil edi?",
    "options": [
      "2005-yil",
      "2008-yil",
      "2010-yil",
      "2012-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston iqtisodiyotida \"erkin iqtisodiy zonalar\" (EIZ) tashkil etish qaysi hududdan boshlangan?",
    "options": [
      "Toshkent viloyati",
      "Navoiy viloyati",
      "Jizzax viloyati",
      "Namangan viloyati"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Gerbi\"ning muallifi kim?",
    "options": [
      "Anvar Mamajonov",
      "Mutal Burhonov",
      "Abdulla Oripov",
      "Murod Mansur"
    ],
    "correct": 0

 
   },
    ]),
  },


  
  ///////////////////////////////////////
        topic6: {
    title: "Tarix 6-Bo'lim",
    questions: randomizeQuestions([


  {
    "q": "O‘zbekiston Respublikasining \"Chet el investitsiyalari to‘g‘risida\"gi Qonuni qachon qabul qilingan? [cite: 3]",
    "options": [
      "1998-yil 30-aprel",
      "1998-yil 1-may",
      "1997-yil 30-aprel",
      "1999-yil 30-aprel"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2020-yil 2-martdagi Farmoni bilan qaysi davlat dasturi tasdiqlangan? [cite: 1, 2]",
    "options": [
      "\"Faol investitsiyalar va ijtimoiy rivojlanish yili\" dasturi",
      "\"Ilm, ma’rifat va raqamli iqtisodiyotni rivojlantirish yili\" dasturi",
      "\"Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili\" dasturi",
      "\"Inson qadri va faol mahalla yili\" dasturi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Turizm to‘g‘risida\"gi Qonuni yangi tahriri qabul qilingan aniq sanani ko‘rsating. [cite: 5]",
    "options": [
      "2019-yil 18-avgust",
      "2018-yil 18-iyul",
      "2019-yil 18-iyul",
      "2020-yil 18-iyul"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Olimpiya shon-shuhrati muzeyi\"ning ochilish marosimi qachon bo‘lib o‘tgan? [cite: 6]",
    "options": [
      "1991-yil 1-sentabr",
      "1996-yil 1-sentabr",
      "1996-yil 31-avgust",
      "2000-yil 1-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Sog‘lom bola yili\" deb e’lon qilingan yilni aniqlang. [cite: 8]",
    "options": [
      "2013-yil",
      "2015-yil",
      "2012-yil",
      "2014-yil"
    ],
    "correct": 3
  },
  {
    "q": "O‘zbekiston Respublikasining \"Aholini ish bilan ta’minlash to‘g‘risida\"gi Qonunining yangi tahriri qachon qabul qilingan? [cite: 9]",
    "options": [
      "2020-yil 20-oktabr",
      "2020-yil 20-sentabr",
      "2021-yil 20-oktabr",
      "2019-yil 20-oktabr"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida barpo etilgan \"Buxoro neftni qayta ishlash zavodi\" qaysi yildan o‘z faoliyatini boshlagan? [cite: 10]",
    "options": [
      "1995-yil",
      "1998-yil",
      "1997-yil",
      "1999-yil"
    ],
    "correct": 2
  },
  {
    "q": "Prezident vakolat muddati tugaganda, yangi saylovlar o‘tkaziladigan vaqtni belgilang. [cite: 11, 12]",
    "options": [
      "Oktabr oyi ikkinchi o‘n kunligining oxirgi yakshanbasida",
      "Oktabr oyi uchinchi o‘n kunligining birinchi yakshanbasida",
      "Noyabr oyi birinchi yakshanbasida",
      "Dekabr oyi uchinchi o‘n kunligining birinchi yakshanbasida"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Siyosiy partiyalarni moliyalashtirish to‘g‘risida\"gi Qonuni qabul qilingan yilni ko‘rsating. [cite: 14]",
    "options": [
      "2003-yil",
      "2005-yil",
      "2004-yil",
      "2006-yil"
    ],
    "correct": 2
  },
  {
    "q": "Toshkent shahridagi \"G‘alaba bog‘i\" yodgorlik majmuasi qaysi muhim sana munosabati bilan ochilgan? [cite: 15]",
    "options": [
      "2020-yil 1-sentabr",
      "2020-yil 9-may",
      "2019-yil 9-may",
      "2021-yil 31-avgust"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Elektron hukumat to‘g‘risida\"gi Qonuni qabul qilingan sanani aniqlang. [cite: 16]",
    "options": [
      "2015-yil 9-dekabr",
      "2016-yil 9-dekabr",
      "2015-yil 8-dekabr",
      "2014-yil 9-dekabr"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro miqyosda nishonlanadigan \"Inson huquqlari kuni\" O‘zbekistonda qachon nishonlanadi? [cite: 17]",
    "options": [
      "8-dekabr",
      "10-dekabr",
      "1-dekabr",
      "21-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ta’lim to‘g‘risida\"gi Qonuni yangi tahriri qaysi sanada qabul qilingan? [cite: 18]",
    "options": [
      "2020-yil 2-mart",
      "2020-yil 23-avgust",
      "2020-yil 23-sentabr",
      "2021-yil 23-sentabr"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Qo‘ng‘irot soda zavodi\" qaysi yilda ishga tushirilgan? [cite: 19]",
    "options": [
      "2005-yil",
      "2007-yil",
      "2006-yil",
      "2008-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Vazirlar Mahkamasining tarkibiga kiruvchi shaxslar to‘g‘ri ko‘rsatilgan javobni tanlang. [cite: 20]",
    "options": [
      "Bosh vazir, vazirlar va qo‘mita raislari",
      "Bosh vazir, uning o‘rinbosarlari va vazirlar",
      "Prezident, Bosh vazir va vazirlar",
      "Bosh vazir va barcha davlat maslahatchilari"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Yoshlar ittifoqi\" kuni sifatida qaysi sana belgilangan? [cite: 21]",
    "options": [
      "30-iyun",
      "30-avgust",
      "1-iyun",
      "14-yanvar"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining \"Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida\"gi Qonuni qachon qabul qilingan? [cite: 22]",
    "options": [
      "2000-yil",
      "2002-yil",
      "2001-yil",
      "2003-yil"
    ],
    "correct": 2
  },
  {
    "q": "Toshkent shahridagi \"Simpoziumlar saroyi\" qachon foydalanishga topshirilgan? [cite: 23]",
    "options": [
      "2010-yil",
      "2012-yil",
      "2011-yil",
      "2013-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Normativ-huquqiy hujjatlar to‘g‘risida\"gi Qonunining yangi tahriri qachon qabul qilingan? [cite: 24]",
    "options": [
      "2020-yil 20-aprel",
      "2021-yil 20-aprel",
      "2021-yil 20-may",
      "2022-yil 20-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Barkamol avlod\" bolalar markazlari qaysi vazirlik tasarrufida faoliyat yuritadi? [cite: 25]",
    "options": [
      "Madaniyat vazirligi",
      "Oliy ta’lim, fan va innovatsiyalar vazirligi",
      "Maktabgacha va maktab ta’limi vazirligi",
      "Yoshlar siyosati va sport vazirligi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qishloq xo‘jaligi kooperativi (shirkat xo‘jaligi) to‘g‘risida\"gi Qonuni qabul qilingan yilni aniqlang. [cite: 7]",
    "options": [
      "1997-yil",
      "1998-yil",
      "1999-yil",
      "1996-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Yoshlar – kelajagimiz\" jamg‘armasi qaysi yilda tashkil etilgan? [cite: 4]",
    "options": [
      "2017-yil",
      "2019-yil",
      "2018-yil",
      "2020-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2018-yil 21-sentabrdagi Farmoni bilan qaysi strategiya tasdiqlangan? [cite: 26]",
    "options": [
      "2017-2021-yillarda Harakatlar strategiyasi",
      "2019-2021-yillarda O‘zbekiston Respublikasini innovatsion rivojlantirish strategiyasi",
      "2022-2026-yillarda Taraqqiyot strategiyasi",
      "Raqamli O‘zbekiston – 2030 strategiyasi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Bilimlar kuni\" munosabati bilan beriladigan \"Prezident sovg‘asi\" kimlarga mo‘ljallangan? [cite: 13]",
    "options": [
      "Barcha maktab o‘quvchilariga",
      "1-sinf o‘quvchilariga",
      "Bitiruvchi sinf o‘quvchilariga",
      "Kam ta’minlangan oila farzandlariga"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Xodjayli shisha zavodi\" qachon ishga tushgan? [cite: 27]",
    "options": [
      "1990-yillarning oxirida",
      "2010-yillarning boshlarida",
      "2000-yillarning boshlarida",
      "1991-yilda"
    ],
    "correct": 2
  },

  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining qaysi moddasida O‘zbekiston Respublikasining davlat tili belgilangan?",
    "options": [
      "3-modda",
      "5-modda",
      "4-modda",
      "2-modda"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Navro‘z\" umumxalq bayrami sifatida rasman qaysi hujjat asosida qayta tiklangan?",
    "options": [
      "1991-yil 31-avgustdagi Qonun",
      "1990-yil 3-maydagi Farmon",
      "1992-yil 8-dekabrdagi Konstitutsiya",
      "1989-yil 21-oktabrdagi Qonun"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Valyutani tartibga solish to‘g‘risida\"gi Qonuni yangi tahriri qabul qilingan vaqtni aniqlang.",
    "options": [
      "2019-yil 22-oktabr",
      "2020-yil 22-oktabr",
      "2018-yil 22-oktabr",
      "2019-yil 20-aprel"
    ],
    "correct": 0
  },
  {
    "q": "Toshkentda Alisher Navoiy nomi bilan ataluvchi O‘zbekiston Milliy kutubxonasi qaysi yilda tashkil etilgan?",
    "options": [
      "2000-yil",
      "2001-yil",
      "2002-yil",
      "2003-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining raisi (Spikeri) qanday tartibda lavozimga saylanadi?",
    "options": [
      "Prezident tavsiyasiga ko‘ra ochiq ovoz berish yo‘li bilan",
      "Deputatlar orasidan yashirin ovoz berish yo‘li bilan",
      "Partiya rahbarlari orasidan tayinlash yo‘li bilan",
      "Senat a’zolari tomonidan tasdiqlash yo‘li bilan"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda qaysi yil \"Xalq bilan muloqot va inson manfaatlari yili\" deb e’lon qilingan edi?",
    "options": [
      "2016-yil",
      "2018-yil",
      "2017-yil",
      "2015-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Arxiv ishi to‘g‘risida\"gi Qonuni qabul qilingan aniq sanani ko‘rsating.",
    "options": [
      "2010-yil 15-iyul",
      "2010-yil 15-iyun",
      "2011-yil 15-iyun",
      "2009-yil 15-iyun"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan va uzunligi 400 km dan ortiq bo‘lgan avtomobil yo‘li qaysi yo‘nalishda barpo etilgan?",
    "options": [
      "Toshkent-Termiz",
      "Toshkent-Samarqand",
      "Toshkent-O‘sh",
      "Samarqand-Buxoro"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Markaziy bankining faoliyatidagi eng ustuvor va asosiy maqsadi nima?",
    "options": [
      "Tashqi savdo balansini nazorat qilish",
      "Milliy valyutaning barqarorligini ta’minlash",
      "Tijorat banklarining foydasini oshirish",
      "Davlat byudjeti defitsitini yopish"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Obod qishloq\" va \"Obod mahalla\" dasturlarini moliyalashtirishda ishtirok etmaydigan manbani toping.",
    "options": [
      "Davlat byudjeti",
      "Mahalliy byudjet",
      "Homiylik mablag‘lari",
      "Xalqaro valyuta jamg‘armasi grantlari"
    ],
    "correct": 3
  },
  {
    "q": "O‘zbekiston Respublikasining \"Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida\"gi Qonunining yangi tahriri qaysi yilda qabul qilingan?",
    "options": [
      "2014-yil",
      "2017-yil",
      "2018-yil",
      "2015-yil"
    ],
    "correct": 1
  },
  {
    "q": "Toshkentdagi qaysi yirik dam olish maskani Alisher Navoiy nomi bilan ataladi?",
    "options": [
      "G‘alaba bog‘i",
      "O‘zbekiston milliy bog‘i",
      "Markaziy istirohat bog‘i",
      "Botanika bog‘i"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasida iqtisodiy asoslar nechanchi bobda o‘z aksini topgan?",
    "options": [
      "10-bob",
      "11-bob",
      "12-bob",
      "13-bob"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Yoshlar daftariga\" kiritilgan yoshlarga ko‘rsatiladigan yordam turlariga nimalar kiritilgan?",
    "options": [
      "Faqat naqd pul ko‘rinishidagi moddiy yordam",
      "Ta’lim kontrakti to‘lovi, asbob-uskuna olish uchun subsidiya, psixologik va huquqiy yordam",
      "Xorijga chiqish pasportini bepul rasmiylashtirish",
      "Uy-joy sotib olish uchun foizsiz kreditlar"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Gidrometeorologiya faoliyati to‘g‘risida\"gi Qonuni qabul qilingan sanani belgilang.",
    "options": [
      "2020-yil 17-noyabr",
      "2021-yil 17-noyabr",
      "2020-yil 17-oktabr",
      "2019-yil 17-noyabr"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida foydalanishga topshirilgan \"Dehqonobod kaliyli o‘g‘itlar zavodi\" qaysi yilda ishga tushgan?",
    "options": [
      "2008-yil",
      "2012-yil",
      "2010-yil",
      "2011-yil"
    ],
    "correct": 2
  },
  {
    "q": "2022-2026-yillarga mo‘ljallangan Yangi O‘zbekistonning taraqqiyot strategiyasi qaysi Farmon bilan tasdiqlangan?",
    "options": [
      "2022-yil 28-yanvardagi Farmon",
      "2022-yil 28-fevraldagi Farmon",
      "2021-yil 28-dekabrdagi Farmon",
      "2022-yil 1-yanvardagi Farmon"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda \"Inson qadri va faol mahalla yili\" doirasida mahalla darajasida qaysi yangi boshqaruv tizimi joriy etildi?",
    "options": [
      "\"Mahalla beshligi\" tizimi",
      "\"Mahalla yettiligi\" tizimi",
      "\"Mahalla faollari\" kengashi",
      "\"Mahalla oqsoqollari\" tizimi"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkentda barpo etilgan \"Ma’rifat markazi\" tarkibiga qaysi ob'ektlar kiradi?",
    "options": [
      "Olimpiya shon-shuhrati muzeyi va Simpoziumlar saroyi",
      "Simpoziumlar saroyi va Milliy kutubxona",
      "G‘alaba bog‘i va Milliy kutubxona",
      "O‘zbekiston milliy bog‘i va Milliy kutubxona"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining yangi \"Mahalla to‘g‘risida\"gi qonuni qaysi yilda loyihalashtirilgan?",
    "options": [
      "2021-yil",
      "2022-yil",
      "2023-yil",
      "2024-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda keng ko‘lamli \"Bir million dasturchi\" loyihasi qachon start olgan?",
    "options": [
      "2018-yil noyabr",
      "2019-yil oktyabr",
      "2019-yil noyabr",
      "2020-yil yanvar"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining eski tahrirdagi Konstitutsiyasida ommaviy axborot vositalari nechanchi bobda keltirilgan edi?",
    "options": [
      "14-bob",
      "16-bob",
      "15-bob",
      "17-bob"
    ],
    "correct": 2
  },
  {
    "q": "Afg‘oniston bilan bog‘lovchi \"Xayraton-Mozori Sharif\" temir yo‘li qurilishi qachon yakuniga yetkazilgan?",
    "options": [
      "2009-yil dekabr",
      "2010-yil noyabr",
      "2011-yil yanvar",
      "2010-yil dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Raqobat to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilindi?",
    "options": [
      "2022-yil 3-iyul",
      "2023-yil 3-iyun",
      "2023-yil 3-iyul",
      "2021-yil 3-iyul"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda ma’naviy-ma’rifiy ishlar samaradorligini oshirish tizimi qaysi yillarda sezilarli darajada yangilandi?",
    "options": [
      "2017 va 2020-yillarda",
      "2018 va 2022-yillarda",
      "2019 va 2021-yillarda",
      "2020 va 2023-yillarda"
    ],
    "correct": 2

 
 
   },
    ]),
  },

  
  
  //////////////////////////////////////////////////////////////////////////////
          
  
      
      topic7: {
    title: "Tarix 7-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "O‘zbekiston Respublikasining \"Qimmatli qog‘ozlar bozori to‘g‘risida\"gi Qonuni qabul qilingan yil va uning yangi tahriri tahrirlangan yilni aniqlang.",
    "options": [
      "2008-yil va 2012-yil",
      "2007-yil va 2015-yil",
      "2008-yil va 2015-yil",
      "2010-yil va 2018-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Gidrometeorologiya xizmati agentligi\" hozirda qaysi vazirlik tuzilmasiga kiradi?",
    "options": [
      "Favqulodda vaziyatlar vazirligi",
      "Qishloq xo‘jaligi vazirligi",
      "Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi",
      "Suv xo‘jaligi vazirligi"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida energetika tizimini rivojlantirish maqsadida \"Taxiatosh IES\"da yangi bug‘-gaz qurilmalari qachon ishga tushirilgan?",
    "options": [
      "2018-yil",
      "2019-yil",
      "2020-yil",
      "2021-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Kibexavfsizlik to‘g‘risida\"gi Qonuni qabul qilingan aniq sanani belgilang.",
    "options": [
      "2022-yil 15-mart",
      "2022-yil 15-aprel",
      "2021-yil 15-aprel",
      "2022-yil 1-may"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda ijtimoiy himoya tizimini takomillashtirishga qaratilgan \"Temir daftar\", \"Ayollar daftari\" va \"Yoshlar daftari\" tizimi qaysi yildan amaliyotga joriy etilgan?",
    "options": [
      "2019-yildan",
      "2020-yildan",
      "2021-yildan",
      "2022-yildan"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat fuqarolik xizmati to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2022-yil 8-sentabr",
      "2022-yil 8-avgust",
      "2021-yil 8-avgust",
      "2023-yil 8-avgust"
    ],
    "correct": 1
  },
  {
    "q": "Toshkent shahrida barpo etilgan va ma'naviy-ma'rifiy ahamiyatga ega bo‘lgan \"Islom sivilizatsiyasi markazi\" qaysi yilda tashkil etilgan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda tadbirkorlikning yangi shakllarini huquqiy tartibga solishga qaratilgan \"Ijtimoiy tadbirkorlik to‘g‘risida\"gi Qonun loyihasi qaysi davrga tegishli?",
    "options": [
      "2019-2020 yillar",
      "2020-2021 yillar",
      "2021-2022 yillar",
      "2022-2023 yillar"
    ],
    "correct": 2
  },
  {
    "q": "Mahallabay ishlash va tadbirkorlikni rivojlantirish agentligi qaysi yil nomlanishi doirasida tashkil etilgan?",
    "options": [
      "\"Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili\"",
      "\"Inson qadri va faol mahalla yili\"",
      "\"Faol investitsiyalar va ijtimoiy rivojlanish yili\"",
      "\"Ilm, ma’rifat va raqamli iqtisodiyotni rivojlantirish yili\""
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyaviy sudi raisini saylash tartibini ko‘rsating.",
    "options": [
      "Prezident tomonidan bevosita tayinlanadi",
      "Oliy Majlis Qonunchilik palatasi tomonidan saylanadi",
      "Prezident taqdimiga binoan Senat tomonidan saylanadi",
      "Sudyalar oliy kengashi tomonidan tavsiya etiladi"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida kimyo sanoatini modernizatsiya qilish doirasida \"Navoiyazot\" AJning yangi majmualari qaysi yillar oralig‘ida ishga tushirildi?",
    "options": [
      "2017-2019-yillarda",
      "2019-2021-yillarda",
      "2020-2022-yillarda",
      "2018-2020-yillarda"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ma’muriy sud ishlarini yuritish to‘g‘risida\"gi kodeksi qachon qabul qilingan?",
    "options": [
      "2017-yil 25-yanvar",
      "2018-yil 25-fevral",
      "2018-yil 25-yanvar",
      "2019-yil 25-yanvar"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda raqamli iqtisodiyotni rivojlantirishga qaratilgan \"Raqamli O‘zbekiston – 2030\" strategiyasi tasdiqlangan sanani aniqlang.",
    "options": [
      "2020-yil 5-oktabr",
      "2020-yil 2-mart",
      "2021-yil 5-oktabr",
      "2020-yil 1-sentabr"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining \"Xususiylashtirish to‘g‘risida\"gi yangi Qonuni qachon qabul qilingan?",
    "options": [
      "2023-yil dekabr",
      "2024-yil fevral",
      "2024-yil mart",
      "2023-yil noyabr"
    ],
    "correct": 1
  },
  {
    "q": "Toshkent shahrida \"Yangi O‘zbekiston\" bog‘ining tantanali ochilish marosimi qachon bo‘lib o‘tgan?",
    "options": [
      "2020-yil 31-avgust",
      "2021-yil 1-sentabr",
      "2021-yil 31-avgust",
      "2022-yil 31-avgust"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ekologiya kodeksi\" loyihasini tayyorlash qaysi davrni qamrab oladi?",
    "options": [
      "2021-2023 yillar",
      "2022-2024 yillar",
      "2023-2025 yillar",
      "2020-2022 yillar"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda ekologik barqarorlikni ta'minlashga qaratilgan \"Yashil makon\" umummilliy loyihasi qachondan start oldi?",
    "options": [
      "2020-yil noyabrdan",
      "2021-yil oktabrdan",
      "2021-yil noyabrdan",
      "2022-yil martdan"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining farmonlari va qarorlari o‘rtasidagi asosiy funksional farq nimada?",
    "options": [
      "Farmonlar ijroviy, qarorlar nazorat ahamiyatiga ega",
      "Farmonlar strategik, qarorlar ijroviy ahamiyatga ega",
      "Farmonlar faqat kadrlar masalasida, qarorlar iqtisodiy masalada",
      "Hech qanday farqi yo‘q, ikkalasi ham bir xil kuchga ega"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida barpo etilgan yirik gidrotexnik inshootlardan biri \"Tuyamo‘yin gidrouzeli\" qaysi daryo o‘zanida joylashgan?",
    "options": [
      "Sirdaryo",
      "Zarafshon",
      "Amudaryo",
      "Surxondaryo"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi \"Soliq kodeksi\" qaysi sanadan e'tiboran kuchga kirdi?",
    "options": [
      "2019-yil 1-dekabrdan",
      "2020-yil 1-yanvardan",
      "2020-yil 1-martdan",
      "2021-yil 1-yanvardan"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda xotin-qizlarning jamiyatdagi rolini oshirish maqsadida \"Gender tenglikni ta’minlash komissiyasi\" qachon tashkil etilgan?",
    "options": [
      "2018-yil",
      "2020-yil",
      "2019-yil",
      "2021-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qonun ijodkorligi\" jarayoni necha bosqichdan iborat deb hisoblanadi?",
    "options": [
      "3 bosqichli",
      "4 bosqichli",
      "5 dan ortiq bosqichdan iborat",
      "Faqat 2 bosqichli (loyihalash va qabul qilish)"
    ],
    "correct": 2
  },
  {
    "q": "Toshkentdagi nufuzli tadbirlar o‘tkaziladigan \"Xalqlar do‘stligi\" saroyining nomi qachon o‘ziga qaytarilgan?",
    "options": [
      "2017-yil sentabr",
      "2018-yil may",
      "2019-yil avgust",
      "2018-yil mart"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Harakatlar strategiyasi\"ning aynan 5-yo‘nalishi qanday nomlanadi?",
    "options": [
      "Iqtisodiyotni rivojlantirish va liberallashtirish",
      "Ijtimoiy sohani rivojlantirish",
      "Xavfsizlik, millatlararo totuvlik va diniy bag‘rikenglik",
      "Davlat va jamiyat qurilishini takomillashtirish"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda uy-joy sharoitini yaxshilashga muhtoj shaxslar uchun \"Subsidiya\" tizimi qaysi yildan boshlab joriy qilindi?",
    "options": [
      "2019-yildan",
      "2021-yildan",
      "2020-yildan",
      "2022-yildan"
    ],
    "correct": 2
  },
 //////
 
  {
    "q": "O‘zbekiston Respublikasining \"Sanoat xavfsizligi\" davlat qo‘mitasi qaysi yilda tashkil etilgan? ",
    "options": [
      "2017-yil",
      "2019-yil",
      "2018-yil",
      "2020-yil"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Qizilqum fosforit kompleksi\" qachon ishga tushirilgan? ",
    "options": [
      "1996-yil",
      "1998-yil",
      "1997-yil",
      "1999-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasiga muvofiq, Senat a’zolari necha kishidan iborat etib belgilangan? ",
    "options": [
      "100 nafar",
      "85 nafar",
      "65 nafar",
      "75 nafar"
    ],
    "correct": 2
  },
  {
    "q": "Mahalla darajasidagi muammolarni raqamlashtirish maqsadida \"On-layn mahalla\" platformasi qachon ishga tushirildi? [cite: 81]",
    "options": [
      "2021-yil",
      "2023-yil",
      "2022-yil",
      "2020-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Reklama to‘g‘risida\"gi yangi Qonuni qabul qilingan sanani aniqlang. [cite: 82]",
    "options": [
      "2022-yil 7-may",
      "2022-yil 7-iyun",
      "2021-yil 7-iyun",
      "2022-yil 1-iyul"
    ],
    "correct": 1
  },
  {
    "q": "Toshkentdagi \"G‘alaba bog‘i\" yodgorlik majmuasining markaziy qismida joylashgan asosiy monument nomi nima? [cite: 83]",
    "options": [
      "\"Mangu xotira\"",
      "\"Ona madhiyasi\"",
      "\"Matonat madhiyasi\"",
      "\"G‘alaba ramzi\""
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasiga ko‘ra, davlat mafkurasi masalasi qanday tartibga solingan? [cite: 84]",
    "options": [
      "Insonparvarlik yagona davlat mafkurasi hisoblanadi",
      "Hech bir mafkura davlat mafkurasi bo‘lishi mumkin emas",
      "Milliy istiqlol g‘oyasi davlat mafkurasi hisoblanadi",
      "Faqat diniy bag‘rikenglik mafkurasi ustuvordir"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Aholi salomatligini mustahkamlash\" strategiyasi qaysi yillarni o‘z ichiga oladi? [cite: 85]",
    "options": [
      "2017–2021 yillar",
      "2020–2025 yillar",
      "2019–2025 yillar",
      "2022–2026 yillar"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat xaridlari to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan? ",
    "options": [
      "2021-yil 22-mart",
      "2021-yil 22-aprel",
      "2022-yil 22-aprel",
      "2020-yil 22-aprel"
    ],
    "correct": 1
  },
  {
    "q": "Qashqadaryo viloyatida joylashgan yirik energetika ob'ekti — \"Talimarjon IES\" qaysi yillarda barpo etilgan? ",
    "options": [
      "Mustaqillik yillarida",
      "Sobiq ittifoq davrida",
      "2020-yildan keyin",
      "1980-yillarda"
    ],
    "correct": 0
  },
  {
    "q": "Oliy Majlisning Inson huquqlari bo‘yicha vakili (Ombudsman) qanday tartibda lavozimga saylanadi? ",
    "options": [
      "Prezident tomonidan tayinlanadi",
      "Vazirlar Mahkamasi tomonidan tasdiqlanadi",
      "Oliy Majlis palatalari tomonidan saylanadi",
      "Konstitutsiyaviy sud tomonidan tavsiya etiladi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda iqtidorli yoshlarni birlashtirish maqsadida \"Yoshlar akademiyasi\" qachon tashkil etilgan? ",
    "options": [
      "2019-yil yanvar",
      "2018-yil avgust",
      "2019-yil avgust",
      "2020-yil sentabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Intellektual mulk to‘g‘risida\"gi Qonunlariga qaysi davrda keng ko‘lamli o‘zgartirish va yangilanishlar kiritildi? ",
    "options": [
      "2018-2019 yillar",
      "2020-2021 yillar",
      "2021-2022 yillar",
      "2023-2024 yillar"
    ],
    "correct": 2
  },
  {
    "q": "Toshkent shahridagi muhtasham \"Humo Arena\" sport majmuasi qachon tantanali ravishda ochilgan? ",
    "options": [
      "2018-yil 1-sentabr",
      "2019-yil 15-mart",
      "2019-yil 21-mart",
      "2020-yil 1-yanvar"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Vazirlar Mahkamasi\"ning raisi maqomi kimga tegishli? ",
    "options": [
      "Prezidentga",
      "Oliy Majlis Spikeriga",
      "Bosh vazirga",
      "Senat Raisiga"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda axborot texnologiyalari sohasini rivojlantirish markazi bo‘lgan \"IT-Park\" qachon tashkil etildi? ",
    "options": [
      "2018-yil may",
      "2019-yil yanvar",
      "2020-yil avgust",
      "2017-yil dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ixtirolar va foydali modellar to‘g‘risida\"gi Qonuni qabul qilingan yilni ko‘rsating. ",
    "options": [
      "1991-yil",
      "1992-yil",
      "1994-yil",
      "1996-yil"
    ],
    "correct": 2
  },
  {
    "q": "Toshkent shahri markazida barpo etilgan \"Toshkent City\" xalqaro biznes markazi qachon tashkil etilgan? ",
    "options": [
      "2016-yil",
      "2018-yil",
      "2017-yil",
      "2015-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining daxlsizligi qaysi maxsus qonun bilan tartibga solinadi? ",
    "options": [
      "\"Konstitutsiya to‘g‘risida\"gi Qonun",
      "\"Prezident saylovi to‘g‘risida\"gi Qonun",
      "\"O‘zbekiston Respublikasi Prezidenti faoliyatining asosiy kafolatlari to‘g‘risida\"gi Qonun",
      "\"Davlat boshqaruvi to‘g‘risida\"gi Qonun"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Prezident maktablari\" tizimi birinchi bo‘lib qayerda va qachon yo‘lga qo‘yilgan? ",
    "options": [
      "Samarqand shahrida (2018-yil)",
      "Toshkent shahrida (2020-yil)",
      "Toshkent shahrida (2019-yil)",
      "Buxoro shahrida (2019-yil)"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Oila va xotin-qizlar qo‘mitasi\" qachon tashkil etilgan? ",
    "options": [
      "2020-yil mart",
      "2021-yil mart",
      "2022-yil mart",
      "2023-yil mart"
    ],
    "correct": 2
  },
  {
    "q": "Energetika salohiyatini oshirish maqsadida \"To‘palang GES\"ning quvvatini oshirish loyihasi qaysi yillarda amalga oshirildi? ",
    "options": [
      "2019-2020 yillar",
      "2020-2021 yillar",
      "2022-2023 yillar",
      "2021-2022 yillar"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasiga muvofiq, Mudofaa vaziri kim tomonidan tayinlanadi? [cite: 100]",
    "options": [
      "Bosh vazir tomonidan",
      "Senat tomonidan",
      "Prezident tomonidan",
      "Qonunchilik palatasi tomonidan"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Xavfsiz turizm\" tizimi dastlab qaysi tarixiy shaharlar majmuasida joriy etilgan? [cite: 101]",
    "options": [
      "Faqat Toshkent va Samarqandda",
      "Buxoro, Samarqand, Xiva va Shahrisabzda",
      "Andijon, Namangan va Farg‘onada",
      "Buxoro, Navoiy va Termizda"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Terrorizmga qarshi kurash to‘g‘risida\"gi Qonuni qabul qilingan aniq sanani belgilang. [cite: 102]",
    "options": [
      "1999-yil 15-dekabr",
      "2001-yil 15-dekabr",
      "2000-yil 15-dekabr",
      "2000-yil 1-sentabr"
    ],
    "correct": 2

   },
    ]),
  },

  
  
  
  
  
  
    //////////////////////////////////////////////////////////////////////////////
           topic8: {
    title: "Tarix 8-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "O‘zbekiston Respublikasining \"Chet el investitsiyalari to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1996-yil 30-aprel",
      "1998-yil 30-aprel",
      "1997-yil 30-aprel",
      "1999-yil 30-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2020-yil 2-martdagi Farmoni bilan qaysi davlat dasturi tasdiqlangan?",
    "options": [
      "“Faol investitsiyalar va ijtimoiy rivojlanish yili” dasturi",
      "“Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili” dasturi",
      "“Ilm, ma’rifat va raqamli iqtisodiyotni rivojlantirish yili” dasturi",
      "“Inson qadri va faol mahalla yili” dasturi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Yoshlar – kelajagimiz\" jamg‘armasi qachon tashkil etilgan?",
    "options": [
      "2017-yil",
      "2018-yil",
      "2019-yil",
      "2020-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Turizm to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2018-yil 18-iyul",
      "2019-yil 18-iyul",
      "2020-yil 18-iyul",
      "2019-yil 1-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "Toshkent shahridagi \"Olimpiya shon-shuhrati muzeyi\" qachon ochilgan?",
    "options": [
      "1991-yil 1-sentabr",
      "1996-yil 31-avgust",
      "1996-yil 1-sentabr",
      "1997-yil 1-sentabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qishloq xo‘jaligi kooperativi (shirkat xo‘jaligi) to‘g‘risida\"gi Qonuni qaysi yilda qabul qilingan?",
    "options": [
      "1996-yil",
      "1997-yil",
      "1998-yil",
      "1999-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Sog‘lom bola yili\" deb qaysi yil e’lon qilingan?",
    "options": [
      "2012-yil",
      "2013-yil",
      "2014-yil",
      "2015-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Aholini ish bilan ta’minlash to‘g‘risida\"gi Qonuni yangi tahriri qabul qilingan sanani ko‘rsating.",
    "options": [
      "2020-yil 20-oktabr",
      "2019-yil 20-oktabr",
      "2021-yil 20-oktabr",
      "2020-yil 1-sentabr"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Buxoro neftni qayta ishlash zavodi\" qaysi yilda ishga tushgan?",
    "options": [
      "1995-yil",
      "1996-yil",
      "1997-yil",
      "1998-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining vakolat muddati tugaganda, yangi saylovlar qachon o‘tkaziladi?",
    "options": [
      "Dekabr oyi uchinchi o‘n kunligining birinchi yakshanbasida",
      "Oktabr oyi uchinchi o‘n kunligining birinchi yakshanbasida",
      "Oktabr oyi birinchi yakshanbasida",
      "Noyabr oyi uchinchi o‘n kunligining birinchi yakshanbasida"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Bilimlar kuni\" munosabati bilan \"Prezident sovg‘asi\" kimlarga beriladi?",
    "options": [
      "Barcha maktab o‘quvchilariga",
      "Kam ta'minlangan oila farzandlariga",
      "1-sinf o‘quvchilariga",
      "Bitiruvchi sinf o‘quvchilariga"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Siyosiy partiyalarni moliyalashtirish to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2002-yil",
      "2003-yil",
      "2004-yil",
      "2005-yil"
    ],
    "correct": 2
  },
  {
    "q": "Toshkentda qurilgan \"G‘alaba bog‘i\" yodgorlik majmuasi qachon ochilgan?",
    "options": [
      "2019-yil 9-may",
      "2020-yil 9-may",
      "2021-yil 9-may",
      "2020-yil 1-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Elektron hukumat to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2014-yil 9-dekabr",
      "2015-yil 8-dekabr",
      "2015-yil 9-dekabr",
      "2016-yil 9-dekabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Inson huquqlari kuni\" qachon nishonlanadi?",
    "options": [
      "8-dekabr",
      "10-dekabr",
      "1-dekabr",
      "21-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ta’lim to‘g‘risida\"gi Qonuni yangi tahriri qaysi sanada qabul qilingan?",
    "options": [
      "2020-yil 2-mart",
      "2020-yil 23-sentabr",
      "2021-yil 23-sentabr",
      "2019-yil 23-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Qo‘ng‘irot soda zavodi\" qachon ishga tushgan?",
    "options": [
      "2004-yil",
      "2005-yil",
      "2006-yil",
      "2007-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Vazirlar Mahkamasining tarkibiga kimlar kiradi?",
    "options": [
      "Faqat Bosh vazir va vazirlar",
      "Bosh vazir, uning o‘rinbosarlari va vazirlar",
      "Prezident, Bosh vazir va vazirlar",
      "Bosh vazir va barcha davlat qo‘mitalari raislari"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Yoshlar ittifoqi\" kuni qachon nishonlanadi?",
    "options": [
      "30-iyun",
      "30-avgust",
      "1-iyun",
      "14-yanvar"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining \"Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida\"gi Qonuni qaysi yilda qabul qilingan?",
    "options": [
      "2000-yil",
      "2001-yil",
      "2002-yil",
      "2003-yil"
    ],
    "correct": 1
  },
  {
    "q": "Toshkentda qurilgan \"Simpoziumlar saroyi\" qaysi yilda ochilgan?",
    "options": [
      "2010-yil",
      "2011-yil",
      "2012-yil",
      "2009-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Normativ-huquqiy hujjatlar to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2021-yil 20-aprel",
      "2020-yil 20-aprel",
      "2022-yil 20-aprel",
      "2021-yil 1-may"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda \"Barkamol avlod\" bolalar markazlari qaysi vazirlik tasarrufida faoliyat yuritadi?",
    "options": [
      "Madaniyat vazirligi",
      "Maktabgacha va maktab ta’limi vazirligi",
      "Oliy ta'lim vazirligi",
      "Yoshlar siyosati vazirligi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2018-yil 21-sentabrdagi Farmoni bilan qaysi hujjat tasdiqlangan?",
    "options": [
      "Harakatlar strategiyasi",
      "Taraqqiyot strategiyasi",
      "2019-2021-yillarda O‘zbekiston Respublikasini innovatsion rivojlantirish strategiyasi",
      "Raqamli O‘zbekiston - 2030 strategiyasi"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Xodjayli shisha zavodi\" taxminan qachon ishga tushgan?",
    "options": [
      "1990-yillarning oxirida",
      "2000-yillarning boshlarida",
      "2010-yilda",
      "1991-yilda"
    ],
    "correct": 1
  },
////////////
 
  {
    "q": "O‘zbekiston Respublikasining \"Gidrometeorologiya faoliyati to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2020-yil 17-oktabr",
      "2020-yil 17-noyabr",
      "2021-yil 17-noyabr",
      "2019-yil 17-noyabr"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Dehqonobod kaliyli o‘g‘itlar zavodi\" qaysi yilda ishga tushgan?",
    "options": [
      "2008-yil",
      "2009-yil",
      "2010-yil",
      "2011-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2022-yil 28-janvardagi Farmoni bilan qaysi hujjat tasdiqlangan?",
    "options": [
      "Harakatlar strategiyasi",
      "Raqamli O‘zbekiston – 2030 strategiyasi",
      "2022-2026-yillarga mo‘ljallangan Yangi O‘zbekistonning taraqqiyot strategiyasi",
      "Innovatsion rivojlanish strategiyasi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Inson qadri va faol mahalla yili\" doirasida qaysi yangi tizim joriy etildi?",
    "options": [
      "\"Mahalla raisi\" tizimi",
      "\"Mahalla yettiligi\" tizimi",
      "\"On-layn mahalla\" tizimi",
      "\"Obod mahalla\" tizimi"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Ma’rifat markazi\" tarkibiga nimalar kiradi?",
    "options": [
      "Islom sivilizatsiyasi markazi va kutubxona",
      "Simpoziumlar saroyi va Milliy kutubxona",
      "G‘alaba bog‘i va muzey",
      "Humo Arena va sport majmuasi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Raqobat to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilindi?",
    "options": [
      "2022-yil 3-iyul",
      "2023-yil 3-iyun",
      "2023-yil 3-iyul",
      "2024-yil 3-iyul"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Xayraton-Mozori Sharif\" temir yo‘li qachon bitkazilgan?",
    "options": [
      "2009-yil noyabr",
      "2010-yil noyabr",
      "2011-yil noyabr",
      "2010-yil dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qimmatli qog‘ozlar bozori to‘g‘risida\"gi Qonuni yangi tahriri qaysi yilda qabul qilingan?",
    "options": [
      "2008-yil",
      "2012-yil",
      "2015-yil",
      "2018-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Gidrometeorologiya xizmati agentligi\" hozirda qaysi vazirlik tarkibiga kiradi?",
    "options": [
      "Favqulodda vaziyatlar vazirligi",
      "Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi",
      "Qishloq xo‘jaligi vazirligi",
      "Suv xo‘jaligi vazirligi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Kibexavfsizlik to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2021-yil 15-aprel",
      "2022-yil 15-aprel",
      "2022-yil 15-may",
      "2023-yil 15-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Temir daftar\", \"Ayollar daftari\" va \"Yoshlar daftari\" tizimi qaysi yildan joriy etilgan?",
    "options": [
      "2019-yildan",
      "2020-yildan",
      "2021-yildan",
      "2022-yildan"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat fuqarolik xizmati to‘g‘risida\"gi Qonuni qachon qabul qilindi?",
    "options": [
      "2021-yil 8-avgust",
      "2022-yil 8-avgust",
      "2022-yil 1-sentabr",
      "2023-yil 8-avgust"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Islom sivilizatsiyasi markazi\" qaysi yilda tashkil etilgan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Konstitutsiyaviy sudi\" raisi qanday tartibda saylanadi?",
    "options": [
      "Prezident tomonidan tayinlanadi",
      "Oliy Majlis Qonunchilik palatasi tomonidan saylanadi",
      "Prezident taqdimiga binoan Senat tomonidan saylanadi",
      "Sudyalar oliy kengashi tomonidan saylanadi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ma’muriy sud ishlarini yuritish to‘g‘risida\"gi kodeksi qachon qabul qilingan?",
    "options": [
      "2017-yil 25-yanvar",
      "2018-yil 25-yanvar",
      "2018-yil 25-fevral",
      "2019-yil 25-yanvar"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Raqamli O‘zbekiston – 2030\" strategiyasi qachon tasdiqlangan?",
    "options": [
      "2020-yil 2-mart",
      "2020-yil 5-oktabr",
      "2021-yil 5-oktabr",
      "2020-yil 1-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Xususiylashtirish to‘g‘risida\"gi yangi Qonuni qachon qabul qilindi?",
    "options": [
      "2023-yil dekabr",
      "2024-yil yanvar",
      "2024-yil fevral",
      "2023-yil noyabr"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Yangi O‘zbekiston\" bog‘i qaysi sanada ochilgan?",
    "options": [
      "2020-yil 31-avgust",
      "2021-yil 31-avgust",
      "2021-yil 1-sentabr",
      "2022-yil 31-avgust"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Yashil makon\" umummilliy loyihasi qachondan boshlangan?",
    "options": [
      "2020-yil noyabrdan",
      "2021-yil oktabrdan",
      "2021-yil noyabrdan",
      "2022-yil martdan"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Soliq kodeksi\" yangi tahriri qachondan kuchga kirdi?",
    "options": [
      "2019-yil 1-dekabrdan",
      "2020-yil 1-yanvardan",
      "2020-yil 1-martdan",
      "2021-yil 1-yanvardan"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Gender tenglikni ta’minlash komissiyasi\" qaysi yilda tashkil etilgan?",
    "options": [
      "2018-yil",
      "2019-yil",
      "2020-yil",
      "2021-yil"
    ],
    "correct": 1
  },
  {
    "q": "Toshkentda \"Xalqlar do‘stligi\" saroyi nomi qachon o‘ziga qaytarilgan?",
    "options": [
      "2017-yil may",
      "2018-yil may",
      "2019-yil may",
      "2018-yil avgust"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Sanoat xavfsizligi\" davlat qo‘mitasi qachon tashkil etilgan?",
    "options": [
      "2017-yil",
      "2018-yil",
      "2019-yil",
      "2020-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Senati\"ning a’zolari (yangi tahrirda) necha kishidan iborat?",
    "options": [
      "100 nafar",
      "85 nafar",
      "65 nafar",
      "75 nafar"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"On-layn mahalla\" platformasi qaysi yilda ishga tushirildi?",
    "options": [
      "2020-yil",
      "2021-yil",
      "2022-yil",
      "2023-yil"
    ],
    "correct": 2
  

 
   },
    ]),
  },

  
  
    //////////////////////////////////////////////////////////////////////////////
           topic9: {
    title: "Tarix 9-Bo'lim",
    questions: randomizeQuestions([

 
  {
    "q": "O‘zbekiston Respublikasining \"Chet el investitsiyalari to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1996-yil 30-aprel",
      "1997-yil 30-aprel",
      "1998-yil 30-aprel",
      "1999-yil 30-aprel"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2020-yil 2-martdagi Farmoni bilan qaysi davlat dasturi tasdiqlangan?",
    "options": [
      "“Faol investitsiyalar va ijtimoiy rivojlanish yili”",
      "“Ilm, ma’rifat va raqamli iqtisodiyotni rivojlantirish yili”",
      "“Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili”",
      "“Inson qadri va faol mahalla yili”"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Yoshlar – kelajagimiz\" jamg‘armasi qachon tashkil etilgan?",
    "options": [
      "2017-yil",
      "2018-yil",
      "2019-yil",
      "2020-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Turizm to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2018-yil 18-iyul",
      "2019-yil 18-iyul",
      "2020-yil 18-iyul",
      "2021-yil 18-iyul"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan Toshkent shahridagi \"Olimpiya shon-shuhrati muzeyi\" qachon ochilgan?",
    "options": [
      "1995-yil 1-sentabr",
      "1996-yil 1-sentabr",
      "1997-yil 1-sentabr",
      "1998-yil 1-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Aholini ish bilan ta’minlash to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2019-yil 20-oktabr",
      "2020-yil 20-oktabr",
      "2021-yil 20-oktabr",
      "2022-yil 20-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining vakolat muddati tugaganda, yangi saylovlar qaysi vaqtda o‘tkaziladi?",
    "options": [
      "Oktabr oyi birinchi yakshanbasida",
      "Oktabr oyi ikkinchi yakshanbasida",
      "Oktabr oyi uchinchi o‘n kunligining birinchi yakshanbasida",
      "Dekabr oyi uchinchi o‘n kunligining birinchi yakshanbasida"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Elektron hukumat to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2014-yil 9-dekabr",
      "2015-yil 9-dekabr",
      "2016-yil 9-dekabr",
      "2017-yil 9-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Qo‘ng‘irot soda zavodi\" qachon ishga tushgan?",
    "options": [
      "2004-yil",
      "2005-yil",
      "2006-yil",
      "2007-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Normativ-huquqiy hujjatlar to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2020-yil 20-aprel",
      "2021-yil 20-aprel",
      "2022-yil 20-aprel",
      "2023-yil 20-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Barkamol avlod\" bolalar markazlari qaysi vazirlik tasarrufida faoliyat yuritadi?",
    "options": [
      "Madaniyat vazirligi",
      "Yoshlar siyosati va sport vazirligi",
      "Maktabgacha va maktab ta’limi vazirligi",
      "Oliy ta’lim, fan va innovatsiyalar vazirligi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Valyutani tartibga solish to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2018-yil 22-oktabr",
      "2019-yil 22-oktabr",
      "2020-yil 22-oktabr",
      "2021-yil 22-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Arxiv ishi to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2008-yil 15-iyun",
      "2009-yil 15-iyun",
      "2010-yil 15-iyun",
      "2011-yil 15-iyun"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Kibexavfsizlik to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2021-yil 15-aprel",
      "2022-yil 15-aprel",
      "2023-yil 15-aprel",
      "2024-yil 15-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat fuqarolik xizmati to‘g‘risida\"gi Qonuni qachon qabul qilindi?",
    "options": [
      "2021-yil 8-avgust",
      "2022-yil 8-avgust",
      "2023-yil 8-avgust",
      "2024-yil 8-avgust"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Konstitutsiyaviy sudi\" raisi qanday tartibda saylanadi?",
    "options": [
      "Prezident tomonidan tayinlanadi",
      "Oliy Majlis Qonunchilik palatasi tomonidan saylanadi",
      "Prezident taqdimiga binoan Senat tomonidan saylanadi",
      "Vazirlar Mahkamasi tomonidan tasdiqlanadi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Raqamli O‘zbekiston – 2030\" strategiyasi qachon tasdiqlangan?",
    "options": [
      "2019-yil 5-oktabr",
      "2020-yil 5-oktabr",
      "2021-yil 5-oktabr",
      "2022-yil 5-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Xususiylashtirish to‘g‘risida\"gi yangi Qonuni qachon qabul qilindi?",
    "options": [
      "2023-yil fevral",
      "2024-yil fevral",
      "2022-yil fevral",
      "2021-yil fevral"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Soliq kodeksi\" yangi tahriri qachondan kuchga kirgan?",
    "options": [
      "2019-yil 1-yanvardan",
      "2020-yil 1-yanvardan",
      "2021-yil 1-janvardan",
      "2022-yil 1-yanvardan"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat xaridlari to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2020-yil 22-aprel",
      "2021-yil 22-aprel",
      "2022-yil 22-aprel",
      "2023-yil 22-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat sirlarini saqlash to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1992-yil 7-may",
      "1993-yil 7-may",
      "1994-yil 7-may",
      "1995-yil 7-may"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Inson huquqlari bo‘yicha Milliy markaz\" qachon tashkil etilgan?",
    "options": [
      "1995-yil 31-oktabr",
      "1996-yil 31-oktabr",
      "1997-yil 31-oktabr",
      "1998-yil 31-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Siyosiy partiyalar to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1995-yil 26-dekabr",
      "1996-yil 26-dekabr",
      "1997-yil 26-dekabr",
      "1998-yil 26-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Volontyorlik faoliyati to‘g‘risida\"gi Qonuni qachon qabul qilindi?",
    "options": [
      "2018-yil 2-dekabr",
      "2019-yil 2-dekabr",
      "2020-yil 2-dekabr",
      "2021-yil 2-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat qarzi to‘g‘risida\"gi Qonuni qachon qabul qilindi?",
    "options": [
      "2021-yil 16-avgust",
      "2022-yil 16-avgust",
      "2023-yil 16-avgust",
      "2024-yil 16-avgust"
    ],
    "correct": 1
  },
/////////////////
   
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2018-yil 21-sentabrdagi Farmoni bilan qaysi strategiya tasdiqlangan?",
    "options": [
      "Harakatlar strategiyasi",
      "Taraqqiyot strategiyasi",
      "2019-2021-yillarda O‘zbekiston Respublikasini innovatsion rivojlantirish strategiyasi",
      "Raqamli O‘zbekiston – 2030 strategiyasi"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Xodjayli shisha zavodi\" qachon ishga tushgan?",
    "options": [
      "1990-yillarning oxirida",
      "2000-yillarning boshlarida",
      "2010-yilda",
      "1991-yilda"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining qaysi moddasida davlat tili belgilangan?",
    "options": [
      "2-modda",
      "3-modda",
      "4-modda",
      "5-modda"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Navro‘z\" umumxalq bayrami sifatida rasman qachon tiklangan?",
    "options": [
      "1989-yil 1-sentabr",
      "1990-yil 3-may",
      "1991-yil 31-avgust",
      "1992-yil 8-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Valyutani tartibga solish to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2018-yil 22-oktabr",
      "2019-yil 22-oktabr",
      "2020-yil 22-oktabr",
      "2021-yil 22-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "Alisher Navoiy nomidagi O‘zbekiston Milliy kutubxonasi qaysi yilda tashkil etilgan?",
    "options": [
      "2000-yil",
      "2001-yil",
      "2002-yil",
      "2003-yil"
    ],
    "correct": 2
  },
  {
    "q": "Oliy Majlis Qonunchilik palatasining raisi (Spikeri) qanday tartibda saylanadi?",
    "options": [
      "Prezident tomonidan tayinlanadi",
      "Senat tomonidan tasdiqlanadi",
      "Deputatlar orasidan yashirin ovoz berish yo‘li bilan",
      "Xalq tomonidan to‘g‘ridan-to‘g‘ri saylanadi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Xalq bilan muloqot va inson manfaatlari yili\" qaysi yil edi?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Arxiv ishi to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2008-yil",
      "2009-yil",
      "2010-yil 15-iyun",
      "2011-yil"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Toshkent-O‘sh\" avtomobil yo‘lining uzunligi taxminan qancha?",
    "options": [
      "200 km dan ortiq",
      "300 km dan ortiq",
      "400 km dan ortiq",
      "500 km dan ortiq"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Markaziy bankining asosiy maqsadi nima?",
    "options": [
      "Tijorat banklarini nazorat qilish",
      "Milliy valyutaning barqarorligini ta’minlash",
      "Davlat byudjetini shakllantirish",
      "Investitsiyalarni jalb qilish"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2015-yil",
      "2016-yil",
      "2017-yil",
      "2018-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasida iqtisodiy asoslar nechanchi bobda keltirilgan?",
    "options": [
      "10-bob",
      "11-bob",
      "12-bob",
      "13-bob"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Gidrometeorologiya faoliyati to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2019-yil 17-noyabr",
      "2020-yil 17-noyabr",
      "2021-yil 17-noyabr",
      "2022-yil 17-noyabr"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Dehqonobod kaliyli o‘g‘itlar zavodi\" qachon ishga tushgan?",
    "options": [
      "2008-yil",
      "2009-yil",
      "2010-yil",
      "2011-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2022-yil 28-janvardagi Farmoni bilan qaysi hujjat tasdiqlangan?",
    "options": [
      "Harakatlar strategiyasi",
      "Yangi O‘zbekistonning taraqqiyot strategiyasi",
      "Raqamli O‘zbekiston strategiyasi",
      "Xavfsizlik konsepsiyasi"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Inson qadri va faol mahalla yili\" doirasida qaysi tizim joriy etildi?",
    "options": [
      "\"Mahalla raisi\" tizimi",
      "\"Mahalla yoshlar yetakchisi\" tizimi",
      "\"Mahalla yettiligi\" tizimi",
      "\"Oqsoqollar\" kengashi"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Ma’rifat markazi\" tarkibiga nimalar kiradi?",
    "options": [
      "Islom sivilizatsiyasi markazi va muzey",
      "Simpoziumlar saroyi va Milliy kutubxona",
      "Humo Arena va bog‘",
      "Prezident kutubxonasi va saroy"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Bir million dasturchi\" loyihasi qachondan boshlangan?",
    "options": [
      "2018-yil noyabr",
      "2019-yil noyabr",
      "2020-yil noyabr",
      "2021-yil noyabr"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Xayraton-Mozori Sharif\" temir yo‘li qachon bitkazilgan?",
    "options": [
      "2009-yil noyabr",
      "2010-yil noyabr",
      "2011-yil noyabr",
      "2012-yil noyabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Raqobat to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilindi?",
    "options": [
      "2021-yil 3-iyul",
      "2022-yil 3-iyul",
      "2023-yil 3-iyul",
      "2024-yil 3-iyul"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Gidrometeorologiya xizmati agentligi\" qaysi vazirlik tarkibiga o‘tkazildi?",
    "options": [
      "Favqulodda vaziyatlar vazirligi",
      "Qishloq xo‘jaligi vazirligi",
      "Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi",
      "Suv xo‘jaligi vazirligi"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Taxiatosh IES\"ning yangi bug‘-gaz qurilmalari qachon ishga tushgan?",
    "options": [
      "2018-yil",
      "2019-yil",
      "2020-yil",
      "2021-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Temir daftar\", \"Ayollar daftari\" va \"Yoshlar daftari\" tizimi qachondan joriy etilgan?",
    "options": [
      "2018-yildan",
      "2019-yildan",
      "2020-yildan",
      "2021-yildan"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Islom sivilizatsiyasi markazi\" qachon tashkil etilgan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1

 
   },
    ]),
  },


    
    //////////////////////////////////////////////////////////////////////////////
           topic10: {
    title: "Tarix 10-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2020-yil 2-martdagi Farmoni bilan qaysi davlat dasturi tasdiqlangan?",
    "options": [
      "Faol tadbirkorlik, innovatsion g‘oyalar va texnologiyalarni qo‘llab-quvvatlash yili",
      "Ilm, ma’rifat va raqamli iqtisodiyotni rivojlantirish yili",
      "Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili",
      "Inson qadrini ulug‘lash va faol mahalla yili"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Chet el investitsiyalari to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1991-yil 31-avgust",
      "1995-yil 14-aprel",
      "1998-yil 30-aprel",
      "2001-yil 22-dekabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Yoshlar – kelajagimiz\" jamg‘armasi qaysi yili tashkil etilgan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Turizm to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2017-yil 18-iyul",
      "2018-yil 18-iyul",
      "2019-yil 18-iyul",
      "2020-yil 18-iyul"
    ],
    "correct": 2
  },
  {
    "q": "Toshkent shahridagi \"Olimpiya shon-shuhrati muzeyi\" qachon ochilgan?",
    "options": [
      "1991-yil 1-sentabr",
      "1996-yil 1-sentabr",
      "2000-yil 1-sentabr",
      "2005-yil 1-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qishloq xo‘jaligi kooperativi (shirkat xo‘jaligi) to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1996-yil",
      "1997-yil",
      "1998-yil",
      "1999-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Sog‘lom bola yili\" deb qaysi yil e’lon qilingan?",
    "options": [
      "2012-yil",
      "2013-yil",
      "2014-yil",
      "2015-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Aholini ish bilan ta’minlash to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2018-yil 20-oktabr",
      "2019-yil 20-oktabr",
      "2020-yil 20-oktabr",
      "2021-yil 20-oktabr"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Buxoro neftni qayta ishlash zavodi\" qachon ishga tushgan?",
    "options": [
      "1995-yil",
      "1996-yil",
      "1997-yil",
      "1998-yil"
    ],
    "correct": 2
  },
  {
    "q": "Prezident vakolat muddati tugaganda, yangi saylovlar qachon o‘tkaziladi?",
    "options": [
      "Oktabr oyi birinchi o‘n kunligida",
      "Oktabr oyi ikkinchi o‘n kunligida",
      "Oktabr oyi uchinchi o‘n kunligining birinchi yakshanbasida",
      "Dekabr oyi birinchi yakshanbasida"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Prezident sovg‘asi\" qaysi sinf o‘quvchilariga beriladi?",
    "options": [
      "1-sinf",
      "4-sinf",
      "9-sinf",
      "11-sinf"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining \"Siyosiy partiyalarni moliyalashtirish to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2002-yil",
      "2003-yil",
      "2004-yil",
      "2005-yil"
    ],
    "correct": 2
  },
  {
    "q": "Toshkentdagi \"G‘alaba bog‘i\" yodgorlik majmuasi qachon ochilgan?",
    "options": [
      "2018-yil 9-may",
      "2019-yil 9-may",
      "2020-yil 9-may",
      "2021-yil 9-may"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Elektron hukumat to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2014-yil 9-dekabr",
      "2015-yil 9-dekabr",
      "2016-yil 9-dekabr",
      "2017-yil 9-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Inson huquqlari kuni\" qachon nishonlanadi?",
    "options": [
      "1-dekabr",
      "8-dekabr",
      "10-dekabr",
      "21-oktabr"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ta’lim to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2019-yil 23-sentabr",
      "2020-yil 23-sentabr",
      "2021-yil 23-sentabr",
      "2022-yil 23-sentabr"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Qo‘ng‘irot soda zavodi\" qaysi yili ishga tushgan?",
    "options": [
      "2004-yil",
      "2005-yil",
      "2006-yil",
      "2007-yil"
    ],
    "correct": 2
  },
  {
    "q": "Vazirlar Mahkamasi tarkibiga kimlar kiradi?",
    "options": [
      "Faqat Bosh vazir va vazirlar",
      "Bosh vazir, uning o‘rinbosarlari va vazirlar",
      "Prezident va vazirlar",
      "Faqat vazirlar va qo‘mita raislari"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Yoshlar ittifoqi\" kuni qachon nishonlanadi?",
    "options": [
      "1-iyun",
      "30-iyun",
      "1-sentabr",
      "8-dekabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2000-yil",
      "2001-yil",
      "2002-yil",
      "2003-yil"
    ],
    "correct": 1
  },
  {
    "q": "Toshkentda qurilgan \"Simpoziumlar saroyi\" qachon ochilgan?",
    "options": [
      "2010-yil",
      "2011-yil",
      "2012-yil",
      "2013-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Normativ-huquqiy hujjatlar to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2020-yil 20-aprel",
      "2021-yil 20-aprel",
      "2022-yil 20-aprel",
      "2023-yil 20-aprel"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Barkamol avlod\" bolalar markazlari qaysi vazirlik tasarrufida?",
    "options": [
      "Adliya vazirligi",
      "Madaniyat vazirligi",
      "Maktabgacha va maktab ta’limi vazirligi",
      "Yoshlar ishlari agentligi"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasini innovatsion rivojlantirish strategiyasi qaysi Farmon bilan tasdiqlangan?",
    "options": [
      "2017-yil 7-fevraldagi Farmon",
      "2018-yil 21-sentabrdagi Farmon",
      "2020-yil 2-martdagi Farmon",
      "2022-yil 28-janvardagi Farmon"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Xodjayli shisha zavodi\" qachon ishga tushgan?",
    "options": [
      "1990-yillarning o‘rtalarida",
      "2000-yillarning boshlarida",
      "2010-yilda",
      "2015-yilda"
    ],
    "correct": 1
  
  },
/////////
 
  {
    "q": "O‘zbekiston Respublikasining \"Xalqaro shartnomalari to‘g‘risida\"gi yangi tahrirdagi Qonuni qachon qabul qilingan?",
    "options": [
      "2018-yil 6-fevral",
      "2019-yil 6-fevral",
      "2020-yil 6-fevral",
      "2021-yil 6-fevral"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Hunarmandchilikni rivojlantirish\" jamg‘armasi qachon tashkil etilgan?",
    "options": [
      "2016-yil",
      "2017-yil",
      "2018-yil",
      "2019-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risida\"gi Qonuni qachon qabul qilindi?",
    "options": [
      "2019-yil 15-oktabr",
      "2020-yil 15-oktabr",
      "2021-yil 15-oktabr",
      "2022-yil 15-oktabr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Sog‘lom avlod uchun\" ordeni qachon ta’sis etilgan?",
    "options": [
      "1992-yil 4-mart",
      "1993-yil 4-mart",
      "1994-yil 4-mart",
      "1995-yil 4-mart"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Fuqarolarning davlat pensiya ta’minoti to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "1991-yil 3-sentabr",
      "1992-yil 3-sentabr",
      "1993-yil 3-sentabr",
      "1994-yil 3-sentabr"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Vatanparvarlar bog‘i\" qaysi tumanida joylashgan?",
    "options": [
      "Mirzo Ulug‘bek tumani",
      "Yunusobod tumani",
      "Yashnobod tumani",
      "Chilonzor tumani"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining 2021-yil 26-martdagi Farmoni nima haqida edi?",
    "options": [
      "Ta’lim tizimini isloh qilish",
      "Ma’naviy-ma’rifiy ishlar tizimini tubdan takomillashtirish",
      "Sog‘liqni saqlash tizimini rivojlantirish",
      "Korrupsiyaga qarshi kurashish"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Xavfsiz shahar\" loyihasi doirasida yagona navbatchi-dispetcherlik xizmati raqami necha?",
    "options": [
      "101",
      "102",
      "103",
      "112"
    ],
    "correct": 3
  },
  {
    "q": "O‘zbekiston Respublikasining \"Ma’rifatparvar jadidlar\" merosini o‘rganish bo‘yicha qarori qaysi yili qabul qilingan?",
    "options": [
      "2019-yil",
      "2020-yil",
      "2021-yil",
      "2022-yil"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida barpo etilgan \"Toshkent teleminorasi\"ning balandligi qancha?",
    "options": [
      "350 metr",
      "375 metr",
      "400 metr",
      "425 metr"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi \"Milliy gvardiyasi\" qaysi yili tashkil etilgan?",
    "options": [
      "1991-yil",
      "1992-yil",
      "1993-yil",
      "1994-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Aqlli shahar\" (Smart City) texnologiyalari birinchi bo‘lib qayerlarda joriy etilmoqda?",
    "options": [
      "Samarqand va Buxoroda",
      "Toshkent va Nurafshon shaharlarida",
      "Namangan va Andijonda",
      "Xiva va Termizda"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qonunosti hujjatlari\"ga nimalar kirdi?",
    "options": [
      "Faqat Konstitutsiya va Kodekslar",
      "Faqat Prezident farmonlari",
      "Prezident farmon va qarorlari, Vazirlar Mahkamasi qarorlari, vazirlik buyruqlari",
      "Faqat tuman hokimi qarorlari"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Kamchik\" avtomobil tunnelining birinchi navbati qachon topshirilgan?",
    "options": [
      "1998-yil",
      "1999-yil",
      "2000-yil",
      "2001-yil"
    ],
    "correct": 2
  },
  {
    "q": "Oliy Majlis Senatining asosiy vakolatlaridan biri nima?",
    "options": [
      "Qonun loyihalarini birinchi bo‘lib ishlab chiqish",
      "Qonunlarni ma’qullash va muhim tayinlovlarni tasdiqlash",
      "Faqat byudjetni taqsimlash",
      "Sud ishlarini nazorat qilish"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda \"Inson huquqlari bo‘yicha umumjahon deklaratsiyasi\" o‘zbek tiliga qachon tarjima qilingan?",
    "options": [
      "1990-yil",
      "1991-yil",
      "1992-yil",
      "1993-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Geodeziya va kartografiya to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "2019-yil 2-iyul",
      "2020-yil 2-iyul",
      "2021-yil 2-iyul",
      "2022-yil 2-iyul"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida Toshkentda qurilgan \"Xalqaro vestminster universiteti\" qachon tashkil etilgan?",
    "options": [
      "2001-yil",
      "2002-yil",
      "2003-yil",
      "2004-yil"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Davlat tili to‘g‘risida\"gi Qonuni yangi tahriri (lotin yozuviga asoslangan) qachon qabul qilingan?",
    "options": [
      "1993-yil",
      "1994-yil",
      "1995-yil",
      "1996-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekistonda \"Faxriylar\"ni qo‘llab-quvvatlash maqsadida qaysi jamg‘arma faoliyat yuritadi?",
    "options": [
      "\"Yoshlar\" jamg‘armasi",
      "\"Nuroniy\" jamg‘armasi",
      "\"Mahalla\" jamg‘armasi",
      "\"Sahovat\" jamg‘armasi"
    ],
    "correct": 1
  },
  {
    "q": "Mustaqillik yillarida qurilgan \"Muborak gazni qayta ishlash zavodi\"ning quvvati qachon oshirildi?",
    "options": [
      "2015-2016 yillarda",
      "2017-2018 yillarda",
      "2019-2020 yillarda",
      "2021-2022 yillarda"
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining \"Atmosfera havosini muhofaza qilish to‘g‘risida\"gi Qonuni yangi tahriri qachon qabul qilingan?",
    "options": [
      "1996-yil",
      "1999-yil",
      "2017-yil",
      "2019-yil"
    ],
    "correct": 3
  },
  {
    "q": "O‘zbekistonda \"E-sud\" axborot tizimi to‘liq qachondan joriy etila boshlandi?",
    "options": [
      "2013-yildan",
      "2015-yildan",
      "2017-yildan",
      "2019-yildan"
    ],
    "correct": 2
  },
  {
    "q": "Mustaqillik yillarida Toshkentda barpo etilgan \"Bunyodkor\" stadioni qachon ochilgan?",
    "options": [
      "2010-yil",
      "2011-yil",
      "2012-yil",
      "2013-yil"
    ],
    "correct": 2
  },
  {
    "q": "O‘zbekiston Respublikasining \"Qurol to‘g‘risida\"gi Qonuni qachon qabul qilingan?",
    "options": [
      "2018-yil",
      "2019-yil 29-iyul",
      "2020-yil",
      "2021-yil"
    ],
    "correct": 1

   },
    ]),
  },

  
  
  
  /////////////////////////////////////////
  // ////////////////////////////////////////////////////  
   topic11: {
    title: "Tarix 11-Bo'lim",
    questions: randomizeQuestions([


 
 
   },
    ]),
  },


  
  
  
  
  
  



      
  // ========================================================================
};
