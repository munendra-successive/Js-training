/*

Write a program to implement a Promise-based rate limiter,
that limits the number of concurrent requests to a certain number

*/

class Limiter {
  constructor(noOfLimits, timeLimit) {
    this.noOfLimits = noOfLimits;
    this.remainingRequests = noOfLimits;
    this.timeLimit = timeLimit;
    this.lastResetTime = Date.now() / 1000;
  }

  async getData() {
    const currentTime = Date.now() / 1000;

    if (currentTime - this.lastResetTime > this.timeLimit) {
      this.remainingRequests = this.noOfLimits;
      this.lastResetTime = currentTime;
    }
    return new Promise((resolve, reject) => {
      if (this.remainingRequests > 0) {
        this.remainingRequests -= 1;
        resolve("Done");
      } else {
        reject("Limit exhausted");
      }
    });
  }
}

const limiter = new Limiter(5, 10);

async function executeRequests() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(await limiter.getData());
    }
  } catch (error) {
    console.error(error);
  }
}

executeRequests();
