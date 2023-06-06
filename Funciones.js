function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(6);

//sintaxis, function: Palabra reservada, siempre se encuentra al principio ya que sentencia que lo siguiente es una funcion. sumaTres: le damos nombre a nuestra funcion. (x): Dentro del parentesis le damos un parametro, sirve para darle informacion a nuestra funcion. {}: Lo que va dentro de las llaves es el cuerpo de la funcion donde indicaremos lo que hara la funcion. 

//Diferentes formas de declarar una funcion

function sumaTres(x) {
    return x + 3;
}

//Segunda

var sumaTres = x; {
    return x + 3; 
}

//Tercera 

var sumaTres = (x) => {
    return x + 3;
  }


