// needs a huge clean up and consistency fixes

var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
// define a cor correta através da função pickColor()
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
		colorDisplay.textContent = pickedColor;

var h1 = document.querySelector("h1");

var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset-button");

// select buttons css
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Add selected class to easy button and functions
easyBtn.addEventListener("click", function(){
	console.log("Clicked Easy");
	easyBtn.classList.add("btn-selected");
	hardBtn.classList.remove("btn-selected");
	numSquares = 3;
	reset();
});

// Add selected class to hard button and functions
hardBtn.addEventListener("click", function(){
	console.log("Clicked Hard");
	hardBtn.classList.add("btn-selected");
	easyBtn.classList.remove("btn-selected");
	numSquares = 6;
	reset();
});


// loop para squares - funções primarias
for (var i = 0; i < colors.length; i++) {
	// dá a cor do elemento i ao quadrado i
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		// grab background color of clicked square
		var clickedColor = this.style.background;
		// compare clickedColor and pickedColor
		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			message.textContent = "Correto!";
			resetButton.textContent = "Jogar de novo";
			h1.style.background = pickedColor;
		} else {
			this.style.opacity = "0";
			message.textContent = "Tente novamente";
		}
	});
}

resetButton.addEventListener("click", function(){
	reset();
});

// Modifica os quadrados ao acertar
function changeColors(color) {
	// loop through
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = color;
			squares[i].style.opacity = "1";
		} else { squares[i].style.opacity = "0"; }
	}
}

// Escolhe uma cor aleatória do array colors para ser a cor certa.
function pickColor() {
	// gera um numero aleatório de 0 a colors.length e armazena na var random
	var random = Math.floor(Math.random() * colors.length);
	// retorna colors[random], sendo random um índice aleatório
	return colors[random];
}

// Gerar cores aleatórias para o array colors
function generateRandomColors(num) {
	// criar array
	var arr = [];
	// adicionar num cores aleatórias ao array
	for (var i = 0; i < num; i++) {
		// gerar cor aleatória e inserir no array
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var rgbColor = "rgb(" + r +", " + g + ", " + b + ")";
		arr.push(rgbColor)
	}
	// retornar array
	return arr;
}

function reset() {
	console.log("reset function engaged");
	// gerar cores novas
	colors = generateRandomColors(numSquares);
	// escolher uma delas como resposta
	pickedColor = pickColor();
	//loop para mudar cores dos quadrados novamente
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.opacity = "1";
		} else { squares[i].style.opacity = "0"; }
	}
	// mudar texto da cor exibida
	colorDisplay.textContent = pickedColor;
	// redefinir background do h1
	h1.style.background = "steelblue";
	// redefinir texto do resetButton
	resetButton.textContent = "Novas cores";
	// redefinir texto de #message
	message.textContent = "";
}
