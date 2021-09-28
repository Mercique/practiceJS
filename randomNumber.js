 // Функция рандомного числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 10); // от 1 до 10 включительно