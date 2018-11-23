function calcultor(operator, a = 0, b = 0) {
    let result = 0;
    let isInputVaild = false;
    if (typeof a == 'number' && typeof b == 'number') {
        isInputVaild = true;
    }


    if (isInputVaild) {
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            case '%':
                result = a % b;
                break;
            default:
                result = `${operator} is invalid operator`;
        }
    }
    else {
        result = `${a} ${b} is invalid input. Only numbers are valid`;
    }

    console.log(result);
}
// Addition
calcultor('+', 30, 10);

// Substraction
calcultor('-', 30, 10);

// Multiplication
calcultor('*', 30, 10);

// Division
calcultor('/', 30, 10);

// Moduls
calcultor('%', 30, 10);

// Trying Wrong operator 
calcultor('@@', 30, 12);

// Passing string 
calcultor('*', 'Siddharth', 'Vedi')