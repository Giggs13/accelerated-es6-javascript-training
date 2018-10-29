let key1 = new String("as");
let key2 = new String("kc");
let key3 = new String("as");
let key4 = new String("kc");
let key5 = new String("as");
let key6 = new String("kc");
let set = new WeakSet([key1, key2, key3, key4]);
set.add(key5);
set.delete(key6);
// set.clear();

console.log(set.has(key1));
console.log(set.has("kc"));