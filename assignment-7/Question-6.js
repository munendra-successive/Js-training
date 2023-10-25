// Implement a function that returns a resolved Promise after a specified delay using async/await.

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "munendra", age: 21 });
  }, 1000);
});

async function consumePromise() {
  const response = await promise;
  console.log(response);
}
consumePromise();
