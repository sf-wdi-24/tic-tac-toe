// wait for DOM to load before running JS
$(function() {
  
	var turnCount = 0;

	$('.box').on('click', function() {
		turnCount++;
		if (turnCount % 2 === 0) {
			$(this).html('<p>X</p>');
			$(this).off('click');
		}else {
			$(this).html('<p>O</p>');
			$(this).off('click');
		}
	})

  $('#reset').on('click',function(){
    $('.box').empty();
    clickCount = 0;
    $('.box').html('<p>+</p>')
  });

});