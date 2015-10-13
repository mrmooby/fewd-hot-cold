
$(document).ready(function()
{

/* Declare variables */

var userInput;
var unknownInteger;
var guessCounter;
var correctGuess = false;

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
	$("form").submit(function(){ 		
  			userInput = $('input#userGuess.text').val();
  			console.log("userInput= " + userInput);
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