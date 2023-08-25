/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/


for (let i = 0; i <= 100; i++) {
    
    let value;

    if (i % 3 == 0 && i % 5 != 0) {

        value = 'Fizz';
        console.log(value);

    } else if (i % 5 == 0 && i % 3 != 0) {

        value = 'Buzz';
        console.log(value);

    } else if (i % 3 == 0 && i % 5 == 0) {

        value = 'FizzBuzz';
        console.log(value);

    } else {
        
        value = i;
        console.log(value);

    }

}