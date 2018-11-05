"use strict";

let async = Object.getPrototypeOf(async function () {
}).constructor;
console.log(async);
console.log("--------------------------------------");

function waitASecond(seconds) {
    return new Promise(resolve => {
        console.log("Begin of function waitASecond()");
        setTimeout(() => {
            seconds++;
            resolve(seconds);
        }, 1000);
        console.log("End of function waitASecond()");
    });
}

let result;

waitASecond(3000)
    .then(value => {
        result = value;
        console.log(`Final seconds from a function waitASecond(): ${ value }`)
    });

setTimeout(() => {}, 5000);
console.log(`Seconds are ${ result }`);
console.log("--------------------------------------");

/*
function myAsyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

async function asyncCall() {
    console.log('before calling');
    let result = await myAsyncFunction();
    console.log('after calling');
    return result;
}

asyncCall()
    .then(value => console.log(value));*/
