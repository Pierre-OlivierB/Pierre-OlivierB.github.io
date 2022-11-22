//inject content
content.innerHTML = `
        <div class="container">
            <div data-target="test" class="card_presentation img_card_pres" id="testOne">
                <a href="./monSiteCda/presentation.html" class="card_index"></a>
            </div>
            <div data-target="test2" class="card_presentation  img_card_rea transformTest" id="testTwo">
                <a href="./monSiteCda/realisations.html" class="card_index"></a>
            </div>
            <div data-target="test3" class="card_presentation img_card_vei" id="testThree">
                <a href="" class="card_index"></a>
            </div>
            <div data-target="test4" class="card_presentation transformTest img_card_cont" id="testFour">
                <a href="./monSiteCda/contact.html" class="card_index"></a>
            </div>
        </div>
`;
// effet escalier:
let testOne = document.querySelector("#testOne");
let positionTestOne = -510;
let testTwo = document.querySelector("#testTwo");
let positionTestTwo = -550;
let testThree = document.querySelector("#testThree");
let positionTestThree = -800;
let testFour = document.querySelector("#testFour");
let positionTestFour = -800;
testOne.setAttribute("style", `transform:translateY(${positionTestOne}px)`);
testTwo.setAttribute("style", `transform:translateY(${positionTestTwo}px)`);
testThree.setAttribute("style", `transform:translateY(${positionTestThree}px)`);
testFour.setAttribute("style", `transform:translateY(${positionTestFour}px)`);

window.onload = siAttente();
let ajout = 20;
var nonAction = null;
var enAttente = null;

function siAttente() {
  enAttente = setTimeout(appearCards, 1000);
}

function appearCards() {
  nonAction = setInterval(calculPosition, 10);
}

function calculPosition() {
  if (positionTestOne > 0) {
    positionTestOne = 0;
    positionTestTwo += ajout * 2;
    testTwo.setAttribute("style", `transform:translateY(${positionTestTwo}px)`);
    if (positionTestTwo > 80) {
      positionTestTwo = 100;
      positionTestThree += ajout * 3;
      testThree.setAttribute(
        "style",
        `transform:translateY(${positionTestThree}px)`
      );
      if (positionTestThree > 80) {
        positionTestThree = 100;
        positionTestFour += ajout * 3;
        testFour.setAttribute(
          "style",
          `transform:translateY(${positionTestFour}px)`
        );
        if (positionTestFour > 180) {
          clearInterval(nonAction);
          clearTimeout(enAttente);
        }
      }
    }
  } else {
    positionTestOne += ajout;
    testOne.setAttribute("style", `transform:translateY(${positionTestOne}px)`);
  }
}
