// anonymous objects = Objects without a name
//          not directly referenced
//          less syntax. no need for unique names

// - we do not have a directs access

class Card{
    constructor(value, suit){
        this.value = value
        this.suit = suit

    }
}








let cards = [new Card('A', 'Hearts'),
            new Card('A', 'Spades'),
            new Card('A', 'Dimonds'),
            new Card('A', 'Clubs'),
            new Card('2', 'Hearts'),
            new Card('2', 'Spades'),
            new Card('2', 'Dimonds'),
            new Card('2', 'Clubs')];


/*
let card1 = new Card('A', 'Hearts');
let card2 = new Card('A', 'Spades');
let card3 = new Card('A', 'Dimonds');
let card4 = new Card('A', 'Clubs');

let card5 = new Card('2', 'Hearts');
let card6 = new Card('2', 'Spades');
let card7 = new Card('2', 'Dimonds');
let card8 = new Card('2', 'Clubs');
*/

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8]

// console.log(card1.value + card1.suit)


console.log(cards[0].value + cards[1].suit)

cards.forEach(card => console.log(`${card.value} ${card.suit}`))