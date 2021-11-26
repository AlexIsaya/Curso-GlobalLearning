/* Ejercicio 2 - Clase 5 (Isaya Alexis)
Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3 */

const arreglo1 = ['primer', 'segundo', 'tercero'];
const arreglo2 = ['primer', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'];

function masDeCinco(arreglo2){
    if(arreglo2.length > 5){
        console.log("Este arreglo tiene más de 5 elementos");
        arreglo2.pop();
        arreglo2.pop();
        arreglo2.pop();
        console.log("Se eliminarán los últimos 3 elementos, el arreglo modificado quedará así: ");
        console.log(arreglo2);
    }
    else{
        console.log("Este arreglo tiene menos de 5 elementos");
    }
}

masDeCinco(arreglo2);