// boîte 3
let ajoutClass = document.querySelector(".line_table");
window.onload = ajouterClass();
function ajouterClass() {
  ajoutClass.classList.add("newTable");
}

function changerStyle() {
  let chiffre = document.querySelectorAll(".chiffre_choisi");
  let choix_couleur = 255 - chiffre[0].value;
  // result = white
  document.querySelector("#carte").style =
    "background-color:rgb(" +
    choix_couleur +
    "," +
    choix_couleur +
    "," +
    choix_couleur +
    "); padding:" +
    chiffre[1].value +
    "px; height:" +
    chiffre[2].value +
    "px; width:" +
    chiffre[3].value +
    "px; border-radius: " +
    chiffre[4].value +
    "px; transform:translateX(50px) rotate(" +
    chiffre[5].value +
    "deg)";
}

// boite 4

function launchChange() {
  changeImage();
  setInterval(changeImage, 3000);
}
var bool2;
function changeImage() {
  let Image1 = new Image(300, 400);
  Image1.src = "./img/11.jpg";
  let Image2 = new Image(300, 400);
  Image2.src = "./img/12.jpg";
  let images = [Image1, Image2];
  if (bool2 == true) {
    bool2 = false;
    document.getElementById("switch").src = images[0].src;
  } else {
    bool2 = true;
    document.getElementById("switch").src = images[1].src;
  }
}
