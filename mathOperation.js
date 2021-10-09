// mathematical operation

function addition(a, b) {
    return +a + +b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return b == 0 ? 'error, на ноль не делим!' : a / b;
}

function mathOperation(arg1, arg2, operation) {
    if (!isNaN(arg1) && !isNaN(arg2)) {
        switch(operation) {
        case '+':
            return addition(arg1, arg2);
            break;
        case '-':
            return subtraction(arg1, arg2);
            break;
        case '*':
            return multiplication(arg1, arg2);
            break;
        case '/':
            return division(arg1, arg2);
            break;
        default:
            return console.log('Не указан знак операции!');
        }
    } else {
        return 'Ошибка! Значение пустое или не число!';
    }
}

console.log('Задание 6: ' + mathOperation('2', 0, '/'));