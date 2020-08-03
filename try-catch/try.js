function testError() {
    try {
        throw new Error("error message"); // this is executed
    } catch(error) {
        console.log("catch:", error.message);
        return 1;
    } finally {
        console.log("finally");
        return 1000;
    }
}
console.log(testError()); // finally 1000


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
async function run(isFail) {
    try {
        return await asyncJob(1, 2000, isFail)
    } catch (error) {
        console.log("catch:", error);
        return 'catch recovered';
    }
}
run(false).then(console.log); // then 1
run(true).then(console.log); // catch 'catch recovered'


async function runReThrow(isFail) {
    try {
        return await asyncJob('re throw error after logging', 2000, isFail)
    } catch (error) {
        console.log("catch:", error);
        throw error; // re throw error after logging
    }
}
runReThrow(true).catch(console.log); // catch 're throw error after logging'