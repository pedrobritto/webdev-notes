// Arrays podem agrupar vários dados dentro de uma única variável
// Em vez de escrever:
var friend1 = "Elbridge";
var friend2 = "Adha";
var friend3 = "Thorhof";

// pode-se escrever
var friend = ["Elbridge", "Adha", "Thorhof"];

// Cada elemento possui um índice, começando do 0
// Pode-se acessar os elementos com esse índice da seguinte forma
friend [0] // "Elbridge"

// Para adicionar um novo dado ou modificar um existente, usa-se
friend[i] = value
	// i é o índice que se quer modificar
	// value é o dado que se quer inserir no array

// Modos de se inicializar um array vazio
var variable = [];
var variable = new Array(); // pouco utilizado

// Arrays podem conter qualquer tipo de dado
var dataTypes = [10, "olá", true, null];

// Arrays possuem uma propriedade .length que mostra o número de elementos nele
var nums = [1, 2, 3, 4];
console.log(nums.length); // 4 

// ARRAY METHODS
// Funções do Js para manipulação de Arrays

// PUSH E POP
// Push = Adiciona um novo dado ao FINAL do array.
var nums = [1,2,3,4]; // 1, 2, 3, 4
nums.push(5); // retorna a quantidade de elementos após a adição
console.log(nums); // 1,2,3,4,5

// Pop = Removo o ÚLTIMO elemento do array.
nums.pop(); // retorna o elemento removido pelo pops()
console.log(nums); // 1,2,3,4

// UNSHIFT E SHIFT - similares a push e pop
// Unshift = Adiciona um novo elemento no INÍCIO do array
var nums = [1,2,3,4];
nums.unshift(0); // retorna a quantidade de elementos após a adição
console.log(nums); // 0,1,2,3,4

// Shift = Removo o PRIMEIRO elemento do array.
nums.shift(); // retorna o elemento removido pelo pops()
console.log(nums); // 1,2,3,4

// INDEX OF
// usa-se indexOf() para encontrar o índice de um elemento no array
var names = ["Pedro", "Paola", "Ralph", "Paola"];
names.indexOf("Ralph"); // Retorna 2
names.indexOf("Paola"); // Retorna 1 (não 3), a primeira posição onde um elemento repetido pode ser encontrado

// retorna -1 se o elemento não estiver presente
names.indexOf("Antônio"); // Retorna -1

// SLICE
// usa-se slice() para copiar partes de um array
var cars = ["Focus", "Model 3", "Model S", "Golf"];

// usando slice para copiar os elementos 1 e 2 para o novo array ev.
// o valor 1 especifica o primeiro elemento a ser copiado, de forma inclusiva
// o valor 3 especifica o ultimo elemento a ser copiado, de forma não inclusiva
// ou seja, apenas os elementos de índice 1 e 2 serão copiados. o 3 não é incluso
var eCars = cars.slice(1,3);

// o array de onde os valores foram copiados não é alterado, ou seja:
cars 	// "Focus", "Model 3", "Model S", "Golf"
eCars	// "Model 3", "Model S"

// para copiar um array inteiro, basta utilizar slice() sem argumentos
var nums = [1,2,3,4];
var numsCopy = nums.slice();
// os dois arrays terão os mesmos elementos

// SPLICE
// ver https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// PARA OUTROS MÉTODOS
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
