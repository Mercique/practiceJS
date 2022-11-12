// Рекурсия

const factorialR = (n) => { // golovnaya
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// f(5): головная рекурсия
// 5 * f(4)
// 5 * (4 * f(3))
// 5 * (4 * (3 * f(2)))
// 5 * (4 * (3 * (2 * f(1))))
// 5 * (4 * (3 * 2))
// 5 * (4 * 6)
// 5 * 24
// 120

const factorialRH = (n, mult) => { // khvostovaya bez steka
  if (n <= 0) {
    return mult;
  } else {
    return factorialRH(n - 1, mult *= n);
  }
};

// f(5): хвостовая рекурсия
// f(5, 0)
// f(4, 5)
// f(3, 9)
// f(2, 12)
// f(1, 14)
// f(0, 15)
// 15

const factorial = (n) => { // цикл
  let result = 1

  for (let i = 0; i < n; i++) {
    // Так как наш счётчик начинается с 0
    // и растёт до n-1, нам нужно прибавить к нему
    // единицу, чтобы правильно рассчитать произведение.
    result *= i + 1
  }

  return result;
}

// f(5):
// result = 1 * (0 + 1)
// result = 1 * (1 + 1)
// result = 2 * (2 + 1)
// result = 6 * (3 + 1)
// result = 24 * (4 + 1)
// result = 120

// Числа фибоначчи -  1,1,2,3,5,8,13,21
// Это цепочка чисел, где каждое послед. число равно сумме двух пред. чисел

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log('recursion-golovnaya', factorialR(5));
console.log('recursion-khvostovaya', factorialRH(5, 1));
console.log('circle', factorial(5));
console.log('fib', fibonachi(8));
