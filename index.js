
document.querySelector("#newGame").addEventListener("click", newGame)

function newGame() {

var dealerCardTwo = Math.floor(Math.random() * 13) + 1;
var dealerCardOne = Math.floor(Math.random() * 13) + 1;
var yourCardOne = Math.floor(Math.random() * 13) + 1;
var yourCardTwo = Math.floor(Math.random() * 13) + 1;

document.getElementById("dealerCard1").innerHTML = dealerCardOne
document.getElementById("dealerCard2").innerHTML = dealerCardTwo
document.getElementById("yourCard1").innerHTML = yourCardOne
document.getElementById("yourCard2").innerHTML = yourCardTwo

console.log(dealerCardOne)

} 

var cards = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10] ]