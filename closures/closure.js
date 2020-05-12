var add = (function () {
    // has access to current & parent global scope
    let counter = 0; 
    return function () {
        // has access to parent functions scope, even when parent function has executed/completed/returned
        counter += 1; 
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

console.log(add().counter); // do not have access to counter scope. equivalent to a private variable