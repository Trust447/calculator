let buttons = document.querySelectorAll("button");
let display = document.querySelector("input");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    switch (value) {
      case 'C':
        display.value = '0';
        break;

      case 'del':
        display.value = display.value.slice(0, -1) || '0';
        break;

      case '=':
        try {
          let result = eval(display.value);
          if (result === Infinity || result === -Infinity) {
            display.value = "Cannot divide by 0";
          } else {
            display.value = result;
          }
        } catch (e) {
          display.value = "Error";
        }
        break;

      default:
        let lastChar = display.value.slice(-1);

        if (value === '.' && lastChar === '.') return;

        if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
          display.value = display.value.slice(0, -1) + value;
          return;
        }

        if (display.value === '0') {
          display.value = value === '.' ? '0.' : value;
        } else {
          display.value += value;
        }
    }
  });
});

