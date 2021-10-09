function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}

function generatePassword(arr, length) {
    var str = '', num;
    for (var i = 0; i < length; i++) {
        str += arr[getRandomNumber(arr.length - 1)];
    }
    return str;
}

var arrSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
                  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                  'Y', 'Z', '@'];

while (true) {
    var userAnswer = +prompt('Введите длину генерации пароля от 6 до 100!', 6);
    console.log(userAnswer);
    if (!isNaN(userAnswer) && userAnswer >= 6 && userAnswer <= 100) {
        alert('Ваш сгенерированный пароль из ' + userAnswer + ' символов: ' + generatePassword(arrSymbols, userAnswer));
        break;
    } else {
        alert('ERROR!404');
    }
}