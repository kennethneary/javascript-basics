import { Animal } from './animal.js';

export class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }
    bark() {
        console.log('Woof Woof!');
        this.energy -= .1;
    }
}