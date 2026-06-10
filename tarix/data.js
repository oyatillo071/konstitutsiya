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
  // 1-BO'LIM: IJTIMOIY NORMALAR VA HUQUQ NORMASINING TUZILISHI
  /////////////////////////////////////////////////////////////////////////////////
  topic1: {
    title: "Davlat va huquq nazariyasi: Ijtimoiy normalar va Huquq strukturasi",
    questions: randomizeQuestions([
      {
        q: "Jamiyat a'zolari o'rtasida yuzaga keladigan ongli, maqsadga yo'naltirilgan o'zaro aloqalar tizimi nima deb ataladi?",
        options: [
          "Ijtimoiy munosabatlar",
          "Ijtimoiy normalar majmui",
          "Texnik-huquqiy tartibga solish",
          "Huquqiy aksiomalar tizimi"
        ],
        correct: 0
      },
      {
        q: "Ijtimoiy munosabatlarning fundamental huquqiy xususiyati nimada namoyon bo'ladi?",
        options: [
          "Insonlarning o'zaro ongli ta'siri va manfaatlari uyg'unlashuvida",
          "Faqat moddiy resurslarni majburiy taqsimlash jarayonlarida",
          "Faqat subyektlarning davlat tomonidan belgilangan maqomida",
          "Tabiat qonunlarining jamiyat rivojiga to'g'ridan-to'g'ri ta'sirida"
        ],
        correct: 0
      },
      {
        q: "O'qituvchi va talaba o'rtasidagi ijtimoiy-huquqiy munosabat munosabatlarning qaysi turiga kiradi?",
        options: [
          "Ta'limiy munosabatlar",
          "Iqtisodiy munosabatlar",
          "Siyosiy munosabatlar",
          "Fuqarolik-huquqiy munosabatlar"
        ],
        correct: 0
      },
      {
        q: "Jamiyat hayotini ijtimoiy tartibga solish deganda nima tushuniladi?",
        options: [
          "Insonlar xatti-harakatlarini muayyan qoliplarga solish va muvofiqlashtirish",
          "Faqat huquqbuzarliklar uchun davlat tomonidan jazo choralarini qo'llash",
          "Moddiy va iqtisodiy resurslarni markazlashgan holda taqsimlash",
          "Tabiat hodisalari va ekologik jarayonlarni qat'iy boshqarish"
        ],
        correct: 0
      },
      {
        q: "Umumiy xarakterga ega bo'lib, jamiyatning barcha a'zolariga tatbiq etiladigan tartibga solish shakli qaysi?",
        options: [
          "Normativ tartibga solish",
          "Individual tartibga solish",
          "Texnik tartibga solish",
          "Kazuistik tartibga solish"
        ],
        correct: 0
      },
      {
        q: "Jamiyatda qabul qilingan va ko'p marta takrorlanish natijasida odatga aylangan umumiy xulq-atvor qoidalari qanday nomlanadi?",
        options: [
          "Ijtimoiy normalar",
          "Huquqiy prezumpsiyalar",
          "Texnik standartlar",
          "Yakka tartibdagi ko'rsatmalar"
        ],
        correct: 0
      },
      {
        q: "Ezgulik va yovuzlik, adolat va nohaqlik haqidagi ijtimoiy tasavvurlarga asoslangan normalar qaysi?",
        options: [
          "Axloq normalari",
          "Huquq normalari",
          "Korporativ normalar",
          "Odat normalari"
        ],
        correct: 0
      },
      {
        q: "Axloq normalarining buzilishi an'anaviy ravishda qanday sanksiyani keltirib chiqaradi?",
        options: [
          "Jamoatchilik qoralashi va vijdon azobi",
          "Ma'muriy jarima va huquqiy cheklov",
          "Intizomiy chora va lavozimni pasaytirish",
          "Mulkni davlat foydasiga musodara qilish"
        ],
        correct: 0
      },
      {
        q: "Siyosiy partiyalar va jamoat birlashmalarining ustavlari hamda ichki nizomlari qaysi normalarga misol bo'ladi?",
        options: [
          "Korporativ normalar",
          "Diniy normalar",
          "Odat normalari",
          "Texnik normalar"
        ],
        correct: 0
      },
      {
        q: "Islom huquqi ustuvor bo'lgan tizimlarda 'Zakot' berish majburiyati qaysi ijtimoiy norma turiga kiradi?",
        options: [
          "Huquqiy va diniy norma",
          "Sof axloqiy tavsiya",
          "An'anaviy odat normasi",
          "Korporativ ichki qoida"
        ],
        correct: 0
      },
      {
        q: "Yirik korporatsiyalarda xodimlarning kiyinish standarti va o'zaro muloqot etikasi qaysi normalar tizimiga kiradi?",
        options: [
          "Korporativ normalar",
          "Diniy normalar",
          "Umumhuquqiy normalar",
          "An'anaviy odat normalari"
        ],
        correct: 0
      },
      {
        q: "Davlat tomonidan o'rnatiladigan, rasmiylashtiriladigan va majburlov kuchi bilan muhofaza qilinadigan qoidalar qaysi?",
        options: [
          "Huquq normalari",
          "Axloq normalari",
          "Odat normalari",
          "Estetik normalar"
        ],
        correct: 0
      },
      {
        q: "Huquq normalarining axloq normalaridan ajratib turuvchi eng asosiy fotiha belgisi nimada?",
        options: [
          "Davlat majburlov kuchi bilan ta'minlanganligida",
          "Faqat yozma manbalarda aks etishida va universal el e'tiborida",
          "Faqat ichki vijdon amriga va adolat tuyg'usiga asoslanishida",
          "Subyektlar uchun mutlaqo ixtiyoriy xarakterga ega ekanligida"
        ],
        correct: 0
      },
      {
        q: "Huquq normalari o'zining rasmiy ifodasini majburiy ravishda qayerda topadi?",
        options: [
          "Rasmiy manbalarda va normativ-huquqiy hujjatlarda",
          "Insonlarning subyektiv huquqiy ongida",
          "Faqat muqaddas diniy manbalar matnida",
          "Og'zaki an'analar va ijtimoiy nutqlarda"
        ],
        correct: 0
      },
      {
        q: "Huquqiy sanksiyalar o'zining tabiati jihatidan qanday xarakterga ega bo'ladi?",
        options: [
          "Aniq va oldindan qat'iy belgilangan",
          "Noaniq va faqat ma'naviy ta'sirga ega",
          "Faqat ijtimoiy taqiqlardan iborat bo'lgan",
          "Faqat jamoat tashkilotlari qo'llaydigan"
        ],
        correct: 0
      },
      {
        q: "Aks isbotlanmaguncha, muayyan huquqiy fakt yoki holatni haqiqiy deb qabul qilish qanday nomlanadi?",
        options: [
          "Huquqiy prezumsiya",
          "Huquqiy aksioma",
          "Huquqiy sanksiya",
          "Huquqiy dispozitsiya"
        ],
        correct: 0
      },
      {
        q: "Aybsizlik prezumpsiyasi qaysi huquqiy sohada eng fundamental sudlov prinsipi hisoblanadi?",
        options: [
          "Jinoyat-prosessual huquqida",
          "Xalqaro xususiy huquqda",
          "Jamoaviy mehnat huquqida",
          "Ekologiya va yer huquqida"
        ],
        correct: 0
      },
      {
        q: "Isbot talab qilmaydigan, huquq fani va amaliyotida uzoq vaqt davomida shakllangan fundamental haqiqat nima?",
        options: [
          "Huquqiy aksioma",
          "Huquqiy prezumsiya",
          "Huquqiy sanksiya",
          "Huquqiy dispozitsiya"
        ],
        correct: 0
      },
      {
        q: "Ijtimoiy normalar ichida eng aniq, qat'iy va rasmiy xarakterga ega bo'lgan ijtimoiy regulyator qaysi?",
        options: [
          "Huquq",
          "Axloq",
          "Odat",
          "An'ana"
        ],
        correct: 0
      },
      {
        q: "Huquq normasining huquq tizimidagi strukturaviy o'rni qanday tavsiflanadi?",
        options: [
          "Huquq tizimining eng kichik, birlamchi va bo'linmas elementi sifatida",
          "Huquq tizimidagi eng yuqori, yakunlovchi va jamlovchi elementi sifatida",
          "Huquq tizimidagi ikkinchi darajali, yordamchi institut elementi sifatida",
          "Huquq tizimidan tashqarida mustaqil amal qiluvchi funksional element sifatida"
        ],
        correct: 0
      },
      {
        q: "Umummajburiylik belgisi huquq normasiga nisbatan nimani anglatadi?",
        options: [
          "O'z ta'sir doirasidagi barcha subyektlar uchun bajarilishi qat'iy shartligini",
          "Faqat jismoniy shaxslarga tegishli bo'lib, davlat organlariga daxlsizligini",
          "Faqat mansabdor shaxslarga nisbatan qo'llanilishi majburiyligini",
          "Davlat organlari tomonidan ixtiyoriy ravishda bajarilishini"
        ],
        correct: 0
      },
      {
        q: "Huquq normasining 'personifikatsiyalanmaganlik' belgisi ostida nima tushuniladi?",
        options: [
          "Norma aniq bir shaxsga emas, balki noaniq doiradagi subyektlarga qaratilganligi",
          "Normaning faqat xorijiy fuqarolar huquqiy maqomini belgilashi",
          "Normaning faqat ijro etuvchi hokimiyat idoralariga shaxsan yuborilishi",
          "Normaning faqat davlat xizmatchilariga nisbatan tatbiq etilishi"
        ],
        correct: 0
      },
      {
        q: "Huquq normasining rasmiy aniqlik belgisi nimani ifodalaydi?",
        options: [
          "Normaning rasmiy hujjatlarda qat'iy va tushunarli tarzda bayon etilishini",
          "Normaning faqat ogzaki nutq va muzokaralarda ifodalanishini",
          "Normaning faqat sud pretsedentlari tizimida e'lon qilinishini",
          "Normaning faqat axloqiy qadriyatlar orqali tasdiqlanishini"
        ],
        correct: 0
      },
      {
        q: "Huquq normasining 'vakolat beruvchi-majburlovchi' (atributiv-imperativ) xarakteri nimani anglatadi?",
        options: [
          "Norma bir subyektga huquq bersa, ikkinchisiga mos yuridik majburiyat yuklashini",
          "Normaning faqat huquqlar berishga yoki faqat majburiyat yuklashga xizmat qilishini",
          "Normaning faqat davlat organlari uchun mutlaq vakolatlar belgilashini",
          "Normaning subyektga faqat bir tomonlama imtiyozlar taqdim etishini"
        ],
        correct: 0
      },
      {
        q: "Vakolat beruvchi-majburlovchi xarakter asosan qaysi huquq tarmoqlarida yaqqol namoyon bo'ladi?",
        options: [
          "Fuqarolik, mehnat va oila huquqi kabi tartibga soluvchi sohalarda",
          "Jinoyat va ma'muriy huquq kabi faqat muhofaza qiluvchi sohalarda",
          "Konstitutsiyaviy va xalqaro ommaviy huquq normalarida",
          "Definitiv va deklarativ xarakterdagi umumiy normalarda"
        ],
        correct: 0
      },
      {
        q: "Huquq normasining mantiqiy tuzilishi an'anaviy ravishda nechta elementdan iborat bo'ladi?",
        options: [
          "Uchta o'zaro uzviy bog'liq elementdan",
          "Ikkita o'zaro qarama-qarshi elementdan",
          "To'rt va undan ortiq murakkab elementlardan",
          "Bitta universal mustaqil elementdan"
        ],
        correct: 0
      },
      {
        q: "Huquq normasining mantiqiy tuzilishini ifodalovchi klassik formula qaysi?",
        options: [
          "If (Agar)... then (U holda)... else (Aks holda)...",
          "Condition (Shart)... Result (Natija)... Effect (Oqibat)...",
          "Command (Buyruq)... Execution (Ijro)... Reward (Mukofot)...",
          "Right (Huquq)... Obligation (Majburiyat)... Liability (Javobgarlik)..."
        ],
        correct: 0
      },
      {
        q: "Huquq nazariyasida dispozitsiyasiz norma qanday baholanadi?",
        options: [
          "Mantiqiy mazmunga ega bo'lmagan mukammal bo'lmagan norma",
          "Faqat sanksiyadan iborat bo'lgan jazolovchi norma",
          "Yuridik kuchga ega bo'lmagan amaldagi tavsiya",
          "Faqat deklarativ ahamiyatga ega bo'lgan mafkuraviy qoida"
        ],
        correct: 0
      },
      {
        q: "Gipoteza huquq normasining mantiqiy modelida qaysi shartli qismga to'g'ri keladi?",
        options: [
          "Normaning amal qilish shartlarini belgilovchi 'Agar...' qismiga",
          "Xulq-atvor qoidasini ifodalovchi 'U holda...' qismiga",
          "Huquqiy oqibatni ko'rsatuvchi 'Aks holda...' qismiga",
          "Kirish qismi hisoblangan 'Shuning uchun...' qismiga"
        ],
        correct: 0
      },
      {
        q: "Murakkab gipoteza tushunchasi huquqiy normada qanday tavsiflanadi?",
        options: [
          "Normani ishga tushirish uchun ikki yoki undan ortiq shartning bir vaqtda mavjudligini talab etishi",
          "Sanalgan holatlardan faqat bittasining mavjudligini qat'iy kifoya deb bilishi",
          "Yuridik normani amalga oshirish uchun faqat bitta mutlaq shartni ko'rsatishi",
          "Normaning amal qilishini noaniq va subyektiv xususiy holatlar bilan bog'lashi"
        ],
        correct: 0
      },
      {
        q: "Dispozitsiya huquq normasida qanday asosiy yuridik vazifani bajaradi?",
        options: [
          "Subyektlarning o'zaro huquq va majburiyatlarini, ya'ni xulq-atvor qoidasini belgilaydi",
          "Normaning amal qilish makoni, vaqti va yuridik faktlarini ko'rsatadi",
          "Dispozitsiya tabaqasi buzilgandagi davlat majburlov choralarini nazarda tutadi",
          "Normativ hujjatlar o'rtasidagi huquqiy kolliziyalarni hal etish tartibini belgilaydi"
        ],
        correct: 0
      },
      {
        q: "Dispozitsiya mantiqiy tuzilish sxemasida qaysi elementga funksional jihatdan to'g'ri keladi?",
        options: [
          "Xulq-atvorni buyuruvchi 'U holda' qismiga",
          "Shart-sharoitni ko'rsatuvchi 'Agar...' qismiga",
          "Huquqiy sanksiyani ifodalovchi 'Aks holda' qismiga",
          "Kirish deklaratsiyasi bo'lgan 'Shunga binoan...' qismiga"
        ],
        correct: 0
      },
      {
        q: "Blanket dispozitsiya o'zining yuridik tabiati jihatidan nima bilan tavsiflanadi?",
        options: [
          "Normaning mazmuni boshqa sohadagi maxsus normativ-huquqiy hujjatlarda ochib berilishi bilan",
          "Normaning barcha elementlari shu moddaning o'zida to'liq va tugal bayon etilishi bilan",
          "Normaning mazmunini bilish uchun faqat shu hujjatning boshqa moddasiga havola qilinishi bilan",
          "Normaning subyekt uchun faqat bitta muqobil variantini nazarda tutishi bilan"
        ],
        correct: 0
      },
      {
        q: "Sanksiya huquq normasining mantiqiy tuzilishida qaysi funksional qismga to'g'ri keladi?",
        options: [
          "Huquqbuzarlik oqibatini belgilovchi 'Aks holda' qismiga",
          "Shartlarni aniqlovchi 'Agar...' qismiga",
          "Xulq-atvorni tartibga soluvchi 'U holda' qismiga",
          "Norma maqsadini e'lon qiluvchi 'Shunday holatda...' qismiga"
        ],
        correct: 0
      },
      {
        q: "Nisbatan aniq sanksiya huquqiy normada qanday tavsiflanadi?",
        options: [
          "Yuridik jazo chorasining yuqori va quyi chegaralarini belgilaydi",
          "Faqat bitta qat'iy va muqobilsiz jazo chorasini ko'rsatadi",
          "Bir nechta mutlaqo mustaqil jazo turlaridan birini tanlash imkonini beradi",
          "Asosiy va qo'shimcha jazo choralarini bir vaqtda qo'llashni majburlaydi"
        ],
        correct: 0
      },
      {
        q: "Deklarativ normalarning huquqiy tizimdagi asosiy funksional vazifasi nimadan iborat?",
        options: [
          "Davlatning strategik maqsadlari, prinsiplari yoki muayyan huquqiy holatlarini e'lon qilishdan",
          "Huquqiy tizimning poydevori bo'lgan fundamental konstitutsiyaviy g'oyalarni muhofaza qilishdan",
          "Yuridik tushuncha va terminlarning rasmiy legal ta'rifini berishdan",
          "Normativ hujjatlar o'rtasida yuzaga keladigan ziddiyatlarni bartaraf etish qoidalarini belgilashdan"
        ],
        correct: 0
      },
      {
        q: "Definitiv normalarning huquqiy tizimdagi asosiy vazifasi nimadan iborat?",
        options: [
          "Yuridik tushunchalar, terminlar va institutlarning qonuniy legal ta'rifini berishdan",
          "Davlatning kelajakdagi strategik va mafkuraviy maqsadlarini e'lon qilishdan",
          "Huquqiy tizimda qonuniylikni ta'minlovchi prinsiplarni mustahkamlashdan",
          "Normativ-huquqiy hujjatlarning kuchga kirish va bekor bo'lish muddatlarini belgilashdan"
        ],
        correct: 0
      },
      {
        q: "Kollizion normalarning huquqiy tartibga solishdagi funksiyasi nima?",
        options: [
          "Turli normalar o'rtasida ziddiyat (kolliziya) yuzaga kelganda qaysi birini qo'llashni ko'rsatishdan",
          "Normativ hujjatlarning vaqt va makon bo'yicha amal qilish chegaralarini belgilashdan",
          "Yuridik terminlarning qonunchilikdagi haqiqiy mazmunini sharhlab berishdan",
          "Huquqiy tizimning poydevori bo'lgan xalqaro prinsiplarni import qilishdan"
        ],
        correct: 0
      },
      {
        q: "Operativ normalarning huquqiy tartibga solishdagi asosiy vazifasi nimadan iborat?",
        options: [
          "Hujjatlarning amal qilishini — ularning kuchga kirishi va bekor qilinishini tartibga solishdan",
          "Turli qonunlar o'rtasidagi tizimli ziddiyatlarni amaliy hal etishdan",
          "Yuridik institutlarning qonuniy va ilmiy ta'riflarini belgilashdan",
          "Davlatning ommaviy-huquqiy sohadagi strategik vazifalarini e'lon qilishdan"
        ],
        correct: 0
      },
      {
        q: "Tartibga soluvchi (regulyativ) normalarning huquqiy tizimdagi roli nimadan iborat?",
        options: [
          "Subyektlarga huquq va majburiyatlar berish orqali ijobiy munosabatlarni tashkil etishdan",
          "Huquqbuzarlik holatlarida davlat majburlov choralarini qo'llash shartlarini aniqlashdan",
          "Subyektlarga muayyan xulq-atvor qoidasini yuklamay, umumiy maqsadlarni deklaratsiya qilishdan",
          "Normativ-huquqiy hujjatlar o'rtasidagi iyerarxik ziddiyatlarni bartaraf etishdan"
        ],
        correct: 0
      }
    ])
  },
//////////////////
topic2: {
  title: "Davlat va huquq nazariyasi (2-Bo'lim)",
  questions: randomizeQuestions([
    {
      "q": "Jamiyat a'zolari o'rtasida yuzaga keladigan ongli, maqsadga yo'naltirilgan o'zaro aloqalar tizimi nima deb ataladi?",
      "options": [
        "Ijtimoiy normalar tizimi",
        "Ijtimoiy munosabatlar",
        "Ijtimoiy institutlar majmui",
        "Huquqiy aloqalar tizimi"
      ],
      "correct": 1
    },
    {
      "q": "Ijtimoiy munosabatlarning asosiy xususiyati nimada namoyon bo'ladi?",
      "options": [
        "Faqat moddiy va iqtisodiy manfaatlarga asoslanishida",
        "Subyektlarning ongli-irodaviy o'zaro ta'siri va manfaatlari tizimlashuvida",
        "Faqat davlatning huquq ijodkorligi faoliyati orqali belgilanishida",
        "Tabiat va jamiyat o'rtasidagi obyektiv qonuniyatlarga bo'ysunishida"
      ],
      "correct": 1
    },
    {
      "q": "O'qituvchi va o'quvchi o'rtasidagi munosabat ijtimoiy munosabatlarning qaysi turiga kiradi?",
      "options": [
        "Iqtisodiy-sinfiy munosabatlar",
        "Siyosiy-institutsional munosabatlar",
        "Ma'naviy-ma'rifiy (ijtimoiy-madaniy) munosabatlar",
        "Sof huquqiy-shartnomaviy munosabatlar"
      ],
      "correct": 2
    },
    {
      "q": "Jamiyatda tartibga solish (boshqarish) deganda nima tushuniladi?",
      "options": [
        "Faqat davlat organlari tomonidan jazo choralarini qo'llash",
        "Insonlar xulq-atvorini muayyan maqsad va qoidalar asosida yo'naltirish",
        "Iqtisodiy resurslarni markazlashtirilgan holda taqsimlash",
        "Tabiiy va ijtimoiy jarayonlarni stixiyali tarzda boshqarish"
      ],
      "correct": 1
    },
    {
      "q": "Umumiy xarakterga ega bo'lib, jamiyatning barcha a'zolariga tatbiq etiladigan tartibga solish shakli qaysi?",
      "options": [
        "Individual (yakka tartibdagi) tartibga solish",
        "Texnik-texnologik tartibga solish",
        "Normativ (me'yoriy) tartibga solish",
        "Kazuistik (tasodifiy) tartibga solish"
      ],
      "correct": 2
    },
    {
      "q": "Jamiyatda qabul qilingan, ko'p marta takrorlanadigan umumiy xulq-atvor qoidalari nima deb ataladi?",
      "options": [
        "Huquqiy prezumpsiyalar",
        "Ijtimoiy normalar",
        "Texnik standartlar",
        "Yakka tartibdagi ko'rsatmalar"
      ],
      "correct": 1
    },
    {
      "q": "Ezgulik va yovuzlik, adolat va nohaqlik, burch va vijdon haqidagi tushunchalarga asoslangan normalar qaysi?",
      "options": [
        "Huquq normalari",
        "Axloq normalari",
        "Korporativ normalar",
        "Odatiy-maishiy normalar"
      ],
      "correct": 1
    },
    {
      "q": "Axloq normalarining buzilishi qanday sanksiyaga (oqibatga) sabab bo'ladi?",
      "options": [
        "Ma'muriy jarima va moddiy zarar qoplanishi",
        "Davlatning majburlash choralari va qamoq jazosi",
        "Jamoatchilik qoralamasi va ichki ma'naviy ta'sir (vijdon azobi)",
        "Intizomiy chora va korporativ huquqdan mahrum qilish"
      ],
      "correct": 2
    },
    {
      "q": "Siyosiy partiyalarning, jamoat birlashmalarining ustavlari va ichki nizomlari qaysi normalarga misol bo'ladi?",
      "options": [
        "Diniy-kanonik normalar",
        "Mintaqaviy-siyosiy normalar",
        "An'anaviy-odatiy normalar",
        "Korporativ (jamoat tashkilotlari) normalari"
      ],
      "correct": 3
    },
    {
      "q": "\"Zakot\" berish islomiy huquq tizimi (Shariat) ustuvor bo'lgan davlatlarda qaysi ijtimoiy norma turiga kiradi?",
      "options": [
        "Faqat axloqiy va ma'naviy majburiyat",
        "Ham diniy, ham rasmiy huquqiy norma",
        "Sof texnik-iqtisodiy normativ ko'rsatkich",
        "Yakka tartibdagi individual tavsiya"
      ],
      "correct": 1
    },
    {
      "q": "Banklardagi xodimlarning kiyinish standarti (dress-code) va muloqot etikasi qaysi normalarga kiradi?",
      "options": [
        "Korporativ (tashkiliy) normalar",
        "Umumiy diniy-axloqiy munosabatlar",
        "Umummajburiy huquqiy normalar",
        "Tarixiy-an'anaviy odat normalari"
      ],
      "correct": 0
    },
    {
      "q": "Davlat tomonidan o'rnatiladigan (yoki sanksiyalanadigan) va muhofaza qilinadigan, umummajburiy xulq-atvor qoidalari qaysi?",
      "options": [
        "Ijtimoiy-axloqiy normalar",
        "Huquq normalari",
        "Tarixiy odat normalari",
        "Estetik-madaniy normalar"
      ],
      "correct": 1
    },
    {
      "q": "Huquq normalarining axloq normalaridan asosiy farqi nimada?",
      "options": [
        "Faqat og'zaki yoki norasmiy shaklda mavjud bo'lishida",
        "Davlatning majburlash kuchi bilan ta'minlanishida va rasmiyligida",
        "Faqat shaxsning ichki iymon va vijdoniga asoslanishida",
        "Jamiyat a'zolari uchun mutlaqo ixtiyoriy xarakterga egaligida"
      ],
      "correct": 1
    },
    {
      "q": "Huquq normalari qayerda (qanday shaklda) o'z rasmiy ifodasini topadi?",
      "options": [
        "Faqat insonlarning huquqiy ongi va hissiyotlarida",
        "Normativ-huquqiy hujjatlar va boshqa rasmiy manbalarda",
        "Faqat muqaddas diniy-ideologik kitoblarda",
        "Faqat og'zaki nutq va xalq og'zaki ijodiyoti an'analarida"
      ],
      "correct": 1
    },
    {
      "q": "Huquqiy sanksiyalar qanday xarakterga ega?",
      "options": [
        "Mavhum va faqat ma'naviy qoralash xarakteriga",
        "Aniq shakllangan va normativ hujjatda oldindan belgilangan",
        "Faqat diniy-g'oyaviy taqiqlardan iborat bo'lgan",
        "Faqat jamoat tashkilotlari tomonidan qo'llaniladigan"
      ],
      "correct": 1
    },
    {
      "q": "Aks ta'minlanmagungacha (teskarisi isbotlanmaguncha) ma'lum faktni haqiqiy deb qabul qilish nima deb ataladi?",
      "options": [
        "Huquqiy aksioma",
        "Huquqiy prezumpsiya",
        "Huquqiy fiksiya",
        "Huquqiy sanksiya"
      ],
      "correct": 1
    },
    {
      "q": "\"Aybsizlik prezumutsiyasi\" qaysi huquq sohasida eng asosiy fundamental prinsip hisoblanadi?",
      "options": [
        "Fuqarolik-shartnomaviy munosabatlarda",
        "Jinoyat va jinoyat-prosessual huquqida",
        "Kollektiv mehnat huquqi sohasida",
        "Xalqaro ekologiya huquqida"
      ],
      "correct": 1
    },
    {
      "q": "Isbotni talab qilmaydigan, huquqiy nazariya va amaliyotda hamma tomonidan tan olingan haqiqatlar nima deb ataladi?",
      "options": [
        "Huquqiy prezumpsiyalar",
        "Huquqiy aksiomalar",
        "Huquqiy sanksiyalar",
        "Huquqiy dispozitsiyalar"
      ],
      "correct": 1
    },
    {
      "q": "Ijtimoiy normalar ichida eng aniq, rasmiy va davlat tomonidan kafolatlangan vosita qaysi?",
      "options": [
        "Ijtimoiy axloq munosabatlari",
        "Huquq normalari tizimi",
        "Asriy odat va an'analar",
        "Diniy-ma'naviy ko'rsatmalar"
      ],
      "correct": 1
    },
    {
      "q": "Huquq normasining huquq tizimidagi o'rni qanday belgilanadi?",
      "options": [
        "Huquq tizimining eng kichik, birlamchi tarkibiy elementi sifatida",
        "Huquq tizimidagi eng yuqori, yakunlovchi institut sifatida",
        "Huquq tizimidagi ikkinchi darajali, yordamchi normativ element sifatida",
        "Huquq tizimidan mutlaqo mustaqil faoliyat ko'rsatuvchi institut sifatida"
      ],
      "correct": 0
    },
    {
      "q": "Umummajburiylik belgisi huquq normasiga nisbatan nimani anglatadi?",
      "options": [
        "O'z ta'sir doirasidagi barcha subyektlar uchun bajarilishi qat'iy majburiyligini",
        "Faqat fuqarolar uchun majburiy bo'lib, davlat organlariga daxlsizligini",
        "Faqat muayyan mansabdor shaxslarga nisbatan sanksiya qo'llanilishini",
        "Davlat organlari tomonidan ixtiyoriy ravishda ijro etilishini"
      ],
      "correct": 0
    },
    {
      "q": "Huquq normasining «personifikatsiyalanmaganlik» (shaxssizlantirilganlik) belgisi nimani bildiradi?",
      "options": [
        "Norma aniq bir shaxsga emas, balki subyektlarning umumiy, noaniq doirasiga qaratilganligini",
        "Norma faqat xorijiy fuqarolar va fuqaroligi bo'lmagan shaxslarga oidligini",
        "Norma ijro etuvchi hokimiyat organlariga shaxsan yo'naltirilganligini",
        "Norma faqat davlat xizmatchilarining individual faoliyatini cheklashini"
      ],
      "correct": 0
    },
    {
      "q": "Huquq normasining rasmiy aniqlik belgisi nima degani?",
      "options": [
        "Normaning davlat rasmiy hujjatlarida aniq, tushunarli va qat'iy tilda mustahkamlanishini",
        "Normaning faqat og'zaki yoki norasmiy nutqiy shaklda ifodalanishini",
        "Normaning faqat oliy sud instansiyalari hujjatlarida e'lon qilinishini",
        "Normaning ijtimoiy axloq me'yorlari orqali bilvositada tasdiqlanishini"
      ],
      "correct": 0
    },
    {
      "q": "Huquq normasining «vakolat beruvchi-majburlovchi» (atributiv-imperativ) xarakteri nimani anglatadi?",
      "options": [
        "Norma bir vaqtning o'zida bir subyektga huquq bersa, ikkinchisiga mos majburiyat yuklashini",
        "Norma faqat huquqlar berishga yoki faqat majburiyatlar yuklashga xizmat qilishini",
        "Norma faqat davlat organlari uchun mutlaq eksklyuziv vakolatlar belgilashini",
        "Norma subyektga faqat yakka tomonlama imtiyozlar va yuklamalar berishini"
      ],
      "correct": 0
    },
    {
      "q": "Vakolat beruvchi-majburlovchi (atributiv-imperativ) xarakter xususiy subyektlar huquqini muvozanatlashda qaysi huquq tarmoqlarida yaqqol ko'zga tashlanadi?",
      "options": [
        "Fuqarolik, mehnat va oila huquqi kabi tartibga soluvchi munosabatlarda",
        "Jinoyat va ma'muriy huquq kabi faqat muhofaza qiluvchi normalarda",
        "Konstitutsiyaviy va davlat-huquqiy deklarativ normalarda",
        "Definitiv va kollizion xarakterdagi texnik-huquqiy normalarda"
      ],
      "correct": 0
    },
    {
      "q": "Huquq normasining mantiqiy tuzilishi an'anaviy ravishda qancha elementdan iborat?",
      "options": [
        "Uchta o'zaro bog'liq tarkibiy elementdan (gipoteza, dispozitsiya, sanksiya)",
        "Ikkita o'zaro bog'liq elementdan (gipoteza va dispozitsiya)",
        "To'rt va undan ortiq ijtimoiy-huquqiy elementlardan",
        "Faqat bitta sanksiyalovchi asosiy elementdan"
      ],
      "correct": 0
    },
    {
      "q": "Huquq normasining mantiqiy tuzilishini ifodalovchi klassik formula qaysi?",
      "options": [
        "«Agar... bo'lsa, unda... aks holda...»",
        "«Shart... natija... oqibat...»",
        "«Buyruq... bajarish... mukofot...»",
        "«Huquq... majburiyat... javobgarlik...»"
      ],
      "correct": 0
    },
    {
      "q": "Nazariyada dispozitsiyasiz (xulq-atvor qoidasisiz) qoldirilgan model qanday ta'riflanadi?",
      "options": [
        "Mantiqiy izchillikka ega bo'lmagan deb hisoblanadi",
        "Huquqiy tartibga solish mazmuniga ega bo'lmagan deb hisoblanadi",
        "Yuridik kuchga ega bo'lmagan deb hisoblanadi",
        "Amaliyotda qo'llab bo'lmaydigan (amalsiz) deb hisoblanadi"
      ],
      "correct": 1
    },
    {
      "q": "Gipoteza huquq normasining mantiqiy modelida qaysi qismga to'g'ri keladi?",
      "options": [
        "«Agar...» (shart-sharoit) qismiga",
        "«Unda...» (xulq-atvor qoidasi) qismiga",
        "«Aks holda...» (huquqiy oqibat) qismiga",
        "«Shunday bo'lsa...» (tushuntirish) qismiga"
      ],
      "correct": 0
    },
    {
      "q": "Murakkab gipoteza qanday belgilanadi?",
      "options": [
        "Normani ishga tushirish uchun ikki yoki undan ko'p shartning bir vaqtda mavjud bo'lishini talab etadi",
        "Sanab o'tilgan holatlardan faqat bittasining mavjudligini kifoya deb biladi",
        "Yuridik normani amalga oshirish uchun faqat bitta mutloq shartni ko'rsatadi",
        "Normaning amal qilishini aniq belgilangan subyektiv xususiyatlar bilan bog'laydi"
      ],
      "correct": 0
    },
    {
      "q": "Dispozitsiya huquq normasida qanday vazifani bajaradi?",
      "options": [
        "Subyektlar amal qilishi lozim bo'lgan xulq-atvor qoidasini, ya'ni ularning o'zaro huquq va majburiyatlarini belgilaydi",
        "Normaning amal qilish shart-sharoitlarini va aniq yuridik faktlarni ko'rsatadi",
        "Dispozitsiya talablari buzilgandagi davlat majburlash choralarini nazarda tutadi",
        "Normativ hujjatlar o'rtasidagi kollizion ziddiyatlarni hal qilish tartibini belgilaydi"
      ],
      "correct": 0
    }
  ]),
},


  ///////////////////////////////

topic3: {
  title: "Davlat va huquq nazariyasi (3-Bo'lim)",
  questions: randomizeQuestions([
    {
      "q": "Dispozitsiya huquq normasining mantiqiy tuzilishida qaysi qismga to'g'ri keladi?",
      "options": [
        "«U holda» (ijro yoki xulq-atvor qoidasi) qismiga",
        "«Agar...» (huquqiy shart-sharoit) qismiga",
        "«Aks holda» (huquqiy oqibat yoki sanksiya) qismiga",
        "«Shunga binoan...» (deklarativ-boshlang'ich) qismiga"
      ],
      "correct": 0
    },
    {
      "q": "Blanket dispozitsiya nima bilan tavsiflanadi?",
      "options": [
        "Normaning mazmuni boshqa sohadagi maxsus normativ-huquqiy hujjatlarda ochib berilishi bilan",
        "Normaning barcha elementlari shu moddaning o'zida bevosita va to'liq bayon etilishi bilan",
        "Normaning mazmunini bilish uchun shu huquqiy hujjatning boshqa moddasiga havola qilinishi bilan",
        "Normaning subyekt uchun faqat bitta muayyan xulq-atvor variantini nazarda tutishi bilan"
      ],
      "correct": 0
    },
    {
      "q": "Sanksiya huquq normasining mantiqiy tuzilishida qaysi qismga to'g'ri keladi?",
      "options": [
        "«Aks holda» (huquqiy salbiy oqibat) qismiga",
        "«Agar...» (gipoteza-shart) qismiga",
        "«U holda» (dispozitsiya-qoida) qismiga",
        "«Shunday holatda...» (tushuntirish) qismiga"
      ],
      "correct": 0
    },
    {
      "q": "Nisbatan aniq sanksiya nima bilan tavsiflanadi?",
      "options": [
        "Jazoning eng yuqori va eng quyi (yoki faqat yuqori) chegarasini belgilashi bilan",
        "Mutloq bitta aniq jazo chorasi va uning qat'iy miqdorini ko'rsatishi bilan",
        "Bir nechta mustaqil jazo turlaridan faqat birini tanlash imkonini berishi bilan",
        "Asosiy va qo'shimcha jazo choralarini majburiy ravishda birgalikda qo'llashni belgilashi bilan"
      ],
      "correct": 0
    },
    {
      "q": "Deklarativ normalarning asosiy vazifasi nimadan iborat?",
      "options": [
        "Davlatning strategik maqsadlari, vazifalari yoki muayyan huquqiy holatlarni rasman e'lon qilishdan",
        "Huquqiy tizimning poydevori bo'lgan fundamental konstitutsiyaviy g'oyalarni mustahkamlashdan",
        "Yuridik tushunchalar va huquqiy hodisalarning qonuniy (legal) ta'rifini berishdan",
        "Normativ-huquqiy hujjatlar o'rtasidagi kollizion ziddiyatlarni hal etish qoidalarini belgilashdan"
      ],
      "correct": 0
    },
    {
      "q": "Definitiv normalarning vazifasi nimadan iborat?",
      "options": [
        "Yuridik tushunchalar va huquqiy hodisalarning qonuniy (legal) ta'rifini berishdan",
        "Davlatning strategik maqsadlari va siyosiy-huquqiy yo'nalishlarini deklarativ e'lon qilishdan",
        "Huquqiy tizimning poydevori bo'lgan poydevor tamoyillar va g'oyalarni mustahkamlashdan",
        "Normativ-huquqiy hujjatlarning vaqt va makon bo'yicha kuchga kirishi muddatlarini belgilashdan"
      ],
      "correct": 0
    },
    {
      "q": "Kollizion normalarning vazifasi nimadan iborat?",
      "options": [
        "Turli normalar o'rtasida huquqiy ziddiyat yuzaga kelganda qay birini qo'llash kerakligini ko'rsatishdan",
        "Normativ-huquqiy hujjatlarning kuchga kirishi yoki kuchini yo'qotishi muddatlarini belgilashdan",
        "Yuridik tushunchalarning qonuniy (legal) mazmuni va terminologik ta'rifini ochib berishdan",
        "Huquqiy tizimning poydevori bo'lgan fundamental g'oyalarni muhofaza qilishdan"
      ],
      "correct": 0
    },
    {
      "q": "Operativ normalarning vazifasi nimadan iborat?",
      "options": [
        "Normativ-huquqiy hujjatlarning amal qilishini — kuchga kirishi, o'zgartirilishi va bekor qilinishini tartibga solishdan",
        "Normativ-huquqiy hujjatlar o'rtasidagi kollizion ziddiyatlarni tezkor hal etishdan",
        "Yuridik tushunchalar va huquqiy hodisalarning qonuniy (legal) ta'rifini tezkor belgilashdan",
        "Davlatning strategik maqsadlari va siyosiy dasturlarini deklarativ e'lon qilishdan"
      ],
      "correct": 0
    },
    {
      "q": "Tartibga soluvchi (regulyativ) normalarning vazifasi nimadan iborat?",
      "options": [
        "Subyektlarga huquq va majburiyatlar berish orqali ijobiy ijtimoiy munosabatlarni tashkil etishdan",
        "Huquqbuzarlik holatlarida davlat majburlash choralarini va sanksiyalarni qo'llash shartlarini belgilashdan",
        "Subyektlarga bevosita xulq-atvor normasini ko'rsatmay, davlatning umumiy maqsadlarini e'lon qilishdan",
        "Normativ-huquqiy hujjatlar o'rtasidagi qarama-qarshiliklarni hal etish tartibini belgilashdan"
      ],
      "correct": 0
    },
    {
      "q": "Huquq prinsiplari (tamoyillari) deganda nimani tushunasiz?",
      "options": [
        "Davlat organlarining ichki idoraviy faoliyatini tartibga soluvchi yo'riqnomalar majmuini",
        "Huquqning mohiyati va ijtimoiy vazifasini ifodalovchi boshlang'ich normativ asoslar, rahbar g'oyalar va qoidalarni",
        "Faqat Konstitutsiyada belgilangan va boshqa tarmoq hujjatlarida aks ettirilmaydigan normalar tizimini",
        "Qonun chiqaruvchi organlarning qonunchilik texnikasi jarayonida qabul qiladigan tavsiyaviy qarorlarini"
      ],
      "correct": 1
    },
    {
      "q": "Huquq prinsiplari odatda qayerda mustahkamlanadi?",
      "options": [
        "Faqat prezident farmonlari va hukumat qarorlari kabi ijro etuvchi hokimiyat hujjatlarida",
        "Asosan xalqaro shartnomalar matnida va BMT Nizomining tegishli xalqaro-huquqiy bo'limlarida",
        "Mamlakat Konstitutsiyasida, qonun va kodekslarning muqaddimasi yoki umumiy qoidalar qismida maxsus belgilab qo'yiladi",
        "Faqat oliy sud plenum qarorlarida va Konstitutsiyaviy sud ajrimlarining matnida"
      ],
      "correct": 2
    },
    {
      "q": "Quyidagilardan qaysi biri umumhuquqiy prinsiplarga kirmaydi?",
      "options": [
        "Gumanizm tamoyili — insonning qadr-qimmati va huquqlarini himoya qilishni ta'minlovchi universal tamoyil",
        "Qonuniylik tamoyili — barcha subyektlarning qonun ustuvorligiga rioya etishini ta'minlovchi universal tamoyil",
        "Aybsizlik prezumpsiyasi — shaxs aybi sud tomonidan qonuniy tartibda isbotlanmaguncha u aybsiz hisoblanishi",
        "Mehnat erkinligi tamoyili — muayyan huquq tarmog'iga xos bo'lgan ixtisoslashgan sohaviy tamoyil"
      ],
      "correct": 3
    },
    {
      "q": "Demokratizm prinsipi huquqni shakllantirish sohasida qanday namoyon bo'ladi?",
      "options": [
        "Faqat davlat organlari va vazirliklar tomonidan qonun loyihalarini idoraviy-yopiq tarzda ishlab chiqishida",
        "Xalq vakillari, jamoat birlashmalari va fuqarolarning qonunchilik jarayonida keng hamda faol ishtirok etishida",
        "Faqat umumxalq referendumi o'tkazish, ya'ni to'g'ridan-to'g'ri ovoz berish yo'li bilan cheklangan munosabatlarda",
        "Asosan saylov kampaniyalari va siyosiy partiyalarning ichki tashkiliy ustavlarini tuzish jarayonida"
      ],
      "correct": 1
    },
    {
      "q": "Qonuniylik prinsipining asosiy ma'nosi nima?",
      "options": [
        "Faqat sud organlari va prokuratura xodimlari o'z faoliyatida qonun talablariga qat'iy rioya etishi lozimligi",
        "Har qanday huquqiy faoliyat va qarorlar qonunga muvofiq bo'lishi hamda barcha subyektlarga bir xilda tatbiq etilishi",
        "Yangi qonunlarni muntazam qabul qilib borish va eskirgan normativ hujjatlarni tezkorlik bilan bekor qilish zarurati",
        "Mansabdor shaxslarni qonuniy tartibda lavozimga tayinlash va ularning vakolatlarini idoraviy belgilash tartibi"
      ],
      "correct": 1
    },
    {
      "q": "Insonparvarlik (gumanizm) prinsipi huquqda nimani ta'minlaydi?",
      "options": [
        "Davlatning harbiy va iqtisodiy jihatdan boshqa subyektlar ustidan milliy ustunligini ta'minlovchi mexanizmlarni",
        "Inson qadr-qimmati, erkinliklari va huquqlarini himoya qilishni hamda insonni oliy qadriyat deb tan olishni",
        "Jinoiy jazolarni o'tagan shaxslarning jamiyatga qayta qo'shilishiga ko'maklashuvchi idoraviy dasturlar tizimini",
        "Fuqarolik va mulkiy nizolarni sudgacha hal qilishning tezlashtirilgan muqobil (mediatsiya) mexanizmlarini"
      ],
      "correct": 1
    },
    {
      "q": "Qonun oldida tenglik prinsipiga ko'ra imtiyozlar qanday tartibda berilishi mumkin?",
      "options": [
        "Davlat rahbarining shaxsiy ko'rsatmasi yoki og'zaki buyrug'i asosida istalgan vaqtda va istalgan subyektga",
        "Faqat qonun bilan belgilangan hollarda, ijtimoiy adolat prinsiplariga tayangan holda va umumiy tenglikni buzmasdan",
        "Har qanday yuqori mansabdor shaxs o'z vakolatlari doirasida yakka tartibdagi qaror qabul qilib, imtiyoz belgilashi orqali",
        "Imtiyozlar huquqiy tizimning universal tabiatiga butunlay zid bo'lganligi sababli qonunchilikda umuman berilmaydi"
      ],
      "correct": 1
    },
    {
      "q": "Tarmoqlararo huquqiy prinsiplar deganda nimani tushunasiz?",
      "options": [
        "Faqat bitta huquq tarmog'ining ichida amal qiladigan va shu tarmoqning o'ziga xos tor xususiyatlarini belgilovchi qoidalarni",
        "Ikki yoki undan ortiq o'zaro yaqin huquq tarmoqlarida umumiy amal qiladigan va ularning mazmunini belgilovchi prinsiplarni",
        "Faqat xalqaro ommaviy huquqda amal qiladigan, milliy huquq tizimlari uchun majburiy hisoblanmaydigan prinsiplarni",
        "Faqat Konstitutsiyada belgilangan va quyi tarmoq qonunchiligida mutlaqo takrorlanmaydigan deklarativ normalarni"
      ],
      "correct": 1
    },
    {
      "q": "Aybsizlik prezumpsiyasi prinsipi qaysi huquq tarmoqlariga xosdir?",
      "options": [
        "Faqat moddiy jinoyat huquqiga xos bo'lib, prosessual tarmoqlarda o'zining yuridik kuchini butunlay yo'qotadi",
        "Jinoyat huquqi, ma'muriy javobgarlik, jinoyat-prosessual huquqi kabi tarmoqlarda amal qiluvchi tarmoqlararo prinsipdir",
        "Faqat fuqarolik huquqi va fuqarolik-prosessual huquqidagi mulkiy nizolarni hal qilishda qo'llaniladi",
        "Faqat mehnat huquqi va ijtimoiy ta'minot sohasidagi xizmat intizomi munosabatlarida tatbiq etiladi"
      ],
      "correct": 1
    },
    {
      "q": "Prosessual tarmoqlarda (jinoyat, fuqarolik, iqtisodiy prosess) qaysi tamoyillar umumiy sifatida amal qiladi?",
      "options": [
        "Faqat raqobatbardoshlik tamoyili barcha prosessual tarmoqlarda amal qiladi, qolganlari esa mutloq farqlanadi",
        "Tomonlarning prosessual tengligi, odil sudlovning oshkoraligi, raqobatbardoshlik va sudyalarning mustaqilligi tamoyillari",
        "Faqat aybsizlik prezumpsiyasi va sudyalar mustaqilligi, chunki boshqa prinsiplar faqat moddiy huquqqa tegishli",
        "Faqat javobgarlikning muqarrarligi va adolatni faqat ijro etuvchi hokimiyat organlari tomonidan amalga oshirish tamoyillari"
      ],
      "correct": 1
    },
    {
      "q": "Sohaviy huquq tamoyillari nima?",
      "options": [
        "Barcha huquq tarmoqlariga birday taalluqli bo'lib, butun huquqiy tizimning eng umumiy asosini tashkil etuvchi normalar",
        "Muayyan bir huquq tarmog'ining o'ziga xos xususiyatlarini va mazmunini belgilovchi, faqat shu tarmoqqa tegishli qoidalar",
        "Faqat xalqaro shartnomalar va ikki tomonlama bitimlar asosida shakllangan, milliy huquqda ikkilamchi bo'lgan tamoyillar",
        "Faqat jinoyat huquqiga oid bo'lib, jinoiy javobgarlik va jazo masalalarini qat'iy cheklovchi maxsus normalar majmui"
      ],
      "correct": 1
    },
    {
      "q": "Huquq shakli deganda nima tushuniladi?",
      "options": [
        "Huquq normalerining rasmiy ifodalanish, tashqi ko'rinish va davlat irodasini rasmiylashtirish usuli",
        "Huquq normalerining mazmunini to'g'ridan-to'g'ri belgilovchi iqtisodiy-sinfiy va moddiy omillar tizimi",
        "Huquq normalerining paydo bo'lishiga bilvositada ta'sir qiluvchi mafkuraviy-falsafiy asoslar majmui",
        "Davlat organlari va nodavlat jamoat tashkilotlari o'rtasidagi o'zaro siyosiy munosabatlar tizimi"
      ],
      "correct": 0
    },
    {
      "q": "Huquq manbai qanday ta'riflanadi?",
      "options": [
        "Huquq normasining paydo bo'lishi, shakllanishi va amal qilishiga imkon beruvchi obyektiv zamin hamda uning ildizlari",
        "Davlat irodasini majburiy rasmiylashtirish va faqat poydevor kodekslar shakliga keltirish usullari yig'indisi",
        "Faqat parlament tomonidan qabul qilingan oliy yuridik kuchga ega normativ-huquqiy hujjatlar majmuasi",
        "Sud organlarining barcha qarorlari orqali belgilangan majburiy va kazuistik xulq-atvor qoidalari"
      ],
      "correct": 0
    },
    {
      "q": "Moddiy huquq manbalariga nimalar kiradi?",
      "options": [
        "Iqtisodiy munosabatlar, jamiyatning moddiy shart-sharoitlari va ishlab chiqarish usullari majmui",
        "Huquqiy ong, huquqiy doktrinalar, ilmiy qarashlar va siyosiy-huquqiy g'oyalar tizimi",
        "Qonunlar, farmonlar, kodekslar va davlat tomonidan qabul qilingan boshqa normativ-huquqiy hujjatlar",
        "Sud pretsedentlari, xalqaro shartnomalar va huquqiy maqomga ega bo'lgan urf-odatlar"
      ],
      "correct": 0
    },
    {
      "q": "Mafkuraviy huquq manbalariga quyidagilardan qaysi biri kirmaydi?",
      "options": [
        "Jamiyatdagi iqtisodiy ishlab chiqarish usullari va obyektiv mulkchilik shakllari",
        "Huquqiy ong, huquqiy madaniyat va subyektlarning huquqqa bo'lgan munosabati",
        "Huquqshunos olimlarning huquqiy doktrinalari, ilmiy qarashlari va nazariyalari",
        "Falsafiy va huquqiy g'oyalar — adolat, tenglik, ijtimoiy erkinlik prinsiplari"
      ],
      "correct": 0
    },
    {
      "q": "Rasmiy huquq manbalari (yuridik manbalar) deganda nima tushuniladi?",
      "options": [
        "Huquqiy me'yorlarning tashqi rasmiy ifodasi va davlat tomonidan rasman tan olingan huquqiy hujjatlar shakllari",
        "Jamiyatdagi iqtisodiy, ishlab chiqarish va moddiy munosabatlarning obyektiv tizimi",
        "Huquqshunos olimlarning huquq to'g'risidagi ilmiy, nazariy va falsafiy qarashlari majmui",
        "Jamiyatda stixiyali shakllangan va hali davlat tomonidan rasman sanksiyalanmagan an'anaviy normalar"
      ],
      "correct": 0
    },
    {
      "q": "Huquqiy urf-odat qanday ta'riflanadi?",
      "options": [
        "Jamiyatda uzoq davr davomida shakllangan va davlat tomonidan umummajburiy qoida sifatida rasman sanksiyalangan xulq-atvor me'yori",
        "Huquqshunos olimlarning huquq normalarini qo'llashga oid rasmiy va majburiy tavsiyalari tizimi",
        "Sud organlarining muayyan ish bo'yicha chiqargan qarorlari orqali belgilangan va keyinchalik majburiy tus olgan norma",
        "Qonun chiqaruvchi organ (parlament) tomonidan yozma shaklda qabul qilingan va tartibga soluvchi xulq-atvor qoidalari"
      ],
      "correct": 0
    },
    {
      "q": "Tarixan huquqning dastlabki manbai (shakli) nima hisoblanadi?",
      "options": [
        "Huquqiy urf-odatlar (odat huquqi)",
        "Normativ-huquqiy hujjatlar (qonunlar)",
        "Sud pretsedentlari (sud huquqi)",
        "Normativ-shartnomalar (shartnoma huquqi)"
      ],
      "correct": 0
    },
    {
      "q": "Har qanday urf-odat huquqiy maqomga ega bo'lishi (huquqiy urf-odatga aylanishi) uchun qanday shart bajarilishi kerak?",
      "options": [
        "Davlat tomonidan rasman sanksiyalanishi (tan olinishi) va davlat muhofazasiga olinishi",
        "Yozma shaklda rasmiylashtirilgan va parlament tomonidan qonun sifatida tasdiqlangan bo'lishi",
        "Kamida 100 yil davomida jamiyat hayotining barcha sohalarida uzluksiz amal qilgan bo'lishi",
        "Xalqaro tashkilotlar yoki xalqaro sud instansiyalari tomonidan rasman e'tirof etilgan bo'lishi"
      ],
      "correct": 0
    },
    {
      "q": "O'zbekistonda «Navro'z» va «Qurbon hayiti» bayramlarining rasmiy dam olish kuni deb e'lon qilinishi huquq manbalarining qaysi jihatiga misol bo'ladi?",
      "options": [
        "Normativ-huquqiy hujjatlar orqali milliy urf-odatlarning davlat tomonidan rasman sanksiyalanishiga",
        "Sof tarixiy odat huquqining davlat aralashuvisiz to'g'ridan-to'g'ri imperativ amal qilishiga",
        "Sud pretsedentlari orqali shakllangan huquqiy an'analar va odil sudlov amaliyotiga",
        "Xalqaro shartnomaviy normalarning milliy huquq tizimiga to'g'ridan-to'g'ri transformatsiyasiga"
      ],
      "correct": 0
    }
  ]),

},
/////////////////////////////////////////////////////////////////////////////////

 topic4: {
    "title": "Huquq nazariyasi 1-bo‘lim (Urf-odat, manbalar va amalga oshirish)",
    "questions": randomizeQuestions([
      {
        "q": "O‘zbekistonda «Navro‘z», «Qurbon hayiti» bayramlarining mustaqillikdan so‘ng huquqiy maqom olishi qanday jarayonni ifodalaydi?",
        "options": [
          "Odat qoidalarning huquqiy odatga va umummajburiy normaga aylanishi",
          "Normativ-huquqiy aktning urf-odatga aylanishi jarayoni",
          "Sud pretsedentining huquqiy urf-odat sifatida tan olinishi",
          "Xalqaro shartnomaning milliy qonunchilikka kiritilishi"
        ],
        "correct": 0
      },
      {
        "q": "Sud pretsedentining lotincha ma’nosi nima?",
        "options": [
          "Avvalgisi, oldingisi",
          "Huquqiy asos, poydevor",
          "Namuna, o‘rnak",
          "Qaror, hukm"
        ],
        "correct": 0
      },
      {
        "q": "Sud pretsedenti qaysi huquqiy tizimda asosiy huquq manbai sifatida tan olingan?",
        "options": [
          "Anglo-Sakson huquqiy tizimida (AQSH, Buyuk Britaniya, Kanada)",
          "Roman-Germaniya huquqiy tizimida (Germaniya, Fransiya, Avstriya)",
          "Musulmon huquqi tizimida",
          "Skandinaviya huquqiy tizimida"
        ],
        "correct": 0
      },
      {
        "q": "Normativ kelishuv (normativ bitim) nima?",
        "options": [
          "Ikki yoki undan ortiq huquq sub’ektlari o‘rtasidagi davlat tomonidan umumiy majburiy xususiyat berilgan o‘zaro huquq va majburiyatlarni belgilash to‘g‘risidagi kelishuv",
          "Faqat xususiy shaxslar o‘rtasida tuziladigan va ma’muriy organlar tasdiqlaydigan shartnoma",
          "Sud organi ishtirokida tuziladigan va huquq normalarini belgilovchi hujjat",
          "Davlat organlari va xalqaro tashkilotlar o‘rtasidagi diplomatik bitim"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy doktrina qaysi soha(lar)ga nisbatan qo‘llaniladi?",
        "options": [
          "Ijtimoiy hayotning barcha sohalari",
          "Faqat huquqiy soha",
          "Siyosiy va iqtisodiy sohalarga",
          "Faqat xalqaro huquq sohasiga"
        ],
        "correct": 0
      },
      {
        "q": "Roman-german huquqiy tizimida huquqning asosiy tamoyillari qayerda ishlab chiqilgan?",
        "options": [
          "Universitetlarda",
          "Sud organlarida",
          "Parlament komitetlarida",
          "Ijro hokimiyati organlarida"
        ],
        "correct": 0
      },
      {
        "q": "Normativ-huquqiy akt qaysi huquqiy oilada asosiy huquq manbai hisoblanadi?",
        "options": [
          "Roman-german huquqiy oilasida",
          "Anglo-Sakson huquqiy oilasida",
          "An’anaviy huquq tizimida",
          "Diniy huquq tizimida"
        ],
        "correct": 0
      },
      {
        "q": "Huquqning dinamikasi deganda nima tushuniladi?",
        "options": [
          "Huquq normalarining real hayotda namoyon bo‘lishi",
          "Huquq normalarining qonunlarda mustahkamlanishi",
          "Huquq normalarining tizimli tuzilishini o‘rganish",
          "Huquq normalarining ijtimoiy maqbulligini baholash"
        ],
        "correct": 0
      },
      {
        "q": "Huquqning statikasi quyidagilardan qaysi birini anglatadi?",
        "options": [
          "Huquq normalarining qonun hujjatlarida ifodalanishi",
          "Huquq normalarining sub’ektlar tomonidan qo‘llanilishi",
          "Huquq normalarining davlat tomonidan amalga oshirilishi",
          "Huquq normalarining jamiyat aholisi tomonidan qabul qilinishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqni amalga oshirish deganda nima nazarda tutiladi?",
        "options": [
          "Huquq normalarini sub’ektlar tomonidan tatbiq etilishi",
          "Qonunlarni davlat organlari tomonidan qabul qilinishi",
          "Normativ hujjatlarning rasmiy nashrlarda e’lon qilinishi",
          "Huquqiy faoliyatni davlat tomonidan nazorat qilinishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqni amalga oshirish necha xil asosiy shaklga ega?",
        "options": [
          "To‘rt xil: rioya, ijro, foydalanish va qo‘llash",
          "Ikki xil: bevosita va bilvosita amalga oshirish",
          "Uch xil: rioya qilish, ijro etish va foydalanish",
          "Besh xil: tanlash, anglash, qo‘llash, nazorat va baholash"
        ],
        "correct": 0
      },
      {
        "q": "Rioya qilish quyidagilarning qaysi biri bilan tavsiflanadi?",
        "options": [
          "Passiv xulq-atvor orqali amalga oshiriladi",
          "Faol xulq-atvor orqali amalga oshiriladi",
          "Aralash xulq-atvor orqali amalga oshiriladi",
          "Erkin tanlovga asoslangan xulq-atvor orqali amalga oshiriladi"
        ],
        "correct": 0
      },
      {
        "q": "Rioya qilish jarayonida qaysi tip huquq normalari amalga oshiriladi?",
        "options": [
          "Taqiqlovchi normalar asosan qo‘llaniladi",
          "Majburiyat yuklovchi normalar asosan qo‘llaniladi",
          "Vakolat beruvchi normalar asosan qo‘llaniladi",
          "Ta’riflovchi normalar asosan qo‘llaniladi"
        ],
        "correct": 0
      },
      {
        "q": "Quyidagilarning qaysi biri rioya qilishga misol bo‘la oladi?",
        "options": [
          "Boshqa shaxsning mulkini o‘g‘irlamaslik",
          "Soliqlarni o‘z vaqtida to‘lash",
          "Davlat organiga ariza topshirish",
          "Sud qarorini majburiy tarzda bajarish"
        ],
        "correct": 0
      },
      {
        "q": "Ijro etish shaklining asosiy xususiyati nimada?",
        "options": [
          "Shaxs majburiy ravishda ijobiy harakat qiladi",
          "Shaxs taqiqlangan harakatlardan tiyiladi",
          "Shaxs o‘z ixtiyori bilan huquqdan foydalanadi",
          "Shaxs davlat organining qaroriga bo‘ysunadi"
        ],
        "correct": 0
      },
      {
        "q": "Ijro etish jarayonida shaxsning irodasi qanday rol o‘ynaydi?",
        "options": [
          "Shaxsning shaxsiy xohishi asosiy hal qiluvchi omil hisoblanadi",
          "Iroda muhim ahamiyatga ega emas",
          "Iroda faqat qisman hisobga olinadi",
          "Iroda davlat nazorati ostida bo‘ladi"
        ],
        "correct": 0
      }
    ])
  }
, 

  topic5: {
    "title": "Huquq nazariyasi 2-bo‘lim (Huquqiy ong)",
    "questions": randomizeQuestions([
      {
        "q": "Huquqiy ong ijtimoiy ongning qaysi shakli sifatida qaraladi?",
        "options": [
          "Mustaqil shakl sifatida o‘z predmetiga ega bo‘lgan holda",
          "Boshqa shakllar tarkibidagi yordamchi qism sifatida",
          "Axlоqiy ongning bevosita davomi sifatida",
          "Siyosiy ongning huquqiy ko‘rinishi sifatida"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy ongning asosiy predmetini quyidagilardan qaysi biri tashkil etadi?",
        "options": [
          "Huquqiy voqelik va huquqiy hodisalar majmui",
          "Jamiyatdagi ma’naviy va diniy qadriyatlar tizimi",
          "Siyosiy hokimiyat va davlat boshqaruvi masalalari",
          "Ijtimoiy guruhlararo munosabatlarning tuzilishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy ong tuzilishining asosiy ikki elementi nimalardan iborat?",
        "options": [
          "Huquqiy psixologiya va huquqiy mafkura",
          "Huquqiy bilim va huquqiy tajriba",
          "Huquqiy nazariya va huquqiy amaliyot",
          "Huquqiy tarbiya va huquqiy ta’lim"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy psixologiyaning o‘ziga xos xususiyati qanday belgilanadi?",
        "options": [
          "Kundalik tajriba asosida stixiyali tarzda yuzaga kelishi",
          "Ilmiy tizimlashtirilgan qarashlar asosida rivojlanishi",
          "Maxsus yuridik ta’lim orqali maqsadli shakllantirilishi",
          "Rasmiy normativ hujjatlar bilan mustahkamlanishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy mafkurani huquqiy psixologiyadan farqlaydigan asosiy jihat qaysi?",
        "options": [
          "Ilmiy tizimlashtirilgan va ongli shakllanishi",
          "Emotsional va hissiy boylikka ega ekanligi",
          "Keng ommaga bevosita tegishli ekanligi",
          "Kundalik hayotda amaliy qo‘llanilishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy ongning qaysi funktsiyasi baholash mezonlari sifatida adolat, insoniylik va ijtimoiy foydadan foydalanadi?",
        "options": [
          "Baholash funktsiyasi",
          "Bilish funktsiyasi",
          "Tartibga solish funktsiyasi",
          "Prognozlash funktsiyasi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy modellashtirish (prognozlash) funktsiyasi ayniqsa qaysi sohada muhim ahamiyatga ega?",
        "options": [
          "Huquq ijodkorligi jarayonida",
          "Huquqni qo‘llash amaliyotida",
          "Huquqiy tarbiya tizimida",
          "Jinoyat ish yuritishda"
        ],
        "correct": 0
      },
      {
        "q": "Sub’ektlar tarkibi bo‘yicha huquqiy ongning qaysi turlari farqlanadi?",
        "options": [
          "Individual, guruhiy va jamoat",
          "Oddiy, kasbiy va ilmiy-nazariy",
          "Nazariy, amaliy va qiyosiy",
          "Rasmiy, norasmiy va aralash"
        ],
        "correct": 0
      },
      {
        "q": "Bilish chuqurligi bo‘yicha huquqiy ongning tasnifi quyidagilarni o‘z ichiga oladi:",
        "options": [
          "Kundalik, kasbiy va nazariy-ilmiy",
          "Shaxsiy, guruhiy va umumjamiyat",
          "Psixologik, mafkuraviy va aralash",
          "An’anaviy, zamonaviy va o‘tish davri"
        ],
        "correct": 0
      },
      {
        "q": "Kasbiy huquqiy ong qanday yo‘l bilan shakllanadi?",
        "options": [
          "Maxsus ta’lim va amaliy faoliyat natijasida",
          "Kundalik hayot tajribasi ta’sirida",
          "Ommaviy axborot vositalari orqali",
          "Oila va mahalla muhiti doirasida"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy nigilizm qanday hodisa sifatida ta’riflanadi?",
        "options": [
          "Huquqning ijtimoiy rolini inkor etish va unga nafrat",
          "Huquq imkoniyatlarini haddan ortiq yuqori baholash",
          "Huquqqa bo‘lgan so‘zsiz va tanqidsiz itoat namunasi",
          "Huquqni diniy me’yorlar bilan tenglashtirish holati"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy nigilizmning faol shakli quyidagilarning qaysi birida namoyon bo‘ladi?",
        "options": [
          "Qonunlarni ongli ravishda buzishda va korruptsiyada",
          "Qonunchilikdan bexabarlik va befarqlik holatida",
          "Huquqiy masalalarga e’tiborsiz munosabatda",
          "Huquqiy tarbiyadan chetda qolishda"
        ],
        "correct": 0
      },
      {
        "q": "Quyidagilardan qaysi biri huquqiy nigilizmning sababi sifatida ko‘rsatilmaydi?",
        "options": [
          "Yuridik kasb egalarning haddan ortiq ko‘pligi",
          "Huquqiy ta’lim va tarbiyaning past darajasi",
          "Davlat organlaridagi korruptsiya va adolatsizlik",
          "Totalitar yoki avtoritar o‘tmish tajribasi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy idealizm deganda nima tushuniladi?",
        "options": [
          "Huquqning imkoniyatlarini haddan ortiq yuqori baholash",
          "Huquqiy normalarga befarq munosabatning shakli",
          "Huquqiy tizimni tubdan inkor etish harakati",
          "Huquqni faqat axloqiy nuqtai nazardan baholash"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy idealizmning amaliy oqibati quyidagilardan qaysi biri hisoblanadi?",
        "options": [
          "Jamiyatda huquqiy nigilizmning kuchayishi",
          "Huquqiy tizimning to‘liq barqarorlashuvi",
          "Qonun ijodkorligi faoliyatining to‘xtab qolishi",
          "Sud organlari mustaqilligining oshishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tarbiyaning asosiy maqsadi nimadan iborat?",
        "options": [
          "Huquqqa ongli hurmat va amal qilish ishtiyoqini shakllantirish",
          "Fuqarolarga faqat qonunlar matnini yodlatish",
          "Jinoyatchilikni mutlaqo yo‘qotishga erishish",
          "Barcha fuqarolarni yuridik mutaxassis qilib tayyorlash"
        ],
        "correct": 0
      }
    ])
  }, 






  
  topic6: {
    "title": "Huquq nazariyasi 3-bo‘lim (Huquq normalari, tizim va ijodkorlik)",
    "questions": randomizeQuestions([
      {
        "q": "Konsolidatsiya nima?",
        "options": [
          "Normativ-huquqiy hujjatlar mazmuniga o'zgartirish kiritilmasdan, ular mustaqil yuridik akt sifatida kuchini yo'qotgan holda birlashtirilishi",
          "Normativ-huquqiy hujjatlar mazmuniga o'zgartirish kiritish orqali kodeks yaratish",
          "Qonunlarni faqat xronologik tartibda nashr etish",
          "Huquq tarmog'ini yangi institutlarga bo'lish"
        ],
        "correct": 0
      },
      {
        "q": "Huquq normasi tuzilishining qanday uch qismi mavjud?",
        "options": [
          "Gipoteza, dispozitsiya va sanktsiya",
          "Kirish, asosiy qism va xulosa",
          "Sarlavha, matn va imzo",
          "Maqsad, metod va natija"
        ],
        "correct": 0
      },
      {
        "q": "Huquq normasining gipotezasi nimani anglatadi?",
        "options": [
          "Normaning qo'llanilish shartlari va holatlari",
          "Qoidani buzganlik uchun belgilangan jazo chorasi",
          "Subyektlarning huquq va majburiyatlari",
          "Normada nazarda tutilgan harakatning taqiqlanishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquq normasining dispozitsiyasi nimani ifodalaydi?",
        "options": [
          "Subyektlarning xulq-atvori qoidasi — huquq va majburiyatlar",
          "Norma amalga oshiriladigan shartlar",
          "Qoidabuzarlik uchun qo'llaniladigan jazo",
          "Normaning maqsadi va vazifalari"
        ],
        "correct": 0
      },
      {
        "q": "Huquq normasining sanktsiyasi nimani bildiradi?",
        "options": [
          "Qoidani buzganlik uchun davlat tomonidan belgilangan salbiy oqibatlar",
          "Normaning amal qilish doirasi",
          "Normaning maqsad va vazifalari",
          "Norma ishtirokchilarining huquqlari"
        ],
        "correct": 0
      },
      {
        "q": "Jinoyat kodeksining 97-moddasi (Qasdan odam o'ldirish) huquq tizimida qaysi element hisoblanadi?",
        "options": [
          "Huquq normasi",
          "Huquq tarmog'i",
          "Huquq instituti",
          "Quyi tarmoq"
        ],
        "correct": 0
      },
      {
        "q": "Qonunchilik tizimi va huquq tizimi o'rtasidagi asosiy farq nimada?",
        "options": [
          "Huquq tizimi huquqning ichki tuzilishini, qonunchilik tizimi esa tashqi shaklini ifodalaydi",
          "Qonunchilik tizimi huquqning ichki tuzilishini, huquq tizimi esa tashqi shaklini ifodalaydi",
          "Ular bir xil tushunchalardir",
          "Qonunchilik tizimi faqat kodekslardan iborat"
        ],
        "correct": 0
      },
      {
        "q": "Qonunchilikni tizimlashtirish qanday maqsadlarda amalga oshiriladi?",
        "options": [
          "To'g'ri anglash va qo'llash, ziddiyatlarni bartaraf etish maqsadlarida",
          "Faqat qonunchilikni rivojlantirish maqsadida",
          "Faqat normativ-huquqiy hujjatlarni nashr etish maqsadida",
          "Faqat eskirgan normalarni bekor qilish maqsadida"
        ],
        "correct": 0
      },
      {
        "q": "Huquq ijodkorligi nima?",
        "options": [
          "Hujjatlarini yaratish, o'zgartirish yoki bekor qilish",
          "Sud organlarining huquqiy nizolarni hal etish faoliyati",
          "Fuqarolarning huquqiy maslahat olish jarayoni",
          "Huquqiy hujjatlarini nashr etish faoliyati"
        ],
        "correct": 0
      },
      {
        "q": "Huquq ijodkorligi davlat funktsiyalarini amalga oshirishning qaysi shakli hisoblanadi?",
        "options": [
          "Muhim huquqiy shakli",
          "Ijtimoiy shakli",
          "Tashkiliy shakli",
          "Iqtisodiy shakli"
        ],
        "correct": 0
      },
      {
        "q": "Bevosita huquq ijodkorligi qaysi yo'l bilan amalga oshiriladi?",
        "options": [
          "Umumxalq referendumi orqali",
          "Parlament orqali",
          "Prezident farmoni orqali",
          "Vazirlar Mahkamasi qarori orqali"
        ],
        "correct": 0
      },
      {
        "q": "Qonun ijodkorligi huquq ijodkorligidan nimasi bilan farq qiladi?",
        "options": [
          "Qonun ijodkorligi faqat parlament tomonidan qabul qilinadigan qonunlarni yaratishga oid",
          "Qonun ijodkorligi kengroq tushuncha",
          "Huquq ijodkorligi faqat qonunlar bilan shug'ullanadi",
          "Ular o'rtasida farq yo'q"
        ],
        "correct": 0
      },
      {
        "q": "Quyidagilardan qaysi biri huquq ijodkorligining belgisi emas?",
        "options": [
          "Yakka tartibdagi hujjat qabul qilish",
          "Davlat faoliyatining turi",
          "Ijodiy jarayon",
          "Murakkab jarayonligi"
        ],
        "correct": 0
      },
      {
        "q": "Huquq ijodkorligining natijasi nimada ifodalanadi?",
        "options": [
          "Normativ-huquqiy hujjat qabul qilinishida",
          "Sud qarorida",
          "Shartnoma tuzilishida",
          "Ma'muriy jazo berishda"
        ],
        "correct": 0
      },
      {
        "q": "Mansabdor shaxslarning huquq ijodkorligiga misol qaysi?",
        "options": [
          "Prezident farmonlari va qarorlari",
          "Oliy Majlis qarorlari",
          "Referendum natijalari",
          "Mahalliy Kengash muhokamalari"
        ],
        "correct": 0
      },
      {
        "q": "Mahalliy davlat hokimiyati organlarining huquq ijodkorligi qaysi doirada amal qiladi?",
        "options": [
          "Faqat muayyan hudud (viloyat, tuman, shahar) doirasida",
          "Butun respublika bo'yicha",
          "Xalqaro miqyosda",
          "Faqat poytaxt shahrida"
        ],
        "correct": 0
      },
      {
        "q": "Huquq ijodkorligining qaysi funktsiyasi xalqaro huquq normalarini milliy qonunchilikka singdirish bilan bog'liq?",
        "options": [
          "Xalqaro normalarni implementatsiya qilish",
          "Norma ijodkorligi",
          "Ijtimoiy ehtiyojlarni aniqlash",
          "Xalq irodasini rasmiylashtirish"
        ],
        "correct": 0
      },
      {
        "q": "Qonun ijodkorligi jarayonining birinchi rasmiy bosqichi qaysi?",
        "options": [
          "Qonunchilik tashabbusi",
          "Qonunni qabul qilish",
          "Imzolash va e'lon qilish",
          "Muqobil loyihalarni ko'rib chiqish"
        ],
        "correct": 0
      }
    ])
  },

/////////

  topic7: {
    "title": "Huquq nazariyasi 4-bo‘lim (Normativ-huquqiy hujjatlar, printsip va texnika)",
    "questions": randomizeQuestions([
      {
        "q": "«Demokratizm va oshkoralik» printsipi nimani talab qiladi?",
        "options": [
          "Jamiyat muhokamasidan o‘tishi",
          "Loyihalar sir saqlanishi",
          "Faqat davlat sirini himoya qilish",
          "Faqat Prezident qarori"
        ],
        "correct": 0
      },
      {
        "q": "«Tizimlilik va izchillik» printsipi nimani anglatadi?",
        "options": [
          "Har bir yangi norma mavjud huquqiy tizimga mos tushishi va ziddiyat keltirmasligi",
          "Hujjatlar xronologik tartibda chiqarilishi",
          "Faqat kodekslar shaklida qabul qilinishi",
          "Barcha hujjatlar bir vaqtda kuchga kirishi"
        ],
        "correct": 0
      },
      {
        "q": "Huquq normalarini ifodalashning «to‘g‘ridan-to‘g‘ri» usulida nima sodir bo‘ladi?",
        "options": [
          "Normaning barcha unsurlari bitta moddada to‘liq ifodalanadi",
          "Boshqa moddaga havola qilinadi",
          "Boshqa hujjatga ishora qilinadi",
          "Normalar umumiy tushuncha sifatida beriladi"
        ],
        "correct": 0
      },
      {
        "q": "Havolaki usulda nima sodir bo‘ladi?",
        "options": [
          "Shu hujjatning boshqa aniq moddasiga havola qilinadi",
          "Norma to‘liq beriladi",
          "Boshqa davlat qonunlariga ishora qilinadi",
          "Normalar mavhum tushuncha sifatida beriladi"
        ],
        "correct": 0
      },
      {
        "q": "Blanket usulning havolaki usuldan farqi nimada?",
        "options": [
          "Aniq moddaga emas, balki boshqa normativ-huquqiy hujjatga ishora qilinadi",
          "Barcha norma unsurlari to‘liq beriladi",
          "Farqi yo‘q",
          "Faqat jinoyat qonunchiligida qo‘llaniladi"
        ],
        "correct": 0
      },
      {
        "q": "Normativ-huquqiy hujjat nima?",
        "options": [
          "Vakolatli organ tomonidan qabul qilingan umummajburiy huquq normalarini belgilovchi rasmiy hujjat",
          "Sud hukmi",
          "Ikki taraf o‘rtasidagi shartnoma",
          "Fuqaroning shaxsiy arizasi"
        ],
        "correct": 0
      },
      {
        "q": "Normativ-huquqiy hujjat yuridik kuchiga ko‘ra qaysi guruhlarga bo‘linadi?",
        "options": [
          "Qonunlar va qonunosti hujjatlari",
          "Davlat va xususiy hujjatlar",
          "Mahalliy va xalqaro hujjatlar",
          "Vaqtinchalik va doimiy hujjatlar"
        ],
        "correct": 0
      },
      {
        "q": "O‘zbekiston normativ-huquqiy hujjatlari ierarxiyasida eng yuqori o‘rinda nima turadi?",
        "options": [
          "Konstitutsiya",
          "Qonunlar",
          "Prezident farmonlari",
          "Vazirlar Mahkamasi qarorlari"
        ],
        "correct": 0
      },
      {
        "q": "Normativ-huquqiy hujjat ierarxiyasida Prezident farmonlari qaysi o‘rinda?",
        "options": [
          "Ikkinchi",
          "Birinchi",
          "Uchinchi",
          "To‘rtinchi"
        ],
        "correct": 0
      },
      {
        "q": "Qonunosti hujjatlari qonunlardan nimasi bilan farq qiladi?",
        "options": [
          "Ular qonunlar asosida va ularni ijro etish maqsadida qabul qilinadi",
          "Ular qonundan yuqori kuchga ega",
          "Ular faqat mahalliy amal qiladi",
          "Ular faqat referendum orqali qabul qilinadi"
        ],
        "correct": 0
      },
      {
        "q": "Normativ-huquqiy hujjatlarning amal qilish muddatiga ko‘ra turlari qaysi?",
        "options": [
          "Muddatsiz (doimiy) va vaqtinchalik",
          "Qonunlar va qarorlar",
          "Mahalliy va umumdavlat",
          "Sohaviy va sohalарaro"
        ],
        "correct": 0
      },
      {
        "q": "Normativ-huquqiy hujjatlarning amal qilish hududiga ko‘ra turlari qaysi?",
        "options": [
          "Umumdavlat va mahalliy",
          "Doimiy va vaqtinchalik",
          "Sohaviy va sohalарaro",
          "Qonunlar va qarorlar"
        ],
        "correct": 0
      },
      {
        "q": "Inkorporatsiya nima?",
        "options": [
          "Normativ hujjatlar mazmunini o‘zgartirmasdan to‘plamlarga birlashtirish",
          "Normalarni tubdan qayta ishlash",
          "Tarqoq hujjatlarni yagona hujjatga birlashtirish",
          "Hujjatlarni hisobga olish"
        ],
        "correct": 0
      },
      {
        "q": "Inkorporatsiyaning rasmiy turi kimlar tomonidan amalga oshiriladi?",
        "options": [
          "Vakolatli davlat organi",
          "Xususiy shaxslar",
          "Ilmiy muassasalar",
          "Jamoatchilik tashkilotlari"
        ],
        "correct": 0
      },
      {
        "q": "Konsolidatsiya nima?",
        "options": [
          "Bir xil munosabatlarni tartibga soluvchi tarqoq hujjatlarni yagona yirik hujjatga birlashtirish",
          "Normalarni tubdan qayta ishlash",
          "Mazmunini o‘zgartirmasdan to‘plamga joylash",
          "Hujjatlarni qidirish tizimini yaratish"
        ],
        "correct": 0
      },
      {
        "q": "Kodifikatsiya natijasida nima yaratiladi?",
        "options": [
          "Yangi yaxlit hujjat, masalan, Kodeks",
          "Inkorporatsiya to‘plami",
          "Qidiruv tizimi",
          "Konsolidatsiya hujjati"
        ],
        "correct": 0
      },
      {
        "q": "Orqaga qaytish kuchi (retroaktivlik) haqida qaysi fikr to‘g‘ri?",
        "options": [
          "Qoida tariqasida hujjatlar orqaga qaytish kuchiga ega emas",
          "Hujjatlar doimo orqaga qaytish kuchiga ega",
          "Faqat Prezident farmonlari orqaga qaytish kuchiga ega",
          "Orqaga qaytish kuchi faqat mahalliy hujjatlarga taalluqli"
        ],
        "correct": 0
      },
      {
        "q": "Istisno tariqasida qaysi normalarga orqaga qaytish kuchi beriladi?",
        "options": [
          "Javobgarlikni yengillashtiruvchi yoki bekor qiluvchi normalar",
          "Javobgarlikni og‘irlashtiruvchi normalar",
          "Soliq normalari",
          "Ma’muriy normalar"
        ],
        "correct": 0
      },
      {
        "q": "Yuridik texnika nima?",
        "options": [
          "Huquqiy hujjatlarni ishlab chiqish, rasmiylashtirish va tizimlashtirishda qo‘llaniladigan qoidalar, usullar va vositalar majmui",
          "Kompьyuter dasturlarini ishlab chiqish",
          "Sud jarayonining tartibi",
          "Huquqiy ta’lim berish metodikasi"
        ],
        "correct": 0
      }
    ])
  }
,


//////////

  topic8: {
    "title": "Huquq nazariyasi 5-bo‘lim (Huquq normalarini sharxlash va huquqiy tartibga solish)",
    "questions": randomizeQuestions([
      {
        "q": "Doktrinall sharxlashning rasmiy majburiyligi bo'lmasa-da, u qanday ta'sir ko'rsatadi?",
        "options": [
          "Amaliyot va qonunchilikka kuchli intellektual ta'sir ko'rsatadi",
          "Faqat ta'lim muassasalarida qo'llaniladi va amaliy ahamiyati yo'q",
          "Sudlar uchun majburiy ko'rsatma sifatida qo'llaniladi",
          "Davlat organlari tomonidan rasmiy ravishda tan olinmaydi"
        ],
        "correct": 0
      },
      {
        "q": "O'zbekiston Respublikasi Konstitutsiyaviy sudi qanday sharxlash sohasida yetakchi o'rinni egallaydi?",
        "options": [
          "Normativ hujjatlarning Konstitutsiyaga muvofiqligini tekshirishda va Konstitutsiya normalarini rasman izohlashda",
          "Fuqarolik huquqi normalarini kengaytiruvchi tarzda sharxlashda",
          "Jinoyat va ma'muriy qonunchilik normalarini toraytiruvchi tarzda talqin qilishda",
          "Xalqaro shartnomalar va konventsiyalarning milliy huquqqa muvofiqligi masalasida"
        ],
        "correct": 0
      },
      {
        "q": "Rasmiy sharxlash qanday belgi asosida norasmiy sharxlashdan farqlanadi?",
        "options": [
          "Vakolatli davlat organlari tomonidan amalga oshirilishi",
          "Faqat yozma shaklda rasmiylashtirilganligi",
          "Faqat sud organlari tomonidan amalga oshirilishi mumkinligi",
          "Doimo umumiy majburiy kuchga ega ekanligi"
        ],
        "correct": 0
      },
      {
        "q": "Normativ sharxlash qanday sharxlash turiga kiradi?",
        "options": [
          "Rasmiy sharxlashning bir turi",
          "Norasmiy sharxlashning bir ko'rinishi",
          "Kazual sharxlashning alohida holati",
          "Doktrinall sharxlashning kengaytirilgan shakli"
        ],
        "correct": 0
      },
      {
        "q": "Normativ sharxlash qaysi maqsadga yo'naltirilgan?",
        "options": [
          "Normaning barcha hollarda bir xil tushunilishini ta'minlashga",
          "Faqat muayyan konkret ishni hal etishga",
          "Qonunchilikdagi kamchiliklarni to'ldirishga",
          "Yangi huquqiy normalar yaratishga"
        ],
        "correct": 0
      },
      {
        "q": "Autentik sharxlash kim tomonidan amalga oshiriladi?",
        "options": [
          "Normani o'zi yaratgan organ tomonidan",
          "Vakolatli davlat organi tomonidan (normani yaratgan organ emas)",
          "Oliy sud plenumi tomonidan",
          "Vazirliklar va idoralar tomonidan"
        ],
        "correct": 0
      },
      {
        "q": "Legal sharxlash qaysi organ tomonidan amalga oshiriladi?",
        "options": [
          "Qonun bilan vakolat berilgan boshqa organ tomonidan",
          "Normani yaratgan organ tomonidan yangi akt qabul qilish orqali",
          "Faqat Konstitutsiyaviy sud tomonidan",
          "Fuqarolarning o'zini o'zi boshqarish organlari tomonidan"
        ],
        "correct": 0
      },
      {
        "q": "Kazual sharxlash qanday sharxlashdir?",
        "options": [
          "Muayyan konkret ish yoki huquqiy holat doirasida amalga oshiriladigan va faqat o'sha ish uchun majburiy bo'lgan sharxlash",
          "Barcha huquq subyektlari uchun umumiy majburiy ahamiyatga ega sharxlash",
          "Qonunni yaratgan organ tomonidan amalga oshiriladigan normativ sharxlash",
          "Fuqarolar tomonidan huquqiy normani kundalik hayotda qo'llash jarayoni"
        ],
        "correct": 0
      },
      {
        "q": "Sharxlash hajmiga ko'ra necha turga bo'linadi?",
        "options": [
          "Uch: to'liq hajmli, kengaytiruvchi va toraytiruvchi",
          "Ikki: rasmiy va norasmiy",
          "To'rt: normativ, kazual, autentik va legal",
          "Ikki: grammatik va mantiqiy"
        ],
        "correct": 0
      },
      {
        "q": "Huquq nazariyasida quyidagilardan qaysi biri sharxlash usullariga kirmaydi?",
        "options": [
          "Funksional sharxlash",
          "Grammatik (lingvistik) sharxlash",
          "Teleologik (maqsadiy) sharxlash",
          "Komparativ (qiyosiy) sharxlash"
        ],
        "correct": 0
      },
      {
        "q": "Kundalik (oddiy) sharxlash qanday shakllanadi?",
        "options": [
          "Huquqiy ong darajasiga va ijtimoiy muhitga bog'liq holda shakllanadi",
          "Rasmiy huquqiy ta'lim va malaka oshirish kurslari orqali shakllanadi",
          "Faqat sudlov amaliyotini kuzatish orqali shakllanadi",
          "Davlat tomonidan tashkil etilgan huquqiy savodxonlik dasturlari orqali shakllanadi"
        ],
        "correct": 0
      },
      {
        "q": "Tizimli sharxlash usulida Fuqarolik kodeksi normasini sharxlashda nimalar inobatga olinishi zarur?",
        "options": [
          "Konstitutsiya moddalari, Oila kodeksi va maxsus qonunlar ham",
          "Faqat Fuqarolik kodeksining boshqa moddalari",
          "Faqat xalqaro shartnomalar va konventsiyalar",
          "Faqat vazirliklar tomonidan chiqarilgan yo'riqnomalar"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibga solish nima?",
        "options": [
          "Huquq normalari orqali ijtimoiy munosabatlarga maqsadli ta'sir ko'rsatish jarayoni",
          "Faqat davlat organlari faoliyati",
          "Odob-axloq qoidalarining majmui",
          "Iqtisodiy siyosatni amalga oshirish usuli"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibga solishning asosiy maqsadi nima?",
        "options": [
          "Jamiyatda huquqiy tartibni ta'minlash",
          "Faqat davlat daromadini oshirish",
          "Barcha ijtimoiy munosabatlarni tartibga solish",
          "Shaxslarning shaxsiy hayotiga aralashish"
        ],
        "correct": 0
      },
      {
        "q": "Quyidagilardan qaysi biri huquqiy tartibga solishning obyekti hisoblanmaydi?",
        "options": [
          "Do'stlik munosabatlari",
          "Mulkiy munosabatlar",
          "Mehnat munosabatlari",
          "Oilaviy munosabatlar"
        ],
        "correct": 0
      }
    ])
  }
,


///////

  topic9: {
    "title": "Huquq nazariyasi 6-bo‘lim (Huquqiy munosabatlar, subyektiv huquq, majburiyat va tartibot)",
    "questions": randomizeQuestions([
      {
        "q": "Oldi-sotdi shartnomasida sotuvchi va xaridor nima hisoblanadi?",
        "options": [
          "Huquqiy munosabat subyektlari",
          "Huquqiy munosabat ob'ektlari",
          "Yuridik faktlar",
          "Huquq normalari"
        ],
        "correct": 0
      },
      {
        "q": "Subyektiv huquq nima?",
        "options": [
          "Muayyan shaxsning qonun bilan e'tirof etilgan va kafolatlangan mumkin bo'lgan xulq-atvor chegarasi",
          "Faqat davlat organlarining vakolati",
          "Faqat sudning qaror qabul qilish huquqi",
          "Barcha fuqarolarning umumiy huquqlari"
        ],
        "correct": 0
      },
      {
        "q": "Yuridik majburiyat nima?",
        "options": [
          "Shaxsning huquq normasi yoki huquqiy munosabat asosida bajarishi shart bo'lgan zaruriy xulq-atvori",
          "Shaxsning ixtiyoriy harakati",
          "Faqat davlat organlarining vazifasi",
          "Huquqni himoya qilish usuli"
        ],
        "correct": 0
      },
      {
        "q": "Subyektiv huquq va yuridik majburiyat o'rtasidagi munosabat qanday?",
        "options": [
          "Bir-biri bilan chambarchas bog'liq",
          "Hech qanday aloqasi yo'q",
          "Faqat bir yo'nalishli bog'liqlik",
          "Faqat sud orqali bog'lanadi"
        ],
        "correct": 0
      },
      {
        "q": "Umumiylik tamoyiliga ko'ra, qonun talablari qaysi belgilardan qat'i nazar barcha uchun birdan majburiy?",
        "options": [
          "Mansab, ijtimoiy mavqe, millat, din va boshqa belgilardan",
          "Mansab, mavqe, millat, din va boshqa belgilardan",
          "Mansab, holat, millat, din va boshqa belgilardan",
          "Mansab, rating, millat, din va boshqa belgilardan"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibot nimaga tayanadi?",
        "options": [
          "Huquq normalariga",
          "Axloq normalariga",
          "Urf-odatlarga",
          "Diniy qoidalarga"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibot kim tomonidan kafolatlanadi?",
        "options": [
          "Davlat tomonidan",
          "Jamoatchilik tomonidan",
          "Xalqaro tashkilotlar tomonidan",
          "Nodavlat tashkilotlar tomonidan"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibot qaysi tartibning tarkibiy qismi hisoblanadi?",
        "options": [
          "Jamoat tartibotining",
          "Ichki tartibning",
          "Texnologik tartibning",
          "Mehnat tartibining"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibot qaysi xarakterga ega?",
        "options": [
          "Ob'ektiv xarakterga",
          "Sub'ektiv xarakterga",
          "Shaxsiy xarakterga",
          "Guruhiy xarakterga"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibotning tuzilishi necha elementdan iborat?",
        "options": [
          "Uch elementdan",
          "Ikki elementdan",
          "To'rt elementdan",
          "Besh elementdan"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibot tuzilishining birinchi elementi nima?",
        "options": [
          "Huquq sub'ektlari",
          "Huquqiy munosabatlar",
          "Yuridik faktlar",
          "Huquqiy holat"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy munosabatlarni vujudga keltiruvchi voqea va harakatlar nima deb ataladi?",
        "options": [
          "Yuridik faktlar",
          "Huquqiy holat",
          "Huquqiy normalar",
          "Huquqiy aktlar"
        ],
        "correct": 0
      },
      {
        "q": "Huquqiy tartibot nimani ta'minlaydi?",
        "options": [
          "Barqarorlik va tashkillilikni",
          "Faqat davlat manfaatlarini",
          "Faqat shaxsiy manfaatlarni",
          "Faqat iqtisodiy rivojlanishni"
        ],
        "correct": 0
      },
      {
        "q": "Intizom tushunchasi nimani anglatadi?",
        "options": [
          "Shaxslarning jamiyatda o'rnatilgan tartib va qoidalarga muvofiq xulq-atvori",
          "Shaxslarning jamiyatda qabul qilingan tartib va qoidalarga mos xulq-atvori",
          "Shaxslarning jamiyatda belgilangan tartib va qoidalarga rioya qilish xulq-atvori",
          "Shaxslarning jamiyatda o'rnatilgan qoidalarga muvofiq harakat qilishi"
        ],
        "correct": 0
      },
      {
        "q": "Intizom qaysi kategoriyalarga kiradi?",
        "options": [
          "Huquqiy va axloqiy kategoriyalarga",
          "Faqat huquqiy kategoriyaga",
          "Faqat iqtisodiy kategoriyaga",
          "Faqat siyosiy kategoriyaga"
        ],
        "correct": 0
      },
      {
        "q": "Davlat intizomi nima o'z ichiga oladi?",
        "options": [
          "Davlat organlari xizmatchilarining vazifalarini to'liq ado etilishini",
          "Davlat organlari xizmatchilarining vazifalarini o'z vaqtida bajarilishini",
          "Davlat organlari xizmatchilarining vazifalarini sifatli bajarilishini",
          "Davlat organlari xizmatchilarining vazifalarini to'g'ri ado etilishini"
        ],
        "correct": 0
      },
      {
        "q": "Mansab (xizmat) intizomi nimadan iborat?",
        "options": [
          "Davlat xizmatchilarining qonun va normativ hujjatlar bilan belgilangan majburiyatlarini bajarishidan",
          "Davlat xizmatchilarining qonun hujjatlari bilan belgilangan burchlarini ado etishidan",
          "Davlat xizmatchilarining normativ hujjatlar bilan belgilangan vazifalarini bajarishidan",
          "Davlat xizmatchilarining qonun talablari bilan belgilangan majburiyatlarini to'liq bajarishidan"
        ],
        "correct": 0
      },
      {
        "q": "Moliyaviy intizom nimani anglatadi?",
        "options": [
          "Davlat byudjeti va moliyaviy mablag'larni maqsadli sarflash qoidalari va talablariga rioya etishni",
          "Davlat byudjeti va byudjet mablag'larini maqsadli ishlatish qoidalariga rioya etishni",
          "Davlat byudjeti va moliyaviy resurslarni maqsadli sarflash talablariga rioya etishni",
          "Davlat byudjeti va pul mablag'larini maqsadli sarflash qoidalariga rioya etishni"
        ],
        "correct": 0
      }
    ])
  
}
  /////////////////////////////////////////////////////////////////////////////////
  // 2-BO'LIM: HUQUQ PRINSIPLARI VA MANBALARI
  /////////////////////////////////////////////////////////////////////////////////
 
 /*
  topic2: {
    title: "Davlat va huquq nazariyasi: Huquq prinsiplari va Manbalari",
    questions: randomizeQuestions([
      {
        q: "Huquq prinsiplari (tamoyillari) deganda nimani tushunasiz?",
        options: [
          "Huquqning mohiyatini ifodalovchi boshlang'ich normativ asoslar va rahbar g'oyalar majmui",
          "Davlat organlarining faoliyatini tartibga soluvchi ichki idoraviy yo'riqnomalar tizimi",
          "Faqat Konstitutsiyada belgilangan va boshqa tarmoq qonunlarida takrorlanmaydigan qoidalar",
          "Qonun chiqaruvchi organning qonunchilik texnikasini belgilovchi uslubiy tavsiyalari"
        ],
        correct: 0
      },
      {
        q: "Huquq prinsiplari odatda qonunchilik tizimida qayerda mustahkamlanadi?",
        options: [
          "Konstitutsiyada, kodekslarning muqaddimasi yoki umumiy qoidalar qismida maxsus moddalarda",
          "Faqat Oliy ijro hokimiyati hujjatlarida va idoraviy nizomlarning kirish qismida",
          "Asosan xalqaro shartnomalar matnida va deklaratsiyalarning ilovalarida",
          "Faqat Oliy sud Plenumining qarorlarida va sudlov pretsedentlarida"
        ],
        correct: 0
      },
      {
        q: "Quyidagilardan qaysi biri umumhuquqiy (barcha tarmoqlar uchun umumiy) prinsiplarga kirmaydi?",
        options: [
          "Mehnat erkinligi tamoyili",
          "Gumanizm (insonparvarlik) tamoyili",
          "Qonuniylik (universal rioya) tamoyili",
          "Qonun va sud oldida tenglik tamoyili"
        ],
        correct: 0
      },
      {
        q: "Demokratizm prinsipi huquqni shakllantirish (ijodkorlik) sohasida qanday namoyon bo'ladi?",
        options: [
          "Xalq vakillari va fuqarolarning qonunchilik jarayonida keng va oshkora ishtirok etishida",
          "Davlat organlari tomonidan qonun loyihalarini faqat yopiq ekspertizadan o'tkazishida",
          "Faqat referendum o'tkazish orqali barcha qonunlarni to'g'ridan-to'g'ri qabul qilishda",
          "Siyosiy partiyalarning dasturlarini adliya organlari tomonidan nazorat qilinishida"
        ],
        correct: 0
      },
      {
        q: "Qonuniylik prinsipining huquqiy tizimdagi asosiy ma'nosi nima?",
        options: [
          "Har qanday faoliyat va qarorlar qonunga muvofiq bo'lishi hamda barcha subyektlarga bir xilda tatbiq etilishi",
          "Faqat sud va prokuratura organlari xodimlari o'z faoliyatida qonun talablariga qat'iy rioya etishi",
          "Yangi qonunlarni muntazam ravishda qabul qilib borish va eskirgan qoidalarni bekor qilish",
          "Mansabdor shaxslarni qonuniy tartibda lavozimga tayinlash va ularning shtat jadvallarini tuzish"
        ],
        correct: 0
      },
      {
        q: "Insonparvarlik (gumanizm) prinsipi huquqda nimani ta'minlaydi?",
        options: [
          "Inson qadr-qimmati va huquqlarini oliy qadriyat deb tan olishni hamda ularni himoya qilishni",
          "Davlatning milliy xavfsizligi va iqtisodiy manfaatlarini boshqa manfaatlardan ustun qo'yishni",
          "Jinoiy jazolarni o'tab chiqqan shaxslarni davlat organlariga majburiy ishga joylashtirishni",
          "Fuqarolik va mulkiy nizolarni faqat sudgacha muqobil bitim orqali hal qilishni"
        ],
        correct: 0
      },
      {
        q: "Qonun oldida tenglik prinsipiga ko'ra, muayyan imtiyozlar qanday tartibda berilishi mumkin?",
        options: [
          "Faqat qonun bilan belgilangan hollarda, ijtimoiy adolat asosida va umumiy tenglikni buzmasdan",
          "Davlat rahbarining shaxsiy ko'rsatmasi yoki farmoyishi asosida istalgan fuqaroga",
          "Har qanday davlat organi rahbarining o'z vakolatlari doirasidagi ixtiyoriy qarori bilan",
          "Imtiyozlar tenglikka mutlaqo zid bo'lganligi sababli huquqiy tizimda umuman berilishi mumkin emas"
        ],
        correct: 0
      },
      {
        q: "Tarmoqlararo huquqiy prinsiplar deganda nimani tushunasiz?",
        options: [
          "Ikki yoki undan ortiq o'zaro yaqin huquq tarmoqlarida amal qiladigan va ularning mazmunini belgilovchi qoidalar",
          "Faqat bitta huquq tarmog'ining ichida amal qiladigan o'ziga xos maxsus prinsiplar",
          "Faqat xalqaro ommaviy huquqda amal qiladigan va milliy huquq uchun majburiy bo'lmagan tamoyillar",
          "Konstitutsiyada belgilangan, biroq tarmoq qonunchiligida mutlaqo takrorlanmaydigan normalar"
        ],
        correct: 0
      },
      {
        q: "Aybsizlik prezumpsiyasi o'zining yuridik tabiatiga ko'ra qaysi turdagi prinsip hisoblanadi?",
        options: [
          "Jinoyat, jinoyat-prosessual va ma'muriy huquq sohalariga xos bo'lgan tarmoqlararo prinsip",
          "Faqat jinoyat huquqiga xos bo'lgan va boshqa tarmoqlarda mutlaqo qo'llanilmaydigan sohaviy prinsip",
          "Faqat fuqarolik va fuqarolik-prosessual huquqida mulkiy nizolarni ko'rishda qo'llaniladigan prinsip",
          "Faqat mehnat va intizomiy munosabatlarda xizmat tekshiruvlarida tatbiq etiladigan maxsus prinsip"
        ],
        correct: 0
      },
      {
        q: "Prosessual huquq tarmoqlarida (jinoyat, fuqarolik, iqtisodiy prosess) qaysi tamoyillar umumiy hisoblanadi?",
        options: [
          "Tomonlarning prosessual tengligi, sud jarayonlarining oshkoraligi va sudyalarning mustaqilligi",
          "Faqat raqobatbardoshlik tamoyili, chunki boshqa tamoyillar prosess turlarida mutlaqo farq qiladi",
          "Faqat aybsizlik prezumpsiyasi, chunki fuqarolik prosessida sudya mutlaqo mustaqil emas",
          "Javobgarlikning muqarrarligi va odil sudlovni faqat prokuratura tomonidan amalga oshirilishi"
        ],
        correct: 0
      },
      {
        q: "Sohaviy huquq tamoyillari nima?",
        options: [
          "Ma'lum bir huquq tarmog'ining o'ziga xos xususiyatlarini va ichki mazmunini belgilovchi asosiy qoidalar",
          "Barcha huquq tarmoqlariga birday taalluqli bo'lib, butun huquq tizimining poydevorini tashkil etuvchi normalar",
          "Xalqaro shartnomalar asosida shakllangan va milliy huquqda ikkilamchi ahamiyatga ega prinsiplar",
          "Faqat jinoyat kodeksida ko'rsatilgan, jazo tayinlash mexanizmini tartibga soluvchi normalar"
        ],
        correct: 0
      },
      {
        q: "Huquq shakli (yuridik ma'noda) deganda nima tushuniladi?",
        options: [
          "Huquq normalarining rasmiy ifodalanish va davlat irodasini rasmiylashtirish usullari",
          "Huquq normalarining mazmunini belgilovchi ijtimoiy-iqtisodiy omillar tizimi",
          "Huquq normalarining paydo bo'lishiga ta'sir qiluvchi mafkuraviy va falsafiy asoslar",
          "Davlat idoralari va jamoat tashkilotlarining o'zaro boshqaruv munosabatlari shakli"
        ],
        correct: 0
      },
      {
        q: "Huquq manbai (falsafiy va materialistik ma'noda) qanday ta'riflanadi?",
        options: [
          "Huquq normalarining paydo bo'lishi va amal qilishiga imkon beruvchi ijtimoiy zamin va moddiy sharoitlar",
          "Davlat irodasini rasmiylashtirish va normativ hujjat shakliga keltirish usullari yig'indisi",
          "Parlament tomonidan qabul qilingan va tizimlashtirilgan qonun hujjatlarining yig'indisi",
          "Sud organlarining muayyan ishlar bo'yicha qabul qilgan yakuniy qarorlari majmui"
        ],
        correct: 0
      },
      {
        q: "Huquqning moddiy manbalariga quyidagilardan qaysi biri kiradi?",
        options: [
          "Jamiyatning iqtisodiy munosabatlari, ishlab chiqarish usullari va mulkchilik shakllari",
          "Jamiyatdagi huquqiy ong, huquqiy daxlsizlik va siyosiy-huquqiy g'oyalar tizimi",
          "Davlat tomonidan qabul qilingan qonunlar, kodekslar va normativ-huquqiy hujjatlar",
          "Sud pretsedentlari, xalqaro shartnomalar va huquqiy urf-odatlar"
        ],
        correct: 0
      },
      {
        q: "Huquqning mafkuraviy manbalariga quyidagilardan qaysi biri taalluqli?",
        options: [
          "Huquqiy ong, huquqiy mafkura va huquqshunos olimlarning ilmiy nazariyalari",
          "Mulkchilik shakllari va jamiyatning moddiy ishlab chiqarish kuchlari",
          "Konstitutsiya, qonunlar va vazirliklarning normativ buyruqlari",
          "Davlatning iqtisodiy tuzilishi va tashqi savdo aloqalari ko'rsatkichlari"
        ],
        correct: 0
      },
      {
        q: "Rasmiy huquq manbalari (yuridik manbalar) deganda nima tushuniladi?",
        options: [
          "Huquqiy me'yorlarning tashqi ifodasi va davlat tomonidan rasman tan olingan huquqiy hujjatlar",
          "Jamiyatda mavjud bo'lgan real iqtisodiy va ijtimoiy munosabatlar majmui",
          "Huquqshunos olimlarning huquq haqidagi ilmiy, nazariy va falsafiy qarashlari",
          "Jamiyatda shakllangan, biroq davlat tomonidan hali rasman tasdiqlanmagan normalar"
        ],
        correct: 0
      },
      {
        q: "Huquqiy urf-odat qanday ta'riflanadi?",
        options: [
          "Jamiyatda uzoq davr davomida shakllangan va davlat tomonidan umummajburiy qoida sifatida sanksiyalangan xulq-atvor me'yori",
          "Huquqshunos olimlarning huquq normalarini qo'llashga oid rasmiy uslubiy tavsiyalari tizimi",
          "Sud organlarining muayyan kazuistik ishlarni ko'rishda qabul qilgan va majburiy tus olgan qarori",
          "Qonun chiqaruvchi organ tomonidan yozma shaklda qabul qilingan universal xulq-atvor qoidasi"
        ],
        correct: 0
      },
      {
        q: "Tarixan huquqning eng birinchi va dastalbki rasmiy manbai (shakli) nima hisoblanadi?",
        options: [
          "Huquqiy urf-odatlar",
          "Normativ-huquqiy aktlar",
          "Sud pretsedentlari",
          "Normativ shartnomalar"
        ],
        correct: 0
      },
      {
        q: "Har qanday oddiy ijtimoiy urf-odat huquqiy urf-odat maqomiga ega bo'lishi uchun qaysi shart bajarilishi shart?",
        options: [
          "Davlat tomonidan rasman sanksiyalanishi (tan olinishi) va muhofaza qilinishi",
          "Yozma shaklda rasmilashtirilib, parlament tomonidan qonun sifatida tasdiqlanishi",
          "Kamida 100 yil davomida jamiyat a'zolari tomonidan uzluksiz bajarilgan bo'lishi",
          "Xalqaro tashkilotlar yoki konventsiyalar tomonidan rasman e'tirof etilishi"
        ],
        correct: 0
      },
      {
        q: "O'zbekistonda mustaqillikdan so'ng 'Navro'z' va 'Qurbon hayiti' bayramlariga dam olish kuni maqomining berilishi qaysi jarayonni ifodalaydi?",
        options: [
          "An'anaviy odat qoidalarining davlat sanksiyasi orqali huquqiy maqom olishini",
          "Normativ-huquqiy aktning o'z-o'zidan oddiy urf-odatga aylanishi jarayonini",
          "Sud pretsedentining huquqiy urf-odat sifatida amaliyotga kirishini",
          "Xalqaro shartnoma normalarining milliy qonunchilikka implementatsiya qilinishini"
        ],
        correct: 0
      },
      {
        q: "Sud pretsedenti (Precedent) tushunchasining lotinchadan tarjimasi qanday ma'noni bildiradi?",
        options: [
          "Avvalgisi, oldin sodir bo'lgan holat",
          "Huquqiy asos, poydevor va manba",
          "Namuna, o'rnak va majburiy andoza",
          "Yakuniy qaror, hukm va farmoyish"
        ],
        correct: 0
      },
      {
        q: "Sud pretsedenti qaysi huquqiy oilada (tizimda) asosiy huquq manbai sifatida tan olingan?",
        options: [
          "Anglo-sakson huquqiy tizimida (Buyuk Britaniya, AQSH, Kanada)",
          "Roman-german huquqiy tizimida (Germaniya, Fransiya, O'zbekiston)",
          "An'anaviy-diniy va islom huquqi tizimida",
          "Skandinaviya huquqiy tizimida"
        ],
        correct: 0
      },
      {
        q: "Normativ kelsihuv (normativ bitim) tushunchasiga qaysi javobda to'liq ta'rif berilgan?",
        options: [
          "Ikki yoki undan ortiq subyektlar o'rtasidagi, davlat tomonidan umummajburiy xususiyat berilgan huquqiy kelishuv",
          "Faqat xususiy shaxslar o'rtasida tuziladigan va notarial tartibda tasdiqlanadigan shartnoma",
          "Sud organi ishtirokida da'voni tugatish maqsadida tuziladigan prosessual hujjat",
          "Davlat organlari va xalqaro tashkilotlar o'rtasidagi faqat deklarativ bitim"
        ],
        correct: 0
      },
      {
        q: "Huquqiy doktrina (shuningdek, huquqshunoslar irodasi) rasmiy manba sifatida qaysi tizimda uzoq tarixiy ahamiyatga ega bo'lgan?",
        options: [
          "Roman-german (ayniqsa qadimgi Rim huquqida) va Islom huquqi (Fiqh) tizimida",
          "Faqat hozirgi zamon zamonaviy anglo-sakson pretsedent huquqida",
          "Faqat sotsialistik huquq tizimi va uning tarmoqlarida",
          "Faqat xalqaro ommaviy va xalqaro gumanitar huquq sohasida"
        ],
        correct: 0
      },
      {
        q: "Roman-german huquqiy tizimida huquqning asosiy konseptual prinsiplari va tushunchalari dastlab qayerda ishlab chiqilgan?",
        options: [
          "Universitetlarda (ilmiy-doktrinal maktablarda)",
          "Oliy sud idoralarida (sud amaliyotida)",
          "Parlament qo'mitalarida (qonun ijodkorligida)",
          "Ijro hokimiyati va vazirliklar idoralarida"
        ],
        correct: 0
      },
      {
        q: "Normativ-huquqiy akt (NHA) qaysi huquqiy oilada mutlaq va eng asosiy huquq manbai hisoblanadi?",
        options: [
          "Roman-german huquqiy oilasida",
          "Anglo-sakson huquqiy oilasida",
          "An'anaviy huquq tizimida",
          "Diniy-shariat huquq tizimida"
        ],
        correct: 0
      }
    ])
  },

  /////////////////////////////////////////////////////////////////////////////////
  // 3-BO'LIM: HUQUQNI AMALGA OSHIRISH VA YURIDIK FAKTLAR
  /////////////////////////////////////////////////////////////////////////////////
  topic3: {
    title: "Davlat va huquq nazariyasi: Huquqni amalga oshirish va Yuridik faktlar",
    questions: randomizeQuestions([
      {
        q: "Huquqning dinamikasi (dinamik holati) deganda nima tushuniladi?",
        options: [
          "Huquq normalarining real ijtimoiy munosabatlarda amalga oshishi va hayotga tatbiq etilishi",
          "Huquq normalarining faqat qonun matnlarida va kodekslarda statik mustahkamlanishi",
          "Huquq normalarining tizimli ichki iyerarxik tuzilishini ilmiy o'rganish",
          "Huquq normalarining ijtimoiy jihatdan qanchalik samarali ekanligini sotsiologik baholash"
        ],
        correct: 0
      },
      {
        q: "Huquqning statikasi (statik holati) quyidagilarning qaysi birida namoyon bo'ladi?",
        options: [
          "Huquq normalarining qonun hujjatlarida rasmiy ifodalangan matn shaklida mavjudligida",
          "Huquq normalarining subyektlar tomonidan kundalik faoliyatda qo'llanilishida",
          "Huquq normalarining davlat organlari tomonidan majburiy ijro etilishida",
          "Huquq normalarining jamiyat aholisi tomonidan subyektiv ravishda qabul qilinishida"
        ],
        correct: 0
      },
      {
        q: "Huquqni amalga oshirish (realizatsiya) tushunchasining huquqiy ma'nosi nima?",
        options: [
          "Huquq normalari talablarining subyektlar xulq-atvorida real hayotga ko'chishi va bajarilishi",
          "Yangi qonun loyihalarini davlat organlari tomonidan ishlab chiqilishi va qabul qilinishi",
          "Normativ hujjatlarni rasmiy e'lon qilish va Lex.uz bazasiga joylashtirish jarayoni",
          "Huquqiy faoliyat ustidan prokuratura organlari tomonidan umumiy nazorat o'rnatilishi"
        ],
        correct: 0
      },
      {
        q: "Huquqni amalga oshirishning bevosita (fuqarolar tomonidan amalga oshiriladigan) nechta shakli mavjud?",
        options: [
          "Uch xil: rioya qilish, ijro etish va foydalanish",
          "Ikki xil: bevosita va bilvositarioya qilish",
          "To'rt xil: rioya, ijro, foydalanish va huquqni qo'llash",
          "Besh xil: anglash, tahlil, rioya, foydalanish va baholash"
        ],
        correct: 0
      },
      {
        q: "Huquq normalariga 'rioya qilish' (soblyudenie) shakli qanday xulq-atvor bilan tavsiflanadi?",
        options: [
          "Subyektning taqiqlangan harakatlarni sodir etishdan tiyilishi (passiv xulq-atvor)",
          "Subyektning qonunda ko'rsatilgan majburiyatlarni faol harakatlar orqali bajarishi",
          "Subyektning o'ziga berilgan huquqlardan o'z xohishiga ko'ra foydalanishi",
          "Davlat organining vakolatli qaror qabul qilish bo'yicha harakatlari"
        ],
        correct: 0
      },
      {
        q: "Rioya qilish shaklida asosan qaysi turdagi huquq normalari hayotga tatbiq etiladi?",
        options: [
          "Taqiqlovchi huquq normalari",
          "Majburiyat yuklovchi huquq normalari",
          "Vakolat beruvchi huquq normalari",
          "Definitiv (ta'riflovchi) huquq normalari"
        ],
        correct: 0
      },
      {
        q: "Quyidagilardan qaysi biri huquqqa 'rioya qilish' shakliga aniq misol bo'la oladi?",
        options: [
          "Fuqaroning o'zganing mulkini o'g'irlamasligi va jinoyat sodir etmasligi",
          "Soliq to'lovchining belgilangan muddatda daromad solig'ini hisoblab to'lashi",
          "Abituriyentning oliy ta'lim muassasasiga hujjat topshirish huquqidan foydalanishi",
          "Sudyaning jinoyat ishi bo'yicha ayblanuvchiga nisbatan hukm chiqarishi"
        ],
        correct: 0
      },
      {
        q: "Huquqni 'ijro etish' (ispolnenie) shaklining asosiy huquqiy xususiyati nimada?",
        options: [
          "Subyektning qonun bilan yuklangan majburiyatlarni faol harakatlar orqali bajarishi",
          "Subyektning qonunda taqiqlangan harakatlarni sodir etishdan o'zini tiyishi",
          "Subyektning o'z subyektiv huquqlarini ixtiyoriy ravishda amalga oshirishi",
          "Davlat organining nizoli munosabatni majburiy tartibda ko'rib chiqishi"
        ],
        correct: 0
      },
      {
        q: "Huquqni ijro etish jarayonida subyektning shaxsiy xohish-irodasi qanday rol o'ynaydi?",
        options: [
          "Qonun talabini bajarish imperativ majburiyat bo'lib, ixtiyoriy tanlovga yo'l qo'yilmaydi",
          "Subyektning shaxsiy xohishi qonun talablaridan ustun turuvchi hal qiluvchi omildir",
          "Subyekt majburiyatni bajarish yoki bajarmaslikni o'zi mustaqil hal qiladi",
          "Shaxsiy xohish va qonun talabi har doim o'zaro muvozanatda bo'lishi shart"
        ],
        correct: 0
      },
      {
        q: "Quyidagilarning qaysi biri huquqni 'ijro etish' shakliga yaqqol misol hisoblanadi?",
        options: [
          "Fuqaroning qonun hujjatlarida belgilangan soliqlarni o'z vaqtida to'lashi",
          "Haydovchining svetoforning qizil chirog'ida transport vositasini to'xtatishi",
          "Mulkdorning o'ziga tegishli uyni oldi-sotdi shartnomasi orqali sotishi",
          "Guvohning sud sanksiyasisiz ko'rsatma berishdan mutlaqo bosh tortishi"
        ],
        correct: 0
      },
      {
        q: "Huquqdan 'foydalanish' (ispolzovanie) shaklining boshqa realizatsiya shakllaridan asosiy farqi nimada?",
        options: [
          "Ushbu shaklda subyektning ixtiyoriylik va dispozitivlik prinsipi asosiy o'rin tutadi",
          "Ushbu shakl faqat vakolatli davlat organlari va mansabdor shaxslar uchun mo'ljallangan",
          "Ushbu shakl faqat yuridik shaxslarning tadbirkorlik faoliyatida amal qiladi",
          "Ushbu shaklda imperativ majburiylik tamoyili mutlaq ustuvorlik kasb etadi"
        ],
        correct: 0
      },
      {
        q: "Huquqdan foydalanish shaklida asosan qaysi tipdagi huquq normalari amalga oshiriladi?",
        options: [
          "Vakolat beruvchi huquq normalari",
          "Taqiqlovchi huquq normalari",
          "Majburiyat yuklovchi huquq normalari",
          "Sanksiyalovchi huquq normalari"
        ],
        correct: 0
      },
      {
        q: "Quyidagilarning qaysi biri huquqdan 'foydalanish' shakliga misol bo'ladi?",
        options: [
          "Fuqaroning o'z xohishiga ko'ra oliy ma'lumot olish huquqini amalga oshirishi",
          "Yigitlarning qonun bo'yicha muddatli harbiy xizmatga majburiy chaqirilishi",
          "Guvohning tergovchining chaqiruvi bo'yicha ko'rsatma berish uchun kelishi",
          "Korxona rahbarining soliq idoralariga moliyaviy hisobot topshirishi"
        ],
        correct: 0
      },
      {
        q: "Huquqni qo'llash (primenenie) shakli kimlar tomonidan amalga oshiriladi?",
        options: [
          "Maxsus vakolat berilgan davlat organlari va mansabdor shaxslar tomonidan",
          "Fuqarolar va jismoniy shaxslar o'zlarining shaxsiy bitimlarida",
          "Nodavlat nonprofit tashkilotlar va jamoat faollari tomonidan",
          "Faqat xalqaro tashkilotlar va uning sudlov organlari tomonidan"
        ],
        correct: 0
      },
      {
        q: "Huquqni qo'llashning qaysi o'ziga xos xususiyati uni bevosita amalga oshirish shakllaridan ajratib turadi?",
        options: [
          "U daxldorlik xususiyatiga ega bo'lib, davlat-hokimiyat vakolati asosida amalga oshiriladi",
          "U subyektlarning faqat passiv xulq-atvori (harakatsizligi) orqali yuzaga keladi",
          "U oddiy subyektlarning o'zaro kelishuvi va ixtiyoriyligiga asoslanadi",
          "U jamiyat a'zolarining huquqiy savodxonligini oshirish maqsadidagina qo'llaniladi"
        ],
        correct: 0
      },
      {
        q: "Huquqni qo'llash faoliyati (huquqni qo'llash akti chiqarish) qachon zarur bo'ladi?",
        options: [
          "Huquqiy nizolar yuzaga kelganda yoki huquqbuzarlik sodir etilib, sanksiya qo'llash kerak bo'lganda",
          "Fuqaro o'zining shaxsiy subyektiv huquqlaridan foydalanishni xohlagan har qanday oddiy holatda",
          "Subyektlar huquq normalariga o'z ixtiyori bilan begarez rioya qilayotgan vaziyatlarda",
          "Yangi qonun hujjati kuchga kirgan kundan boshlab uni ommaga tushuntirish jarayonida"
        ],
        correct: 0
      },
      {
        q: "Huquqni qo'llash jarayonining yakuniy natijasi sifatida nima qabul qilinadi?",
        options: [
          "Individuallashgan huquqiy akt (sud hukmi, buyruq, qaror)",
          "Umumiy xarakterga ega bo'lgan yangi normativ-huquqiy hujjat",
          "Subyektlar o'rtasidagi ikki tomonlama fuqarolik-huquqiy shartnomasi",
          "Huquq normasining kuchini butunlay to'xtatuvchi rasmiy qaror"
        ],
        correct: 0
      },
      {
        q: "Quyidagilardan qaysi biri huquqni qo'llash (primenenie) shakliga yaqqol misol bo'ladi?",
        options: [
          "Jinoyat ishlari bo'yicha sud tomonidan sudlanuvchiga nisbatan hukm chiqarilishi",
          "Fuqaroning o'ziga tegishli avtomashinani boshqa shaxsga ishonchnoma topshirishi",
          "Tadbirkorning bojxona chegarasidan yuk o'tkazishda bojxona bojini to'lashi",
          "Piyodaning yo'lni belgilanmagan joyidan kesib o'tishdan o'zini tiyishi"
        ],
        correct: 0
      },
      {
        q: "Yuridik fakt (Yuridicheskiy fakt) deganda huquq nazariyasida nima tushuniladi?",
        options: [
          "Huquq normasida nazarda tutilgan, huquqiy oqibatlar keltirib chiqaruvchi real hayotiy holat",
          "Qonunchilik palatasida deputatlar tomonidan muhokama qilinadigan har qanday loyiha holati",
          "Faqat davlat idoralari tomonidan maxsus rejalashtirilgan va rasmiylashtirilgan voqea",
          "Sud majlisida prokuror va advokat o'rtasida tortishuvga sabab bo'lgan og'zaki dalil"
        ],
        correct: 0
      },
      {
        q: "Yuridik faktlar subyekt irodasiga bog'liqligi mezoniga ko'ra qaysi ikki asosiy turga bo'linadi?",
        options: [
          "Harakatlar (irodaviy) va Hodisalar (irodaga bog'liq bo'lmagan)",
          "Huquqiy munosabatlar va Huquqiy holatlar",
          "Ijobiy faktlar va Salbiy (kollizion) faktlar",
          "Moddiy faktlar va Prosessual-sudlov faktlari"
        ],
        correct: 0
      },
      {
        q: "Quyidagilardan qaysi biri huquqqa xilof yuridik faktga (huquqbuzarlikka) misol bo'ladi?",
        options: [
          "Shartnoma shartlarini qasdan buzish va o'g'rilik sodir etish",
          "Nikoh tuzish va fuqaroning qonuniy farzand ko'rishi",
          "Fors-major holati hisoblangan zilzila va epidemiya tarqalishi",
          "Muddatlarning o'tishi va shaxsning voyaga yetishi"
        ],
        correct: 0
      },
      {
        q: "Huquq nazariyasida 'Hodisalar' (Sobitiya) deb qanday yuridik faktlarga aytiladi?",
        options: [
          "Inson irodasidan qat'i nazar, tabiat qonuniyatlari asosida yuz beradigan voqeliklar",
          "Faqat davlat organlari rahbarlari tomonidan qabul qilinadigan rasmiy qarorlar",
          "Subyektlarning ongli ravishda maqsadli amalga oshiradigan huquqiy xatti-harakatlari",
          "Faqat sud organlari tomonidan maxsus tasdiqlanadigan protsessual holatlar"
        ],
        correct: 0
      },
      {
        q: "Yuridik fakt hisoblangan 'Hodisalar'ga quyidagilarning qaysi biri aniq misol bo'la oladi?",
        options: [
          "To'satdan vafot etish va tabiiy ofat (zilzila, suv toshqini)",
          "Oldi-sotdi shartnomasini imzolash va mulk huquqini o'tkazish",
          "Ma'muriy huquqbuzarlik sodir etish va qonun talabini buzish",
          "Sud tomonidan da'vo arizasini ko'rib chiqib qaror chiqarilishi"
        ],
        correct: 0
      }
    ])
  },

  /////////////////////////////////////////////////////////////////////////////////
  // 4-BO'LIM: HUQUQIY ONG, HUQUQIY TIZIM VA SHARHLASH
  /////////////////////////////////////////////////////////////////////////////////
  topic4: {
    title: "Davlat va huquq nazariyasi: Huquqiy ong, Huquq tizimi va Sharhlash",
    questions: randomizeQuestions([
      {
        q: "Huquqiy ong (Pravosoznanie) ijtimoiy ongning shakli sifatida qanday qaraladi?",
        options: [
          "Mustaqil shakl sifatida o'zining maxsus predmeti va xususiyatlariga ega bo'lgan holda",
          "Axloqiy ongning tarkibidagi uning bevosita yordamchi va ikkinchi darajali qismi sifatida",
          "Siyosiy ongning faqat qonun chiqarish jarayoniga oid subyektiv ko'rinishi sifatida",
          "Iqtisodiy munosabatlarni to'g'ridan-to'g'ri aks ettiruvchi mexanik ong shakli sifatida"
        ],
        correct: 0
      },
      {
        q: "Huquqiy ongning asosiy aks ettirish predmetini nima tashkil etadi?",
        options: [
          "Huquqiy voqeolik, amaldagi va istiqboldagi huquq hamda huquqiy hodisalar majmui",
          "Jamiyatdagi faqat diniy, ma'rifiy va an'anaviy qadriyatlar tizimi",
          "Siyosiy hokimiyatni egallash va davlat boshqaruvi apparatini shakllantirish masalalari",
          "Ijtimoiy guruhlar o'rtasidagi iqtisodiy resurslar va mulk taqsimoti balansi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy ong ichki tuzilishiga (strukturasiga) ko'ra qaysi ikki asosiy elementdan iborat?",
        options: [
          "Huquqiy psixologiya (hissiy qism) va Huquqiy mafkura (g'oyaviy qism)",
          "Huquqiy bilim va huquqiy amaliy tajriba majmui",
          "Huquqiy nazariya va sud organlarining sudlov amaliyoti",
          "Huquqiy tarbiya va davlat tomonidan o'rnatilgan huquqiy ta'lim"
        ],
        correct: 0
      },
      {
        q: "Huquqiy psixologiyaning o'ziga xos shakllanish xususiyati nimada?",
        options: [
          "Kundalik hayotiy tajriba ta'sirida, ijtimoiy muhitda stixiyali tarzda yuzaga kelishi",
          "Ilmiy tizimlashtirilgan g'oyalar va professional huquqiy qarashlar asosida rivojlanishi",
          "Maxsus yuridik ta'lim muassasalarida maqsadli dasturlar orqali shakllantirilishi",
          "Rasmiy normativ-huquqiy hujjatlar matni bilan bevosita mustahkamlab qo'yilishi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy mafkurani huquqiy psixologiyadan farqlaydigan asosiy konseptual jihat qaysi?",
        options: [
          "Ilmiy tizimlashtirilgan, ongli va maqsadli ravishda shakllantiriladigan g'oyalar tizimi ekanligi",
          "Keng xalq ommasining his-tuyg'ulari va emotsiyalarini bevosita aks ettirishi",
          "Kundalik hayotda subyektlar tomonidan instinktiv darajada qo'llanilishi",
          "Faqat sud va huquqni muhofaza qiluvchi organlar xodimlarigagina tegishli ekanligi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy ongning qaysi funksiyasi baholash mezonlari sifatida adolat, insoniylik va qonuniylik prinsiplaridan foydalanadi?",
        options: [
          "Baholash funksiyasi",
          "Bilish funksiyasi",
          "Tartibga solish funksiyasi",
          "Prognozlash (modellashtirish) funksiyasi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy modellashtirish va prognozlash funksiyasi ayniqsa qaysi sohada hal qiluvchi ahamiyatga ega?",
        options: [
          "Qonun ijodkorligi (huquq ijodkorligi) jarayonida",
          "Sudlar tomonidan konkret kazuistik ishlarni ko'rishda",
          "Aholiga huquqiy tarbiya berishning an'anaviy tizimida",
          "Jinoyat ishlarini tergov qilish dastlabki bosqichlarida"
        ],
        correct: 0
      },
      {
        q: "Subyektlar tarkibi (tashuvchilari) bo'yicha huquqiy ong qanday turlarga bo'linadi?",
        options: [
          "Individual, guruhiy va jamoatchilik (ijtimoiy) huquqiy ongi",
          "Oddiy, kasbiy va ilmiy-nazariy huquqiy ong",
          "Nazariy, amaliy va qiyosiy huquqiy ong turlari",
          "Rasmiy, norasmiy va aralash xarakterdagi huquqiy ong"
        ],
        correct: 0
      },
      {
        q: "Bilish chuqurligi va professionallik darajasi bo'yicha huquqiy ong qanday tasniflanadi?",
        options: [
          "Kundalik (oddiy), kasbiy (professional) va nazariy-ilmiy huquqiy ong",
          "Shaxsiy, guruhiy va umumjamiyat huquqiy ongi",
          "Psixologik, mafkuraviy va sotsiologik huquqiy ong",
          "An'anaviy, zamonaviy va o'tish davri huquqiy ongi"
        ],
        correct: 0
      },
      {
        q: "Kasbiy (professional) huquqiy ong qanday yo'l bilan maqsadli shakllanadi?",
        options: [
          "Maxsus oliy yuridik ta'lim va tizimli amaliy huquqiy faoliyat natijasida",
          "Kundalik hayotiy tajriba va oilaviy muhitning bilvositata'siri ostida",
          "Ommaviy axborot vositalari va ijtimoiy tarmoqlarni kuzatish orqali",
          "Mahalla idoralari va jamoat tashkilotlarining umumiy suhbatlarida"
        ],
        correct: 0
      },
      {
        q: "Huquqiy nigilizm (Pravovoy nigilizm) qanday huquqiy-psixologik hodisa sifatida ta'riflanadi?",
        options: [
          "Huquqning jamiyatdagi ijobiy rolini inkor etish, qonunlarga nisbatan salbiy va mensimasdan munosabatda bo'lish",
          "Huquqiy normalarning ijtimoiy imkoniyatlarini haddan tashqari yuqori baholash (idealizatsiya)",
          "Qonun talablariga so'zsiz, ko'r-ko'rona va tanqidsiz itoat etish namunasi",
          "Huquqiy normalarni diniy-shariat me'yorlari bilan mutlaqo tenglashtirish tendensiyasi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy nigilizmning faol shakli quyidagilarning qaysi birida yaqqol namoyon bo'ladi?",
        options: [
          "Qonunlarni ongli ravishda buzishda, jinoiy xulq-atvorda va tizimli korrupsiyada",
          "Qonunchilik o'zgarishlaridan mutlaqo bexabarlik va huquqiy flegmatizm holatida",
          "Huquqiy masalalarga nisbatan oddiy e'tiborsizlik va passiv munosabatda",
          "Davlat tomonidan tashkil etiladigan huquqiy tarbiya tadbirlaridan chetda qolishda"
        ],
        correct: 0
      },
      {
        q: "Quyidagilardan qaysi biri huquqiy nigilizm yuzaga kelishining determinanti (sababi) hisoblanmaydi?",
        options: [
          "Yuridik kasb egalarining (huquqshunoslarning) miqdoriy jihatdan ko'payishi",
          "Jamiyatda huquqiy ta'lim va huquqiy madaniyat darajasining pastligi",
          "Davlat apparati va sud organlaridagi tizimli korrupsiyalashgan holatlar",
          "O'tmishdagi totalitar yoki avtoritar davlat boshqaruvi sotsial tajribasi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy idealizm (romanticizm) deganda nima tushuniladi?",
        options: [
          "Huquqning va qonunlarning jamiyat muammolarini hal etishdagi imkoniyatlarini haddan tashqari yuqori baholash",
          "Huquqiy normalarga va qonun ustuvorligiga mutlaqo befarq munosabatda bo'lish",
          "Huquqiy tizimni davlat tuzilmasi sifatida tubdan inkor etish harakati",
          "Huquqni faqat axloqiy va falsafiy nuqtayi nazardangina baholash intilishi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy idealizmning jamiyat hayotidagi salbiy amaliy oqibati nima hisoblanadi?",
        options: [
          "Qonunlar real hayotdan uzilib qolishi natijasida jamiyatda huquqiy nigilizmning yanada kuchayishi",
          "Huquqiy tizimning to'liq barqarorlashuvi va qonun ustuvorligining ta'minlanishi",
          "Davlat idoralarining qonun ijodkorligi faoliyatining butunlay to'xtab qolishi",
          "Sud organlarining ijro hokimiyatidan mustaqilligining keskin oshib ketishi"
        ],
        correct: 0
      },
      {
        q: "Huquqiy tarbiyaning (Pravovoe vospitanie) eng asosiy strategik maqsadi nimadan iborat?",
        options: [
          "Fuqarolarda huquqqa nisbatan ongli hurmat, barqaror huquqiy pozitsiya va qonunlarga amal qilish ishtiyoqini shakllantirish",
          "Jamiyatdagi barcha fuqarolarga qonunlar matnini so'zma-so'z majburiy yodlatish",
          "Davlatda jinoyatchilikni ma'muriy tazyiqlar orqali mutlaqo yo'qotishga erishish",
          "Barcha fuqarolarni professional darajadagi yuridik mutaxassis qilib tayyorlash"
        ],
        correct: 0
      },
      {
        q: "Quyidagilardan qaysi biri huquqiy tarbiyani amalga oshirishning an'anaviy shakllariga kirmaydi?",
        options: [
          "Huquqbuzarlarni jinoiy javobgarlikka tortish doirasini maksimal kengaytirish",
          "Tizimli huquqiy ta'lim (maktab, universitetlarda o'qitish) tizimi",
          "Ommaviy axborot vositalari va ijtimoiy institutlar orqali huquqiy targ'ibot",
          "Huquqiy va detektiv mavzuda yaratilgan yuqori saviyadagi badiiy asarlar"
        ],
        correct: 0
      },
      {
        q: "Huquqiy tarbiyaning asosiy yuridik metodlari qatoriga qaysilar kiradi?",
        options: [
          "Ishontirish, namuna ko'rsatish, rag'batlantirish va majburlov",
          "Tekshirish, reja asosida nazorat, davlat auditi va jazolash",
          "Faqat tushuntirish va o'tgan tarixiy xatolarni tahlil qilish",
          "Kuzatish, instinktiv amal qilish va xatti-harakatni takrorlash"
        ],
        correct: 0
      },
      {
        q: "Huquq normalarini sharhlash (talqin qilish — Interpretatsiya) deganda nima tushuniladi?",
        options: [
          "Huquqiy norma mazmunini, qonun chiqaruvchining haqiqiy irodasini to'g'ri anglash va tushuntirish jarayoni",
          "Normativ-huquqiy hujjatlarni rasmiy idoralarda davlat ro'yxatidan o'tkazish tartibi",
          "Yangi huquqiy normalarni ishlab chiqish va ularni qonunchilik bazasiga kiritish jarayoni",
          "Huquqiy nizolarni hal qilishda sudlar tomonidan qo'llaniladigan majburiy sanksiyalar tizimi"
        ],
        correct: 0
      },
      {
        q: "Grammatik (lingvistik) sharhlash usuli qanday tahliliy mexanizmga asoslanadi?",
        options: [
          "Huquqiy norma matnini til, filologiya, punktuatsiya va grammatika qoidalari asosida tahlil qilishga",
          "Normaning muayyan jamiyatdagi funksional va sotsiologik vazifasini aniqlashga",
          "Normaning qabul qilingan tarixiy sharoiti va siyosiy kontekstini o'rganishga",
          "Normani boshqa normalar va butun huquq tizimi bilan logik aloqasini tekshirishga"
        ],
        correct: 0
      },
      {
        q: "Tizimli (sistemali) sharxlash usulining bosh maqsadi nima?",
        options: [
          "Normani boshqa huquqiy normalar, institutlar va butun huquq tizimidagi o'rni bilan aloqadorlikda tahlil qilish",
          "Normaning yaratilishidagi teleologik maqsad va strategik vazifalarni aniqlash",
          "Norma matnini faqat sintaktik va morfologik qoidalarga ko'ra tekshirish",
          "Normaning kelajakdagi ijtimoiy oqibatlarini va amaliy samaradorligini prognozlash"
        ],
        correct: 0
      },
      {
        q: "Teleologik (maqsadiy) sharxlash usuli qaysi fundamental savolga javob izlaydi?",
        options: [
          "Qonun chiqaruvchi ushbu normani qabul qilish orqali qanday huquqiy maqsadga erishmoqchi edi?",
          "Norma qaysi tarixiy davrda va qanday siyosiy inqirozlar sharoitida qabul qilingan?",
          "Normaning matnida grammatik va uslubiy xatolar mavjudmi?",
          "Ushbu norma sotsiologik jihatdan aholi tomonidan qanday qabul qilinmoqda?"
        ],
        correct: 0
      },
      {
        q: "Sharxlashni amalga oshiruvchi subyektning yuridik maqomiga ko'ra u qaysi ikki asosiy turga bo'linadi?",
        options: [
          "Rasmiy (vakolatli) va Norasmiy (gofat) sharhlash",
          "Normativ va Kazual sharhlash turlari",
          "Autentik va Legal sharhlash tizimi",
          "Kengaytiruvchi va Toraytiruvchi talqin"
        ],
        correct: 0
      },
      {
        q: "Doktrinal (ilmiy) sharhlash kimlar tomonidan amalga oshiriladi va u qanday xarakterga ega?",
        options: [
          "Olimlar va huquqshunoslar tomonidan amalga oshirilib, majburiy kuchga ega bo'lmagan tavsiyaviy xarakterga ega",
          "Parlament tomonidan qonun hujjatlariga rasmiy o'zgartirishlar kiritish orqali bajariladigan majburiy sharh",
          "Oliy sud Plenumi tomonidan barcha sudlar uchun majburiy ko'rsatma sifatida chiqariladigan sharh",
          "Adliya vazirligi tomonidan idoraviy hujjatlarni ro'yxatdan o'tkazishda beriladigan ekspertiza xulosasi"
        ],
        correct: 0
      },
      {
        q: "Autentik sharhlash (istisnoiy rasmiy sharhlash) deganda qanday sharhlash tushuniladi?",
        options: [
          "Huquqiy normani uni qabul qilgan (yaratgan) organning o'zi tomonidan izohlanishi",
          "Oliy sud tomonidan muayyan jinoyat ishi bo'yicha berilgan kazuistik izoh",
          "Konstitutsiyaviy sud tomonidan qonunlarning Konstitutsiyaga muvofiqligi bo'yicha sharhi",
          "Xalqaro sudlar tomonidan xalqaro konventsiya normalariga berilgan rasmiy talqin"
        ],
        correct: 0
      },
      {
        q: "Kazual sharhlash (Kazualnoe tolkovanie) qanday xususiyatga ega?",
        options: [
          "Muayyan konkret ish doirasidagina amal qiladi va faqat o'sha ish ishtirokchilari uchun majburiydir",
          "Barcha huquq subyektlari va kelajakdagi o'xshash munosabatlar uchun umummajburiy ahamiyatga ega",
          "Qonun chiqaruvchi organ tomonidan yangi qonun qabul qilish jarayonida beriladigan umumiy izoh",
          "Fuqarolik jamiyati institutlari tomonidan qonunlar monitoringi natijasida chiqarilgan xulosa"
        ],
        correct: 0
      }
    ])
  },

  /////////////////////////////////////////////////////////////////////////////////
  // 5-BO'LIM: HUQUQ TIZIMI VA QONUNCHILIKNI TIZIMLASHTIRISH
  /////////////////////////////////////////////////////////////////////////////////
  topic5: {
    title: "Davlat va huquq nazariyasi: Huquq tizimi va Tizimlashtirish",
    questions: randomizeQuestions([
      {
        q: "Huquq tizimi (Sistema prava) deganda nima tushuniladi?",
        options: [
          "Ijtimoiy munosabatlarning tabiati bilan shartlangan huquqning ichki tuzilishi va tuzilishi",
          "Normativ-huquqiy hujjatlarning tashqi iyerarxik shakli va to'plami",
          "Davlat qonun chiqaruvchi organlari tomonidan chiqarilgan barcha hujjatlar yig'indisi",
          "Huquqiy munosabatlar ishtirokchilarining huquqiy maqomlari va subyektlari majmui"
        ],
        correct: 0
      },
      {
        q: "Huquq tizimining eng kichik, bo'linmas va birlamchi strukturaviy elementi qaysi?",
        options: [
          "Huquq normasi",
          "Huquq instituti",
          "Huquq tarmog'i",
          "Qonunchilik tizimi"
        ],
        correct: 0
      },
      {
        q: "Huquq instituti (Institut prava) tushunchasiga qaysi javobda to'g'ri ta'rif berilgan?",
        options: [
          "O'zaro bog'liq bo'lgan bir turdagi ijtimoiy munosabatlarni tartibga soluvchi huquq normalari guruhi",
          "Davlat hokimiyati va boshqaruvi organlarining yaxlit tizimi va shtat tarkibi",
          "Qonunchilik tizimining tashqi iyerarxik shaklini ifodalovchi yirik hujjat",
          "Huquq tarmog'ining eng yirik, tarmoqlararo munosabatlarni qamrab oluvchi qismi"
        ],
        correct: 0
      },
      {
        q: "Huquqni mustaqil tarmoqlarga (sohalarga) bo'lishning eng asosiy va bosh predmeti nima?",
        options: [
          "Huquqiy tartibga solish predmeti (tartibga solinadigan ijtimoiy munosabatlar turi)",
          "Davlat organlarining qonun chiqarish texnikasi va uslubiyoti",
          "Normativ-huquqiy hujjatlarning hajmi va moddalarining miqdori",
          "Subyektlarning huquqiy munosabatga kirishishdagi shaxsiy niyatlari"
        ],
        correct: 0
      },
      {
        q: "Huquqiy tartibga solish metodi deganda nima tushuniladi?",
        options: [
          "Huquq normalarining ijtimoiy munosabatlarga ta'sir ko'rsatish usullari va vositalari majmui",
          "Faqat sud organlari tomonidan dalillarni to'plash va baholash uslubi",
          "Qonun loyihalarini parlament qo'mitalarida ko'rib chiqishning prosessual tartibi",
          "Davlat tomonidan qonun buzilishlarining oldini olish bo'yicha tezkor tadbirlar"
        ],
        correct: 0
      },
      {
        q: "Kodifikatsiya (Kodifikatsiya) tizimlashtirish shakli sifatida qanday tavsiflanadi?",
        options: [
          "Mavjud normalarni tubdan qayta ishlab, mantiqiy asosda yagona yangi tizimli hujjatga (kodeksga) keltirish",
          "Normativ-huquqiy hujjatlarni ularning mazmuniga mutlaqo o'zgartirish kiritmasdan xronologik yig'ish",
          "Eskirgan normalarni o'zgartirmasdan, ularni faqat alifbo tartibida to'plamlarga joylashtirish",
          "Vazirliklarning ichki buyruqlarini davlat ro'yxatidan o'tkazish orqali arxivlash"
        ],
        correct: 0
      },
      {
        q: "Inkorporatsiya (Inkorporatsiya) qanday tizimlashtirish turi hisoblanadi?",
        options: [
          "Normativ hujjatlarning mazmunini o'zgartirmasdan, ularni muayyan tartibda to'plamlarga birlashtirish",
          "Normativ-huquqiy hujjatlarning mazmuniga o'zgartirish kiritib, ularni yangi kodeks shakliga keltirish",
          "Eskirgan qonunlarni bekor qilish orqali mutlaqo yangi huquqiy tarmoq yaratish",
          "Huquq sohalarini yangi prinsiplar asosida xalqaro andozalarga moslab qayta taqsimlash"
        ],
        correct: 0
      },
      {
        q: "Konsolidatsiya (Konsolidatsiya) nima?",
        options: [
          "Bir-biriga yaqin tarqoq hujjatlarni mazmunan o'zgartirmasdan, yagona mustaqil yuridik aktga birlashtirish",
          "Normativ-huquqiy hujjatlar mazmuniga o'zgartirish kiritish orqali yangi mukammal kodeks yaratish",
          "Qonunlarni faqat xronologik tartibda rasmiy nashriyotlarda e'lon qilish jarayoni",
          "Huquq tarmog'ini yangi sub-institutlarga bo'lish bo'yicha ilmiy-nazariy faoliyat"
        ],
        correct: 0
      },
      {
        q: "Qonunchilik tizimi va Huquq tizimi o'rtasidagi asosiy konseptual farq nimada?",
        options: [
          "Huquq tizimi huquqning ichki obbyektiv tuzilishini, qonunchilik tizimi esa uning tashqi rasmiy shaklini ifodalaydi",
          "Qonunchilik tizimi huquqning ichki tuzilishini, huquq tizimi esa uning tashqi iyerarxik shaklini ko'rsatadi",
          "Ular sinonim tushunchalar bo'lib, o'rtasida hech qanday huquqiy yoki ilmiy farq mavjud emas",
          "Qonunchilik tizimi faqat kodekslardan, huquq tizimi esa faqat xalqaro konventsiyalardan iborat"
        ],
        correct: 0
      }
    ])
  }

  */




















//////////////////////////////////////////////////
//  topic1: {
//     title: "Tarix 1-Bo'lim",
//     questions: randomizeQuestions(
//       [

//      ]),
//    },


  
  // ======================================================================
};