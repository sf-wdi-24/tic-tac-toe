// wait for DOM to load before running JS
$('document').ready(function() {

  var currentPlayer = "x";
  
  // your code here
  $( '.box' ).click(function() {
    // prevents multiple moves in same box
    if ($(this).text() !== "") {
      return;
    }

    // displays x or o in current box
    $(this).text(currentPlayer);
    $(this).addClass(currentPlayer);

    // switches between x and o
    if (currentPlayer == "x") {
      currentPlayer = "o";
    } else {
      currentPlayer = "x";
    }
    $('.current-player-turn').text(currentPlayer);
  });

  $( '.reset-button' ).click(function() {
    $('.box').empty();
    $('.box').removeClass('x');
    $('.box').removeClass('o');
    currentPlayer = "x";   //first player will always be x
    $('.current-player-turn').text(currentPlayer);
  });

});