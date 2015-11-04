//way for the document to be ready before executing anything
$(document).ready (function(){
	//add onclick handler to all boxes
	$(".box").on("click",function(){
		alert("play here");
	});
	


	//define available spaces to play.---declare variables bellow here?---
		// 9 cels in a 3x3 grid.  
			//available cells: a,b,c,d,e,f,g,h,i

	//need to draw either "X" or "O" for player onClick

	//prompt player 1 to select an which one he/she wants to sellect (pick X or O).

	//prompt player 1 to select an empty square to start game.

	//change player's turn

	//keep track of cells already clicked

	//Define possible combinations.   
		//winnig combination: 	
				//horizontal: (abc) or (def) or (ghi)
				//vertical:
				//diagonal:
		//tie combination:

	// check if there's a winner --write the function bellow here?--

		//if there's no winning combination after last click, prompt the next player to select an empty square.

		//if there's a winning combination after last click, tell players that there is a winner. 
			//display who is winner (X or O)

		//ask to reset/start new game.



});