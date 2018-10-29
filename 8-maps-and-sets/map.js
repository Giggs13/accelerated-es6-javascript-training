let cardAce = {
    name: "Ace of Spades"
};

let cardKing = {
    name: "King of Clubs"
};

let deck = new Map();
deck.set("as", cardAce);
deck.set("ks", cardKing);

// console.log(deck);
// console.log(deck.size);
// console.log(deck.get("ks"));

// deck.delete("ks");
// console.log(deck.size);
// deck.clear();
// console.log(deck.size);

for (let key of deck.keys()) {
    console.log(key);
}
console.log("------------");
for (let value of deck.values()) {
    console.log(value);
}
console.log("------------");
for (let [key, value] of deck.entries()) {
    console.log(key + ": " + value);
}
console.log("------------");
for (let entry of deck.entries()) {
    console.log(entry);
    console.log(entry[0] + ": " + entry[1]);
}
