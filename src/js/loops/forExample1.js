// Exibir todos os números entre -10 e 19
console.log("Exibir todos os números entre -10 e 19");
for (var i = -10; i <= 19; i++) {
	console.log(i);
}

// Exibir todo os números pares entre 10 e 40
console.log("Exibir todo os números pares entre 10 e 40");
for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// Exibir todo os números ímpares entre 300 e 333
console.log("Exibir todo os números ímpares entre 300 e 333");
for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

// Exibir todos os números entre 5 e 50 que sejam divisíveis por 3 e 5
console.log("Exibir todos os números entre 5 e 50 que sejam divisíveis por 3 e 5");
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 ===0) {
		console.log(i);
	}
}
