// wait for DOM to load before running JS
$('document').ready(function() {

  var currentPlayer = "x";
  
  // your code here
  $( '.box' ).click(function() {
    console.log($(this));
    if ($(this).text() !== "") {
      return;
    }

    $(this).text(currentPlayer);
    if (currentPlayer == "x") {
      currentPlayer= "o";
    } else {
      currentPlayer = "x";
    }
  });

  $( '.reset-button' ).click(function() {
    $('.box').empty(); 
  });

  // function getMove() {
  // console.log("Let's play tic tac toe!");
  //  var playerOne = 0;
  //  var playerTwo = 0;
  //  for (var = 0; i <= 9; i++);
  //      var getMove(move);
  //      if (move % 2 === 0) {
  //      return "x";
  //      } else {
  //      console.log(move);
  //      return "o";
  //      }
  //    if (move < 9); 
  //      console.log("Next player, make your move");
  //  } else {
  //      console.log("Game over!");
  //  }

  // }
  // any box is clicked 
  // return "move", alternate moves between x and o
  // only allow 1 move per box; then run jquery script to block clicks
  // keep looping until "winning move", then return "you win!"
  // winning moves: 
    // 1,2,3
    // 4,5,6
    // 7,8,9
    // 1,4,7
    // 2,5,8
    // 3,6,9
    // 3,5,7

});