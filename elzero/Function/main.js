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
    document.write(`<p>Skills: ${Skills.join(" | ")}</p>`);
  } else {
    document.write(`<p>Skills: No Skills</p>`);
  }
  document.write(`</div>`);
}

showInfo("Dahman", 22, 30, "Yes", "HTML", "CSS", "JavaScript");