class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I am ${ this.name }`);
    }

    greetWithArg(prefix) {
        console.log(`${ prefix } Hello, I am ${ this.name }`);
    }
}

let person = Reflect.construct(Person, ["Andrej"]);
console.log(person);
console.log(person instanceof Person);
console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) === Person.prototype);


function TopObject() {
    this.age = 32;
}

let person2 = Reflect.construct(Person, ["Andrej"], TopObject);
console.log(person2);
console.log(person2 instanceof Person);
console.log(person2 instanceof TopObject);
console.log(Reflect.getPrototypeOf(person2));
console.log(Reflect.getPrototypeOf(person2) === TopObject.prototype);
Reflect.setPrototypeOf(person2, Person.prototype);
console.log(Reflect.getPrototypeOf(person2));

Reflect.apply(person.greet, person, []);
Reflect.apply(person.greet, {}, []);
Reflect.apply(person.greet, {name: "Anna"}, []);
Reflect.apply(person.greetWithArg, person, ["..."]);

console.log("--------------------------------");

class Human {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

let human = new Human("Andrej", 32);
console.log(Reflect.has(human, "name"));
console.log(Reflect.get(human, "name"));
console.log(Reflect.has(human, "gender"));
console.log(Reflect.get(human, "gender"));
console.log(Reflect.set(human, "gender", "male"));
console.log(Reflect.has(human, "gender"));
console.log(Reflect.get(human, "gender"));

let mum = {
    _name: "Mum"
};
console.log(Reflect.get(human, "name"));
console.log(Reflect.get(human, "name"), mum);
console.log(human);
console.log(mum);
console.log(Reflect.set(human, "name", "Anna", mum));
console.log(mum);

console.log("--------------------------------");
console.log(Reflect.ownKeys(human));

/*console.log(Reflect.isExtensible(human));
Reflect.preventExtensions(human);
console.log(Reflect.isExtensible(human));*/


Reflect.defineProperty(human, "job", {
    value: "developer",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(human);
Reflect.deleteProperty(human, "job");
console.log(human);
