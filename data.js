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
  topic1: {
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
  topic2: {
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

  // ======================================================================
  topic3: {
    title: "3-Bo'lim",
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
};
