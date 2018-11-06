"use strict";

let async = Object.getPrototypeOf(async function () {
}).constructor;
console.log(async);
console.log("--------------------------------------");

function myAsyncFunction(condition, timeout, x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve(x * 2);
            } else {
                reject("Unexpected error");
            }
        }, timeout);
    });
}

console.log("Before async");

async function asyncCall() {
    console.log('before');
    let result1 = await myAsyncFunction(true, 3000, 2);
    console.log('first is done');
    let result2 = await myAsyncFunction(false, 5000, 3);
    console.log('second is done');
    let result3 = await myAsyncFunction(true, 2000, 4);
    console.log('third is done');

    return result1 + result2 + result3;
}

console.log('outside of async function');

asyncCall().then(value => console.log(value), error => console.log(error));