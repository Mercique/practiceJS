// Быстрая сортировка O(log2n^2)

const array = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23];
let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2); // индекс опорника, сред. эл.
  let pivot = array[pivotIndex]; // опорник
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    
    if (i === pivotIndex) { // пропуск случая сравнивание опорника с опорником
      continue;
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(array));
console.log(`Длина массива: ${array.length}`);
console.log(`Итераций: ${count}`);
