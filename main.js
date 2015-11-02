// wait for DOM to load before running JS
       $(document).ready(function() {
  
  // your code here
  
               var count = 1; 
               var playerX ="X";
               var playerO = "O";

               //var boxes = document.querySelector('#box');   //using querySelector to find all box ID's....use for winner? or to reset board?

               $('.box').click(function() {
               	
               	
                 count ++;

                	if (count % 2 === 0) {


                     
                     $(this).html("" + playerX);
  			    	 $(this).css('background-color', 'green');
  			    	 $(this).unbind('click');
  			    	 
  			    	 $('.turn').text("Player O turn...");
                 }


                   else {
                    $(this).html("" + playerO);
            		$(this).css('background-color', 'beige');
            		$(this).unbind('click');

            		
            		$('.turn').text("Player X turn...");
            	}     

                    

                   
                    $('.button').click(function() {  
                    $('.box').html(" ");
                    $('.square').css('background-color', 'grey');
                    $('.turn').text("Player X goes first...");
               
                    

   	});
                    
                });

                });

                
/*

// Determining a winner
 

functon checkWinner () {



     
     var a = $('.box').find('#a').text();
     var b = $('.box').find('#b').text();
     var c = $('.box').find('#c').text();
     var d = $('.box').find('#d').text();
     var e = $('.box').find('#e').text();
     var f = $('.box').find('#f').text();
     var g = $('.box').find('#g').text();
     var h = $('.box').find('#h').text();
     var i = $('.box').find('#i').text();



         if (a == b == c || d == e == f || g == h == i) {
         	alert ($('p').html ("Player " + $('.box').text(); + "is winner!"));
         }


         if (a == d == g || b == e == f || c == f == i)  {
         	alert ($('p').html ("Player " + $('.box').text(); + "is winner!"));

         }

         if (a == e == i) {
         	alert ($('p').html ("Player " + $('.box').text(); + "is winner!"));

         }

         if (c == e == g) {
         	alert ($('p').html ("Player " + $('.box').text(); + "is winner!"));
         }

     };


     */







        





         





                

           
       



      













  	
  	







  