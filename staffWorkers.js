function workerInfo(i) {
    var worker = {};
    worker.name = prompt('Сотрудник №' + i + '\nВведите имя сотрудника:');
    worker.age = +prompt('Сотрудник №' + i + '\nИмя: ' + worker.name + '\nВведите возраст сотрудника:');
    document.write('<h3>Сотрудник №' + i + '.</h3>Имя: ' + worker.name + '<br>Возраст: ' + worker.age);
    return worker;
}

function staffWorkers(array, count) {
    for (var i = 1; i <= count; i++) {
        array[i - 1] = workerInfo(i);
    }
    return array;
}

function staff() {
    var arrStaff = [];
    var workersCount = +prompt('Сколько сотрудников хотите внести в массив?');
    return staffWorkers(arrStaff, workersCount);
}

staff();