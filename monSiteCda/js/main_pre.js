let tweetOne = document.querySelector("#reserv");
let buttonDesc = document.querySelector("#description");
let buttonLang = document.querySelector("#language");
let buttonMed = document.querySelector("#medium");
let buttonLove = document.querySelector("#i_like");
let test = true;
let gpButton = document.querySelector(".backg_button");
const tableButton = ["buttonDesc", "buttonLang", "buttonMed", "buttonLove"];

// creation of 1rst articles
let articleOne = document.createElement("article");
let imageIcon = document.createElement("img");
let contHeadArti = document.createElement("div");
let contFootArti = document.createElement("div");
// creation of 2sd articles
let articleTwo = document.createElement("article");
let imageIconTwo = document.createElement("img");
let contHeadArtiTwo = document.createElement("div");
let contFootArtiTwo = document.createElement("div");
// creation of thirds article
let articleThree = document.createElement("article");
let imageIconThree = document.createElement("img");
let contHeadArtiThree = document.createElement("div");
let contFootArtiThree = document.createElement("div");
// top of 1rst articles
let imgVerifToArt = document.createElement("li");
imgVerifToArt.classList.add("img_verif_top_art");
let timeArtCreation = document.createElement("li");
timeArtCreation.textContent = "@Montpellier . 1sept 22";
// top of 2sd articles
let imgVerifToArtTwo = document.createElement("li");
imgVerifToArtTwo.classList.add("img_verif_top_art");
let timeArtCreationTwo = document.createElement("li");
timeArtCreationTwo.textContent = "@Montpellier . 1sept 22";
// top of 3thd articles
let imgVerifToArtThree = document.createElement("li");
imgVerifToArtThree.classList.add("img_verif_top_art");
let timeArtCreationThree = document.createElement("li");
timeArtCreationThree.textContent = "@Montpellier . 1sept 22";
// top of desciption 1rst articles
let whoIAm = document.createElement("li");
// top of desciption 2sd articles
let whoIAmTwo = document.createElement("li");
// top of desciption 3thrd articles
let whoIAmThree = document.createElement("li");
// bottom of 1rst articles
let imgReTweet = document.createElement("li");
imgReTweet.classList.add("img_retweet_bot_art");
let imgLike = document.createElement("li");
imgLike.classList.add("img_like_bot_art");
let imgShare = document.createElement("li");
imgShare.classList.add("img_share_top_art");
// bottom of 2sd articles
let imgReTweetTwo = document.createElement("li");
imgReTweetTwo.classList.add("img_retweet_bot_art");
let imgLikeTwo = document.createElement("li");
imgLikeTwo.classList.add("img_like_bot_art");
let imgShareTwo = document.createElement("li");
imgShareTwo.classList.add("img_share_top_art");
// bottom of 3thrd articles
let imgReTweetThree = document.createElement("li");
imgReTweetThree.classList.add("img_retweet_bot_art");
let imgLikeThree = document.createElement("li");
imgLikeThree.classList.add("img_like_bot_art");
let imgShareThree = document.createElement("li");
imgShareThree.classList.add("img_share_top_art");

//chargement de la première page au chargement de la page
window.onload = createDescPage();
buttonDesc.classList.add("active_button");
// Descriptions part
buttonDesc.addEventListener("click", (e) => {
  e.preventDefault();
  if (test === false) {
    // faire un tableau/ou un for childNodes.lenght de n nodes pour toutes les supprimer?
    while (tweetOne.firstChild) {
      tweetOne.removeChild(tweetOne.lastChild);
    }
    createDescPage(e);
    buttonLang.classList.remove("active_button");
    buttonMed.classList.remove("active_button");
    buttonLove.classList.remove("active_button");
    buttonDesc.classList.add("active_button");
  } else {
    createDescPage(e);
    delClass();
    buttonLang.classList.remove("active_button");
    buttonMed.classList.remove("active_button");
    buttonLove.classList.remove("active_button");
    buttonDesc.classList.add("active_button");
  }
});

function createDescPage() {
  createFirstDesc();
  createSecDesc();
  createThiDesc();
}

function createFirst() {
  imageIcon.classList.add("img_ascii_tweet");
  imageIcon.setAttribute("src", "../test ascii.png");

  contHeadArti.classList.add("cont_head_arti");
  articleOne.classList.add("white_font_art");
  contFootArti.classList.add("cont_foot_arti");

  tweetOne.appendChild(contHeadArti);
  contHeadArti.appendChild(whoIAm);
  contHeadArti.appendChild(imgVerifToArt);
  contHeadArti.appendChild(timeArtCreation);
  tweetOne.appendChild(imageIcon);
  tweetOne.appendChild(articleOne);
  tweetOne.appendChild(contFootArti);
  contFootArti.appendChild(imgReTweet);
  contFootArti.appendChild(imgLike);
  contFootArti.appendChild(imgShare);
}
function createSecond() {
  imageIconTwo.classList.add("img_ascii_tweet");
  imageIconTwo.setAttribute("src", "../test ascii.png");

  contHeadArtiTwo.classList.add("cont_head_arti");
  articleTwo.classList.add("white_font_art");
  contFootArtiTwo.classList.add("cont_foot_arti");

  tweetOne.appendChild(contHeadArtiTwo);
  contHeadArtiTwo.appendChild(whoIAmTwo);
  contHeadArtiTwo.appendChild(imgVerifToArtTwo);
  contHeadArtiTwo.appendChild(timeArtCreationTwo);
  tweetOne.appendChild(imageIconTwo);
  tweetOne.appendChild(articleTwo);
  tweetOne.appendChild(contFootArtiTwo);
  contFootArtiTwo.appendChild(imgReTweetTwo);
  contFootArtiTwo.appendChild(imgLikeTwo);
  contFootArtiTwo.appendChild(imgShareTwo);
}
function createThird() {
  imageIconThree.classList.add("img_ascii_tweet");
  imageIconThree.setAttribute("src", "../test ascii.png");

  contHeadArtiThree.classList.add("cont_head_arti");
  articleThree.classList.add("white_font_art");
  contFootArtiThree.classList.add("cont_foot_arti");

  tweetOne.appendChild(contHeadArtiThree);
  contHeadArtiThree.appendChild(whoIAmThree);
  contHeadArtiThree.appendChild(imgVerifToArtThree);
  contHeadArtiThree.appendChild(timeArtCreationThree);
  tweetOne.appendChild(imageIconThree);
  tweetOne.appendChild(articleThree);
  tweetOne.appendChild(contFootArtiThree);
  contFootArtiThree.appendChild(imgReTweetThree);
  contFootArtiThree.appendChild(imgLikeThree);
  contFootArtiThree.appendChild(imgShareThree);
}
// creation 1srt article
function createFirstDesc() {
  articleOne.textContent =
    "En 2022 j'ai réalisé un stage de 2mois (remote et présentiel) auprès d'une voix-off française afin de monter son site internet via WordPress.";
  articleOne.textContent +=
    " Le coeur de mes actions tournait autour de la conception , la réalisation du site, son déploiement et l'écrciture de son fascicule d'utilisation.";
  whoIAm.textContent = "Qui je suis?";
  createFirst();
  test = false;
}
// creation 2sd article
function createSecDesc() {
  articleTwo.textContent =
    "De 2016 à 2021 j'étais  Surveillant de l'étude à l'Ecole Perceval de Chatou. Dans ce même écart de temps j'ai été Assistant d'éducation au Lycée Polyvalent Jeanne d'Arc de Rennes et au Lycée Polyvalent Jean Baptiste Poquelin de Saint Germain en Laye l'année d'après.";
  articleTwo.textContent +=
    " Mes actions tournaient autour du suivi des appels, de l'accompagnement des élèves, la surveillance d'examens et biensur la participation aux événements de l'école.";
  whoIAmTwo.textContent = "Qui je suis?";
  createSecond();
  test = false;
}
// creation 3td article
function createThiDesc() {
  articleThree.textContent =
    "Pêle-mêle j'ai aussi été Equipier McDonald’s de Montpellier et de Vannes, ainsi que Tuteur de 1ère année à l’Université de Montpellier 3  et Surveillant de partiels à l’Ecole Supérieur d’Architecture de Montpellier à d'autres occasions.";
  whoIAmThree.textContent = "Qui je suis?";
  createThird();
  test = false;
}

// langages utilisés part
buttonLang.addEventListener("click", (e) => {
  e.preventDefault();
  if (test === false) {
    while (tweetOne.firstChild) {
      tweetOne.removeChild(tweetOne.lastChild);
    }
    createLangPage();
    buttonLang.classList.add("active_button");
    buttonMed.classList.remove("active_button");
    buttonLove.classList.remove("active_button");
    buttonDesc.classList.remove("active_button");
  } else {
    createLangPage();
    buttonLang.classList.add("active_button");
    buttonMed.classList.remove("active_button");
    buttonLove.classList.remove("active_button");
    buttonDesc.classList.remove("active_button");
  }
});
function createLangPage() {
  createFirstLang();
  createSecLang();
  createThiLang();
  test = false;
}
// 1rst article
function createFirstLang() {
  articleOne.textContent =
    "Les Langages que je pratique sont : Html, Css, JS, Java, Php, Python!";
  whoIAm.textContent = "Langages";
  createFirst();
}
// 2sd article
function createSecLang() {
  articleTwo.textContent =
    "Les Frameworks que j'utilise sont : Bootstrap, Materialize, jQuery, Three.js";
  whoIAmTwo.textContent = "Langages";
  createSecond();
}
// 3thrd article
function createThiLang() {
  articleThree.textContent =
    "Il nous reste les Logiciels que j'utilise : Visual Studio Code, draw.io, looping-mcd, FileZilla, WordPress, Fetch, Vite.js, GitHub, Eclypse.";
  whoIAmThree.textContent = "Langages";
  createThird();
}
// Médias part
buttonMed.addEventListener("click", (e) => {
  e.preventDefault();
  if (test === false) {
    while (tweetOne.firstChild) {
      tweetOne.removeChild(tweetOne.lastChild);
    }
    createMedPage();
    buttonMed.classList.add("active_button");
    buttonLang.classList.remove("active_button");
    buttonLove.classList.remove("active_button");
    buttonDesc.classList.remove("active_button");
  } else {
    createMedPage();
    buttonMed.classList.add("active_button");
    buttonLang.classList.remove("active_button");
    buttonLove.classList.remove("active_button");
    buttonDesc.classList.remove("active_button");
  }
});
function createMedPage() {
  createFirstMed();
  createSecMed();
  createThiMed();
  test = false;
}
function createFirstMed() {
  articleOne.textContent =
    "Voici ma dernière formation : titre professionnel de Concepteur Développeur D'Applications (CDA) en 2022 et cela grâce au GRETA Montpellier. Depuis je suis la formation de FromScratch un vidéaste porté sur le Front-End. J'ai également suivi le mooc de l'ANSII afin de me sensibiliser à la cybersécurité.";
  whoIAmTwo.textContent = "Médias?";
  createFirst();
}
function createSecMed() {
  articleTwo.textContent =
    "Ma dernière formation remonte en Août 2012. C'était une Licence de Psychologie à Montpellier dans l'Université Montpellier 3 (UM3).";
  whoIAmTwo.textContent = "Médias?";
  createSecond();
}
function createThiMed() {
  articleThree.textContent =
    "Ma première formation s'est finie en Octobre 2009 par le Baccalauréat Série Scientifique.";
  whoIAmThree.textContent = "Médias?";
  createThird();
}
// J'aime part
buttonLove.addEventListener("click", (e) => {
  e.preventDefault();
  if (test === false) {
    while (tweetOne.firstChild) {
      tweetOne.removeChild(tweetOne.lastChild);
    }
    createLovePage();
    buttonLove.classList.add("active_button");
    buttonMed.classList.remove("active_button");
    buttonLang.classList.remove("active_button");
    buttonDesc.classList.remove("active_button");
  } else {
    createLovePage();
    buttonLove.classList.add("active_button");
    buttonMed.classList.remove("active_button");
    buttonLang.classList.remove("active_button");
    buttonDesc.classList.remove("active_button");
  }
});
function createLovePage() {
  createFirstLove();
  createSecLove();
  createThiLove();

  test = false;
}
function createFirstLove() {
  articleOne.textContent =
    "Dans mes temps libre j'aime écrire autant des romans, des jeux de rôle et je les organise en tant que Maître de Jeu. Je pratique les jeux vidéo autant ceux de stratégie que d'aventure.";
  whoIAm.textContent = "J'aime?";
  createFirst();
}
function createSecLove() {
  articleTwo.textContent =
    "Dans le cadre de mes études j'ai appris l'Anglais et l'Espagnol. De plus je m'intéresse à l'humain en général et je suis toujours curieux des dernières recherches en psychologie.";
  whoIAmTwo.textContent = "J'aime?";
  createSecond();
}
function createThiLove() {
  articleThree.textContent =
    "Je continue de lire l'actualité sur de nombreux sujet comme la technologie (comptoire du hardware), science et maintenant le langage (les nombreux comptes à découvrir dans la section warning). Grâce à ma nouvelle formation, il me plaît de jouer avec certain codes.";
  whoIAmThree.textContent = "J'aime?";
  createThird();
}
// function tweetLonger() {
// }
// tweetLonger();
//Ajout classe active
