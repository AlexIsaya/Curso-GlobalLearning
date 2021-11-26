/* Ejercicio 2 - Clase 1 (Isaya Alexis)
Crear una función que reciba un número y devuelva el 
numero opuesto */

function num_opuesto(numero){
    if (numero != 0){
        aux = numero*(-1);
        console.log(aux);
    } 
    else{
        console.log("El numero es 0! No tiene opuesto")
    }
}
num_opuesto(-8);
