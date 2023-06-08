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
                    yourTotal(yourHand)

            } 

            document.getElementById("dealerHand").innerHTML = dealersHand
            document.getElementById("yourHand").innerHTML = yourHand

            dealerTotal(dealersHand)

            function dealerTotal(dealersHand) {
                
                dealerHandNumbers = []

                for (let i = 0; i < dealersHand.length; i++) {
                    dealerHandNumbers.push(Number(dealersHand[i].slice(0, dealersHand[i].length - 2)))
                }

                dealerTotal = dealerHandNumbers.reduce((a, b) => {
                    return a + b;
                })

                document.getElementById("dealerTotal").innerHTML = dealerTotal
            }

            yourTotal(yourHand)

            var yourTotal = function yourTotal(yourHand) {
                
                yourHandNumbers = []
        
                for (let i = 0; i < yourHand.length; i++) {
                    yourHandNumbers.push(Number(yourHand[i].slice(0, yourHand[i].length - 2)))
                }
        
                yourTotal = yourHandNumbers.reduce((a, b) => {
                    return a + b;
                })
        
                document.getElementById("yourTotal").innerHTML = yourTotal
            }
        

}