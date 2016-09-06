// *** Print Reverse ***

function printReverse(arr) {
	// inverter ordem dos elementos
	// for loop, começando de cima para baixo
	for (i = arr.length ; i > -1; i--) {
		// imprimir na nova ordem	
		console.log(arr[i]);
	}
}

// *** Is Uniform ***

function isUniform(arr) {
	// rodar loop
	for (i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			return false;
		}
	}
		return true;
}

// *** Sum Array ***

function sumArray(arr) {
	var soma = 0;
	for (i = 0; i < arr.length; i++) {
		//criar variavel para armazenar valor somado
		soma += arr[i];
	}
	//retornar valor da soma	
	return soma;
}

// *** Max Number ***

function max(arr) {
	// for loop
	var max;
	for (i = 1; i < arr.length; i++) {
		// compara o i com i-1
		if (arr[i] > arr[i-1]) {
			max = arr[i];
		}		
	}
		return max;
}
