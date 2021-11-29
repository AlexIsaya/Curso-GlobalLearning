/*function test() {
    return 'hello world'
}

const test2 = (mensaje) => {
    return mensaje;
}

const test3 = (mensaje) => mensaje;

console.log('this is the result for function %s', test());
console.log('this is the result for arraw function %s', test2('holaa'));


const person1 = personGenerator('fede', 'diaz', 31);
const [var1, var2, ...var4] = [10,20,30,40];

console.log(var1);
console.log(var4)
*/

const age = 17;
/*let canDrive;
if(age > 16){
    canDrive='yes'
}else{
    canDrive='no'
}*/

let canDrive = age > 16 ? showMessage() : 'no';
//esto reemplaza al if else clasico

console.log(canDrive)

function showMessage() {
    return 'yes!'
}