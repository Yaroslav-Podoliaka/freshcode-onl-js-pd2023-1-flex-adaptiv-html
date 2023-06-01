class Animals {
  constructor(type, ...args) {
    this.type = type;
  }
  move() {
    return "All animals move";
  }
  say() {
    return "Not all animals communicate by voice";
  }
  eat() {
    return "Each class of animals has its own food";
  }
}
class Birds extends Animals {
  static isBirds(obj) {
    return obj instanceof this;
  }
  static maxAge;
  static maxWeight;
  constructor(type, age, name, weight, limbAmount, not) {
    super(type);
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
    this.not = not;
  }
  move() {
    return `${this.name} moves with ${this.limbAmount}`;
  }
  say() {
    return `${this.name} have good hearing and communicate with sounds`;
  }
  eat() {
    return `${this.name} ${this.not} predator`;
  }
}
class Fish extends Animals {
  static isFish(obj) {
    return obj instanceof this;
  }
  static maxAge;
  static maxWeight;
  constructor(type, age, name, weight, limbAmount) {
    super(type);
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }
  move() {
    return `${this.name} moves with the help of tail and fins`;
  }
  say() {
    return `${this.name} have no hearing, communicate without using sound`;
  }
  eat() {
    return `${this.name} predator`;
  }
}
class Mammals extends Animals {
}
class Predators extends Mammals {
}
class Whales extends Mammals {
}
class Primates extends Mammals {
}
class Dog extends Predators {
  static isDog(obj) {
    return obj instanceof this;
  }
  static maxAge;
  static maxWeight;
  constructor(type, age, name, weight, limbAmount) {
    super(type);
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }
  move() {
    return `${this.name} move on ${this.limbAmount} limbs`;
  }
  say() {
    return `${this.name} have good hearing and communicate with sounds`;
  }
  eat() {
    return `${this.name} predator`;
  }
}
class Dolphin extends Whales {
  static isDolphin(obj) {
    return obj instanceof this;
  }
  static maxAge;
  static maxWeight;
  constructor(type, age, name, weight, limbAmount) {
    super(type);
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }
  move() {
    return `${this.name} has ${this.limbAmount}, moves with the help of a tail`;
  }
  say() {
    return `${this.name} communicate with ultrasound`;
  }
  eat() {
    return `${this.name} predator`;
  }
}
class Human extends Primates {
  static isHuman(obj) {
    return obj instanceof this;
  }
  static maxAge;
  static maxWeight;
  constructor(type, age, name, weight, limbAmount) {
    super(type);
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }
  move() {
    return `${this.name} have ${this.limbAmount} limbs but move 2`;
  }
  say() {
    return `${this.name} communicate with sound`;
  }
  eat() {
    return `${this.name} prefer plant foods`;
  }
}

const sparrow = new Birds('bird', 3, 'Sparrow', 0.03, '2 wings and 2 legs', 'not a');
const eagle = new Birds('bird', 30, 'Eagle', 2, '2 wings and 2 legs', '');
const shark = new Fish('fish', 70, 'White shark', 1100, 'no limbs');
const mackerel = new Fish('fish', 17, 'Mackerel', 1.5, "no limbs");
const wolf = new Dog('dog', 12, 'Wolf', 100, 4);
const fox = new Dog('dog', 4, 'Fox', 9, 4);
const dolphin = new Dolphin('dolphin', 40, 'Dolphin', 300, 'no limbs');
const killerWhale = new Dolphin('dolphin', 80, 'Killer whale', 8000, 'no limbs');
const gorilla = new Human('human',40, 'Gorilla', 150, 4);
const chimpanzee = new Human('human',30, 'Chimpanzee', 70, 4);

console.log(sparrow);
console.log(sparrow.move());
console.log(sparrow.say());
console.log(sparrow.eat());
console.log(Birds.isBirds(sparrow));
console.log(eagle.move());
console.log(eagle.say());
console.log(eagle.eat());
console.log(Birds.isBirds(eagle));
// console.log(dolphin);
// console.log(dolphin.move());
// console.log(dolphin.say());
// console.log(dolphin.eat());
// console.log(Dolphin.isDolphin(dolphin));
// console.log(gorilla);
// console.log(gorilla.move());
// console.log(gorilla.say());
// console.log(gorilla.eat());
// console.log(Human.isHuman(gorilla));

