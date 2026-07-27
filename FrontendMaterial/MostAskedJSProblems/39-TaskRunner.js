// How to implement an Asynchronous Task Runner with Concurrency Control? Rippling Frontend Interview Question
// https://devtools.tech/questions/s/how-to-implement-an-asynchronous-task-runner-with-concurrency-control-rippling-frontend-interview-question---qid---QCu4pbqp5zgxZQaQzh0D

// Design and implement an TaskRunner utility that processes asynchronous tasks with a maximum concurrency limit.
// The utility should ensure that at most a defined number of tasks (concurrency) are running at any given time.
// If more tasks are pushed into the queue when the limit is reached, they should wait until at least one running
// task is completed before execution.

// concurrency (number): The maximum number of tasks that can run concurrently.
// task (function): An asynchronous function to be executed. It is passed to the push method.

class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.runningTasks = 0;
    this.queue = [];
  }

  async push(task) {
    if (this.runningTasks < this.concurrency) {
      await this.execute(task);
    } else {
      this.queue.push(task);
    }
  }

  async execute(task) {
    this.runningTasks += 1;

    try {
      await task();
    } finally {
      this.runningTasks -= 1;

      if (this.queue.length && this.runningTasks < this.concurrency) {
        const nextTask = this.queue.shift(); // removes first element
        this.execute(nextTask);
      }
    }
  }
}

const ex = new TaskRunner(3);

// Simulated async tasks
const t1 = async () => {
  console.log("t1 started");
  await delay(2000);
  console.log("t1 finished");
};
const t2 = async () => {
  console.log("t2 started");
  await delay(1000);
  console.log("t2 finished");
};
const t3 = async () => {
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
};
const t4 = async () => {
  console.log("t4 started");
  await delay(1000);
  console.log("t4 finished");
};
const t5 = async () => {
  console.log("t5 started");
  await delay(500);
  console.log("t5 finished");
};

// Add tasks to the executor
ex.push(t1); // Starts immediately
ex.push(t2); // Starts immediately
ex.push(t3); // Starts immediately
ex.push(t4); // Waits until at least one task finishes
ex.push(t5); // Waits until another task finishes
