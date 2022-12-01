//declaring some arrays for our deck related functions
let suits = ["clubs", "spades", "hearts", "diamonds"]
let colors = ["black", "red"]
let shuffledDeck = []
let deck = [];
let player1Hand = []; 
let player2Hand = []; 

//creating a class for the cards, which are objects stored in an array 
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

//dealing function which creates two arrays of three card objects each 
function deal(deck) {
    //setting up a loop that will give us 3 cards in each hand
    for (i = 0; i <= 2; i ++) {
        let x = Math.floor(Math.random( ) * deck.length); 
        player1Hand.push(deck[x]);
        //this splice removes the card from the deck so that it is not duplicated in the into the other player's hand
        deck.splice(x, 1);
        let y = Math.floor(Math.random( ) * deck.length); 
        player2Hand.push(deck[y]);
    }
    console.log(player1Hand); 
    console.log(player2Hand);
}

//passing a shuffled deck to the deal function- it's just referred to as deck in the function for simplicity
deal(shuffle(newDeck())); 
