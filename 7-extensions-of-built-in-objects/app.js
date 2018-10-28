/*let obj1 = {
    a: 1
};

let obj2 = {
    b: 2
};

Object.assign(obj1, obj2);
console.log(obj1);*/

/*class Obj1 {
    constructor() {
        this.a = 1;
    }
}

class Obj2 {
    constructor() {
        this.b = 2;
    }
}

let obj1 = new Obj1();
let obj2 = new Obj2();

let obj = Object.assign(obj1, obj2);
console.log(obj);
console.log(obj instanceof Obj1);
console.log(obj instanceof Obj2);
console.log(Object.getPrototypeOf(obj));*/

let array1 = Array(5);
console.log(array1);
let array2 = Array(5, 6);
console.log(array2);
let array3 = Array.of(5, 6, 7);
console.log(array3);
let array4 = Array.from(array3, value => value * 2);
console.log(array4);
array4.fill(100, 1, 2);
console.log(array4);
console.log(array4.find(value => value % 2 === 0));

let inventory = [
    {name: "apples", quantity: 2},
    {name: "bananas", quantity: 0},
    {name: "cherries", quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === "cherries";
}

console.log(inventory.find(findCherries));

console.log("---------------------");
console.log(array3);
console.log(array3.copyWithin(1, 0));
console.log(array3);


let iter = array3.entries();

for (let element of iter) {
    console.log(element);
}
