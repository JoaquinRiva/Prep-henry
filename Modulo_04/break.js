//La declaración break se utiliza dentro de los Bucles For. Nos permite "romper" o finalizar el bucle con antelación si se cumple una condición específica.

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
       if (i == 3)
          break;
       i++;
    }
    return i * x;
 }
 