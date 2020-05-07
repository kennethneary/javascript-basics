function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
}
Animal.prototype.move = function(amount) {
    console.log(`${this.name} is moving.`);
    this.weight -= amount;
}
Animal.prototype.sleep = function() {
    console.log(`${this.name} is sleeping.`);
}


function Dog(name, energy, breed) {
    Animal.call(this, name, energy);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    console.log('Woof Woof!');
    this.energy -= .1;
}
Dog.prototype.constructor = Dog;


function Cat(name, energy, breed) {
    Animal.call(this, name, energy)
    this.breed = breed;
}
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function() {
    console.log('Meow Meow!');
    this.energy -= .1;
}
Cat.prototype.constructor = Cat;


console.log('CAT ....');
const cat = new Cat('Furball', 3, 'Persian');
console.log(cat.name);
cat.eat(1);
cat.sleep();
cat.move(1);
cat.meow();

console.log('Dog ....');
const dog = new Dog('Max', 6, 'Beagle');
console.log(dog.name);
dog.eat(1);
dog.sleep();
dog.move(1);
dog.bark();

