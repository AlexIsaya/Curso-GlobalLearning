/* Ejercicio 1 - Clase 7 (Isaya Alexis)
Pensemos que tenemos que hacer un juego. Y lo primero que 
necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe” */

class Heroe {
    nombre
    posicion
    vida
    dano
    experiencia

    constructor (nombre, posicion, vida, dano, experiencia){
        this.nombre = nombre;
        this.posicion = posicion;
        this.vida = vida;
        this.dano = dano;
        this.experiencia = experiencia;
    }
}

let heroe_Alex = new Heroe('Alexis Isaya', '00', 100, 5, 0);
console.log(heroe_Alex);
