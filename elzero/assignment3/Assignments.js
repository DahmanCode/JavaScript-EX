// Assignment 1 :

console.log(10 * 20 + 15 % 3 - 190 - 10 % 400); // 0

// Assignment 2 :

let num = 3;
let B = true;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num-- * num); // 6

// Soultion Three
console.log(num++ * num--); // 6

// Soultion Four
console.log(num + num + num); // 6

// Solution Five
console.log(num * ++num); // 6

// Solution Six
console.log(num * ++B); // 6

// Assignment 3 :

let Num = "10";
let A = true;

// Solution One
console.log(+Num + +Num); // 20

// Solution Two
console.log(++Num + Num - ++A); // 20

// Solution Three
console.log(Num + --Num - --A); // 20

// Solution Four
console.log(++A * Num); // 20

// Assignment 4 :

let points = 10;
let t = true;

++points;  
points += ++t;

console.log(points); // 13

++points;
points /= +t;
points++;

console.log(points); // 8;