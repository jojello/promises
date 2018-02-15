//1.

// setTimeout(() => {
//   console.log("TIMED OUT!");
// }, 300);

//2.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("FULFILLED!");
//   }, 300);
// });
//
// promise.then(console.log);

//3.
var promise = new Promise((onResolve, onReject) => {
  setTimeout(() => {
    resolve("FULFILLED!");
    reject(new Error("ERROR!"));
  }, 300);
});

promise.then(console.log("what")).catch(onReject);
