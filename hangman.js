// hangman set up the layout

// make the list of words to guess
var chosenWords = ["angel", "debbie", "phillip", "snow", "summer", "winter"];

// since you are guessing letters, set up the inital to be empty for strings
var guessWords = "";

// set the array up to be empty for letters in the chosenwords
var lettersInChosenWords = [];

// set the array up to be empty for letters that are successfull
var successfullLetters = [];

// set the array up to be empty for wrong letters
var wrongLetters =[];

// set up the blanks (which will be  set up at 0)
var blanks = 0;

// set up the guesses left to be 5
var guessesLeft = 5;

// set up the wincounter to be 0 initially
var winCounter = 0;

// set up the losscounter ot be 0 initially
var losscounter = 0;

//1) First Function. When writing this function think about things you want
  // cleared out for each round
// Make the function for lets play, be sure to use the variables you made above
function letsplay () {
	guessesLeft = 5;

// randomly select a word from the list
	guessWords = chosenWords[Math.floor(Math.random() * chosenWords.length)];

// split the random word into letters
	lettersInChosenWords = guessWords.split("");

// the amount of blank letters displayed is based on how long your word is 
	blanks = chosenWords.length;

	console.log(blanks);

// set up the letters in chosen words to be empty when  you initially start
	successfullLetters =[];

// set up the wrong letters to be empty when you initally start
	wrongLetters =[];

// set up the the _ based on how long the word is_
	for (var i = 0; i<guessWords.length; i++) {
		successfullLetters.push("_");
	}
 
}


console.log(successfullLetters);


// This is calling the id in the HTML.
// Change the HTML for guessses Left to the intial amount of 5
document.getElementById("guessesLeft").innerHTML = guessesLeft;

// This is calling the id in the HTML. 
// Change the HTML for the wordblanks
document.getElementById("wordblanks").innerHTML = blanks.join("");


// This is calling the id in the HTML. 
// Change the HTML for the  wrong guesses, so
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("");

// 2)Function. Think about the if/else if the wrord is not going to be captured, what 
// will you do? Such as delete words

function checkletters (letter){

// set this initally to false to test it
	var letterGuess = false;

// make the for loop for the blanks and these if/else statements
	for (var i = 0; i<blanks.length; i++) {
	// if the respective letter matches each letter then change letter guess to true
		if (guessWords[i] == letter) {
			letterGuess = true;
			console.log('if guessletter fired');
		}
		console.log(letterGuess);
	}
// We are going to now test the letterguess, which is the variable
// to test it against the s

// make the fo loop for each blank space
	if (letterGuess) {
		for (var i = 0; i<blanks.length; i++) {

	// this is if the letter matches
			if (guessWords[i] == letter) {
				successfullLetters[i] = letter;
				}
		}	
	}	
				// if the letter doesn't match, push it to wrongLetters array 
				// you are going to add to the loss counter
			 else {
				wrongLetters.push(letter);

				losscounter --;

		

	}

}

function roundDone() {
	// Count how many wins, losses, and guesses left
		console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | GuessesLeft: " + guessesLeft);

// Display the guesses
	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); 
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");  

}
