let cardAce = {
    name: "Ace of Spades"
};

let cardKing = {
    name: "King of Clubs"
};

let key1 = new String("as");
let key2 = new String("kc");

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

console.log(deck.get(key1));
console.log(deck.get(key2));