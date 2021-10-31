class Car {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

class Factory {
    createCar(title) {
        let car = new Car(title, parseInt(Math.random() * 126000 + 14000));
        return car;
    }
}

class Order {
    constructor(n) {
        this.count = n;
        this.cars = [];
        this.sumOrder = 0;
        this.createOrder();
        this.show();
    }

    createOrder() {
        let marks = ['VW', 'Skoda', 'Audi'];
        let factory = new Factory();

        for (let i = 0; i < this.count; i++) {
            this.cars.push(factory.createCar(marks[parseInt(Math.random() * marks.length)]));
            this.sumOrder += this.cars[i].price;
        }
    }

    show() {
        this.cars.forEach(car => console.log(`${car.title} - ${car.price}$`))
        console.log(`Total count ${this.sumOrder}$`);
    }
}

let order = new Order(Math.random() * 40 + 10);