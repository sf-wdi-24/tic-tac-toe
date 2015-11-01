// wait for DOM to load before running JS
$(document).ready(function () {
	//Setting up Variables
	var winningArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
   console.log(winningArray);
  var turn = 0;
 	var moveSquare;
 	var xMoves = [];
  var oMoves = [];
  //End of Variables

  //Selecting a game square
  $('.gameBox').click(function (event){
   	if (turn % 2 === 0){
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
				turn++;
  		} //end playX set square
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
				turn++;
  		} //end playO set square	
  	}
  		
  }); // Selecting a game square

  //Reset Button
  $('.reset').click(function (event){
  	$('.gameBox').removeClass('playO');
  	$('.gameBox').removeClass('playX');
  	$('.gameBox').empty();
  });

}); // end of document