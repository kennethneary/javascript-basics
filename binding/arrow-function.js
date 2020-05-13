// ES5
const obj1 = {
    id: 1,
    log: function() {
        setTimeout(function () {
            // need to bind as obj1 is not the calling context
            console.log(this);
            console.log(this.id);
        }.bind(this), 1000);
    }
};
obj1.log();

// ES6
const obj2 = {
    id: 2,
    log: function() {
        setTimeout(() => {
            // has access to log function scope/execution context
            console.log(this.id);
        }, 1000);
    }
};
obj2.log();