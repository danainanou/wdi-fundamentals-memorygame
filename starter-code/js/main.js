console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if ((cardTwo === cardFour) || (cardOne === cardThree)) {
// 	alert("Sorry, not a match.")
// }
// else if ((cardOne === cardFour) || (cardTwo == cardFour)) {
// 	alert("Sorry, not a match.")
// }
// else {
// 	alert("You found a match!")
// }

var gameBoard = document.getElementById('game-board');

var createCards = function() {
	for (var i = 0; i < 4; i++) {
		var newCards = document.createElement('div');
			newCards.className = 'card';
			gameBoard.appendChild(newCards);
		}
}
createCards()