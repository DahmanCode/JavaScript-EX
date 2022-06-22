// Variable And Concatenation Challenge

let Title = "Hello World", Description = "Welcome In My World", Date = "25/10";

var Content = `
    <div>
        <h3>${Title}</h3>
        <p>${Description}</p>
        <span>${Date}</span>
    </div>
`
document.write(`${Content.repeat(4)}`);

// Assignment 1 :

var NumberOne = 10, NumberTwo = 20;

console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof (NumberOne + "" + NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

console.log(NumberOne + "\n" +
NumberTwo);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${NumberOne}
${NumberTwo}`);
/*
    Template Literals Way
    20
    10
*/

// Assignment 2 :

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Assignment 3 :

console.log("\`I'm In" + "\n" +
"\\\\" + "\n" +
"Love \\\\ \"\"\" '''" + "\n" +
"\+\+ With \+\+" + "\n" +
"\\\"\"\"\\\"\"\"" + "\n" +
"\"\"JavaScript\"\"\`\`");

/* Output 👇🏼👇🏼 */

/* `I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""`` */

// Assignment 4 :


let a = 21;
let b = 20;

Num = "_2021"

console.log(`_${a}${Num.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
// Or
console.log(`_${a}${`_${b}${a}`.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_