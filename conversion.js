function conversion(strNum) {
    var obj = {};
    var isIndex = 0;
    var objKey = ['единицы', 'десятки', 'сотни'];
    if (!isNaN(strNum) && strNum >= 0 && strNum <= 999 && strNum != '') {
        var arr = String(strNum).split('');
        for (var i = arr.length - 1; i >= 0; i--) {
            obj[objKey[isIndex]] = arr[i];
            isIndex++;
        }
        console.log('Задано Число: ' + +strNum);
        return obj;
    } else {
        console.log('Ошибка! Введите число от 0 до 999!');
        return obj;
    }
}

console.log(conversion(945));