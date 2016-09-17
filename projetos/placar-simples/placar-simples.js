// variaveis para armazenar pontuações
var scoreP1 = 0;
var scoreP2 = 0;
// definir placar vencedor
var winnerScore = 5;
var winnerScoreInput = winnerScore;
// variavel de controle do placar
var gameOver = false;

// mostrar 0 x 0 no HTML
$("#scoreP1").text(scoreP1);
$("#scoreP2").text(scoreP2);
// exibe winnerScore na página
$("#winnerScore").text(winnerScore);
// winnerScoreInput aparece como valor no <input>
$("#winnerScoreInput").val(winnerScoreInput); // .val(), e não .text(). já que input type="number"

init();

// função principal
function init() {
	scoreKeeper();
	resetButton();
	reset();
}

// escuta o <input> (.on("change", handler)). Executa :
$("#winnerScoreInput").on("change", function() {
	// guarda o valor do <input> em winnerScoreInput
	winnerScoreInput = Number($(this).val());
	// winnerScore receberá o valor armazenado em winnerScoreInput quando houver alteração em <input>
	winnerScore = winnerScoreInput;
	$("#winnerScore").text(winnerScore);
	reset();
});


function scoreKeeper() {
	// escuta o botão 1
	$("#buttonP1").on("click", function(){
		// enquanto gameOver for falso, o código irá executar quando houver clique
		if (!gameOver) {
			// adiciona 1 a scoreP1
			scoreP1++;
			// quando scoreP1 fica igual ao winnerScore, gameOver vira true.
			if (scoreP1 === winnerScore) {
				gameOver = true;
				$("#scoreP1").addClass("winner");
			}
			$("#scoreP1").text(scoreP1);
		}
	});

	$("#buttonP2").on("click", function(){
		// como esse código precisa que gameOver seja false para executar,
		// ele vai parar de funcionar quando scoreP1 ou scoreP2 for igual a winnerScore.
		if (!gameOver) {
			scoreP2++;
			if (scoreP2 === winnerScore) {
				gameOver = true;
				$("#scoreP2").addClass("winner");
			}
			$("#scoreP2").text(scoreP2);
		}
	});
}

function reset() {
	scoreP1 = 0; // reseta variáveis
	scoreP2 = 0;
	$("#scoreP1").text(scoreP1); 
	$("#scoreP2").text(scoreP2);
	$("#scoreP1").removeClass("winner");
	$("#scoreP2").removeClass("winner");
	gameOver = false; // reseta gameOver
}

function resetButton() {
	$("#reset").on("click", reset);
}
