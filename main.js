$(document).ready(function() {

var $boxes = $('.box');

// var "turn" delares player 1 is X and player 2 is O
var turn = "X";

// var "counts" counts how many moves, starts at 0 and the limit is 9 turns
var moves = 0;

//var XWins and YWins determines how many times X and O has won 
var XWins = 0;
var YWins = 0;

// Empty array to place a X or an O
var empty = "";
var board = [empty,empty,empty,empty,empty,empty,empty,empty,empty];

// function to reset the game
var resetGame = function() {
  $boxes.text("");
  $boxes.removeClass("X");
  $boxes.removeClass("O");

  // resets once the button is clicked
  turn = "X";   
  moves = 0;
};

//determines whose turn it is, X or O
var changeTurn = function() {
  if (moves%2 === 0) {
    turn = "X";
  } else {
    turn = "O";
  }
};

/**** WINNER ****/

// returns "X" if player X owns all three boxes passed in, 
//   "O" if player O owns all three boxes passed in, or 
//   null otherwise
var allThree = function($firstBox, $secondBox, $thirdBox) {
  var firstBoxOwner = $firstBox.text(),
    secondBoxOwner = $secondBox.text(),
    thirdBoxOwner = $thirdBox.text();

if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
  if (firstBoxOwner === "X"){
    return "X";
  } else if (firstBoxOwner === "O"){
    return "O";
  }
}

  return null;
};

// checking diagonals
// returns a player mark if one player owns all three boxes in one of the diagonals
// returns null otherwise
var WinnerDiagonal = function() {
// the "eq" method is how to "index into" a jQuery collection
  var leftDownDiag = allThree($boxes.eq(0), $boxes.eq(4), $boxes.eq(8));
  var rightUpDiag = allThree($boxes.eq(2), $boxes.eq(4), $boxes.eq(6));

  //returns the winning mark 
  return leftDownDiag || rightUpDiag;
};

// checking columns
// returns a player mark if one player owns all three boxes in one of the columns
// returns null otherwise
var WinnerVertical = function() {
  var leftCol = allThree($boxes.eq(0), $boxes.eq(3), $boxes.eq(6));
  var middleCol = allThree($boxes.eq(1), $boxes.eq(4), $boxes.eq(7));
  var rightCol = allThree($boxes.eq(2), $boxes.eq(5), $boxes.eq(8));

  return leftCol || (middleCol || rightCol);
};

// checking rows
// returns a player mark if one player owns all three boxes in one of the row
// returns null otherwise
var WinnerRow = function() {
  var topRow = allThree($boxes.eq(0), $boxes.eq(1), $boxes.eq(2));
  var middleRow = allThree($boxes.eq(3), $boxes.eq(4), $boxes.eq(5));
  var bottomRow = allThree($boxes.eq(6), $boxes.eq(7), $boxes.eq(8));

  return topRow || (middleRow || bottomRow);
};

// checks for the winner
var getWinner = function() {
  return WinnerDiagonal() || (WinnerRow() || WinnerVertical());
};

/**** CLICK FUNCTIONS ****/

// listen for clicks on reset button to reset the game
$('#reset').on('click', function() {
  resetGame();
});

// clicks on function and starts the game
$boxes.on('click', function() {

if ($(this).text() === "") {
  $(this).text(turn);
  $(this).addClass(turn);
  moves ++;

// checks for the winner 
var winner = getWinner();
if (winner) {
  // alert the winner and reset the game
  alert("Player " + winner + " won!");
  resetGame();
  } else if (moves < 9) {
  changeTurn();
  } else {
  // there is no winner, and there are no empty spaces
  // alert the result and reset the game
  alert("Game Tied");
  resetGame();
  }
}
});
});