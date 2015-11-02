// wait for DOM to load before running JS
$(function() {
  
	var turnCount = 0;

	$('.box').on('click', function() {
		turnCount++;
		if (turnCount % 2 === 0) {
			$(this).html('<p>X</p>');
			$(this).attr('disabled','disabled');
		}else {
			$(this).html('<p>O</p>')
			$(this).attr('disabled','disabled');
		}
	})


});