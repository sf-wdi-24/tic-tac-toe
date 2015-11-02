// wait for DOM to load before running JS
$(function() {
  
	var turnCount = 0;


	function play (event) {
		$('.box').on('click', function() {
			turnCount++;
			if(turnCount % 2 === 0) {
				$(this).addClass('x')
				$(this).html('<p>X</p>');
				$(this).off('click');
			}else {
				$(this).addClass('o')
				$(this).html('<p>O</p>');
				$(this).off('click')
			}
		})
	}

  $('#reset').on('click',function(){
    $('.box').empty();
    $('.box').html('<p>+</p>')
    play();
    playMore();
  })


//get winner
//very dirty way 
function playMore(){
var x = 'x';
var o = 'o';
var spot1 = $('#a');
var spot2 = $('#b');
var spot3 = $('#c');
var spot4 = $('#d');
var spot5 = $('#e');
var spot6 = $('#f');
var spot7 = $('#g');
var spot8 = $('#h');
var spot9 = $('#i');

	$('.box').on('click', function() {
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
			) {
			alert('winner is ' + o )
		  $('.box').removeClass('o');
	    $('.box').removeClass('x');
	    $('.box').off();
		} else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
			) {
			alert('winner is ' + x );
			$('.box').removeClass('o');
	    $('.box').removeClass('x');
	    $('.box').off();
		}
	})
/** going to use winArray to refactor the ugly way of
// var winArray = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[3,4,5]];


  function getWinner(xORo) {
		for (i = 0; < winArray.length; i++) {
			var possibleWins = winArray[i];
			var spotCount = 0;
			for (j = 0 < xORo.length; j++ ) {
				if (possibleWins.indexOf(xORo[j]) > -1) {
					spotCount++;
				}
				if (spotCount === 3) {
					break;
				}
			}
  }
**/







}

play();
playMore();
});