let person = {
    name: "Andrej",
    age: 32
};

let handler = {
    get: function (target, property) {
        return property in target ? target[property] : 'Non existant';
    },
    set: function (target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

let proxy = new Proxy(person, handler);
proxy.name = "Kira";

console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.gender);
console.log("------------------------------");
let proxy2 = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxy2);
console.log(person.gender);
console.log("------------------------------");

function log(message) {
    console.log(`Log entry created, message: ${message}`);
}

log('Hello!');

let functionHandler = {
    apply: function (target, thisArg, argumentsList) {
        if (argumentsList.length === 1) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};

let functionProxy = new Proxy(log, functionHandler);
functionProxy('Hello!!!');
functionProxy('Hello!!!', 7);
console.log("------------------------------");

let human = {
    name: "Andrej"
};

let humanHandler = {
    get: function (target, property) {
        return Reflect.get(target, property);
    }
};

let {proxy: humanProxy, revoke: humanRevoke} = Proxy.revocable(human, humanHandler);

console.log(humanProxy.name);
humanRevoke();
console.log(humanProxy.name);
