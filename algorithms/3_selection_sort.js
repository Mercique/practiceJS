// Сортировка выбором O(n^2), с коэф

const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i; // хранение мин эл

    for (let j = i + 1; j < array.length; j++) { // находится минимальный и этот эл будет заменять эл из внешнего цикла
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }

      count += 1;
    }

    let tmp = array[i]; // временная переменная, чтобы не затерялся эл
    array[i] = array[indexMin]; // меняем местами, тут мин эл
    array[indexMin] = tmp; // меняем местами, тут больш эл чем мин
  }

  return array;
};

console.log(selectionSort(array));
console.log(`Длина массива: ${array.length}`);
console.log(`Итераций: ${count}`);
