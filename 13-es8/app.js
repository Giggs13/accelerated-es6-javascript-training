"use strict";

class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

let person = new Person("Andrej", 32, "mail");

console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));
console.log("--------------------------------------");

// iterate through key-value gracefully
for (const [key, value] of Object.entries(person)) {
    console.log(`${key} ${value}`);
}
console.log("--------------------------------------");

// Or, using array extras
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
});
console.log("--------------------------------------");

console.log("Andrej".padStart(11, "+").padEnd(15, "-"));
console.log("--------------------------------------");

let descriptor = Object.getOwnPropertyDescriptors(person);
console.log(descriptor);
console.log(descriptor.name);
console.log(descriptor.none);

console.log("--------------------------------------");
let arr = [
    1,
    2,
    3,
];

console.log(arr);
console.log(arr.length);