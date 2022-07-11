const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const dividBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const CurrentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  CurrentCalculationOutput.textContent = text;
}