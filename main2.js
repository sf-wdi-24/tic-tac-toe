// wait for DOM to load before running JS
console.log("JavaScript is working!");

$(document).ready(function () {

$('#a').click(function () {
	$(this).text("X");
});
$('#b').click(function () {
	$(this).text("X");
});
$('#c').click(function () {
	$(this).text("X");
});
$('#d').click(function () {
	$(this).text("X");
});
$('#e').click(function () {
	$(this).text("X");
});
$('#f').click(function () {
	$(this).text("X");
});
$('#g').click(function () {
	$(this).text("X");
});
$('#h').click(function () {
	$(this).text("X");
});
$('#i').click(function () {
	$(this).text("X");
});
  // your code here

$('#board').click(function () {
    $('#counter').html(function (i, val,) { 
    	return val*1+1;

      class="row col-md-12 box"

       row col-md-12 box
    	    

    	    // if (num % 2 === 0) {
        	//	return true;
    	//	} else {
        ///		return false;
 //   } 
// });

// $('#board').click(function (num) {
 //   if (num % 2 === 0) {
 //       return true;
  //  } else {
  //      return false;
  //  }
// });



});

// (0) User clicks on a cell in the div - and X or O is inserted to the cell. 

// (1) User clicks on the div, their click is counted and summed up.  
//This is a function that returns the sum, but no need to return that sum to the user. 


// (2) We create second function that takes the result of that function and tells us 
//if the sum and tells is even or odd, so the isEven function. 

// If sum is even, then the .click action inserts .text insert X in the cell
// If sum is odd, then .text insert O.  So an If / Else statement

// (3) Third function.  If the cell is taken, then don't write text, so maybe disable default action?

// (4) 4th function.  Result button has click action that clears all text that has been inserted.  
//So maybe the clear button replaces text of all nine cells with " "?