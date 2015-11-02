// wait for DOM to load before running JS
$(document).ready(function () {
	//Setting up Variables
	//var winningArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
  var turn = true ;
  var turnCounter = 0;
 	var moveSquare;
 	var xMoves = [];
  var oMoves = [];
  var tempWin = [];
  var tempMoves = [];
  var gameOver = false;
  //End of Variables

  //Selecting a game square
  
  	$('.gameBox').click(function (event){
   	if (gameOver) {
  	return true;
  }
  else {
   	if (turn){
  		if ($(this).hasClass('playX')){
  			return;
  		} // hasclass playX
  		else if ($(this).hasClass('playO')){
  			return;
  		} // hasclass playO
  		else {
  			$(this).addClass('playX');
				$(this).text('X');
				moveSquare = $('.gameBox').index(this);
				xMoves.push(moveSquare);
				xMoves.sort();
				turn = false;
				turnCounter++;
				$('.turnText').text('O has control of the board');	
  		} //end playX set square
  		checkWinClass('X');
  		if (turnCounter >= 9) {    //move this below checkwin class
					$('.turnText').text('Tie Game.  Click reset to play again');
				}
				else {
					
				}
  	} //end x turn
  	else {
  		if ($(this).hasClass('playX')){
  			return;
  		} // hasclass playX
  		else if ($(this).hasClass('playO')){
  		} // hasclass playO
  		else {
  			$(this).addClass('playO');
				$(this).text('O');
				moveSquare = $('.gameBox').index(this);
				oMoves.push(moveSquare);
				oMoves.sort();
				turn = true;
				turnCounter++;
				$('.turnText').text('X has control of the board');	
  		} //end playO set square
  		checkWinClass('O');	
  		if (turnCounter >= 9) {
					$('.turnText').text('Tie Game.  Click reset to play again');
				}
				else {
					return;
				}
  }	}
  }); // Selecting a game square
	
  
 
  //Reset Button
  $('.reset').click(function (event){
  	$('.gameBox').removeClass('playO');
  	$('.gameBox').removeClass('playX');
  	$('.gameBox').empty();
  	$('.turnText').text('X has control of the board');
  	turn = true;
	  turnCounter = 0;
	  gameOver = false;
  });

function checkWinClass (play) {
  if (($('.r1c1').text() === play) && ($('.r1c2').text() === play) && ($('.r1c3').text() === play)) {
     $('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c1').text() === play) && ($('.r2c1').text() === play) && ($('.r3c1').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c1').text() === play) && ($('.r2c2').text() === play) && ($('.r3c3').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r2c1').text() === play) && ($('.r2c2').text() === play) && ($('.r2c3').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r3c1').text() === play) && ($('.r3c2').text() === play) && ($('.r3c3').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c2').text() === play) && ($('.r2c2').text() === play) && ($('.r3c2').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c3').text() === play) && ($('.r2c3').text() === play) && ($('.r3c3').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c3').text() === play) && ($('.r2c2').text() === play) && ($('.r3c1').text() === play)) {
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else {
  	return;
  }
} //end of checkWinClass function

}); // end of document