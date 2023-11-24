
document.querySelector(".calculator").style.border = "solid black";
document.querySelector(".screen").style.border = "solid black";

// Select elements from the HTML
const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');
const decimalButton = document.getElementById('decimal-button');
const backButton = document.getElementById('backspace-button');

// Initialize variables to track user input
let currentInput = '';
let currentResult = null;
let currentOperator = null;
let hasDecimal = false;

// Function to update the display
function updateDisplay() {
  display.textContent = currentInput || '0';
}

// Add event listeners for digit buttons
digitButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentInput.length < 10) {
      currentInput += button.textContent;
      updateDisplay();
    }
  });
});

// Add event listeners for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentInput !== '') {
      if (currentResult === null) {
        currentResult = parseFloat(currentInput);
      } else {
        operate();
      }
      currentOperator = button.textContent;
      currentInput = '';
      hasDecimal = false;
    }
  });
});

// Add event listener for the equals button
equalsButton.addEventListener('click', () => {
    if (currentOperator !== null) {
      operate();
      currentOperator = null;
    }
  });

// Add event listener for the clear button
clearButton.addEventListener('click', () => {
  currentInput = '';
  currentResult = null;
  currentOperator = null;
  hasDecimal = false;
  updateDisplay();
});


// Function to perform calculations
function operate() {
    if (currentOperator !== null) {
      const num1 = currentResult !== null ? currentResult : 0;
      const num2 = parseFloat(currentInput);
      
      switch (currentOperator) {
        case '+':
          currentResult = num1 + num2;
          break;
        case '-':
          currentResult = num1 - num2;
          break;
        case 'X':
          currentResult = num1 * num2;
          break;
        case '÷':
          if (num2 === 0) {
            currentResult = 'Error';
          } else {
            currentResult = num1 / num2;
          }
          break;
      }
  
      currentInput = currentResult.toString();
      updateDisplay();
    }
  }
// Initialize the display
updateDisplay();

