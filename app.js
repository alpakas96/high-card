//declaring some arrays for our deck related functions
let suits = ["clubs", "spades", "hearts", "diamonds"]
let colors = ["black", "red"]
let shuffledDeck = []
let deck = [];
let player1Hand = []; 
let player2Hand = []; 
let player1HighCard; 
let player2HighCard; 

//Declaring these variables to manipulate the dom 
let results = document.querySelector('.results'); 
let player1Score = document.querySelector(`.player1Score`); 
let player2Score = document.querySelector(`.player2Score`); 
let draws = document.querySelector(`.draws`);

let a = 0; 
let b = 0; 
let c = 0; 

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

// WORKING will get the highest number from each hand, and then compare them to determine the winner
function compareHands( ) {

    player1HighCard = Math.max(player1Hand[0].number, player1Hand[1].number, player1Hand[2].number); 
    player2HighCard = Math.max(player2Hand[0].number, player2Hand[1].number, player2Hand[2].number); 

    if (player1HighCard > player2HighCard){
        for (let i = 0; i <= player1Hand.length - 1; i++) {
            if (player1Hand[i].number == player1HighCard) {
                results.textContent = `Player 1  won with a ${player1Hand[i].color} ${player1Hand[i].number} of ${player1Hand[i].suit}.`
                a = a + 1;
                player1Score.textContent = a; 
            }
        }
    }

    if (player1HighCard < player2HighCard){
        for (let i = 0; i <= player2Hand.length - 1; i++) {
            if (player2Hand[i].number == player2HighCard) {
                results.textContent = `Player 2  won with a ${player2Hand[i].color} ${player2Hand[i].number} of ${player2Hand[i].suit}.`
                b = b+1; 
                player2Score.textContent = b;
            }
        }      
    }

    //this is incase of ties
    if (player1HighCard == player2HighCard) {
        for (let i = 0; i<= 2; i++) {
            if (player1Hand[i].number == player1HighCard && player2Hand[i].number == player2HighCard) {
                results.textContent = `It's a tie. Player 1's highcard is a ${player1Hand[i].color} ${player1Hand[i].number} of ${player1Hand[i].suit}, and Player 2's highcard is a ${player2Hand[i].color} ${player2Hand[i].number} of ${player2Hand[i].suit}.`
                c = c +1; 
                draws.textContent = c; 
            }
        }
        
    }
}

//this creates two random hands as two different arrays holding 3 objects (the cards) each
deal(shuffle(newDeck( )));
//this compares the hands and determines the winner
compareHands();




