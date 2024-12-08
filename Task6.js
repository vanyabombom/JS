let continueCalculation = '+';

while (continueCalculation == '+') {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    let operator = prompt("Enter operation (+, -, *, /):");
    
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } 
            break;
    }

    alert(`Result: ${result}`);
    continueCalculation = prompt("+ - one more");
}