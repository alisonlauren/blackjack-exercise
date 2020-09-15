//unfinished but a lot of great logic so far.


window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})

// setting my variables to match the id's of my html page
var playerhand = document.getElementById("player-hand");
var dealerhand = document.getElementById("dealer-hand");
const dealbutton = document.getElementById("deal-button");
const hitbutton = document.getElementById("hit-button");
const standbutton = document.getElementById("stand-button");
//creating new array's that are for now.. empty. 
playerHandArray = [];
dealerHandArray = [];


// declaring variable for build deck function 
const suits = ["spades", "hearts", "clubs", "diamonds"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var deck = buildDeck();
// creating function to distrubute cards at random 
function buildDeck()
{
  let deck = [];
  // for if i (aka suits) starts at the beginning, no longer than the length and moves up the list
	for(let i = 0; i < suits.length; i++)
	{
    // and x (aka values) starts at the beginning, no longer than the length and moves up the list
		for(let x = 0; x < values.length; x++)
		{
      // then let the new card equal to the new value of value and suit
      const card = {Value: values[x], Suit: suits[i]};
      // add the new card to the deck
			deck.push(card);
		}
	}
// calling the function to run
	return deck;
}

function calculatePoints(deck) {
  let points = 0;
  let aces = 0;

  for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    if (currentCard.rank > 1 && currentCard.rank < 11) {
      //handle 2-10 cards
    } else if (currentCard.rank >= 11) {
      points += 10;
    } else if (currentCard.rank === 1) {
      //handle aces
      aces++;
      points += 11;
    }
  }
    while (points > 21 && aces > 0) {
      points -= 10;
      aces--;
    }
    return calculatePoints





// code for what happens when you click on the deal button
dealbutton.addEventListener("click", function(){
  placeImg(playerHandArray, playerhand)
  placeImg(playerHandArray, playerhand)
  placeImg(dealerHandArray, dealerhand)
  placeImg(dealerHandArray, dealerhand)
})
// get random number from deck length, floor=rounded to whole number
// square brackets are indiciting index of deck, random number
function getRandom () {
let randomCard = deck[Math.floor(Math.random() * deck.length)]
// making sure the random card suit = the card suit
let cardIndex = deck.findIndex(card => {return card.value === randomCard.value & card.suit === randomCard.suit})
//remove or replace an single element 
deck.splice(cardIndex, 1)
return randomCard
}

// code for what happens when you click the hit button 
hitbutton.addEventListener("click", function(){  
  placeImg(playerHandArray, playerhand)

})


function getCardImageUrl (card) {
  if (card.Value === 1) {
    return `./images/ace_of_${card.Suit}.png`;
  } else if (card.Value <=10) {
    return `./images/${card.Value}_of_${card.Suit}.png`;
  } else if (card.Value === 11) {
    return `./images/jack_of_${card.Suit}.png`;
  } else if (card.Value === 12) {
    return `./images/queen_of_${card.Suit}.png`;
  } else if (card.Value === 13) {
    return `./images/king_of_${card.Suit}.png`;
  }
}

// new function, shows card images, created card element, appended to player
function placeImg (array, player) {
card = getRandom()
array.push(card)
cardImage = getCardImageUrl(card)
const cardUrl = document.createElement("img");
cardUrl.setAttribute("src", cardImage);
player.appendChild(cardUrl)
}
