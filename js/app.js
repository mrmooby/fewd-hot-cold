
$(document).ready(function()
{

  /* Display information modal box */
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /* Hide information modal box */
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /* Initiate the first game */
  playGame();

  /* User can reset game at any time */
  $(".new").click(function(){
    newGame();
  });

});

/* Generate a random number between 1 and 100 */

function randomInteger() {
	unknownInteger = Math.floor(Math.random() * 101);
	console.log("unknownInteger= " + unknownInteger);
	return unknownInteger;
}

/* Set conditions for new game */

function newGame() {
    guessCounter = 0; 
    correctGuess = false; 
    $('#count').text(guessCounter);
    $('#feedback').text("Make your Guess!");
    $(".guessBox").html("");
    $('form').trigger("reset");
    randomInteger();
}

function playGame()
{
  newGame();
	$('form').submit(function(event){ // examples contain "event" in () for the function, why?  In other words, I need to understand this line better as a whole
		event.preventDefault(); 
		if (!correctGuess){
  		userInput = $('input#userGuess.text').val();

      /* validate the user input */
      if (isNaN(userInput)){
        $('#feedback').text("Guess must be a number.");
      } else if (userInput > 100 || userInput < 1 ) {
        $('#feedback').text("Guess must be between 1 & 100.");
      } else if (userInput % 1 != 0) {
        $('#feedback').text("Guess must be a whole number.");
      } else {

	     // reset input field

	     $('form').trigger("reset");

	     // increment guess counter

			guessCounter++;
			$('#count').text(guessCounter);
	
	     // add this guess to previous guesses list 

	     $('<li>' + userInput + '</li>').appendTo(".guessBox");

	     // provide feedback
	
	     var guessDelta = Math.abs(userInput - unknownInteger);
	     if (guessDelta > 50){
          $('#feedback').text("Ice cold!");
	     } else if (guessDelta >=30 && guessDelta <= 50) {
          $('#feedback').text("cold.");
	     } else if (guessDelta >=20 && guessDelta < 30) {
          $('#feedback').text("warm");
	     } else if (guessDelta >=10 && guessDelta < 20) {
          $('#feedback').text("hot");
	     } else if (guessDelta >0 && guessDelta < 10){
          $('#feedback').text("Sizzling hot!");
	     } else if (guessDelta == 0) {
          $('#feedback').text("You got it!  Click +NEW GAME to play again.");
		      correctGuess = true; // stop taking input until a new game is initiated.
	     }	
      }		
  	} 
	});

}





