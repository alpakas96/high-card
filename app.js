//declaring some arrays for our deck related functions
let suits = ["clubs", "spades", "hearts", "diamonds"]
let colors = ["black", "red"]
let shuffledDeck = []
let deck = [];
let player1Hand = []; 
let player2Hand = []; 
let player1HighCard; 
let player2HighCard; 

//UNCOMMENT THIS WHEN APP.JS IS FIXED: 
// let results = document.querySelector('.results'); 

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

//  WORKING -- this function randomizes the deck array created by the newDeck function
function shuffle(newDeck) {
    while (newDeck.length > 0) {
        let x = Math.floor(Math.random( ) * newDeck.length); 
        shuffledDeck.push(newDeck[x]);
        //this splice removes the card from newDeck so that it is not duplicated in the shuffledDeck
        newDeck.splice(x, 1);
    } 
    return shuffledDeck; 
}

// WORKING -- MUST RUN AS deal(shuffle(newDeck()));
// dealing function which creates two arrays of three card objects each 
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
    // console.log(player1Hand); 
    // console.log(player2Hand); 
}

// will get the highest number from each hand, and then compare them to determine 
function compareHands( ) {
    player1HighCard = Math.max(player1Hand[0].number, player1Hand[1].number, player1Hand[2].number); 
    player2HighCard = Math.max(player2Hand[0].number, player2Hand[1].number, player2Hand[2].number); 

    if (player1HighCard > player2HighCard){
        
        for (let i = 0; i <= player1Hand.length - 1; i++) {
            if (player1Hand[i].number == player1HighCard) {
                results.textContent = `Player 1  won with a ${player1Hand[i].color} ${player1Hand[i].number} of ${player1Hand[i].suit}.`
            }
        }
    }

    if (player1HighCard < player2HighCard){
        
        for (let i = 0; i <= player2Hand.length - 1; i++) {
            if (player2Hand[i].number == player2HighCard) {
                results.textContent = `Player 1  won with a ${player2Hand[i].color} ${player2Hand[i].number} of ${player2Hand[i].suit}.`
            }
        }
    }

    //this is incase of ties
    if (player1HighCard == player2HighCard) {
        results.textContent(`It's a tie. Player 1's highcard is a ${player1HighCard.color} ${player1HighCard.number} of ${player1HighCard.suit}, and Player 2's highcard is a ${player2HighCard.color} ${player2HighCard.number} of ${player2HighCard.suit}.`)
    }
}

function playGame() {
    deal(shuffle(newDeck( ))); 
    compareHands(); 
}

//this creates two random hands
deal(shuffle(newDeck()));




// have two scoreboard elements
// capture each in a variable 
// update the text of each element with the score based on the compareHands() function 



