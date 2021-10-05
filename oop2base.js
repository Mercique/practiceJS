// функция конструктор - это функция на основе которой создается обьект, т.е эта функция генерирует свойство объекта

function Car(name, price, year) {
    this.name = name; // this - это обьект который запускает нашу функцию
    this.price = price;
    this.year = year;
    this.showInfo = function() { // анонимная функция т.к нет имени функции
        console.log('Автомобиль ' + this.name + ' стоит ' + this.price);
    }
}

var car1 = new Car('Audi', 1000000, 2021); // присваиваем car1 новый обьект класса Car, вызывает функцию конструктор
var car2 = new Car('BMW', 1000000, 2021);
var car3 = new Car('Mercedes', 1000000, 2021);
var cars = [car1, car2, car3];

cars.push(new Car('Skoda', 700000, 2017));

for (var car of cars) {
    car.showInfo();
}