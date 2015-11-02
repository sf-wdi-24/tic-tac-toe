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
  			console.log('hasclass playX');
  			return;
  		} // hasclass playX
  		else if ($(this).hasClass('playO')){
  			console.log('hasclass playo');
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
				console.log('turn counter is set at ' + turnCounter);
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
				console.log('has class playx 2');
  			return;
  		} // hasclass playX
  		else if ($(this).hasClass('playO')){
  			console.log('has class play0 2');
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
	console.log($('.r1c1').text() === play);
	console.log(play);
  if (($('.r1c1').text() === play) && ($('.r1c2').text() === play) && ($('.r1c3').text() === play)) {
     console.log('you win1');
     $('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c1').text() === play) && ($('.r2c1').text() === play) && ($('.r3c1').text() === play)) {
  	console.log('you win2');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c1').text() === play) && ($('.r2c2').text() === play) && ($('.r3c3').text() === play)) {
  	console.log('you win3');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r2c1').text() === play) && ($('.r2c2').text() === play) && ($('.r2c3').text() === play)) {
  	console.log('you win4');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r3c1').text() === play) && ($('.r3c2').text() === play) && ($('.r3c3').text() === play)) {
  	console.log('you win5');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c2').text() === play) && ($('.r2c2').text() === play) && ($('.r3c2').text() === play)) {
  	console.log('you win6');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c3').text() === play) && ($('.r2c3').text() === play) && ($('.r3c3').text() === play)) {
  	console.log('you win7');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else if (($('.r1c3').text() === play) && ($('.r2c2').text() === play) && ($('.r3c1').text() === play)) {
  	console.log('you win8');
  	$('.turnText').text( play + ' has won the game!');
     gameOver = true;
     return gameOver;
  }
  else {
  	console.log('continue playing');
  }
} //end of checkWinClass function


}); // end of document


//Check Winner solution attempt
// 	function checkWinner(moves){
// 		if (turnCounter > 4){
// 			console.log('turnCounter is at ' + turnCounter);
// 			var i = 0;
// 			//console.log('i is set as ' + i);
// 				for (var j = 0; j < winningArray.length; j++) {
// 					if (winningArray[j][0] !== moves[i]) {
// 				//		console.log('havent won yet part 1 ');
// 						i++;
// 						if (winningArray[j][1] !== moves[i]) {
// 							i++;
// 					//		console.log('still havent won part 2');
// 								if (winningArray[j][2] !== moves[i]) {
// 						//		console.log('no win yet part 1');
// 								i++;
// 									if (winningArray[j][2] !== moves[i]) {
// 							//		console.log('no win yet part 2');
// 									i++;
// 										if (winningArray[j][2] !== moves[i]) {
// 								//		console.log('no win yet part 3');
// 										i++;
// 										}  // end if winningArray[j][2] move 5
// 										else {
// 										console.log('you win on the last move.');
// 										} // end else winningArray[j][2] move 5

// 						} //end if winningArray[j][1] move 4
// 						else {
// 							  console.log('you win after 4 moves');
// 						} // end else winningArray[j][2] move 4

// 					} // end if winningArray[j][0] move 3
// 					else {
// 						  console.log('you win after 3 moves');
// 					} // end else winningArray move 3
// 				}
// 				else {
// 						console.log('you win homie');
// 				} //end if statement move 3
// 		}
// 		else {
// 			console.log('you win');
// 		}  //for var j statement
// 	}
// }
// 		else {
// 			$('.winner').text('No winner yet.  Keep playing.');
// 		}
// 	}

///

//Check Winner soultion attempt
  // function checkWinner(moves){
  //   tempWin = [];
  //   tempMoves = [];
  //   if (turnCounter > 4){
  //   	console.log();
  //     for (var j = 0; j < winningArray.length; j++) {
  //       for (var i = 0; i < moves.length; i++) {
        	
        
  //       if ($.inArray(winningArray[j][0],moves[0])) {
  //       	tempWin.push((winningArray.indexOf(winningArray[j][0])));
  //       	console.log('push index 0 winningArray '+tempWin);
  //       	tempMoves.push(moves[i]);
  //       	console.log('push index 0 movesArray '+tempMoves);
  //         if (winningArray[j][1] === moves[1]) {
  //         	tempWin.push(winningArray[j][1]);
  //         	console.log('push index 1 winningArray '+tempWin[1] +' whole arr ' + tempWin);
  //       		tempMoves.push(moves[1]);
  //       		console.log('push index 1 movesArray '+tempMoves[1] +' whole arr ' + tempMoves);
  //           if (winningArray[j][2] === moves[2]) {
  //             tempWin.push(winningArray[j][2]);
  //             console.log(j + ' ' + i +' push index 2 winningArray '+tempWin[2] +' whole arr ' + tempWin);
  //       			tempMoves.push(moves[2]);
  //       			console.log('push index 2 movesArray '+tempMoves[2] +' whole arr ' + tempMoves);
  //       			return tempWin, tempMoves;
  //            	} 
  //            	else if (winningArray[j][2] === moves[3]) {
  //            		tempWin.push(winningArray[j][2]);
  //            		console.log('push index 3 winningArray '+tempWin[3] +' whole arr ' + tempWin);
  //       				tempMoves.push(moves[3]);
  //       				console.log('push index 3 movesArray '+tempMoves[3] +' whole arr ' + tempMoves);
  //       				return tempWin, tempMoves;
  //          		}
  //          		else if (winningArray[j][2] === moves[4]) {
  //          			tempWin.push(winningArray[j][2]);
  //          			console.log('push index 4 winningArray '+tempWin[4] +' whole arr ' + tempWin);
  //       				tempMoves.push(moves[4]);
  //       				console.log('push index 4 movesArray '+tempMoves[4] +' whole arr ' + tempMoves);
  //       				return tempWin, tempMoves;	
  //          		}
  //         	} 
  //         	else {
  //         		//console.log('keep playing');
  //       		}
  //       	} // end first if statement 
  //       	else {
  //       		//console.log('go on');
  //     		}
  //     	}
  //     } // end for statement
  //   }
  //   else {
  //     $('.winner').text('No winner yet.  Keep playing.');
  //     return;
  //   }
    
  //   if (tempMoves === tempWin) {
  //   	console.log('you are the big winner.');
  //   	return;
  //   }
  //   else {
  //   	console.log('keep playing.');
  //   	return;
  //   }
  // }
