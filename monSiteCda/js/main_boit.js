document.addEventListener("DOMContentLoaded", function () {
  let side = document.querySelectorAll(".sidenav");
  M.Sidenav.init(side);
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems, {
    accordion: false,
  });
});

let lieuReponse = document.querySelector("#texteOneBoite");
let bool;
let tryButton = document.querySelector("#mdp_test");
tryButton.addEventListener("click", buttonTest);
function buttonTest() {
  do {
    while (lieuReponse.firstChild) {
      lieuReponse.removeChild(lieuReponse.lastChild);
    }

    bool = affiche(prompt("Veuillez entrez un mot de passe à forte valeur: "));
  } while (!bool);
}

function affiche(chaine) {
  let alertReponse = document.createElement("div");
  alertReponse.className = "";
  let affichCalculeForce = document.createElement("span");
  affichCalculeForce.className = "";

  let ncp = 0;

  ncp += chaine.search(/[A-Z]/) == -1 ? 0 : 26;
  ncp += chaine.search(/[a-z]/) == -1 ? 0 : 26;
  ncp += chaine.search(/[0-9]/) == -1 ? 0 : 10;
  ncp += chaine.search(/[#à%!$]/) == -1 ? 0 : 5;
  alertReponse.textContent = "Nombre de caractères possible: " + ncp;
  lieuReponse.appendChild(alertReponse);

  let calculef = Math.ceil(chaine.length * Math.log2(ncp));

  affichCalculeForce.textContent = "Force du code :" + calculef;
  lieuReponse.appendChild(affichCalculeForce);

  if (calculef < 104) {
    alert("Recommencez avec un mot de passe plus fort!");
    return false;
  } else {
    alert(
      "Votre mot de passe à passer les tests! Gardez-le précieusement et ne le divulguez à personne!"
    );
    return true;
  }
}
