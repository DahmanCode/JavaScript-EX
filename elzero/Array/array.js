/* Array Challenge */

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.splice(++counter);

console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

let My =  my.splice(zero, counter - zero);

let mY = My.join("").slice(--zero, --counter) + My.join("").slice(-counter * counter);

console.log(mY); // "Elzero"

console.log(mY.charAt(counter * counter) + mY.slice(-1).toUpperCase()); // "rO"