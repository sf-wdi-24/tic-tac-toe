// wait for DOM to load before running JS
console.log("JavaScript is working!");

$(document).ready(function () {
});

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

$('#board').click(function() {
   $('#counter').html(function(i, val) { return val*1+1; });
});

$('#a').click(function() {
  	if ($('#a' ==='')) {
    $('#whichcell').html(function() { return "You clicked on cell a!"; });
  	 } else {
   	event.preventDefault();
};
});

$('#b').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell b!"; });
});
$('#c').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell c!"; });
});
$('#d').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell d!"; });
});
$('#e').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell e!"; });
});
$('#f').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell f!"; });
});
$('#g').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell g!"; });
});
$('#h').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell h!"; });
});
$('#i').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell i!"; });
});

$('button').click(function() {  //reset button to change all <p> text to blank
    $('p').text(" ");
//});
//    alert("New game!");
  });

