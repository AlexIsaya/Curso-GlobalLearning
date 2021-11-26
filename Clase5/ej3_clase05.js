/* Ejercicio 3 - Clase 5 (Isaya Alexis)
Teniendo un arreglo numérico, tenemos que sumarle un 
número (por parámetro) a cada elemento de nuestro arreglo */

const arreglo = [1, 2, 3, 4, 5];

const nuevoArreglo = arreglo.map(function(item) {
    valor = 10;
    return (item + valor);
});
console.log("Arreglo original: ");
console.log(arreglo);
console.log("Arreglo modificado: ");
console.log(nuevoArreglo);
