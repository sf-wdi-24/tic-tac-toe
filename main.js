// wait for DOM to load before running JS
$(function() {
  
	var turnCount = 0;
	var winArray = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[3,4,5]];

	// $('.box').on('click', function() {
	// 	turnCount++;
	// 	if (turnCount % 2 === 0) {
	// 		$(this).html('<p>X</p>');
	// 		$(this).off('click');
	// 	}else {
	// 		$(this).html('<p>O</p>');
	// 		$(this).off('click');
	// 	}
	// })

	function play (event) {
		$('.box').on('click', function() {
			turnCount++;
			if(turnCount % 2 === 0) {
				$(this).html('<p>X</p>');
				$(this).off('click');
			}else {
				$(this).html('<p>O</p>');
				$(this).off('click')
			}
		})
	}

  $('#reset').on('click',function(){
    $('.box').empty();
    $('.box').html('<p>+</p>')
    play();
  })

play();
/**
  function getWinner(move) {
		for (i = 0; < winArray.length; i++) {
			var possibleWins = winArray[i];
			var spotCount = 0;
			for (j = 0 < )
  }
**/

});