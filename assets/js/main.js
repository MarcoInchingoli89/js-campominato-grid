/* Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* Istruzioni */
 
/*Griglia*/
//Crea un container su html
//Seleziona il container con queryselector
//Lo inseriamo in una variabile
const containerEl = document.querySelector('.container');
//Creiamo un div dove inseriremo le celle
const cellEl = document.createElement('div');
//Diamo la classe cell al nostro div
cellEl.className = 'cell';
//Inseriamo il div dentro al container
containerEl.append(cellEl);




/*Pulsante*/
//Crea un pulsante su html
//Seleziono il pulsante con un queryselector su js
//Inserisco il pulsante in una variabile

