// Assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// My Solutions
console.log(1e5); // 100000
console.log(50_000 + 50_000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(100, 2.5)); // 100000
console.log(100 ** 2.5); // 100000
console.log(8e4 + 2e4); // 100000
console.log(6e4 + 4e4); // 100000
console.log(1e4 + 9e4); // 100000
console.log(7e4 + 3e4); // 100000

// Assignment 2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Assignment 3

console.log(((Number.MAX_SAFE_INTEGER).toString()).length);

// Assignment 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Assignment 5

let num = 10;

console.log(Number.isInteger(num).toString().length - num.toString().length); // 2

// Assignment 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number.isInteger(flt).toString().length * parseInt(flt).toString().length); // 10

// Assignment 7

console.log(Math.trunc(Math.random() * 5))