//Codigo condicional

function comer(tiempo) {
    if (tiempo === 'frio'){
        console.log('Pastas');
    } else if (tiempo === 'calor'){
        console.log('Helado');
    }
}

comer('frio');


//Sintaxis, if: el if es una condicional, que dentro de las () siempre se resuelve con un true, en caso contrario salta al else donde esta la otra sentencia que casi siempre seria el false. Aca vemos que dependiendo el tiempo hay diferente comida si hace frio devuelve pastas, en caso contrario, si hace calor devuelve helado

