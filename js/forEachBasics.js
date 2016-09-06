// aparentemente, executa uma ação para cada elemento dentro de um array

// anonymous function expression
var num = [1,2,3,4];

num.forEach(function(i) {
	console.log(i);
})

// function declaration
var num = [1,2,3,4];

function printThings(x) {
	console.log(x);
}

function printThingsPost(x) {
	console.log(x + " Post");
}

function printThingsPre(x) {
	console.log("Pre " + x);
}

num.forEach(printThings);
num.forEach(printThingsPre);
num.forEach(printThingsPost);
