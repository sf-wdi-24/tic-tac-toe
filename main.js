// wait for DOM to load before running JS
$(document).ready(function(){

	console.log("Sanity Check: JS is working!");  

	var count = 0;
	var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	var winner = false;

	// Checks to see whose turn it is based on the turn count
	function whoseTurn() {
		count++;
		if (count % 2 === 0 ) {
			return 'O';
		} else {
			return 'X';
		}
	}

	// Places and X or O in box when clicked
	// After fifth move, checks for a winner
	function takeTurn(event) {
		var move = whoseTurn();
		$(this).append(move);
		$(this).off('click');
		board[event.data.value] = move;
		if(count >= 5) checkWinner();
  }

	// Checks to see if three board values are equal to each other and not equal to zero
  function compareThree(a, b, c) {
  	if (board[a] === board[b] && board[b] === board[c] && board[c] !== 0) {
  		return true;
  	} else {
  		return false;
  	}
  }

  // Checks for a winner
	function checkWinner() {
		if ( compareThree(0,1,2)||compareThree(0,3,6)|| compareThree(0,4,8) ) {
			winner = board[0];
		} else if ( compareThree(3,4,5)||compareThree(1,4,7)|| compareThree(2,4,6) ) {
			winner = board[4];
		} else if ( compareThree(6,7,8)||compareThree(2,5,8)) {
			winner = board[8];
		}
		if(winner) {
			for(i = 0; i < 9; i++) {
				$('.box').off('click');
			}
			alert(winner + ' wins the game! To play again, press Reset');
		}
	}

	// Resets the variables and the game board
	function resetGame() {
		count = 0;
		board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		winner = false;
	  $(".box").empty();
		playGame();
	}

	// Sets each box to be clicked
	function playGame() {
		for (var i = 0; i < 9; i++) {
		  $('.box').eq(i).on('click', {value: i}, takeTurn);
		}
	}

	// Sets the reset button
	$('button').on('click', resetGame);

  playGame();
});