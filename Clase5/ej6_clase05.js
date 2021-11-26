/* Ejercicio 6 - Clase 5 (Isaya Alexis)
Dado un arreglo de números enteros, encuentre la menor suma 
posible entre ellos */

var minSum = [7, 4, 2, 3];

function obtenerMinimo(arreglo){
    var min = minSum[0]; //El minimo por el momento es el primer elemento de nuestro array
    for(i=1; i<minSum.length; i++){  //empezamos desde la 2da posicion ya que el primero se deduce ser el menor hasta el momento 
        if(minSum[i] < min){   //preguntamos si el proximo elemento de nuestro array (posicion i) es menor que el min
        min = minSum[i]   // si se cumple la condicion reemplazamos el valor de min por el valor que se encuentra en nuestro array en la posicion i 
        }
    }

    console.log("Numero menor: ", min);
    posicion_min = minSum.indexOf(min);

    minSum.splice(posicion_min,1);
    //console.log("Su posicion ", posicion_min);
    const nuevoArreglo = minSum.slice(0);

    //return nuevoArreglo;
    return min;
};

//nuevoArreglo1 = obtenerMinimo(minSum);
//nuevoArreglo2 = obtenerMinimo(nuevoArreglo1);
min1 = obtenerMinimo(minSum);
min2 = obtenerMinimo(minSum);
var suma = min1 + min2;
console.log("La suma de ambos es: ", suma);