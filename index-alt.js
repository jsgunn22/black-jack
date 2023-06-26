document.querySelector("#newGame").addEventListener("click", newGame);

let suit = ["❤️", "♦️", "♠️", "♣️"];
let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function newGame() {
  let dealersHand = dealersCards();
  let yourHand = yourCards();

  yourTotal(yourHand);
  dealerTotal(dealersHand);

  function dealersCards() {
    let dealersHand = [];
    for (let i = 0; i < 2; i++) {
      let getSuit = suit[Math.floor(Math.random() * 4)];
      let getCardNumber = cardNumber[Math.floor(Math.random() * 13)];
      if (getCardNumber > 10) {
        getCardNumber = 10;
      } else {
        getCardNumber = getCardNumber;
      }
      dealersHand.push(getCardNumber + getSuit);
    }
    return dealersHand;
  }

  function yourCards() {
    let yourHand = [];
    for (let i = 0; i < 2; i++) {
      let getSuit = suit[Math.floor(Math.random() * 4)];
      let getCardNumber = cardNumber[Math.floor(Math.random() * 13)];
      if (getCardNumber > 10) {
        getCardNumber = 10;
      } else {
        getCardNumber = getCardNumber;
      }
      yourHand.push(getCardNumber + getSuit);
    }
    return yourHand;
  }

  document.querySelector("#hit-button").addEventListener("click", hitMe);

  document.getElementById("dealerHand").innerHTML = dealersHand;
  document.getElementById("yourHand").innerHTML = yourHand;

  function dealerTotal(dealersHand) {
    dealerHandNumbers = [];

    for (let i = 0; i < dealersHand.length; i++) {
      dealerHandNumbers.push(
        Number(dealersHand[i].slice(0, dealersHand[i].length - 2))
      );
    }

    dealerTotal = dealerHandNumbers.reduce((a, b) => {
      return a + b;
    });

    document.getElementById("dealerTotal").innerHTML = dealerTotal;
  }

  function yourTotal(yourHand) {
    yourHandNumbers = [];

    for (let i = 0; i < yourHand.length; i++) {
      yourHandNumbers.push(
        Number(yourHand[i].slice(0, yourHand[i].length - 2))
      );
    }

    yourTotal = yourHandNumbers.reduce((a, b) => {
      return a + b;
    });
    if (yourTotal === 21) {
      document.getElementById("yourTotal").innerHTML =
        yourTotal + " Black Jack!!";
    } else {
      document.getElementById("yourTotal").innerHTML = yourTotal;
    }
  }

  function hitMe() {
    let getSuit = suit[Math.floor(Math.random() * 4)];
    let getCardNumber = cardNumber[Math.floor(Math.random() * 13)];
    if (getCardNumber > 10) {
      getCardNumber = 10;
    } else {
      getCardNumber = getCardNumber;
    }

    yourHand.push(getCardNumber + getSuit);
    document.getElementById("yourHand").innerHTML = yourHand;
    yourHandNumbers = [];

    for (let i = 0; i < yourHand.length; i++) {
      yourHandNumbers.push(
        Number(yourHand[i].slice(0, yourHand[i].length - 2))
      );
    }
    // This section inside of the hit button rebuild the players total based on the new array
    yourTotal = yourHandNumbers.reduce((a, b) => {
      return a + b;
    });

    if (yourTotal > 21) {
      document.getElementById("yourTotal").innerHTML =
        yourTotal + " You busted, Bro...";
    } else {
      document.getElementById("yourTotal").innerHTML = yourTotal;
    }
  }
}
