class Pet {
    type
    race
    name
    color 
    size

    constructor (petType, petRace, petName, petColor, petSize){
        this.type = petType;
        this.race = petRace;
        this.name = petName;
        this.color = petColor;
        this.size = petSize;
    }
}

let dog = new Pet("perro", "caniche", "felipe", "negro", "mediano")
console.log(dog)
console.log(dog.race)

const person = {
    name: 'alex isaya',
    age: 25,
    work: 'nose',
}

class Person {
    name
    age
    work
    constructor(name, age, work){
        this.name = name;
        this.joker;
        this.work = work;
    }
}
const person2 = new Person('alex isaya', 25, work);
person=lastname = 'isaya';
