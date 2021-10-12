// Если мы делаем масштабный проект, то в решении нужно разбить наш проект на части(на маленькие компоненты - объекты), для простого создания
// ООП - это программирование в котором используются обьекты и классы
// Класс - это структура данных, в котором есть свойства и методы
// Обьект - это экземпляр класса

function startEngine() { // данная функция вызывается для какого-то объекта
    // console.log(this);
    if (!this.isEngineStarted)
      this.isEngineStarted = true;
    console.log('Автомобиль ' + this.name + ' запущен!');
  }

  var car1 = { // обьект - это переменная у которого есть свойства
    name: 'Audi', // свойство, примитив
    color: 'white',
    price: 1000000,
    isEngineStarted: false,
    show: function() { // метод
      console.log('Автомобиль ' + this.name + ' стоит ' + this.price);
    }
  }
  
  var car2 = {
    name: 'BMW',
    color: 'black',
    price: 1200000,
    isEngineStarted: false
  }
  
  car1.stop = function() {
    if (this.isEngineStarted) // this - это ссылка на объект который запускает функцию
      this.isEngineStarted = false;
    console.log(this.name + ' выключен!');
  }
  
  car1.show();
  car2.show = car1.show;
  car2.show();
  car2.stop = car1.stop;
  
  // если функцию присвоить свойству обьекта, она станет методом
  car1.start = startEngine; // при присваивании функции свойству обьекта НЕ СТАВИТЬ СКОБКИ, если поставить скобки функция моментально запустится
  car1.start(); // запускаем метод у обьекта
  car2.start = startEngine;
  car2.start();
  
  car1.stop();
  car2.stop();