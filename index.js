
document.querySelector("#newGame").addEventListener("click", newGame)


var suit = ["❤️", "♦️", "♠️", "♣️"]
var cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


function newGame() {
    
    var d = 0
    var y = 0

    return dealCards()    

        function dealCards(){

            for (let i = 0; i < 2; i++) {
                dealersCard()
                yourCard()
            }

            function dealersCard() {
                
                
                var getSuit = suit[Math.floor(Math.random() * 4)]
                var getCardNumber = cardNumber[Math.floor(Math.random() * 13)]
                if (getCardNumber > 10) {
                    getCardNumber = 10
                } else {
                    getCardNumber = getCardNumber
                }
                
                var dealOneCard = document.getElementById("houseCard" + d ).innerHTML = getCardNumber + getSuit;
                d++
                return (dealOneCard)
            }

            function yourCard() {
                
                var getSuit = suit[Math.floor(Math.random() * 4)]
                var getCardNumber = cardNumber[Math.floor(Math.random() * 13)]
                if (getCardNumber > 10) {
                    getCardNumber = 10
                } else {
                    getCardNumber = getCardNumber
                }
                
                var dealOneCard = document.getElementById("yourCard" + y ).innerHTML = getCardNumber + getSuit;
                y++

                return (dealOneCard)
            }
        }
} 