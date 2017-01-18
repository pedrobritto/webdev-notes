var numSquares = 6; // qtd de squares: 3 || 6
var colors = []; // array que armazena todas as cores
var pickedColor; // cor escolhida como solução

// **Variáveis de seletores**
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector(".colorDisplay"); 
		colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset-button");
var modeButtons = document.querySelectorAll(".mode");

// executa programa
init();

function init() {
	setupGameMode();
	setupSquares();
	reset();
}

function setupGameMode() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("btn-selected");
			modeButtons[1].classList.remove("btn-selected");
			this.classList.add("btn-selected");
			this.textContent === "Fácil" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {	
		squares[i].style.background = colors[i]; // dá a cor de squares[i] ao squares[i]
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background; // captura a cor de fundo do square clicado
			// compara *clickedColor* com *pickedColor*
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
}

// Reinicia as cores sem trocar modo de jogo
function reset() {	
	colors = generateRandomColors(numSquares); // gera *numSquares* cores novas
	pickedColor = pickColor(); // escolher uma delas como resposta
	for (var i = 0; i < squares.length; i++) { //loop para mudar cores dos squares novamente
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.opacity = "1";
		} else { squares[i].style.opacity = "0"; }
	}
	colorDisplay.textContent = pickedColor; // mudar texto da cor exibida
	h1.style.background = "steelblue"; // redefinir background do h1
	resetButton.textContent = "Novas cores"; // redefinir texto do resetButton
	message.textContent = ""; // redefinir texto de #message
}

// Faz botão de reinicio funcionar
resetButton.addEventListener("click", function(){
	reset();
});

// Ao acertar, todos os squares ficam com a mesma cor
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) { // faz checagem do modo de jogo
			squares[i].style.background = color; // todos os squares ficam com a cor *color*
			squares[i].style.opacity = "1"; // todos os squares ficam visíveis
		} else { squares[i].style.opacity = "0"; } // caso o modo seja Fácil, 3 últimos squares permanecem invisíveis
	}
}

// Gera cores aleatórias para o array colors
function generateRandomColors(num) {
	var arr = []; // inicializa array local
	for (var i = 0; i < num; i++) { // loop para adicionar *num* cores rgb aleatórias ao array
		// gerar cor RGB aleatória e inserir no array
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var rgbColor = "rgb(" + r +", " + g + ", " + b + ")"; // monta string utilizável -> rgb(r, g, b)
		arr.push(rgbColor) // adiciona cor gerada ao array *arr*
	}
	return arr; // retornar array
}

// Escolhe uma cor aleatória do arr *colors* como a correta
function pickColor() {
	// gera número aleatório de 0 a *colors.length* e armazena em *random*
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; // retorna colors[random]
}
