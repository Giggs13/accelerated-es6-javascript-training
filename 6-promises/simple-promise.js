"use strict";

function simplePromiseFunction(condition, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (condition) {
                resolve("Success!");
            } else {
                reject("Error!");
            }
        }, timeout);
    });
}

console.log("Before promise");

simplePromiseFunction(true, 3000)
    .then(data => console.log(data))
    .catch(error => console.log(error));

simplePromiseFunction(false, 5000)
    .then(data => console.log(data))
    .catch(error => console.log(error));

console.log("After promise");
