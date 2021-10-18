// Make a function that does arithmetic!
function arithmetic(a, b, operator){
    switch(operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return;
    }
}

console.log(arithmetic(5, 5, 'add')); // 10
console.log(arithmetic(5, 5, 'subtract')); // 0
console.log(arithmetic(5, 5, 'multiply')); // 25
console.log(arithmetic(5, 5, 'divide')); // 1