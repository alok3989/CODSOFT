const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
  if (button.dataset.value) {
    button.addEventListener('click', () => {
      currentInput += button.dataset.value;
      display.value = currentInput;
    });
  }
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    // Evaluate the expression
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString(); // So you can continue calculating
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
});
