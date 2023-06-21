const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

document.querySelector("#shuffleDeck").addEventListener("click", shuffleDecks);

var shuffledDeck = [];
var dealersHand = [];
var playersHand = [];

function getTotal(hand) {
  var temp = [];

  for (let i = 0; i < temp.length; i++) {
    temp.pop();
  }
  // gets value from each card in hang and pushes to temp
  for (let i = 0; i < hand.length; i++) {
    temp.push(hand[i].value);
  }

  // accumulates temp
  var total = temp.reduce((a, b) => {
    return a + b;
  });

  // conditional for ace card
}

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

  // this section is to test print the shuffled deck
  // for (let i = 0; i < shuffledDeck.length; i++) {
  //   var tag = document.createElement("p");
  //   var text = document.createTextNode(
  //     shuffledDeck[i].face + shuffledDeck[i].suit
  //   );
  //   tag.appendChild(text);
  //   var element = document.getElementById("new");
  //   element.appendChild(tag);
  // }
}

// deals a single card to whichever players hand array is fed in
function singleCard(hand) {
  hand.push(shuffledDeck.shift());
}

// function printHand(hand) {
//   // this section is to test print the shuffled deck
//   for (let i = 0; i < hand.length; i++) {
//     var tag = document.createElement("p");
//     var text = document.createTextNode(hand[i].face + hand[i].suit);
//     tag.appendChild(text);
//     var element = document.getElementById(String(hand));
//     element.appendChild(tag);
//   }
// }

// This section deals the initial hand of a new game
document.querySelector("#dealCards").addEventListener("click", dealCards);

function dealCards() {
  playersHand = [];
  dealersHand = [];

  while (playersHand.length + dealersHand.length < 4) {
    singleCard(playersHand);
    singleCard(dealersHand);
  }

  printHand(playersHand);
  // document.getElementById("playersHand").innerHTML =
  //   playersHand[0].face +
  //   playersHand[0].suit +
  //   " " +
  //   playersHand[1].face +
  //   playersHand[1].suit;
  document.getElementById("dealersHand").innerHTML =
    dealersHand[0].face +
    dealersHand[0].suit +
    " " +
    dealersHand[1].face +
    dealersHand[1].suit;

  // console.log(shuffledDeck.length);

  // prints totals for both hands
  document.getElementById("playerTotal").innerHTML = getTotal(playersHand);
  document.getElementById("dealerTotal").innerHTML = getTotal(dealersHand);
}

document.querySelector("#hit").addEventListener("click", hitMe);

function hitMe() {
  singleCard(playersHand);
  document.getElementById("playerTotal").innerHTML = getTotal(playersHand);

  printHand(playersHand);
}

function printHand(hand) {
  var temp = [];
  for (let i = 0; i < hand.length; i++) {
    temp.push(hand[i].face + hand[i].suit + " ");
  }
  document.getElementById("playersHand").innerHTML = temp;
}
