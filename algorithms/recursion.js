// Рекурсия
const countDown = (i) => {
  console.log(i);

  if (i <= 1) { // Базовый случай
    return;
  } else { // Рекурсивный случай
    countDown(i - 1);
  }
}

countDown(5);