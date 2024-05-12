// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
// If the iterable passed is empty, the promise returned will be forever pending
// If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race() will resolve to the first of these values found in the iterable

// Solution 1: Using await

/**
 * @param {Array} iterable
 * @return {Promise}
 */
function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const response = await item;
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Solution 2: Using Promise.then()
// Note that rejected promises also call .then() and the second parameter of .then() is the callback to handle rejected promises.

/**
 * @param {Array} iterable
 * @return {Promise}
 */
function promiseRace2(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach((item) => {
      return Promise.resolve(item).then(resolve, reject);
    });
  });
}

const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 400);
});

await promiseRace([p0, p1]); // 42

const p2 = Promise.resolve(42);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseRace([p2, p3]); // 42

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 400);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 100);
});

try {
  await promiseRace([p4, p5]);
} catch (err) {
  console.log(err); // 'Err!'
}
