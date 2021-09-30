// Square(n) Sum

function squareSum(numbers){
    let sum = 0;
    for (let num of numbers) {
        sum += Math.pow(num, 2);
    }
    return sum;
}

console.log(squareSum([1, 2])); // 1^2 + 2^2 = 5
console.log(squareSum([0, 3, 4, 5])); // 0^2 + 3^2 + 4^2 + 5^2 = 50