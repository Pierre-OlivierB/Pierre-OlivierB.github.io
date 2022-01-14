let lieuReponse = document.querySelector("#texteOneBoite");
let bool
let tryButton=document.querySelector("#mdp_test");
tryButton.addEventListener("click",buttonTest);
function buttonTest() {
  do{
    while (lieuReponse.firstChild) {
      lieuReponse.removeChild(lieuReponse.lastChild)  
    }
    
    bool=affiche(prompt("Veuillez entrez un mot de passe à forte valeur: "))
}
while (!bool);  
}


function affiche(chaine) {

    let alertReponse=document.querySelector("div");
    alertReponse.className="";
    let affichCalculeForce=document.querySelector("span");
    affichCalculeForce.className="";

    let ncp=0;

    ncp +=(chaine.search(/[A-Z]/)==-1? 0 : 26);
    ncp +=(chaine.search(/[a-z]/)==-1? 0 : 26);
    ncp +=(chaine.search(/[0-9]/)==-1? 0 : 10);
    ncp +=(chaine.search(/[#à%!$]/)==-1? 0 : 5);
    alertReponse.textContent="Nombre de caractères possible: "+ncp;
    lieuReponse.appendChild(alertReponse);
    
    let calculef=Math.ceil(chaine.length*Math.log2(ncp));
    
    affichCalculeForce.textContent="Force du code :"+calculef;
    lieuReponse.appendChild(affichCalculeForce);

    if (calculef<104) {
        alert("Recommencez avec un mot de passe plus fort!")
        return false;
    }
    else{
        alert("Votre mot de passe à passer les tests! Gardez-le précieusement et ne le divulguez à personne!")
        return true;
    }
}
// boîte 3

function changerStyle() {
    let chiffre = document.querySelectorAll(".chiffre_choisi");
    let choix_couleur = 255 - chiffre[0].value;
    // result = white
    document.querySelector("#carte").style = "background-color:rgb(" 
    + choix_couleur + "," + choix_couleur + "," + choix_couleur 
    + "); padding:" + chiffre[1].value 
    + "px; height:" + chiffre[2].value 
    + "px; width:" + chiffre[3].value 
    + "px; border-radius: " + chiffre[4].value 
    + "px; transform:translateX(50px) rotate(" + chiffre[5].value + "deg)";
}

// boite 4

function launchChange() {
    changeImage();
    setInterval(changeImage,3000);
}
var bool2;
function changeImage() {

    let Image1 = new Image(300, 400);
        Image1.src="11.jpg";
    let Image2 = new Image(300, 400);
        Image2.src="12.jpg";
    let images =[Image1,Image2];
    if (bool2==true) {
        bool2=false;
        document.getElementById('switch').src=images[0].src;
    }
    else{
        bool2=true;
        document.getElementById('switch').src=images[1].src;
    }
}

