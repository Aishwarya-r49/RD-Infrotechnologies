const display = document.getElementById('display');

function appendNumber(num) {
  if (display.value === '0') display.value = num;
  else display.value += num;
}

function appendOperation(op) {
  const lastChar = display.value.slice(-1);
  if ('+-*/'.includes(lastChar)) return;
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
