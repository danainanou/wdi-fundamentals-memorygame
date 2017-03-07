console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if ((cardTwo === cardFour) || (cardOne === cardThree)) {
// 	alert("Sorry, not a match.")
// }
// else if ((cardOne === cardFour) || (cardTwo == cardFour)) {
// 	alert("Sorry, not a match.")
// }
// else {
// 	alert("You found a match!")
// }

// var gameBoard = document.getElementById('game-board');

// var createCards = function() {
// 	for (var i = 0; i < 4; i++) {
// 		var newCards = document.createElement('div');
// 			newCards.className = 'card';
// 			gameBoard.appendChild(newCards);
// 		}
// }
// createCards()

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var newCards = document.createElement('div');
	    newCards.className = 'card';
	    newCards.setAttribute('data-card', cards[i]);
	    newCards.addEventListener('click', isTwoCards);
	    gameBoard.appendChild(newCards);
  }

}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/kingspades.png'>";
	} else {
		this.innerHTML = "<img src='images/queenspade.png'>";
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("It's a match, woo!");
  } else {
    alert("Aww, give it another go.");

  }
}

createBoard();













