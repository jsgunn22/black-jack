const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var sevenDecks = [];
var shuffledDeck = [];

function shuffleDeck() {
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
  for (let i = 0; i < sevenDecks.length; i++) {
    var randomCard = sevenDecks[Math.floor(Math.random() * sevenDecks.length)];

    if (randomCard != shuffledDeck.includes()) {
      shuffledDeck.push(randomCard);
    } else {
      i = i - 1;
    }
  }
}
