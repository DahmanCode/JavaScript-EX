// Assignment 1 :

let num = 9; // "009"
if (num < 10) {
    num = "00" + num;
}
else if (num >= 10 && num < 100) {
    num = "0" + num;
}
else {
    num == num;
}

console.log(num);

// Assignment 2:

let Num1 = 9;
let str = "9";
let str2 = "20";

if (Num1 == str) {
    console.log("{num1} Is The Same Value As {str}");
}

if (Num1 == str && typeof Num1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (Num1 !== str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (str != str2 && typeof str == typeof str) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value" );
}

// Output
/* 
  "{num1} Is The Same Value As {str}"
  "{num1} Is The Same Value As {str} But Not The Same Type"
  "{num1} Is Not The Same Value Or The Same Type As {str2}"
  "{str} Is The Same Type As {str2} But Not The Same Value" 
*/

// Assignment 3:

let nuM1 = 10;
let nuM2 = 30;
let nuM3 = "30";

/* nuM3 > nuM1 && typeof nuM3 != typeof nuM2 
? console.log(`${nuM3} Is Larger Than ${nuM1} And Type string Not The Same Type As number
${nuM3 == nuM2 
  ? console.log(`${nuM3} Is Larger Than ${nuM1} And Value Is The Same As ${nuM2} And Type string Not The Same Type As number`) 
  : console.log(Unknown)}
  ${nuM3 !== nuM1 
    ? console.log("{nuM3} Value And Type Is Not The Same As {nuM1} And Type Is Not The Same As {nuM2}") 
    : console.log(Unknown)}`) 
: console.log(Unknown); */

if (nuM3 > nuM1 && typeof nuM3 != typeof nuM2) {
  console.log(`${nuM3} Is Larger Than ${nuM1} And Type string Not The Same Type As number`);
  if (nuM3 == nuM2 ) {
    console.log(`${nuM3} Is Larger Than ${nuM1} And Value Is The Same As ${nuM2} And Type string Not The Same Type As number`);
    if (nuM3 !== nuM1) {
      console.log("{nuM3} Value And Type Is Not The Same As {nuM1} And Type Is Not The Same As {nuM2}");
    }
  }
}

// Needed Output
/* 
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{nuM3} Value And Type Is Not The Same As {nuM1} And Type Is Not The Same As {nuM2}"
*/

// Assignment 4:

/*
let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;
*/

let num0 = 19;
let nUm2 = 10;
let num3 = 19;
let num4 = 49;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num0 > nUm2) {
console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num0 > nUm2 && num0 < num4) {
console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num0 > nUm2 && num0 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num0 + nUm2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num0 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num0 + nUm2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num0 + num3) + nUm2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
