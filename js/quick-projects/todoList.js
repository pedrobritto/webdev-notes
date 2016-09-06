// var de pergunta
var option = prompt("Escolha uma opção");

// Inicialização de variáveis
var toDo = []; // array onde as to-dos ficam armazenadas
var newToDo; // var que captura uma nova to-do a ser adicionada aa toDo[]

// enquanto resposta !== quit, perguntar novamente
while (option !== "quit") {
	if (option === "new" || option === "nova") {
		addToDo(); }

	else if (option === "list" || option === "listar") {
		showToDo(); }

	else if (option === "remove" || option === "remover") {
		removeToDo(); }

	else {
		noOption(); }

	var option = prompt("O que deseja fazer?");
}

// exibir ao encerrar aplicação
alert("Aplicação encerrada. Para recomeçar, atualize a página.");
console.log("Aplicação encerrada. Para recomeçar, atualize a página.");

// Declaração de funções

function addToDo() {
	//pedir nova tarefa
	newToDo = prompt("Nova tarefa:");
	//adicionar nova tarefa ao array toDo
	toDo.push(newToDo);
	console.log("Tarefa adicionada: " + "\"" + newToDo + "\"");
}

function showToDo() {
	// exibir as tarefas
	console.log("**********");
	toDo.forEach(function(element, index){
		console.log(index + ": " + element);
	})
	console.log("**********");
}

function removeToDo() {
	var indexToRemove = prompt("Indice da tarefa a ser removida:");
	console.log("Tarefa removida: " + "\"" + toDo[indexToRemove] + "\"");
	alert("Tarefa removida");
	toDo.splice(indexToRemove,1);
}

function noOption() {
	alert("Esse comando não existe.");
	console.log("Esse comando não existe.");
}
