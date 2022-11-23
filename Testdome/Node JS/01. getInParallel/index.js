function getInParallel(apiCalls) {
    // write your code here
    return Promise.all(apiCalls.map(apiCall => apiCall()));
}

let promise = getInParallel([() => Promise.resolve("First API call!"),
() => Promise.resolve("Second API call!")]);

if (promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;