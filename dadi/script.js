const button1 = document.querySelector(`.gira`);
let utente;
let computer;
button1.addEventListener(`click`, function() {
    utente = Math.floor(Math.random() * 6) + 1;
    computer = Math.floor(Math.random() * 6) + 1;
    document.querySelector(`.utente`).innerHTML = `${utente}`;
    document.querySelector(`.computer`).innerHTML = `${computer}`;

    if (utente > computer) {
        document.querySelector(`.risultato`).innerHTML = `Complimenti hai Vinto!`;
    } if (utente == computer) {
        document.querySelector(`.risultato`).innerHTML = `Parità!`;
    } if (utente < computer) {
        document.querySelector(`.risultato`).innerHTML = `Hai perso!`;
    }
})