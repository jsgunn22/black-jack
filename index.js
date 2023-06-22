const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

document.querySelector("#shuffleDeck").addEventListener("click", shuffleDecks);
document.querySelector("#hit").addEventListener("click", hitMe);

var shuffledDeck = [];
var dealersHand = [];
var playersHand = [];

// deals a single card to whichever players hand array is fed in
function singleCard(hand) {
  hand.push(shuffledDeck.shift());
}

// called to reprint hand whenever a card is dealt
function printHand(hand, id) {
  var temp = [];
  for (let i = 0; i < hand.length; i++) {
    temp.push(hand[i].face + hand[i].suit + " ");
  }
  document.getElementById(id).innerHTML = temp;
}

// called to repring total - string is the id of the dom object to be updated
function getTotal(hand, id) {
  var temp = [];

  for (let i = 0; i < temp.length; i++) {
    temp.pop();
  }

  for (let i = 0; i < hand.length; i++) {
    temp.push(hand[i].value);
  }

  total = temp.reduce((a, b) => {
    return a + b;
  });

  if (temp.includes(1) && total + 10 <= 21) {
    total = total + 10;
  } else {
    total = total;
  }

  document.getElementById(id).innerHTML = total;
}

// BUTTON OPERATIONS

function shuffleDecks() {
  shuffledDeck = []; // this clears the array on a new shuffle
  var sevenDecks = [];

  // creates seven decks to fill the sevenDecks array
  for (let d = 0; d < 7; d++) {
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        sevenDecks.push({
          deckNumber: d,
          suit: suits[s],
          value: values[v],
          face: face[v],
        });
      }
    }
  }

  // shuffles sevenDecks and pushes each card to shuffledDecks
  var temp = [];
  while (shuffledDeck.length < 364) {
    temp.push(
      sevenDecks.splice(Math.floor(Math.random() * sevenDecks.length - 1), 1)[0]
    );
    shuffledDeck.push(temp.pop());
  }
  dealCards();
}

// This section deals the initial hand of a new game
document.querySelector("#dealCards").addEventListener("click", dealCards);

function dealCards() {
  playersHand = [];
  dealersHand = [];

  while (playersHand.length + dealersHand.length < 4) {
    singleCard(playersHand);
    singleCard(dealersHand);
  }

  printHand(playersHand, "playersHand");
  printHand(dealersHand, "dealersHand");
  getTotal(playersHand, "playerTotal");
  getTotal(dealersHand, "dealerTotal");
}

// adds a single card to player and re prints hand
function hitMe() {
  singleCard(playersHand);
  getTotal(playersHand, "playerTotal");
  printHand(playersHand, "playersHand");
}
