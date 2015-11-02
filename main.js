// wait for DOM to load before running JS
var arr = [[],[],[]]; // the board 
var movesBackground= "";
var totalMoves = 0;
var player = "";
var status = "continue";

//creating a board 3x3 of nulls + initiate the player

	function initiateGame(){

		status = "continue";
		totalMoves = 0;

		$(".inboard").removeClass("xBackground");
		$(".inboard").removeClass("oBackground");
		$("#announcments>p").remove();

	
		for (var i = 0; i < 3; i++){
			for(var j = 0; j<3; j++){
				arr[i][j] = null;
			}
		}
		player = prompt("who Is Starting? (X or O)");

			if ((player==="X") || (player==="x")){
				player = "x";
				$("#announcments").append("<p>x</p>");
			}
			else{
				player = "o";
				$("#announcments").append("<p>o</p>");
			}
	}

//place the move on the board and alternate between players
	
	function move(){

		var selectedDivId = this.id;
		var a = selectedDivId[0];
		var b = selectedDivId[1];
		if (arr[a][b] !== null){
			alert("this spot has already choosen");
		}
		else{
			arr[a][b] = player;

			if (player==="x"){
				$(this).addClass("xBackground"); 
				player = "o";	
				$("#announcments>p").text("O");
			}

			else{
				$(this).addClass("oBackground");
				player = "x";
				$("#announcments>p").text("X");
				}

				totalMoves+=1;
				status = winner();

				if (status === "game over"){
					alert("Game Over");
					return initiateGame();
				}
				else if ((status === "x")||(status === "o")){
					alert("the winner is: " + status);
					return initiateGame();
			}
		}

	}

//returning game status- winner/gameover/continue 

	function winner(){

		if ((totalMoves>4) && (totalMoves<=9)){
			if((arr[0][0] === arr[0][1]) && (arr[0][0] === arr[0][2]) && (arr[0][0] !== null)){
				return arr[0][0];	
			}
			else if((arr[1][0] === arr[1][1]) && (arr[1][0] === arr[1][2]) && (arr[1][0] !== null)){
				return arr[1][0];
			}
			else if((arr[2][0] === arr[2][1]) && (arr[2][0] === arr[2][2]) && (arr[2][0] !== null)){
				return arr[2][0];
			}
			else if((arr[0][0] === arr[1][0]) && (arr[0][0] === arr[2][0]) && (arr[0][0] !== null)){
				return arr[0][0];
			}
			else if((arr[0][1] === arr[1][1]) && (arr[0][1] === arr[2][1]) && (arr[0][1] !== null)){
				return arr[0][1];
			}
			else if((arr[0][2] === arr[1][2]) && (arr[0][2] === arr[2][2]) && (arr[0][2] !== null)){
				return arr[0][2];
			}
			else if((arr[0][0] === arr[1][1]) && (arr[0][0] === arr[2][2]) && (arr[0][0] !== null)){
				return arr[0][0];
			}
			else if((arr[0][2] === arr[1][1]) && (arr[0][2] === arr[2][0]) && (arr[0][2] !== null)){
				return arr[0][2];
			}			
			else if (totalMoves === 9){
				return "game over";
		}
	}
		else{
			return "continue";
		}
		
	}	
		

	 $(document).ready(initiateGame);
	 $(".inboard").click(move);
	 $("#button").click(initiateGame);
	





