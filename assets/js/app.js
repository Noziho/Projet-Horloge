let aiguilleSecondes = document.getElementById("secondes");
let aiguilleMinutes = document.getElementById("minutes");
let aiguilleHeures = document.getElementById("heures");

let timeOutRecur = function () {
    let timeOutId = setTimeout(function () {
        let actualDate = new Date();
        let secondes = actualDate.getSeconds() * 6 - 90;
        let minutes = actualDate.getMinutes() * 6 - 90 + 0.1 * actualDate.getSeconds();
        let heures = (((actualDate.getHours() - 12) * 30) - 90) + 0.5 * actualDate.getMinutes();
        aiguilleSecondes.style.transform = "rotate(" + secondes + "deg)";
        aiguilleMinutes.style.transform = "rotate(" + minutes + "deg)";
        aiguilleHeures.style.transform = "rotate(" + heures + "deg)";
        timeOutRecur();
    }, 100);
}
timeOutRecur();