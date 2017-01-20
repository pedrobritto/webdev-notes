// Simple Lotery code
// Author: Pedro Britto
//
// ===================

// global params
var toGet = 3;
var maxNumber = 50;

// sortear x numeros aleatorios + armazenar num array
var randomArray = [];
var guessArray = [];
var gotRight = 0;

random(randomArray, toGet, maxNumber);
function random(array, generated, maxNumber) {
	for (var i = 0; i < generated; i++) {
		var randomNumber = Math.round(Math.random() * maxNumber);
		array.push(randomNumber);
	}
	console.log('Random: ' + randomArray);
}

// Pedir x numeros ao usuario e armazenar num array
getNumber(guessArray, toGet);
function getNumber(guessArray, numbersToGet) {
	for (var i = 0; i < numbersToGet; i++) {
		var input = parseInt(prompt('Type a number: '));
		guessArray.push(input);
	}
	console.log('Input: ' + guessArray);
}

// comparar randomArray com guessArray.
compare(toGet); 
function compare(n) {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			if (guessArray[i] === randomArray[j]) {
				gotRight++;
				console.log
			}
		}
	}
	console.log('got right: ' + gotRight);
}
