// Сортировка выбором O(n^2)
const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) { // изменение знака: по возрастанию/убыванию
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

const selectionSort = (arr) => {
  newArr = [];

  while (arr.length) {
    let smallest = findSmallest(arr);

    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));