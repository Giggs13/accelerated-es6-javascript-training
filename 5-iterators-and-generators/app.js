let array = [1, 2, 3];

console.log(typeof array[Symbol.iterator]);

let it = array[Symbol.iterator]();
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

array[Symbol.iterator] = function () {
    let nextValue = 10;
    return {
        next: function () {
            nextValue++;
            return {
                done: nextValue <= 13 ? false : true,
                value: nextValue
            }
        }
    }
};

let it2 = array[Symbol.iterator]();
console.log(it2);
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

array.forEach(function (value) {
    console.log(value);
});

let person = {
    name: "Andrej",
    hobbies: ["sports", "cookies", "books"],
    [Symbol.iterator]: function () {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function () {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length,
                    value: value
                };
            }
        };
    }
};

for (let value of person) {
    console.log(value);
}

function* select() {
    yield "Andrej";
    yield "Kira";
    yield "Lija";
}

let iter = select();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (let value of select()) {
    console.log(value);
}

let family = {
    [Symbol.iterator]: select
};

for (let value of family) {
    console.log(value);
}

function* gen(maxNumber) {
    for (let i = 0; i < maxNumber; i++) {
        try {
            yield i;
        } catch (e) {
            console.log(e);
        }
    }
}

let genIt = gen(5);
console.log(genIt.next());
console.log(genIt.next());
console.log(genIt.throw("An error occured!"));
// console.log(genIt.return("A strange value!"));
console.log(genIt.next());
console.log(genIt.next());
console.log(genIt.next());
