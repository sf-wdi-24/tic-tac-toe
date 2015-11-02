$(document).ready(function(){
console.log("Sanity Check: JS is working!");


//Determining player's turn and displaying it
var count = 0;

function turn() {
	count++;
	if (count % 2 === 0){
		$('#turnMess').text("You're up, player O!");
		return "X";
	} else {
		$('#turnMess').text("You're up, player X!");
		return "O";
	}
}

//Placing player "X" or "O" on board
function player (event){
	var place = turn();
	$(this).text(place);
	// $(this).off('click');
}

//Resetting board
function clearBoard(){
	$('.box').text('');
	$('#turnMess').text('');

}

//Handling space and reset button clicks
$('.box').click(player);
$('input').click(clearBoard);

});