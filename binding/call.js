const john = {
    name: 'John',
    height: '6ft',
    greeting() {
        console.log(`Hi my name is ${this.name}`);
    },
    greetingIncorrect: () => {
        // 'this' refers to parent scope with arrow functions
        console.log(`Hi my name is ${this.name}`);
    }
}

function newGreeting(weight) {
    console.log(`Current heigh is: ${this.height}. Current weight is: ${weight}`);
}

john.greeting();

john.greetingIncorrect(); // name undefined
newGreeting(12); // height undefined

// call
newGreeting.call(john, 12);