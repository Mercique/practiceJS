// Бинарный поиск O(log2n)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

const binarySearch = (array, item) => { // с помощью цикла
  let start = 0; // первый эл
  let end = array.length; // последний эл
  let middle; // центральный эл
  let found = false; // флаг, нашли эл или нет
  let position = -1; // позиция эл, искомого, если нет, то -1

  while (found === false && start <= end) { // либо не нашли эл, либо start и end не поровнялись
    count += 1;
    middle = Math.floor((start + end) / 2); // вычисл центр эл

    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    if (item < array[middle]) {
      end = middle - 1; // отбрасываем правую часть
    } else {
      start = middle + 1; // отбрасываем левую часть
    }
  }

  return position;
};

const recursiveBinarySearch = (array, item, start, end) => { // рекурсивный способ
  count += 1;
  let middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
};

console.log(binarySearch(array, 15));
console.log(`Итераций: ${count}`);
console.log(recursiveBinarySearch(array, 15, 0, array.length)); // итераций в 2 раза больше
console.log(`Итераций: ${count}`);
