const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

document.querySelector("#shuffleDeck").addEventListener("click", shuffleDecks);

var shuffledDeck = [];
var dealersHand = [];
var playersHand = [];

function getTotal() {
  // player total
  var playerTemp = [];

  for (let i = 0; i < playersHand.length; i++) {
    playerTemp.push(playersHand[i].value);
  }

  playerTotal = playerTemp.reduce((a, b) => {
    return a + b;
  });

  if (playerTemp.includes(1) || playerTotal > 21) {
    playerTotal = playerTotal + 10;
  }

  console.log(playerTotal);
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
  console.log(shuffledDeck.length);
}

// This section deals the initial hand of a new game
document.querySelector("#dealCards").addEventListener("click", dealCards);

function dealCards() {
  playersHand = [];
  dealersHand = [];

  while (playersHand.length + dealersHand.length < 4) {
    playersHand.push(shuffledDeck.shift());
    dealersHand.push(shuffledDeck.shift());
  }

  document.getElementById("playersHand").innerHTML =
    playersHand[0].face +
    playersHand[0].suit +
    " " +
    playersHand[1].face +
    playersHand[1].suit;
  document.getElementById("dealersHand").innerHTML =
    dealersHand[0].face +
    dealersHand[0].suit +
    " " +
    dealersHand[1].face +
    dealersHand[1].suit;

  console.log(shuffledDeck.length);
  getTotal();
}
