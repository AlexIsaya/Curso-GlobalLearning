/* Ejercicio 4 - Clase 5 (Isaya Alexis)
Haga una función que reciba un número y retorne un arreglo que 
tenga el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 0 hasta el 
número recibido -1 (0 a n-1) */

var arreglo = new Array();

function arreglador(numero){
    for (let index = 0; index <= (numero - 1); index++) {
        arreglo[index] = index;
        
    }
}

arreglador(5);
console.log(arreglo);