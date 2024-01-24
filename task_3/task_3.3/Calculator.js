const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    const operator = operatorSelect.value;

    let result;

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Please select an operation";
    }

    resultElement.textContent = `Result: ${result}`;
});
