// Стек & Стек вызовов
const greet = (name) => {
  console.log(`Hello, ${name}!`);
  greet2(name);
  console.log(`Getting ready to say bye...`);
  bye();
}

const greet2 = (name) => {
  console.log(`How are you, ${name}?`);
}

const bye = () => {
  console.log('Ok bye!');
}

greet('Ilya');