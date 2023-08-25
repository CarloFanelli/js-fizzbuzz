/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
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
        // console.log(value); - debug
        liDOM.classList.add('m-2','bg-info','w_square','d-flex','justify-content-center','align-items-center','rounded-circle')
        singleNumberDOM.classList.add('text-white')


    } else if (i % 5 == 0 && i % 3 != 0) {

        value = 'Buzz';
        // console.log(value); - debug
        liDOM.classList.add('m-2','bg-success','w_square','d-flex','justify-content-center','align-items-center','rounded-circle')
        singleNumberDOM.classList.add('text-white')
        

    } else if (i % 3 == 0 && i % 5 == 0) {

        value = 'FizzBuzz';
        // console.log(value); - debug
        liDOM.classList.add('m-2','bg-danger','w_square','d-flex','justify-content-center','align-items-center','rounded-circle')
        singleNumberDOM.classList.add('text-dark')
        

    } else {

        value = i;
        // console.log(value); - debug
        liDOM.classList.add('m-2','bg-white','w_square','d-flex','justify-content-center','align-items-center','rounded-circle')
        singleNumberDOM.classList.add('text-danger')
       

    }

    console.log(value);
    singleNumberDOM.append(value);
    listNumberDOM.append(liDOM);
    liDOM.append(singleNumberDOM);

}