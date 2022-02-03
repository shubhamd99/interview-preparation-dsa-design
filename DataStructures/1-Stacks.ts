// Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

// API:
// 1. Push
// 2. Pop
// 3. Peek
// 4. Clear
// 5. Size

// We used WeakMap() because it retains a weak reference to the key that it holds. This means that once you are no longer referring to that particular key, it gets garbage-collected along with the value.
// We have wrapped the Stack class inside an IIFE (Immediately Invoked Function Expression) so that constants items and sKey are available to the Stack class internally but are not exposed to the outside world.

// However, we can still do the following:

// constructor() {
//         this.sKey = {};
//         this.items = new WeakMap();
//         this.items.set(sKey, []);
// }

// However, this would make the items accessible also from outside our stack methods, which is something that we want to avoid.

var Stack = (() => {
    const sKey = {};
    const items = new WeakMap();

    class Stack<T> {

        constructor() {
            items.set(sKey, []);
        }
        // Pushed the item to the top of the stack
        push(element: T) {
            let stack: T[] = items.get(sKey);
            stack.push(element);
        }
        // Removes an item from the top of the stack
        pop() {
            let stack: T[] = items.get(sKey);
            return stack.pop();
        }
        // Shows the last item pushed into the stack
        peek() {
            let stack: T[] = items.get(sKey);
            return stack[stack.length - 1];
        }
        // Empties the stack
        clear() {
            items.set(sKey, []);
        }
        // Gets the current size of the stack
        size() {
            let stack: T[] = items.get(sKey);
            return stack.length
        }
    }
})();

// Temp Fix to hide red errors
declare var define: any;
declare var module: any;
declare var exports: any;

// AMD
if (typeof define === 'function' && define.amd) {
    define(function() { return Stack; });
}
// NodeJs/CommonJS
else if (typeof exports === 'object') {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        exports = module.exports = Stack;
    }
}
// Browser
else {
    window.Stack = Stack;
}