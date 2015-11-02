$(document).ready(function(){
console.log("Sanity Check: JS is working!");


//Determining player's turn and displaying it
var count = 0;

function turn() {
	count++;
	if (count % 2 === 0){
		$('#turnMess').text("You're up, player X!");
		return "O";
	} else {
		$('#turnMess').text("You're up, player O!");
		return "X";
	}
}

//Placing player "X" or "O" on board
function player (event){
	var place = turn();
	$(this).off('click');
	$(this).text(place);
	
}

//Resetting board
function clearBoard(){
	count = 0;
	$('.box').off('click');
	$('.box').text('');
	$('#turnMess').text('');
	$('.box').click(player);

}

//Handling space and reset button clicks

$('input').click(clearBoard);
clearBoard();
});