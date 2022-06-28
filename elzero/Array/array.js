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

// Assignment 1:

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-num + (-num/num), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Assignment 2:

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

// Assignment 3:

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = finalArr.concat(arrTwo.shift(), arrTwo.shift(), arrOne, arrTwo.pop()).reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment 4:

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let z = 0;

console.log(words.pop().shift().slice(++z + z).toUpperCase()); // ZERO

// Assignment 5:

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if ( haystack.indexOf(needle) !== -1 ) {
    console.log("Found");
}

if ( haystack.lastIndexOf(needle) !== -1 ) {
    console.log("Found");
}

if ( haystack.includes(needle) === true ) {
    console.log("Found");
}

// Assignment 6:

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift() + arr1.shift();
arr2.shift() + arr2.shift();
allArrs = allArrs.concat(arr2.shift() + arr1 + arr2.pop());

console.log(allArrs.join().toLowerCase()); // fxy