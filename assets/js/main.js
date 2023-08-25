/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*/



//recupero e "collego" gli elementi dal DOM

const listNumberDOM = document.getElementById('listNumber');


// eseguo il ciclo e controllo la divisibilità, stampo direttamente nel DOM
for (let i = 1; i <= 100; i++) {

    // creo l'elemento list item che inserirò nel DOM e il titolo (spostato nel ciclo perché così ad ogni iterazione del for mi crea le due const)

    const liDOM = document.createElement('li');
    const singleNumberDOM = document.createElement('h3');

    let value;

    if (i % 3 == 0 && i % 5 != 0) {

        value = 'Fizz';
        // console.log(value);
        /* singleNumberDOM.append(value);
        liDOM.append(singleNumberDOM);
        listNumberDOM.append(liDOM); */

    } else if (i % 5 == 0 && i % 3 != 0) {

        value = 'Buzz';
        // console.log(value);
        /* singleNumberDOM.append(value);
        liDOM.append(singleNumberDOM);
        listNumberDOM.append(liDOM); */

    } else if (i % 3 == 0 && i % 5 == 0) {

        value = 'FizzBuzz';
        // console.log(value);
        /* singleNumberDOM.append(value);
        liDOM.append(singleNumberDOM);
        listNumberDOM.append(liDOM); */

    } else {

        value = i;
        // console.log(value);
        /* listNumberDOM.append(singleNumberDOM);
        liDOM.append(singleNumberDOM);
        singleNumberDOM.append(value); */

    }

    console.log(value);
    singleNumberDOM.append(value);
    listNumberDOM.append(liDOM);
    liDOM.append(singleNumberDOM);

}