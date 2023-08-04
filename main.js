let numberBtn = document.getElementById("numbers");
let dashboard = document.getElementById("dashboard-input");

// console.log(numberBtn.textContent);
function inputToDashboard() {
  console.log("working");
  dashboard.textContent = numberBtn.textContent;
}
