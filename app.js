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
function newDeck ( ) {

        //THIS FOR LOOP CREATES THE BLACK CARDS: CLUBS AND SPADES
        //the j loop controls the suit
        for (j = 0; j <= 1; j++) {
            //the i loop controls the number (face value)
            for (i = 0; i <=13; i++) {
                const newCard = new card (i, suits[j], "black" ); 
                deck.push(newCard); 
            }
        }

        //THIS FOR LOOP CREATES THE RED CARDS: HEARTS AND DIAMONDS
        //the j loop controls the suit
        for (j = 2; j <= 3; j++) {
            //the i loop controls the number (face value)
            for (i = 0; i <=13; i++) {
                const newCard = new card (i, suits[j], "red" ); 
                deck.push(newCard); 
            }
        }
     return deck;
 
}


    // this function randomizes the deck array created by the newDeck function
    function shuffle(newDeck) {
        for (i = 0; i <= newDeck.length; i++) {
            let x = Math.floor(Math.random( ) * newDeck.length); 
            shuffledDeck.push(newDeck[x]);
        } 
    }

// console.log(newDeck()); 
shuffle(newDeck())
console.log(shuffledDeck);