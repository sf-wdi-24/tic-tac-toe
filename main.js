// wait for DOM to load before running JS
$(document).ready(function(e){
	var turnCount=0;


      $('#board').find('.col-xs-4.box').on('click', function(){
            if (turnCount % 2 === 0){

              if($(this).text() == ""){
              	$(this).text('X');
              }
              checkWinner('X');

            } else {
              if($(this).text() == ""){
              	$(this).text('O');
              }
             
               checkWinner('O');
             }
            
          turnCount++;
          
      });
});

	$('button.btn.btn-default').on('click',function(e){
		$('#board').find('.col-xs-4.box').text("");
		
});



function checkWinner(player){
	var boxA = $('#board').find('#a').text();
	var boxB = $('#board').find('#b').text();
	var boxC = $('#board').find('#c').text();
	var boxD = $('#board').find('#d').text();
	var boxE = $('#board').find('#e').text();
	var boxF = $('#board').find('#f').text();
	var boxG = $('#board').find('#g').text();
	var boxH = $('#board').find('#h').text();
	var boxI = $('#board').find('#i').text();

	if(boxA != ""){	
		if (boxA === boxB){
			if(boxA === boxC){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}
	if(boxD !== ""){
		if(boxD === boxE){
			if(boxD === boxF){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}
		if(boxG !== ""){
		if(boxG === boxH){
			if(boxG === boxI){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}
		if(boxA !== ""){
		if(boxA === boxD){
			if(boxA === boxG){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}	if(boxB !== ""){
		if(boxB === boxE){
			if(boxB === boxH){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}	if(boxC !== ""){
		if(boxC === boxF){
			if(boxC === boxI){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}
		if(boxA !== ""){
		if(boxA === boxE){
			if(boxI === boxA){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}
		if(boxG !== ""){
		if(boxG === boxE){
			if(boxG === boxC){
		alert("Game over "+player+" "+"is the winner!");
		}
	}}
		
}