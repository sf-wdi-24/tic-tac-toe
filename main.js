// wait for DOM to load before running JS
$(document).ready(function() {
  // your code here
      var clickCount = 0;
    var record = [];
    var winCases = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[3,4,5]];
    function declareWinner(move) {
      for (var i = 0; i < winCases.length; i++) {
        var cases = winCases[i];
        var count = 0;
        for (var j = 0; j < move.length; j++) {
          if (cases.indexOf(move[j]) > -1) {
            count++;
          }
          if (count === 3) {
            break;
          }
        }
        if (count === 3) {
          break;
        } else {
          count = 0;
        }
      }
      if (count === 3) {
        return true;
      } else return false;
    }
    function play (event){
        clickCount++;
      if (clickCount % 2 !== 0) {
        $(this).append("<h1 id='x'>X</h1>");
        $(this).off('click');
        } else if (clickCount % 2 === 0) {
          $(this).append("<h1 id='o'>O</h1>");
          $(this).off('click');
        }
      //record index of x boxes and o boxes
      record.push(event.data.x);
      if (record.length >= 5) {
          //get index of x boxes
        var x = record.filter(function(value,i) {
          return i % 2 === 0;
        });
        //get index of o boxes
        var o = record.filter(function(value,i) {
          return i % 2 !== 0;
        });
        //declare winner, get score, notify winner, disable the click of remaining box
        if (declareWinner(x)) {
          //get score for x
          $('#x-score').html(function(i, value) { //value here is O in span
            return value*1+1;
          });
          $('#winner').html("X Wins").fadeOut(500).fadeIn(500);
          $('.box').off('click');
        } else if (declareWinner(o)) {
          //get score for o
          $('#o-score').html(function(i, value) { //value here is 0 in span
            return value*1+1;
          });
          $('#winner').html("O Wins").fadeOut(500).fadeIn(500);
          $('.box').off('click');
        } else if (!declareWinner(x) && !declareWinner(o) && clickCount === 9) {
          alert('It\' a tie game');
        }
      }
    }

    $('.box').each(function(index){
        $(this).on('click', {x:index}, play);
    });
    //reset record and all counter, clear the board, then play again
    $('#reset').on('click',function(){
      clickCount = 0;
      record = [];
      count = 0;
      $('.box').empty();
      $('#winner').empty();
      $('.box').off('click');
      $('.box').each(function(index){
        $(this).on('click', {x:index}, play);
      });
    });
});