const clear = document.getElementById("clear");
const dashboard = document.getElementById("dashboard");
const numBtn = document.querySelectorAll(".numbers");
const opBtn = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
let arrayForCalculation = [];
let sum = 0;

function add() {
  for (let i = 0; i < arrayForCalculation.length; i++) {
    sum += arrayForCalculation[i];
  }
  console.log(sum);
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

// to write numbers to dashboard from operator
opBtn.forEach((foreach) => {
  foreach.addEventListener("click", (event) => {
    // push number to array
    arrayForCalculation.push(JSON.parse(dashboard.textContent));
    // change  the dashboard to clicked sign
    // dashboard.textContent = event.target.textContent;
    dashboard.textContent = " ";

    console.log(arrayForCalculation);
  });
});

// operation for equal sign
equal.addEventListener("click", (event) => {
  add();
  dashboard.textContent = sum;
});
