const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");
const specialChars = ["%", "/", "+", "-", "*", "="];
let output = "";

// define function to calculate based on button clicked.
const calculate = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    // if output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // if DEL button is clicked, remove the last character from the output
    output = output.toString().slice(0, -1);
  } else {
    // if output is empty and button is specialChars then return
    if ((output === "") & specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// add event listener to buttons, call calculate() on click
buttons.forEach((buttons) => {
  // buttons click listener calls calculate() with dataset value as argument
  buttons.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
