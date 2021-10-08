// Binary array to number

function binaryArrayToNumber(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * Math.pow(2, (arr.length - 1) - i);
    }
    return sum;
};

console.log(binaryArrayToNumber([1, 1, 1, 1]));