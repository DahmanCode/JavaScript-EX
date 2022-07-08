/* 
  Function Practice
    -Parameters
    -Default
    -Rest
    -Loop
    -Condition
*/

function showInfo(User = "Un", Age = "Un", Rate = 0, Show = "Yes", ...Skills) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${User}</h2>`);
  document.write(`<p>Age: ${Age}</p>`);
  document.write(`<p>Hour Rate: $${Rate}</p>`);
  if (Show === "Yes") {
    if (Skills.length > 0) {
      document.write(`<p>Skills: ${Skills.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    if (Skills.length === 0) {
      document.write(`<p>Skills: No Skills</p>`);
    } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
  }
  document.write(`</div>`);
}

showInfo("Dahman", 22, 30, "Yes", "HTML", "CSS", "JavaScript");


/* ===== Random Arguments Function Challenge ===== */

/*
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

document.write(`=========================`);

function showDetails(...a) {

  let name, age, bl
  
  for (i = 0; i < a.length; i++){

    typeof a[i] === "string" ? name = a[i]
    : typeof a[i] === "number" ? age = a[i]
    : typeof a[i] === "boolean" ? boolean()
    : document.write(` Unkown,`)
  }

  function boolean() {

    a[i] === true ? bl = `You Are Available For Hire`
    : bl = `You Are Not Available For Hire`
  }

  document.write(`<p>Hello ${name}, Your Age Is ${age} ${bl}</p>`);
}

showDetails("Osama", 38, true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); 
// "Hello Osama, Your Age Is 38, You Are Not Available For Hire"