// wait for DOM to load before running JS
$(document).ready(function () {
	//Setting up Variables
	var winningArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
   console.log(winningArray);
  var turn = true ;
  var turnCounter = 0;
 	var moveSquare;
 	var xMoves = [];
  var oMoves = [];
  //End of Variables

  //Selecting a game square
  $('.gameBox').click(function (event){
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
  		} //end playX set square
  		checkWinner(xMoves);

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
  		checkWinner(oMoves);	
  	}
  		
  }); // Selecting a game square

	//Check Winner
	function checkWinner(moves){
		if (turnCounter > 4){
			console.log('turnCounter is at ' + turnCounter);
			var i = 0;
			//console.log('i is set as ' + i);
				for (var j = 0; j < winningArray.length; j++) {
					if (winningArray[j][0] !== moves[i]) {
				//		console.log('havent won yet part 1 ');
						i++;
						if (winningArray[j][1] !== moves[i]) {
							i++;
					//		console.log('still havent won part 2');
								if (winningArray[j][2] !== moves[i]) {
						//		console.log('no win yet part 1');
								i++;
									if (winningArray[j][2] !== moves[i]) {
							//		console.log('no win yet part 2');
									i++;
										if (winningArray[j][2] !== moves[i]) {
								//		console.log('no win yet part 3');
										i++;
										}  // end if winningArray[j][2] move 5
										else {
										console.log('you win on the last move.');
										} // end else winningArray[j][2] move 5

						} //end if winningArray[j][1] move 4
						else {
							  console.log('you win after 4 moves');
						} // end else winningArray[j][2] move 4

					} // end if winningArray[j][0] move 3
					else {
						  console.log('you win after 3 moves');
					} // end else winningArray move 3
				}
				else {
						console.log('you win homie');
				} //end if statement move 3
		}
		else {
			console.log('you win');
		}  //for var j statement
	}
}
		else {
			$('.winner').text('No winner yet.  Keep playing.');
		}
	}


  //Reset Button
  $('.reset').click(function (event){
  	$('.gameBox').removeClass('playO');
  	$('.gameBox').removeClass('playX');
  	$('.gameBox').empty();
  	$('.turnText').text('X has control of the board');
  	var turn = true ;
	  var turnCounter = 0;
	 	var moveSquare;
	 	var xMoves = [];
	  var oMoves = [];

  });

}); // end of document