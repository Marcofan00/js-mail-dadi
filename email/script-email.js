const array = ["marco@festa.it", "boolean@festa.it", "mario@festa.it", "luigi@festa.it", "martina@festa.it", "sara@festa.it", "michele@festa.it"];
console.log(array);
let indicatore = 0;

const button = document.querySelector(`.verifica`);
button.addEventListener(`click`, function() {
    const email = document.getElementById(`e-mail`).value;
    if (email.includes("@") == false) {
        alert(` E-mail non valida,deve obbligatoriamente contenere [@]`)
    }
    else {
        for(let i = 0; i < array.length; i++) {
            if (email === array[i]) {
                document.querySelector(`.messaggio`).innerHTML = `E-mail presente nella lista`;
                indicatore = 1;

            }
        }
    }
    if (indicatore == 0) {
        document.querySelector(`.messaggio`).innerHTML = `E-mail non presente nella lista`;
    }
})