const suits = ["❤️", "♦️", "♠️", "♣️"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Total score DOMs
const playerId = document.getElementById("playerTotal");
const dealerId = document.getElementById("dealerTotal");

// button DOMs
const shuffleButton = document.querySelector("#shuffleDeck");
const dealButton = document.querySelector("#dealCards");
const hitButton = document.querySelector("#hit");
const stayButton = document.querySelector("#stay");

// Button Listeners
shuffleButton.addEventListener("click", shuffleDecks);
dealButton.addEventListener("click", dealCards);
hitButton.addEventListener("click", hitMe);
stayButton.addEventListener("click", stay);

let shuffledDeck = [];
let dealersHand = [];
let playersHand = [];
let count = 0;

// deals a single card to whichever players hand array is fed in
function singleCard(hand) {
  let temp = shuffledDeck.shift();

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
  let temp = [];
  for (let i = 0; i < hand.length; i++) {
    temp.push(hand[i].face + hand[i].suit + " ");
  }
  document.getElementById(id).innerHTML = temp;
}

// called to reprint total
function getTotal(hand) {
  let temp = [];

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
  let sevenDecks = [];

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
  let temp = [];
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
  // enables buttons on deal
  hitButton.disabled = false;
  stayButton.disabled = false;

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
    hitButton.disabled = true;
    stayButton.disabled = true;
  } else if (getTotal(playersHand) === 21) {
    playerId.innerHTML = getTotal(playersHand) + " BLACK JACK!!";
  } else if (getTotal(dealersHand) === 21) {
    dealerId.innerHTML = getTotal(dealersHand) + " DEALER BLACK JACK!!";
    hitButton.disabled = true;
    stayButton.disabled = true;
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
    //disables buttons on bust
    hitButton.disabled = true;
    stayButton.disabled = true;
  }
}

function stay() {
  console.log("stay");
}
