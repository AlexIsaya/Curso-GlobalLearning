/* Ejercicio 7 - Clase 5 (Isaya Alexis)
Dado un arreglo de números enteros, encuentre el mayor producto 
posible dado a partir de números adyacentes */

var arreglo = [500,-5,10,-2,24,-1,10];
// hay error, ya que igualé may_prod a 0

function obtenerMayorProductoAdyacente(arreglo){

    var may_prod = 0;
    for(i=0; i<arreglo.length; i++){

        may_prod1 = (arreglo[i])*(arreglo[i+1]);  

        if(may_prod1 >  may_prod){   
            may_prod = may_prod1; 
        }
    }
    return may_prod;
};

var mayor_producto = obtenerMayorProductoAdyacente(arreglo);
console.log("El mayor producto entre adyacentes resulta: ", mayor_producto);

