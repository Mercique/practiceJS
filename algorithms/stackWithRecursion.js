// Стек вызововов с рекурсией
const fact = (x) => {
  if (x <= 1) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(3));