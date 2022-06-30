// ===== if Assignments: ===== //
// Assignment 1:

let start = 10
let end = 100
let exclude = 40

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue
  console.log(i)
}
// Output
10
20
30
50
60
70
80
90
100

// Assignment 2:

let start0 = 10
let end0 = 0
let stop = 3

for (let i = start0; i >= end0; i--) {
  if ( i == start0) console.log(i);
  else if(i < start) {
    i = '0' + i;
    console.log(i);
    if (i == stop) break;
  }
}

// Output
10
09
08
07
06
05
04
03

// Assignment 3:

let start1 = 1;
let end1 = 6;
let breaker = 2;

for (let i = start1; i <= end1; i++) {
  console.log(`${i}
-- ${breaker}
-- ${end1 - breaker}
`);
  
}

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

// Assignment 4:

let index = 10;
let jump = 2;
let end2 = 0;

for (i = index; i > end2 + jump; i -= jump) {
  console.log(i);
}

// Output
/*
10
8
6
4
*/

// Assignment 5:

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let num = letter.indexOf(letter);
let k = num;

for (let i = num; i < friends.length; i++) {
  if (friends[i].charAt() === letter.toUpperCase()){
    continue;
  }
  k++;
  console.log(`${k} => ${friends[i]}`);
  
}

// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

// Assignment 6:

let start2 = 0;
let swappedName = "elZerO";
let newName = [];

for (let i = start2; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    newName[i] = swappedName[i].toUpperCase();
  }
  else
    newName[i] = swappedName[i].toLowerCase();
}
console.log(newName.join(""));

// Output
/*
"ELzERo"
*/

// Assignment 7:

let start3 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = ++start3; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }  
}

// Output
/* 
2
3
4
*/
