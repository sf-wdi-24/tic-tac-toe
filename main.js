// wait for DOM to load before running JS
$(document).ready(function() {
	var reset = false;
	var counter = 0;
	var name = "";
	var winner = false;
  
  	// Set (or reset) board with null
  	$('#setBoard').click(function(){	
  		if(reset === false){
		  	resetBoard();
		  	//Prompt for name (and eventually multi-player)
		  	name = prompt("Tell us your name and you're ready to play!");
		  	$('#name').text("Welcome " + name + "!");
		  	$('#whosmove').text("Your move!");	
		  	//Change button to 'reset board'
		  	$('#setBoard').text("Reset Board");
		  	reset = true;
		} else {
		  	//Are you sure prompt? Then reset.
		  	certainResetBoard();
		}
	 });

  	// Action taken upon click within board
  	$('.box').click(function(){
  		var idiwant = "#"+this.id[0]+this.id;
  		// Assumes board is open and there is no winner yet
  		if(($(idiwant).text() === "null") && (winner === false)){
	  		if(counter%2 === 0){
	  			$(idiwant).text(name);
				getWinner();
	  			$('#whosmove').text("Computer's move!");
	  		} else {
	  			$(idiwant).text("Computer");
				getWinner();
	  			$('#whosmove').text(name + "'s move!");
	  		}
	  		$(idiwant).show();
  			counter += 1;
  			console.log(counter);
  			if((counter === 9) && (winner === false)){
  				alert("Cat's game!");
  				$('#whosmove').text("");
  			}
  		} else {
  			// Assumes it's a new game
  			if(reset === false){
  				alert("Start game! (see button above)");
  			// Assumes there has been a winner
  			} else if(winner === true) {
  				alert("Winner, start new game.");
  			// Square taken already$('#whosmove').text("");
  			} else {
  				alert("Square taken, choose another!");
  			}
  		}
  	});

  	// Reset the board
  	function resetBoard(){
		$('.inbox').text("null");
	  	$('.inbox').hide();
	  	$('#setBoard').text("Reset Board");
	  	winner = false;
	  	counter = 0;
	  	if($('.inbox').text().match(/.{1,4}/g)[0] === "null" && $('.inbox').text().match(/.{1,4}/g).length === 9){
	  		console.log("9 nulls fill board");
	  	}
  	}

  	// Are you sure you want to reset the board?
  	function certainResetBoard(){
		var reset_sure = prompt("Are you sure you want to reset the board? (Y/N)");
	  	if((reset_sure.toUpperCase() === "Y") || (reset_sure.toUpperCase() === "YES")){
	  		reset = false;
	  		$('#name').text("");
	  		$('#whosmove').text("");
		  	resetBoard();
		} else if ((reset_sure.toUpperCase() === "N") || (reset_sure.toUpperCase() === "NO")) {
			console.log("Then keep playing!");
	  	} else {
			certainResetBoard();
	  	}
  	}

  	// Determine the winner
  	function getWinner(){
  		if(($('#aa1').text() !== "null") && ($('#aa1').text()===$('#aa2').text()) && ($('#aa1').text()===$('#aa3').text())) {
  			alert("Winner! " + $('#aa1').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#bb1').text() !== "null") && ($('#bb1').text()===$('#bb2').text()) && ($('#bb1').text()===$('#bb3').text())) {
  			alert("Winner! " + $('#bb1').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#cc1').text() !== "null") && ($('#cc1').text()===$('#cc2').text()) && ($('#cc1').text()===$('#cc3').text())) {
  			alert("Winner! " + $('#cc1').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#aa1').text() !== "null") && ($('#aa1').text()===$('#bb1').text()) && ($('#aa1').text()===$('#cc1').text())) {
  			alert("Winner! " + $('#aa1').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#aa2').text() !== "null") && ($('#aa2').text()===$('#bb2').text()) && ($('#aa2').text()===$('#cc2').text())) {
  			alert("Winner! " + $('#aa2').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#aa3').text() !== "null") && ($('#aa3').text()===$('#bb3').text()) && ($('#aa3').text()===$('#cc3').text())) {
  			alert("Winner! " + $('#aa3').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#aa1').text() !== "null") && ($('#aa1').text()===$('#bb2').text()) && ($('#aa1').text()===$('#cc3').text())) {
  			alert("Winner! " + $('#aa1').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else if(($('#aa3').text() !== "null") && ($('#aa3').text()===$('#bb2').text()) && ($('#aa3').text()===$('#cc1').text())) {
  			alert("Winner! " + $('#aa3').text());
  			winner = true;
  			$('#whosmove').text("");
  		} else {
  			console.log("keep playing");
  		}
  	}


});