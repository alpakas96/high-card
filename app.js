let suits = ["clubs", "spades", "hearts", "diamonds"]
let colors = ["black", "red"]
let shuffledDeck = []
let deck = [];


class card {
    constructor(number, suit, color) {
        this.number = number; 
        this.suit = suit; 
        this.color = color; 
    }
}

//WORKING -- RETURNS AN ARRAY OF CARDS BASED ON THE CARD CLASS
//CREATES 56 CARDS INSTEAD OF 52
function newDeck ( ) {

        //THIS FOR LOOP CREATES THE BLACK CARDS: CLUBS AND SPADES
        //the j loop controls the suit
        for (j = 0; j <= 1; j++) {
            //the i loop controls the number (face value)
            for (i = 2; i <=14; i++) {
                const newCard = new card (i, suits[j], "black" ); 
                deck.push(newCard); 
            }
        }

        //THIS FOR LOOP CREATES THE RED CARDS: HEARTS AND DIAMONDS
        //the j loop controls the suit
        for (j = 2; j <= 3; j++) {
            //the i loop controls the number (face value)
            for (i = 2; i <=14; i++) {
                const newCard = new card (i, suits[j], "red" ); 
                deck.push(newCard); 
            }
        }
     return deck;
}


// this function randomizes the deck array created by the newDeck function
function shuffle(newDeck) {
    while (newDeck.length > 0) {
        let x = Math.floor(Math.random( ) * newDeck.length); 
        shuffledDeck.push(newDeck[x]);
        //this splice removes the card from newDeck so that it is not duplicated in the shuffledDeck
        newDeck.splice(x, 1);
    } 
    return shuffledDeck; 
}

// console.log(newDeck()); 
// shuffle(newDeck());
// console.log(shuffledDeck.length);

console.log(shuffle(newDeck()).length)
