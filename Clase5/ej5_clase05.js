/* Ejercicio 5 - Clase 5 (Isaya Alexis)
Hay un arreglo con varios números donde todos son iguales 
excepto uno. Haga una función que lo identifique */

//Tengo una duda con el ejercicio 5, debo resolverlo especificamente 
//para el arreglo que da ahi ([1,1,1,1,2,1,1,1]) o tiene que ser gral.?

const arreglo = [1, 1, 1, 1, 2, 1, 1, 1];

const dif = arreglo.find(function(item){
    return item != 1;
});

posicion_dif = arreglo.indexOf(dif);

console.log("El elemento diferente es: ", dif);
console.log("Su posicion en el arreglo es: ", posicion_dif);