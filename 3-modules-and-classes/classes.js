class Helper {
    static logInUpper(message) {
        console.log(message.toUpperCase());
        //console.log(this);
    }
}

Helper.logInUpper("gRaIt =))");

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    greet() {
        console.log(`Hello, my name is ${ this.name }`);
    }
}

class Human extends Person {
    constructor(name, age) {
        super(name);
        this._age = age;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get age() {
        return this._age;
    }

    greet() {
        super.greet();
        console.log(` and I'm ${ this.age } years old.`);
        //console.log(this);
    }
}

let person = new Person("Andrej");
console.log(person.__proto__ === Person.prototype);
let human = new Human("Andrej", 32);
console.log(human.__proto__ === Human.prototype);

console.log(person);
console.log(person.name);
person.greet();

console.log(human);
console.log(human.age);
console.log(human.gender);
human.gender = "male";
console.log(human.gender);
human.greet();

class ConvertableArray extends Array {
    convert() {
        let result = [];
        this.forEach(value => result.push("Converted value" + value));
        return result;
    }
}

let array = new ConvertableArray();
array.push(1);
array.push(2);
array.push(3);

console.log(array.convert());
