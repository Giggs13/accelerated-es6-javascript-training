function run() {
    console.log(age);
}

let age = 1;
run();
//let age;
age = 32;
console.log(age);
//let age;

/*(function f1() {
    console.log(this);
})();

(() => console.log(this))();

var f2 = () => console.log(this);
f2();*/

console.log("---------------------------     FUNCTIONS AND DEFAULT PARAMETERS     ---------------------------");

function isEqualTo(number = 0, compare = number * 1) {
    return number === compare;
}

console.log(isEqualTo(10, 11));
console.log(isEqualTo(10));
console.log(isEqualTo(0));
console.log(isEqualTo());

console.log("---------------------------     OBJECT LITERAL EXTENSIONS     ---------------------------");
let name = "Andrej";
let ageFieldName = "age";
let obj = {
    name,
    [ageFieldName]: 32,
    oldGreet: function () {
        console.log(this.name);
    },
    "modern greet"() {
        console.log(this.name);
    }
};
name = "Unnamed";
console.log(name);
console.log(obj);
obj.oldGreet();
obj["modern greet"]();
console.log(obj.age);
console.log(obj[ageFieldName]);

console.log("---------------------------     THE REST OPERATOR     ---------------------------");
let numbers = [1, 2, 3, 4, 5];

function sumUp(...toAdd) {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(numbers);
console.log(...numbers);
console.log(sumUp(numbers));
console.log(sumUp(...numbers));
console.log(sumUp(10, 20, 30));

console.log("---------------------------     THE FOR-OF LOOP     ---------------------------");
for (let item of numbers) {
    console.log(item);
}

console.log("---------------------------     DESTRUCTURING     ---------------------------");
let a = [1, 2, 3, 4];
let [a1, ...a2] = a;
let [a3, a4, a5, a6, a7 = "default", a8] = a;
let [, , a9, a10] = a;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

let x = 2, y = 3;
[x, y] = [y, x];
console.log(x);
console.log(y);

let [c, v] = [77, 88];
console.log(c);
console.log(v);

let obj_ = {
    name_: "Andrej",
    age_: 32
};

let {name_: naming, age_} = obj_;
console.log(naming, age_);
