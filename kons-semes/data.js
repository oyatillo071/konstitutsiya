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


  ////////////////////////////////////////////////////////////////////////////////////
    
    topic1: {
    title: "Konstitutsiya 1-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Qiyosiy konstitutsiyaviy huquq iborasi qaysi atamalardan iborat?",
    "options": [
      "Qiyosiy, konstitutsiyaviy va huquq",
      "Qiyosiy, konstitutsiyaviy va huquqlar",
      "Qiyosiy, huquqiy va konstitutsiyaviy",
      "Qiyosiy, konstitutsiyaviy va norma"
    ],
    "correct": 0
  },
  {
    "q": "Dekret atamasi birinchi bor qayerda paydo bo'lgan?",
    "options": [
      "Qadimgi Rimda",
      "Qadimgi Rimliklarda",
      "Qadimgi Yunonistonda",
      "Qadimgi Vizantiyada"
    ],
    "correct": 0
  },
  {
    "q": "XVIII–XIX asrlarda yashagan, 4 jildli “Ingliz qonunlariga sharhlar” asarini yozgan huquqshunos olim kim?",
    "options": [
      "Uilyam Blekston",
      "Uilyam Blekstoun",
      "Monteske",
      "J. Bentam"
    ],
    "correct": 0
  },
  {
    "q": "Dastlabki yozma Konstitutsiya qaysi davlatda qabul qilingan?",
    "options": [
      "AQShda (1787-yil)",
      "AQShda (1789-yil)",
      "Fransiyada (1791-yil)",
      "Shveysariyada (1848-yil)"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi huquq maktabi vakillari Konstitutsiyani xalqning umumiy irodasini ifodalovchi ijtimoiy shartnoma deb hisoblaydilar?",
    "options": [
      "Tabiiy huquq maktabi",
      "Tabiiy huquqlar maktabi",
      "Pozitiv huquq maktabi",
      "Normativ huquq maktabi"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq fani qachon falsafa va sotsiologiyadan ajralib chiqdi?",
    "options": [
      "XIX asr oxirida",
      "XIX asr boshida",
      "XX asr boshida",
      "XVIII asr oxirida"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq atamasi qanday uchta ma'noga ega?",
    "options": [
      "Huquq tarmog‘i, fan, o‘quv fani",
      "Huquq tarmog‘i, siyosat, fan",
      "Huquq tarmog‘i, fan, falsafa",
      "Huquq tarmog‘i, o‘quv fani, siyosat"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilardan qaysi biri konstitutsiyaviy huquq metodlaridan biri hisoblanmaydi?",
    "options": [
      "Iqtisodiy rag‘batlantirish",
      "Huquqiy tartibga solish",
      "Ma’muriy ta’sir",
      "Normativ tartibga solish"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquq tizimi qanday elementlardan iborat?",
    "options": [
      "Normalar, institutlar, munosabatlar",
      "Normalar, institutlar, tamoyillar",
      "Normalar, tamoyillar, munosabatlar",
      "Institutlar, tamoyillar, munosabatlar"
    ],
    "correct": 0
  },
  {
    "q": "Qiyosiy konstitutsiyaviy huquqda umumiydan xususiyga o‘tish metodologiyasi qanday nomlanadi?",
    "options": [
      "Deduktiv metod",
      "Induktiv metod",
      "Analitik metod",
      "Sintetik metod"
    ],
    "correct": 0
  },
  {
    "q": "Qiyosiy metodda taqqoslashning qanday usullari mavjud?",
    "options": [
      "Makroqiyosiy va mikroqiyosiy",
      "Makroqiyosiy va analitik",
      "Mikroqiyosiy va sintetik",
      "Analitik va sintetik"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy huquqning manbalari qanday ikki ma’noda talqin qilinadi?",
    "options": [
      "Moddiy va rasmiy",
      "Moddiy va huquqiy",
      "Rasmiy va normativ",
      "Huquqiy va normativ"
    ],
    "correct": 0
  },
  {
    "q": "Qonunlar qanday turlarga bo‘linadi?",
    "options": [
      "Konstitutsiyaviy, organik, oddiy",
      "Konstitutsiyaviy, oddiy, maxsus",
      "Organik, oddiy, maxsus",
      "Konstitutsiyaviy, organik, maxsus"
    ],
    "correct": 0
  },
  {
    "q": "Italiya va Ispaniyada hukumat tomonidan qabul qilinadigan vaqtinchalik hujjat nima deb ataladi?",
    "options": [
      "Dekret-qonun",
      "Dekret-hujjat",
      "Dekret-farmoyish",
      "Dekret-buyruq"
    ],
    "correct": 0
  },
  {
    "q": "Sud pretsedenti qaysi davlatlarda huquq manbayi sifatida qo‘llanadi?",
    "options": [
      "Buyuk Britaniya, AQSh, Kanada",
      "Buyuk Britaniya, AQSh, Fransiya",
      "AQSh, Kanada, Germaniya",
      "Buyuk Britaniya, Germaniya, Avstriya"
    ],
    "correct": 0
  },
  {
    "q": "Og‘zaki xarakterga ega bo‘lgan manba qanday nomlanadi?",
    "options": [
      "Konstitutsiyaviy odat",
      "Konstitutsiyaviy kelishuv",
      "Konstitutsiyaviy norma",
      "Konstitutsiyaviy tamoyil"
    ],
    "correct": 0
  },
  {
    "q": "Arastu o‘zining iqtisodiy-siyosiy doktrinasini qaysi asarida yozib qoldirgan?",
    "options": [
      "Siyosat",
      "Etika",
      "Ritorika",
      "Metafizika"
    ],
    "correct": 0
  },
  {
    "q": "Shariat manbalari nimalardan iborat?",
    "options": [
      "Qur’on, Sunna, Ijmo, Qiyos",
      "Qur’on, Sunna, Fiqh, Qiyos",
      "Qur’on, Hadis, Ijmo, Qiyos",
      "Qur’on, Sunna, Ijmo, Fiqh"
    ],
    "correct": 0
  },
  {
    "q": "Shariatda rag‘batlantirilmaydigan ixtiyoriy xatti-harakatlar qanday nomlanadi?",
    "options": [
      "Makruh",
      "Mubah",
      "Mustahab",
      "Harom"
    ],
    "correct": 0
  }




,
  {
    "q": "J. Burdo konstitutsiyani qanday ta’riflagan?",
    "options": [
      "Davlat hokimiyatini tashkil etuvchi qoidalar majmuasi",
      "Davlat hokimiyatini belgilovchi qoidalar majmuasi",
      "Davlat hokimiyatini tartibga soluvchi qoidalar majmuasi",
      "Davlat hokimiyatini boshqaruvchi qoidalar majmuasi"
    ],
    "correct": 0
  },
  {
    "q": "Oliy yuridik kuchga ega bo‘lgan hujjat qanday ataladi?",
    "options": [
      "Qattiq konstitutsiya",
      "Yumshoq konstitutsiya",
      "Moslashuvchan konstitutsiya",
      "Oddiy konstitutsiya"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi mamlakatda konstitutsiya faqat moddiy ma’noda mavjud?",
    "options": [
      "Buyuk Britaniya",
      "Isroil",
      "Yangi Zelandiya",
      "Kanada"
    ],
    "correct": 0
  },
  {
    "q": "Zamonaviy konstitutsiyaviy modellarning birinchi bosqichida qabul qilingan konstitutsiyalarning xususiyati nima edi?",
    "options": [
      "Liberal-burjua xususiyatiga ega",
      "Etatistik-burjua xususiyatiga ega",
      "Sotsialistik-burjua xususiyatiga ega",
      "Demokratik-burjua xususiyatiga ega"
    ],
    "correct": 0
  },
  {
    "q": "1920-yilda qaysi davlatlar konstitutsiyalari qabul qilingan?",
    "options": [
      "Avstriya va Chexoslovakiya",
      "Avstriya va Germaniya",
      "Chexoslovakiya va Vengriya",
      "Avstriya va Shveytsariya"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi kunda dunyoda qancha Konstitutsiya mavjud?",
    "options": [
      "500 dan ortiq",
      "400 dan ortiq",
      "300 dan ortiq",
      "600 dan ortiq"
    ],
    "correct": 0
  },
  {
    "q": "Liberal konstitutsiyaviy model qanday tavsiflanadi?",
    "options": [
      "Shaxs erkinligi va mulk huquqini ustuvor qiladi",
      "Shaxs erkinligi va davlat aralashuvini kuchaytiradi",
      "Mulk huquqini va davlat aralashuvini ustuvor qiladi",
      "Shaxs erkinligi va iqtisodiy huquqni ustuvor qiladi"
    ],
    "correct": 0
  },
  {
    "q": "Etatistik konstitutsiyaviy model asosan qaysi mamlakatlarda saqlanib qolgan?",
    "options": [
      "Xitoy, Kuba, KXDR",
      "Xitoy, Yaponiya, KXDR",
      "Kuba, Germaniya, KXDR",
      "Xitoy, Kuba, Vengriya"
    ],
    "correct": 0
  },
  {
    "q": "Prezidentlik shakli ilk bor qaysi Konstitutsiyada joriy etilgan?",
    "options": [
      "1787-yilgi AQSh Konstitutsiyasi",
      "1791-yilgi Fransiya Konstitutsiyasi",
      "1848-yilgi Shveytsariya Konstitutsiyasi",
      "1920-yilgi Avstriya Konstitutsiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Yozilmagan konstitutsiyalarga qaysi davlatlar kiradi?",
    "options": [
      "Buyuk Britaniya, Isroil, Yangi Zelandiya",
      "Buyuk Britaniya, Kanada, Yangi Zelandiya",
      "Isroil, Avstraliya, Yangi Zelandiya",
      "Buyuk Britaniya, Isroil, Avstraliya"
    ],
    "correct": 0
  },
  {
    "q": "Murakkab tartibda o‘zgartiriladigan konstitutsiya nima deb ataladi?",
    "options": [
      "Qattiq konstitutsiya",
      "Yumshoq konstitutsiya",
      "Moslashuvchan konstitutsiya",
      "Oddiy konstitutsiya"
    ],
    "correct": 0
  },
  {
    "q": "AQSh Konstitutsiyasiga nechta tuzatish kiritilgan?",
    "options": [
      "27 ta",
      "26 ta",
      "28 ta",
      "25 ta"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaning qaysi qismida maqsadlar bayon qilinadi?",
    "options": [
      "Muqaddima (preambula)",
      "Asosiy qism",
      "Xulosa qismi",
      "Qo‘shimcha qism"
    ],
    "correct": 0
  },
  {
    "q": "Ispaniya Konstitutsiyasining asosiy qismida avval boshida kim to‘g‘risidagi normalar berilgan?",
    "options": [
      "Shaxs va fuqarolar huquqlari",
      "Davlat hokimiyati tuzilishi",
      "Sud hokimiyati normalari",
      "Mahalliy hokimiyat normalari"
    ],
    "correct": 0
  },
  {
    "q": "Referendum orqali konstitutsiya qabul qilinadigan davlatlar qatorini toping?",
    "options": [
      "Fransiya, Italiya, Irlandiya, O‘zbekiston",
      "Fransiya, Italiya, Germaniya, O‘zbekiston",
      "Fransiya, Irlandiya, Kanada, O‘zbekiston",
      "Italiya, Irlandiya, Shveytsariya, O‘zbekiston"
    ],
    "correct": 0
  },
  {
    "q": "Mutlaq monarxiya sharoitida hadya qilingan konstitutsiyalarga qaysilar misol bo‘la oladi?",
    "options": [
      "Yaponiya (1889), Prussiya, Avstriya",
      "Yaponiya (1889), Germaniya, Avstriya",
      "Prussiya, Avstriya, Vengriya",
      "Yaponiya (1889), Prussiya, Vengriya"
    ],
    "correct": 0
  },
  {
    "q": "1990-yilda tuzilgan konstitutsiyaviy komissiyaga kim rahbarlik qilgan?",
    "options": [
      "Islom Karimov",
      "Shavkat Mirziyoyev",
      "Abdulaziz Kamilov",
      "Rustam Azimov"
    ],
    "correct": 0
  },
  {
    "q": "2003-yilda Oliy Majlis qanday ko‘rinishga keltirildi?",
    "options": [
      "Ikki palatali — Qonunchilik palatasi va Senat",
      "Bir palatali — Qonunchilik palatasi",
      "Ikki palatali — Senat va Mahalliy kengash",
      "Ikki palatali — Qonunchilik palatasi va Mahalliy kengash"
    ],
    "correct": 0
  },
  {
    "q": "Prezident vazifasini bajara olmaydigan holatda Senat Raisi vakolatni vaqtincha olishi qachon joriy etilgan?",
    "options": [
      "2003-yilgi o‘zgartirishlarda",
      "2005-yilgi o‘zgartirishlarda",
      "2000-yilgi o‘zgartirishlarda",
      "2010-yilgi o‘zgartirishlarda"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Konstitutsiyasining yangi tahriri nechta bo‘lim, bob va moddadan iborat?",
    "options": [
      "6 bo‘lim, 26 bob, 155 modda",
      "6 bo‘lim, 25 bob, 155 modda",
      "6 bo‘lim, 26 bob, 157 modda",
      "6 bo‘lim, 27 bob, 155 modda"
    ],
    "correct": 0
  }






      
   
    ]),
  },
  
// /////////////////////////////////////////////////////////////////////////////
 topic2: {
    title: "Konstitutsiya 2-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Huquqshunos olimlar inson erkinliklarining tarixiy rivojlanishini necha bosqichga ajratishadi?",
    "options": [
      "3 bosqichga",
      "2 bosqichga",
      "4 bosqichga",
      "5 bosqichga"
    ],
    "correct": 0
  },
  {
    "q": "Aholini rasmiy-huquqiy tarzda fuqaroga aylantirish yo‘llaridan biri qaysi?",
    "options": [
      "Naturalizatsiya",
      "Denaturalizatsiya",
      "Renunsiatsiya",
      "Assimilyatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Davlat hududida tug‘ilgan har qanday shaxsga fuqarolik berilishi qaysi tamoyil hisoblanadi?",
    "options": [
      "Tuproq tamoyili",
      "Qon tamoyili",
      "Naturalizatsiya tamoyili",
      "Denaturalizatsiya tamoyili"
    ],
    "correct": 0
  },
  {
    "q": "Ma’lum bir davlat fuqarosidan tug‘ilish yo‘li bilan fuqarolikni olish qaysi tamoyil deb ataladi?",
    "options": [
      "Qon tamoyili",
      "Tuproq tamoyili",
      "Naturalizatsiya tamoyili",
      "Renunsiatsiya tamoyili"
    ],
    "correct": 0
  },
  {
    "q": "Davlat organlari tomonidan murojaat qilgan shaxsga fuqarolikni berish qanday ataladi?",
    "options": [
      "Naturalizatsiya",
      "Denaturalizatsiya",
      "Renunsiatsiya",
      "Assimilyatsiya"
    ],
    "correct": 0
  },
  {
    "q": "O‘z xohishiga ko‘ra va qonun kuchi bilan amalga oshiriladigan holatlar qaysi usulga kiradi?",
    "options": [
      "Fuqarolikni yo‘qotish",
      "Fuqarolikni olish",
      "Fuqarolikni berish",
      "Fuqarolikni tiklash"
    ],
    "correct": 0
  },
  {
    "q": "Quvaytda fuqarolikni taqdim etishda qanday maxsus shart belgilangan?",
    "options": [
      "Islom diniga mansub bo‘lish",
      "Arab tilini bilish",
      "Mahalliy nasabga mansublik",
      "Davlat xizmatida ishlash"
    ],
    "correct": 0
  },
  {
    "q": "Shaxsning o‘z xohishiga ko‘ra fuqarolikdan chiqishi nima deb ataladi?",
    "options": [
      "Renunsiatsiya",
      "Denaturalizatsiya",
      "Naturalizatsiya",
      "Assimilyatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Davlat tomonidan tug‘ilish bo‘yicha ega bo‘lgan fuqarolikdan majburiy chiqarish nima deb nomlanadi?",
    "options": [
      "Denaturalizatsiya",
      "Renunsiatsiya",
      "Naturalizatsiya",
      "Assimilyatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Naturalizatsiya tartibida fuqarolikni olgan shaxslarni majburiy chiqarish qanday ataladi?",
    "options": [
      "Denaturalizatsiya",
      "Renunsiatsiya",
      "Naturalizatsiya",
      "Assimilyatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy boshpana va qochoq maqomini berish tartibi qaysi xalqaro hujjatda mustahkamlangan?",
    "options": [
      "1951-yilgi Konventsiya va 1954-yilgi Protokol",
      "1948-yilgi Inson huquqlari Deklaratsiyasi",
      "1966-yilgi Fuqarolik huquqlari Pakti",
      "1969-yilgi Afrika Konventsiyasi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Konstitutsiyasida qaysi jazo turi taqiqlangan?",
    "options": [
      "O‘lim jazosi",
      "Umrbod qamoq",
      "Jarima jazosi",
      "Majburiy mehnat"
    ],
    "correct": 0
  },
  {
    "q": "Yaponiya va Belorussiya Konstitutsiyasiga ko‘ra, jinoyat joyida qo‘lga olingan shaxs necha soat ichida sudga olib borilishi kerak?",
    "options": [
      "48 soat",
      "24 soat",
      "72 soat",
      "36 soat"
    ],
    "correct": 0
  },
  {
    "q": "Davlat ishlarida ishtirok etish huquqlari odatda kimlarga taqdim etiladi?",
    "options": [
      "Faqat fuqarolarga",
      "Har bir shaxsga",
      "Faqat saylovchilarga",
      "Faqat rezidentlarga"
    ],
    "correct": 0
  },
  {
    "q": "Saylanish huquqi fanda qanday nomlanadi?",
    "options": [
      "Passiv saylov huquqi",
      "Aktiv saylov huquqi",
      "Umumiy saylov huquqi",
      "Maxsus saylov huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Davlat organlariga yozma murojaat qilish huquqi nima deb ataladi?",
    "options": [
      "Ariza (petitsiya) huquqi",
      "Shikoyat huquqi",
      "Talab huquqi",
      "Da’vo huquqi"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Konstitutsiyasining 70-moddasiga ko‘ra, jamoat birlashmalarini tarqatish faqat qaysi organning qarori bilan amalga oshiriladi?",
    "options": [
      "Sud organi",
      "Prokuratura",
      "Parlament",
      "Ichki ishlar vazirligi"
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy-huquqiy davlat formulasi ilk bor qaysi Konstitutsiyada paydo bo‘ldi?",
    "options": [
      "Germaniya (1949)",
      "Fransiya (1958)",
      "Italiya (1947)",
      "Ispaniya (1978)"
    ],
    "correct": 0
  },
  {
    "q": "Peru Konstitutsiyasida inson huquqlarini himoya qilish vositasi sifatida mustahkamlangan institut qanday ataladi?",
    "options": [
      "Amparo",
      "Habeas corpus",
      "Petitsiya",
      "Mandamus"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Konstitutsiyasining 19-moddasiga ko‘ra, inson huquq va erkinliklari qachondan tegishli bo‘ladi?",
    "options": [
      "Tug‘ilgan paytdan",
      "Voyaga yetgandan",
      "Fuqarolik olgandan",
      "Ro‘yxatga olingandan"
    ],
    "correct": 0
  }


      ,
  {
    "q": "O'zbekiston Respublikasi BMTning nechta asosiy shartnomasi va protokoliga qo'shilgan?",
    "options": [
      "70 dan ortiq (7 ta asosiy)",
      "60 dan ortiq (6 ta asosiy)",
      "80 dan ortiq (8 ta asosiy)",
      "50 dan ortiq (5 ta asosiy)"
    ],
    "correct": 0
  },
  {
    "q": "1776-yil 4-iyulda qabul qilingan qaysi hujjatda 'Barcha odamlar teng holatda Yaratgan tomonidan muayyan ajralmas huquq bilan dunyoga keladi' deb ta'kidlangan?",
    "options": [
      "AQSh Mustaqillik Deklaratsiyasi",
      "AQSh Konstitutsiyasi",
      "Inson huquqlari Deklaratsiyasi",
      "Bill of Rights"
    ],
    "correct": 0
  },
  {
    "q": "Shaxsning muayyan davlatga mansubligini anglatuvchi huquq qanday nomlanadi?",
    "options": [
      "Fuqarolik huquqi",
      "Subyektiv huquq",
      "Tuproq huquqi",
      "Qon huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasi qachon qabul qilingan?",
    "options": [
      "1948-yil 10-dekabr",
      "1945-yil 26-iyun",
      "1951-yil 14-dekabr",
      "1949-yil 23-oktabr"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasi nechta moddadan iborat?",
    "options": [
      "30 modda",
      "25 modda",
      "35 modda",
      "28 modda"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi tashkilot 1966-yilda xalqaro paktlarni qabul qildi?",
    "options": [
      "BMT Bosh Assambleyasi",
      "BMT Xavfsizlik Kengashi",
      "Yevropa Ittifoqi",
      "YUNESKO"
    ],
    "correct": 0
  },
  {
    "q": "Davlatning o‘z fuqarosi bilan munosabatidan kelib chiqadigan huquq nima deb ataladi?",
    "options": [
      "Subyektiv huquq",
      "Fuqarolik huquqi",
      "Tuproq huquqi",
      "Qon huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Mehnat qilish, ijtimoiy ta’minot huquqi ilk bor qaysi konstitutsiyalarda mustahkamlandi?",
    "options": [
      "1917 Meksika va 1919 Veymar",
      "1919 Veymar va 1920 Avstriya",
      "1917 Meksika va 1920 Chexoslovakiya",
      "1919 Veymar va 1921 Shveytsariya"
    ],
    "correct": 0
  },
  {
    "q": "Inson huquqlari umumjahon deklaratsiyasining qaysi moddasida cheklash qoidalari belgilangan?",
    "options": [
      "29-modda",
      "28-modda",
      "30-modda",
      "27-modda"
    ],
    "correct": 0
  },
  {
    "q": "Huquq va erkinliklarning cheklanishining asosiy maqsadi nima?",
    "options": [
      "Jamiyat manfaatlari va xavfsizlik",
      "Davlat hokimiyatini mustahkamlash",
      "Iqtisodiy barqarorlikni ta’minlash",
      "Sud hokimiyatini kuchaytirish"
    ],
    "correct": 0
  },
  {
    "q": "Kafolatlarni qanday turlarga ajratish mumkin?",
    "options": [
      "Umumiy va maxsus",
      "Huquqiy va siyosiy",
      "Iqtisodiy va ijtimoiy",
      "Normativ va moddiy"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekiston Konstitutsiyasida shaxs sud qarorisiz qancha muddat ushlab turilishi mumkin emas?",
    "options": [
      "48 soat",
      "24 soat",
      "72 soat",
      "36 soat"
    ],
    "correct": 0
  },
  {
    "q": "Ayblanuvchilarga o‘ziga qarshi ko‘rsatma bermaslik huquqi qanday nomlanadi?",
    "options": [
      "Jimlik huquqi",
      "So‘z erkinligi",
      "Himoya huquqi",
      "Talab huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Quyidagilardan qaysi biri iqtisodiy kafolatlarga kiradi?",
    "options": [
      "Mulk daxlsizligi va tadbirkorlik erkinligi",
      "Saylov huquqi va siyosiy erkinlik",
      "Sud mustaqilligi va himoya huquqi",
      "Ta’lim olish va sog‘liqni saqlash"
    ],
    "correct": 0
  },
  {
    "q": "“Partiya” so‘zi lotincha “partio” so‘zidan olingan bo‘lib, qanday ma’noni anglatadi?",
    "options": [
      "Bo‘lish, qism, ulush",
      "Birlik, hamjihatlik",
      "Davlat, hokimiyat",
      "Huquq, tartib"
    ],
    "correct": 0
  },
  {
    "q": "1854-yilda AQShda tuzilgan partiya qaysi?",
    "options": [
      "Respublikachilar partiyasi",
      "Demokratlar partiyasi",
      "Federalistlar partiyasi",
      "Whig partiyasi"
    ],
    "correct": 0
  },
  {
    "q": "1861-yilda tashkil topgan Yevropadagi birinchi ommaviy partiya qaysi edi?",
    "options": [
      "Italiya Milliy Uyushma",
      "Fransiya Milliy Partiyasi",
      "Germaniya Ishchilar Partiyasi",
      "Avstriya Liberal Partiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Moris Dyuverje fikricha, siyosiy partiyalar qanday shaklda paydo bo‘lgan?",
    "options": [
      "Parlament ichida va tashqarisida",
      "Faqat parlament ichida",
      "Faqat parlament tashqarisida",
      "Sud va parlamentda"
    ],
    "correct": 0
  },
  {
    "q": "1863-yilda Germaniyada F. Lassal tomonidan tashkil etilgan ishchilar partiyasi qanday nomlangan?",
    "options": [
      "Umumgerman ishchilar uyushmasi",
      "Germaniya sotsial-demokratlar partiyasi",
      "Umumgerman liberal partiyasi",
      "Germaniya milliy uyushmasi"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy partiyalarning konstitutsiyaviy institutga aylanish jarayoni nima deb ataladi?",
    "options": [
      "Konstitutsiyalashuv",
      "Demokratlashuv",
      "Liberalizatsiya",
      "Modernizatsiya"
    ],
    "correct": 0
  }

    ]),
  },


/////////////////////////////////////////////////////
 topic3: {
    title: "Konstitutsiya 3-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Qaysi mamlakat qonunchiligida 'siyosiy partiya' atamasi uchramaydi va ularning faoliyati odat normalari asosida belgilanadi?",
    "options": [
      "Buyuk Britaniya",
      "AQSh",
      "Fransiya",
      "Germaniya"
    ],
    "correct": 0
  },
  {
    "q": "M. Dyuverje partiyalar a’zolarining tarkibi va miqdori bo‘yicha ularni qanday guruhlarga bo‘lgan?",
    "options": [
      "Kadrli va ommaviy",
      "Elita va xalq",
      "Markaziy va periferik",
      "O‘ng va so‘l"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy partiyalarni g‘oyaviy qarashlari bo‘yicha qanday guruhlarga ajratish keng qo‘llanadi?",
    "options": [
      "O‘ng, markaz, so‘l",
      "Elita, ommaviy, xalq",
      "Kadrli, ommaviy, konfessional",
      "Liberal, konservativ, sotsialistik"
    ],
    "correct": 0
  },
  {
    "q": "Bozor munosabatlariga asoslangan iqtisodiyotni shakllantirish g‘oyasini ilgari suruvchi partiyalar qaysilar?",
    "options": [
      "Liberal partiyalar",
      "Konservativ partiyalar",
      "Sotsialistik partiyalar",
      "Kommunistik partiyalar"
    ],
    "correct": 0
  },
  {
    "q": "Noqonuniy vositalar bilan hokimiyatga erishishga moyil partiyalar qanday nomlanadi?",
    "options": [
      "Antikonstitusional partiyalar",
      "Muxolifat partiyalar",
      "Liberal partiyalar",
      "Konfessional partiyalar"
    ],
    "correct": 0
  },
  {
    "q": "Hukmron partiyaga qarshi chiquvchi partiyalar qanday ataladi?",
    "options": [
      "Muxolifat partiyalari",
      "Antikonstitusional partiyalari",
      "Konfessional partiyalari",
      "Liberal partiyalari"
    ],
    "correct": 0
  },
  {
    "q": "So‘l qanot tarkibiga kiruvchi partiyalar qaysilar?",
    "options": [
      "Kommunistik, sotsialistik, sotsial-demokratik",
      "Liberal, konservativ, konfessional",
      "Elita, ommaviy, kadrli",
      "Markaziy, periferik, konfessional"
    ],
    "correct": 0
  },
  {
    "q": "Davlatni cherkovga bo‘ysundirishga urinuvchi partiyalar qanday nomlanadi?",
    "options": [
      "Klerikal partiyalar",
      "Konfessional partiyalar",
      "Liberal partiyalar",
      "Muxolifat partiyalar"
    ],
    "correct": 0
  },
  {
    "q": "Ispaniya, Italiya va Fransiyada partiyalarni ro‘yxatdan o‘tkazishni qaysi organ amalga oshiradi?",
    "options": [
      "Sud organlari",
      "Parlament",
      "Ichki ishlar vazirligi",
      "Adliya vazirligi"
    ],
    "correct": 0
  },
  {
    "q": "Ikki partiyaviylik tizimining klassik misoli qaysi davlatlar?",
    "options": [
      "AQSh va Buyuk Britaniya",
      "Fransiya va Germaniya",
      "Italiya va Ispaniya",
      "Kanada va Avstraliya"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davlat Konstitutsiyasida kommunistik partiya jamiyatning oliy rahbar kuchi deb e’lon qilingan?",
    "options": [
      "Xitoy",
      "Kuba",
      "KXDR",
      "Vetnam"
    ],
    "correct": 0
  },
  {
    "q": "Angliyada 'davlat' atamasi qanday ifodalanadi?",
    "options": [
      "State yoki Crown",
      "Government yoki Parliament",
      "Nation yoki People",
      "Authority yoki Power"
    ],
    "correct": 0
  },
  {
    "q": "Markscha-lenincha an’anaga ko‘ra, davlat qanday tavsiflangan?",
    "options": [
      "Bir sinfning boshqa sinfni bostirish quroli",
      "Jamiyatni boshqaruvchi institut",
      "Huquqiy tartibni ta’minlovchi organ",
      "Iqtisodiy tizimni boshqaruvchi kuch"
    ],
    "correct": 0
  },
  {
    "q": "Davlatning siyosiy funksiyasi nimalarda namoyon bo‘ladi?",
    "options": [
      "Hokimiyatni amalga oshirish va tartibni ta’minlash",
      "Iqtisodiy barqarorlikni ta’minlash",
      "Ta’lim va sog‘liqni saqlashni rivojlantirish",
      "Madaniyatni rivojlantirish"
    ],
    "correct": 0
  },
  {
    "q": "Xo‘jalik subyektlariga tashqi bozorda qulay sharoit yaratish davlatning qaysi funksiyasiga kiradi?",
    "options": [
      "Iqtisodiy funksiyaga",
      "Siyosiy funksiyaga",
      "Ijtimoiy funksiyaga",
      "Mafkuraviy funksiyaga"
    ],
    "correct": 0
  },
  {
    "q": "Ta’lim, sog‘liqni saqlash, ijtimoiy himoya kabi sohalarni rivojlantirish davlatning qaysi funksiyasini anglatadi?",
    "options": [
      "Ijtimoiy funksiyani",
      "Iqtisodiy funksiyani",
      "Siyosiy funksiyani",
      "Mafkuraviy funksiyani"
    ],
    "correct": 0
  },
  {
    "q": "Davlatning mafkuraviy funksiyasining maqsadi nima?",
    "options": [
      "Jamiyatda g‘oyalar va qadriyatlarni shakllantirish",
      "Iqtisodiy barqarorlikni ta’minlash",
      "Sud hokimiyatini mustahkamlash",
      "Davlat hokimiyatini kuchaytirish"
    ],
    "correct": 0
  },
  {
    "q": "Vakillik va bevosita demokratiyani ta’minlovchi davlat qanday hisoblanadi?",
    "options": [
      "Demokratik davlat",
      "Huquqiy davlat",
      "Ijtimoiy davlat",
      "Konstitutsiyaviy davlat"
    ],
    "correct": 0
  },
  {
    "q": "Bevosita demokratiya asosan qanday shakllarda amalga oshiriladi?",
    "options": [
      "Referendum, tashabbus, muhokama",
      "Saylov, referendum, tashabbus",
      "Plebissit, saylov, tashabbus",
      "Referendum, saylov, plebissit"
    ],
    "correct": 0
  },
  {
    "q": "Qonun ustuvorligini tan oladigan davlat qanday ataladi?",
    "options": [
      "Huquqiy davlat",
      "Demokratik davlat",
      "Ijtimoiy davlat",
      "Konstitutsiyaviy davlat"
    ],
    "correct": 0
  }
,
  {
    "q": "Huquqiy davlatda har qanday shaxs o‘zining buzilgan huquqlarini qayerda mustaqil himoya qila oladi?",
    "options": [
      "Sudda",
      "Prokuraturada",
      "Parlamentda",
      "Ichki ishlar organida"
    ],
    "correct": 0
  },
  {
    "q": "Dinning davlatdan ajralishi va diniy tashkilotlar faoliyatining chegaralanganligini bildiruvchi davlat qanday davlatdir?",
    "options": [
      "Dunyoviy davlat",
      "Teokratik davlat",
      "Ijtimoiy davlat",
      "Huquqiy davlat"
    ],
    "correct": 0
  },
  {
    "q": "Vatikan va Saudiya Arabistoni qanday davlatlar turiga kiradi?",
    "options": [
      "Teokratik davlatlar",
      "Dunyoviy davlatlar",
      "Ijtimoiy davlatlar",
      "Huquqiy davlatlar"
    ],
    "correct": 0
  },
  {
    "q": "Mulksizlar, nogironlar, qariyalar va bolalarga g‘amxo‘rlik ko‘rsatadigan davlat qanday hisoblanadi?",
    "options": [
      "Ijtimoiy davlat",
      "Huquqiy davlat",
      "Dunyoviy davlat",
      "Teokratik davlat"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy plyuralizm prinsipi nimani anglatadi?",
    "options": [
      "Ko‘p partiyaviylik va erkin raqobat",
      "Davlat hokimiyatining bo‘linishi",
      "Fuqarolik tengligi",
      "Hududiy yaxlitlik"
    ],
    "correct": 0
  },
  {
    "q": "Mamlakat hududining bo‘linmasligi qaysi konstitutsiyaviy prinsip hisoblanadi?",
    "options": [
      "Hududiy yaxlitlik",
      "Davlat suvereniteti",
      "Demokratik prinsip",
      "Huquqiy prinsip"
    ],
    "correct": 0
  },
  {
    "q": "Hokimiyatni uch tarmoqqa bo‘lish g‘oyasi kim tomonidan ilgari surilgan?",
    "options": [
      "Monteskye",
      "Rousseau",
      "Lokk",
      "Arastu"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyatni boshqarish tuzilmasi umumiylikda nima deb ataladi?",
    "options": [
      "Davlat mexanizmi",
      "Davlat rejimi",
      "Davlat shakli",
      "Davlat funksiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Davlat ahamiyatiga molik qarorlar qabul qiladigan tizim nima deb ataladi?",
    "options": [
      "Davlat boshqaruvi",
      "Davlat mexanizmi",
      "Davlat shakli",
      "Davlat rejimi"
    ],
    "correct": 0
  },
  {
    "q": "Umummajburiy qoidalar qabul qiladigan shaxslar guruhi nima deb ataladi?",
    "options": [
      "Davlat organi",
      "Davlat muassasasi",
      "Davlat mexanizmi",
      "Davlat rejimi"
    ],
    "correct": 0
  },
  {
    "q": "Umummajburiy qoidalar qabul qilmaydigan, qarorlarni amalga oshiradigan tuzilma qanday nomlanadi?",
    "options": [
      "Davlat muassasasi",
      "Davlat organi",
      "Davlat mexanizmi",
      "Davlat rejimi"
    ],
    "correct": 0
  },
  {
    "q": "Davlat shakli qanday tarkibiy qismlarni o‘z ichiga oladi?",
    "options": [
      "Boshqaruv, hududiy tuzilish, rejim",
      "Hududiy tuzilish, mexanizm, rejim",
      "Boshqaruv, mexanizm, rejim",
      "Hududiy tuzilish, boshqaruv, mexanizm"
    ],
    "correct": 0
  },
  {
    "q": "Polikratik davlat shaklining asosiy belgisi nima?",
    "options": [
      "Hokimiyat bir necha markazlar o‘rtasida taqsimlangan",
      "Hokimiyat bir markazda jamlangan",
      "Hokimiyat sud organida jamlangan",
      "Hokimiyat parlamentda jamlangan"
    ],
    "correct": 0
  },
  {
    "q": "Monikratik davlat shaklida hokimiyat qanday amalga oshiriladi?",
    "options": [
      "Tiyib turish mexanizmisiz",
      "Muvozanat mexanizmi bilan",
      "Sud hokimiyati orqali",
      "Parlament orqali"
    ],
    "correct": 0
  },
  {
    "q": "Davlat boshqaruv shakli deganda nima tushuniladi?",
    "options": [
      "Oliy organlarni tashkil etish tartibi",
      "Hududiy tuzilish tartibi",
      "Davlat rejimi",
      "Davlat mexanizmi"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi boshqaruv shaklida hukmdor lavozimi nasldan naslga o‘tadi?",
    "options": [
      "Monarxiya",
      "Respublika",
      "Demokratiya",
      "Teokratiya"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi monarxiyada hukmdor besh yil muddatga saylanadi?",
    "options": [
      "Malayziya",
      "Saudiya Arabistoni",
      "Buyuk Britaniya",
      "Ispaniya"
    ],
    "correct": 0
  },
  {
    "q": "Mutlaq monarxiyada hokimiyat qanday amalga oshiriladi?",
    "options": [
      "Cheklanmagan monarx tomonidan",
      "Parlament tomonidan",
      "Sud hokimiyati tomonidan",
      "Xalq tomonidan"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi davrda mutlaq monarxiya saqlanib qolgan davlatlarni belgilang.",
    "options": [
      "Saudiya Arabistoni, BAA, Quvayt, Ummon, Bruney, Qatar",
      "Buyuk Britaniya, Ispaniya, Shvetsiya",
      "Fransiya, Germaniya, Italiya",
      "Turkiya, Eron, Misr"
    ],
    "correct": 0
  },
  {
    "q": "Konstitutsiyaviy monarxiya boshqaruv shakli qanday turlarga bo‘linadi?",
    "options": [
      "Dualistik va parlamentar",
      "Mutlaq va cheklangan",
      "Respublika va monarxiya",
      "Federal va unitar"
    ],
    "correct": 0
  }

      
    ]),
  },

// /////////////////////////////////////////////////////
//  topic3: {
//     title: "Konstitutsiya 3-Bo'lim",
//     questions: randomizeQuestions([


//     ]),
//   },

// /////////////////////////////////////////////////////
//  topic3: {
//     title: "Konstitutsiya 3-Bo'lim",
//     questions: randomizeQuestions([


//     ]),
//   },




}