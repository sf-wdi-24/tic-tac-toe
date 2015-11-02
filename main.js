// wait for DOM to load before running JS
$(document).ready(function() {
	var counter = 0;
	var name = "";
	var winner = false;
	var last_player = "";
	var player_two = "Default";
  
  	// Set (or reset) board with null
  	$('#setBoard').click(function(){
  		if($('#setBoard').text() === "Start Game"){
		  	resetBoard();
		  	//Prompt for name (and eventually multi-player)
		  	name = prompt("Tell us your name and you're ready to play!");
		  	$('#name').text("Welcome " + name + "!");
		  	$('#whosmove').text("Your move!");	
		  	//Change button to 'reset board'
		  	$('#setBoard').text("Reset Board");
		  	if ($('#ComputerTrueCheckbox').prop("checked") === true){
				player_two = "Computer";
			} else {
				player_two = prompt("What is the second player's name?");
			}
			$('#ComputerTrueCheckbox').hide();
			$('#ComputerTrueCheckboxLabel').hide();
		} else {
		  	//Are you sure prompt? Then reset.
		  	certainResetBoard();
		}
	 });

  	// Action taken upon click within board
  	$('.box').click(function(){
  		var idiwant = "#"+this.id[0]+this.id;
  		// Assumes board is open and there is no winner yet
  		if(($(idiwant).text() === "null") && (winner === false) && ($('#setBoard').text() !== "Start Game")){
	  		if(counter%2 === 0){
	  			$(idiwant).text("X");
	  			$(idiwant).addClass("x");
	  			last_player = name;
				getWinner();
	  			$('#whosmove').text(player_two + "'s move!");
	  		} else {
	  			$(idiwant).text("O");
	  			$(idiwant).addClass("o");
	  			last_player = player_two;
				getWinner();
	  			$('#whosmove').text(name + "'s move!");
	  		}
	  		$(idiwant).show();
	  		$('#name').hide();
  			counter += 1;
  			console.log(counter);
  			if((counter === 9) && (winner === false)){
  				alert("Cat's game!");
  				$('#whosmove').text("");
  			}
  		} else {
  			// Assumes it's a new game
  			if($('#setBoard').text() === "Start Game"){
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
	  	if(counter === 0){
	  		$('#setBoard').text("Reset Board");
	  	} else {
	  		$('#setBoard').text("Start Game");
	  	}
	  	winner = false;
	  	counter = 0;
	  	$('#ComputerTrueCheckbox').show();
		$('#ComputerTrueCheckboxLabel').show();
  	}

  	// Are you sure you want to reset the board?
  	function certainResetBoard(){
		var reset_sure = prompt("Are you sure you want to reset the board? (Y/N)");
	  	if((reset_sure.toUpperCase() === "Y") || (reset_sure.toUpperCase() === "YES")){
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
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#bb1').text() !== "null") && ($('#bb1').text()===$('#bb2').text()) && ($('#bb1').text()===$('#bb3').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#cc1').text() !== "null") && ($('#cc1').text()===$('#cc2').text()) && ($('#cc1').text()===$('#cc3').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#aa1').text() !== "null") && ($('#aa1').text()===$('#bb1').text()) && ($('#aa1').text()===$('#cc1').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#aa2').text() !== "null") && ($('#aa2').text()===$('#bb2').text()) && ($('#aa2').text()===$('#cc2').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#aa3').text() !== "null") && ($('#aa3').text()===$('#bb3').text()) && ($('#aa3').text()===$('#cc3').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#aa1').text() !== "null") && ($('#aa1').text()===$('#bb2').text()) && ($('#aa1').text()===$('#cc3').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else if(($('#aa3').text() !== "null") && ($('#aa3').text()===$('#bb2').text()) && ($('#aa3').text()===$('#cc1').text())) {
  			alert("Winner: " + last_player + "!");
  			winner = true;
  			$('#whosmove').text(" ");
  		} else {
  			console.log("keep playing");
  		}
  	}


});