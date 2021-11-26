/* Ejercicio 3 - Clase 1 (Isaya Alexis)
Crear una función que reciba dos parámetros. Un 
número y un string (texto). Luego debe repetir ese string tantas 
veces como lo diga el número recibido */

function repetidor(num, texto){
    for (let index = 0; index < num; index++) {
        console.log(texto);
  
    }
}
var num = 4;
var texto = "texto";
repetidor(num, texto);
