/* Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* Istruzioni */

/*Creiamo la griglia*/
//Crea un container su html
//Seleziona il container con queryselector
//Lo inseriamo in una variabile
const gridElement = document.querySelector('.container');
//Seleziona il pulsante
//Inseriscilo in una variabile
const buttonElement = document.querySelector('button');
//Numero massimo di celle per livello
const gridLevel = 100;
//Numero di celle per riga da inserire
const cellsPerRow = Math.sqrt(gridLevel);
/* console.log(cellsPerRow); */
//Variabile con il markup delle celle da inserire nella griglia
const cellMarkUp = document.createElement('div');
        cellMarkUp.className = 'cell';
        cellMarkUp.innerText = i;
//Aggiungiamo un eventListener al click del pulsante per generare la griglia
buttonElement.addEventListener('click', function () {
    /* console.log('Ho cliccato'); */
    //Ciclo un x numero di volte
    for (let i = 1; i <= gridLevel; i++) {
        //Inserisco il markup con la classe cell e i numeri inclusi nella variabile i all'interno del mio html
        const cellMarkUp = document.createElement('div');
        cellMarkUp.className = 'cell';
        cellMarkUp.innerText = i;
        gridElement.insertAdjacentElement("beforeend", cellMarkUp);
        
    }
    
})

cellMarkUp.addEventListener('click', function () {
    this.style.color = blue;
})

/* cellMarkUp.addEventListener('click', function () {
    cellMarkUp.style.color = aqua;
    console.log(cellMarkUp);
}) */

//Contiamo da 1 a 100 con un ciclo for
    //Creiamo il markup e lo inseriamo in una variabile
 
//Aggiungiamo un eventlistener alle celle per farle colorare di azzurro



/*Pulsante*/
//Crea un pulsante su html
//Seleziono il pulsante con un queryselector su js
//Inserisco il pulsante in una variabile

