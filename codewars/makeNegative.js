// first codewars task

function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}

// second variant
// function makeNegative(num) {
//     return -Math.abs(num);
// }

console.log(makeNegative(42)); // -42
console.log(makeNegative(-42)); // -42
console.log(makeNegative(0)); // 0