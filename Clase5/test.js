//arreglos
const array = [0, 1, 2, 3, 4];
const array2 = ['manzana', 'pera', 'banana', 'melon'];

/*console.log(array[3]);

array.push(3); //agrega un elemento al final
console.log(array);

let last = array2.pop(); //elimina el ultimo elemento
                        //y lo retorna a la variable last
console.log(array2);
console.log(last);

let first = array2.shift();//elimina el primer elemento
//y lo retorna a la variable first
console.log(first); 

array.unshift('naranja'); // agrega un elemento al inicio*/

//slice retorna una copia de porcion del array
/*const newArray = array.slice(-1);
console.log(array);
console.log(newArray);*/
//splice
/*let newArray2 = array2.splice(1,1,'z');
console.log(array2);
console.log(newArray2);*/

//indexOf, encuentra un elemento
/*console.log(array2.indexOf('melon'));
console.log(array2.indexOf(1));*/

//filter
const newArray3 = array.filter(function(item){
    return item > 1;
});
console.log(newArray3);