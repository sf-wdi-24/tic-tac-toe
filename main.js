// wait for DOM to load before running JS
$(document).ready(function () {
    
    // Selecting a game square
   var turn = 0;
   var moveSquare;
   var xMoves = [];
   var oMoves = [];
	$('.gameBox').click(function (event) {
		turn+= 1;
		if (turn % 2 === 0){
			$(this).addClass('playX');
			$(this).text('X');
			$(this).off('click'); //Disable mouse clicks
			moveSquare = $('.gameBox').index(this);
			xMoves.push(moveSquare);
			console.log(xMoves);
			return turn, moveSquare, xMoves;
		}
		else {
			$(this).addClass('playO');
			$(this).text('O');
			$(this).off('click'); //Disable mouse clicks
			moveSquare = $('.gameBox').index(this);
			oMoves.push(moveSquare);
			console.log(oMoves);
			return turn, moveSquare, oMoves;
		}
	});


}); //End of Ready function