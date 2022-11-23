# 01. getInParallel

Implementation the `getInParallel` function that should be used to invoke multiple API calls in parallel. The function should return a promise which should resolve to an array of results from the `apiCalls` argument.

For example, calling the following code should print "['First API Call!', 'Second API Call!']"

```js
let promise = getInParallel([() => Promise.resolve("First API call!"),
                             () => Promise.resolve("Second API call!")]);

if (promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;