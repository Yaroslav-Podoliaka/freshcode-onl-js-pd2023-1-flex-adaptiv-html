
class Transtopt {
  constructor(type, ...args) {
    this.type = type;
  }
  #speed = 300;
  move() {
    return "I can move";
  }
  get speed() {
    return this.#speed;
  }
  set speed(value) {
    if (value > 10) {
      this.#speed = value;
    }
  }
  go() {
    return 'I can go';
  }
}

class Vehicle extends Transtopt {
  static isVehicle(obj) {
    return obj instanceof this;
  }
  constructor(type, weelAmount) {
    super(type);
    this.weelAmount = weelAmount;
  }
  go() {
    return `I can move on ${this.weelAmount} weels`;
  }
  move() {
    return 'I can go';
  }
}

class Engine{
  constructor(type, volume, power) {
    this.type = type;
    this.volume = volume;
    this.power = power;
  }
}

const engine = new Engine('gas', 200);

class Car extends Vehicle {
  #price;
  #priceUnit = "$";

  static isCar(obj) {
    return obj instanceof this;
  }
  constructor(type, weelAmount, brand, model, price, engine) {
    super(type, weelAmount);
    this.brand = brand;
    this.model = model;
    this.#price = price;
    this.engine = engine;
    // this.engine = new Engine('electro', 300);
  }
  get price() {
    return this.#price();
  }
  get price() {
    return this.#addUnit();
  }
  #addUnit() {
    return `${this.#price} ${this.#priceUnit}`;
  }
  go() {
    console.log("metod of parent");
    return super.go();
  }
  move() {
    return "I can drive";
  }
}

const honda = new Car('car', 4, 'Honda', 'CRV', 50000, engine);

console.log(honda);
console.log(honda.go());
console.log(honda.price);
console.log(Car.isCar(honda));
console.log(Vehicle.isVehicle(honda));

const ven = new Vehicle('moto', 2);
console.log(ven.move());
console.log(honda.move());

console.dir(Vehicle);
console.log(ven.go());

const transp = new Transtopt('car');
console.log(transp.speed);
transp.speed = 100;
console.dir(Transtopt);
console.log(transp);
for (const key in transp) {
  console.log(key);
}
console.log(transp.move());



