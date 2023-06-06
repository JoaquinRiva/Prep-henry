//Los bucles nos permiten realizar acciones repetitivas de manera sencilla

let suma = 0;
for (let i=0 ; i<10 ; i++){
    suma = suma +1;
    console.log(suma);
}

//Sintaxis: dentro del parentisis vamos a poner la variable primero, el segundo valor es una condicion de cumplimiento, mientras esta condicion sea verdadera el bucle seguira ejecutandose, y por ultimo va a ir lo que debe suceder con la variable cada vez que se termina de ejecutarse cada ciclo.

//El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado. 

while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };