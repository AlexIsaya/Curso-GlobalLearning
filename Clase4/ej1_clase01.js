/* Ejercicio 1 - Clase 1 (Isaya Alexis)
Crear una función que reciba un número como 
parámetro y devuelva “par” o “impar” dependiendo del número que 
tome ese parámetro */

function parOimpar(numero){
    if (numero % 2 == 0){
        console.log("Es par")
    } 
    else{
        console.log("Es impar")
    }
}
parOimpar(7);

