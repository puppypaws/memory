const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = cards[1];
var cardFour = cards[3];

console.log(cardsInPlay);

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
console.log(cardsInPlay);

cardsInPlay.push(cardThree);
console.log("User flipped " + cardThree);
console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
  console.log("There are 2 cards in play");
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("It's a match!");
  } else alert("Sorry, try again");
}
