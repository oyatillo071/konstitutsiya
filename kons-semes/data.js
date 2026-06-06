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
  



}