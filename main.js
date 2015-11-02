// wait for DOM to load before running JS
  $(function() {
  
 			
/*Variables for game.*/ 
var $sq = $('.box'),  //Easier than having to keep write it as $('.box'), etc., and is a more direct name.
	$board = $('#board'),
	$reset = $('#reset'),
	playerX = 'X',
	playerO = 'O',
	turn = 0; 

/*This places 'X' and 'O' on the clicked square, alternates from X to O, and it makes it so a square can't be clicked more than once.*/
$sq.click(function() {
							//if($(this).text === '') {
							//Wouldn't this statement statement make it so this only runs if there's nothing(an empty string) written in the box?
							//And/or wouldn't this following statement make it only run this if there has been no data entered per clicked sq. if i add do a jQuery.data function (see lines:__ & ____ for specific code) 
							//Here it is: if(jQuery.hasData($(this) === false) { 
							//Ideally true could be replaced with a number, let's say 1, and then replace/alternate the aforementioned with the following:
							// if(jQuery.hasData($(this) !== 1) { 
		turn ++;						
		if(turn % 2 === 0){  
							//jQuery.data($(this), "X", true); //here is code I would write to make the potential if stmt (line 57) alternating 1 for true if used line 59//
							//This (I think) is supposed to add a value to the clicked square...therefore making it able to be checked if has a value, and if null/undefined it wouldn't run the code in line 18/20(i.e. click/move to a taken box)
				$(this).text('X');
							//$(this).unbind('click');
			} else {
							//jQuery.data($(this), "O", true); //jQuery.data($(this), "X", true); //here is code I would write to make the potential if stmt (line 57) alternating 1 for true if used line 59//
							//This (I think) is supposed to add a value to the clicked square...therefore making it able to be checked if has a value, and if null/undefined it wouldn't run the code in line 18/20(i.e. click/move to a taken box)
				$(this).text('O');
							//$(this).unbind('click');  //So can't move to a square more than once, but it conflicts with the reset button. I like the reset button more than this; so that stays.
		}	
	
});
/*This is the function to reset the board*/
	function resetBoard() {
	$sq.text("");
	turn = 0;
}

/*This activates the resetBoard function when Reset is clicked*/
$reset.on('click', function() {
	resetBoard();
});

});