/* Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* Istruzioni */

/*Creiamo la griglia*/
//Crea un container su html
//Seleziona il container con queryselector
//Lo inseriamo in una variabile
const containerEl = document.querySelector('.container');
//Seleziona il pulsante
//Inseriscilo in una variabile
const btn = document.querySelector('button');
//Impostiamo una costante per contare fino a 100
let maxCellNumber = 100;
//Contiamo da 1 a 100 con un ciclo for
for (let i = 1; i <= maxCellNumber; i++) {
    //Creiamo il markup e lo inseriamo in una variabile
    const cellMarkUp = `<div class="cell">${i}</div>`;
    containerEl.insertAdjacentHTML('beforeend', cellMarkUp);
}
//Aggiungiamo un eventlistener alle celle per farle colorare di azzurro



/*Pulsante*/
//Crea un pulsante su html
//Seleziono il pulsante con un queryselector su js
//Inserisco il pulsante in una variabile

