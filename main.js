// wait for DOM to load before running JS
$(document).ready(function() {
	var counter = 0;
	var name = "";
	var winner = false;
	var last_player = "";
	var player_two = "Default";
	var moveArray = [];
  var wait = false;
  
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
  		if(($(idiwant).text() === "null") && (wait === false) && (winner === false) && ($('#setBoard').text() !== "Start Game")){
	  		if(counter%2 === 0){
	  			$(idiwant).text("X");
          console.log($(idiwant).addClass("x"));
	  			$(idiwant).addClass("x");
	  			$(idiwant).show();
          idToNumber(idiwant);
          last_player = name;
				  getWinner();
	  			$('#whosmove').text(player_two + "'s move!");
	  			counter += 1;
	  		} else if(($('#ComputerTrueCheckbox').prop("checked") === false) && (counter%2 !== 0)) {
	  			$(idiwant).text("O");
	  			$(idiwant).addClass("o");
          console.log($(idiwant).addClass("o"));
	  			last_player = player_two;
	  			$(idiwant).show();
				  getWinner();
	  			$('#whosmove').text(name + "'s move!");
	  			counter += 1;
	  		} else {
	  			computerMove();
	  			last_player = "Computer";
	  			getWinner();
	  			counter += 1;
	  		}
	  		$('#name').hide();
  			//console.log(counter);
  			if((counter === 9) && (winner === false)){
  				alert("Cat's game!");
  				$('#whosmove').text("");
  			}
  		} else {
  			// Assumes it's a new game
  			if (wait === true) {
          alert("Wait for computer to move");
        } else if($('#setBoard').text() === "Start Game"){
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
      $('.inbox').removeClass("x");
      $('.inbox').removeClass("o");
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

  	// The Computer's move
  	function computerMove() {
  		var computerMoveNum = randomMove();
  		console.log("computerMove: " + computerMoveNum);
  		if (computerMoveNum === undefined) {
        console.log("copmuterMoveNum is undefined");
        wait = true;
        setTimeout(computerMove,2500);
      } else if(computerMoveNum === 1){
  			$("#aa1").text("O");
  			$("#aa1").addClass("o");
  			$("#aa1").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 2){
  			$("#aa2").text("O");
  			$("#aa2").addClass("o");
  			$("#aa2").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 3){
  			$("#aa3").text("O");
  			$("#aa3").addClass("o");
  			$("#aa3").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 4){
  			$("#bb1").text("O");
  			$("#bb1").addClass("o");
  			$("#bb1").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 5){
  			$("#bb2").text("O");
  			$("#bb2").addClass("o");
  			$("#bb2").show();
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 6){
  			$("#bb3").text("O");
  			$("#bb3").addClass("o");
  			$("#bb3").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 7){
  			$("#cc1").text("O");
  			$("#cc1").addClass("o");
  			$("#cc1").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 8){
  			$("#cc2").text("O");
  			$("#cc2").addClass("o");
  			$("#cc2").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else if(computerMoveNum === 9){
  			$("#cc3").text("O");
  			$("#cc3").addClass("o");
  			$("#cc3").show();
        wait = false;
        moveArray.push(computerMoveNum);
  		} else {
  			console.log("not one of them");
  			setTimeout(computerMove,2500);
  		}
  		/*
  		switch(computerMoveNum) {
  			case 1: $("#aa1").text("O"); $("#aa1").addClass("o"); $("aa1").show(); console.log("c1"); break;
  			case 2: $("#aa2").text("O"); $("#aa2").addClass("o"); $("aa2").show(); console.log("c2"); break;
  			case 3: $("#aa3").text("O"); $("#aa3").addClass("o"); $("aa3").show(); console.log("c3"); break;
  			case 4: $("#bb1").text("O"); $("#bb1").addClass("o"); $("bb1").show(); console.log("c4"); break;
  			case 5: $("#bb1").text("O"); $("#bb2").addClass("o"); $("bb2").show(); console.log("c5"); break;
  			case 6: $("#bb1").text("O"); $("#bb3").addClass("o"); $("bb3").show(); console.log("c6"); break;
  			case 7: $("#cc1").text("O"); $("#cc1").addClass("o"); $("cc1").show(); console.log("c7"); break;
  			case 8: $("#cc1").text("O"); $("#cc2").addClass("o"); $("cc2").show(); console.log("c8"); break;
  			case 9: $("#cc1").text("O"); $("#cc3").addClass("o"); $("cc3").show(); console.log("c9"); break;
  		}*/
  	}

  	// Choosing random number to determine computer's move
  	function randomMove() {
  		var moveNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  		if(moveArray.indexOf(moveNumber) !== -1){
  			setTimeout(randomMove,2500);
  		} else {
  			console.log("randomMove else: " + moveNumber);
  			return moveNumber;
  		}
  	}

  	// Translates player move to number and adds to moved array
  	function idToNumber(move) {
  		if(move==="#aa1"){
  			moveArray.push(1);
  		} else if(move==="#aa2"){
  			moveArray.push(2);
  		} else if(move==="#aa3"){
  			moveArray.push(3);
  		} else if(move==="#bb1"){
  			moveArray.push(4);
  		} else if(move==="#bb2"){
  			moveArray.push(5);
  		} else if(move==="#bb3"){
  			moveArray.push(6);
  		} else if(move==="#cc1"){
  			moveArray.push(7);
  		} else if(move==="#cc2"){
  			moveArray.push(8);
  		} else if(move==="#cc3"){
  			moveArray.push(9);
  		} else {
  			console.error("itToNumber error: " + move);
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