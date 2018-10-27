let symbol = Symbol("debug");
console.log(symbol);
console.log(typeof symbol);

let anotherSymbol = Symbol("debug");
console.log(symbol == anotherSymbol);
console.log(symbol === anotherSymbol);

let obj = {
    name: "Andrej",
    [symbol]: 32
};

console.log(obj);
console.log(obj[symbol]);
console.log(obj.hasOwnProperty(symbol));

for (let item in obj) {
    console.log(item);
}

let symbol0 = Symbol("age");
let symbol1 = Symbol.for("age");
let symbol2 = Symbol.for("age");
console.log(symbol1 === symbol2);

let person = {
    name: "Andrej",
    age: 40
};

function makeAge(person) {
    let ageSymbol = Symbol.for("age");
    person[ageSymbol] = 27;
}

makeAge(person);
console.log(person[symbol2]);
console.log(person[symbol0]);
console.log(person["age"]);
console.log(person);

class Person {

}

let pers = new Person();
console.log(pers.toString());

Person.prototype[Symbol.toStringTag] = "Person";

console.log(pers.toString());

let numbers = [1, 2, 3];
console.log(numbers + 1);
numbers[Symbol.toPrimitive] = function () {
    return 999;
};
console.log(numbers + 1);
