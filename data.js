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
    title: "Konstitutsiya 1-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Yangi tahrirdagi O‘zbekiston Respublikasi Konstitutsiyasining tuzilishi (bo‘lim, bob va moddalar soni) qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "6 bo'lim, 26 bob, 128 modda;",
      "6 bo'lim, 27 bob, 155 modda;",
      "5 bo'lim, 21 bob, 144 modda;",
      "7 bo'lim, 30 bob, 168 modda."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyalarning kelib chiqishi bo‘yicha dastlabki klassifikatsiya (tasniflash) muallifi kim?",
    "options": [
      "Sharl Lui Monteskyo;",
      "M. Dyuverje;",
      "J.J. Russo;",
      "Dj. Lokk."
    ],
    "correct": 1
  },
  {
    "q": "«Elektorat» tushunchasiga berilgan to‘g‘ri tarifni belgilang:",
    "options": [
      "Siyosiy partiyaning rahbar organi;",
      "Muayyan partiya yoki nomzodga ovoz beruvchi saylovchilar guruhi;",
      "Davlat boshqaruvida ishtirok etuvchi barcha fuqarolar;",
      "Parlamentda ko'pchilikni tashkil etuvchi deputatlar."
    ],
    "correct": 1
  },
  {
    "q": "«Fuqaro» atamasi ilk bora yuridik jihatdan qaysi hujjatda mustahkamlangan?",
    "options": [
      "AQSH Konstitutsiyasi (1787);",
      "Fransiyaning 'Inson va fuqaro huquqlari deklaratsiyasi' (1789);",
      "Angliyaning 'Huquqlar to'g'risidagi bill'i (1689);",
      "Inson huquqlari umumjahon deklaratsiyasi (1948)."
    ],
    "correct": 1
  },
  {
    "q": "Hokimiyat taqsimlanishi prinsipi g‘oyasini tizimlashtirgan va jamoatchilik tomonidan tan olingan olim kim?",
    "options": [
      "Aristotel;",
      "Sharl Lui Monteskyo;",
      "Tomas Gobbs;",
      "Immanuil Kant."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasida siyosiy partiyalarga to‘g‘ridan-to‘g‘ri ajratilgan moddalar qaysilar?",
    "options": [
      "56, 57-moddalar;",
      "59, 60-moddalar;",
      "62, 63-moddalar;",
      "10, 11-moddalar."
    ],
    "correct": 1
  },
  {
    "q": "Davlat shaklining «Segmentar» turiga berilgan to‘g‘ri tushunchani aniqlang:",
    "options": [
      "Hokimiyat yagona markazdan boshqariladigan davlat;",
      "Hokimiyat bir nechta teng huquqli markazlar o'rtasida taqsimlangan davlat;",
      "Monarxiya va respublika belgilarini o'zida birlashtirgan davlat;",
      "Faqat diniy qonunlar ustuvor bo'lgan davlat."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasining nechanchi moddasida huquq va erkinliklarni cheklash mezonlari belgilangan?",
    "options": [
      "1-modda;",
      "15-modda;",
      "29-modda;",
      "30-modda."
    ],
    "correct": 2
  },
  {
    "q": "Siyosiy partiyalarning tashkiliy tuzilishiga ko‘ra guruhi M. Dyuverje ta’limotida qanday ko‘rsatilgan?",
    "options": [
      "Kadrli va ommaviy partiyalar;",
      "Demokratik va diktatorlik partiyalar;",
      "Parlamentar va nodavlat partiyalar;",
      "Milliy va hududiy partiyalar."
    ],
    "correct": 0
  },
  {
    "q": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktning nechanchi moddasida inson huquqlarini cheklash asoslari belgilangan?",
    "options": [
      "2-modda;",
      "4-modda;",
      "10-modda;",
      "21-modda."
    ],
    "correct": 1
  },
  {
    "q": "Davlat shaklining «Monokratik» (yakka hokimiyatli) turining asosiy xususiyati nima?",
    "options": [
      "Hokimiyatning parlament nazoratida bo'lishi;",
      "Hokimiyatning bir shaxs yoki bir organ qo'lida cheksiz to'planishi;",
      "Ko'ppartiyaviylikning mavjudligi;",
      "Sud hokimiyatining mutlaq mustaqilligi."
    ],
    "correct": 1
  },
  {
    "q": "Davlatning ijtimoiy xarakteri deganda nima tushuniladi?",
    "options": [
      "Davlatning faqat boy tabaqa manfaatlarini himoya qilishi;",
      "Davlatning har bir inson uchun munosib turmush darajasi va ijtimoiy himoyani ta'minlashi;",
      "Davlatning barcha korxonalarga egalik qilishi;",
      "Davlatning xalqaro tashkilotlarga bo'ysunishi."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyalarning o‘zgartirish tartibi murakkabligiga ko‘ra turlari qaysi javobda to‘g‘ri ko‘rsatilgan?",
    "options": [
      "Yozma va og'zaki;",

"Yumshoq va qattiq (mustahkam);",
      "Doimiy va vaqtinchalik;",
      "Demokratik va avtoritar."
    ],
    "correct": 1
  },
  {
    "q": "Davlat shaklining «Polikratik» (ko‘p hokimiyatli) turi qanday tavsiflanadi?",
    "options": [
      "Barcha hokimiyat tarmoqlarining bitta rahbarga bo'ysunishi;",
      "Hokimiyatning turli tarmoqlar va institutlar o'rtasida bir-birini tiyib turish prinsipi asosida taqsimlanishi;",
      "Faqat bir partiyaning hukmronligi;",
      "Markaziy hukumatning viloyatlar ustidan mutlaq nazorati."
    ],
    "correct": 1
  },
  {
    "q": "Muxolif (oppozitsion) partiyalarning asosiy vazifasi nimadan iborat?",
    "options": [
      "Amaldagi hukumatni barcha qarorlarini so'zsiz qo'llab-quvvatlash;",
      "Hukumat siyosatiga muqobil dasturlar taklif qilish va uning faoliyatini nazorat qilish;",
      "Faqat saylovlar paytida faoliyat ko'rsatish;",
      "Xalqaro shartnomalarni imzolash."
    ],
    "correct": 1
  },
  {
    "q": "AQSH Konstitutsiyasi qachon qabul qilingan?",
    "options": [
      "1776-yil 4-iyul;",
      "1787-yil 17-sentabr;",
      "1791-yil 15-dekabr;",
      "1800-yil 1-yanvar."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyaga berilgan eng to‘g‘ri tarifni belgilang:",
    "options": [
      "Davlat tomonidan tuzilgan xayriya tashkiloti;",
      "Hokimiyatni qo'lga kiritish yoki unda ishtirok etishni maqsad qilgan maslakdoshlar ittifoqi;",
      "Faqat huquqshunoslardan iborat ijtimoiy guruh;",
      "Soliq to'lovchilarning ixtiyoriy birlashmasi."
    ],
    "correct": 1
  },
  {
    "q": "Barcha davlatlarning konstitutsiyaviy huquqi o‘rtasidagi asosiy farq nima bilan belgilanadi?",
    "options": [
      "Faqat qog'oz sifatining har xilligi bilan;",
      "Har bir davlatning milliy-tarixiy rivojlanishi va davlat boshqaruvi shakli bilan;",
      "Barcha davlatlarda konstitutsiyalar bir xil bo'ladi;",
      "Faqat xalqaro tashkilotlarning talabi bilan."
    ],
    "correct": 1
  },
  {
    "q": "Parlamentarizm tizimida hukumat kimning oldida mas’ul hisoblanadi?",
    "options": [
      "Faqat sud organlari oldida;",
      "Parlament oldida;",
      "Faqat armiya oldida;",
      "Xalqaro valyuta jamg'armasi oldida."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquq fanining predmeti nima?",
    "options": [
      "Faqat bitta davlatning qonunlarini o'rganish;",
      "Turli davlatlarning konstitutsiyaviy-huquqiy institutlarini qiyosiy tahlil qilish va umumiy qonuniyatlarni aniqlash;",
      "Faqat jinoyat qonunchiligini solishtirish;",
      "Davlatlararo diplomatik yozishmalar tarixi."
    ],
    "correct": 1
  },
  {
    "q": "Xorijiy mamlakatlar tajribasida konstitutsiyaning amal qilishi qanday o‘ziga xos jihat (aspekt)larga ega?",
    "options": [
      "Faqat ichki qonunchilik bilan cheklanganligi;",
      "To'g'ridan-to'g'ri amal qilishi, oliy yuridik kuchga egaligi va xalqaro huquq bilan mutanosibligi;",
      "Faqat sudlar tomonidan qo'llanilishi;",
      "Vaqti-vaqti bilan to'xtatib turilishi."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyalarning tarkibi va miqdori bo‘yicha M. Dyuverje talimotida qaysi guruhlar ko‘rsatilgan?",
    "options": [
      "Kadrli va ommaviy partiyalar;",
      "Diniy va dunyoviy partiyalar;",
      "Liberal va konservativ partiyalar;",
      "Hukmron va muxolif partiyalar."
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquqda «Oliy yuridik kuch» tushunchasi nimani anglatadi?",
    "options": [
      "Konstitutsiyaning faqat poytaxtda amal qilishini;",
      "Barcha qonunlar va boshqa normativ hujjatlar Konstitutsiyaga muvofiq bo'lishi shartligini;",
      "Konstitutsiyani faqat sudlar o'zgartira olishini;",
      "Konstitutsiyaning muddatsiz ekanligini."
    ],
    "correct": 1
  },
  {
    "q": "Hokimiyat taqsimlanishi prinsipining asosiy maqsadi nima?",
    "options": [
      "Davlat xarajatlarini kamaytirish;",
      "Hokimiyatning bir qo'lda to'planishiga yo'l qo'ymaslik va o'zaro tiyib turishni ta'minlash;",
      "Siyosiy partiyalar sonini ko'paytirish;",
      "Saylov jarayonini soddalashtirish."
    ],
    "correct": 1
  },
  {
    "q": "«Inson huquqlari umumjahon deklaratsiyasi» qachon va qaysi tashkilot tomonidan qabul qilingan?",
    "options": [
      "1945-yil, YeXHT;",
      "1948-yil 10-dekabr, BMT Bosh Assambleyasi;",
      "1950-yil, Yevropa Kengashi;",
      "1991-yil, MDH."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Unitar davlat» deb qanday davlatga aytiladi?",
    "options": [
      "Hududi mustaqil davlat tuzilmalaridan iborat bo'lgan davlatga;",
      "Davlat tarkibida suverenitetga ega bo'lmagan ma'muriy-hududiy birliklar mavjud bo'lgan yaxlit davlatga;",
      "Bir necha davlatning vaqtinchalik ittifoqiga;",
      "Faqat bitta siyosiy partiya mavjud bo'lgan davlatga."
    ],
    "correct": 1
  },
  {
    "q": "Davlat shaklining «Segmentar» turida hokimiyat qanday taqsimlanadi?",
    "options": [
      "Faqat markaziy hukumatga bo'ysunadi;",
      "Hokimiyat turli ijtimoiy qatlamlar yoki hududiy segmentlar o'rtasida muvozanatlashgan bo'ladi;",
      "Hokimiyat faqat harbiy kengash qo'lida bo'ladi;",
      "Hokimiyat diniy peshvolar tomonidan boshqariladi."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyalarning «kadrli» turi qanday xususiyatga ega?",
    "options": [
      "A'zolar soni juda ko'pligi va qat'iy a'zolik badallari bilan;",
      "Siyosiy elita va nufuzli shaxslarga tayanuvchi, saylovoldi faoliyatiga yo'naltirilganligi bilan;",
      "Faqat yoshlardan iborat ekanligi bilan;",
      "Davlat byudjetidan to'liq moliyalashtirilishi bilan."
    ],
    "correct": 1
  },
  {
    "q": "Yangi tahrirdagi O‘zbekiston Konstitutsiyasiga ko‘ra, O‘zbekiston «ijtimoiy davlat» ekanligi nechanchi moddada mustahkamlangan?",
    "options": [
      "1-modda;",
      "13-modda;",
      "19-modda;",
      "128-modda."
    ],
    "correct": 0
  },
  {
    "q": "«Respublika» boshqaruv shaklining asosiy belgisi nima?",
    "options": [
      "Hokimiyatning meros bo'lib o'tishi;",
      "Davlat boshlig'ining saylanishi va vakolat muddatining chegaralanganligi;",
      "Davlat boshlig'ining cheksiz vakolatlarga egaligi;",
      "Konstitutsiyaning mavjud emasligi."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlari bo‘yicha «Xalqaro bill» (huquqlar to'plami) tarkibiga qaysi hujjat kirmaydi?",
    "options": [
      "Inson huquqlari umumjahon deklaratsiyasi;",
      "Iqtisodiy, ijtimoiy va madaniy huquqlar to'g'risidagi pakt;",
      "Fuqaroviy va siyosiy huquqlar to'g'risidagi pakt;",
      "NATOning harbiy doktrinasi."
    ],
    "correct": 3
  },
  {

"q": "Konstitutsiyaviy huquqda «Federatsiya» tushunchasining mazmuni nima?",
    "options": [
      "Yagona markazdan boshqariladigan viloyatlar yig'indisi;",
      "Muayyan siyosiy mustaqillikka (suverenitet elementlariga) ega bo'lgan sub'ektlarning ittifoqdoshi bo'lgan murakkab davlat;",
      "Mustaqil davlatlarning iqtisodiy hamkorligi;",
      "Monarx tomonidan boshqariladigan hududlar."
    ],
    "correct": 1
  },
  {
    "q": "M. Dyuverje tasnifiga ko‘ra «Ommaviy partiyalar»ning asosiy belgisi nima?",
    "options": [
      "Faqat saylov paytida faollashishi;",
      "Keng xalq ommasini a'zolikka jalb qilish, qat'iy intizom va doimiy a'zolik badallari;",
      "Rahbarlarning merosiy tayinlanishi;",
      "Partiyada a'zolikning mavjud emasligi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining 60-moddasiga ko‘ra, siyosiy partiyalar qanday maqsadda tuziladi?",
    "options": [
      "Tadbirkorlik faoliyatini yuritish uchun;",
      "Turli tabaqa va guruhlarning siyosiy irodasini ifodalash hamda davlat hokimiyatini shakllantirishda ishtirok etish uchun;",
      "Faqat chet ellik investitsiyalarni jalb qilish uchun;",
      "Xalqaro sudlarda fuqarolarni himoya qilish uchun."
    ],
    "correct": 1
  },
  {
    "q": "Davlatning «dunyoviy» (sekulyar) xarakteri nimani anglatadi?",
    "options": [
      "Dinning davlatdan ajratilganligi va barcha dinlarning qonun oldida tengligini;",
      "Davlatda faqat bitta dinning hukmronligini;",
      "Diniy tashkilotlarning siyosatga aralashishini;",
      "Ateizmning majburiy mafkura ekanligini."
    ],
    "correct": 0
  },
  {
    "q": "AQSH Konstitutsiyasiga kiritilgan dastlabki 10 ta tuzatish nima deb ataladi?",
    "options": [
      "Mustaqillik deklaratsiyasi;",
      "Huquqlar to'g'risidagi bill;",
      "Konstitutsiyaviy pakt;",
      "Preambula."
    ],
    "correct": 1
  },
  {
    "q": "«Suverenitet» tushunchasining konstitutsiyaviy ma’nosi nima?",
    "options": [
      "Davlatning boshqa davlatlarga qaramligi;",
      "Davlat hokimiyatining ichki ishlarda ustunligi va tashqi munosabatlarda mustaqilligi;",
      "Faqat prezidentning mutlaq xukmronligi;",
      "Xalqaro banklar oldidagi mas'uliyat."
    ],
    "correct": 1
  },
  {
    "q": "Davlat shaklining «Polikratik» turida siyosiy plyuralizm qanday namoyon bo‘ladi?",
    "options": [
      "Faqat bitta fikrning mavjudligi bilan;",
      "Fikrlar xilma-xilligi, ko'ppartiyaviylik va erkin saylovlar mavjudligi bilan;",
      "Muxolifatning taqiqlanganligi bilan;",
      "Hamma qarorlarning bir ovozdan ma'qullanishi bilan."
    ],
    "correct": 1
  },
  {
    "q": "Parlamentar respublikada davlat boshlig‘ining (prezidentning) vakolati qanday?",
    "options": [
      "U mutlaq hokimiyatga ega;",
      "Vakolatlari asosan vakillik va rasmiy xarakterga ega, ijro etuvchi hokimiyat hukumat qo'lida bo'ladi;",
      "U parlamentni tarqatib yubora olmaydi;",
      "U sudlarni boshqaradi."
    ],
    "correct": 1
  },
  {
    "q": "«Qattiq» (mustahkam) konstitutsiyalar deb qanday konstitutsiyalarga aytiladi?",
    "options": [
      "Oddiy qonunlar bilan bir xil tartibda o'zgartiriladigan;",
      "O'zgartirish kiritish uchun maxsus, murakkablashtirilgan tartib talab qilinadigan;",
      "Hech qachon o'zgartirib bo'lmaydigan;",
      "Faqat harbiy holatda amal qiladigan."
    ],
    "correct": 1
  }
,
  {
    "q": "Konstitutsiyaviy huquqda «Monarxiya» boshqaruv shaklining respublikadan asosiy farqi nimada?",
    "options": [
      "Davlat boshlig'ining saylovlar orqali aniqlanishida;",
      "Davlat boshlig'i lavozimining meros bo'lib o'tishi va muddatsizligida;",
      "Faqat bitta partiyaning mavjudligida;",
      "Konstitutsiyaning mutlaqo mavjud emasligida."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasiga ko‘ra, insonning davlat organlari bilan o‘zaro munosabatlarida qanday prinsip amal qiladi?",
    "options": [
      "Davlat manfaati inson manfaatidan ustunligi;",
      "Insonning davlat organlari bilan o‘zaro munosabatlarida yuzaga keladigan barcha qarama-qarshiliklar inson foydasiga talqin qilinishi;",
      "Faqat qonunda yozilgan huquqlarning himoya qilinishi;",
      "Davlat organlarining qarorlari ustidan shikoyat qilib bo'lmasligi."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Mandat» tushunchasi nimani anglatadi?",
    "options": [
      "Siyosiy partiyaning nizomi;",
      "Vakillik organiga saylangan shaxsning vakolati va huquqi;",
      "Saylov byulletenining shakli;",
      "Sudyaning xizmat guvohnomasi."
    ],
    "correct": 1
  },
  {
    "q": "Dunyo tajribasida «Teokratik davlat» deb qanday davlatga aytiladi?",
    "options": [
      "Din davlatdan butunlay ajratilgan davlatga;",
      "Davlat hokimiyati va diniy hokimiyat bir shaxs yoki organ qo'lida birlashgan davlatga;",
      "Faqat bitta millat vakillari yashaydigan davlatga;",
      "Prezident va Parlament o'zaro teng bo'lgan davlatga."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyalarning moliyaviy manbalari qonunchilikda odatda qanday belgilanadi?",
    "options": [
      "Faqat xorijiy davlatlar tomonidan moliyalashtiriladi;",
      "A'zolik badallari, xayriyalar va qonunda belgilangan hollarda davlat byudjeti hisobidan;",
      "Faqat tijorat faoliyatidan olingan foyda hisobidan;",
      "Siyosiy partiyalar moliyaviy hisobot topshirishga majbur emas."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy nazorat (yoki nazorat organi)ning asosiy vazifasi nima?",
    "options": [
      "Jinoyatchilikka qarshi kurashish;",
      "Qabul qilinayotgan qonun va qarorlarning Konstitutsiyaga muvofiqligini tekshirish;",
      "Davlat byudjetini taqsimlash;",
      "Tashqi siyosiy aloqalarni o'rnatish."
    ],
    "correct": 1
  },
  {
    "q": "Yangi tahrirdagi O‘zbekiston Konstitutsiyasida «Inson huquq va erkinliklarini ta’minlash — davlatning oliy maqsadi» ekanligi qaysi moddada ifodalangan?",
    "options": [
      "13-modda;",
      "15-modda;",
      "54-modda;",
      "128-modda."
    ],
    "correct": 2
  },
  {
    "q": "Xalqaro huquqda «Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risidagi pakt» qachon kuchga kirgan?",
    "options": [
      "1948-yil;",
      "1966-yil (qabul qilingan), 1976-yil (kuchga kirgan);",
      "1991-yil;",
      "2001-yil."
    ],
    "correct": 1
  },
  {
    "q": "Davlat shaklining «Boshqaruv shakli» elementi nimani ifodalaydi?",
    "options": [
      "Davlatning hududiy tuzilishini;",
      "Oliy davlat hokimiyati organlarining tashkil etilishi, shakllanishi va o'zaro munosabatlarini;",
      "Siyosiy rejimning turini;",
      "Davlat ramzlarining tavsifini."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Lobbyizm» (lobbi) tushunchasi nimani anglatadi?",
    "options": [
      "Saylovlarda ovoz berish usuli;",
      "Turli guruhlarning davlat organlariga o'z manfaatlari yo'lida ta'sir o'tkazish faoliyati;",
      "Partiyadan a'zolikni bekor qilish;",
      "Parlamentda qonun loyihasini birinchi o'qishda ko'rib chiqish."
    ],
    "correct": 1

 
   },
    ]),
  },

  ///////////////////////////////////////////////////////////////////////////////////





 topic2: {
    title: "Konstitutsiya 2-Bo'lim",
    questions: randomizeQuestions([
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Siyosiy rejim» tushunchasi nimani anglatadi?",
    "options": [
      "Davlatning hududiy tuzilishini;",
      "Davlat hokimiyatini amalga oshirishning usullari, uslublari va vositalari tizimini;",
      "Faqat saylov tizimining turini;",
      "Davlat ramzlari va poytaxtning maqomini."
    ],
    "correct": 1
  },
  {
    "q": "Yangi tahrirdagi O‘zbekiston Konstitutsiyasida «Xalq davlat hokimiyatining birdan-bir manbaidir» degan qoida nechanchi moddada mustahkamlangan?",
    "options": [
      "2-modda;",
      "7-modda;",
      "10-modda;",
      "15-modda."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Impiçment» (impichment) jarayoni deganda nima tushuniladi?",
    "options": [
      "Prezidentning parlamentni tarqatib yuborishi;",
      "Oliy mansabdor shaxslarni (masalan, prezidentni) javobgarlikka tortish va lavozimidan chetlatish tartibi;",
      "Yangi qonun loyihasini ovozga qo'yish;",
      "Sudyalarni umrbod tayinlash."
    ],
    "correct": 1
  },
  {
    "q": "«Inson huquqlari» tushunchasining «Inson erkinliklari»dan asosiy farqi nimada?",
    "options": [
      "Huquqlar davlat tomonidan kafolatlanadigan imkoniyatlar, erkinliklar esa shaxsning mustaqil tanlov doirasidir;",
      "Hech qanday farqi yo'q, ikkalasi ham sinonim;",
      "Erkinliklar faqat iqtisodiy sohaga tegishli;",
      "Huquqlar faqat erkaklarga tegishli."
    ],
    "correct": 0
  },
  {
    "q": "Davlat shaklining «Konfederatsiya» turi qanday tavsiflanadi?",
    "options": [
      "Yaxlit, bo'linmas davlat;",
      "Muayyan maqsadlar (iqtisodiy, harbiy) yo'lida mustaqil davlatlarning vaqtinchalik ittifoqi;",
      "Faqat bitta prezident boshqaradigan bir nechta davlatlar guruhi;",
      "Mustamlaka hududlarning birlashmasi."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyalarning «hukmron» (pravyashaya) partiya deb atalishiga asosiy sabab nima?",
    "options": [
      "A'zolari soni eng ko'p bo'lganligi uchun;",
      "Saylovlarda g'olib chiqib, hukumatni shakllantirganligi uchun;",
      "Faqat prezident tomonidan tuzilganligi uchun;",
      "Eng ko'p mablag'ga ega bo'lganligi uchun."
    ],
    "correct": 1
  },
  {
    "q": "AQSHda qonun chiqaruvchi hokimiyat qaysi organ tomonidan amalga oshiriladi?",
    "options": [
      "Davlat departamenti;",
      "AQSH Kongressi;",
      "Oliy sud;",
      "Oq uy."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Prezidentlik respublikasi»ning asosiy belgisi nima?",
    "options": [
      "Prezidentning parlament tomonidan saylanishi;",
      "Prezidentning ham davlat, ham ijro etuvchi hokimiyat (hukumat) boshlig'i bo'lishi;",
      "Prezidentning vakolati bo'lmasligi;",
      "Bosh vazirning prezidentdan ustunligi."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlarining «uchinchi avlodi»ga qaysi huquqlar kiradi?",
    "options": [
      "Siyosiy va fuqarolik huquqlari;",
      "Iqtisodiy va madaniy huquqlar;",
      "Tinchlik, xavfsiz atrof-muhit va axborot olish huquqlari (kollektiv huquqlar);",
      "Faqat mulkdorlik huquqi."
    ],
    "correct": 2
  },
  {
    "q": "Konstitutsiyada «Mafkuraviy plyuralizm» (xilma-xillik) tamoyili nimani anglatadi?",
    "options": [
      "Davlatda faqat bitta mafkuraning majburiyligini;",
      "Hech bir mafkuraning davlat mafkurasi sifatida o'rnatilishi mumkin emasligini;",
      "Faqat diniy mafkuraning ustunligini;",
      "Mafkuraning taqiqlanishini."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisi Senati a’zolarining shakllanish tartibi qanday?",
    "options": [
      "Faqat Prezident tomonidan tayinlanadi;",
      "Viloyat, tuman va shahar kengashlari deputatlari tomonidan saylanadi va bir qismi Prezident tomonidan tayinlanadi;",
      "Xalq tomonidan to'g'ridan-to'g'ri saylanadi;",
      "Lotereya orqali aniqlanadi."
    ],
    "correct": 1
  },
  {
    "q": "Parlamentar boshqaruv shaklidagi davlatlarda «Bosh vazir» lavozimiga odatda kim tayinlanadi?",
    "options": [

"Eng yoshi ulug' deputat;",
      "Parlamentda ko'pchilik o'rinni egallagan partiyaning rahbari;",
      "Sudyalardan biri;",
      "Xalq tomonidan alohida saylangan shaxs."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Veto» (taqiq) huquqi kimga tegishli bo‘ladi?",
    "options": [
      "Parlament spikeriga;",
      "Davlat boshlig'iga (Prezidentga);",
      "Siyosiy partiya rahbariga;",
      "Barcha fuqarolarga."
    ],
    "correct": 1
  },
  {
    "q": "«Referendum» tushunchasining konstitutsiyaviy ma’nosi nima?",
    "options": [
      "Siyosiy partiyalar yig'ilishi;",
      "Muhim davlat va jamiyat masalalari bo'yicha xalqning bevosita ovoz berishi;",
      "Faqat saylov kuni o'tkaziladigan tadbir;",
      "Parlament deputatlarini chaqirib olish jarayoni."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Konstitutsiyaviy monarxiya» nima?",
    "options": [
      "Monarxning cheksiz hokimiyatga egaligi;",
      "Monarx vakolatlari Konstitutsiya bilan cheklangan boshqaruv shakli;",
      "Faqat harbiy holatda amal qiladigan tuzum;",
      "Prezident va Qirol birga boshqaradigan tizim."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Konstitutsiyasining yangi tahririga ko‘ra, o‘lim jazosi haqida nima deyilgan?",
    "options": [
      "Faqat og'ir jinoyatlar uchun qo'llaniladi;",
      "O'lim jazosi taqiqlanadi;",
      "Faqat urush davrida qo'llanilishi mumkin;",
      "Sudning ixtiyoriga qoldirilgan."
    ],
    "correct": 1
  },
  {
    "q": "«Ombudsman» instituti xalqaro tajribada qanday vazifani bajaradi?",
    "options": [
      "Chet el investitsiyalarini himoya qiladi;",
      "Inson huquqlari va erkinliklariga rioya etilishini nazorat qiluvchi vakil (vakolatli shaxs);",
      "Saylov komissiyasini boshqaradi;",
      "Jinoyat ishlarini tergov qiladi."
    ],
    "correct": 1
  },
  {
    "q": "Davlat organlarining bir-birini tiyib turishi (sderjek i protivovesov) tizimi qaysi tamoyilning tarkibiy qismi?",
    "options": [
      "Yakkahokimlik tamoyili;",
      "Hokimiyatning taqsimlanishi tamoyili;",
      "Markazlashuv tamoyili;",
      "Diniy boshqaruv tamoyili."
    ],
    "correct": 1
  },
  {
    "q": "«Proporsional» saylov tizimining mazmuni nimada?",
    "options": [
      "Nomzod uchun shaxsan ovoz berish;",
      "Partiyalar tomonidan ko'rsatilgan ro'yxatlar uchun ovoz berish va o'rinlarni olingan foizga qarab taqsimlash;",
      "Eng ko'p ovoz olgan bir kishi g'olib bo'lishi;",
      "Faqat muayyan yoshdagilarning ovoz berishi."
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro huquqda «Inson huquqlari bo‘yicha Yevropa sudi» qaysi shaharda joylashgan?",
    "options": [
      "Bryussel;",
      "Strasburg;",
      "Gaga;",
      "Jeneva."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Ekstraditsiya» nima?",
    "options": [
      "Fuqarolikdan mahrum qilish;",
      "Jinoyat sodir etgan shaxsni javobgarlikka tortish uchun bir davlat tomonidan ikkinchi davlatga topshirilishi;",
      "Siyosiy boshpana berish;",
      "Mamlakatdan chiqarib yuborish (deportatsiya)."
    ],
    "correct": 1
  },
  {
    "q": "Fuqarolik tushunchasiga berilgan eng to‘g‘ri ta’rifni belgilang:",
    "options": [
      "Muayyan hududda doimiy yashash huquqi;",
      "Shaxs bilan davlat o'rtasidagi o'zaro huquq, majburiyat va mas'uliyatga asoslangan barqaror huquqiy va siyosiy aloqa;",
      "Faqat pasportga ega bo'lish;",
      "Saylovda ishtirok etish imkoniyati."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaning «Preambula» qismi nima?",
    "options": [
      "O'zgartirishlar kiritish bo'limi;",
      "Konstitutsiyaning kirish qismi bo'lib, unda qabul qilinish maqsadlari va tamoyillari ko'rsatiladi;",
      "Konstitutsiyaning oxirgi xulosasi;",
      "Faqat atamalar lug'ati."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyaviy sudining sudyalari necha yil muddatga saylanadi?",
    "options": [
      "5 yil;",
      "10 yil (qayta saylanish huquqisiz);",
      "Umrbod;",

"Senat xohishiga ko'ra."
    ],
    "correct": 1
  },
  {
    "q": "«Yuridik javobgarlik» tushunchasining asosi nima?",
    "options": [
      "Insonning xohishi;",
      "Qonun bilan belgilangan huquqbuzarlikning sodir etilishi;",
      "Faqat axloqiy normalar;",
      "Prezidentning farmoni."
    ],
    "correct": 1
  }
,
  {
    "q": "Konstitutsiyaviy huquqda «De-yure» (de jure) konstitutsiya nima?",
    "options": [
      "Jamiyatda amalda bo'lgan ijtimoiy munosabatlar yig'indisi;",
      "Rasmiy ravishda qabul qilingan va huquqiy kuchga ega bo'lgan yozma hujjat;",
      "Faqat saylovoldi dasturlarida aks etgan prinsiplar;",
      "Konstitutsiyaning bekor qilingan bandlari."
    ],
    "correct": 1
  },
  {
    "q": "«Abstraktsion» konstitutsiyaviy nazorat qachon amalga oshiriladi?",
    "options": [
      "Faqat muayyan sud ishi ko'rilayotgan jarayonda;",
      "Hech qanday sud ishi mavjud bo'lmagan holda, qonunning Konstitutsiyaga muvofiqligini tekshirish so'ralganda;",
      "Faqat prokurorning talabi bilan;",
      "Saylov natijalari e'lon qilingandan so'ng."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahririga ko‘ra, Senat vakolatlariga nima kirmaydi?",
    "options": [
      "Qonunlarni qabul qilish (tasdiqlash);",
      "Byudjet ijrosini nazorat qilish;",
      "Jinoyat ishlari bo'yicha tergov o'tkazish;",
      "Hukumat a'zolarining hisobotlarini eshitish."
    ],
    "correct": 2
  },
  {
    "q": "Inson huquqlari bo‘yicha «Xalqaro sud» (BMTning asosiy sud organi) qayerda joylashgan?",
    "options": [
      "Nyu-York;",
      "Gaga (Gaaga);",
      "London;",
      "Parij."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Nullifikatsiya» (nullification) nima?",
    "options": [
      "Yangi qonunni imzolash;",
      "Konstitutsiyaga zid deb topilgan qonun yoki uning qismlarini huquqiy kuchdan mahrum qilish;",
      "Saylov natijalarini soxtalashtirish;",
      "Diplomatik korpusni almashtirish."
    ],
    "correct": 1
  },
  {
    "q": "AQSHda Prezident saylovi necha bosqichli tizimda amalga oshiriladi?",
    "options": [
      "To'g'ridan-to'g'ri xalq ovozi orqali;",
      "Ikki bosqichli (Saylovchilar hay'ati - electoral college orqali);",
      "Faqat Senat tomonidan;",
      "Siyosiy partiyalar qurultoyi orqali."
    ],
    "correct": 1
  },
  {
    "q": "«Siyosiy partiya» atamasi lotinchadan tarjima qilinganda qanday ma’noni anglatadi?",
    "options": [
      "Birlashma;",
      "Qism, bo'lak (partis);",
      "Hukmronlik;",
      "Xalq irodasi."
    ],
    "correct": 1
  },
  {
    "q": "Yangi tahrirdagi O‘zbekiston Konstitutsiyasida «Ekologik huquqlar» nechanchi moddada alohida aks etgan?",
    "options": [
      "15-modda;",
      "49-modda;",
      "78-modda;",
      "128-modda."
    ],
    "correct": 1
  },
  {
    "q": "Davlat boshqaruvining «Dualistik monarxiya» turida hokimiyat qanday taqsimlanadi?",
    "options": [
      "Barcha hokimiyat parlamentda bo'ladi;",
      "Ijro etuvchi hokimiyat monarxda, qonun chiqaruvchi hokimiyat parlamentda bo'ladi;",
      "Monarx faqat ramziy ma'noga ega;",
      "Sudlar monarxga bo'ysunmaydi."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Inkompatibilitet» (nomutanosiblik) prinsipi nimani anglatadi?",
    "options": [
      "Deputatning bir vaqtning o'zida ijro etuvchi hokimiyatda yoki boshqa haq to'lanadigan lavozimda ishlashi taqiqlanishini;",
      "Siyosiy partiyalarning birlashishini;",
      "Xalqaro shartnomalarning bekor qilinishini;",
      "Fuqarolikni o'zgartirishni."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Oliy Majlisining Qonunchilik palatasi va Senatining qo‘shma majlislarida qanday masalalar ko‘riladi?",
    "options": [
      "Oddiy qonunlar qabul qilinishi;",
      "Prezidentning qasamyod keltirishi, mamlakat ijtimoiy-iqtisodiy hayotining muhim masalalari bo'yicha ma'ruzalarini eshitish;",
      "Jinoyat ishlari bo'yicha hukm chiqarish;",
      "Xalqaro sport tadbirlarini tashkil etish."
    ],
    "correct": 1
  },
  {
    "q": "«Ma’muriy-hududiy tuzilish» tushunchasiga nima kiradi?",
    "options": [
      "Siyosiy partiyalarning joylashuvi;",
      "Davlat hududining muayyan qismlarga (viloyat, tuman, shahar) bo'linishi va ularning huquqiy maqomi;",
      "Faqat poytaxtning chegaralari;",
      "Chet eldagi elchixonalar ro'yxati."

],
    "correct": 1
  },
  {
    "q": "Xorijiy mamlakatlarda «Konstitutsiyaviy sud» a’zolari qanday muddatga tayinlanadi?",
    "options": [
      "Faqat bir yilga;",
      "Odatda uzoq muddatga (9-12 yil) yoki umrbod (AQSH misolida);",
      "Faqat parlament saylovlarigacha;",
      "Vazirlar Mahkamasi xohishiga ko'ra."
    ],
    "correct": 1
  },
  {
    "q": "«Konstitutsionizim» tushunchasining mazmuni nima?",
    "options": [
      "Faqat Konstitutsiyani yod olish;",
      "Davlat hokimiyatining Konstitutsiya bilan cheklanganligi, inson huquqlari ustuvorligi va qonun ustuvorligi tizimi;",
      "Konstitutsiyani tez-tez o'zgartirish;",
      "Respublika boshqaruvidan voz kechish."
    ],
    "correct": 1
  },
  {
    "q": "Parlamentning «Nazorat funksiyasi» nimalarda namoyon bo‘ladi?",
    "options": [
      "Faqat qonunlar yozishda;",
      "Hukumat faoliyati ustidan parlament so'rovi, hisobotlarni eshitish va ishonchsizlik votumi orqali;",
      "Sud qarorlarini o'zgartirishda;",
      "Prezident farmonlarini bekor qilishda."
    ],
    "correct": 1
  },
  {
    "q": "«Yozilmagan konstitutsiya» (unwritten constitution) qaysi davlatga xos?",
    "options": [
      "AQSH;",
      "Buyuk Britaniya;",
      "Fransiya;",
      "O'zbekiston."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy huquqshunoslikda «Huquqiy oila» tushunchasi nimani anglatadi?",
    "options": [
      "Faqat bitta oilaning huquqlarini;",
      "Kelib chiqishi, manbalari va tuzilishi jihatidan o'xshash bo'lgan milliy huquqiy tizimlar guruhi;",
      "Sudyalar va advokatlar ittifoqi;",
      "Xalqaro tashkilotlar yig'indisi."
    ],
    "correct": 1
  },
  {
    "q": "Anglo-sakson huquq tizimining asosiy manbasi nima?",
    "options": [
      "Kodekslar;",
      "Sud pretsedenti (avvalgi sud qarorlari);",
      "Diniy kitoblar;",
      "Faqat mahalliy urf-odatlar."
    ],
    "correct": 1
  },
  {
    "q": "Roman-german huquq tizimining asosiy belgisi nima?",
    "options": [
      "Sud pretsedenti ustuvorligi;",
      "Normativ-huquqiy hujjatlarning (qonun, kodeks) asosiy manba sifatida tan olinishi va tizimlashtirilganligi;",
      "Faqat og'zaki buyruqlar;",
      "Xalqaro odat huquqi."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Amnistiya» nima?",
    "options": [
      "Jinoyat kodeksini o'zgartirish;",
      "Davlat hokimiyatining vakillik organi tomonidan muayyan toifadagi shaxslarni jazodan ozod qilish haqidagi hujjati;",
      "Faqat bitta shaxsni afv etish;",
      "Sudyani lavozimidan bo'shatish."
    ],
    "correct": 1
  },
  {
    "q": "«Fuqarolik jamiyati»ning asosiy instituti qaysi?",
    "options": [
      "Mudofaa vazirligi;",
      "Nodavlat-notijorat tashkilotlari (NNT) va erkin ommaviy axborot vositalari;",
      "Politsiya departamenti;",
      "Davlat soliq qo'mitasi."
    ],
    "correct": 1
  },
  {
    "q": "Prezidentlik respublikasida Hukumat (Vazirlar) kim oldida javobgar?",
    "options": [
      "Parlament oldida;",
      "Prezident oldida;",
      "Faqat Konstitutsiyaviy sud oldida;",
      "Bosh vazir oldida."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Konstitutsiyasi bo‘yicha mahalliy davlat hokimiyati vakillik organlari nima deb ataladi?",
    "options": [
      "Hokimiyatlar;",
      "Xalq deputatlari Kengashlari;",
      "Mahalla qo'mitalari;",
      "Munitsipalitetlar."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Oktroyirlangan konstitutsiya» nima?",
    "options": [
      "Referendum orqali qabul qilingan;",
      "Monarx yoki mustamlaka hokimiyati tomonidan «in’om etilgan» (yuqoridan berilgan);",
      "Parlament tomonidan yashirincha qabul qilingan;",
      "Xalqaro shartnoma asosida tuzilgan."
    ],
    "correct": 1
  },
  {
    "q": "Yangi tahrirdagi O‘zbekiston Konstitutsiyasining yakuniy moddasi (155-modda) nima haqida?",
    "options": [
      "Prezident vakolatlari haqida;",

"Konstitutsiyaga o'zgartirishlar kiritish tartibi va ayrim qoidalarning (respublika boshqaruv shakli, hududiy yaxlitlik) o'zgartirilishi mumkin emasligi haqida;",
      "Yangi poytaxt haqida;",
      "Davlat ramzlari haqida."
    ],
    "correct": 1




      
   },
    ]),
  },
  

//////////////////////////////////////////////////////////////////////////////////////


topic3: {
    title: "Konstitutsiya 3-Bo'lim",
    questions: randomizeQuestions([


  {
    "q": "Konstitutsiyaviy huquqda «Litispendensiya» (lis pendens) tushunchasi nimani anglatadi?",
    "options": [
      "Sud islohotini o'tkazish;",
      "Bir xil taraflar o'rtasidagi aynan bir xil nizoning ikki xil sudda ko'rilayotganligi holati;",
      "Yangi qonunni e'lon qilish;",
      "Prokuror nazoratining bir turi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahririga ko‘ra, sudya lavozimida bo‘lishning eng yuqori yoshi qancha belgilangan?",
    "options": [
      "60 yosh;",
      "65 yosh (alohida hollarda 70 yoshgacha uzaytirilishi mumkin);",
      "75 yosh;",
      "Yoshi chegaralanmagan."
    ],
    "correct": 1
  },
  {
    "q": "«Ma’muriy adliya» (administrative justice) tizimining asosiy maqsadi nima?",
    "options": [
      "Jinoyatchilarni jazolash;",
      "Fuqarolarning davlat organlari va mansabdor shaxslar ustidan bergan shikoyatlarini ko'rib chiqish;",
      "Soliqlarni yig'ishni nazorat qilish;",
      "Chet el fuqarolarini ro'yxatga olish."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Diskretion vakolatlar» nima?",
    "options": [
      "Faqat urush paytida beriladigan vakolatlar;",
      "Davlat organining o'z ixtiyoriga ko'ra, qonun doirasida qaror qabul qilish erkinligi;",
      "Vaqtinchalik to'xtatilgan vakolatlar;",
      "Faqat xalqaro tashkilotlar tomonidan berilgan ruxsatnoma."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlari bo‘yicha «Xabeas korpus» (Habeas Corpus) aktining mazmuni nimadan iborat?",
    "options": [
      "Mulkni musodara qilish;",
      "Shaxsni sud qarorisiz yoki qonuniy asoslarsiz hibsda ushlab turishni taqiqlash;",
      "Saylovda ishtirok etish huquqi;",
      "Soliq to'lash majburiyati."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy partiyalarning «blok» yoki «koalitsiya» tuzishidan asosiy maqsad nima?",
    "options": [
      "Partiyalarni butunlay tugatish;",
      "Saylovlarda ko'proq ovoz to'plash va birgalikda hukumat shakllantirish;",
      "Faqat xalqaro grantlar olish;",
      "Partiya nomini o'zgartirish."
    ],
    "correct": 1
  },
  {
    "q": "Yangi tahrirdagi O‘zbekiston Konstitutsiyasiga ko‘ra, mahalliy byudjetni shakllantirish va ijro etish kimning vakolatiga kiradi?",
    "options": [
      "Faqat Markaziy bankning;",
      "Tegishli mahalliy ijro etuvchi hokimiyat organlari (hokimliklar) va Kengashlar vakolatiga;",
      "Faqat adliya vazirligiga;",
      "Xalqaro moliya tashkilotlariga."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Delegirlangan qonun chiqarish» nima?",
    "options": [
      "Qonunlarni faqat xalq saylashi;",
      "Parlament tomonidan qonun qabul qilish vakolatining ma'lum muddatga hukumatga berilishi;",
      "Chet el qonunlarini nusxalash;",
      "Qonunlarni bekor qilish tartibi."
    ],
    "correct": 1
  },
  {
    "q": "Dunyo tajribasida «Konstitutsiyaviy shikoyat» instituti fuqarolarga qanday imkoniyat beradi?",
    "options": [
      "Prezidentni iste'foga chiqarish so'rovi bilan chiqish;",
      "O'zining konstitutsiyaviy huquqlari buzilganda, muayyan qonunni Konstitutsiyaga zid deb topishni so'rab Konstitutsiyaviy sudga murojaat qilish;",
      "Faqat qo'shnisi ustidan shikoyat qilish;",
      "Yangi ish o'rni talab qilish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining 116-moddasiga ko‘ra, har bir shaxsga qanday yuridik yordam kafolatlanadi?",
    "options": [
      "Faqat pullik yuridik yordam;",
      "Malakali yuridik yordam olish (qonunda nazarda tutilgan hollarda bepul);",
      "Faqat chet ellik advokatlar yordami;",
      "Yuridik yordam kafolatlanmagan."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Unikameralizm» nima?",
    "options": [
      "Ikki palatali parlament;",
      "Bir palatali parlament tizimi;",
      "Parlamentning mavjud emasligi;",
      "Faqat ayollardan iborat parlament."
    ],
    "correct": 1
  },
  {

"q": "Bikamerallik (ikki palatalilik) parlament tizimi odatda qaysi turdagi davlatlar uchun ko‘proq xos?",
    "options": [
      "Kichik unitar davlatlar;",
      "Federativ davlatlar (hududlar manfaatini ifodalash uchun);",
      "Faqat monarxiyalar;",
      "Vaqtinchalik hukumatlar."
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro huquq normalarining milliy qonunchilikka nisbatan ustuvorligi O‘zbekistonning yangi Konstitutsiyasida qanday aks etgan?",
    "options": [
      "Faqat iqtisodiy bitimlar ustuvor;",
      "Umumti'rof etilgan xalqaro huquq normalari va O‘zbekistonning xalqaro shartnomalari ustuvorligi tan olinadi;",
      "Xalqaro huquq tan olinmaydi;",
      "Faqat qo'shni davlatlar qonunlari ustuvor."
    ],
    "correct": 1
  },
  {
    "q": "«Sud mustaqilligi» prinsipining asosiy kafolati nima?",
    "options": [
      "Sudyaning har kuni hisobot berishi;",
      "Sudyalarning daxlsizligi, almashmasligi va faqat qonunga bo'ysunishi;",
      "Sudyalarni xalq tomonidan har yili qayta saylanishi;",
      "Sudyalarning kam maosh olishi."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Kvota» (quotas) tizimi nima maqsadda qo‘llaniladi?",
    "options": [
      "Soliqlarni taqsimlash uchun;",
      "Saylovlarda ma'lum bir ijtimoiy guruhlar (masalan, ayollar) uchun ma'lum miqdordagi o'rinlarni kafolatlash uchun;",
      "Import qilinadigan tovarlarni cheklash uchun;",
      "Talabalar sonini kamaytirish uchun."
    ],
    "correct": 1
  },
  {
    "q": "«Ma’naviyat» tushunchasining konstitutsiyaviy-huquqiy ahamiyati nimada?",
    "options": [
      "U faqat adabiyotga tegishli;",
      "Jamiyat barqarorligi, milliy qadriyatlar va huquqiy ongni rivojlantirishning asosi sifatida;",
      "Faqat maktab darsliklarida qo'llanilishi;",
      "Uning hech qanday huquqiy ahamiyati yo'q."
    ],
    "correct": 1
  },
  {
    "q": "AQSHda Oliy sud sudyalari qancha muddatga tayinlanadi?",
    "options": [
      "4 yil;",
      "10 yil;",
      "Umrbod (yoki o'z ixtiyori bilan iste'foga chiqquncha);",
      "Prezident almashguncha."
    ],
    "correct": 2
  },
  {
    "q": "Parlamentning «ishonchsizlik votumi» (vote of no confidence) nima?",
    "options": [
      "Deputatni haydash jarayoni;",
      "Parlamentning hukumatga nisbatan salbiy munosabati natijasida hukumatning iste'foga chiqishiga sabab bo'ladigan qarori;",
      "Yangi qonunni rad etish;",
      "Prezidentni saylash usuli."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Inkorporatsiya» nima?",
    "options": [
      "Qonunlarni butunlay o'zgartirish;",
      "Normativ hujjatlarni hech qanday o'zgarishsiz muayyan tartibda (masalan, xronologik) birlashtirish;",
      "Yangi vazirlik tuzish;",
      "Siyosiy partiyani taqiqlash."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Prezidentining daxlsizligi nimani anglatadi?",
    "options": [
      "Uning faqat poytaxtda yashashini;",
      "Uning shaxsi daxlsiz ekanligi va qonun bilan muhofaza qilinishini;",
      "Uning hech qachon chet elga chiqmasligini;",
      "Uning faqat bitta tilni bilishini."
    ],
    "correct": 1
  },
  {
    "q": "«Davlatchilik an’analari» deganda nima tushuniladi?",
    "options": [
      "Faqat bayramlarni nishonlash;",
      "Tarixiy tajriba, boshqaruv usullari va davlat barpo etishdagi davomiylik;",
      "Eski qonunlarni qayta tiklash;",
      "Faqat poytaxtni ko'chirish."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Lestsit» (laïcité) prinsiplari qaysi davlatda eng kuchli rivojlangan?",
    "options": [
      "Eron;",
      "Fransiya (din va davlatning keskin ajratilganligi);",
      "Vatikan;",
      "Saudiya Arabistoni."
    ],
    "correct": 1
  },
  {
    "q": "«Ijtimoiy sheriklik» tushunchasi nimani ifodalaydi?",
    "options": [
      "Faqat biznes aloqalarni;",
      "Davlat organlari, NNTlar va fuqarolik jamiyatining boshqa institutlari o'rtasidagi hamkorlikni;",
      "Xalqaro harbiy ittifoqni;",
      "Siyosiy partiyalarning o'zaro urushini."
    ],
    "correct": 1

},
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasi nechanchi yili o‘tkazilgan referendumda qabul qilindi?",
    "options": [
      "1992-yil;",
      "2017-yil;",
      "2023-yil 30-aprel;",
      "2024-yil."
    ],
    "correct": 2
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquq fanining asosiy metodi qaysi?",
    "options": [
      "Faqat matematik metod;",
      "Qiyosiy-huquqiy metod (turli tizimlarni solishtirish);",
      "Faqat biologik metod;",
      "Astronomik metod."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Siyosiy plyuralizm» deganda nima tushuniladi?",
    "options": [
      "Faqat bitta siyosiy partiyaning mavjudligi;",
      "Siyosiy qarashlar va mafkuralarning xilma-xilligi, ko'ppartiyaviylik tizimi;",
      "Davlat hokimiyatining barcha tarmoqlari birlashtirilishi;",
      "Xalqaro shartnomalarning ustuvorligini rad etish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining 11-moddasiga ko‘ra, davlat hokimiyati tizimi qaysi tamoyilga asoslanadi?",
    "options": [
      "Markazlashgan boshqaruv tamoyili;",
      "Hokimiyatning qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo'linishi tamoyili;",
      "Diniy boshqaruv tamoyili;",
      "Faqat Prezident hokimiyatining mutlaqligi tamoyili."
    ],
    "correct": 1
  },
  {
    "q": "«Ma’muriy-hududiy birlik» tushunchasining mazmuni nima?",
    "options": [
      "Siyosiy partiyaning bo'limi;",
      "Davlat hududining boshqaruv qulayligi uchun bo'lingan qismlari (viloyat, tuman, shahar);",
      "Faqat harbiy poligonlar;",
      "Xususiy mulk ob'ektlari."
    ],
    "correct": 1
  },
  {
    "q": "Dunyo tajribasida «Veto» huquqi qanday turlarga bo‘linadi?",
    "options": [
      "Yozma va og'zaki;",
      "Mutlaq (absolyut) va nisbiy (suspensiv) veto;",
      "Ichki va tashqi veto;",
      "Demokratik va diktatorlik veto."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Unitar davlat» tushunchasining asosiy belgisi nima?",
    "options": [
      "Davlat tarkibida suverenitetga ega bo'lgan boshqa davlatlarning mavjudligi;",
      "Davlatning hududiy jihatdan bo'linmasligi va yagona davlat hokimiyati organlariga ega bo'lishi;",
      "Bir necha davlatning harbiy ittifoqi;",
      "Faqat diniy qonunlar bilan boshqarilishi."
    ],
    "correct": 1
  },
  {
    "q": "«Kontrasignatsiya» (countersignature) instituti nimani anglatadi?",
    "options": [
      "Prezidentning parlamentni tarqatib yuborishi;",
      "Davlat boshlig'ining akti (farmoni) kuchga kirishi uchun tegishli vazir yoki hukumat boshlig'i tomonidan imzolanishi zarurligi;",
      "Yangi saylovlar sanasini belgilash;",
      "Sud qarorini bekor qilish."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahririda «Mahalla» institutiga berilgan huquqiy maqom qanday?",
    "options": [
      "Davlat hokimiyati organi;",
      "Fuqarolarning o‘zini o‘zi boshqarish organi;",
      "Siyosiy partiyaning quyi bo'g'ini;",
      "Xalqaro nodavlat tashkilot."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlari bo‘yicha «Bolalar huquqlari to‘g‘risidagi konvensiya» qachon qabul qilingan?",
    "options": [
      "1948-yil;",
      "1975-yil;",
      "1989-yil;",
      "2005-yil."
    ],
    "correct": 2
  },
  {
    "q": "Konstitutsiyaviy huquqda «Initsiatsiya» (qonun chiqarish tashabbusi) huquqi kimga tegishli?",
    "options": [
      "Faqat barcha fuqarolarga;",
      "Qonunda belgilangan sub'ektlarga (Prezident, deputatlar, hukumat va h.k.);",
      "Faqat politsiya organlariga;",
      "Xalqaro banklarga."
    ],
    "correct": 1
  },
  {
    "q": "«Oliy vakillik organi» deganda qaysi institut tushuniladi?",
    "options": [
      "Prokuratura;",
      "Parlament;",
      "Milliy gvardiya;",
      "Markaziy bank."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Preambula» qanday ahamiyatga ega?",
    "options": [
      "U faqat estetik ahamiyatga ega;",
      "U Konstitutsiyaning g'oyaviy-huquqiy asosi, tamoyillari va maqsadlarini belgilab beradi;",
      "U o'zgartirilishi mumkin bo'lmagan yagona qism;",
      "U faqat moddalar ro'yxatidan iborat."
    ],
    "correct": 1
  },
  {
    "q": "«Suverenitet» atamasining muallifi va uni nazariy jihatdan asoslagan olim kim?",
    "options": [
      "Jan Boden;",
      "Tomas Gobbs;",
      "Sokrat;",
      "Fransis Bekon."
    ],
    "correct": 0
  },
  {

"q": "O‘zbekiston Respublikasi Konstitutsiyasiga ko‘ra, qonun loyihalarini qabul qilishda yakuniy qaror (ma’qullash yoki rad etish) qaysi palata tomonidan amalga oshiriladi?",
    "options": [
      "Faqat Qonunchilik palatasi;",
      "Oliy Majlis Senati;",
      "Mahalliy kengashlar;",
      "Konstitutsiyaviy sud."
    ],
    "correct": 1
  },
  {
    "q": "«Dunyoviy davlat» (secular state) tamoyiliga ko‘ra davlat qanday majburiyatni oladi?",
    "options": [
      "Hech bir dinni majburiy yoki davlat dini sifatida o'rnatmaslik, dinning davlatdan ajratilganligi;",
      "Ateizmni targ'ib qilish;",
      "Faqat bitta diniy tashkilotni moliyalashtirish;",
      "Barcha diniy marosimlarni taqiqlash."
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy partiyalarning «fraksiya»si deganda nima tushuniladi?",
    "options": [
      "Partiyaning viloyatdagi bo'limi;",
      "Parlament tarkibidagi muayyan partiya manfaatlarini ifodalovchi deputatlar guruhi;",
      "Partiyaning moliyaviy hisoboti;",
      "Partiyaning xalqaro filiallari."
    ],
    "correct": 1
  },
  {
    "q": "«Yarim prezidentlik respublikasi» (aralash respublika) qaysi davlat misolida yaqqol ko‘rinadi?",
    "options": [
      "AQSH;",
      "Fransiya;",
      "Buyuk Britaniya;",
      "Saudiya Arabistoni."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Vakillik demokratiyasi» nima?",
    "options": [
      "Xalqning davlat boshqaruvida o'zi saylagan vakillar (parlament) orqali ishtirok etishi;",
      "Faqat referendum orqali qaror qabul qilish;",
      "Davlatni faqat tayinlangan shaxslar boshqarishi;",
      "Saylovlar o'tkazilmasligi."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahririda «Ekologiya va atrof-muhitni muhofaza qilish» haqidagi qoidalar qaysi bobga kiritilgan?",
    "options": [
      "1-bob;",
      "X bob (Iqtisodiy va ijtimoiy huquqlar doirasida);",
      "XIX bob;",
      "Final qoidalar."
    ],
    "correct": 1
  },
  {
    "q": "«Tsiolkovskiy» qoidasi yoki konstitutsiyaviy huquqda muddatlarning cheklanishi nima uchun kerak?",
    "options": [
      "Siyosiy raqobatni yo'qotish uchun;",
      "Hokimiyatning almashuvchanligini ta'minlash va diktaturaga yo'l qo'ymaslik uchun;",
      "Saylov xarajatlarini tejash uchun;",
      "Faqat yosh rahbarlarni tayinlash uchun."
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro huquqda «Inson huquqlari bo‘yicha komissar» (Ombudsman) instituti birinchi marta qaysi davlatda tashkil etilgan?",
    "options": [
      "Shvetsiya (1809-yil);",
      "Germaniya;",
      "Rossiya;",
      "Yaponiya."
    ],
    "correct": 0
  },
  {
    "q": "«Munitsipalitet» tushunchasi xalqaro tajribada nimani anglatadi?",
    "options": [
      "Markaziy hukumatni;",
      "Mahalliy o'zini o'zi boshqarish organlarini;",
      "Harbiy bo'linmalarni;",
      "Siyosiy partiyalar ittifoqini."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Protsedura» nima?",
    "options": [
      "Faqat tibbiy tadbir;",
      "Huquqiy normalarni amalga oshirishning qonun bilan belgilangan qat'iy tartibi va ketma-ketligi;",
      "Deputatning jazolanishi;",
      "Saylov byulletenining rangi."
    ],
    "correct": 1
  },
  {
    "q": "«Hokimiyatning ijtimoiy asosi» deganda nima tushuniladi?",
    "options": [
      "Faqat boylar qo'llab-quvvatlashi;",
      "Davlat hokimiyatini qo'llab-quvvatlovchi jamiyat qatlamlari va xalq irodasi;",
      "Faqat politsiya kuchi;",
      "Xorijiy davlatlarning yordami."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Vazirlar Mahkamasi kim oldida javobgar?",
    "options": [
      "Faqat sudlar oldida;",
      "O‘zbekiston Respublikasi Prezidenti va Oliy Majlis oldida;",
      "Faqat Senat oldida;",
      "Siyosiy partiyalar oldida."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquq fanining amaliy ahamiyati nimada?",
    "options": [
      "Boshqa davlatlarning ilg'or tajribasini o'rganish va milliy qonunchilikni takomillashtirish;",

"Faqat tarixiy sanalarni yodlash;",
      "Boshqa davlatlarni tanqid qilish;",
      "Siyosiy partiyalarni yopish."
    ],
    "correct": 0




      
   },
    ]),
  },
  
////////////////////////////////////
  
topic4: {
    title: "Konstitutsiya 4-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Konstitutsiyaviy huquqda «Majoritar» saylov tizimining asosiy belgisi nima?",
    "options": [
      "Ovozlar partiya ro'yxati bo'yicha taqsimlanishi;",
      "Nomzod saylanishi uchun qonunda belgilangan ko'pchilik ovozini (mutlaq yoki nisbiy) olishi shartligi;",
      "Faqat bitta partiya ishtirok etishi;",
      "Ovoz berishning faqat elektron shaklda o'tkazilishi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasiga ko‘ra, kim qonunchilik tashabbusi huquqiga ega emas?",
    "options": [
      "O'zbekiston Respublikasi Prezidenti;",
      "Qonunchilik palatasi deputatlari;",
      "Siyosiy partiyalarning oddiy a'zolari;",
      "O'zbekiston Respublikasi Vazirlar Mahkamasi."
    ],
    "correct": 2
  },
  {
    "q": "«Konstitutsiyaviy odat» (constitutional custom) tushunchasi nimani anglatadi?",
    "options": [
      "Qonun bilan taqiqlangan harakatlar;",
      "Yozma qonunlarda aks etmagan, lekin davlat organlari faoliyatida uzoq vaqt qo'llanilib kelayotgan barqaror qoidalar;",
      "Faqat diniy bayramlarni nishonlash tartibi;",
      "Konstitutsiyani o'zgartirish haqidagi taklif."
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro tajribada «Liderlik» (rahbarlik) partiyalari qanday tavsiflanadi?",
    "options": [
      "Faqat yoshlar ittifoqidan iborat partiyalar;",
      "G'oyadan ko'ra ko'proq bir kuchli shaxs (lider) atrofida birlashgan siyosiy tashkilotlar;",
      "Faqat parlament spikeridan iborat guruh;",
      "Xalqaro hamjamiyat tomonidan tan olingan partiyalar."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Prezidentlik vakolatlari»ning «Inherent» (ajralmas) turi nima?",
    "options": [
      "Faqat qonunda yozilgan vakolatlar;",
      "Konstitutsiyada aniq yozilmagan bo'lsa-da, davlat boshlig'i maqomidan kelib chiqadigan vakolatlar;",
      "Faqat sudlar tomonidan beriladigan vakolatlar;",
      "Vaqtinchalik to'xtatilgan huquqlar."
    ],
    "correct": 1
  },
  {
    "q": "«Respublika» boshqaruv shaklida xalqning ishtiroki qanday namoyon bo‘ladi?",
    "options": [
      "Hokimiyatning meros bo'lib o'tishi orqali;",
      "Davlat organlarini saylash va referendumlar orqali xalq irodasini ifodalash orqali;",
      "Faqat soliqlarni to'lash orqali;",
      "Davlat sirlarini saqlash orqali."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasida «Inson qadri» tushunchasi qanday ahamiyatga ega?",
    "options": [
      "U faqat axloqiy tushuncha xolos;",
      "Barcha qonunlar va davlat organlari faoliyatining asosiy mezoni va oliy qadriyat hisoblanadi;",
      "Faqat sud hukmlarida qo'llaniladi;",
      "U faqat chet elliklarga tegishli."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Imunitet» (daxlsizlik) kimlarga nisbatan qo‘llaniladi?",
    "options": [
      "Faqat barcha talabalarga;",
      "Prezident, deputatlar va sudyalar kabi mansabdor shaxslarga;",
      "Faqat jinoyatchilarga;",
      "Faqat tadbirkorlarga."
    ],
    "correct": 1
  },
  {
    "q": "«Davlatchilik shakli» (forma gosudarstva) tarkibiga qaysi element kirmaydi?",
    "options": [
      "Boshqaruv shakli;",
      "Davlat tuzilishi shakli;",
      "Siyosiy partiya nizomi;",
      "Siyosiy rejim."
    ],
    "correct": 2
  },
  {
    "q": "Inson huquqlari bo‘yicha «Xalqaro paktlar» (1966-yil) qaysi tashkilot doirasida ishlab chiqilgan?",
    "options": [
      "Yevropa Ittifoqi;",
      "Birlashgan Millatlar Tashkiloti (BMT);",
      "Shanxay Hamkorlik Tashkiloti;",
      "Mustaqil Davlatlar Hamdo'stligi."
    ],
    "correct": 1
  },
  {
    "q": "«Avtoritar rejim»ning demokratik rejimdan asosiy farqi nimada?",
    "options": [
      "Hokimiyatning xalq nazoratidan tashqarida bo'lishi va siyosiy erkinliklarning cheklanganligi;",
      "Faqat iqtisodiyotning yomonligi bilan;",
      "Konstitutsiyaning mutlaqo yo'qligi bilan;",
      "Prezidentning yo'qligi bilan."
    ],
    "correct": 0
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Simmetrik federatsiya» nima?",

"options": [
      "Sub'ektlari turlicha huquqiy maqomga ega federatsiya;",
      "Barcha sub'ektlari (shtat, o'lka, respublika) bir xil huquqiy maqom va vakolatlarga ega bo'lgan federatsiya;",
      "Faqat ikkita sub'ektdan iborat davlat;",
      "Markaziy hokimiyat bo'lmagan ittifoq."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekistonda Oliy Majlis Senati raisi kim tomonidan saylanadi?",
    "options": [
      "Xalq tomonidan;",
      "O'zbekiston Respublikasi Prezidenti tomonidan;",
      "Senat a'zolari orasidan Senatning o'zi tomonidan;",
      "Vazirlar Mahkamasi tomonidan."
    ],
    "correct": 2
  },
  {
    "q": "«Referendum» o‘tkazish tashabbusi O‘zbekistonda kimga tegishli emas?",
    "options": [
      "O'zbekiston Respublikasi fuqarolariga (kamida 200 ming kishi);",
      "Oliy Majlis palatalariga;",
      "Alohida bitta tuman hokimiga;",
      "O'zbekiston Respublikasi Prezidentiga."
    ],
    "correct": 2
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Konstitutsiyaviy islohot» nima?",
    "options": [
      "Konstitutsiyani butunlay bekor qilish;",
      "Amaldagi Konstitutsiyaga davr talabidan kelib chiqib jiddiy o'zgartirish va qo'shimchalar kiritish jarayoni;",
      "Faqat yangi prezidentni saylash;",
      "Soliq qonunchiligini o'zgartirish."
    ],
    "correct": 1
  },
  {
    "q": "«Siyosiy mas’uliyat» tushunchasi hukumatga nisbatan qanday qo‘llaniladi?",
    "options": [
      "Faqat jinoyat sodir etganda javob berish;",
      "Hukumat o'z faoliyati bo'yicha parlament oldida hisobdorligi va ishonchsizlik votumi orqali iste'foga chiqishi mumkinligi;",
      "Siyosiy partiyaga a'zo bo'lish majburiyati;",
      "Faqat bayramlarda qatnashish."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlarining «birinchi avlodi»ga qaysi huquqlar kiradi?",
    "options": [
      "Ijtimoiy huquqlar;",
      "Fuqarolik va siyosiy huquqlar (shaxsiy daxlsizlik, so'z erkinligi va h.k.);",
      "Ekologik huquqlar;",
      "Raqamli huquqlar."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining Konstitutsiyasiga ko‘ra, davlat tili qaysi?",
    "options": [
      "Rus tili;",
      "O'zbek tili;",
      "Ingliz tili;",
      "Turkiy tillar."
    ],
    "correct": 1
  },
  {
    "q": "«Dunyoviy davlat»da din qanday maqomga ega?",
    "options": [
      "U butunlay taqiqlangan;",
      "U davlatdan ajratilgan va shaxsning shaxsiy ishi hisoblanadi;",
      "U majburiy maktab fanidir;",
      "Diniy peshvolar hukumatni boshqaradi."
    ],
    "correct": 1
  },
  {
    "q": "«Pretsedent» (precedent) huquqi asosan qaysi huquqiy oilaga xos?",
    "options": [
      "Roman-german huquq oilasiga;",
      "Anglo-sakson (umumiy huquq) oilasiga;",
      "Islom huquq oilasiga;",
      "Sotsialistik huquq oilasiga."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Vakillik» nima?",
    "options": [
      "Faqat pasport berish;",
      "Saylangan shaxslarning o'z saylovchilari (xalq) nomidan ish yuritish vakolati;",
      "Chet elda yashash huquqi;",
      "Siyosiy partiya tashkil qilish."
    ],
    "correct": 1
  },
  {
    "q": "«Inson huquqlari bo‘yicha Oliy komissar» boshqarmasi qaysi xalqaro tashkilot tarkibiga kiradi?",
    "options": [
      "BMT;",
      "YUNESKO;",
      "YUNISEF;",
      "Xalqaro Valyuta Jamg'armasi."
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquqda «Normativ-huquqiy hujjat» nima?",
    "options": [
      "Faqat bitta shaxs uchun chiqarilgan buyruq;",
      "Vakolatli davlat organi tomonidan qabul qilingan, umummajburiy qoidalarni o'z ichiga olgan rasmiy hujjat;",
      "Gazetadagi maqola;",
      "Xususiy korxonaning ichki nizomi."
    ],
    "correct": 1
  },
  {
    "q": "«Huquqiy davlat»ning eng muhim belgisi nima?",
    "options": [
      "Armiyaning kuchliligi;",
      "Qonun ustuvorligi va inson huquqlarining kafolatlanganligi;",
      "Siyosiy partiyalar sonining ko'pligi;",
      "Davlat boyligining taqsimlanishi."
    ],
    "correct": 1
  },
  {

"q": "O‘zbekiston Respublikasi Konstitutsiyasining 15-moddasida nima belgilangan?",
    "options": [
      "O'zbekiston Respublikasida Konstitutsiya va qonunlarning ustuvorligi so'zsiz tan olinishi;",
      "Prezident saylovi tartibi;",
      "Sudlar faoliyati;",
      "Tadbirkorlik erkinligi."
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquqda «Abstentsionizm» (absenteeism) nima?",
    "options": [
      "Saylovchilarning saylovlarda ishtirok etishdan qasddan bo'yin tovlovchi passivligi;",
      "Siyosiy partiyaga a'zo bo'lishdan bosh tortish;",
      "Konstitutsiyani o'zgartirishga qarshi chiqish;",
      "Sud majlislariga kelmaslik."
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasiga ko‘ra, parlament nazoratining shakli sifatida «Hukumat soati» qayerda o‘tkaziladi?",
    "options": [
      "Faqat Senatda;",
      "Qonunchilik palatasida;",
      "Vazirlar Mahkamasi binosida;",
      "Prezident administratsiyasida."
    ],
    "correct": 1
  },
  {
    "q": "«Mintaqaviy avtonomiya» (regional autonomy) qaysi turdagi unitar davlatlarga xos?",
    "options": [
      "Oddiy unitar davlatlarga;",
      "Murakkab (yoki desentralizatsiyalashgan) unitar davlatlarga (masalan, Ispaniya, Italiya);",
      "Federativ davlatlarga;",
      "Konfederatsiyalarga."
    ],
    "correct": 1
  },
  {
    "q": "Xalqaro tajribada «Konstitutsiyaviy monarxiya»ning qaysi turida monarx «hukmronlik qiladi, lekin boshqarmaydi»?",
    "options": [
      "Dualistik monarxiyada;",
      "Parlamentar monarxiyada;",
      "Absolyut monarxiyada;",
      "Teokratik monarxiyada."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Plebistsit» (plebiscite) referendumdan nimasi bilan farq qiladi?",
    "options": [
      "Hech qanday farqi yo'q;",
      "Plebistsit odatda hududning davlatga tegishliligi yoki shaxsga ishonch masalalarida o'tkaziladi;",
      "Plebistsit faqat yashirin o'tkaziladi;",
      "Referendum faqat urush paytida o'tkaziladi."
    ],
    "correct": 1
  },
  {
    "q": "«Ma’muriy-hududiy tuzilish» bo‘yicha O‘zbekiston qanday davlat hisoblanadi?",
    "options": [
      "Federativ davlat;",
      "Unitar davlat (Qoraqalpog'iston Respublikasini o'z ichiga olgan holda);",
      "Konfederatsiya;",
      "Assotsiatsiyalashgan davlat."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahririda «Miranda qoidasi» elementlari qaysi moddada aks etgan?",
    "options": [
      "15-modda;",
      "27-modda (shaxsni ushlash chog'ida uning huquqlari va ushlab turilish sabablari tushuntirilishi);",
      "45-modda;",
      "128-modda."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Senat» so‘zining lug‘aviy ma’nosi nima?",
    "options": [
      "Yoshlar kengashi;",
      "Oqsoqollar (keksa yoshdagilar) kengashi;",
      "Jangchilar ittifoqi;",
      "Bilimdonlar majlisi."
    ],
    "correct": 1
  },
  {
    "q": "«Partokratiya» (partiocracy) tushunchasi nimani anglatadi?",
    "options": [
      "Xalqning mutlaq hokimiyatini;",
      "Siyosiy partiyalarning davlat apparati ustidan to'liq nazorati va hukmronligini;",
      "Harbiy rejimni;",
      "Texnokratlar boshqaruvini."
    ],
    "correct": 1
  },
  {
    "q": "Inson huquqlari bo‘yicha «Diskriminatsiyaning barcha shakllariga barham berish» konvensiyasi qaysi sohaga qaratilgan?",
    "options": [
      "Faqat iqtisodiy munosabatlarga;",
      "Irqiy, jinsiy yoki diniy kamsitishlarni taqiqlashga;",
      "Faqat saylov jarayoniga;",
      "Sport musobaqalariga."
    ],
    "correct": 1
  },
  {
    "q": "«Konstitutsionalizm»ning asosiy g‘oyasi nima?",
    "options": [
      "Davlat hokimiyatini cheksiz qilish;",
      "Davlat hokimiyatini huquq (Konstitutsiya) orqali jilovlash va shaxs erkinligini himoya qilish;",
      "Faqat bitta rahbarning aytganini qilish;",
      "Barcha qonunlarni bekor qilish."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Asimmetrik federatsiya» nima?",
    "options": [
      "Barcha sub'ektlari teng davlat;",
      "Sub'ektlari turlicha huquqiy maqom va vakolatlarga ega bo'lgan federatsiya (masalan, Rossiya, Hindiston);",
      "Faqat unitar davlatlar birlashmasi;",
      "Davlat boshlig'i bo'lmagan ittifoq."
    ],
    "correct": 1
  },
  {

"q": "O‘zbekiston Respublikasi Oliy Majlisining har ikkala palatasi tarqatib yuborilgan taqdirda, yangi saylovlar necha oy ichida o‘tkazilishi kerak?",
    "options": [
      "1 oy;",
      "3 oy;",
      "6 oy;",
      "1 yil."
    ],
    "correct": 1
  },
  {
    "q": "«Huquqiy nigilizm» (legal nihilism) nima?",
    "options": [
      "Qonunlarni chuqur o'rganish;",
      "Qonunlarga bepisandlik bilan qarash, ularni tan olmaslik yoki inkor etish;",
      "Yangi qonunlarni ishlab chiqish;",
      "Sud qarorlariga so'zsiz bo'ysunish."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Konstitutsiyaviy moratoriy» nima?",
    "options": [
      "Konstitutsiyaga yangi modda qo'shish;",
      "Muayyan vaqt davomida Konstitutsiyaning ayrim normalari amal qilishini yoki unga o'zgartirish kiritishni to'xtatib turish;",
      "Konstitutsiyani bayram qilish;",
      "Prezidentning chet elga safarini cheklash."
    ],
    "correct": 1
  },
  {
    "q": "«Sekulyarizatsiya» (secularization) jarayoni nimani anglatadi?",
    "options": [
      "Jamiyat va davlat hayotining diniy ta'sirdan ozod bo'lishi va dunyoviylashishi;",
      "Diniy tashkilotlar sonini ko'paytirish;",
      "Faqat diniy ta'lim berish;",
      "Diniy bayramlarni davlat bayramiga aylantirish."
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining «ikkinchi avlodi»ga qaysi huquqlar kiradi?",
    "options": [
      "Siyosiy va shaxsiy huquqlar;",
      "Iqtisodiy, ijtimoiy va madaniy huquqlar (mehnat qilish, bilim olish, tibbiy yordam va h.k.);",
      "Tinchlik huquqi;",
      "Internetdan foydalanish huquqi."
    ],
    "correct": 1
  },
  {
    "q": "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasiga ko‘ra, davlat qanday iqtisodiyotni rivojlantirishni kafolatlaydi?",
    "options": [
      "Rejali iqtisodiyotni;",
      "Bozor munosabatlarini rivojlantirishga, halol raqobatga asoslangan iqtisodiyotni;",
      "Faqat davlat mulkiga asoslangan iqtisodiyotni;",
      "Yopiq iqtisodiy tizimni."
    ],
    "correct": 1
  },
  {
    "q": "«Majozy konstitutsiya» (fictitious constitution) nima?",
    "options": [
      "Juda chiroyli bezatilgan kitob;",
      "Qog'ozda demokratik bo'lib ko'ringan, lekin amalda jamiyatdagi real kuchlar nisbatiga mos kelmaydigan konstitutsiya;",
      "Faqat bolalar uchun yozilgan qonunlar;",
      "Xalqaro shartnomalarning bir qismi."
    ],
    "correct": 1
  },
  {
    "q": "Anglo-sakson huquqiy oilasida sudyaning roli qanday?",
    "options": [
      "U faqat qonunni ijro etadi;",
      "U sud pretsedenti orqali yangi huquq normalarini yaratishi (judge-made law) mumkin;",
      "U faqat prokurorga bo'ysunadi;",
      "Uning hech qanday vakolati yo'q."
    ],
    "correct": 1
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda «Legitimlik» (legitimacy) nima?",
    "options": [
      "Qonunlarning murakkabligi;",
      "Davlat hokimiyatining xalq tomonidan tan olinishi va qo'llab-quvvatlanishi;",
      "Faqat saylov kuni o'tkaziladigan tadbir;",
      "Prezidentning boyligi."
    ],
    "correct": 1
  },
  {
    "q": "«Inson huquqlari bo‘yicha milliy institutlar» (masalan, Milliy markaz yoki Ombudsman) asosiy vazifasi nima?",
    "options": [
      "Qonunlarni qabul qilish;",
      "Inson huquqlari sohasida monitoring o'tkazish, shikoyatlarni ko'rib chiqish va huquqiy madaniyatni oshirish;",
      "Jinoyatchilarni qamoqqa olish;",
      "Davlat byudjetini tasdiqlash."
    ],
    "correct": 1
  },
  {
    "q": "Konstitutsiyaviy huquqda «Norma-prinsip» nima?",
    "options": [
      "Aniq jazo belgilaydigan qoida;",
      "Huquqiy tartibga solishning asosiy yo'nalishini belgilaydigan umumiy qoida (masalan, qonun ustuvorligi);",
      "Faqat terminlar izohi;",
      "Soliq miqdori."
    ],
    "correct": 1
  },
  {
    "q": "«Suveren demokratik davlat»da oliy hokimiyat kimga tegishli?",
    "options": [
      "Armiya qo'mondoniga;",
      "Xalqqa;",
      "Faqat bitta vazirga;",
      "Xorijiy maslahatchilarga."
    ],
    "correct": 1





      
   },
    ]),
  },

    
    //////////////////////////////////////////////
    
    // topic3: {
//     title: "Konstitutsiya 3-Bo'lim",
//     questions: randomizeQuestions([






      
//    },
//     ]),
//   },
  









  
//////////////////////////////////////////////////////////////////////////////////////
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
