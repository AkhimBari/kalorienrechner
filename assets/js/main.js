let grundumsatz = document.getElementById("grundumsatz");
let gesamtumsatz = document.getElementById("gesamtumsatz");
let koerpergroeße = document.getElementById("koerpergroeße");
let alter = document.getElementById("alter");
let gewicht = document.getElementById("gewicht");
let weiblich = document.getElementById("weiblich");
let maennlich = document.getElementById("maennlich");
let activity = document.getElementById("activity");
let kj = document.getElementById("kj");
let lastResult;



press = () => {
    if (maennlich.checked) {
     lastResult = 664.7 + (13.7 * gewicht.value) + (5 * koerpergroeße.value) - (6.8 * alter.value)
        console.log(lastResult)
        grundumsatz.innerHTML = lastResult;
    }

    if (weiblich.checked) {
     lastResult = 655.1 + (9.6 * gewicht.value) + (1.8 * koerpergroeße.value) - (4.7 * alter.value)
        grundumsatz.innerHTML = lastResult.toFixed(2);
    } 
    let Kilojoule = lastResult * activity.value
    gesamtumsatz.innerHTML = Kilojoule.toFixed(2)
    
    kj.innerHTML = (Kilojoule * 4.18).toFixed(2)
}