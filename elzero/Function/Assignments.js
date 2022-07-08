document.write("<h2>====== Assingments ======</h2>");

document.write("<h3>Assignment 1:</h3>");

function sayHello(theName, theGender) {
  if (theGender === "Male")
  document.write(`<p>Hello Mr ${theName}</p>`);
  else if (theGender === "Female")
  document.write(`<p>Hello Miss ${theName}</p>`);
  else
  document.write(`<p>Hello ${theName}</p>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

document.write("<h3>Assignment 2:</h3>");

function calculate(firstNum, secondNum, operation) {
  let result;
  if (secondNum == null)
    result = 'Second Number Not Found';
  else if (operation === 'subtract')
    result = firstNum - secondNum;
  else if (operation === 'multiply')
    result = firstNum * secondNum;
  else
    result = firstNum + secondNum;
  document.write(`<p>${result}</p>`)
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

document.write("<h3>Assignment 3:</h3>");

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) 
    document.write(`<p>Age Out Of Range.</p>`);
  else 
    document.write(`
      <p>${theAge *= 12} Months.</p>
      <p>${theAge *= 4} Weeks.</p>
      <p>${theAge *= 30} Days.</p>
    `)
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

document.write("<h3>Assignment 4:</h3>");

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`)   
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

document.write("<h3>Assignment 5:</h3>");

function multiply(...num) {
  let Num = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "string")
      continue;
    Num *= parseInt(num[i]);
  }
  document.write(`<p>${Num}</p>`);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000