// Custom Iterators

var Fib = {
    [Symbol.iterator]() {
        var n1 = 1, n2 = 1;

        // return the iterator object with next and return method
        return {
            // make the iterator an iterable
            [Symbol.iterator]() { return this; },

            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                return { value: current, done: false };
            },

            return (v) {
                console.log("Fibonacci sequence abandoned.")
                return { value: v, done: true };
            }
        };
    }
};

for (var v of Fib) {
    console.log( v );
    if (v > 50) break;
}

// 1 1 2 3 5 8 13 21 34 55
// Fibonacci sequence abandoned.