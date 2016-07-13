// hangman set up the layout

// make the list of words to guess
var wordsList = ["angel", "debbie", "phillip", "snow", "summer", "winter"];

// since you are guessing letters, set up the inital to be empty for strings
var chosenWord  = "";

// set the array up to be empty for letters in the chosenwords
var lettersInChosenWord = []; 

// set the array up to be empty for wrong letters
var blanksAndSuccesses = []; 

// set up the blanks (which will be  set up at 0)
var numBlanks = 0;

// set up the guesses left to be 5
var numGuesses = 5;

// set up the wincounter to be 0 initially
var winCounter = 0;

// set up the losscounter ot be 0 initially
var lossCounter = 0;

//1) First Function. When writing this function think about things you want
  // cleared out for each round
// Make the function for lets play, be sure to use the variables you made above
function startGame() {
	numGuesses = 5;

// randomly select a word from the list
	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 

// split the random word into letters
	lettersInChosenWord = chosenWord.split("");

// the amount of blank letters displayed is based on how long your word is 
	numBlanks = lettersInChosenWord.length;

	console.log(chosenWord);

// set up the letters in chosen words to be empty when  you initially start
	blanksAndSuccesses = [];

// set up the wrong letters to be empty when you initally start
	wrongGuesses = [];

// set up the the _ based on how long the word is_
for (var i=0; i <numBlanks; i++){
		blanksAndSuccesses.push("_");
}

console.log(blanksAndSuccesses);


// This is calling the id in the HTML.
// Change the HTML for guessses Left to the intial amount of 5
document.getElementById("guessesLeft").innerHTML = numGuesses;

// This is calling the id in the HTML. 
// Change the HTML for the wordblanks
document.getElementById("wordblanks").innerHTML= blanksAndSuccesses.join(" ");


// This is calling the id in the HTML. 
// Change the HTML for the  wrong guesses, so
document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");

// 2)Function. Think about the if/else if the wrord is not going to be captured, what 
// will you do? Such as delete words
}

function checkLetters (letter){

// set this initally to false to test it
	var letterInWord = false; 

// make the for loop for the blanks and these if/else statements
	for (var i=0; i<numBlanks; i++) {
	// if the respective letter matches each letter then change letter guess to true
		if(chosenWord[i] == letter) {
			letterInWord = true;
			console.log('if guessletter fired');
		}
		console.log(letterInWord);
	}
// We are going to now test the letterguess, which is the variable
// to test it against the s

// make the fo loop for each blank space
	if(letterInWord){
		for (var i=0; i<numBlanks; i++){

	// this is if the letter matches
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
				}
		}
		console.log(blanksAndSuccesses);	
	}	
				// if the letter doesn't match, push it to wrongLetters array 
				// you are going to add to the loss counter
	else {
		wrongGuesses.push(letter);

		numGuesses--;
		
	}

}

function roundComplete(){
	// Count how many wins, losses, and guesses left
		console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

// Display the guesses
	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");   

	if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
		winCounter++; // add to the win counter 
		alert("You win!"); // give the user an alert

		// Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML= winCounter;
		startGame();  // restart the game 
	}

	// If we've run out of guesses
	else if(numGuesses == 0) {
		lossCounter++; 	 // add to the loss counter 
		alert("You lose"); // give the user an alert

		// Update the loss counter in the HTML
		document.getElementById("lossCounter").innerHTML= lossCounter; 
		startGame(); // restart the game
	}

}

startGame();

document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr
	
	checkLetters(letterGuessed); // runs the code to check for correctness 
	roundComplete(); // runs the code after each round is done
}

