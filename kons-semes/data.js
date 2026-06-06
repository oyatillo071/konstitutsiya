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
      "6 bo‘lim, 27 bob, 155 modda",
      "6 bo‘lim, 26 bob, 155 modda",
      "5 bo‘lim, 26 bob, 157 modda",
      "7 bo‘lim, 27 bob, 155 modda"
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

//////////////////////////////////////////////////////////////////
 topic4: {
    title: "Konstitutsiya 4-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Dualistik monarxiyada qonunchilik hokimiyati kimga tegishli bo‘ladi?",
    "options": [
      "Parlament va monarx",
      "Faqat parlament",
      "Faqat monarx",
      "Sud va parlament"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi vaqtda qaysi davlatlarda dualistik monarxiya saqlanib qolgan?",
    "options": [
      "Iordaniya, Marokash, Quvayt",
      "Saudiya Arabistoni, BAA, Quvayt",
      "Buyuk Britaniya, Ispaniya, Shvetsiya",
      "Tailand, Nepal, Bhutan"
    ],
    "correct": 0
  },
  {
    "q": "Teokratik monarxiyada jamiyat hayoti qanday tartibga solinadi?",
    "options": [
      "Din qoidalari bilan",
      "Parlament qarorlari bilan",
      "Sud qarorlari bilan",
      "Xalq qarorlari bilan"
    ],
    "correct": 0
  },
  {
    "q": "Lotincha 'respublika' so‘zi qanday ma’noni anglatadi?",
    "options": [
      "Umumiy ish, xalq mulki",
      "Davlat hokimiyati",
      "Huquqiy tartib",
      "Xalq vakilligi"
    ],
    "correct": 0
  },
  {
    "q": "Qonunlar referendum orqali qabul qilinadigan boshqaruv shakli qanday ataladi?",
    "options": [
      "Bevosita demokratiya respublikasi",
      "Parlamentar respublika",
      "Prezidentlik respublikasi",
      "Sotsialistik respublika"
    ],
    "correct": 0
  },
  {
    "q": "Prezident saylovi xalq tomonidan parlamentdan xoli ravishda o‘tkaziladigan boshqaruv shakli qaysi?",
    "options": [
      "Prezidentlik respublikasi",
      "Parlamentar respublika",
      "Dualistik monarxiya",
      "Konstitutsiyaviy monarxiya"
    ],
    "correct": 0
  },
  {
    "q": "AQShda prezident saylovi qanday usulda amalga oshiriladi?",
    "options": [
      "Elektorlar kollegiyasi orqali",
      "To‘g‘ridan-to‘g‘ri xalq ovozi bilan",
      "Parlament ovozi bilan",
      "Sud qarori bilan"
    ],
    "correct": 0
  },
  {
    "q": "Parlamentar respublikaning asosiy belgisi nima?",
    "options": [
      "Hukumat parlamentga javobgar",
      "Prezident parlamentga javobgar",
      "Sud parlamentga javobgar",
      "Monarx parlamentga javobgar"
    ],
    "correct": 0
  },
  {
    "q": "Sotsialistik respublikaga xos bo‘lgan umumiy xususiyat nima?",
    "options": [
      "Hokimiyat xalq deputatlari sovetlarida to‘plangan",
      "Hokimiyat parlamentda to‘plangan",
      "Hokimiyat prezidentda to‘plangan",
      "Hokimiyat sudda to‘plangan"
    ],
    "correct": 0
  },
  {
    "q": "Teokratiya so‘zi qanday ma’noni anglatadi?",
    "options": [
      "Xudo hokimiyati",
      "Xalq hokimiyati",
      "Davlat hokimiyati",
      "Huquq hokimiyati"
    ],
    "correct": 0
  },
  {
    "q": "Vatikanda Rim papasini kimlar saylaydi?",
    "options": [
      "Kardinallar kollegiyasi",
      "Parlament",
      "Sud organlari",
      "Xalq ovozi"
    ],
    "correct": 0
  },
  {
    "q": "Davlat hududiy tuzilishining uchta asosiy shakli qaysilar?",
    "options": [
      "Unitar, federatsiya, konfederatsiya",
      "Unitar, monarxiya, respublika",
      "Federatsiya, respublika, konfederatsiya",
      "Unitar, federatsiya, demokratiya"
    ],
    "correct": 0
  },
  {
    "q": "Konfederatsiya organlari qarorlari qanday tartibda kuchga kiradi?",
    "options": [
      "A’zo davlatlar ratifikatsiyasidan so‘ng",
      "Darhol kuchga kiradi",
      "Parlament tasdiqlaganidan so‘ng",
      "Sud qaroridan so‘ng"
    ],
    "correct": 0
  },
  {
    "q": "Shveytsariya konfederatsiya deb atalsa-da, aslida qanday tuzilishga ega?",
    "options": [
      "Federatsiya",
      "Unitar davlat",
      "Konfederatsiya",
      "Respublika"
    ],
    "correct": 0
  },
  {
    "q": "Lotincha 'unitas' so‘zi qanday ma’noni anglatadi?",
    "options": [
      "Birlik, yaxlitlik",
      "Davlat, hokimiyat",
      "Huquq, tartib",
      "Xalq, vakillik"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi kunda dunyodagi unitar davlatlar soni taxminan nechta?",
    "options": [
      "150 dan ortiq",
      "100 dan ortiq",
      "200 dan ortiq",
      "120 dan ortiq"
    ],
    "correct": 0
  },
  {
    "q": "Faqat ma’muriy-hududiy bo‘linish mavjud bo‘lgan davlat turi qanday nomlanadi?",
    "options": [
      "Oddiy unitar davlat",
      "Desentralizatsiyalangan unitar davlat",
      "Federatsiya",
      "Konfederatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Mahalliy boshqaruvni saylab qo‘yiladigan organlar amalga oshiradigan davlatlarga qanday nom beriladi?",
    "options": [
      "Desentralizatsiyalangan unitar davlat",
      "Oddiy unitar davlat",
      "Federatsiya",
      "Konfederatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Yunoncha 'avtonomiya' so‘zi qanday ma’noni anglatadi?",
    "options": [
      "O‘zini o‘zi boshqarish",
      "Davlat hokimiyati",
      "Huquqiy tartib",
      "Xalq vakilligi"
    ],
    "correct": 0
  },
  {
    "q": "Avtonomiyaning qanday uchta xususiyati qo‘llaniladi?",
    "options": [
      "Hududiy, madaniy, korporativ",
      "Hududiy, siyosiy, iqtisodiy",
      "Madaniy, huquqiy, iqtisodiy",
      "Hududiy, diniy, siyosiy"
    ],
    "correct": 0
  }
,
  {
    "q": "O‘z parlamentiga, hukumatiga, mahalliy qonunchiligiga va davlat ramzlariga ega bo‘lgan avtonomiya qanday nomlanadi?",
    "options": [
      "Siyosiy avtonomiya",
      "Hududiy avtonomiya",
      "Madaniy avtonomiya",
      "Korporativ avtonomiya"
    ],
    "correct": 0
  },
  {
    "q": "Eng ko‘p siyosiy avtonomiyalar qaysi davlatlarda uchraydi?",
    "options": [
      "Ispaniya, Italiya, Buyuk Britaniya, Finlandiya",
      "Fransiya, Germaniya, Shvetsiya, Norvegiya",
      "Rossiya, Xitoy, Hindiston, Braziliya",
      "AQSh, Kanada, Avstraliya, Meksika"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi kunda dunyoda nechta federal davlat mavjud?",
    "options": [
      "25–28 ta",
      "20–22 ta",
      "30–32 ta",
      "15–18 ta"
    ],
    "correct": 0
  },
  {
    "q": "Mustaqil davlatlar shartnoma asosida tuzgan ittifoq davlati qanday ataladi?",
    "options": [
      "Shartnomaviy federatsiya",
      "Simmetrik federatsiya",
      "Konfederatsiya",
      "Oddiy federatsiya"
    ],
    "correct": 2
  },
  {
    "q": "Faqat bir tartibli subyektlar kiradigan federatsiya qanday nomlanadi?",
    "options": [
      "Simmetrik federatsiya",
      "Asimmetrik federatsiya",
      "Shartnomaviy federatsiya",
      "Oddiy federatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Braziliya, Germaniya, Meksika, BAA federatsiyalari qanday asosda qurilgan?",
    "options": [
      "Hududiy asosda",
      "Etnik asosda",
      "Madaniy asosda",
      "Korporativ asosda"
    ],
    "correct": 0
  },
  {
    "q": "Rossiya Federatsiyasida nechta federal subyekt mavjud?",
    "options": [
      "89 ta",
      "85 ta",
      "90 ta",
      "92 ta"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi federal davlatda barcha shtatlar o‘z fuqaroligiga ega?",
    "options": [
      "AQSh",
      "Kanada",
      "Avstraliya",
      "Germaniya"
    ],
    "correct": 0
  },
  {
    "q": "Konfederatsiya a’zolari ittifoq aktini qabul qilmasligi huquqi nima deb nomlanadi?",
    "options": [
      "Nullifikatsiya",
      "Ratifikatsiya",
      "Setsessiya",
      "Deklaratsiya"
    ],
    "correct": 0
  },
  {
    "q": "Konfederatsiya federatsiyadan farq qilgan holda qanday xususiyatga ega?",
    "options": [
      "A’zo davlatlar mustaqilligini saqlaydi",
      "A’zo davlatlar mustaqilligini yo‘qotadi",
      "A’zo davlatlar federal hokimiyatga bo‘ysunadi",
      "A’zo davlatlar o‘z konstitutsiyasidan voz kechadi"
    ],
    "correct": 0
  },
  {
    "q": "Siyosiy rejimning asosiy ko‘rinishlari tor ma’noda qanday turlarga bo‘linadi?",
    "options": [
      "Demokratik, avtoritar, totalitar",
      "Demokratik, liberal, sotsialistik",
      "Avtoritar, liberal, konfessional",
      "Totalitar, liberal, sotsial-demokratik"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi nodemokratik rejim xomxayolga asoslangan g‘oyalar bilan bog‘liq?",
    "options": [
      "Totalitar rejim",
      "Avtoritar rejim",
      "Despotik rejim",
      "Liberal rejim"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi siyosiy rejimda obro‘ga tayanish asosiy hisoblanadi?",
    "options": [
      "Avtoritar rejim",
      "Totalitar rejim",
      "Demokratik rejim",
      "Liberal rejim"
    ],
    "correct": 0
  },
  {
    "q": "Avraam Linkoln demokratiyaga qanday ta’rif bergan?",
    "options": [
      "Xalqning, xalq tomonidan va xalq uchun boshqaruvi",
      "Xalqning hokimiyati",
      "Xalqning erkinligi",
      "Xalqning huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Demokratiya nechta asosiy turga bo‘linadi?",
    "options": [
      "2 ta: bevosita va vakillik",
      "3 ta: liberal, sotsial, xristian",
      "2 ta: avtoritar va totalitar",
      "4 ta: liberal, sotsial, konfessional, avtoritar"
    ],
    "correct": 0
  },
  {
    "q": "Hozirgi zamon jamiyatlarida asosan qaysi demokratiya shakli qo‘llanadi?",
    "options": [
      "Vakillik demokratiyasi",
      "Bevosita demokratiya",
      "Totalitar demokratiya",
      "Avtoritar demokratiya"
    ],
    "correct": 0
  },
  {
    "q": "Demokratik siyosiy rejimning qanday turlari ajratib ko‘rsatiladi?",
    "options": [
      "Liberal, sotsial, xristian demokratiya",
      "Avtoritar, totalitar, liberal demokratiya",
      "Sotsialistik, konfessional, liberal demokratiya",
      "Liberal, avtoritar, konfessional demokratiya"
    ],
    "correct": 0
  },
  {
    "q": "Liberalizm dastlab qachon va qanday ko‘rinishda paydo bo‘lgan?",
    "options": [
      "XVII–XVIII asrlarda Yevropada",
      "XVI asrda Fransiyada",
      "XIX asrda Germaniyada",
      "XV asrda Angliyada"
    ],
    "correct": 0
  },
  {
    "q": "Shaxsiy erkinliklarni oliy qadriyat sifatida belgilovchi rejim qanday ataladi?",
    "options": [
      "Liberal demokratik rejim",
      "Avtoritar rejim",
      "Totalitar rejim",
      "Sotsial demokratik rejim"
    ],
    "correct": 0
  },
  {
    "q": "Avtokratik rejim asosan qanday turlarga bo‘linadi?",
    "options": [
      "Despotizm, tiraniya, avtoritarizm, totalitarizm",
      "Demokratiya, liberalizm, sotsializm, konfessionalizm",
      "Monarxiya, respublika, federatsiya, konfederatsiya",
      "Hududiy, siyosiy, ijtimoiy, iqtisodiy"
    ],
    "correct": 0
  }


    ]),
  },

/////////////////////////////////////////////////////
 topic5: {
    title: "Konstitutsiya 5-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Hokimiyat faqat bir shaxs tomonidan amalga oshiriladigan mutlaq monarxiyaga xos rejim qaysi?",
    "options": [
      "Despotizm",
      "Tiraniya",
      "Totalitarizm",
      "Avtoritarizm"
    ],
    "correct": 0
  },
  {
    "q": "Mustabid hokimiyat odatda qanday o‘rnatiladi?",
    "options": [
      "Zo‘rlik va to‘ntarish orqali",
      "Sud qarori orqali",
      "Xalq ovozi orqali",
      "Parlament qarori orqali"
    ],
    "correct": 0
  },
  {
    "q": "Davlat jamiyatning barcha sohalariga aralashib, yagona partiya hukmronlik qiladigan rejim nima?",
    "options": [
      "Totalitar rejim",
      "Avtoritar rejim",
      "Despotik rejim",
      "Liberal rejim"
    ],
    "correct": 0
  },
  {
    "q": "Totalitar rejimning yorqin misoli sifatida qaysi davr ko‘rsatiladi?",
    "options": [
      "Gitler Germaniyasi va Stalin SSSR",
      "Mussolini Italiyasi",
      "Fransiya inqilobi davri",
      "Buyuk Britaniya monarxiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Nodemokratik rejimning eng reaksion ko‘rinishi va Ikkinchi jahon urushiga olib kelgan rejim qaysi?",
    "options": [
      "Fashizm",
      "Totalitarizm",
      "Avtoritarizm",
      "Despotizm"
    ],
    "correct": 0
  },
  {
    "q": "Fashistik rejim ilk bor qachon va qayerda o‘rnatilgan?",
    "options": [
      "1922-yil Italiyada",
      "1933-yil Germaniyada",
      "1917-yil Rossiyada",
      "1945-yil Yaponiyada"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi rejimda harbiylar hokimiyatni egallab, fuqarolik institutlari to‘xtatiladi?",
    "options": [
      "Harbiy diktatura",
      "Totalitar rejim",
      "Avtoritar rejim",
      "Despotik rejim"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davlatda real hokimiyat diniy ulamolar qo‘lida?",
    "options": [
      "Eron",
      "Saudiya Arabistoni",
      "Vatikan",
      "Afg‘oniston"
    ],
    "correct": 0
  },
  {
    "q": "Davlat rejimi qanday faoliyat tizimini ifodalaydi?",
    "options": [
      "Davlat organlari faoliyat usullari",
      "Jamiyat siyosiy munosabatlari",
      "Sud hokimiyati faoliyati",
      "Parlament faoliyati"
    ],
    "correct": 0
  },
  {
    "q": "Davlat rejimi siyosiy rejimdan qanday farq qiladi?",
    "options": [
      "Faqat davlat organlarini qamrab oladi",
      "Faqat jamiyatni qamrab oladi",
      "Faqat sud hokimiyatini qamrab oladi",
      "Faqat parlamentni qamrab oladi"
    ],
    "correct": 0
  },
  {
    "q": "Saylov tushunchasiga qanday ta’rif berilgan?",
    "options": [
      "Fuqarolar ovoz berib vakillarni tanlaydi",
      "Fuqarolar sud qarori bilan tanlanadi",
      "Fuqarolar parlament qarori bilan tanlanadi",
      "Fuqarolar hukumat qarori bilan tanlanadi"
    ],
    "correct": 0
  },
  {
    "q": "Ovoz berish usuliga ko‘ra saylovlar qanday turlarga bo‘linadi?",
    "options": [
      "To‘g‘ridan to‘g‘ri, bilvosita, yashirin/ochiq",
      "Majoritar, proporsional, aralash",
      "Parlamentar, prezidentlik, sotsialistik",
      "Oddiy, murakkab, aralash"
    ],
    "correct": 0
  },
  {
    "q": "AQSh Prezidenti qanday saylov orqali saylanadi?",
    "options": [
      "Bilvosita elektorlar kollegiyasi orqali",
      "To‘g‘ridan to‘g‘ri xalq ovozi bilan",
      "Parlament ovozi bilan",
      "Sud qarori bilan"
    ],
    "correct": 0
  },
  {
    "q": "AQSh prezidentligiga nomzod saylov kuni kamida necha yoshda bo‘lishi kerak?",
    "options": [
      "35 yosh",
      "30 yosh",
      "40 yosh",
      "25 yosh"
    ],
    "correct": 0
  },
  {
    "q": "Saylovchining xohish-irodasini nazorat qilishni cheklaydigan tamoyil qaysi?",
    "options": [
      "Yashirin ovoz berish",
      "Ochiq ovoz berish",
      "Bilvosita ovoz berish",
      "To‘g‘ridan to‘g‘ri ovoz berish"
    ],
    "correct": 0
  },
  {
    "q": "Saylov jarayonining birinchi bosqichi qanday nomlanadi?",
    "options": [
      "Nomzodlarni ko‘rsatish",
      "Ovoz berish",
      "Natijalarni e’lon qilish",
      "Mandatlarni taqsimlash"
    ],
    "correct": 0
  },
  {
    "q": "AQShda nomzodlarni ko‘rsatishning o‘ziga xos usuli qanday?",
    "options": [
      "Praymeriz",
      "Referendum",
      "Plebissit",
      "Delegatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Saylov tizimlarining eng keng tarqalgan turlari qaysilar?",
    "options": [
      "Majoritar, proporsional, aralash",
      "To‘g‘ridan to‘g‘ri, bilvosita, yashirin",
      "Parlamentar, prezidentlik, sotsialistik",
      "Oddiy, murakkab, aralash"
    ],
    "correct": 0
  },
  {
    "q": "Mutlaq ko‘pchilik ovoziga asoslangan majoritar tizimda g‘alaba uchun qancha ovoz kerak?",
    "options": [
      "50%+1 ovoz",
      "40%+1 ovoz",
      "60%+1 ovoz",
      "30%+1 ovoz"
    ],
    "correct": 0
  },
  {
    "q": "O‘zbekistonda siyosiy partiyalar uchun saylov bareri necha foiz qilib belgilangan?",
    "options": [
      "5 foiz",
      "7 foiz",
      "10 foiz",
      "3 foiz"
    ],
    "correct": 0
  }
,
  {
    "q": "Qaysi saylov tizimida saylovlar faqat ko‘p mandatli okruglarda o‘tkaziladi va yakka nomzodlar ishtirok eta olmaydi?",
    "options": [
      "Proporsional tizim",
      "Majoritar tizim",
      "Aralash tizim",
      "Bevosita tizim"
    ],
    "correct": 0
  },
  {
    "q": "Germaniya qaysi saylov tizimining yorqin namunasi hisoblanadi?",
    "options": [
      "Aralash tizim",
      "Proporsional tizim",
      "Majoritar tizim",
      "Bevosita tizim"
    ],
    "correct": 0
  },
  {
    "q": "Referendum so‘zi qanday ma’noni anglatadi?",
    "options": [
      "Maslahat so‘rash uchun qaytariladigan narsa",
      "Xalq ovozi",
      "Qonun chiqarish jarayoni",
      "Sud qarori"
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat va davlat hayotining eng muhim masalalariga doir referendum nima deb ataladi?",
    "options": [
      "Konstitusiyaviy referendum",
      "Ixtiyoriy referendum",
      "Konsultativ referendum",
      "Mahalliy referendum"
    ],
    "correct": 0
  },
  {
    "q": "Yuridik kuchiga ko‘ra referendumlar qanday turlarga bo‘linadi?",
    "options": [
      "Majburiy, ixtiyoriy, konsultativ",
      "Mahalliy, umumiy, maxsus",
      "Oddiy, murakkab, aralash",
      "Bevosita, bilvosita, aralash"
    ],
    "correct": 0
  },
  {
    "q": "O‘tkazish asoslariga ko‘ra referendumlar qanday farqlanadi?",
    "options": [
      "Majburiy, ixtiyoriy, tashabbuskor",
      "Mahalliy, umumiy, maxsus",
      "Oddiy, murakkab, aralash",
      "Bevosita, bilvosita, aralash"
    ],
    "correct": 0
  },
  {
    "q": "Italiya Konstitutsiyasiga ko‘ra, qonunni bekor qilish bo‘yicha referendum uchun qancha imzo kerak?",
    "options": [
      "500 000 imzo",
      "1 000 000 imzo",
      "250 000 imzo",
      "750 000 imzo"
    ],
    "correct": 0
  },
  {
    "q": "Referendumda masalani byulleteniga kiritish shakli nima deb ataladi?",
    "options": [
      "Formula",
      "Deklaratsiya",
      "Protokol",
      "Mandat"
    ],
    "correct": 0
  },
  {
    "q": "Ispaniyada muvaffaqiyatsiz referendumdan keyin ikkinchisi qancha vaqtdan so‘ng o‘tkazilishi mumkin?",
    "options": [
      "3 yil",
      "2 yil",
      "5 yil",
      "1 yil"
    ],
    "correct": 0
  },
  {
    "q": "Braziliyada xalq qonunchilik tashabbusi uchun qancha imzo kerak?",
    "options": [
      "1% saylovchi (1,5 mln)",
      "2% saylovchi",
      "0,5% saylovchi",
      "3% saylovchi"
    ],
    "correct": 0
  },
  {
    "q": "Favqulodda holatda Germaniyada mamlakatga kim rahbarlik qiladi?",
    "options": [
      "Federal Kansler",
      "Federal Prezident",
      "Parlament Raisi",
      "Konstitutsiya sudi"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davlatlarda davlat boshlig‘i kollegial tarzda amalga oshiriladi?",
    "options": [
      "Shveytsariya, BAA, San-Marino",
      "AQSh, Kanada, Avstraliya",
      "Rossiya, Xitoy, Hindiston",
      "Fransiya, Germaniya, Italiya"
    ],
    "correct": 0
  },
  {
    "q": "Yaponiya Konstitutsiyasida imperator qanday ta’riflangan?",
    "options": [
      "Davlat va xalq birligining ramzi",
      "Davlat hokimiyatining rahbari",
      "Huquqiy tartibning kafolati",
      "Xalq vakilligining ramzi"
    ],
    "correct": 0
  },
  {
    "q": "Ispaniya Konstitutsiyasiga ko‘ra kim davlat rahbari va ramzi hisoblanadi?",
    "options": [
      "Qirol",
      "Prezident",
      "Parlament Raisi",
      "Bosh vazir"
    ],
    "correct": 0
  },
  {
    "q": "Prezident atamasi ilk bor qachon va qaysi davlatda qo‘llanilgan?",
    "options": [
      "1787 AQShda",
      "1791 Fransiyada",
      "1848 Shveytsariyada",
      "1920 Avstriyada"
    ],
    "correct": 0
  },
  {
    "q": "BMTga a’zo 193 davlatning nechtasida prezidentlik instituti joriy qilingan?",
    "options": [
      "130 dan ortiq",
      "100 dan ortiq",
      "150 dan ortiq",
      "120 dan ortiq"
    ],
    "correct": 0
  },
  {
    "q": "Jahonda respublika boshqaruvining uchta asosiy modeli qaysilar?",
    "options": [
      "Prezidentlik, parlamentar, aralash",
      "Prezidentlik, sotsialistik, liberal",
      "Parlamentar, konfessional, aralash",
      "Prezidentlik, federal, unitar"
    ],
    "correct": 0
  },
  {
    "q": "Parlamentar respublikada prezident aktlari qonuniy kuchga ega bo‘lishi uchun kimning imzosi talab etiladi?",
    "options": [
      "Bosh vazir",
      "Parlament Raisi",
      "Sud Raisi",
      "Konstitutsiya sudi"
    ],
    "correct": 0
  },
  {
    "q": "Monarxiya so‘zi yunon tilidan olingan bo‘lib, qanday ma’noni anglatadi?",
    "options": [
      "Yagona hokimiyat",
      "Xalq hokimiyati",
      "Huquqiy tartib",
      "Davlat hokimiyati"
    ],
    "correct": 0
  },
  {
    "q": "Taxt vorisligining sali tizimiga ko‘ra taxt kimga qoldiriladi?",
    "options": [
      "Faqat erkak avlodga",
      "Ayol va erkak avlodga",
      "Faqat ayol avlodga",
      "Har qanday avlodga"
    ],
    "correct": 0
  }


    ]),
  },

// /////////////////////////////////////////////////////
 topic6: {
    title: "Konstitutsiya 6-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Kastiliya usulida taxt vorisligi qanday qoida asosida amalga oshiriladi?",
    "options": [
      "Farzandlar (jumladan qizlar), so‘ng aka-ukalar",
      "Faqat erkak avlodlar",
      "Faqat qiz avlodlar",
      "Faqat monarxning tanlovi"
    ],
    "correct": 0
  },
  {
    "q": "Rossiyada 1797–1917-yillarda mavjud bo‘lgan taxt vorisligi usuli qanday atalgan?",
    "options": [
      "Paulin tizimi",
      "Sali tizimi",
      "Kastiliya tizimi",
      "Designatsiya tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi usulda monarx o‘zi taxt vorisini belgilaydi?",
    "options": [
      "Designatsiya",
      "Sali tizimi",
      "Paulin tizimi",
      "Kastiliya tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Monarx voyaga yetmagan bo‘lsa, qanday tizim joriy etiladi?",
    "options": [
      "Regentlik",
      "Designatsiya",
      "Paulin tizimi",
      "Sali tizimi"
    ],
    "correct": 0
  },
  {
    "q": "Lotincha 'veto' so‘zi qanday ma’noni anglatadi?",
    "options": [
      "Men man qilaman",
      "Men tasdiqlayman",
      "Men qo‘llab-quvvatlayman",
      "Men rad etaman"
    ],
    "correct": 0
  },
  {
    "q": "Qonun veto qo‘yilgandan so‘ng qayta ko‘rib chiqilmaydigan veto turi qanday ataladi?",
    "options": [
      "Absolyut veto",
      "Nisbiy veto",
      "Muallaq veto",
      "Konsultativ veto"
    ],
    "correct": 0
  },
  {
    "q": "Parlament veto qo‘yilgan qonunni qayta qabul qilsa, bu qanday veto hisoblanadi?",
    "options": [
      "Nisbiy veto",
      "Absolyut veto",
      "Muallaq veto",
      "Konsultativ veto"
    ],
    "correct": 0
  },
  {
    "q": "AQShda prezident veto qo‘ygan qonun tasdiqlanishi uchun necha foiz ovoz talab qilinadi?",
    "options": [
      "2/3 ovoz",
      "1/2 ovoz",
      "3/4 ovoz",
      "1/3 ovoz"
    ],
    "correct": 0
  },
  {
    "q": "Zamonaviy parlament qaysi davlatda paydo bo‘lgan?",
    "options": [
      "Buyuk Britaniya",
      "Fransiya",
      "Germaniya",
      "Italiya"
    ],
    "correct": 0
  },
  {
    "q": "Parlamentarizm g‘oyalari kimlar tomonidan shakllantirilgan?",
    "options": [
      "Lokk va Monteskye",
      "Arastu va Platon",
      "Rousseau va Kant",
      "Bentham va Mill"
    ],
    "correct": 0
  },
  {
    "q": "Isroilda milliy parlament qanday nomlanadi?",
    "options": [
      "Knesset",
      "Senat",
      "Vakillar palatasi",
      "Asambleya"
    ],
    "correct": 0
  },
  {
    "q": "Parlamentlarning uchta asosiy funksiyasi nimalardan iborat?",
    "options": [
      "Qonunchilik, nazorat, byudjet",
      "Qonunchilik, ijro, sud",
      "Nazorat, ijro, sud",
      "Qonunchilik, ijro, nazorat"
    ],
    "correct": 0
  },
  {
    "q": "Mutlaq vakolatlarga ega parlament misoli sifatida qaysi davlat ko‘rsatiladi?",
    "options": [
      "Buyuk Britaniya",
      "Fransiya",
      "Germaniya",
      "AQSh"
    ],
    "correct": 0
  },
  {
    "q": "Fransiya Konstitutsiyasiga ko‘ra xalqaro shartnomalar qanday kuchga ega?",
    "options": [
      "Milliy qonunlardan yuqori",
      "Milliy qonunlarga teng",
      "Milliy qonunlardan past",
      "Faqat maslahat kuchiga ega"
    ],
    "correct": 0
  },
  {
    "q": "Bir palatali parlamentlar qanday ataladi?",
    "options": [
      "Unikameral",
      "Bikameral",
      "Federal",
      "Konfederal"
    ],
    "correct": 0
  },
  {
    "q": "Ikki palatali parlament tizimida hududlar manfaatlarini qaysi palata ifodalaydi?",
    "options": [
      "Yuqori palata",
      "Quyi palata",
      "Parlament raisi",
      "Sud palatasi"
    ],
    "correct": 0
  },
  {
    "q": "AQSh Kongressining quyi palatasi nima deb nomlanadi?",
    "options": [
      "Vakillar palatasi",
      "Senat",
      "Asambleya",
      "Knesset"
    ],
    "correct": 0
  },
  {
    "q": "Parlamentda siyosiy partiya a’zolarining uyushgan guruhi qanday ataladi?",
    "options": [
      "Fraksiya",
      "Koalitsiya",
      "Partiya",
      "Delegatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Yaponiyada parlament yuqori palatasining vakolati necha yil?",
    "options": [
      "6 yil",
      "4 yil",
      "5 yil",
      "3 yil"
    ],
    "correct": 0
  },
  {
    "q": "Buyuk Britaniya Lordlar palatasida perlar o‘z o‘rinlarini qanday asosda egallaydilar?",
    "options": [
      "Nasliy asosda",
      "Saylov asosida",
      "Tayinlash asosida",
      "Vakolat asosida"
    ],
    "correct": 0
  },

  {
    "q": "Shveytsariyada xalq qonunchilik tashabbusi uchun qancha imzo kerak?",
    "options": [
      "100 000 imzo",
      "50 000 imzo",
      "150 000 imzo",
      "200 000 imzo"
    ],
    "correct": 0
  },
  {
    "q": "Parlamentda qonun loyihasi odatda qancha o‘qishdan o‘tadi?",
    "options": [
      "3 o‘qish",
      "2 o‘qish",
      "4 o‘qish",
      "5 o‘qish"
    ],
    "correct": 0
  },
  {
    "q": "Qonun qabul qilingandan so‘ng rasman e’lon qilinishi nima deyiladi?",
    "options": [
      "Promulgatsiya",
      "Ratifikatsiya",
      "Deklaratsiya",
      "Tasdiqlash"
    ],
    "correct": 0
  },
  {
    "q": "Faqat parlamentar respublikalarda qo‘llanadigan tartib nima deyiladi?",
    "options": [
      "Interpellyatsiya",
      "Ratifikatsiya",
      "Deklaratsiya",
      "Promulgatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Saylovchilarning deputatlarni muddatidan oldin chaqirib olish huquqi qanday prinsip?",
    "options": [
      "Imperativ mandat",
      "Erkin mandat",
      "Delegatsiya",
      "Fraksiya"
    ],
    "correct": 0
  },
  {
    "q": "Parlament a’zolari butun xalq vakillari bo‘lishini belgilovchi prinsip nima?",
    "options": [
      "Erkin mandat",
      "Imperativ mandat",
      "Delegatsiya",
      "Fraksiya"
    ],
    "correct": 0
  },
  {
    "q": "Deputatning daxlsizlik huquqi qanday nomlanadi?",
    "options": [
      "Deputat immuniteti",
      "Deputat vakolati",
      "Deputat mandati",
      "Deputat huquqi"
    ],
    "correct": 0
  },
  {
    "q": "Italiyada ijro hokimiyatini amalga oshiruvchi hukumat qanday nomlanadi?",
    "options": [
      "Vazirlar Kengashi",
      "Senat",
      "Parlament",
      "Prezidentlik Kengashi"
    ],
    "correct": 0
  },
  {
    "q": "1748-yilda 'Qonunlar ruhi' asarini yozgan mutafakkir kim?",
    "options": [
      "Monteskye",
      "Lokk",
      "Rousseau",
      "Arastu"
    ],
    "correct": 0
  },
  {
    "q": "AQSh Konstitutsiyasiga ko‘ra ijro hokimiyat kim tomonidan amalga oshiriladi?",
    "options": [
      "Prezident",
      "Kongress",
      "Senat",
      "Vakillar palatasi"
    ],
    "correct": 0
  },
  {
    "q": "Buyuk Britaniya siyosiy hayotida 'Ichki Kabinet' nimani anglatadi?",
    "options": [
      "Bosh vazirning tor maslahat organi",
      "Parlamentning yuqori palatasi",
      "Sudning maxsus organi",
      "Qirolning maslahatchilari"
    ],
    "correct": 0
  },
  {
    "q": "Polsha Konstitutsiyasiga ko‘ra ichki va tashqi siyosatni kim amalga oshiradi?",
    "options": [
      "Vazirlar Kengashi",
      "Prezident",
      "Parlament",
      "Senat"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi davlatdan tashqari hukumatga qonunchilik tashabbusi berilgan?",
    "options": [
      "AQSh",
      "Fransiya",
      "Germaniya",
      "Italiya"
    ],
    "correct": 0
  },
  {
    "q": "AQShda hukumatning reglamentar aktlari qanday nomlanadi?",
    "options": [
      "Ijroiya buyruqlar",
      "Dekretlar",
      "Farmonlar",
      "Qonunlar"
    ],
    "correct": 0
  },
  {
    "q": "Hukumatni shakllantirishning 'parlamentar uslubi' qaysi boshqaruv shaklida qo‘llanadi?",
    "options": [
      "Parlamentar respublika va monarxiya",
      "Prezidentlik respublika",
      "Mutlaq monarxiya",
      "Teokratik davlat"
    ],
    "correct": 0
  },
  {
    "q": "Negativ parlamentarizm prinsipi qaysi davlatlarda amal qiladi?",
    "options": [
      "Shvetsiya, Daniya, Norvegiya",
      "Fransiya, Germaniya, Italiya",
      "AQSh, Kanada, Avstraliya",
      "Rossiya, Xitoy, Hindiston"
    ],
    "correct": 0
  },
  {
    "q": "Shveytsariyada Federal kengash kim tomonidan saylanadi?",
    "options": [
      "Federal Majlis",
      "Xalq ovozi",
      "Prezident",
      "Sud organi"
    ],
    "correct": 0
  },
  {
    "q": "AQShda prezident vazirlarni tayinlashi uchun kimning roziligi kerak?",
    "options": [
      "Senat",
      "Vakillar palatasi",
      "Kongress",
      "Sud"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi Konstitutsiyada Vazirlar Kengashi tarkibiga fransuz va niderland tilida vazirlar kiritilishi belgilangan?",
    "options": [
      "Belgiya Konstitutsiyasi",
      "Fransiya Konstitutsiyasi",
      "Germaniya Konstitutsiyasi",
      "Shveytsariya Konstitutsiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Bosh vazir lavozimi qachon va qayerda vujudga kelgan?",
    "options": [
      "XVII–XVIII asr Buyuk Britaniya",
      "XIX asr Germaniya",
      "XVIII asr Fransiya",
      "XIX asr AQSh"
    ],
    "correct": 0
  }

    ]),
  },
// /////////////////////////////////////////////////////
 topic7: {
    title: "Konstitutsiya 7-Bo'lim",
    questions: randomizeQuestions([

  {
    "q": "Germaniya Asosiy qonunining 65-moddasiga ko‘ra davlat siyosatini kim belgilaydi?",
    "options": [
      "Federal Kansler",
      "Federal Prezident",
      "Bundestag Raisi",
      "Konstitutsiya sudi"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi Konstitutsiya prezidentni faqat bir marta 6 yilga saylashni belgilaydi?",
    "options": [
      "Meksika Konstitutsiyasi",
      "AQSh Konstitutsiyasi",
      "Fransiya Konstitutsiyasi",
      "Rossiya Konstitutsiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Polsha Konstitutsiyasiga ko‘ra vazirlar kim oldida javobgarlikka tortiladi?",
    "options": [
      "Davlat Tribunali",
      "Oliy sud",
      "Konstitutsiya sudi",
      "Parlament"
    ],
    "correct": 0
  },
  {
    "q": "Shvetsiyada vazirlarni javobgarlikka tortuvchi organ qaysi?",
    "options": [
      "Konstitutsiyaviy qo‘mita",
      "Oliy sud",
      "Parlament",
      "Prokuratura"
    ],
    "correct": 0
  },
  {
    "q": "AQShda parlament qanday ataladi?",
    "options": [
      "Kongress",
      "Senat",
      "Vakillar palatasi",
      "Asambleya"
    ],
    "correct": 0
  },
  {
    "q": "Jon Lokk hokimiyat tarmoqlarini qanday atagan?",
    "options": [
      "Qonunchilik, ijro, federativ",
      "Qonunchilik, ijro, sud",
      "Ijro, sud, nazorat",
      "Qonunchilik, sud, nazorat"
    ],
    "correct": 0
  },
  {
    "q": "“Agar insonlar farishta bo‘lsa...” degan so‘zlar kimga tegishli?",
    "options": [
      "Jeyms Madison",
      "Jon Lokk",
      "Monteskye",
      "Rousseau"
    ],
    "correct": 0
  },
  {
    "q": "Qozog‘iston Konstitutsiyasida qaysi sudlar haqida alohida bo‘limlar mavjud?",
    "options": [
      "Konstitutsiyaviy Kengash va Oliy sud",
      "Oliy sud va Apellyatsiya sudi",
      "Konstitutsiya sudi va Oliy sud",
      "Harbiy sud va Oliy sud"
    ],
    "correct": 0
  },
  {
    "q": "Germaniya Asosiy qonuniga ko‘ra nechta mustaqil sud tizimi mavjud?",
    "options": [
      "5 ta",
      "4 ta",
      "6 ta",
      "3 ta"
    ],
    "correct": 0
  },
  {
    "q": "Fransiya Konstitutsiyasiga ko‘ra sud hokimiyati mustaqilligining kafili kim?",
    "options": [
      "Prezident",
      "Parlament",
      "Oliy sud",
      "Konstitutsiya sudi"
    ],
    "correct": 0
  },
  {
    "q": "Demokratik davlatlarda qanday sudlarni tashkil etish taqiqlangan?",
    "options": [
      "Favqulodda sudlar",
      "Harbiy sudlar",
      "Apellyatsiya sudlari",
      "Maxsus sudlar"
    ],
    "correct": 0
  },
  {
    "q": "Aybsizlik prezumpsiyasi nimani anglatadi?",
    "options": [
      "Aybi isbotlanmaguncha aybsiz",
      "Sud qarorisiz aybdor",
      "Prokuror qarorisiz aybdor",
      "Parlament qarorisiz aybdor"
    ],
    "correct": 0
  },
  {
    "q": "Yaponiya Konstitutsiyasiga ko‘ra sudya qanday yo‘l bilan lavozimidan olinishi mumkin?",
    "options": [
      "Jamoatchilik impichmenti",
      "Prezident qarori",
      "Parlament qarori",
      "Sud qarori"
    ],
    "correct": 0
  },
  {
    "q": "Avstriya va Germaniyada sudya bo‘lmagan fuqarolar qanday ataladi?",
    "options": [
      "Shaffenlar",
      "Jurorlar",
      "Delegatlar",
      "Fraksiyalar"
    ],
    "correct": 0
  },
  {
    "q": "Buyuk Britaniya Oliy Sudi sudyalari kim tomonidan tayinlanadi?",
    "options": [
      "Monarx",
      "Parlament",
      "Lordlar palatasi",
      "Bosh vazir"
    ],
    "correct": 0
  },
  {
    "q": "Buyuk Britaniyada yuqori sudyalar necha yoshgacha ishlaydi?",
    "options": [
      "70 yosh",
      "65 yosh",
      "75 yosh",
      "60 yosh"
    ],
    "correct": 0
  },
  {
    "q": "Sudyalarning boshqa lavozimlarni egallashini taqiqlovchi tamoyil qanday nomlanadi?",
    "options": [
      "Moslashmaslik tamoyili",
      "Erkinlik tamoyili",
      "Vakillik tamoyili",
      "Delegatsiya tamoyili"
    ],
    "correct": 0
  },
  {
    "q": "Gretsiya Konstitutsiyasiga ko‘ra sudyalarga qanday qo‘shimcha faoliyat ruxsat etiladi?",
    "options": [
      "O‘qituvchilik",
      "Tadbirkorlik",
      "Jurnalistika",
      "Advokatlik"
    ],
    "correct": 0
  },
  {
    "q": "AQShda konstitutsiyaviy sud nazorati qaysi ish orqali joriy etilgan?",
    "options": [
      "Marbury v. Madison",
      "Brown v. Board",
      "Roe v. Wade",
      "Plessy v. Ferguson"
    ],
    "correct": 0
  },
  {
    "q": "Kontinental Yevropa konstitutsiyaviy sud modelini kim yaratgan?",
    "options": [
      "Hans Kelzen",
      "Monteskye",
      "Jon Lokk",
      "Jeyms Madison"
    ],
    "correct": 0
  }
,
  {
    "q": "Qonun kuchga kirmasidan avval amalga oshiriladigan konstitutsiyaviy nazorat qanday nomlanadi?",
    "options": [
      "Oldindan nazorat",
      "Keyingi nazorat",
      "Doimiy nazorat",
      "Maxsus nazorat"
    ],
    "correct": 0
  },
  {
    "q": "Germaniya Federal Konstitutsiyaviy sudi sudyalari necha yilga tayinlanadi?",
    "options": [
      "12 yil",
      "10 yil",
      "15 yil",
      "8 yil"
    ],
    "correct": 0
  },
  {
    "q": "Qaysi mamlakatda sudlar konstitutsiyaviy nazoratni amalga oshirmaydi?",
    "options": [
      "Buyuk Britaniya",
      "AQSh",
      "Fransiya",
      "Germaniya"
    ],
    "correct": 0
  },
  {
    "q": "Janubiy Koreya Konstitutsiyaviy sudi nechta sudyadan iborat?",
    "options": [
      "9 ta",
      "7 ta",
      "11 ta",
      "5 ta"
    ],
    "correct": 0
  },
  {
    "q": "Qirg‘iziston Konstitutsiyaviy sudi sudyasi bo‘lish uchun yosh chegarasi qanday?",
    "options": [
      "40–70 yosh",
      "35–65 yosh",
      "30–60 yosh",
      "45–75 yosh"
    ],
    "correct": 0
  },
  {
    "q": "“Mahalliy o‘zini o‘zi boshqarish” atamasi nimani anglatadi?",
    "options": [
      "Aholining o‘z ishlarini mustaqil boshqarishi",
      "Davlatning mahalliy hokimiyatni boshqarishi",
      "Sudning mahalliy hokimiyatni nazorati",
      "Parlamentning mahalliy hokimiyatni belgilashi"
    ],
    "correct": 0
  },
  {
    "q": "R. Drago mahalliy boshqaruvni necha guruhga ajratadi?",
    "options": [
      "3 guruh",
      "2 guruh",
      "4 guruh",
      "5 guruh"
    ],
    "correct": 0
  },
  {
    "q": "Hindistonda qabila va kastalar qaysi avtonomiyaga ega?",
    "options": [
      "Madaniy avtonomiya",
      "Hududiy avtonomiya",
      "Siyosiy avtonomiya",
      "Korporativ avtonomiya"
    ],
    "correct": 0
  },
  {
    "q": "Mahalliy o‘zini o‘zi boshqarishning Yevropa xartiyasi qachon qabul qilingan?",
    "options": [
      "1985-yil",
      "1990-yil",
      "1975-yil",
      "2000-yil"
    ],
    "correct": 0
  },
  {
    "q": "“Municipium” so‘zi lotin tilida qanday ma’noni bildiradi?",
    "options": [
      "Vazifa va qabul qilish",
      "Xalq va hokimiyat",
      "Huquq va tartib",
      "Davlat va boshqaruv"
    ],
    "correct": 0
  },
  {
    "q": "“O‘zini o‘zi boshqarish” tushunchasi qachon vujudga kelgan?",
    "options": [
      "1688-yil Shonli inqilobdan keyin",
      "1649-yil Angliya inqilobidan keyin",
      "1776-yil AQSh mustaqilligidan keyin",
      "1789-yil Fransiya inqilobidan keyin"
    ],
    "correct": 0
  },
  {
    "q": "G‘arbiy Yevropada mahalliy boshqaruv islohotlari qanday turlarga bo‘linadi?",
    "options": [
      "Tuzilmaviy, funksional, moliyaviy",
      "Huquqiy, siyosiy, iqtisodiy",
      "Hududiy, siyosiy, madaniy",
      "Markaziy, mahalliy, mintaqaviy"
    ],
    "correct": 0
  },
  {
    "q": "Darajalar o‘rtasidagi munosabatlarni qayta taqsimlashga qaratilgan islohot nima deb ataladi?",
    "options": [
      "Desentralizatsiya",
      "Markazlashtirish",
      "Federalizatsiya",
      "Unitarizatsiya"
    ],
    "correct": 0
  },
  {
    "q": "Fransiya, Italiya va Ispaniyada mahalliy boshqaruvning qaysi modeli qo‘llaniladi?",
    "options": [
      "Fransuz modeli",
      "Germaniya modeli",
      "Angliya modeli",
      "Amerika modeli"
    ],
    "correct": 0
  },
  {
    "q": "Germaniyada kommunal modelga asos solgan islohot qachon amalga oshirilgan?",
    "options": [
      "1808-yil Shteyn-Gardenberg islohoti",
      "1789-yil Fransiya inqilobi",
      "1848-yil Germaniya Konstitutsiyasi",
      "1919-yil Veymar Konstitutsiyasi"
    ],
    "correct": 0
  },
  {
    "q": "Fransiyada boshqaruvning necha pog‘onasi mavjud?",
    "options": [
      "3 pog‘ona",
      "2 pog‘ona",
      "4 pog‘ona",
      "5 pog‘ona"
    ],
    "correct": 0
  },
  {
    "q": "Fransiyada mahalliy boshqaruvning eng quyi bo‘g‘ini nima?",
    "options": [
      "Kommunalar",
      "Departamentlar",
      "Mintaqalar",
      "Kantonlar"
    ],
    "correct": 0
  },
  {
    "q": "Fransiyada kommunalar birlashmasidan iborat tuzilmali birlik nima deb ataladi?",
    "options": [
      "Kanton",
      "Departament",
      "Mintaqa",
      "Prefektura"
    ],
    "correct": 0
  },
  {
    "q": "Yaponiyada aholi bevosita kimlarni saylaydi?",
    "options": [
      "Gubernator va mer",
      "Parlament a’zolari",
      "Sudyalar",
      "Prefektlar"
    ],
    "correct": 0
  },
  {
    "q": "Fransiyada ma’muriy birlikdagi ijro hokimiyatini kim boshqaradi?",
    "options": [
      "Prefekt",
      "Mer",
      "Gubernator",
      "Senator"
    ],
    "correct": 0
  }

  ,
  {
    "q": "Munitsipal organlar vazifalari qanday ikki guruhga bo‘linadi?",
    "options": [
      "Majburiy va delegatsiya qilingan",
      "Asosiy va qo‘shimcha",
      "Markaziy va mahalliy",
      "Doimiy va vaqtinchalik"
    ],
    "correct": 0
  },
  {
    "q": "AQSh, Kanada va Fransiyada munitsipalitetlar qanday maxsus organga ega?",
    "options": [
      "Munitsipal politsiya",
      "Munitsipal sud",
      "Munitsipal kengash",
      "Munitsipal prokuratura"
    ],
    "correct": 0
  },
  {
    "q": "Munitsipal kengashga saylanish huquqi asosan necha yoshdan qo‘llaniladi?",
    "options": [
      "18 yosh",
      "21 yosh",
      "20 yosh",
      "25 yosh"
    ],
    "correct": 0
  },
  {
    "q": "AQShning 'Kuchli mer' tizimida mer qanday tayinlanadi?",
    "options": [
      "Aholi tomonidan saylanadi",
      "Parlament tomonidan tayinlanadi",
      "Prezident tomonidan tayinlanadi",
      "Sud tomonidan tayinlanadi"
    ],
    "correct": 0
  },
  {
    "q": "Fransiyadagi eng yirik ma’muriy-hududiy birlik nima?",
    "options": [
      "Mintaqa",
      "Departament",
      "Kanton",
      "Kommunalar"
    ],
    "correct": 0
  }


    ]),
  },







////////////////////////////////////////////////////////
//  topic3: {
//     title: "Konstitutsiya 3-Bo'lim",
//     questions: randomizeQuestions([


//     ]),
//   },




}