/*
DEFINING FUNCTIONS
  Literals:
    named functions
    function expressions

  Constructors
    Do not use for performance issues

*/


// Named Functions
// Creates a functions with a name. In this case, named 'hello'.
function namedFunction() {
  console.log("Hello, World\n");
}

namedFunction();


// Functions Expressions
// Assigns an anonymous functions to a variable
var functionExpression = function() {
  console.log("Goodbye, World\n");
}

functionExpression(); // Works

var salute = function hi() {
  console.log("hi, there");
}

salute();


/* ------------------------------------------------- */

// Invoking Functions
// Runs the code inside the function.

// Use functions name, followed by parentheses
namedFunction();

// If parentheses are not used, the functions definition is returned
namedFunction;


/* ------------------------------------------------- */

// Return Values

function returnValue() {
  return "This is being returned";
}

// it's possible to pass the return value of a function to a variable
var returnValue = returnValue();

// returnValue now stores the string "This is being returned"
function noReturnValue() {
  console.log('No return value');
}

// If this is done without a return statemant inside a function, it will
// return undefined
var noReturnValue = noReturnValue();


/* ------------------------------------------------- */

// Parameters
// Are set when the function is defined. 'x' is a parameter
function square(x) {
  // console.log(arguments)
  return x * x;
}

// Arguments
// Are provided when the function is invoked. '2' is and argument
square(2);

// The 'arguments' variable
// Every function has an 'arguments' variable that contains every argument of
// the invoked function. It's array like.


/* ------------------------------------------------- */

// Default arguments
// if no argument is provided if parameters are set,
// 'undefined' will be returned

function sayHello(name) {
  console.log('Hello, ' + name + '.');
}

sayHello();         // prints "Hello, undefined."
sayHello('Pedro');  // prints "Hello, Pedro."

// you can use this to set default arguments.

function sayHello(name) {
  if (name === undefined) name = 'Default value';
  console.log('Hello, ' + name + '.');
}

// Or

function sayHello(name) {
  name = name || "Default value";
  console.log('Hello, ' + name + '.');
}

// Optional Arguments Values
// If a function accepts several parameters and some of them have default
// parameters, they should come AFTER non-default parameters.
// Not doing so could cause the non-default parameters to be undefined, thus
// causing the function to malfunction.



/*
=========
= Scope =
=========
*/

// Global Scope
// Variables declared outside functions are accessible for every function.

// Local Scope
// Variables declared inside functions are available only to those functions
// and functions nested in those functions.

var a = 'This is the GLOBAL scope';

function localA() {
  var a = 'This is the LOCAL scope';
  console.log('local:  ' + a);
}

localA();
console.log('global: ' + a);

// In the example above, the two 'a' variables are different ones, as
// they are declared in different scopes.

// Overwriting a global variable
var b = 'This is the GLOBAL scope';

function localB() {
  b = 'This is the LOCAL scope overwriting the GLOBAL one';
  console.log('local:  ' + b);
}

localB();
console.log('global: ' + b);

// As the 'var' is not being used to declare 'b' locally, the external 'b'
// variable will be used instead, as it exists in an outter scope.

// Creating a global variable from an local scope
// Just assign a value to a variable without using 'var' before it.

function localC() {
  c = 'Created in a local scope, accessible from any';
  console.log('local:  ' + c);
}

localC();
console.log('global: ' + c);

// using 'var c' would make it inaccessible from outside the function



/*
============
= Hoisting =
============
*/

// Variable Hoisting
// All declared variables are moved to the top of the function scope.
// However, the value assignments aren't.

function hoistingTest() {
  console.log('\nHoisting Test\n');
  console.log(a); // will print 'undefined';
  var a = 'contains a value';
  console.log(a) // will print the assigned value.
}

hoistingTest();

// If the 'a' variable weren't declared later in the function, there would be
// a 'not defined' error.

// BEST PRACTICE: declare and assign (if needed) at the start of the function

// Function Hoisting
// If a function is defined using a function declaration, the entire function
// will be hoisted, thus can be invoked before being declared in the code.

// If a function is defined using a funtion expresion (with variable), the
// function declaration will be hoisted, but not the function contents.
// It works the same as in the variable hoisting.

// This works for both functions inside functions and functions in the
// global scope.

// Will work
workingFunctionHoisting();
function workingFunctionHoisting() {
  console.log('This works');
}

// Will not work - '<variable name> is not a function'
  // nonWorkingFunctionHoisting();
  // var nonWorkingFunctionHoisting = function() {
  //   consoel.log('This will not work');
  // }



/*
=============
= Callbacks =
=============
*/

// A callback is a function that is passed as an argument to another

function pizza(topping, callback) {
  console.log('This is a ' + topping + ' pizza');
  callback();
}

pizza('Peperoni', eat);

// function for the callback

function eat() {
  console.log('Eating the pizza');
}

// The callback used as an argument should not have parentheses.
// It serves only as a reference, as the callback will be invoked during
// execution of the function, as it's parameter has parentheses.

// A callback can also be passed as a anonymous function
pizza('Ham', function() {
  console.log('This came from an anonymous function callback');
});

// Several callbacks can also be used
function tripleCallback(text, call1, call2) {
  console.log(text);
  call1();
  call2();
}

tripleCallback(
  'This function have several callbacks, even anonymous',
  function() { console.log('callback 1') },
  function() { console.log('callback 2') }
);


// Extra - Sorting Arrays better with sort() and a callback

var numbersToSort = [10, 4, 78, 7, 123, 2, 8, 52, 39, 10];
console.log('Numbers to sort:\n' + numbersToSort);

function compareNumbers(a, b) {
  return a - b;
}

var sortedNumbers= numbersToSort.sort(compareNumbers);
console.log('Sorted Numbers:\n' + sortedNumbers);

// A better version of the compareNumbers function is:

function bestCompareNumbers(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}

// it avoids overflows that may appear from subtracting eventual big numbers

// Here is an example of how flexible callbacks can be

function mean(values, callback) {
  var total = 0;
  for (var i = 0, max = values.length; i < max; i++) {
    if (typeof callback === "function" ) total += callback(values[i]);
    else total += values[i];
  }
  return total/max;
}

mean([1, 2], function(x) { return x*2 });

// This will replace the 'x' in the callback for each number in the
// 'values' array. In the function above, each value will be
// multiplied by 2.



/*
====================================
= Array Iterators (with callbacks) =
====================================
*/

// forEach()
// Is a method can be used to iterate over arrays.
// It takes a callback function as an argument that takes 3 arguments:
// value, index and the array itself.

var colors = ['red', 'green', 'blue'];

colors.forEach(function(value, index, array) {
  console.log('value: ' + value + '; index: ' + index + '; array: ' + array);
});


// map()
// Is similar to forEach(), but returns a new array with new values
// that are returned from the callback.
// Also accepts an anonymous callback function that takes 3 arguments,
// which are the same as in forEach()

var numbers = [1, 2, 3, 4, 5];

numbers.map(square);
// << [1, 4, 9, 16, 25]


// reduce()
// Makes cumulative operations to return a single value.
// The callback is the first argument and takes 2 arguments:
// previous value (or the total so far) and current value.
// previous value defaults to the first item in the array.
// The second argument for the reduce() method is the initial value
// of the previous value. You can think of it as an increment to the total.

[1,2,3,4,5].reduce( function(prev, current) {
  return prev + current;
});
// << 15

[1,2,3,4,5].reduce( function(prev, current) {
  return prev + current;
}, 10);
// << 25

// Example: calculate average word length in a sentence

function avgWordLength() {
  var sentence = 'The quick brown fox jumped over the lazy dog';
  var words = sentence.split(' ');
  var total = words.reduce( function(prev, word) {
    return prev + word.length;
  }, 0);

  return total/words.length;
}

avgWordLength();


// Example: square numbers in array and sum total

var squareAndSum =
[2,5,3,4.5] // starting array
  .map(function(x) { return x * x; }) // squares each item
  .reduce(function(prev,curr) { return prev + curr; }); // sums them together

console.log('Square and sum: ' + squareAndSum);

// Example: add sales tax and sum total

var sales = [100, 230, 55];
var totalAfterTaxes =
  sales.map(function(ammount) {
    return ammount * 1.15;
  })
  .reduce(function(prev, curr) {
    return prev + curr;
  });

console.log('total after taxes: ' + totalAfterTaxes);


// filter()
// Creates a new array containing only values that pass the filter

var filteredArray = [1,2,3,4,5,6,7,8,9].filter(function(number) {
  return (number % 2 === 0)
});

console.log(filteredArray);
