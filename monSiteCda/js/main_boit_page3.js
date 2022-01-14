// boîte 5
var mscWrite = document.querySelector("#msc");
var secWrite = document.querySelector("#sec");
var minWrite = document.querySelector("#min");
var heureWrite = document.querySelector("#heure");

var msc = 0;
var sec = 0;
var min = 0;
var heure = 0;

var intervalID = false;
var t;

function start() {
    if (intervalID == false) {
        t = setInterval(update_chrono, 100);
        intervalID = true;
    }
    
}
function update_chrono() {
    msc += 100;
    if (msc === 1000) {
        msc = 0;
        sec += 1;
    }

    if (sec === 60) {
        sec = 0;
        min += 1;
    }
    if (min === 60) {
        min = 0;
        heure += 1;
    }
    write(msc, sec, min, heure);
}
function stop() {
    clearInterval(t);
    intervalID = false;
}
function reset() {
    stop();
    
    t;
    msc = 0;
    sec = 0;
    min = 0;
    heure = 0;
    write(msc, sec, min, heure);

}
function write(misc, seco, minu, heur) {
    // console.log(misc);
    mscWrite.innerHTML = misc + "ms";
    secWrite.innerHTML = seco+ "s";
    minWrite.innerHTML = minu + "min";
    heureWrite.innerHTML = heur + "h";
}