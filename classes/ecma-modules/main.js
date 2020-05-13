import { Cat } from './cat.js';
import { Dog } from './dog.js';

console.log('CAT ....');
const cat = new Cat('Furball', 3, 'Persian');
console.log(cat.name);
cat.eat(1);
cat.sleep();
cat.move(1);
cat.meow();
Cat.breath();

console.log('Dog ....');
const dog = new Dog('Max', 6, 'Beagle');
console.log(dog.name);
dog.eat(1);
dog.sleep();
dog.move(1);
dog.bark();
Dog.breath();

