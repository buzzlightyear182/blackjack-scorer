/*
Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).
This function takes one parameter which is an array of strings that represent each card in the hand. Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"
It returns a number which is the score of the hand. Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Scoring rules: In Blackjack number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.
Examples:
scoreHand(["A"]); //=> 11
scoreHand(["A", "J"]); //=> 21
scoreHand(["A", "10", "A"]); //=> 12
scoreHand(["5", "3", "7"]); //=> 15
scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25
*/

function scoreHand(cards){ 
 
  var aceOnly = [];
  
//Arrange cards
  for (i = 0; i < cards.length; i++) {
    while (cards[i] === "A") {
      cards.splice(i,1);
      aceOnly.push("A");
    }
  }  
  
  var sorted = cards.concat.apply(cards, aceOnly);
  
//First loop  
  var container = [];
  var total = 0;
  var alphabet = ["J","Q","K"];
  
  for (i=0; i < sorted.length; i++){
    if (sorted[i] <= 10) {
      container.push(parseInt(sorted[i]));
    }
    else if (alphabet.indexOf(sorted[i]) >= 0) {
      container.push(10);
    }
    else { //for Aces
      if (11 <= (21-total) && sorted.lastIndexOf("A") == i) {
        container.push(11); 
      }
      else {
        container.push(1); 
      } //close Ace else
    } //close Loop else
    getTotal(container);
  } //close For loop
  
  function getTotal(container){
    total = 0;
    for (x = 0; x < container.length; x++) {
      total = total + container[x];
    }  
  }
  console.log("Final: " + total);
  return total;
}

//Test data:
scoreHand(["J","A"]); //=> 21
scoreHand(["A"]); //=> 11
scoreHand(["A","A"]); //=> 12
scoreHand(["9","A","A"]); //=> 21
scoreHand(["J","A","A"]); //=> 12
scoreHand(["J","J","A"]); //=> 21
scoreHand(["A","A","A"]); //=> 13