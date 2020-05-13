var math = (function () {
    // has access to current & parent global scope
    let counter = 0; 

    function add() {
        // has access to parent functions scope, even when parent function has executed/completed/returned
        counter += 1; 
        return counter;
    }

    function subtract() {
        // has access to parent functions scope, even when parent function has executed/completed/returned
        counter -= 1; 
        return counter;
    }

    return {
        add,
        subtract,
    }
})();

console.log(math.add());
console.log(math.add());
console.log(math.subtract());

console.log(math.counter); // do not have access to counter scope. equivalent to a private variable