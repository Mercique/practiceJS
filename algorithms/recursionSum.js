const recursionSum = (arr) => arr.length === 0 ? 0 : arr[0] + recursionSum(arr.slice(1));

console.log(recursionSum([1, 2, 3, 4, 5]));