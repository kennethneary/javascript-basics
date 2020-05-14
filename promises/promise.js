function asyncJob(result, timeMilliseconds, fail) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (fail) {
                reject(result); 
            } else {
                resolve(result);
            }
        }, timeMilliseconds);
    });
}

// success
var promise = asyncJob(1, 2000);
promise.then(data => {
    console.log('data1', data);
    return asyncJob(2, 2000);
}).then(data => {
    console.log('data2', data);
    return 3;
}).then(data => {
    console.log('data3', data);
}).finally(() => {
    console.log('finally');
});

// catch error
asyncJob(1, 2000)
    .then(data => {
        console.log('data1', data);
        return asyncJob(2, 2000, true);
    }).then(data => {
        console.log('data2', data); // skipped
        return 'Hello world';
    }).catch(error => {
        console.log('error', error); // will catch rejected promise
    }).finally(() => {
        console.log('finally');
    });

// catch error and recover into next then
asyncJob(1, 2000)
    .then(data => {
        console.log('data1', data);
        return asyncJob(2, 2000, true);
    }).then(data => {
        console.log('data2', data); // skipped
        return 'Hello world';
    }, error => {
        console.log('error', error); // will catch rejected promise
        return 'Hello world';
    }).then(data => {
        console.log('data3', data); // recovered
        return 'Hello world';
    }).catch(error => {
        console.log('error', error); // skipped
    }).finally(() => {
        console.log('finally');
    });



