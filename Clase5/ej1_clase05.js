/* Ejercicio 1 - Clase 5 (Isaya Alexis)
Haga una función que siempre elimine al primer elemento del arreglo */

const arreglo = ['primer', 'segundo', 'tercero', 'cuarto'];

let first = arreglo.shift();

console.log("Arreglo modificado: ");
console.log(arreglo);
console.log("Elemento elminado: ", first);
