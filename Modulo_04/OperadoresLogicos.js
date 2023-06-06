//&&: Este operador te permite conjugar 2 o mas condiciones al mismo tiempo

function mayorYmenor(num){
    if(num > 5 && num < 10) console.log(true);
    else console.log(false);
}

mayorYmenor(2);
mayorYmenor(7);

//Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true


// ||: Este operador te permite conjugar 2 o mas condiciones, || quiere decir "or" o en español "o"

function or(str){
    if(str === 'Hola, probando or' || 'Hola, probando o'){
        console.log(true);
    }
}

or('Hola, probando or')


//Lo mismo para la declaración ||. Si la primera expresión es verdadero, la segunda no se evaluará porque solo debe haber una declaración verdadera para cumplir con los requisitos del operador. 

//!: Este operador te permite verificar condiciones opuestas.

function mayorDeEdad(x) {
    if(x >= 18){
        console.log('Es mayor de edad, tiene permiso');
    } else if(x != 18){
        console.log('Es menor de edad, no tiene permiso');
    }
}

mayorDeEdad(18);
mayorDeEdad(16);

//Utiliza paréntesis. Como vimos en el segundo ejemplo de la negación !, utilizamos paréntesis para evaluar PRIMERO lo que estaba dentro de ellos, y luego aplicamos la negación. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes que toda la expresión en conjunto.


