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

// bind
const johnsNewGreeting = newGreeting.bind(john);
// can use later with currect context of john
johnsNewGreeting(12);


// bind can save other params for later use
const johnsNewGreetingWithSavedParam = newGreeting.bind(john, 15);
johnsNewGreetingWithSavedParam();