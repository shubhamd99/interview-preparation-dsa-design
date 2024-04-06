// In languages like Java and Python, a sleep function is available to suspend execution of the calling thread.
// However, unlike other languages, JavaScript is single-threaded and blocking the main thread is not a good idea.
// Hence lets implement an asynchronous version of the sleep function that works similarly but does not block the main thread.

// Solution 1 - It returns a Promise that will resolve after the specified duration.

/**
 * @param {number} duration
 * @return {Promise<void>}
 */
async function sleep(duration) {
  return await new Promise((resolve) => setTimeout(resolve, duration));
}

async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye."); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// t = 2000: Bye.

// Solution 2 - Blocking version of sleep()
function sleep2(duration) {
  let now = new Date().getTime();
  while (new Date().getTime() < now + duration) {
    // Do nothing.
  }
  // Proceed when `duration` has passed since `now`.
}
