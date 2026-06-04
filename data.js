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


      /////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
 topic1: {
    title: "inson huquqi 1-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Inson huquqlarining butun doktrinasi nimaga asoslanadi?",
    "options": [
      "Inson qadr-qimmati va ajralmas huquqlarning mavjudligiga",
      "Davlatning oliy irodasi va qonunchilik hujjatlari tizimiga",
      "Xalqaro shartnomalar va diplomatik kelishuvlar majmuiga",
      "Ijtimoiy shartnoma va jamoat tartibini saqlash ehtiyojiga"
    ],
    "correct": 0
  },
  {
    "q": "Dunyoda fuqarolarning oʻz davlati ustidan xalqaro sudga (Strasburgdagi sudga) toʻgʻridan-toʻgʻri shikoyat qilish tizimini yaratgan eng samarali mintaqaviy hujjat qaysi?",
    "options": [
      "Inson huquqlari va asosiy erkinliklarini himoya qilish toʻgʻrisidagi Yevropa konvensiyasi",
      "Inson va fuqaro huquqlari toʻgʻrisidagi umumevropa xartiyasi",
      "Evropa Ittifoqining fundamental huquqlar toʻgʻrisidagi deklaratsiyasi",
      "Evropa ijtimoiy xartiyasi va inson huquqlari statuti"
    ],
    "correct": 0
  },
  {
    "q": "Inson va xalqlar huquqlari boʻyicha Afrika xartiyasi yana qanday nom bilan mashhur?",
    "options": [
      "Banjul xartiyasi",
      "Malabo deklaratsiyasi",
      "Addis-Abeba hujjati",
      "Nayrobi konvensiyasi"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Barqaror rivojlanish maqsadlaridagi vazifalarning qanchasi inson huquqlari sohasidagi shartnomalardan kelib chiqqan?",
    "options": [
      "92 foizdan ortigʻi",
      "75 foizdan ortigʻi",
      "50 foizdan ortigʻi",
      "85 foizdan ortigʻi"
    ],
    "correct": 0
  },
  {
    "q": "Oilaviy nizolarni (masalan, bolaning ismini oʻzgartirish yoki ota-onadan qaysi biri bilan yashashini belgilash) sud yoki vasiylik organi tomonidan koʻrib chiqishda necha yoshga toʻlgan bolaning fikri majburiy tartibda hisobga olinishi shart?",
    "options": [
      "10 yoshga",
      "7 yoshga",
      "12 yoshga",
      "14 yoshga"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilardan qaysi biri jamoaviy huquqlarga kiradi?",
    "options": [
      "Rivojlanish va xalqlarning oʻz taqdirini oʻzi belgilash huquqi",
      "Vijdon erkinligi va diniy tashkilotlar tuzish huquqi",
      "Kasaba uyushmalariga birlashish va ish tashlash huquqi",
      "Tinch yigʻilishlar va ommaviy tadbirlar oʻtkazish huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Nogironlar huquqlari toʻgʻrisidagi xalqaro konvensiya qachon qabul qilingan?",
    "options": [
      "2006-yil dekabrda",
      "2008-yil mayda",
      "2004-yil noyabrda",
      "2010-yil martda"
    ],
    "correct": 0
  },
  {
    "q": "Insonning asosiy tabiiy huquq va erkinliklari…",
    "options": [
      "Insonning tabiatidan kelib chiqadigan va tugʻilganidan boshqa shaxslarga oʻtmaydigan huquqlardir",
      "Davlat tomonidan insonning ijtimoiy kelib chiqishiga qarab taqdim etiladigan huquqlardir",
      "Konstitutsiyaviy islohotlar natijasida insonlarga beriladigan huquq va imtiyozlardir",
      "Xalqaro hamjamiyat tomonidan jamoaviy ravishda tasdiqlanadigan normalardir"
    ],
    "correct": 0
  },
  {
    "q": "Bola huquqlari toʻgʻrisidagi xalqaro konvensiya qachon qabul qilingan?",
    "options": [
      "1989-yil 20-noyabrda",
      "1979-yil 10-dekabrda",
      "1991-yil 1-sentabrda",
      "1985-yil 15-oktabrda"
    ],
    "correct": 0
  },
  {
    "q": "Oʻrta asrlarda insonlarning huquqlari…",
    "options": [
      "Ijtimoiy tabaqalanish va imtiyozlar xarakteriga ega boʻlgan",
      "Tabiiy huquq tamoyillari asosida toʻliq tenglashtirilgan",
      "Xalqaro diniy normalar bilan universallashtirilgan",
      "Davlat hokimiyati tomonidan butunlay bekor qilingan"
    ],
    "correct": 0
  },
  {
    "q": "Ota-onaning oʻrnini bosuvchi shaxslar kimlar?",
    "options": [
      "Farzandlikka oluvchilar, vasiylar va homiylar",
      "Yaqin qarindoshlar, bobolar va buvilar",
      "Mahalla qoʻmitasi raislari va tarbiyachilar",
      "Ijtimoiy himoya organlari va pedagoglar"
    ],
    "correct": 0
  },
  {
    "q": "“Inson huquqlari” fani qachon paydo boʻlgan?",
    "options": [
      "Ikkinchi jahon urushidan keyin, BMT tashkil etilishi bilan",
      "Fransuz inqilobi davrida, deklaratsiya qabul qilinishi bilan",
      "Maʼrifatparvarlik davrida, tabiiy huquq inson huquqisi bilan",
      "Antik davrda, Rim huquqi tizimi shakllanishi bilan"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasi qaysi shaharda qabul qilingan?",
    "options": [
      "Parijda",
      "Nyu-Yorkda",
      "Jenevada",
      "Vashingtonda"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistonda “Inson huquqlari” deb nomlangan birinchi darslik nechanchi yilda nashr etilgan edi?",
    "options": [
      "1997-yilda",
      "1992-yilda",
      "2001-yilda",
      "2005-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Shaxs oʻz huquqlarini sud orqali himoya qilishga qachon haqli boʻladi?",
    "options": [
      "Huquqlari buzilgan yoki bunga real tahdid yuzaga kelgan har qanday vaziyatda",
      "Davlat organlari tomonidan unga maxsus ruxsatnoma berilgan taqdirda",
      "Nizo barcha sudgacha boʻlgan instansiyalarda koʻrib chiqilganidan keyin",
      "Xalqaro inson huquqlari tashkilotlari tavsiyasi mavjud boʻlganida"
    ],
    "correct": 0
  },
  {
    "q": "“Har bir inson oʻz shaxsini erkin kamol toptirish huquqiga ega”. Ushbu norma qaysi hujjatdan olingan?",
    "options": [
      "Inson huquqlari umumjahon deklaratsiyasidan",
      "Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro paktdan",
      "Iqtisodiy va ijtimoiy huquqlar toʻgʻrisidagi xalqaro paktdan",
      "Inson huquqlari boʻyicha Yevropa konvensiyasidan"
    ],
    "correct": 0
  },
  {
    "q": "Insonning asosiy huquq va erkinliklari cheklanishi mumkinmi?",
    "options": [
      "Qonunda nazarda tutilgan hollarda, demokratik jamiyat talablariga muvofiq cheklanishi mumkin",
      "Favqulodda holatlar eʼlon qilingan taqdirda ham mutlaqo cheklanishi mumkin emas",
      "Davlat xavfsizligini taʼminlash maqsadida ijro hokimiyati qarori bilan cheklanishi mumkin",
      "Sud organlarining ruxsatisiz hech qanday vaziyatda cheklanishiga yoʻl qoʻyilmaydi"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistonda evtanaziyaga ruxsat berilganmi?",
    "options": [
      "Sogʻliqni saqlash toʻgʻrisidagi qonunchilikka asosan taqiqlangan",
      "Bemorning va qarindoshlarining roziligi bilan amalga oshirilishi mumkin",
      "Tibbiy konsiliumning yakuniy xulosasi asosida ruxsat berilishi mumkin",
      "Sud organlarining maxsus ruxsatnomasi mavjud boʻlganda yoʻl qoʻyiladi"
    ],
    "correct": 0
  },
  {
    "q": "Preventiv chora deganda, …",
    "options": [
      "Huquqbuzarliklar va inson huquqlari buzilishining oldini olishga qaratilgan harakatlar tushuniladi",
      "Huquqi buzilgan shaxslarga yetkazilgan moddiy zararni qoplash tizimi tushuniladi",
      "Huquqbuzarlik sodir etgan shaxslarga nisbatan qoʻllaniladigan jazo choralari tushuniladi",
      "Sud qarorlarining majburiy ijrosini taʼminlashga qaratilgan mexanizm tushuniladi"
    ],
    "correct": 0
  },
  {
    "q": "Inson va fuqaro huquqlari deklaratsiyasi qayerda qabul qilingan?",
    "options": [
      "Fransiyada",
      "AQSHda",
      "Buyuk Britaniyada",
      "Shveytsariyada"
    ],
    "correct": 0
  },
  {
    "q": "“Urush va tinchlik huquqi toʻgʻrisida” asarining muallifi kim?",
    "options": [
      "Hugo Grotius",
      "Thomas Hobbes",
      "John Locke",
      "Jean-Jacques Rousseau"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Barqaror rivojlanish maqsadlariga erishish yoʻlida qanday prinsipga tayanilishi lozimligi belgilab qoʻyilgan edi?",
    "options": [
      "Hech kimni ortda qoldirmaslik tamoyiliga",
      "Iqtisodiy oʻsish ustuvorligi tamoyiliga",
      "Suverenitetni qatʼiy saqlash tamoyiliga",
      "Umumiy va teng masʼuliyat tamoyiliga"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari fanida «Inson huquqlarining uchinchi avlodi» kontseptsiyasining shakllanishi va uning ananaviy (birinchi va ikkinchi avlod) huquqlardan asosiy farqi nimada?",
    "options": [
      "Ular jamoaviy xarakterga ega boʻlib, xalqlar va birdamlik huquqlarini ifodalaydi",
      "Ular individual huquqlar boʻlib, shaxs daxlsizligini taʼminlashga qaratilgan",
      "Ular raqamli texnologiyalar va bioetika sohasidagi huquqlarni tartibga soladi",
      "Ular davlatning iqtisodiy va ijtimoiy majburiyatlarini belgilab beradi"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xavfsizlik Kengashi tarkibiga kiruvchi doimiy boʻlmagan 10 ta a’zo davlat Bosh Assambleya tomonidan necha yil muddatga saylanadi?",
    "options": [
      "2 yil muddatga",
      "3 yil muddatga",
      "5 yil muddatga",
      "1 yil muddatga"
    ],
    "correct": 0
  },
  {
    "q": "Toʻrtinchi avlod inson huquqlari davri qachon boshlangan?",
    "options": [
      "XX asrning oxiri va XXI asrning boshlarida, ilmiy-texnik taraqqiyot davrida",
      "Ikkinchi jahon urushidan keyin, xalqaro huquq tizimi shakllangan davrda",
      "XX asrning 70-yillarida, mustamlakachilik tizimi inqirozga uchragan davrda",
      "Fransuz inqilobidan keyin, fuqarolik huquqlari tan olingan davrda"
    ],
    "correct": 0
  },
  {
    "q": "BMT Inson huquqlari bo‘yicha kengashida barcha huquqlar bo‘yicha beriladigan kompleks hisobot muddati qancha?",
    "options": [
      "Universal davriy sharh doirasida har 4,5 yilda",
      "Inson huquqlari qoʻmitasiga har 3 yilda",
      "Maxsus maʼruzachilar tomonidan har yili",
      "Oliy komissar boshqarmasiga har 5 yilda"
    ],
    "correct": 0
  },
  {
    "q": "Begonalashtirilishi mumkin boʻlmagan asosiy huquq va erkinliklar…",
    "options": [
      "Shaxsdan qonuniy yoki jismoniy yoʻl bilan tortib olinishi mumkin boʻlmagan huquqlardir",
      "Davlat tomonidan shartli ravishda maʼlum muddatga beriladigan huquqlardir",
      "Sud qarori bilan cheklanishi yoki butunlay bekor qilinishi mumkin boʻlgan huquqlardir",
      "Fuqarolik oʻzgargan taqdirda boshqa davlatga oʻtadigan huquqlardir"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Mehnatkash-migrantlar va ularning oila a’zolari huquqlarini himoya qilish toʻgʻrisidagi konvensiyasi qachon qabul qilingan?",
    "options": [
      "1990-yil 18-dekabrda",
      "2000-yil 15-noyabrda",
      "1985-yil 10-dekabrda",
      "1995-yil 5-sentabrda"
    ],
    "correct": 0
  },
  {
    "q": "Inson va xalqlar huquqlari boʻyicha Afrika sudi qaysi hujjat asosida tashkil etilgan?",
    "options": [
      "Afrika xartiyasiga doir maxsus Protokol asosida",
      "Afrika Ittifoqining taʼsis akti va nizomi asosida",
      "Banjul deklaratsiyasi va xalqaro kelishuv asosida",
      "Qohira deklaratsiyasi va uning konvensiyasi asosida"
    ],
    "correct": 0
  },
  {
    "q": "Monitoring nima?",
    "options": [
      "Inson huquqlari holatini muntazam ravishda kuzatish va tahlil qilish tizimidir",
      "Huquqbuzarlik sodir etgan shaxslarni aniqlash va jazolash jarayonidir",
      "Xalqaro shartnomalarni davlat qonunchiligiga tatbiq etish mexanizmidir",
      "Inson huquqlari buzilishidan jabrlanganlarga huquqiy yordam koʻrsatishdir"
    ],
    "correct": 0
  }

 
    ]),
  },
/////////////////////////////////////////////////////
      // //////////////////////////////////////////////////////////////////////////////////
 topic2: {
    title: "inson huquqi 2-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Rimliklarning fikriga koʻra, huquq nechchiga boʻlinadi?",
    "options": [
      "Ikki qismga: ommaviy huquq va xususiy huquqqa",
      "Uch qismga: tabiiy huquq, millatlar huquqi va fuqarolik huquqiga",
      "Toʻrt qismga: yozma, ogʻzaki, diniy va dunyoviy huquqqa",
      "Besh qismga: imperatorlik, konsullik, xalq, jinoiy va fuqarolik huquqiga"
    ],
    "correct": 0
  },
  {
    "q": "Ikkinchi jahon urushidan keyin natsistlarning insoniyatga qarshi sodir etgan jinoyatlarini ja’zolash orqali xalqaro jinoiy huquq va inson huquqlarini himoya qilishda yangi davrni boshlab bergan tarixiy sud jarayoni qanday nomlanadi?",
    "options": [
      "Nyurnberg sud jarayoni",
      "Tokyo xalqaro tribunali",
      "Gaaga xalqaro sudi mahkamasi",
      "Strasburg maxsus harbiy sudi"
    ],
    "correct": 0
  },
  {
    "q": "Xotin-qizlarni kamsitishning barcha shakllariga barham berish to‘g‘risidagi konvensiyaga Oʻzbekiston qachon qoʻshilgan?",
    "options": [
      "1995-yil may oyida",
      "1992-yil dekabr oyida",
      "1998-yil avgust oyida",
      "2001-yil mart oyida"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xalqaro Sudi qayerda joylashgan?",
    "options": [
      "Gaagada (Niderlandiya)",
      "Jenevada (Shveytsariya)",
      "Nyu-Yorkda (AQSH)",
      "Venada (Avstriya)"
    ],
    "correct": 0
  },
  {
    "q": "Insonning oʻz tanasi ustidan huquqlarini amalga oshirishi doirasida, tibbiy yordam koʻrsatilishidan oldin shifokor bemorga muolajaning xavf-xatarlari va oqibatlarini tushuntirishi hamda undan maxsus hujjat olishi shart. Xalqaro va milliy tibbiyot huquqida ushbu majburiy tartib qanday nomlanadi?",
    "options": [
      "Xabardor qilingan ixtiyoriy rozilik",
      "Tibbiy aralashuvning deklarativ huquqi",
      "Bemor daxlsizligining kafolat hujjati",
      "Shifokor majburiyatining huquqiy hujjati"
    ],
    "correct": 0
  },
  {
    "q": "Amerika davlatlari tashkiloti nechta davlatni oʻz a’zoligiga qabul qilgan?",
    "options": [
      "35 ta davlatni",
      "28 ta davlatni",
      "42 ta davlatni",
      "50 ta davlatni"
    ],
    "correct": 0
  },
  {
    "q": "Inson asosiy huquq va erkinliklarining umumiyligi…",
    "options": [
      "Ularning barcha insonlarga irqi, jinsi va millatidan qatʼi nazar tegishli ekanligini bildiradi",
      "Ularning xalqaro tashkilotlar tomonidan davlatlar hududida majburiy joriy etilishini bildiradi",
      "Ularning ijtimoiy tuzum oʻzgarishi natijasida yangi normalar bilan almashishini bildiradi",
      "Ularning fuqarolarga konstitutsiyaviy normalar asosida davlat tomonidan berilishini bildiradi"
    ],
    "correct": 0
  },
  {
    "q": "«Insonlar ozod va teng huquqli boʻlib tugʻiladilar va shunday boʻlib qoladilar» degan tamoyilni ilgari surgan mashhur hujjat qaysi?",
    "options": [
      "Inson va fuqaro huquqlari deklaratsiyasi (Fransiya)",
      "Mustaqillik deklaratsiyasi (AQSH)",
      "Inson huquqlari umumjahon deklaratsiyasi (BMT)",
      "Ozodlikning buyuk xartiyasi (Angliya)"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Barqaror rivojlanish maqsadlari nechta vazifalarni oʻz ichiga qamrab olgan edi?",
    "options": [
      "169 ta vazifani",
      "150 ta vazifani",
      "121 ta vazifani",
      "192 ta vazifani"
    ],
    "correct": 0
  },
  {
    "q": "“Xalq deputatlari tuman (shahar) Kengashlari tomonidan xodimlarining soni yigirma nafardan ortiq boʻlgan tashkilotlarda xodimlar umumiy sonining … nogironligi boʻlgan shaxslarni ishga joylashtirish uchun ish oʻrinlarining eng kam soni belgilanadi”. Nuqtalar oʻrnini qonunchilik normalari asosida toʻldiring.",
    "options": [
      "Kamida uch foizi miqdorida",
      "Kamida besh foizi miqdorida",
      "Kamida toʻrt foizi miqdorida",
      "Kamida ikki foizi miqdorida"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining toʻrtinchi avlodi davrida qanday huquqlar rivojlangan?",
    "options": [
      "Ilmiy-texnik taraqqiyot bilan bogʻliq somatik, genetik va axborot huquqlari",
      "Mustamlakachilikdan ozod boʻlgan xalqlarning mustaqillik va iqtisodiy huquqlari",
      "Shaxs erkinligi, daxlsizlik hamda saylov huquqlarini oʻz ichiga olgan siyosiy huquqlar",
      "Mehnat qilish, ijtimoiy taʼminot hamda uy-joyga ega boʻlish sohasidagi huquqlar"
    ],
    "correct": 0
  },
  {
    "q": "Dunyodagi eng samarali mintaqaviy mexanizm hisoblanuvchi, fuqarolarga oʻz davlati ustidan toʻgʻridan-toʻgʻri shikoyat qilish imkoniyatini beruvchi va qarorlari ijro etilishi majburiy boʻlgan Yevropa inson huquqlari sudi qaysi shaharda joylashgan?",
    "options": [
      "Strasburgda",
      "Bryusselda",
      "Lyuksemburgda",
      "Gaagada"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Respublikasining amaldagi qonunchiligiga koʻra, somatik huquqlarning muhim qismi boʻlgan «Inson a’zolari va toʻqimalarini transplantatsiya qilish toʻgʻrisida»gi Qonunga muvofiq qaysi holatga mutlaqo yoʻl qoʻyilmaydi?",
    "options": [
      "Inson aʼzolarini va toʻqimalarini oldi-sotdi qilishga hamda ularni mamlakatdan tashqariga olib chiqishga",
      "Qarindosh boʻlmagan shaxslar oʻrtasida aʼzolar transplantatsiyasini amalga oshirishga",
      "Davlat tibbiyot muassasalarida donorlik aʼzolarini jarrohlik yoʻli bilan koʻchirishga",
      "Donorning tirikligida uning roziligi bilan aʼzolarini ixtiyoriy ravishda olishga"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi kun dunyoda “Xalqaro migrantlar kuni” sifatida nishonlanadi?",
    "options": [
      "18-dekabr",
      "10-dekabr",
      "20-noyabr",
      "15-oktabr"
    ],
    "correct": 0
  },
  {
    "q": "Insonning asosiy huquq va erkinliklari obyektiv ma’noda nimani bildiradi?",
    "options": [
      "Huquqiy normalar, qonunlar va xalqaro shartnomalarda mustahkamlangan qoidalar majmuini",
      "Shaxsning oʻz xohish-irodasi bilan amalga oshiradigan subyektiv imkoniyatlar darajasini",
      "Davlat organlarining fuqarolarga munosabatini belgilaydigan axloqiy meʼyorlarni",
      "Jamiyat taraqqiyoti natijasida shakllanadigan ijtimoiy odatlar va anʼanalar tizimini"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining butun doktrinasi nimaga asoslanadi?",
    "options": [
      "Inson qadr-qimmati va uning ajralmas huquqlariga",
      "Davlat hokimiyatining irodasi va uning qonunlariga",
      "Xalqaro sud tizimining qarorlari va mezonlariga",
      "Ijtimoiy shartnoma va jamoatchilik tartibiga"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistonda jinsiy hujayralarni kriokonservatsiya qilish (muzlatib saqlash) kimlarga va qaysi holatda ruxsat etiladi?",
    "options": [
      "Sogʻligʻiga zarar yetishi mumkin boʻlgan zararli ishlab chiqarishda ishlovchi yoki onkologik kasallikka chalingan shaxslarga",
      "Faqat nikohdan oʻtgan hamda farzand koʻrish yoshida boʻlgan er-xotinlarga davlat dasturi asosida",
      "Xorijga uzoq muddatli mehnat safariga yoki harbiy xizmatga ketayotgan barcha fuqarolarga",
      "Tibbiy koʻrsatkichlaridan qatʼi nazar, oʻz hisobidan reproduktiv salomatligini saqlashni xohlagan shaxslarga"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xalqaro Sudi necha nafar sudyadan iborat?",
    "options": [
      "15 nafar sudyadan",
      "11 nafar sudyadan",
      "9 nafar sudyadan",
      "21 nafar sudyadan"
    ],
    "correct": 0
  },
  {
    "q": "“Xalq deputatlari tuman (shahar) Kengashlari tomonidan xodimlarining soni yigirma nafardan ortiq boʻlgan tashkilotlarda xodimlar umumiy sonining … nogironligi boʻlgan shaxslarni ishga joylashtirish uchun ish oʻrinlarining eng kam soni belgilanadi”. Nuqtalar oʻrnini toʻldiring.",
    "options": [
      "Kamida uch foizi miqdorida",
      "Kamida besh foizi miqdorida",
      "Kamida toʻrt foizi miqdorida",
      "Kamida ikki foizi miqdorida"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi sana xalqaro inson huquqlari kuni sifatida nishonlanadi?",
    "options": [
      "10-dekabr",
      "24-oktabr",
      "20-noyabr",
      "1-sentabr"
    ],
    "correct": 0
  },
  {
    "q": "Amaldagi tartibga binoan, mehnat migrantlarining xorijda mehnat stajiga ega boʻlishi hamda kelajakda pensiya taminotidan foydalanishi uchun asosiy shart nima hisoblanadi?",
    "options": [
      "Oʻzbekiston Respublikasi budjetdan tashqari Pensiya jamgʻarmasiga ixtiyoriy ravishda yagona ijtimoiy toʻlovlarni toʻlab borishi",
      "Tashqi mehnat migratsiyasi agentligi roʻyxatidan oʻtishi hamda xorijiy ish beruvchi bilan shartnomaga ega boʻlishi",
      "Ishlayotgan davlatining soliq organlarida rasmiy roʻyxatdan oʻtishi va u yerda mahalliy sugʻurta badallarini toʻlashi",
      "Oʻzbekiston konsullik muassasalarida doimiy hisobda turishi hamda xorijiy valyutada oʻtkazmalarni amalga oshirishi"
    ],
    "correct": 0
  },
  {
    "q": "500 dan ortiq tilga tarjima qilingan inson huquqlari boʻyicha halqaro hujjatning necha yilligi nishonlanadi? (2026-yil holatiga koʻra)",
    "options": [
      "78 yilligi",
      "75 yilligi",
      "80 yilligi",
      "70 yilligi"
    ],
    "correct": 0
  },
  {
    "q": "2026-yilda Inson huquqlari umumjahon deklaratsiyasi qabul qilinganligining necha yilligi nishonlanadi?",
    "options": [
      "78 yilligi",
      "75 yilligi",
      "80 yilligi",
      "72 yilligi"
    ],
    "correct": 0
  },
  {
    "q": "BMTning 1994-yilda Palau mustaqil boʻlgach oʻz faoliyatini rasman toʻxtatgan organi qaysi?",
    "options": [
      "Vasiylik Kengashi",
      "Iqtisodiy va Ijtimoiy Kengash",
      "Xalqaro Huquq Komissiyasi",
      "Maxsus Siyosiy Qoʻmita"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari bo‘yicha Amerika sudi qarorlari a’zo davlatlar uchun qanday rol oʻynaydi?",
    "options": [
      "Yuridik jihatdan majburiy xarakterga ega",
      "Tavsiyaviy xarakterga ega",
      "Faqat iqtisodiy masalalarda majburiy hisoblanadi",
      "Maslahat berish huquqi bilan cheklangan"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari sohasida standartlar nimani bildiradi?",
    "options": [
      "Xalqaro huquqiy hujjatlarda belgilangan va davlatlar rioya qilishi lozim boʻlgan minimal talablar va mezonlarni",
      "Davlatlarning ichki qonunlarida belgilangan eng yuqori darajadagi huquqiy imtiyozlar tizimini",
      "Xalqaro sudlar tomonidan inson huquqlari buzilganda qoʻllaniladigan jazo va sanksiyalar meʼyorlarini",
      "Nodavlat tashkilotlar tomonidan ishlab chiqiladigan tavsiyaviy xarakterdagi axloqiy qoidalar toʻplamini"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy-maishiy va madaniy maqsadlardagi obektlarni qurish va rekonstruktsiya qilish loyihalarini foydalanishga qabul qilish boʻyicha davlat qabul komissiyasi tarkibiga qaysi tomon vakillarining majburiy kiritilishi belgilangan?",
    "options": [
      "Nogironligi boʻlgan shaxslarning jamoat birlashmalari vakillarining",
      "Mahalla fuqarolar yigʻini va ijtimoiy faollar guruhining",
      "Sogʻliqni saqlash vazirligi hamda sanitariya-epidemiologiya xizmati vakillarining",
      "Kambagʻallikni qisqartirish va bandlik vazirligi mutaxassislarining"
    ],
    "correct": 0
  },
  {
    "q": "Arab davlatlari ligasi qachon tashkil etilgan?",
    "options": [
      "1945-yil mart oyida",
      "1948-yil dekabr oyida",
      "1951-yil sentabr oyida",
      "1960-yil iyun oyida"
    ],
    "correct": 0
  },
  {
    "q": "Inson va fuqaro huquqlari deklaratsiyasi qachon qabul qilingan?",
    "options": [
      "1789-yilda",
      "1776-yilda",
      "1793-yilda",
      "1215-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistan Respublikasi fuqarolari, agar qonun hujjatlarida boshqacha qoida nazarda tutilmagan boʻlsa, tibbiy aralashuvga oʻz ixtiyori bilan rozilik berish yoki uni rad etish huquqiga ega. Qonunga koʻra, voyaga etgan va muomalaga layoqatli fuqaro oʻzining holati tufayli oʻz xohish-irodasini izhor etish imkoniyatiga ega boʻlmagan taqdirda, shoshilinch koʻrsatmalar boʻyicha tibbiy aralashuv (tibbiy konsilium oʻtkazish imkoni boʻlmagan vaziyatda) kim tomonidan amalga oshiriladi?",
    "options": [
      "Davolash-profilaktika muassasasining mansabdor shaxslari ishtirokida shifokor (navbatchi shifokor) tomonidan",
      "Bemorning qonuniy vakillari yoki uning eng yaqin oila aʼzolarining ogʻzaki roziligi olinganidan keyin jamoa tomonidan",
      "Sogʻliqni saqlash boshqarmasining navbatchi inspektori ruxsati bilan tez tibbiy yordam brigadasi tomonidan",
      "Sud yoki prokuratura organlarining maxsus rozilik hujjati rasmiylashtirilganidan soʻng jarroh tomonidan"
    ],
    "correct": 0
  }

 
    ]),
  },

// //////////////////////////////////////////////////////////////////////////////////
 topic3: {
    title: "inson huquqi 3-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Inson huquqlari qaysi vaqtdan etiboran har kimga tegishli boʻladi?",
    "options": [
      "Inson tugʻilgan lahzadan boshlab",
      "Fuqarolik pasportini olgan paytdan",
      "Muomalaga layoqatli deb topilganidan",
      "Balogʻat va voyaga yetish yoshidan"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari bo‘yicha Amerika sudiga toʻgʻridan-toʻgʻri murojaat qilish mumkinmi?",
    "options": [
      "Yoʻq, jismoniy shaxslar inson huquqlari boʻyicha Amerika komissiyasi orqali murojaat qiladilar",
      "Ha, har qanday shaxs komissiya nazoratidan oʻtmasdan toʻgʻridan-toʻgʻri sudga daʼvo kiritishi mumkin",
      "Yoʻq, sudga individual arizalar berilishi mintaqaviy xartiya tizimida umuman nazarda tutilmagan",
      "Ha, agar arizachi Amerika davlatlari tashkilotiga aʼzo mamlakatning oliy mukofotiga ega boʻlsa"
    ],
    "correct": 0
  },
  {
    "q": "Jinsiga koʻra farqlashlar mavjud boʻlmasa-da, belgilangan imtiyozlar qanday prinsiplarga muvofiq boʻlishi lozim?",
    "options": [
      "Ijtimoiy adolat va xotin-qizlarni amalda teng huquqlilikka erishtirish prinsiplariga",
      "Davlatning demografik siyosati va iqtisodiy barqarorligini taʼminlash prinsiplariga",
      "Kasaba uyushmalari talablari hamda jamoaviy shartnomalar mezonlari prinsiplariga",
      "Mehnat bozoridagi talab va taklif muvozanatini saqlashning qatʼiy prinsiplariga"
    ],
    "correct": 0
  },
  {
    "q": "Kosta-Rikaning San-Xosе shahrida joylashgan mintaqaviy sud organi qanday nomlanadi?",
    "options": [
      "Inson huquqlari boʻyicha Amerika sudi",
      "Amerika davlatlarining xalqaro arbitraji",
      "Lotin Amerikasi adolat mahkamasi",
      "Panamerika inson huquqlari tribunali"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Fuqarolik va siyosiy huquqlar to‘g‘risidagi xalqaro pakt hujjatiga qoʻshilgan?",
    "options": [
      "1995-yil 31-avgustda",
      "1992-yil 8-dekabrda",
      "1998-yil 1-mayda",
      "2001-yil 14-martda"
    ],
    "correct": 0
  },
  {
    "q": "Jazoni ijro etish muassasalarida saqlanayotgan bolalar ijtimoiy himoya muhtoj boʻlgan bolalar toifasiga kiradimi?",
    "options": [
      "Ha, ular qonunchilikka koʻra alohida ijtimoiy himoyaga muhtoj bolalar hisoblanadi",
      "Yoʻq, chunki ular jazoni oʻtash davrida toʻliq davlat taʼminotida va nazoratida boʻladilar",
      "Ha, biroq ularga nisbatan ijtimoiy yordam choralari sud hukmi bilan bekor qilinadi",
      "Yoʻq, ular huquqbuzarlik sodir etganliklari sababli ijtimoiy guruhlar tarkibidan chiqariladi"
    ],
    "correct": 0
  },
  {
    "q": "Zoʻravonlik nima?",
    "options": [
      "Gʻayriqonuniy harakatlar boʻlib, shaxsning hayoti, sogʻligʻi va erkinligiga tajovuz qilishdir",
      "Davlat organlari tomonidan qonun doirasida majburlash choralarining qoʻllanilishidir",
      "Faqat jismoniy kuch ishlatish orqali moddiy zarar yetkazish bilan bogʻliq harakatlardir",
      "Jamiyatda oʻrnatilgan axloq qoidalarini qasddan buzish va mensimaslik holatidir"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari boʻyicha hisobot tayyorlashda qanday bosqichlar ajratilib koʻrsatiladi?",
    "options": [
      "Maʼlumotlarni toʻplash, qayta ishlash, tahlil qilish va yakuniy tavsiyalar ishlab chiqish",
      "Sud qarorlarini oʻrganish, monitoring guruhini tuzish va xalqaro tashkilotlarga yuborish",
      "Qonunchilik loyihalarini tahlil qilish, ekspertiza oʻtkazish va vazirliklarga taqdim etish",
      "Aholini soʻrovdan oʻtkazish, statistik bazani yangilash va ommaviy axborot vositalarida chop etish"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari sohasidagi xalqaro standartlar nechta qismga boʻlinadi?",
    "options": [
      "Ikki qismga: universal (umumjahon) va mintaqaviy standartlarga",
      "Uch qismga: shaxsiy, siyosiy hamda ijtimoiy-iqtisodiy standartlarga",
      "Toʻrt qismga: deklarativ, konvensiyaviy, tavsiyaviy va majburiy standartlarga",
      "Besh qismga: davlat ichki normalari, qitʼaviy, konfessional, milliy va xalqaro standartlarga"
    ],
    "correct": 0
  },
  {
    "q": "“Inson – siyosiy mavjudot”. Ushbu soʻzlarning muallifi kim?",
    "options": [
      "Aristotel",
      "Platon",
      "Sokrat",
      "Sitseron"
    ],
    "correct": 0
  },
  {
    "q": "BMT Ustavining imzolanishi…",
    "options": [
      "1945-yil 26-iyunda San-Fransisko konferensiyasida amalga oshirilgan",
      "1945-yil 24-oktabrda Nyu-York shahrida yakuniy tasdiqlangan",
      "1948-yil 10-dekabrda Parij shahrida rasman eʼlon qilingan",
      "1944-yil 21-avgustda Dumbarton-Oks uchrashuvida imzolangan"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Barqaror rivojlanish maqsadlari nechanchi yilgacha boʻlgan davr uchun maqsadlarni belgilab bergan edi?",
    "options": [
      "2030-yilgacha boʻlgan davr uchun",
      "2025-yilgacha boʻlgan davr uchun",
      "2035-yilgacha boʻlgan davr uchun",
      "2050-yilgacha boʻlgan davr uchun"
    ],
    "correct": 0
  },
  {
    "q": "Qadimgi yunon shoiri Homer (Gomer) oʻz asarlarida “adolat” tushunchasini qanday ifodalagan?",
    "options": [
      "“Dike” tushunchasi orqali, yaʼni obʼektiv hayot tartibi va urf-odatlar bilan bogʻlagan",
      "“Nomos” atamasi orqali, yaʼni davlat tomonidan oʻrnatilgan yozma qonunlar bilan tenglashtirgan",
      "“Isonomiya” prinsipi orqali, yaʼni barcha fuqarolarning sud oldida tengligi deb tushuntirgan",
      "“Teologiya” asosi orqali, yaʼni xudolarning insonlarga bergan oliy mukofoti sifatida taʼriflagan"
    ],
    "correct": 0
  },
  {
    "q": "«Nogironligi boʻlgan shaxslarning huquqlari toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuni qachon qabul qilingan?",
    "options": [
      "2020-yil 15-oktabrda",
      "2018-yil 1-dekabrda",
      "2022-yil 8-martda",
      "2019-yil 20-noyabrda"
    ],
    "correct": 0
  },
  {
    "q": "“Davlat” va “Qonunlar” asarlarining muallifi kim?",
    "options": [
      "Platon",
      "Aristotel",
      "Sitseron",
      "Seneka"
    ],
    "correct": 0
  },
  {
    "q": "A’zo davlat yurisdiksiyasi ostidagi hech bir shaxs o‘lim ja’zosiga hukm qilinmasligi va bu ja’zo ijro etilmasligi kerakligini belgilovchi hujjatni aniqlang.",
    "options": [
      "Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro paktning Ikkinchi fakultativ bayonnomasi",
      "Inson huquqlari va asosiy erkinliklarini himoya qilish toʻgʻrisidagi konvensiyaning Birinchi bayonnomasi",
      "Inson huquqlari umumjahon deklaratsiyasining oʻlim jazosini taqiqlash haqidagi maxsus moddasi",
      "Qiynoqlarga hamda shafqatsiz muomalaga qarshi konvensiyaning qoʻshimcha xalqaro hujjati"
    ],
    "correct": 0
  },
  {
    "q": "Sitsеronning fikri boʻyicha qonunlar adolatli boʻlishining sharti nima?",
    "options": [
      "Qonunlar tabiat qonunlariga (tabiiy huquqqa) mos kelishi va adolat mezonlariga tayanishi",
      "Qonunlar monarxning mutloq irodasini va davlatning mustahkamligini ifoda etishi",
      "Qonunlar xalq vakillari tomonidan bir ovozdan qabul qilingan va tasdiqlangan boʻlishi",
      "Qonunlar diniy aqidalarga hamda qadimiy muqaddas anʼanalarga qatʼiy tayanishi"
    ],
    "correct": 0
  },
  {
    "q": "Nogironligi boʻlgan shaxsning vaqtincha mehnatga qobiliyatsizligi va tatillarda boʻlishi davrida ish beruvchining tashabbusi bilan mehnat shartnomasini bekor qilishga …",
    "options": [
      "Yoʻl qoʻyilmaydi, qonunchilikda belgilangan kafolatlar bunga toʻsqinlik qiladi",
      "Yoʻl qoʻyiladi, agar korxona iqtisodiy jihatdan ogʻir ahvolga kelib qolgan boʻlsa",
      "Yoʻl qoʻyiladi, kasaba uyushmasi qoʻmitasining roziligi oldindan olingan vaziyatlarda",
      "Yoʻl qoʻyilmaydi, uzoq muddatli kasallik holatlari bundan mustasno hisoblanadi"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Barqaror rivojlanish maqsadlari nechanchi yilda qabul qilingan?",
    "options": [
      "2015-yilda",
      "2010-yilda",
      "2018-yilda",
      "2012-yilda"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xalqaro Sudi tarkibidagi sudyalar soni nechta va ular Bosh Assambleya hamda Xavfsizlik Kengashi tomonidan necha yil muddatga saylanadilar?",
    "options": [
      "15 nafar sudya, 9 yil muddatga saylanadilar",
      "11 nafar sudya, 5 yil muddatga saylanadilar",
      "9 nafar sudya, 7 yil muddatga saylanadilar",
      "21 nafar sudya, 10 yil muddatga saylanadilar"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xalqaro Sudi sudyalari necha yilga saylanadi?",
    "options": [
      "9 yilga",
      "5 yilga",
      "7 yilga",
      "12 yilga"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagi vaziyatlarning qaysi birida shifokor bemor toʻgʻrisidagi ma’lumotlarni (shifokorlik sirini) bemorning yoki uning qonuniy vakilining roziligisiz uchinchi shaxslarga yoki tegishli organlarga taqdim etishga qonuniy haqli hisoblanadi?",
    "options": [
      "Yuqumli kasalliklar tarqalishi xavfi mavjud boʻlganda va surishtiruv, tergov organlarining qonuniy talabi boʻlganda",
      "Bemorning qarindoshlari uning sogʻligʻi holati toʻgʻrisida yozma ravishda maʼlumot soʻrab murojaat etganda",
      "Ommaviy axborot vositalari ijtimoiy ahamiyatga molik surishtiruv ishlarini olib borishni talab qilganda",
      "Tibbiy sugʻurta kompaniyalari shartnoma majburiyatlarini tekshirish uchun hujjatlarni soʻraganda"
    ],
    "correct": 0
  },
  {
    "q": "500 dan ortiq tilga tarjima qilingan inson huquqlari boʻyicha halqaro hujjatning necha yilligi joriy yilda (2026-yilda) nishonlanadi?",
    "options": [
      "78 yilligi",
      "75 yilligi",
      "80 yilligi",
      "72 yilligi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari boʻyicha xalqaro hujjatlarga (masalan, Ovedo konvensiyasiga) muvofiq, inson genomini oʻzgartirishga qaratilgan aralashuvga qaysi maqsadda ruxsat berilishi mumkin?",
    "options": [
      "Profilaktika, tashxis qoʻyish yoki davolash maqsadlarida",
      "Insonning jismoniy va intellektual qobiliyatlarini oshirish maqsadlarida",
      "Klonlashtirish texnologiyalarini rivojlantirish va sinab koʻrish maqsadlarida",
      "Kelajak avlodning tashqi koʻrinish belgilarini tanlash va oʻzgartirish maqsadlarida"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari va asosiy erkinliklarini himoya qilish bo‘yicha Yevropa konvensiyasi qaysi mintaqaviy mexanizmga kiradi?",
    "options": [
      "Evropa Kengashi tizimiga",
      "Evropa Ittifoqi tuzilmasiga",
      "Evropada Xavfsizlik va Hamkorlik Tashkilotiga",
      "Yevropa iqtisodiy hamjamiyati doirasiga"
    ],
    "correct": 0
  },
  {
    "q": "Birinchi avlod inson huquqlariga quyidagilardan qaysi biri kiradi?",
    "options": [
      "Yashash huquqi, shaxsiy daxlsizlik, fikr va vijdon erkinligi",
      "Mehnat qilish huquqi, munosib ish haqi olish va dam olish huquqi",
      "Sogʻliqni saqlash, tibbiy yordamdan foydalanish va taʼlim olish huquqi",
      "Tinch atrof-muhitda yashash hamda axborot olish erkinligi huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasi, Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro paktga koʻra, qaysi huquq mutlaq hisoblanadi va hech qanday favqulodda holat davrida ham cheklanishi mumkin emas?",
    "options": [
      "Qiynoqqa solinmaslik va inson qadr-qimmatini kamsituvchi muomaladan himoyalanish huquqi",
      "Tinch yigʻilishlar oʻtkazish va jamoat birlashmalariga aʼzo boʻlish huquqi",
      "Mamlakat hududida erkin harakatlanish va oʻziga yashash joyini tanlash huquqi",
      "Mulkdor boʻlish va oʻz mol-mulkiga mustaqil egalik qilish hamda tasarruf etish huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Insonning asosiy tabiiy huquq va erkinliklari…",
    "options": [
      "Ajralmas boʻlib, ulardan mahrum qilish yoki boshqa shaxslarga oʻtkazish mumkin emas",
      "Davlat tomonidan qonun qabul qilinganidan keyingina yuridik kuchga ega boʻladi",
      "Jamiyat iqtisodiy rivojlanish darajasiga qarab oʻzgaradigan oʻtkinchi normalardir",
      "Xalqaro sudlar qarori bilan toʻxtatilishi mumkin boʻlgan huquqlar majmuidir"
    ],
    "correct": 0
  },
  {
    "q": "AQShning Mustaqillik deklaratsiyasi qachon qabul qilingan?",
    "options": [
      "1776-yil 4-iyulda",
      "1789-yil 14-avgustda",
      "1791-yil 15-dekabrda",
      "1215-yil 15-iyunda"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasi qaysi shaharda qabul qilingan?",
    "options": [
      "Parijda",
      "Nyu-Yorkda",
      "Vashingtonda",
      "Jenevada"
    ],
    "correct": 0
  }

 
    ]),
  },

  // //////////////////////////////////////////////////////////////////////////////////
 topic4: {
    title: "inson huquqi 4-Bo'lim",
    questions: randomizeQuestions([

 
  {
    "q": "Arab davlatlari ligasi qachon tashkil etilgan?",
    "options": [
      "1945-yil 22-martda",
      "1948-yil 10-dekabrda",
      "1950-yil 4-noyabrda",
      "1944-yil 15-avgustda"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Barqaror rivojlanish maqsadlariga erishish yoʻlida qanday prinsipga tayanilishi lozimligi belgilab qoʻyilgan edi?",
    "options": [
      "Hech kimni ortda qoldirmaslik tamoyiliga",
      "Iqtisodiy oʻsish ustuvorligi tamoyiliga",
      "Suverenitetni qatʼiy saqlash tamoyiliga",
      "Umumiy va teng masʼuliyat tamoyiliga"
    ],
    "correct": 0
  },
  {
    "q": "ECOSOC qanday organ?",
    "options": [
      "BMTning Iqtisodiy va ijtimoiy kengashi hisoblanadi",
      "Yevropa Kengashining inson huquqlari qoʻmitasidir",
      "Xalqaro mehnat tashkilotining ijroiya kengashidir",
      "Atrof-muhitni muhofaza qilish xalqaro sudidir"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Mehnatkash-migrantlar va ularning oila a’zolari huquqlarini himoya qilish toʻgʻrisidagi konvensiyasi qachon qabul qilingan?",
    "options": [
      "1990-yil 18-dekabrda",
      "2000-yil 15-noyabrda",
      "1985-yil 10-dekabrda",
      "1995-yil 5-sentabrda"
    ],
    "correct": 0
  },
  {
    "q": "Xotin-qizlarga nisbatan qoʻllanilishi mumkin boʻlgan zoʻravonlikning qanday shakllari mavjud?",
    "options": [
      "Jismoniy, psixologik, iqtisodiy va jinsiy zoʻravonlik shakllari",
      "Huquqiy, siyosiy, maʼmuriy va ijtimoiy kamsitish koʻrinishlari",
      "Kasbiy, oilaviy, moddiy va hududiy cheklovlar majmui",
      "Siyosiy diskriminatsiya va mehnat huquqlarining cheklanishi"
    ],
    "correct": 0
  },
  {
    "q": "Dunyodagi eng samarali mintaqaviy mexanizm hisoblanuvchi, fuqarolarga oʻz davlati ustidan toʻgʻridan-toʻgʻri shikoyat qilish imkoniyatini beruvchi va qarorlari ijro etilishi majburiy boʻlgan Yevropa inson huquqlari sudi qaysi shaharda joylashgan?",
    "options": [
      "Strasburgda",
      "Bryusselda",
      "Lyuksemburgda",
      "Gaagada"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Nogironlar huquqlari toʻgʻrisidagi konvensiyasining eng asosiy xalqaro tamoyillaridan biri boʻlib, nogironligi boʻlgan shaxslarni jamiyat hayotidan ajratmaslik jarayoni qanday nomlanadi?",
    "options": [
      "Inklyuzivlik va jamiyatga integratsiya qilish",
      "Ijtimoiy segmentatsiya va moslashtirish",
      "Segregatsiya va maxsus ijtimoiy qoʻllab-quvvatlash",
      "Asvotsiatsiya va tibbiy reabilitatsiya tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining «uchinchi avlodi» tizimiga quyidagilardan qaysi biri kiradi?",
    "options": [
      "Tinchlik, rivojlanish va sogʻlom atrof-muhitga boʻlgan jamoaviy huquqlar",
      "Soʻz erkinligi, saylash va saylanish kabi siyosiy hamda shaxsiy huquqlar",
      "Mehnat qilish, munosib uy-joyga ega boʻlish va taʼlim olish huquqlari",
      "Bioetika, gen muhandisligi va raqamli makondagi somatik huquqlar"
    ],
    "correct": 0
  },
  {
    "q": "Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro pakt qachon qabul qilingan?",
    "options": [
      "1966-yil 16-dekabrda",
      "1948-yil 10-dekabrda",
      "1976-yil 23-martda",
      "1950-yil 4-noyabrda"
    ],
    "correct": 0
  },
  {
    "q": "Jismoniy, aqliy, sensor yoki ruhiy nuqsonlari barqaror boʻlgan shaxs huquqiy jihatdan qanday nomlanadi?",
    "options": [
      "Nogironligi boʻlgan shaxs",
      "Mehnatga qobiliyatsiz shaxs",
      "Imkoniyati cheklangan fuqaro",
      "Ijtimoiy himoyaga muhtoj shaxs"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xalqaro Sudi necha nafar sudyadan iborat?",
    "options": [
      "15 nafar sudyadan",
      "11 nafar sudyadan",
      "9 nafar sudyadan",
      "21 nafar sudyadan"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari qaysi vaqtdan etiboran har kimga tegishli boʻladi?",
    "options": [
      "Inson tugʻilgan lahzadan boshlab",
      "Fuqarolik pasportini olgan paytdan",
      "Muomalaga layoqatli deb topilganidan",
      "Balogʻat va voyaga yetish yoshidan"
    ],
    "correct": 0
  },
  {
    "q": "Inson va fuqaro huquqlari deklaratsiyasi qachon qabul qilingan?",
    "options": [
      "1789-yilda",
      "1776-yilda",
      "1793-yilda",
      "1215-yilda"
    ],
    "correct": 0
  },
  {
    "q": "Tabiiy holatda barcha kishilarning tengligi toʻgʻrisidagi gʻoya muallifi kim?",
    "options": [
      "John Locke",
      "Thomas Hobbes",
      "Aristotel",
      "Platon"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilarning qaysi biri Inson huquqlari umumjahon deklaratsiyasi bilan birga «Inson huquqlari toʻgʻrisidagi xalqaro Bill» tarkibini tashkil etadi?",
    "options": [
      "Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro pakt hamda uning Fakultativ bayonnomalari",
      "Inson huquqlari va asosiy erkinliklarini himoya qilish toʻgʻrisidagi Yevropa konvensiyasi",
      "Bola huquqlari toʻgʻrisidagi xalqaro konvensiya va uning xalqaro qoʻshimcha bayonnomalari",
      "Xotin-qizlarni kamsitishning barcha shakllariga barham berish toʻgʻrisidagi konvensiya"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro pakt hujjatiga qoʻshilgan?",
    "options": [
      "1995-yil 31-avgustda",
      "1992-yil 8-dekabrda",
      "1998-yil 1-mayda",
      "2001-yil 14-martda"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi vaqtda Oʻzbekistonda oʻlim jazosi bekor qilingan edi?",
    "options": [
      "2008-yil 1-yanvardan boshlab",
      "2005-yil 1-sentabrdan boshlab",
      "2010-yil 1-dekabrdan boshlab",
      "2003-yil 8-dekabrdan boshlab"
    ],
    "correct": 0
  },
  {
    "q": "Nogironlar huquqlari toʻgʻrisidagi xalqaro konvensiya qachon qabul qilingan?",
    "options": [
      "2006-yil dekabrda",
      "2008-yil mayda",
      "2004-yil noyabrda",
      "2010-yil martda"
    ],
    "correct": 0
  },
  {
    "q": "Ayollarning siyosiy huquqlari toʻgʻrisidagi konvensiya qachon qabul qilingan?",
    "options": [
      "1952-yil dekabrda",
      "1948-yil oktabrda",
      "1966-yil martda",
      "1979-yil noyabrda"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarida ularning jinsiga qarab farqlar mavjudmi?",
    "options": [
      "Yoʻq, inson huquqlari barcha uchun umumiy va jinsiy belgilarga koʻra farqlanmaydi",
      "Ha, erkaklar va ayollar uchun xalqaro huquqda alohida huquqlar tizimi oʻrnatilgan",
      "Ha, ijtimoiy-siyosiy sohalarda jinsiy mansublikka qarab huquqlar hajmi cheklanadi",
      "Yoʻq, biroq xalqaro sud qarorlarida jinsiy munosabatlar ustuvor mezon hisoblanadi"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi vaqtda inson huquqlari boʻyicha nechta mintaqaviy mexanizm tizimlari ishlamoqda?",
    "options": [
      "Uchta mintaqaviy tizim (Yevropa, Amerika va Afrika tizimlari)",
      "Ikkita mintaqaviy tizim (Evropa va Osiyo-Tinch okeani tizimlari)",
      "Toʻrtta mintaqaviy tizim (Yevropa, Amerika, Afrika va Arab tizimlari)",
      "Besh guruh mintaqaviy konvensiyalar majmui va xalqaro institutlar"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilardan qaysi biri shaxsiy huquqlarga kirmaydi?",
    "options": [
      "Tinch yigʻilishlar oʻtkazish va uyushmalarga birlashish huquqi",
      "Yashash huquqi va shaxsiy daxlsizlik kafolatlari",
      "Fikr, vijdon va diniy eʼtiqod erkinligi huquqi",
      "Inson qadr-qimmatini kamsituvchi muomaladan himoyalanish"
    ],
    "correct": 0
  },
  {
    "q": "“Nogironligi boʻlgan shaxslar uchun oliy talim muassasalarida … qoʻshimcha qabul kvotasi ajratiladi”. Nuqtalar oʻrnini qonunchilik normalari asosida toʻldiring.",
    "options": [
      "Davlat granti asosida ikki foizli",
      "Umumiy qabul sonidan besh foizli",
      "Toʻlov-kontrakt asosida uch foizli",
      "Maxsus yoʻnalishlar boʻyicha bir foizli"
    ],
    "correct": 0
  },
  {
    "q": "BMT tomonidan qabul qilingan Barqaror rivojlanish maqsadlari oʻz ichiga nechta maqsadni qamrab oladi?",
    "options": [
      "17 ta maqsadni",
      "15 ta maqsadni",
      "21 ta maqsadni",
      "10 ta maqsadni"
    ],
    "correct": 0
  },
  {
    "q": "Bola huquqlari toʻgʻrisidagi xalqaro konvensiya qachon qabul qilingan?",
    "options": [
      "1989-yil 20-noyabrda",
      "1979-yil 10-dekabrda",
      "1991-yil 1-sentabrda",
      "1985-yil 15-oktabrda"
    ],
    "correct": 0
  },
  {
    "q": "Aristotelning fikriga koʻra, adolat necha turli boʻladi?",
    "options": [
      "Ikki turli: taqsimlovchi va tenglashtiruvchi adolat",
      "Uch turli: qonuniy, tabiiy va axloqiy adolat",
      "Toʻrt turli: ilohiy, insoniy, siyosiy va jinoiy adolat",
      "Bir turli: qonun oldidagi mutloq tenglik adolati"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Xalqaro Sud organi qayerda joylashgan?",
    "options": [
      "Gaagada (Niderlandiya)",
      "Jenevada (Shveytsariya)",
      "Nyu-Yorkda (AQSH)",
      "Venada (Avstriya)"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistonda inklyuziv talimni tashkil etish tartibini belgilash boʻyicha qaysi organ vakolatli hisoblanadi?",
    "options": [
      "Maktabgacha va maktab taʼlimi vazirligi",
      "Oliy taʼlim, fan va innovatsiyalar vazirligi",
      "Sogʻliqni saqlash vazirligi tibbiy ekspertizasi",
      "Ijtimoiy himoya milliy agentligi kengashi"
    ],
    "correct": 0
  },
  {
    "q": "Ota-onaning oʻrnini bosuvchi shaxslar kimlar?",
    "options": [
      "Farzandlikka oluvchilar, vasiylar va homiylar",
      "Yaqin qarindoshlar, bobolar va buvilar",
      "Mahalla qoʻmitasi raislari va tarbiyachilar",
      "Ijtimoiy himoya organlari va pedagoglar"
    ],
    "correct": 0
  },
  {
    "q": "Jinsiga koʻra farqlashlar mavjud boʻlmasa-da, belgilangan imtiyozlar qanday prinsiplarga muvofiq boʻlishi lozim?",
    "options": [
      "Ijtimoiy adolat va xotin-qizlarni amalda teng huquqlilikka erishtirish prinsiplariga",
      "Davlatning demografik siyosati va iqtisodiy barqarorligini taʼminlash prinsiplariga",
      "Kasaba uyushmalari talablari hamda jamoaviy shartnomalar mezonlari prinsiplariga",
      "Mehnat bozoridagi talab va taklif muvozanatini saqlashning qatʼiy prinsiplariga"
    ],
    "correct": 0
  }

    ]),
  },

      ///////////////////////////////////////////////////////////////////////////////


  // //////////////////////////////////////////////////////////////////////////////////
 topic5: {
    title: "inson huquqi 5-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Ayollarning siyosiy huquqlari toʻgʻrisidagi xalqaro konvensiyaga Oʻzbekiston qachon qoʻshilgan?",
    "options": [
      "1997-yil 30-avgustda Oliy Majlis qarori bilan",
      "1995-yil 31-avgustda Oliy Majlis qarori bilan",
      "1992-yil 8-dekabrda Oliy Majlis qarori bilan",
      "2001-yil 24-avgustda Oliy Majlis qarori bilan"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davrdan birinchi avlod inson huquqlari shakllangan?",
    "options": [
      "XVII–XVIII asrlardagi burjua-demokratik inqiloblari davridan",
      "Ikkinchi jahon urushidan keyingi xalqaro tartibotlar davridan",
      "Antik davr polislaridagi dastlabki huquqiy islohotlar davridan",
      "XIX asr oxiridagi ijtimoiy-iqtisodiy harakatlar davridan"
    ],
    "correct": 0
  },
  {
    "q": "“Bolalar” va “yoshlar” tushunchalari yuridik jihatdan tutashadigan oʻzaro umumiy nuqtani toping.",
    "options": [
      "14 yoshdan 18 yoshgacha boʻlgan davrdagi huquqiy subyektlikda",
      "7 yoshdan 14 yoshgacha boʻlgan qisman muomala layoqatida",
      "16 yoshdan 22 yoshgacha boʻlgan mehnat huquqi subyektligida",
      "18 yoshdan 30 yoshgacha boʻlgan toʻliq ijtimoiy himoya davrida"
    ],
    "correct": 0
  },
  {
    "q": "Ayollarning siyosiy huquqlari toʻgʻrisidagi konvensiya xalqaro miqyosda qachon qabul qilingan?",
    "options": [
      "1952-yil 20-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1948-yil 10-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1979-yil 18-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1966-yil 16-dekabrda BMT Bosh Assambleyasi tomonidan"
    ],
    "correct": 0
  },
  {
    "q": "BMT Bosh kotibi qonunchilikka muvofiq necha yil muddatga saylanadi?",
    "options": [
      "5 yil muddatga (yana bir marta qayta saylanish huquqi bilan)",
      "4 yil muddatga (yana bir marta qayta saylanish huquqi bilan)",
      "7 yil muddatga (qayta saylanish huquqi cheklangan holda)",
      "6 yil muddatga (qayta saylanish huquqi berilmagan holda)"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Iqtisodiy, ijtimoiy va madaniy huquqlar bo‘yicha qo‘mitasi qaysi shaharda joylashgan?",
    "options": [
      "Jeneva shahrida (Shveytsariya)",
      "Nyu-York shahrida (AQSh)",
      "Strasburg shahrida (Fransiya)",
      "Gaaga shahrida (Niderlandiya)"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqil va tizimli “Inson huquqlari” fani qachon paydo boʻlgan?",
    "options": [
      "Ikkinchi jahon urushidan keyin, BMT tizimi shakllangan davrda",
      "Birinchi jahon urushidan keyin, Millatlar Ligasi davrida",
      "XIX asr oʻrtalarida, xalqaro gumanitar huquq paydo boʻlganda",
      "Oʻrta asrlar oxirida, tabiiy huquqiy nazariyalar davrida"
    ],
    "correct": 0
  },
  {
    "q": "Nima Oʻzbekiston Respublikasi tomonidan nogironligi boʻlgan shaxslarning shaxslararo muomala vositasi sifatida etirof etiladi?",
    "options": [
      "Imo-ishora tili va Brayl alifbosi",
      "Maxsus daktil-nutqiy matn shakllari",
      "Muqobil audiologik aloqa vositalari",
      "Raqamlashtirilgan ovozli interfeyslar"
    ],
    "correct": 0
  },
  {
    "q": "Ayollar huquqlari boʻyicha Pekin deklaratsiyasi va Harakatlar platformasida nechta muhim strategik muammoli soha ajratib koʻrsatilgan?",
    "options": [
      "12 ta strategik muammoli soha",
      "10 ta strategik muammoli soha",
      "15 ta strategik muammoli soha",
      "8 ta strategik muammoli soha"
    ],
    "correct": 0
  },
  {
    "q": "Iqtisodiy, ijtimoiy va madaniy huquqlar toʻgʻrisidagi xalqaro paktga Oʻzbekiston Respublikasi qachon qoʻshilgan?",
    "options": [
      "1995-yil 31-avgustda Oliy Majlis qarori bilan",
      "1992-yil 8-dekabrda Oliy Majlis qarori bilan",
      "1997-yil 30-avgustda Oliy Majlis qarori bilan",
      "2000-yil 21-avgustda Oliy Majlis qarori bilan"
    ],
    "correct": 0
  },
  {
    "q": "Jazoni ijro etish muassasalarida saqlanayotgan bolalar ijtimoiy himoyaga muhtoj boʻlgan bolalar toifasiga kiradimi?",
    "options": [
      "Ha, qonunchilikda ular ijtimoiy himoyaga muhtoj bolalar sirasiga kiritilgan",
      "Yoʻq, ular faqat maxsus penitensiar muassasa nazoratidagi toifaga kiradi",
      "Faqat sud tomonidan ularga nisbatan alohida kafolatlar belgilangan taqdirdagina",
      "Yoʻq, chunki ular toʻliq davlat taʼminotida va profilaktika nazoratida boʻladi"
    ],
    "correct": 0
  },
  {
    "q": "Sobiq Yugoslaviyada sodir etilgan jinoyatlar boʻyicha xalqaro tribunalni (MTHY) tashkil etish toʻgʻrisida qaysi organ qaror qabul qilgan?",
    "options": [
      "BMT Xavfsizlik Kengashi (Rezolyutsiya asosida)",
      "BMT Bosh Assambleyasi (Konvensiya asosida)",
      "Xalqaro Sud (Maxsus ajrim va statut asosida)",
      "Yevropa Ittifoqi Kengashi (Direktiva asosida)"
    ],
    "correct": 0
  },
  {
    "q": "Hokimiyatning boʻlinish prinsipi qaysi klassik asarda toʻliq rivojlantirilgan va tizimlashtirilgan?",
    "options": [
      "Sharl Lui Monteskyoning “Qonunlarning ruhi haqida” asarida",
      "Jon Lokkning “Fuqarolik boshqaruvi haqida ikkita risola” asarida",
      "Jan-Jak Russoning “Ijtimoiy shartnoma” nomli asarida",
      "Tomas Gobbsning “Leviafan yoki materiya” nomli asarida"
    ],
    "correct": 0
  },
  {
    "q": "Arab davlatlari ligasining (ADL) doimiy markaziy qarorgohi qayerda joylashgan?",
    "options": [
      "Qohira shahrida (Misr Arab Respublikasi)",
      "Ar-Riyod shahrida (Saudiya Arabistoni Podshohligi)",
      "Bagʻdod shahrida (Iroq Respublikasi davlati)",
      "Tunis shahrida (Tunis Respublikasi davlati)"
    ],
    "correct": 0
  },
  {
    "q": "Ayollar huquqlari boʻyicha Pekin deklaratsiyasi nechanchi yilda qabul qilingan?",
    "options": [
      "1995-yilda Toʻrtinchi butunjahon ayollar konferensiyasida",
      "1985-yilda Uchinchi butunjahon ayollar konferensiyasida",
      "2000-yilda BMTning Mingyillik sammiti doirasida",
      "1975-yilda Birinchi butunjahon ayollar konferensiyasida"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi vaqtda inson huquqlari boʻyicha dunyoda nechta mintaqaviy mexanizm tizimlari muvaffaqiyatli ishlamoqda?",
    "options": [
      "3 ta (Yevropa, Amerika va Afrika mintaqaviy tizimlari)",
      "4 ta (Yevropa, Amerika, Afrika va Osiyo tizimlari)",
      "2 ta (Yevropa hamda Amerika qitʼalararo tizimlari)",
      "5 ta (Dunyoning barcha beshta qitʼalararo tizimlari)"
    ],
    "correct": 0
  },
  {
    "q": "Yevropa Kengashi (Council of Europe) qachon tashkil etilgan?",
    "options": [
      "1949-yil 5-mayda London shartnomasiga muvofiq",
      "1950-yil 4-noyabrda Rim konvensiyasiga muvofiq",
      "1957-yil 25-martda Rim shartnomasiga muvofiq",
      "1945-yil 24-oktabrda BMT Ustaviga muvofiq"
    ],
    "correct": 0
  },
  {
    "q": "Kimlar uchun taʼlim tashkilotlarida inklyuziv taʼlim faoliyati tashkil etiladi?",
    "options": [
      "Jismoniy, aqliy, sensor yoki psixik rivojlanishida nuqsonlari boʻlgan bolalar uchun",
      "Faqat ijtimoiy himoyaga muhtoj va kam taʼminlangan oilalarning farzandlari uchun",
      "Uzoq muddatli statsionar davolanishda boʻlgan hamda surunkali kasal bolalar uchun",
      "Ijtimoiy moslashuvi qiyin boʻlgan va xulq-atvorida ogʻishish bor bolalar uchun"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari tarixidagi ilk hujjatlardan biri – MAGNA CHARTA qayerda yaratilgan?",
    "options": [
      "Angliyada (qirol Ionn Yeriziz davrida)",
      "Fransiyada (buyuk islohotlar davrida)",
      "Rimda (respublika qonunchiligi davrida)",
      "Gretsiyada (Afina demokratiyasi davrida)"
    ],
    "correct": 0
  },
  {
    "q": "Iqtisodiy, ijtimoiy va madaniy huquqlar toʻgʻrisidagi xalqaro pakt xalqaro miqyosda qachon qabul qilingan?",
    "options": [
      "1966-yil 16-dekabrda BMT Bosh Assambleyasi rezolyutsiyasi bilan",
      "1948-yil 10-dekabrda BMT Bosh Assambleyasi rezolyutsiyasi bilan",
      "1976-yil 3-yanvarda BMT Bosh Assambleyasi rezolyutsiyasi bilan",
      "1989-yil 20-noyabrda BMT Bosh Assambleyasi rezolyutsiyasi bilan"
    ],
    "correct": 0
  },
  {
    "q": "Xotin-qizlarni kamsitishning barcha shakllariga barham berish toʻgʻrisidagi (CEDAW) konvensiya qachon qabul qilingan?",
    "options": [
      "1979-yil 18-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1966-yil 16-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1981-yil 3-sentabrda BMT Bosh Assambleyasi tomonidan",
      "1993-yil 25-iyunda Butunjahon inson huquqlari konferensiyasida"
    ],
    "correct": 0
  },
  {
    "q": "Amaldagi milliy qonunchilikka koʻra, yuridik jihatdan yetim bola deb kimga aytiladi?",
    "options": [
      "Otasi ham, onasi ham vafot etgan yoki ularni oʻlik deb eʼlon qilingan bolaga",
      "Ota-onasi ota-onalik huquqidan mahrum etilgan yoki cheklangan bolalarga",
      "Ota-onasi muomalaga layoqatsiz deb topilgan yoki bedarak yoʻqolgan bolaga",
      "Vasiylik va homiylik organlari tomonidan davlat qaramogʻiga olingan bolaga"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari rivojlanishining uchinchi avlodi (kollektiv huquqlar) qaysi davrdan boshlangan?",
    "options": [
      "Ikkinchi jahon urushidan keyin (mustamlakachilik tizimi parchalangan davrdan)",
      "XIX asr oxiri va XX asr boshlaridan (ishchilar harakati kuchaygan davrdan)",
      "XX asrning 80-yillaridan (globallashuv va ekologik inqirozlar davridan)",
      "XVII asr burjua inqiloblaridan (shaxsiy daxlsizlik gʻoyasi chiqqan davrdan)"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistonda “Inson huquqlari” deb nomlangan birinchi tizimli darslik nechanchi yilda nashr etilgan?",
    "options": [
      "1997-yilda (Akmal Saidov muallifligi va tahriri ostida)",
      "1992-yilda (Konstitutsiya qabul qilinganidan soʻng darslik sifatida)",
      "1995-yilda (Inson huquqlari milliy markazi tashkil etilgan yilda)",
      "2001-yilda (Oliy taʼlim muassasalari dasturlari talablariga moslab)"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarini himoya qilishning klassik «Habeas Korpus» institutining bosh maqsadi nimadan iborat?",
    "options": [
      "Sud qarorisiz qamoqqa olish va erkinlikdan mahrum etishdan himoya qilish",
      "Sudlanuvchining professional himoyachi (advokat) bilan taʼminlanishini kafolatlash",
      "Mahkumlarga nisbatan gumanistik munosabat va qamoq sharoitlarini yaxshilash",
      "Fuqarolarning shaxsiy mulki daxlsizligini asossiz musodara etishdan asrash"
    ],
    "correct": 0
  },
  {
    "q": "BMT Ustaviga muvofiq tashkilotning asosiy bosh organlari soni nechta?",
    "options": [
      "6 ta asosiy bosh organ",
      "5 ta asosiy bosh organ",
      "7 ta asosiy bosh organ",
      "4 ta asosiy bosh organ"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari boʻyicha xalqaro va milliy hisobotlarni tayyorlashda qanday universal bosqichlar ajratiladi?",
    "options": [
      "Maʼlumot yigʻish, tahlil qilish, matn loyihasini tuzish va maslahatlashuv",
      "Monitoring oʻtkazish, kamchiliklarni aniqlash va qonuniy choralar koʻrish",
      "Siyosiy tahlil, xalqaro ekspertiza va yakuniy tasdiqlash jarayonlari",
      "Sotsiologik soʻrov, huquqiy baholash va xalqaro tashkilotlarga taqdim etish"
    ],
    "correct": 0
  },
  {
    "q": "Huquqiy manbalarga koʻra, aktiv saylov huquqi tushunchasiga berilgan eng aniq taʼrifni toping.",
    "options": [
      "Fuqarolarning vakillik organlariga saylash va ovoz berishda qatnashish huquqi",
      "Fuqarolarning davlat hokimiyati organlariga oʻz nomzodini koʻrsatish huquqi",
      "Siyosiy partiyalarning saylov kampaniyalarini oʻtkazish va boshqarish huquqi",
      "Saylov komissiyalari tarkibida faoliyat yuritish va natijalarni tasdiqlash huquqi"
    ],
    "correct": 0
  },
  {
    "q": "BMTning mutlaq teng ovoz huquqi (1 davlat — 1 ovoz prinsipi) asosida barcha aʼzolar vakillik qiladigan organi qaysi?",
    "options": [
      "BMT Bosh Assambleyasi",
      "BMT Xavfsizlik Kengashi",
      "BMT Iqtisodiy va Ijtimoiy Kengashi",
      "BMT Vasiylik Kengashi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari boʻyicha Osiyo mintaqaviy tizimi huquqiy va institutsional jihatdan qaysi holatda?",
    "options": [
      "Yaxlit universal Osiyo tizimi mavjud emas, faqat submintaqaviy mexanizmlar bor",
      "1993-yilgi Bangkok deklaratsiyasidan keyin muntazam va yaxlit ishlab kelmoqda",
      "BMTning Maxsus komissiyasi doirasida qitʼaviy sud organi shaklida ishlaydi",
      "Arab davlatlari ligasi va MDH inson huquqlari tizimi bilan toʻliq birlashgan"
    ],
    "correct": 0
  },
  {
    "q": "Amaldagi qonunchilik normalariga koʻra, bolaning qonuniy vakillari tarkibiga kimlar kiradi?",
    "options": [
      "Ota-onalar, farzandlikka olganlar, vasiylar va homiylar",
      "Ota-onalar, yaqin qarindoshlar va taʼlim muassasasi rahbarlari",
      "Faqat biologik ota-onalar hamda qonuniy sud belgilagan vasiylar",
      "Ota-onalar, buvilar, bobolar va voyaga yetmaganlar ishlari boʻyicha inspektorlar"
    ],
    "correct": 0
  },
  {
    "q": "Nogironligi boʻlgan shaxslarga koʻrsatiladigan ijtimoiy yordamning qonuniy turini aniqlang.",
    "options": [
      "Pul toʻlovlari, texnik vositalar, maishiy va transport xizmatlari",
      "Faqat kafolatlangan tibbiy sugʻurta va sanatoriyalarga bepul yoʻllanmalar",
      "Kafolatlangan uy-joy bilan taʼminlash va barcha soliqlardan ozod etish",
      "Har oylik nafaqalar hamda ixtisoslashtirilgan oziq-ovqat mahsulotlari toʻplami"
    ],
    "correct": 0
  },
  {
    "q": "Yevropa Kengashi tomonidan yaratilgan inson huquqlari standartlari qaysi toifadagi standartlarga kiradi?",
    "options": [
      "Mintaqaviy inson huquqlari standartlariga",
      "Universal xalqaro inson huquqlari standartlariga",
      "Submintaqaviy konvensiyaviy standartlarga",
      "Tizimlararo tavsiyaviy xarakterdagi standartlarga"
    ],
    "correct": 0
  },
  {
    "q": "CEDAW konvensiyasiga aʼzo davlatlar oʻz majburiyatlari bajarilishi yuzasidan Qo‘mitaga necha yilda bir marta davriy hisobot beradi?",
    "options": [
      "Kamida 4 yilda bir marta (yoki Qoʻmita soʻragan vaqtda)",
      "Har 2 yilda bir marta (majburiy tartibdagi monitoring doirasida)",
      "Har 5 yilda bir marta (BMT Bosh kotibi nazorati ostida)",
      "Kamida 3 yilda bir marta (mintaqaviy guruhlar taqsimotiga koʻra)"
    ],
    "correct": 0
  },
  {
    "q": "“Har bir inson oʻz shaxsini erkin kamol toptirish huquqiga ega”. Ushbu universal norma birinchi marta qaysi hujjatda mustahkamlab qoʻyilgan?",
    "options": [
      "Inson huquqlari umumjahon deklaratsiyasining 22-moddasida",
      "Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro paktning 6-moddasida",
      "BMT Ustavining inson qadr-qimmatiga oid muqaddima qismida",
      "Inson va fuqaro huquqlari deklaratsiyasining 1-moddasida"
    ],
    "correct": 0
  },
  {
    "q": "Oʻlim jazosini qoʻllash Oʻzbekiston Respublikasi Konstitutsiyasi darajasida qatʼiy taqiqlab qoʻyilganmi?",
    "options": [
      "Ha, Konstitutsiyada Oʻzbekiston Respublikasida oʻlim jazosi taqiqlanishi belgilangan",
      "Yoʻq, bu taqiq faqat Jinoyat kodeksida va maxsus qonun doirasida belgilangan",
      "Faqat alohida ogʻir jinoyatlar va harbiy holat holatlari bundan mustasno qilingan",
      "Ha, lekin favqulodda holat eʼlon qilingan davrda qoʻllash imkoniyati saqlangan"
    ],
    "correct": 0
  },
  {
    "q": "“Bola huquqlarining kafolatlari toʻgʻrisida”gi Oʻzbekiston Respublikasi Qonuni qachon qabul qilingan?",
    "options": [
      "2008-yil 7-yanvarda Qonunchilik palatasi tomonidan",
      "2006-yil 22-dekabrda Qonunchilik palatasi tomonidan",
      "2010-yil 15-aprelda Qonunchilik palatasi tomonidan",
      "2001-yil 30-avgustda Qonunchilik palatasi tomonidan"
    ],
    "correct": 0
  },
  {
    "q": "BMTning xalqaro iqtisodiy, ijtimoiy, madaniy, taʼlim va sogʻliqni saqlash sohalaridagi hamkorligini muvofiqlashtiruvchi bosh organi qanday nomlanadi?",
    "options": [
      "Iqtisodiy va Ijtimoiy Kengash (ECOSOC)",
      "BMTning Taʼlim, fan va madaniyat masalalari boʻyicha tashkiloti (UNESCO)",
      "BMT Bosh Assambleyasining Uchinchi qoʻmitasi",
      "Inson huquqlari boʻyicha Oliy komissar boshqarmasi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari va asosiy erkinliklarini himoya qilish bo‘yicha Yevropa konvensiyasi qaysi xalqaro tashkilotning mintaqaviy mexanizmiga kiradi?",
    "options": [
      "Yevropa Kengashi (Council of Europe) tizimiga",
      "Yevropa Ittifoqi (European Union) tuzilmasiga",
      "Yevropada xavfsizlik va hamkorlik tashkiloti (YXHT) tizimiga",
      "Shimoliy Atlantika Shartnomasi Tashkiloti (NATO) tuzilmasiga"
    ],
    "correct": 0
  },
  {
    "q": "Birinchi avlod inson huquqlariga quyidagi huquqlardan qaysi biri yaqqol misol boʻla oladi?",
    "options": [
      "Fikr, vijdon va din erkinligi huquqi",
      "Adolatli mehnat sharoitlariga ega boʻlish huquqi",
      "Tinch va xavfsiz atrof-muhitda yashash huquqi",
      "Madaniy hayotda erkin ishtirok etish huquqi"
    ],
    "correct": 0
  }

 
    ]),
  },

      ///////////////////////////////////////////////////////////////////////////////



        // //////////////////////////////////////////////////////////////////////////////////
 topic6: {
    title: "inson huquqi 6-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Voyaga yetgan, mehnatga layoqatli farzandlar oʻz ota-onalari toʻgʻrisida gʻamxoʻrlik qilishga qonunan majburmi?",
    "options": [
      "Ha, ota-onalarining gʻamxoʻrlik qilish va aliment olish huquqi Konstitutsiya va Oila kodeksi bilan mustahkamlangan",
      "Yoʻq, bu majburiyat faqat ota-onalar sud tartibida oʻzlarini mehnatga layoqatsiz deb eʼlon qildirgandagina yuzaga keladi",
      "Faqat farzandlar davlat tasarrufidagi rasmiy korxonalarda minimal ish haqidan yuqori daromadga ega boʻlgan taqdirda",
      "Ha, biroq bu majburiyat yuridik kuchga ega boʻlmay, faqat maʼnaviy-axloqiy majburiyatlar tizimiga taalluqlidir"
    ],
    "correct": 0
  },
  {
    "q": "Inson va xalqlar huquqlari boʻyicha Afrika xartiyasi xalqaro huquqiy manbalarda yana qanday nom bilan mashhur?",
    "options": [
      "Banjul xartiyasi (Gambiya poytaxtida qabul qilinganligi sababli)",
      "Addis-Abeba deklaratsiyasi (Efiopiya sammitida maʼqullangani uchun)",
      "Nayrobi protokoli (Keniya bitimi doirasida imzolangani sababli)",
      "Qohira konvensiyasi (Misr konferensiyasi qarori bilan nomlangan)"
    ],
    "correct": 0
  },
  {
    "q": "Oʻrta asrlar ijtimoiy-huquqiy tizimida insonlarning huquqlari asosan qanday xarakterga ega edi?",
    "options": [
      "Tabaqaviy, korporativ va diniy mansublikka asoslangan imtiyozlar tizimidan iborat edi",
      "Tugʻma va ajralmas tabiiy-huquqiy tenglik tamoyillariga toʻliq mos kelar edi",
      "Universal xalqaro standartlar asosida har bir shaxs uchun teng kafolatlangan edi",
      "Faqat iqtisodiy-mulkiy munosabatlarni tartibga soluvchi deklarativ huquqlar edi"
    ],
    "correct": 0
  },
  {
    "q": "Birlashgan Millatlar Tashkilotining (BMT) xalqaro-huquqiy asosi hisoblangan Ustav qachon imzolangan?",
    "options": [
      "1945-yil 26-iyunda San-Fransisko konferensiyasida",
      "1945-yil 24-oktabrda BMT faoliyati rasman boshlanganda",
      "1944-yil 7-oktabrda Dambarton-Oks uchrashuvi yakunida",
      "1948-yil 10-dekabrda Inson huquqlari deklaratsiyasi bilan"
    ],
    "correct": 0
  },
  {
    "q": "Huquqiy va institutsional amaliyotda preventiv chora deganda nima tushuniladi?",
    "options": [
      "Huquqbuzarliklar sodir etilishining oldini olishga qaratilgan profilaktik harakatlar",
      "Sodir etilgan jinoyat uchun shaxsga nisbatan qoʻllaniladigan yakuniy jazo choralari",
      "Zarar koʻrgan taraflarning moddiy va maʼnaviy huquqlarini tiklashga oid sanksiyalar",
      "Sud organlari tomonidan dalillarni toʻplashni cheklovchi protsessual taqiqlar"
    ],
    "correct": 0
  },
  {
    "q": "Oʻn sakkiz yoshgacha boʻlgan bolani nogironligi boʻlgan bola deb topish qaysi organ tomonidan amalga oshiriladi?",
    "options": [
      "Tibbiy-ijtimoiy ekspert komissiyasi (TIEK) qarori bilan",
      "Tibbiy-konsultativ komissiya (TKK) maxsus xulosasi bilan",
      "Sogʻliqni saqlash vazirligining hududiy poliklinika rahbarlari tomonidan",
      "Vasiylik va homiylik organlarining tahliliy xulosasi asosida"
    ],
    "correct": 0
  },
  {
    "q": "Inson va xalqlar huquqlari boʻyicha Afrika sudi qaysi xalqaro-huquqiy hujjat asosida tashkil etilgan?",
    "options": [
      "Afrika xartiyasiga doir 1998-yildagi maxsus Burkina-Faso protokoli asosida",
      "Afrika Ittifoqining 2000-yildagi Lomeda qabul qilingan Taʼsis akti asosida",
      "Inson huquqlari toʻgʻrisidagi Kasablanka deklaratsiyasi mezonlari asosida",
      "Monroviya shartnomasining sud-huquq islohotlariga oid qoʻshimchasi asosida"
    ],
    "correct": 0
  },
  {
    "q": "Fuqarolik va siyosiy huquqlar toʻgʻrisidagi xalqaro pakt (1966) qoidalarining buzilishi boʻyicha qaysi organga murojaat qilinadi?",
    "options": [
      "BMTning Inson huquqlari boʻyicha qoʻmitasiga (Inson huquqlari sudiga emas)",
      "Xalqaro sudga (Gaaga shahridagi BMTning bosh sud organiga)",
      "Inson huquqlari boʻyicha Oliy komissar boshqarmasining kengashiga",
      "BMT Bosh Assambleyasining Inson huquqlari boʻyicha kengashiga"
    ],
    "correct": 0
  },
  {
    "q": "Insonning oʻz tanasi ustidan huquqlarini amalga oshirishi doirasida har qanday tibbiy aralashuvdan oldin rozilik olish qanday nomlanadi?",
    "options": [
      "Xabardor qilingan ixtiyoriy rozilik (Informed consent) tamoyili",
      "Pretsedentli shifokorlik ruxsatnomasi va tibbiy deklaratsiya tartibi",
      "Patsiyentning avtonom huquqiy immuniteti va tibbiy kafolati",
      "Prepreventiv terapevtik kelishuv va oʻzaro majburiyat hujjati"
    ],
    "correct": 0
  },
  {
    "q": "“Bolalar” va “yoshlar” tushunchalari yuridik jihatdan tutashadigan oʻzaro umumiy nuqtani aniqlang.",
    "options": [
      "14 yoshdan 18 yoshgacha boʻlgan davrdagi huquqiy subyektlikda",
      "7 yoshdan 14 yoshgacha boʻlgan qisman muomala layoqatida",
      "16 yoshdan 22 yoshgacha boʻlgan mehnat huquqi subyektligida",
      "18 yoshdan 30 yoshgacha boʻlgan toʻliq ijtimoiy himoya davrida"
    ],
    "correct": 0
  },
  {
    "q": "Qadimgi yunon shoiri Homer oʻz asarlarida (masalan, “Iliada” va “Odisseya”) “adolat” tushunchasini qaysi mifologik timsol orqali ifodalagan?",
    "options": [
      "Dike – ilohiy tartib va anʼanaviy haqiqat mezoni sifatida",
      "Temida – qonun va umumiy tartib-qoidalarning ramzi sifatida",
      "Nemezida – qasos va gunohlar uchun jazo maʼbudasi sifatida",
      "Efrona – tinchlik va ijtimoiy totuvlik timsoli sifatida"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining toʻrtinchi avlodi davrida asosan qanday turdagi huquqlar rivojlanmoqda va bahs-munozaralarga sabab boʻlmoqda?",
    "options": [
      "Biotexnologiyalar, genetika, tibbiyot va raqamli makon bilan bogʻliq huquqlar",
      "Xalqlarning mustaqilligi va xalqaro tinchlikni taʼminlashga oid huquqlar",
      "Ijtimoiy taʼminot, munosib ish haqi va kasaba uyushmalariga oid huquqlar",
      "Daxlsizlik, saylash va saylanish kabi klassik siyosiy-fuqarolik huquqlar"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari tizimidagi Milliy preventiv mexanizm (MPM) tushunchasi bevosita nimani anglatadi?",
    "options": [
      "Yopiq muassasalarga muntazam tashriflar orqali qiynoqlarning oldini olish tizimi",
      "Tashqi iqtisodiy tahdidlardan milliy bozorni himoya qilish choralari",
      "Favqulodda vaziyatlarda fuqarolarni evakuatsiya qilish davlat dasturi",
      "Konstitutsiyaviy tuzumni saqlash uchun sudgacha boʻlgan ehtiyot choralari"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi muhim sana xalqaro hamjamiyatda inson huquqlari kuni sifatida keng nishonlanadi?",
    "options": [
      "10-dekabr – Inson huquqlari umumjahon deklaratsiyasi qabul qilingan kun",
      "24-oktabr – Birlashgan Millatlar Tashkilotining Ustavi kuchga kirgan kun",
      "20-noyabr – BMT tomonidan Bola huquqlari konvensiyasi tasdiqlangan kun",
      "1-dekabr – Butunjahon ijtimoiy birdamlik va inson qadr-qimmati kuni"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Iqtisodiy, ijtimoiy va madaniy huquqlar bo‘yicha qo‘mitasi qaysi shaharda oʻz faoliyatini olib boradi?",
    "options": [
      "Jeneva shahrida (Shveytsariya)",
      "Nyu-York shahrida (AQSh)",
      "Strasburg shahrida (Fransiya)",
      "Gaaga shahrida (Niderlandiya)"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari bo‘yicha Amerika (Shtatlararo) sudiga fuqarolar toʻgʻridan-toʻgʻri yakka tartibda murojaat qilish huquqiga egami?",
    "options": [
      "Yoʻq, arizalar dastlab Shtatlararo komissiya orqali oʻtkazilishi shart",
      "Ha, har bir jismoniy shaxs dastlabki instansiyalarsiz sudga daʼvo kirita oladi",
      "Faqat davlat rahbari yoki parlament aʼzolarining roziligi mavjud boʻlgan hollarda",
      "Yoʻq, sud faqat xalqaro nodavlat tashkilotlarning kollektiv arizalarini koʻradi"
    ],
    "correct": 0
  },
  {
    "q": "Amaldagi xalqaro va milliy qonunchilik normalariga koʻra, bolalar mehnat qilishga haqlimi?",
    "options": [
      "Ha, ularning yoshi, sogʻligʻi va oʻqishiga zarar yetkazmaydigan yengil mehnatga",
      "Yoʻq, voyaga yetmagan shaxslarning har qanday shakldagi mehnati qatʼiyan taqiqlanadi",
      "Faqat ota-onasining yozma roziligi va sud organlarining ruxsatnomasi bilan",
      "Ha, ishlab chiqarish korxonalarida toʻliq ish kuni rejimida ishlash huquqi bor"
    ],
    "correct": 0
  },
  {
    "q": "BMT tomonidan qabul qilingan global rivojlanish strategiyasi – Barqaror rivojlanish maqsadlari (BRM) nechanchi yilgacha boʻlgan muddatga belgilangan?",
    "options": [
      "2030-yilga qadar boʻlgan davr uchun",
      "2040-yilga qadar boʻlgan davr uchun",
      "2035-yilga qadar boʻlgan davr uchun",
      "2050-yilga qadar boʻlgan davr uchun"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq sohasida passiv saylov huquqi deganda nima tushuniladi?",
    "options": [
      "Fuqarolarning qonunchilikda belgilangan tartibda saylanish (nomzod boʻlish) huquqi",
      "Fuqarolarning saylovlarda faqat ovoz beruvchi sifatida ishtirok etish huquqi",
      "Siyosiy partiyalarning saylov natijalari ustidan sudga shikoyat qilish huquqi",
      "Fuqarolarning saylov jarayonlarida kuzatuvchi sifatida qatnashish huquqi"
    ],
    "correct": 0
  },
  {
    "q": "BMTning bosh sud organi hisoblangan Xalqaro Sud (Gaaga) sudyalari necha yil muddatga saylanadilar?",
    "options": [
      "9 yil muddatga (qayta saylanish huquqi saqlangan holda)",
      "5 yil muddatga (qayta saylanish huquqi cheklangan holda)",
      "7 yil muddatga (qayta saylanish huquqi berilmagan holda)",
      "10 yil muddatga (mutlaq vakolat muddati bilan)"
    ],
    "correct": 0
  },
  {
    "q": "Antik davr siyosiy-huquqiy taʼlimotlari tarixidagi mashhur “Davlat” va “Qonunlar” falsafiy asarlarining muallifi kim?",
    "options": [
      "Platon (Aflotun)",
      "Aristotel (Arastu)",
      "Sokrat (Suqrot)",
      "Siseron (Mark Tulliy)"
    ],
    "correct": 0
  },
  {
    "q": "BMT tizimidagi ECOSOC (Iqtisodiy va Ijtimoiy Kengash) qanday maqomdagi organ hisoblanadi?",
    "options": [
      "BMT Ustaviga muvofiq tashkil etilgan 6 ta asosiy bosh organdan biri",
      "BMT Bosh Assambleyasi huzuridagi yordamchi va tavsiyaviy qoʻmita",
      "Faqat ixtisoslashgan xalqaro agentliklarni moliyalashtiruvchi jamgʻarma",
      "Inson huquqlari boʻyicha hisobotlarni qabul qiluvchi mustaqil sud organi"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro va milliy huquqiy hujjatlarga (ayniqsa, BMT konvensiyasiga) muvofiq “bola” deganda kim tushuniladi?",
    "options": [
      "18 yoshga toʻlmagan (voyaga yetmagan) har qanday inson",
      "16 yoshga toʻlmagan va muomala layoqati cheklangan har qanday shaxs",
      "14 yoshga yetmagan va jinoiy javobgarlikka tortilmaydigan shaxs",
      "Ota-onasi yoki qonuniy vakillari qaramogʻida boʻlgan voyaga yetmagan shaxs"
    ],
    "correct": 0
  },
  {
    "q": "“Nogironligi boʻlgan shaxslar uchun oliy taʼlim muassasalarida davlat granti asosida qoʻshimcha necha foizlik qabul kvotasi ajratiladi”?",
    "options": [
      "2 foizlik qoʻshimcha qabul kvotasi",
      "5 foizlik qoʻshimcha qabul kvotasi",
      "3 foizlik qoʻshimcha qabul kvotasi",
      "1 foizlik qoʻshimcha qabul kvotasi"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekistonda Inson huquqlari boʻyicha Milliy strategiya ijrosining monitoringini qaysi organ muvofiqlashtirib va kuzatib boradi?",
    "options": [
      "Inson huquqlari boʻyicha Oʻzbekiston Respublikasi Milliy markazi",
      "Oʻzbekiston Respublikasi Oliy Majlisining Inson huquqlari boʻyicha vakili (Ombudsman)",
      "Oʻzbekiston Respublikasi Adliya vazirligi qoshidagi Inson huquqlari boshqarmasi",
      "Oʻzbekiston Respublikasi Prezidenti huzuridagi amaldagi Qonunchilik palatasi"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davrdan boshlab klassik birinchi avlod inson huquqlari gʻoyaviy va institutsional jihatdan shakllangan?",
    "options": [
      "XVII–XVIII asrlardagi burjua-demokratik inqiloblari davridan",
      "Ikkinchi jahon urushidan keyingi xalqaro tartibotlar davridan",
      "Antik davr polislaridagi dastlabki huquqiy islohotlar davridan",
      "XIX asr oxiridagi ijtimoiy-iqtisodiy harakatlar davridan"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy partiyalar tomonidan Qonunchilik palatasi deputatligiga nomzodlar koʻrsatishda ayollar uchun kamida necha foizlik kvota belgilangan?",
    "options": [
      "Nomzodlar umumiy sonining kamida 40 foizini tashkil etishi lozim",
      "Nomzodlar umumiy sonining kamida 30 foizini tashkil etishi lozim",
      "Nomzodlar umumiy sonining kamida 50 foizini tashkil etishi lozim",
      "Nomzodlar umumiy sonining kamida 25 foizini tashkil etishi lozim"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro huquq fanining tamal toshlaridan biri hisoblangan “Urush va tinchlik huquqi toʻgʻrisida” (1625) asarining muallifi kim?",
    "options": [
      "Hyuqo Grotsiy (Hugo Grotius)",
      "Tomas Gobbs (Thomas Hobbes)",
      "Jan Bodin (Jean Bodin)",
      "Samuel fon Pufendorf (Samuel von Pufendorf)"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari monitoringi tizimidagi “muqobil hisobot” (soya hisoboti) iborasi nimani bildiradi?",
    "options": [
      "Nodavlat tashkilotlar va fuqarolik jamiyati institutlari tomonidan tayyorlanadigan mustaqil hisobot",
      "Hukumat organlari tomonidan xalqaro tashkilotlar soʻroviga asosan yuboriladigan maxfiy hisobot",
      "Xalqaro ekspertlar guruhining rasmiy davlat hisobotini rad etuvchi yakuniy bayonoti",
      "Sud organlarining inson huquqlari buzilishiga oid ichki idoraviy tahliliy hujjati"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xavfsizlik Kengashi tarkibiga kiruvchi doimiy boʻlmagan aʼzo davlatlar necha yil muddatga saylanadilar?",
    "options": [
      "2 yil muddatga (Bosh Assambleya tomonidan saylanadi)",
      "3 yil muddatga (Bosh Assambleya tomonidan saylanadi)",
      "5 yil muddatga (Maxsus rotatsiya tartibida saylanadi)",
      "4 yil muddatga (Mintaqaviy guruhlar tavsiyasi bilan saylanadi)"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro-huquqiy atama hisoblangan CEDAW qisqartmasi qaysi hujjatning rasmiy inglizcha nomlanishi hisoblanadi?",
    "options": [
      "Ayollarga nisbatan kamsitishning barcha shakllariga barham berish toʻgʻrisidagi konvensiya",
      "Bolalar huquqlarini himoya qilish xalqaro deklaratsiyasi va harakatlar rejasi",
      "Fuqarolik va ijtimoiy tenglikni taʼminlash boʻyicha global deklaratsiya hujjati",
      "Irqiy kamsitishning har qanday koʻrinishlarini taqiqlash toʻgʻrisidagi xalqaro pakt"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining fundamental tamoyillaridan biri – aybsizlik prezumsiyasi xalqaro hujjatlarda ilk bor qachon rasman eʼtirof etilgan?",
    "options": [
      "Birinchi avlod inson huquqlari davrida (Fransiyaning 1789-yilgi Deklaratsiyasida)",
      "Ikkinchi avlod inson huquqlari davrida (XIX asrdagi jinoyat-protsessual islohotlarida)",
      "Uchinchi avlod inson huquqlari davrida (BMTning Ikkinchi jahon urushidan keyingi ustavida)",
      "Antik davr huquqiy tizimlarida (Rim huquqining klassik kodekslarida)"
    ],
    "correct": 0
  },
  {
    "q": "Qadimgi yunon mutafakkiri Gesiod taʼlimotiga koʻra, yer yuzida adolatdan chekingan va qonunni buzganlarni kim jazolaydi?",
    "options": [
      "Zevs va uning qizi Adolat maʼbudasi (Dike)",
      "Kronos va taqdir xudolari (Moiralar)",
      "Poseydon hamda uning dengiz osti maxluqlari",
      "Apollon va haqiqatning mifologik ilohlari"
    ],
    "correct": 0
  },
  {
    "q": "Xotin-qizlarni kamsitishning barcha shakllariga barham berish toʻgʻrisidagi (CEDAW) konvensiya qachon qabul qilingan?",
    "options": [
      "1979-yil 18-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1966-yil 16-dekabrda BMT Bosh Assambleyasi tomonidan",
      "1981-yil 3-sentabrda BMT Bosh Assambleyasi tomonidan",
      "1993-yil 25-iyunda Butunjahon inson huquqlari konferensiyasida"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagi vaziyatlarning qaysi birida shifokor bemorga oid tibbiy sir hisoblangan maʼlumotlarni uning roziligisiz taqdim etishga qonunan haqli?",
    "options": [
      "Atrofdagilar uchun xavfli boʻlgan yuqumli kasalliklar tarqalishi tahdidining oldini olishda",
      "Bemorning qarindoshlari uning umumiy salomatlik holati haqida yozma ariza berganda",
      "Sugʻurta kompaniyalari moliyaviy shartnoma majburiyatlarini tekshirishni talab qilganda",
      "Tibbiyot muassasasining ichki ilmiy-tadqiqot va statistik ishlarini olib borish zaruriyatida"
    ],
    "correct": 0
  },
  {
    "q": "Ruandada sodir etilgan genotsid va insoniyatga qarshi jinoyatlar boʻyicha xalqaro harbiy tribunalni (MTHR) tuzish toʻgʻrisida qaysi organ qaror qabul qilgan?",
    "options": [
      "BMT Xavfsizlik Kengashi (Maxsus rezolyutsiya qabul qilish orqali)",
      "BMT Bosh Assambleyasi (Koʻp tomonlama konvensiya tasdiqlash orqali)",
      "Xalqaro sud (Aʼzo davlatlarning kollektiv murojaati va ajrimi asosida)",
      "Afrika Ittifoqi (Mintaqaviy xavfsizlik toʻgʻrisidagi shartnoma doirasida)"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Nogironlar huquqlari toʻgʻrisidagi konvensiyasida belgilangan inklyuzivlik tamoyili nimani anglatadi?",
    "options": [
      "Nogironligi boʻlgan shaxslarning jamiyat hayotiga toʻliq va teng huquqli integratsiya qilinishi",
      "Nogironligi boʻlgan shaxslarni faqat alohida ixtisoslashtirilgan muassasalarda ajratib saqlash",
      "Ularga faqat pul mablagʻlari koʻrinishida ijtimoiy yordam koʻrsatish bilan cheklanish",
      "Nogironligi boʻlgan shaxslarni umumiy mehnat va taʼlim jarayonlaridan ozod etish"
    ],
    "correct": 0
  },
  {
    "q": "Rim statuti asosida tashkil etilgan Xalqaro jinoiy sud (XJS) qanday turdagi jinoyatlar boʻyicha jismoniy shaxslarni javobgarlikka tortadi?",
    "options": [
      "Genotsid, insoniyatga qarshi jinoyatlar, urush jinoyatlari va agressiya jinoyati",
      "Xalqaro terrorizm, narkotik moddalarning noqonuniy aylanmasi va kontrabanda",
      "Davlatlararo iqtisodiy jinoyatlar, korrupsiya va transmilliy kiberjinoyatchilik",
      "Dengiz qaroqchiligi hamda xalqaro havo transporti xavfsizligiga qarshi jinoyatlar"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi vaqtda Yevropa Kengashi (Council of Europe) tashkilotiga rasman aʼzo boʻlgan davlatlar soni qancha?",
    "options": [
      "46 ta aʼzo davlat (Rossiya tashkilotni tark etganidan keyingi holat boʻyicha)",
      "47 ta aʼzo davlat (Tashkilotning tarixiy maksimal koʻrsatkichlari boʻyicha)",
      "27 ta aʼzo davlat (Yevropa Ittifoqi tuzilmasi tarkibiga mos keluvchi son boʻyicha)",
      "50 ta aʼzo davlat (Yevropa qitʼasidagi barcha suveren mamlakatlar boʻyicha)"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari rivojlanishining uchinchi avlodi (birdamlik/kollektiv huquqlar) xalqaro maydonda qaysi davrdan boshlab shakllana boshlagan?",
    "options": [
      "Ikkinchi jahon urushidan keyin (mustamlakachilik tizimi parchalangan davrdan)",
      "XIX asr oxiri va XX asr boshlaridan (ishchilar harakati kuchaygan davrdan)",
      "XX asrning 80-yillaridan (globallashuv va ekologik inqirozlar davridan)",
      "XVII asr burjua inqiloblaridan (shaxsiy daxlsizlik gʻoyasi chiqqan davrdan)"
    ],
    "correct": 0
  }

 
    ]),
  },

      ///////////////////////////////////////////////////////////////////////////////

  // //////////////////////////////////////////////////////////////////////////////////
 topic8: {
    title: "inson huquqi 6-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Tabiiy holatda barcha kishilarning tugʻma tengligi va erkinligi toʻgʻrisidagi gʻoyaning klassik muallifi kim?",
    "options": [
      "Jon Lokk (tabiiy huquqiy konsepsiya doirasida)",
      "Tomas Gobbs (absolyut monarxiya nazariyasi doirasida)",
      "Jan-Jak Russo (fuqarolik holati konsepsiyasi doirasida)",
      "Nikolo Makiavelli (realistik siyosat taʼlimoti doirasida)"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarini himoya qilishning mintaqaviy tizimlari ichida qaysi birining sud qarorlari aʼzo davlatlar uchun majburiy yuridik kuchga ega?",
    "options": [
      "Yevropa inson huquqlari sudi qarorlari",
      "Osiyo-Tinch okeani inson huquqlari komissiyasi tavsiyalari",
      "Arab davlatlari ligasi inson huquqlari qoʻmitasi xulosalari",
      "MDH inson huquqlari boʻyicha komissiyasi bayonotlari"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagi fundamental huquqlardan qaysi biri shaxsiy (fuqarolik) huquqlar toifasiga kirmaydi?",
    "options": [
      "Kasaba uyushmalariga birlashish va ish tashlash huquqi",
      "Fikr, vijdon va eʼtiqod erkinligi huquqi",
      "Shaxsiy daxlsizlik va hayotga boʻlgan huquq",
      "Turar joy daxlsizligi va erkin harakatlanish huquqi"
    ],
    "correct": 0
  },
  {
    "q": "BMTning Inson huquqlari boʻyicha qoʻmitasi pakt normalarini rasmiy talqin qilish uchun qanday universal hujjatlardan foydalanadi?",
    "options": [
      "Umumiy tusdagi sharhlar (General comments)",
      "Majburiy xalqaro preventiv koʻrsatmalar",
      "Deklarativ xarakterdagi yakuniy tavsiyalar",
      "Sud pretsedentlari va tizimli rezolyutsiyalar"
    ],
    "correct": 0
  },
  {
    "q": "AQSh Konstitutsiyasiga 1791-yilda kiritilgan va inson huquqlarini kafolatlovchi dastlabki 10 ta tuzatish qanday nomlanadi?",
    "options": [
      "Huquqlar toʻgʻrisidagi bill (Bill of Rights)",
      "Mustaqillik deklaratsiyasi (Declaration of Independence)",
      "Ozodlikning buyuk xartiyasi (Magna Carta)",
      "Konfederatsiya moddalari (Articles of Confederation)"
    ],
    "correct": 0
  },
  {
    "q": "Aristotelning huquqiy va axloqiy taʼlimotiga koʻra, ijtimoiy adolat asosan necha turga boʻlinadi?",
    "options": [
      "2 turga (taqsimlovchi valashtiruvchi/tuzatuvchi adolat)",
      "3 turga (tabiiy, qonuniy va anʼanaviy adolat)",
      "4 turga (axloqiy, siyosiy, iqtisodiy va sud adolati)",
      "5 turga (ilohiy, insoniy, universal, xususiy va jamoaviy)"
    ],
    "correct": 0
  },
  {
    "q": "Qadimgi yunon shoiri Homer oʻz asarlarida ijtimoiy tartibni belgilovchi “qonun” tushunchasini qanday maʼnoda ifodalagan?",
    "options": [
      "Nomos – anʼana va urf-odatlarga asoslangan ijtimoiy tartib",
      "Dike – ilohiy haqiqat va odil sudlov mezoni",
      "Temida – qonuniylik va adolat maʼbudasining xohishi",
      "Rhetra – davlat tomonidan qatʼiy yozilgan buyruqlar"
    ],
    "correct": 0
  },
  {
    "q": "BMT Ustaviga koʻra, tashkilotning Bosh kotibi necha yil muddatga saylanadi?",
    "options": [
      "5 yil muddatga (yana bir marta qayta saylanish huquqi bilan)",
      "4 yil muddatga (yana bir marta qayta saylanish huquqi bilan)",
      "7 yil muddatga (qayta saylanish huquqi cheklangan holda)",
      "6 yil muddatga (qayta saylanish huquqi berilmagan holda)"
    ],
    "correct": 0
  },
  {
    "q": "BMT Ustaviga koʻra, xalqaro tinchlik va xavfsizlikni saqlash uchun asosiy mas’uliyat qaysi organga yuklangan?",
    "options": [
      "BMT Xavfsizlik Kengashiga",
      "BMT Bosh Assambleyasiga",
      "BMT Xalqaro Sudiga",
      "BMT Kotibiyatiga"
    ],
    "correct": 0
  },
  {
    "q": "Hokimiyatning boʻlinish prinsipi qaysi klassik asarda toʻliq rivojlantirilgan va tizimlashtirilgan?",
    "options": [
      "Sharl Lui Monteskyoning “Qonunlarning ruhi haqida” asarida",
      "Jon Lokkning “Fuqarolik boshqaruvi haqida ikkita risola” asarida",
      "Jan-Jak Russoning “Ijtimoiy shartnoma” nomli asarida",
      "Tomas Gobbsning “Leviafan yoki materiya” nomli asarida"
    ],
    "correct": 0
  },
  {
    "q": "Nogironligi boʻlgan shaxs oʻzining jismoniy nuqsonlari sababli hujjatlarni shaxsan imzolay olmasa, qonunchilikda qanday tartib belgilanadi?",
    "options": [
      "Uning iltimosiga koʻra imzo boshqa shaxs (fakschi) tomonidan notarius ishtirokida qoʻyiladi",
      "Hujjat mutlaqo haqiqiy emas deb topiladi va vasiylik organiga oʻtkaziladi",
      "Faqat tuman tibbiyot birlashmasi rahbarining muhri bilan tasdiqlanishi shart qilinadi",
      "Uning oʻrniga barcha hujjatlarni imzolash huquqi voyaga yetgan qarindoshiga oʻtadi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari boʻyicha yaxlit Osiyo mintaqaviy tizimi huquqiy va institutsional jihatdan qaysi holatda?",
    "options": [
      "Yaxlit universal Osiyo tizimi mavjud emas, faqat submintaqaviy mexanizmlar bor",
      "1993-yilgi Bangkok deklaratsiyasidan keyin muntazam va yaxlit ishlab kelmoqda",
      "BMTning Maxsus komissiyasi doirasida qitʼaviy sud organi shaklida ishlaydi",
      "Arab davlatlari ligasi va MDH inson huquqlari tizimi bilan toʻliq birlashgan"
    ],
    "correct": 0
  },
  {
    "q": "Inson va xalqlar huquqlari boʻyicha Afrika xartiyasining ikkinchi nomi qaysi shahar bilan bogʻliq?",
    "options": [
      "Banjul xartiyasi (Gambiya poytaxtida qabul qilinganligi sababli)",
      "Addis-Abeba deklaratsiyasi (Efiopiya sammitida maʼqullangani uchun)",
      "Nayrobi protokoli (Keniya bitimi doirasida imzolangani sababli)",
      "Qohira konvensiyasi (Misr konferensiyasi qarori bilan nomlangan)"
    ],
    "correct": 0
  },
  {
    "q": "Mavjud mintaqaviy mexanizmlar orasida inson huquqlarini himoya qilish boʻyicha eng samarali tizim sifatida qaysi biri eʼtirof etiladi?",
    "options": [
      "Yevropa Kengashi tizimi (Inson huquqlari boʻyicha Yevropa sudi bilan)",
      "Amerika davlatlari tashkiloti tizimi (Shtatlararo sud bilan)",
      "Afrika Ittifoqi tizimi (Inson va xalqlar huquqlari sudi bilan)",
      "Arab davlatlari ligasi tizimi (Inson huquqlari xartiyasi bilan)"
    ],
    "correct": 0
  },
  {
    "q": "Birinchi avlod inson huquqlariga quyidagi huquqlardan qaysi biri yaqqol misol boʻla oladi?",
    "options": [
      "Fikr, vijdon va din erkinligi huquqi",
      "Adolatli mehnat sharoitlariga ega boʻlish huquqi",
      "Tinch va xavfsiz atrof-muhitda yashash huquqi",
      "Madaniy hayotda erkin ishtirok etish huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Xotin-qizlarni kamsitishning barcha shakllariga barham berish to‘g‘risidagi konvensiyaga (CEDAW) Oʻzbekiston qachon qoʻshilgan?",
    "options": [
      "1995-yil 31-avgustda Oliy Majlis qarori bilan",
      "1992-yil 8-dekabrda Oliy Majlis qarori bilan",
      "1997-yil 30-avgustda Oliy Majlis qarori bilan",
      "2001-yil 24-avgustda Oliy Majlis qarori bilan"
    ],
    "correct": 0
  },
  {
    "q": "Huquqiy maqomiga koʻra Ombudsman instituti qanday organ hisoblanadi?",
    "options": [
      "Inson huquqlari buzilishi ustidan shikoyatlarni koʻrib chiquvchi parlament vakili",
      "Jinoyat ishlarini tergov qiluvchi va jazo muassasalarini nazorat qiluvchi maxsus prokuror",
      "Davlat organlarining moliyaviy faoliyatini tekshiruvchi mustaqil sud instansiyasi",
      "Ijro hokimiyati tizimidagi inson huquqlari boʻyicha vazirlik darajasidagi qoʻmita"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari nazariyasida “jamoaviy (kollektiv) huquq” tushunchasi mavjudmi?",
    "options": [
      "Ha, bu uchinchi avlod inson huquqlari (xalqlar huquqlari) tizimini anglatadi",
      "Yoʻq, inson huquqlari faqat va mutlaqo jismoniy shaxsga tegishli individual tushunchadir",
      "Faqat iqtisodiy-ijtimoiy munosabatlarda kasaba uyushmalari miqyosida tan olinadi",
      "Ha, lekin u faqat urush davrida xalqaro gumanitar huquq doirasidagina yuridik kuchga ega"
    ],
    "correct": 0
  },
  {
    "q": "1963-yilda tashkil etilgan Afrika birligi tashkiloti (ABT) hozirgi kunda qanday nomlanadi?",
    "options": [
      "Afrika Ittifoqi (African Union)",
      "Afrika Davlatlari Hamjamiyati",
      "Afrika Iqtisodiy Alyansi",
      "Afrika Rivojlanish Ligasi"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro-huquqiy atama hisoblangan CEDAW qisqartmasi qaysi hujjatning rasmiy inglizcha nomlanishi hisoblanadi?",
    "options": [
      "Ayollarga nisbatan kamsitishning barcha shakllariga barham berish toʻgʻrisidagi konvensiya",
      "Bolalar huquqlarini himoya qilish xalqaro deklaratsiyasi va harakatlar rejasi",
      "Fuqarolik va ijtimoiy tenglikni taʼminlash boʻyicha global deklaratsiya hujjati",
      "Irqiy kamsitishning har qanday koʻrinishlarini taqiqlash toʻgʻrisidagi xalqaro pakt"
    ],
    "correct": 0
  },
  {
    "q": "BMTning mutlaq teng ovoz huquqi (1 davlat — 1 ovoz prinsipi) asosida barcha aʼzolar vakillik qiladigan organi qaysi?",
    "options": [
      "BMT Bosh Assambleyasi",
      "BMT Xavfsizlik Kengashi",
      "BMT Iqtisodiy va Ijtimoiy Kengashi",
      "BMT Vasiylik Kengashi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari sohasidagi xalqaro monitoring va hisobot berish protsedurasi nima uchun xizmat qiladi?",
    "options": [
      "Davlatlarning xalqaro shartnomaviy majburiyatlarini bajarish holatini tahlil qilish uchun",
      "Aʼzo davlatlarga nisbatan toʻgʻridan-toʻgʻri iqtisodiy jazo (sanksiyalar) joriy etish uchun",
      "Xalqaro sudlarda muayyan jismoniy shaxslarga nisbatan hukmlar chiqarish uchun",
      "Davlatlarning ichki qonunchiligini bevosita xalqaro organlar tomonidan oʻzgartirish uchun"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Respublikasi Oliy Majlisining Inson huquqlari boʻyicha vakili (Ombudsman) instituti tizimidagi bola huquqlarini himoya qiluvchi maxsus lavozim qanday?",
    "options": [
      "Bola huquqlari boʻyicha vakil (Bolalar ombudsmani)",
      "Voyaga yetmaganlar ishlari boʻyicha maxsus komissar",
      "Inson huquqlari milliy markazining kichik vakili",
      "Oliy Majlisning ijtimoiy masalalar boʻyicha kotibi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari rivojlanishining ikkinchi avlodi (ijtimoiy, iqtisodiy va madaniy huquqlar) tizimi qachondan boshlab shakllangan?",
    "options": [
      "XIX asr oxiri va XX asr boshlaridan (ijtimoiy kurashlar natijasida)",
      "XVII–XVIII asrlardagi dastlabki burjua inqiloblari davridan",
      "Ikkinchi jahon urushidan keyingi BMT konvensiyalari davridan",
      "XXI asr boshidagi raqamli va texnologik inqiloblar davridan"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari tarixidagi ilk manbalardan biri – Erkinlikning buyuk xartiyasi (Magna Carta) nechanchi yilda qabul qilingan?",
    "options": [
      "1215-yilda Angliyada",
      "1689-yilda Angliyada",
      "1789-yilda Fransiyada",
      "1776-yilda AQShda"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi sana xalqaro hamjamiyatda rasman “BMT kuni” sifatida keng nishonlanadi?",
    "options": [
      "24-oktabr – BMT Ustavi kuchga kirgan kun (1945-yil)",
      "26-iyun – BMT Ustavi imzolangan kun (1945-yil)",
      "10-dekabr – Inson huquqlari deklaratsiyasi qabul qilingan kun",
      "1-yanvar – Birlashgan Millatlar Deklaratsiyasi imzolangan kun"
    ],
    "correct": 0
  },
  {
    "q": "“Yetim bolalar” va “ota-ona qaramogʻidan mahrum boʻlgan bolalar” tushunchalari oʻrtasidagi asosiy huquqiy farq nimada?",
    "options": [
      "Yetim bolalarning ota-onasi vafot etgan boʻladi, ota-ona qaramogʻidan mahrum boʻlganlarning ota-onasi esa tirik boʻlib, huquqdan mahrum qilingan boʻlishi mumkin",
      "Yetim bolalar faqat davlat qaramogʻida saqlanadi, ota-ona qaramogʻidan mahrum boʻlganlar esa faqat vasiylikka beriladi",
      "Ularning oʻrtasida hech qanday huquqiy va ijtimoiy farq mavjud emas, har ikkalasi mutlaq biologik tushunchadir",
      "Yetim bolalar 14 yoshgacha boʻlgan toifani, ota-ona qaramogʻidan mahrum boʻlganlar esa 14 yoshdan 18 yoshgacha boʻlgan toifani anglatadi"
    ],
    "correct": 0
  },
  {
    "q": "“Har bir kishining faqat oʻz ishi bilan shugʻullanishi va boshqalarning ishiga aralashmasligi adolatli boʻlur edi”. Ushbu soʻzlar qaysi antik mutafakkirga tegishli?",
    "options": [
      "Platon (Aflotun) – “Davlat” asarida",
      "Aristotel (Arastu) – “Siyosat” asarida",
      "Sokrat (Suqrot) – falsafiy dialoqlarida",
      "Siseron – “Qonunlar haqida” asarida"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Respublikasi bugungi kunga qadar inson huquqlari sohasidagi nechta asosiy xalqaro hujjatga (konvensiya va paktlarga) qoʻshilgan?",
    "options": [
      "80 dan ortiq xalqaro hujjatlarga",
      "10 tacha eng asosiy paktlarga",
      "50 tacha mintaqaviy shartnomalarga",
      "150 dan ortiq barcha deklaratsiyalarga"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari fanida «Inson huquqlarining uchinchi avlodi» konsepsiyasining asosiy farqli jihati nimada?",
    "options": [
      "Bu huquqlar jamoaviy (kollektiv) xarakterga ega boʻlib, birdamlik huquqlari hisoblanadi",
      "Ular faqat va mutlaqo shaxsning davlat organlaridan mustaqilligini taʼminlaydi",
      "Bu huquqlar faqat raqamli makon va kibermakondagi munosabatlarni tartibga soladi",
      "Ular sud tizimida himoyalanishning mutlaq individual mexanizmlarini yaratadi"
    ],
    "correct": 0
  },
  {
    "q": "CEDAW konvensiyasiga aʼzo davlatlar oʻz majburiyatlari bajarilishi yuzasidan Qo‘mitaga necha yilda bir marta davriy hisobot beradi?",
    "options": [
      "Kamida 4 yilda bir marta (yoki Qoʻmita soʻragan vaqtda)",
      "Har 2 yilda bir marta (majburiy tartibdagi monitoring doirasida)",
      "Har 5 yilda bir marta (BMT Bosh kotibi nazorati ostida)",
      "Kamida 3 yilda bir marta (mintaqaviy guruhlar taqsimotiga koʻra)"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi qadimgi yunon mutafakkiri oʻz asarida odil sudlov xudosi Femida Zevsning qonuniy turmush oʻrtogʻi boʻlgan deb yozgan?",
    "options": [
      "Gesiod – “Teogoniya” (Xudolarning kelib chiqishi) asarida",
      "Homer – “Iliada” dostonining muqaddimasida",
      "Platon – “Qonunlar” falsafiy risolasida",
      "Gerodot – “Tarix” kitobining mifologik qismida"
    ],
    "correct": 0
  },
  {
    "q": "Xabeas korpus (Habeas Corpus) prinsipining protsessual mohiyatiga koʻra, shaxsni…",
    "options": [
      "Sud qarorisiz yoki sanksiyasisiz uzoq muddat qamoqda saqlash taqiqlanadi",
      "Faqat advokat ishtirokida soʻroq qilish majburiyati yuklanadi",
      "Qiynoqlar ostida olingan koʻrsatmalarini mutlaqo asossiz deb topish shart qilinadi",
      "Yashash joyidan boshqa hududga majburiy koʻchirish mutlaqo taqiqlanadi"
    ],
    "correct": 0
  },
  {
    "q": "Ruandada 1994-yilda sodir etilgan genotsid boʻyicha xalqaro harbiy tribunal (MTHR) qarorgohi xavfsizlik nuqtai nazaridan qaysi davlatda tashkil etilgan edi?",
    "options": [
      "Tanzaniyada (Arusha shahrida)",
      "Kaniyada (Nayrobi shahrida)",
      "Ugandada (Kampala shahrida)",
      "Ruandaning oʻzida (Kigali shahrida)"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Respublikasi inson huquqlari va gumanitar sohadagi nechta fundamental xalqaro konvensiyaga (BMTning asosiy shartnomalariga) bevosita aʼzo hisoblanadi?",
    "options": [
      "10 ta asosiy xalqaro konvensiyaga",
      "5 ta asosiy xalqaro konvensiyaga",
      "20 ta asosiy xalqaro konvensiyaga",
      "3 ta asosiy xalqaro konvensiyaga"
    ],
    "correct": 0
  },
  {
    "q": "Ayollar holati bo‘yicha Pekin deklaratsiyasi va Harakatlar platformasi qabul qilingan To‘rtinchi Butunjahon konferensiyasi qachon boʻlib oʻtgan?",
    "options": [
      "1995-yilda Pekin shahrida (Xitoy)",
      "1985-yilda Nayrobi shahrida (Keniya)",
      "1980-yilda Kopengagen shahrida (Daniya)",
      "1975-yilda Mexiko shahrida (Mexika)"
    ],
    "correct": 0
  },
  {
    "q": "Birlashgan Millatlar Tashkilotining (BMT) xalqaro-huquqiy asosi hisoblangan Ustav qachon qabul qilingan (kuchga kirgan)?",
    "options": [
      "1945-yil 24-oktabrda rasman kuchga kirgan",
      "1945-yil 26-iyunda San-Fransiskoda imzolangan",
      "1948-yil 10-dekabrda Deklaratsiya bilan birga",
      "1946-yil 10-yanvarda Londonda birinchi majlisda"
    ],
    "correct": 0
  },
  {
    "q": "Fuqaroni qonuniy jihatdan nogironligi boʻlgan shaxs deb topish masalasi bevosita kim tomonidan amalga oshiriladi?",
    "options": [
      "Tibbiy-ijtimoiy ekspert komissiyasi (TIEK)",
      "Sogʻliqni saqlash vazirligi poliklinika shifokorlari",
      "Fuqarolarning oʻzini oʻzi boshqarish organlari",
      "Tuman Bandlik va kambagʻallikni qisqartirish boʻlimi"
    ],
    "correct": 0
  },
  {
    "q": "Oʻzbekiston Respublikasining amaldagi sogʻliqni saqlash sohasidagi qonunchiligiga koʻra evtanaziyaga ruxsat berilganmi?",
    "options": [
      "Yoʻq, qonunchilikda evtanaziya qoʻllanishi qatʼiyan taqiqlanadi",
      "Ha, bemorning va uning yaqin qarindoshlarining yozma roziligi bilan",
      "Faqat sudning maxsus tibbiy-gumanitar ajrimi mavjud boʻlgan hollarda",
      "Faqat tibbiyot konsiliumining davolab boʻlmaslik haqidagi yakuniy xulosasi bilan"
    ],
    "correct": 0
  },
  {
    "q": "Xalqaro hamjamiyatda keng nishonlanadigan “Afrika kuni” (25-may) bevosita nima bilan bogʻliq?",
    "options": [
      "1963-yilda Afrika birligi tashkiloti tashkil topgan sana bilan",
      "Inson va xalqlar huquqlari Afrika xartiyasi imzolangan sana bilan",
      "Mantar qitʼasida mustamlakachilik tizimi toʻliq tugatilgan kun bilan",
      "Afrika inson huquqlari sudi faoliyat boshlagan rasmiy sana bilan"
    ],
    "correct": 0
  },
  {
    "q": "Ikkinchi jahon urushidan keyin natsistlarning harbiy jinoyatchilarini jazolash boʻyicha oʻtkazilgan tarixiy xalqaro sud jarayoni qanday nomlanadi?",
    "options": [
      "Nyurnberg sud jarayoni (Xalqaro harbiy tribunal)",
      "Tokio sud jarayoni (Uzoq Sharq xalqaro tribunali)",
      "Gaaga xalqaro jinoiy sudi maxsus sessiyasi",
      "Versal tinchlik konferensiyasi maxsus sudi"
    ],
    "correct": 0
  },
  {
    "q": "Jinoyat-protsessual huquqidagi “Miranda qoidasi” jinoiy taʼqib ostidagi shaxs uchun nimani anglatadi?",
    "options": [
      "Shaxsni ushlash vaqtida uning sukut saqlash va advokatga boʻlgan huquqlarini tushuntirish majburiyati",
      "Gumon qilinuvchining uzoq muddatli tergov izolyatorida saqlanishini taqiqlovchi sud normasi",
      "Mahkumning jazoni ijro etish muassasasida shaxsiy daxlsizlik kafolatlari tizimi",
      "Sudlanuvchining yakuniy hukm ustidan yuqori instansiyaga shikoyat qilish muddati"
    ],
    "correct": 0
  },
  {
    "q": "Amerika davlatlari tashkiloti (ADT) bugungi kunda oʻz tarkibiga nechta suveren davlatni rasman aʼzo qilib qabul qilgan?",
    "options": [
      "35 ta aʼzo davlatni",
      "28 ta aʼzo davlatni",
      "50 ta aʼzo davlatni",
      "42 ta aʼzo davlatni"
    ],
    "correct": 0
  },
  {
    "q": "BMT Bosh Assambleyasi qaroriga koʻra, qaysi sana dunyoda “Xalqaro migrantlar kuni” sifatida keng nishonlanadi?",
    "options": [
      "18-dekabr kuni",
      "10-dekabr kuni",
      "20-noyabr kuni",
      "15-oktabr kuni"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagi tuzilmalardan qaysi biri BMT Ustavida belgilangan bosh organlar tarkibiga kirmaydi?",
    "options": [
      "Inson huquqlari boʻyicha kengash (HRC)",
      "Iqtisodiy va Ijtimoiy Kengash (ECOSOC)",
      "Vasiylik Kengashi (Trusteeship Council)",
      "Xalqaro Sud (International Court of Justice)"
    ],
    "correct": 0
  },
  {
    "q": "BMTning oʻz oldiga qoʻygan maqsadlariga erishilganligi sababli 1994-yilda oʻz faoliyatini rasman toʻxtatgan (muzlatgan) bosh organi qaysi?",
    "options": [
      "BMT Vasiylik Kengashi",
      "BMT Iqtisodiy va Ijtimoiy Kengashi",
      "Xalqaro toʻlovlar va nazorat qoʻmitasi",
      "BMTning Mandatli hududlar boʻyicha komissiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Favqulodda holat yoki urush davrida ham davlat tomonidan hech qachon cheklanishi mumkin boʻlmagan absolyut huquqlar qaysilar?",
    "options": [
      "Hayotga boʻlgan huquq, qiynoqqa solinmaslik va vijdon erkinligi",
      "Erkin harakatlanish huquqi, mulk huquqi va daxlsizlik",
      "Saylov huquqi, soʻz erkinligi va namoyishlar oʻtkazish huquqi",
      "Mehnat qilish huquqi, taʼlim olish va tadbirkorlik erkinligi"
    ],
    "correct": 0
  },
  {
    "q": "BMT Xalqaro Sudining (Gaaga) sudyalar korpusi tarkibi necha nafar sudyadan iborat va ular necha yil muddatga saylanadi?",
    "options": [
      "15 nafar sudya, 9 yil muddatga saylanadi",
      "11 nafar sudya, 5 yil muddatga saylanadi",
      "21 nafar sudya, 7 yil muddatga saylanadi",
      "9 nafar sudya, 10 yil muddatga saylanadi"
    ],
    "correct": 0
  },
  {
    "q": "Oʻlim jazosini qoʻllash Oʻzbekiston Respublikasi Konstitutsiyasi darajasida qatʼiy taqiqlab qoʻyilganmi?",
    "options": [
      "Ha, Konstitutsiyada Oʻzbekiston Respublikasida oʻlim jazosi taqiqlanishi belgilangan",
      "Yoʻq, bu taqiq faqat Jinoyat kodeksida va maxsus qonun doirasida belgilangan",
      "Faqat alohida ogʻir jinoyatlar va harbiy holat holatlari bundan mustasno qilingan",
      "Ha, lekin favqulodda holat eʼlon qilingan davrda qoʻllash imkoniyati saqlangan"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlarining «uchinchi avlodi» (birdamlik huquqlari) tizimiga asosan quyidagi qaysi huquqlar kiritiladi?",
    "options": [
      "Tinchlik, rivojlanish va musaffo atrof-muhitga boʻlgan huquqlar",
      "Shaxsiy daxlsizlik, soʻz erkinligi va sud himoyasi huquqlari",
      "Munosib ish haqi, dam olish va tibbiy yordam olish huquqlari",
      "Saylash, saylanish va davlat boshqaruvida ishtirok etish huquqlari"
    ],
    "correct": 0
  }

 
    ]),
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
