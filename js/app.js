
$(document).ready(function()
{

/* Declare variables */

var userInput;
var unknownInteger;


/* Play the game */

	randomInteger();
	UserInput();

});

/* Generate a random number between 1 and 100 */

function randomInteger()
{
	unknownInteger = Math.floor(Math.random() * 101);
	console.log("unknownInteger= " + unknownInteger);
	return unknownInteger;
}

/* Capture user input/guesses */

function UserInput()
{
	var correctGuess = false;
	var guessCounter = 0;
	$('form').submit(function(event){ // examples contain "event" in () for the function, why?  In other words, I need to understand this line better as a whole
		event.preventDefault(); // remember this method!
		if (!correctGuess){
  			userInput = $('input#userGuess.text').val();
  			console.log("userInput= " + userInput);

  			// reset input field

  			$('form').trigger("reset");

  			// increment guess counter

  			guessCounter++;
  			console.log("counter=" + guessCounter);
  			$('#count').text(guessCounter);
  			
  			// add guess to guess window 

  			$('<li>' + userInput + '</li>').appendTo(".guessBox");

  			// provide feedback
  			
  			var guessDelta = Math.abs(userInput - unknownInteger);
  			if (guessDelta > 50){
  				console.log("cold as fuck!");
  			} else if (guessDelta >=30 && guessDelta <= 50) {
  				console.log("cold.");
  			} else if (guessDelta >=20 && guessDelta < 30) {
  				console.log("warm.");
  			} else if (guessDelta >=10 && guessDelta < 20) {
  				console.log("hot.");
  			} else if (guessDelta >0 && guessDelta < 10){
  				console.log("Jen Selter's ass!")
  			} else if (guessDelta == 0) {
  				console.log("BINGO!");
  				correctGuess = true; // stop taking input until a new game is initiated.
  			}	

  			
  		}
	});
}


/* ORIGINAL CODE BUNDLED WITH FORK - ADD BACK IN AFTER GETTING CORE PROGRAM FUNCTIONAL */

	/*--- Display information modal box ---
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

*/

  	/* generate a random number */