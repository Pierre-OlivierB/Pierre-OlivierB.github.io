document.addEventListener('DOMContentLoaded', function () {
  let side = document.querySelectorAll('.sidenav');
  M.Sidenav.init(side);
});
// effet escalier:
let testOneVeille = document.querySelector('#testOneVeille');
let positionTestOneVeille = -430;
let testTwoVeille = document.querySelector('#testTwoVeille');
let positionTestTwoVeille = -820;
let testThreeVeille = document.querySelector('#testThreeVeille');
let positionTestThreeVeille = -1220;
// let testThreeVeille = document.querySelector('#testThreeVeille');
// let positionTestThreeVeille = -1050;
// let testFourVeille = document.querySelector('#testFourVeille');
// let positionTestFourVeille = -1400;
testOneVeille.setAttribute("style", `transform:translate(250px,${positionTestOneVeille}px)`);
testTwoVeille.setAttribute("style", `transform:translate(250px,${positionTestTwoVeille}px)`);
testThreeVeille.setAttribute("style", `transform:translate(250px,${positionTestThreeVeille}px)`);
// testFourVeille.setAttribute("style", `transform:translate(250px,${positionTestFourVeille}px)`);

// window.addEventListener('scroll', () => {
//   const scrolled = window.scrollY;
//   testOneVeille.setAttribute("style", `transform:translate(250px,${positionTestOneVeille + scrolled * 4}px)`); 
//   if ((scrolled * 4) > 200) {
//     testOneVeille.setAttribute("style", `transform:translate(250px,100px)`);
//     testTwoVeille.setAttribute("style", `transform:translate(250px,${positionTestTwoVeille + scrolled * 4}px)`);
//     if ((scrolled * 4) > 350) {
//       testTwoVeille.setAttribute("style", `transform:translate(250px,100px)`);
//       // testThreeVeille.setAttribute("style", `transform:translate(250px,${positionTestThreeVeille + scrolled * 4}px)`);
//       // if ((scrolled * 4) > 500) {
//       //   testThreeVeille.setAttribute("style", `transform:translate(250px,100px)`);
//       //   testFourVeille.setAttribute("style", `transform:translate(250px,${positionTestFourVeille + scrolled * 4}px)`);
//       //   if ((scrolled * 4) > 650) {
//       //     testFourVeille.setAttribute("style", `transform:translate(250px,100px)`);
//       //   }
//       // }
//     }
//   }
//   else {
//     testOneVeille.setAttribute("style", `transform:translate(250px,${positionTestOneVeille + scrolled * 4}px)`);
//     testTwoVeille.setAttribute("style", `transform:translate(250px,${positionTestTwoVeille}px)`);
//     // testThreeVeille.setAttribute("style", `transform:translate(250px,${positionTestThreeVeille}px)`);
//     // testFourVeille.setAttribute("style", `transform:translate(250px,${positionTestFourVeille}px)`);
//   }
// });
// fin effet esclaier

window.onload = siAttente();
let ajout=10;
var nonAction=null;
var enAttente=null;

function siAttente() {
  enAttente=setTimeout(appearCards,1000);
}

function appearCards() {
  nonAction=setInterval(calculPosition, 30);
}

function calculPosition(){
  if (positionTestOneVeille>0) {
    positionTestOneVeille=0;
    positionTestTwoVeille+=ajout*2;
    testTwoVeille.setAttribute("style", `transform:translate(30%,${positionTestTwoVeille}px)`);
    if(positionTestTwoVeille>0){
      positionTestTwoVeille=30;
      positionTestThreeVeille+=ajout*2;
    testThreeVeille.setAttribute("style", `transform:translate(30%,${positionTestThreeVeille}px)`);
      if(positionTestThreeVeille>80){
        clearInterval(nonAction);
          clearTimeout(enAttente);
        // positionTestThreeVeille=100
        // positionTestFour+=ajout*2;
        // testFour.setAttribute("style", `transform:translateY(${positionTestFour}px)`);
        // if(positionTestFour>180){
        //   clearInterval(nonAction);
        //   clearTimeout(enAttente);
        // }
      }
    }
  }
  else{
    positionTestOneVeille+=ajout;
  testOneVeille.setAttribute("style", `transform:translate(30%,${positionTestOneVeille}px)`);
  }
}