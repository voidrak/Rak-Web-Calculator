const clear = document.getElementById("clear");
const dashboard = document.getElementById("dashboard");
const numBtn = document.querySelectorAll(".numbers");
const opBtn = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
let arrayForCalculation = [];
let sum = 0;
let result = 0;
let multi = 1;
let isAdd = false;
let isSubtract = false;
let isDivide = false;
let isMultiply = false;

function add() {
  for (let i = 0; i < arrayForCalculation.length; i++) {
    sum += arrayForCalculation[i];
  }
  result = sum;
}
function subtract() {
  result = arrayForCalculation[0] - arrayForCalculation[1];
}
function multiply() {
  for (let i = 0; i < arrayForCalculation.length; i++) {
    multi *= arrayForCalculation[i];
  }
  result = multi;
}
function divide() {
  result = arrayForCalculation[0] / arrayForCalculation[1];
}

// clear the dashboard
clear.addEventListener("click", (event) => {
  dashboard.textContent = " ";
  arrayForCalculation = [];
  sum = 0;
  console.log(arrayForCalculation);
});

//function to write to dashboard
function writeToDashboard(element) {
  element.forEach((foreach) => {
    foreach.addEventListener("click", (event) => {
      dashboard.textContent += event.target.textContent;
    });
  });
}

// to write numbers to dashboard from numbers
writeToDashboard(numBtn);

//  function to be performed when operator button clicked
opBtn.forEach((foreach) => {
  foreach.addEventListener("click", (event) => {
    let op_btn = event.target.textContent;
    switch (op_btn) {
      case "+":
        isAdd = true;
        break;
      case "-":
        isSubtract = true;
        break;
      case "x":
        isMultiply = true;
        break;
      case "/":
        isDivide = true;
        break;
    }
    arrayForCalculation.push(JSON.parse(dashboard.textContent));
    dashboard.textContent = " ";
    console.log(arrayForCalculation);
    // console.log(isMultiply);
  });
});

// operation for equal sign
equal.addEventListener("click", (event) => {
  arrayForCalculation.push(JSON.parse(dashboard.textContent));
  if (isAdd) {
    add();
  } else if (isSubtract) {
    subtract();
  } else if (isMultiply) {
    multiply();
  } else if (isDivide) {
    divide();
  }
  dashboard.textContent = result;
  result = 0;
  arrayForCalculation = [];
  isAdd = false;
  isSubtract = false;
  isDivide = false;
  isMultiply = false;
});
