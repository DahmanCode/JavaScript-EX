// Challenge 1

let a = 10;
let b = "20";
let c = 80;

// 1 
console.log(++a + +b++ + +c++ - +a++); // 100
// 2 
console.log(++a + -b + +c++ - -a++ + +a); // 100
// 3
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100

/* 
    [.. (+ or - or * or /) ..]
    - Explain: Arithmetic Operators
    [ (+ or -)..]
    - Explain: Unary Operators
*/

/*  // 1
    [++a] [b++] [c++] [a++]
    [++a]
    - Value: 11
    - Explain: Pre-Increment
    [b++]
    - Value: 20
    - Explain: Post-Increment
    [c++]
    - Value: 80
    - Explain: Post-Increment
    [a++]
    - Value: 11
    - Explain: Post-Increment 
*/

/*  // 2
    [++a] [-b] [c++] [-a++] [a]
    [++a]
    - Value: 13
    - Explain: Pre-Increment
    [-b]
    - Value: -21
    - Explain: In (// 1) we have b++ so now the value of b is 21
    [c++]
    - Value: 81
    - Explain: Post-Increment
    [a++]
    - Value: -13
    - Explain: Post-Increment
    [a]
    - Value: 14
    - Explain:couse the last value of a is 14
*/

/*  // 3
    [--c] [b] [--a] [b++] [b] [a] [--a] [true]
    [--c]
    - Value: 81
    - Explain: Pre-Increment
    [b]
    - Value: 21
    [--a]
    - Value: 13
    - Explain: Pre-Increment
    [b++]
    - Value: 21
    - Explain: Post-Increment
    [b]
    - Value: 22
    [a]
    - Value: 13
    [--a]
    - Value: 12
    - Explain: Pre-Increment
    [true]
    - Value: 1
*/

// Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only We Use Variables Value
// We Do Not Use Variable Twice

console.log(-d * +e); // 100 * 20 = 2000
console.log(-d + ++f + ++e * ++g); // 100 + 31 + 21 * 2 = 173
