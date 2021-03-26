function dateStrFunct() {
  let date = new Date();
  let dateStr =
    ("00" + date.getDate()).slice(-2) +
    "." +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "." +
    date.getFullYear() +
    ", " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);

  return dateStr;
}

function uniqeId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export const dataMain = [
  {
    id: uniqeId(),
    imageFirst: {
      uri:
        "https://images.freeimages.com/images/large-previews/529/inmigrants-1569643.jpg",
    },
    title: "Protesti v Ameriki",
    titleMore:
      "Strah - glavni problem elite so jezni posamezniki in neomejen pohlep",
    city: "Ljubljana",
    date: "14.3.2021",
    time: "15:46",
    readTime: "2",
    author: "Maja Racic",
    fabula:
      '"Potrudimo se krivulje obrniti čim bolj strmo navzdol, ker nas dohitevajo novi bolj kužni sevi, ki se v trenutnih pogojih hitro razmnožujejo," so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji zapisali na Institutu Jožefa Stefana. Po njihovih ocenah je reprodukcijsko število R spet nekoliko naraslo in znaša 1 (dan prej 0,92). V soboto je še veljalo, da bi povprečno število pozitivnih oseb lahko padlo pod 300 na dan do konca aprila. "Dokler epidemija ne bo začela vidno upadati, ne bomo podajali napovedi, ker so negotovosti prevelike," pa so zapisali danes.',
    imageSecond: require("../assets/corona2.jpg"),
    text1:
      "Na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in umetne inteligence v boju proti pandemiji, je ekipa IJS osvojila drugo mesto.FOTO: Dreamstime",
    text2:
      'Epidemijo bi bilo dobro čim prej toliko zmanjšati, da bodo lahko  epidemiologi sledili vsem stikom, so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji uvodoma zapisali na Institutu Jožefa Stefana (IJS), kjer so pred kratkim na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in umetne inteligence v boju proti pandemiji, osvojili drugo mesto in siprislužili nagrado v vrednosti 210.000 evrov. "To najbolj učinkovitoomejuje širjenje virusa in bo močno olajšalo obvladovanje novega boljkužnega seva, ko oziroma če se bo razširil," so dodali.',
    tagWords: ["Epidemija", "Corona", "Slovenija", "Ukrepi", "Vlada", "Stroka"],
    comments: [
      {
        id: uniqeId(),
        profileFoto: require("../assets/profile.png"),
        name: "humblebrag",
        date: dateStrFunct(),
        comment:
          'Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini, bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki omogoča zaščito pred vsemi sevi.',
        likes: 4,
        dislikes: 0,
      },
      {
        id: uniqeId(),
        profileFoto: require("../assets/hippie.png"),
        name: "JanezKranjski",
        date: dateStrFunct(),
        comment:
          "ne, s tem se pa z ženo že ne bova cepla, počakava na druge, za letos se ne bo rablo cepilni pasuš, ker ne boš mel kam iti, s tem mislim tujino, pr nas, pa se bo pa stanje umirilo po vaušer evforiji, upam",
        likes: 0,
        dislikes: 0,
      },
    ],
  },
  {
    id: uniqeId(),
    imageFirst: {
      uri:
        "https://images.freeimages.com/images/large-previews/f34/i-love-this-game-1442766.jpg",
    },
    title: "Zacetek lige NBA",
    titleMore:
      "MVP je tisti košarkar, ki je najbolj koristil svoji ekipi.",
    city: "Ljubljana",
    date: "14.3.2021",
    time: "15:46",
    readTime: "2",
    author: "Maja Racic",
    fabula:
      '"Potrudimo se krivulje obrniti čim bolj strmo navzdol, ker nas dohitevajo novi bolj kužni sevi, ki se v trenutnih pogojih hitro razmnožujejo," so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji zapisali na Institutu Jožefa Stefana. Po njihovih ocenah je reprodukcijsko število R spet nekoliko naraslo in znaša 1 (dan prej 0,92). V soboto je še veljalo, da bi povprečno število pozitivnih oseb lahko padlo pod 300 na dan do konca aprila. "Dokler epidemija ne bo začela vidno upadati, ne bomo podajali napovedi, ker so negotovosti prevelike," pa so zapisali danes.',
    imageSecond: require("../assets/corona2.jpg"),
    text1:
      "Na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in umetne inteligence v boju proti pandemiji, je ekipa IJS osvojila drugo mesto.FOTO: Dreamstime",
    text2:
      'Epidemijo bi bilo dobro čim prej toliko zmanjšati, da bodo lahko  epidemiologi sledili vsem stikom, so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji uvodoma zapisali na Institutu Jožefa Stefana (IJS), kjer so pred kratkim na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in umetne inteligence v boju proti pandemiji, osvojili drugo mesto in siprislužili nagrado v vrednosti 210.000 evrov. "To najbolj učinkovitoomejuje širjenje virusa in bo močno olajšalo obvladovanje novega boljkužnega seva, ko oziroma če se bo razširil," so dodali.',
    tagWords: ["Epidemija", "Corona", "Slovenija", "Ukrepi", "Vlada", "Stroka"],
    comments: [
      {
        id: uniqeId(),
        profileFoto: require("../assets/profile.png"),
        name: "humblebrag",
        date: dateStrFunct(),
        comment:
          'Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini, bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki omogoča zaščito pred vsemi sevi.',
        likes: 4,
        dislikes: 0,
      },
      {
        id: uniqeId(),
        profileFoto: require("../assets/hippie.png"),
        name: "JanezKranjski",
        date: dateStrFunct(),
        comment:
          "ne, s tem se pa z ženo že ne bova cepla, počakava na druge, za letos se ne bo rablo cepilni pasuš, ker ne boš mel kam iti, s tem mislim tujino, pr nas, pa se bo pa stanje umirilo po vaušer evforiji, upam",
        likes: 0,
        dislikes: 0,
      },
    ],
  },
  {
    id: uniqeId(),
    imageFirst: {
      uri:
        "https://images.freeimages.com/images/large-previews/ad6/concert-1-1438833.jpg",
    },
    title: "Kultura v tezavah",
    titleMore:
      "V najširšem pomenu označuje izraz kultura vse produkte posameznika.",
    city: "Ljubljana",
    date: "14.3.2021",
    time: "15:46",
    readTime: "2",
    author: "Maja Racic",
    fabula:
      '"Potrudimo se krivulje obrniti čim bolj strmo navzdol, ker nas dohitevajo novi bolj kužni sevi, ki se v trenutnih pogojih hitro razmnožujejo," so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji zapisali na Institutu Jožefa Stefana. Po njihovih ocenah je reprodukcijsko število R spet nekoliko naraslo in znaša 1 (dan prej 0,92). V soboto je še veljalo, da bi povprečno število pozitivnih oseb lahko padlo pod 300 na dan do konca aprila. "Dokler epidemija ne bo začela vidno upadati, ne bomo podajali napovedi, ker so negotovosti prevelike," pa so zapisali danes.',
    imageSecond: require("../assets/corona2.jpg"),
    text1:
      "Na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in umetne inteligence v boju proti pandemiji, je ekipa IJS osvojila drugo mesto.FOTO: Dreamstime",
    text2:
      'Epidemijo bi bilo dobro čim prej toliko zmanjšati, da bodo lahko  epidemiologi sledili vsem stikom, so v aktualni projekciji širjenja bolezni covid-19 v Sloveniji uvodoma zapisali na Institutu Jožefa Stefana (IJS), kjer so pred kratkim na svetovnem tekmovanju, katerega cilj je bil izkoristiti moč podatkov in umetne inteligence v boju proti pandemiji, osvojili drugo mesto in siprislužili nagrado v vrednosti 210.000 evrov. "To najbolj učinkovitoomejuje širjenje virusa in bo močno olajšalo obvladovanje novega boljkužnega seva, ko oziroma če se bo razširil," so dodali.',
    tagWords: ["Epidemija", "Corona", "Slovenija", "Ukrepi", "Vlada", "Stroka"],
    comments: [
      {
        id: uniqeId(),
        profileFoto: require("../assets/profile.png"),
        name: "humblebrag",
        date: dateStrFunct(),
        comment:
          'Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini, bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki omogoča zaščito pred vsemi sevi.',
        likes: 4,
        dislikes: 0,
      },
      {
        id: uniqeId(),
        profileFoto: require("../assets/hippie.png"),
        name: "JanezKranjski",
        date: dateStrFunct(),
        comment:
          "ne, s tem se pa z ženo že ne bova cepla, počakava na druge, za letos se ne bo rablo cepilni pasuš, ker ne boš mel kam iti, s tem mislim tujino, pr nas, pa se bo pa stanje umirilo po vaušer evforiji, upam",
        likes: 0,
        dislikes: 0,
      },
    ],
  },
];
