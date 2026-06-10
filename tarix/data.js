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

  /////////////////////////////////////////////////////////////////////////////////
  // 2-BO'LIM: HUQUQ PRINSIPLARI VA MANBALARI
  /////////////////////////////////////////////////////////////////////////////////
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
};



















//////////////////////////////////////////////////
//  topic1: {
//     title: "Tarix 1-Bo'lim",
//     questions: randomizeQuestions(
//       [

//      ]),
//    },


  
  // ========================================================================