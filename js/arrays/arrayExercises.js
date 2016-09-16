var exemplo = [1,5,10,5,20,0]

// *** Print Reverse - Inverte ordem dos elementos de um array ***
function printReverse(arr) {	
	for (i = arr.length ; i > -1; i--) { // for loop, começando de cima para baixo
		console.log(arr[i]); // imprimir na nova ordem	
	}
}

// *** Is Uniform - Verifica se todos os elementos do array são iguais ***
function isUniform(arr) {
	for (i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[0]) { // enquanto os elementos forem iguais, a verificação continua.
			return false; // no primeiro retorno false, loop termina a execução
		}	}
	return true;
}

// *** Sum Array - Soma todos os elementos de um array ***
function sumArray(arr) {
	var soma = 0; // variavel para armazenar valor somado
	for (i = 0; i < arr.length; i++) {		
		soma += arr[i];
	}
	return soma; //retornar valor da soma	
}

// *** Max Number - Retorna o maior número dentro do array ***
function max(arr) {
	var max;
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i-1]) { // compara o i com i-1
			max = arr[i];
		}	}
	return max;
}
