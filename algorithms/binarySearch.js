const binarySearch = (sortedArray, target) => {
  let left = 0;
  let right = sortedArray.length - 1;
  let middle;
  
  while (left <= right) {
    middle = Math.round((right - left) / 2) + left;

    if (sortedArray[middle] === target) {
      return middle;
    } else if (sortedArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  
  return null;
}

let array = [1, 10, 15, 27, 28, 45, 48, 54, 65, 78, 99];

console.log(binarySearch(array, 10));