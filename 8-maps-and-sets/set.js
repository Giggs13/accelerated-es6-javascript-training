let set = new Set([1, 1, 1, 2, 3]);
set.add(7);
set.delete(2);
// set.clear();

for (value of set.values()) {
    console.log(value);
}

console.log(set.has(0));
console.log(set.has(1));