while(true) {
    var yearAge = +prompt('Введите ваш год рождения!');
    if (!isNaN(yearAge) && yearAge != '' && Number.isInteger(yearAge)) {
        alert('Ваш возраст: ' + (2021 - yearAge));
        break;
    } else {
        alert('Ошибка! Введите ваш корректный год рождения');
    }
}