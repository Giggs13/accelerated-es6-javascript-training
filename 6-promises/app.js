/*let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});

promise.then(value => console.log(value), value => console.log(value));*/

/*function waitASecond(seconds) {
    return new Promise((resolve, reject) => {
        console.log(seconds);
        if (seconds > 1) {
            reject("rejected");
        } else {
            setTimeout(() => {
                seconds++;
                resolve(seconds);
            }, 1000);
        }
    });
}

waitASecond(0)
    .then(waitASecond)
    .then(waitASecond)
    .then(waitASecond)
    .then(value => console.log(`final seconds: ${ value }`))
    .catch(error => console.log(error))
    .finally(() => console.log("finally"));*/

let promise1 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("Resolved 1!")
    }, 1000)
});
let promise2 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        //rejected("Rejected!")
        resolve("Resolved 2!")
    }, 2000)
});

/*Promise.all([promise1, promise2])
    .then(value => console.log(value))
    .catch(error => console.log(error));*/

Promise.race([promise1, promise2])
    .then(value => console.log(value))
    .catch(error => console.log(error));
