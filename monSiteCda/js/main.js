document.addEventListener('DOMContentLoaded', function () {
  let side = document.querySelectorAll('.sidenav');
  M.Sidenav.init(side);
});
// effet escalier:
let testOne = document.querySelector('#testOne');
let positionTestOne = -350;
let testTwo = document.querySelector('#testTwo');
let positionTestTwo = -400;
let testThree = document.querySelector('#testThree');
let positionTestThree = -650;
let testFour = document.querySelector('#testFour');
let positionTestFour = -750;
testOne.setAttribute("style", `transform:translateY(${positionTestOne}px)`);
testTwo.setAttribute("style", `transform:translateY(${positionTestTwo}px)`);
testThree.setAttribute("style", `transform:translateY(${positionTestThree}px)`);
testFour.setAttribute("style", `transform:translateY(${positionTestFour}px)`);

// window.addEventListener('scroll', () => {
//   const scrolled = window.scrollY;
//   testOne.setAttribute("style", `transform:translateY(${positionTestOne + scrolled * 4}px)`); 
//   if ((scrolled * 4) > 200) {
//     testOne.setAttribute("style", `transform:translateY(100px)`);
//     testTwo.setAttribute("style", `transform:translateY(${positionTestTwo + scrolled * 4}px)`);
//     if ((scrolled * 4) > 350) {
//       testTwo.setAttribute("style", `transform:translateY(150px)`);
//       testThree.setAttribute("style", `transform:translateY(${positionTestThree + scrolled * 4}px)`);
//       if ((scrolled * 4) > 500) {
//         testThree.setAttribute("style", `transform:translateY(150px)`);
//         testFour.setAttribute("style", `transform:translateY(${positionTestFour + scrolled * 4}px)`);
//         if ((scrolled * 4) > 650) {
//           testFour.setAttribute("style", `transform:translateY(200px)`);
//         }
//       }
//     }
//   }
//   else {
//     testOne.setAttribute("style", `transform:translateY(${positionTestOne + scrolled * 4}px)`);
//     testTwo.setAttribute("style", `transform:translateY(${positionTestTwo}px)`);
//     testThree.setAttribute("style", `transform:translateY(${positionTestThree}px)`);
//     testFour.setAttribute("style", `transform:translateY(${positionTestFour}px)`);
//   }
// });
// fin effet esclaier
// gestion du load dans un temps imparti
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
  if (positionTestOne>0) {
    positionTestOne=0
    positionTestTwo+=ajout*2;
    testTwo.setAttribute("style", `transform:translateY(${positionTestTwo}px)`);
    if(positionTestTwo>80){
      positionTestTwo=100
      positionTestThree+=ajout*2;
    testThree.setAttribute("style", `transform:translateY(${positionTestThree}px)`);
      if(positionTestThree>80){
        positionTestThree=100
        positionTestFour+=ajout*2;
        testFour.setAttribute("style", `transform:translateY(${positionTestFour}px)`);
        if(positionTestFour>180){
          clearInterval(nonAction);
          clearTimeout(enAttente);
        }
      }
    }
  }
  else{
  positionTestOne+=ajout;
  testOne.setAttribute("style", `transform:translateY(${positionTestOne}px)`);
  }
}
