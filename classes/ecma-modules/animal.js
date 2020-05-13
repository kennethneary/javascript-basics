export class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
    }
    move(amount) {
        console.log(`${this.name} is moving.`);
        this.weight -= amount;
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    static breath() {
        console.log('breathing');
    }
}