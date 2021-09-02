// Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified,
// its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category.

function Subject() {
    this.observer = []; // array of observer function
}

Subject.prototype = {
    subscribe: function(fn) {
        // fn -> observer function
        this.observer.push(fn);
    },
    unsubscribe: function(fnToRemove) {
        this.observer = this.observer.filter(fn => fn !== fnToRemove);
    },
    fire: function() {
        this.observer.forEach((fn) => {
            fn.call();
        });
    },
}

const subject = new Subject();

function Observer1() {
    console.log("Observer 1 Firing");
}

function Observer2() {
    console.log("Observer 2 Firing");
}

function Observer3() {
    console.log("Observer 3 Firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.subscribe(Observer3);

subject.fire();

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer3);