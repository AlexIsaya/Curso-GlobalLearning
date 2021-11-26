/*Ejercicio 6 - Clase 7 (Isaya Alexis) 
Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre 
y país de el primer desarrollador de cierto lenguaje que se haya inscripto. */

const list = [
    {firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript'},
    {firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python'},
    {firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: "Python"}
  ];

function primerDev(language){

    let dev = list.find(buscar => buscar.language == language);

    if(dev)
    {
      console.log(dev.firstName+" from "+dev.country+ " was the first " +dev.language+ " developer in the conference");
    } 
    else
    {
      console.log ("There are no "+language+ " developers in the conference");
    }
}

primerDev("Python");