const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

document.querySelector("#shuffleDeck").addEventListener("click", shuffleDecks);

var shuffledDeck = [];

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
