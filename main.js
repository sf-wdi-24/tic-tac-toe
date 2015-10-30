// wait for DOM to load before running JS
$(document).ready(function () {
    
    // Selecting a game square
   var turn = 0;
	$('.gameBox').click(function (event) {
		turn+= 1;
		if (turn % 2 === 0){
			$(this).addClass('playX');
			$(this).text('X');
			$(this).off('click'); //Disable mouse click
			return turn;
		}
		else {
			$(this).addClass('playO');
			$(this).text('O');
			$(this).off('click'); //Disable mouse click
			return turn;
		}
	});

	

}); //End of Ready function