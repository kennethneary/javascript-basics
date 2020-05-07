import { Animal } from './animal.js';

export class Cat extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }
    meow() {
        console.log('Meow Meow!');
        this.energy -= .1;
    }
}