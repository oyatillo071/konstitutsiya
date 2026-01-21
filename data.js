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
};
