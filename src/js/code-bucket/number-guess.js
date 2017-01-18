// create a secret number var
var secretNumber = 5;

// ask for a number
var stringGuess = prompt("Try your luck!");
var guess = Number(stringGuess);

// check number
if (guess === 5) {
	alert("You got it!");
}

// otherwise, too high
else if ( guess > 5) {
	alert("Too high. Try again.");
}

// otherwise, too low
else {
	alert("Too low. Try again.");
}
