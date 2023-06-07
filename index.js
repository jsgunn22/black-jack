document.querySelector("#newGame").addEventListener("click", newGame)



var suit = ["❤️", "♦️", "♠️", "♣️"]
var cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


function newGame() {
    
    
    var dealersHand = dealersCards();
    var yourHand = yourCards();

            function dealersCards() {
                var dealersHand = []
                for (let i = 0; i < 2; i++) {
                    var getSuit = suit[Math.floor(Math.random() * 4)]
                    var getCardNumber = cardNumber[Math.floor(Math.random() * 13)]
                    if (getCardNumber > 10) {
                        getCardNumber = 10
                    } else {
                    getCardNumber = getCardNumber
                    }
                    dealersHand.push(getCardNumber + getSuit)
                    }
                return (dealersHand)
            }

            function yourCards() {
                var yourHand = []
                for (let i = 0; i < 2; i++) {
                    var getSuit = suit[Math.floor(Math.random() * 4)]
                    var getCardNumber = cardNumber[Math.floor(Math.random() * 13)]
                    if (getCardNumber > 10) {
                        getCardNumber = 10
                    } else {
                    getCardNumber = getCardNumber
                    }
                    yourHand.push(getCardNumber + getSuit)
                    }
                return (yourHand)
            }
          
            document.querySelector("#hit-button").addEventListener("click", hitMe) 

            function hitMe() {
                    var getSuit = suit[Math.floor(Math.random() * 4)]
                    var getCardNumber = cardNumber[Math.floor(Math.random() * 13)]
                    if (getCardNumber > 10) {
                        getCardNumber = 10
                    } else {
                    getCardNumber = getCardNumber
                    }

                    yourHand.push(getCardNumber + getSuit)
                    document.getElementById("yourHand").innerHTML = yourHand

            } 

            document.getElementById("dealerHand").innerHTML = dealersHand
            document.getElementById("yourHand").innerHTML = yourHand

                
                let dealerTotal = dealersHand.reduce((accumulator, currentValue) => accumulator.slice(0, accumulator.length - 1) + currentValue.slice)
                console.log(dealerTotal)
}