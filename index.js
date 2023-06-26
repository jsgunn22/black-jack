const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const playerId = document.getElementById("playerTotal");
const dealerId = document.getElementById("dealerTotal");

document.querySelector("#shuffleDeck").addEventListener("click", shuffleDecks);
document.querySelector("#dealCards").addEventListener("click", dealCards);
document.querySelector("#hit").addEventListener("click", hitMe);
document.querySelector("#stay").addEventListener("click", stay);

var shuffledDeck = [];
var dealersHand = [];
var playersHand = [];
var count = 0;

// deals a single card to whichever players hand array is fed in
function singleCard(hand) {
  var temp = shuffledDeck.shift();

  if (temp.value < 8) {
    if (temp.value === 1) {
      count--;
    } else {
      count++;
    }
  } else if (temp.value > 9) {
    count--;
  }

  hand.push(temp);
  console.log(count);
}

// called to reprint hand whenever a card is dealt
function printHand(hand, id) {
  var temp = [];
  for (let i = 0; i < hand.length; i++) {
    temp.push(hand[i].face + hand[i].suit + " ");
  }
  document.getElementById(id).innerHTML = temp;
}

// called to reprint total
function getTotal(hand) {
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
    return total + 10;
  } else {
    return total;
  }
}

// BUTTON OPERATIONS
function shuffleDecks() {
  count = 0;
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
}

// This section deals the initial hand of a new game
function dealCards() {
  playersHand = [];
  dealersHand = [];

  while (playersHand.length + dealersHand.length < 4) {
    singleCard(playersHand);
    singleCard(dealersHand);
  }

  // Prints players hand
  printHand(playersHand, "playersHand");

  // dealers second card on deal is face down.
  if (dealersHand[0].value === 1 || dealersHand[0].value === 10) {
    printHand(dealersHand, "dealersHand");
  } else {
    document.getElementById("dealersHand").innerHTML =
      dealersHand[0].face + dealersHand[0].suit + ", ??";
  }

  // blackjack on deal
  if (getTotal(playersHand) === 21 && getTotal(dealersHand) === 21) {
    dealerId.innerHTML = getTotal(dealersHand) + " DEALER BLACK JACK!!";
    playerId.innerHTML = getTotal(playersHand) + " Push goes to the house ☹️";
  } else if (getTotal(playersHand) === 21) {
    playerId.innerHTML = getTotal(playersHand) + " BLACK JACK!!";
  } else if (getTotal(dealersHand) === 21) {
    dealerId.innerHTML = getTotal(dealersHand) + " DEALER BLACK JACK!!";
  } else {
    playerId.innerHTML = getTotal(playersHand);
    dealerId.innerHTML = getTotal(dealersHand);
  }
}

// adds a single card to player and re prints hand
function hitMe() {
  singleCard(playersHand);
  printHand(playersHand, "playersHand");

  // Player bust logic
  if (getTotal(playersHand) <= 21) {
    playerId.innerHTML = getTotal(playersHand);
  } else {
    playerId.innerHTML = getTotal(playersHand) + " You busted";
  }
}

function stay() {
  console.log("stay");
}
