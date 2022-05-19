// Быстрая сортировка
const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let less = [];
  let greater = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort([15, 10, 3, 2, 76, 23, 65, 95, 67, 43]));