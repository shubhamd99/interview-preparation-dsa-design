/****************************************
ES6 Iterators and Generators
Arrays, Strings, Maps, Sets, NodeLists - built-in iterators
{Object} => Iterator => Generator
****************************************/

let log = console.log;

// Arrays
let characters = ['Finn','Poe', 'Rey', 'Kylo', 'Luke', 'Leia']

// A generator is a function that can stop midway and then continue from where it stopped.
// In short, a generator appears to be a function but it behaves like an iterator.

// Function default return is undefined
function* genny() {
    // The yield keyword is used to pause and resume a generator function
    yield 'a';
    yield 'b';
}

let iter = genny();
log("genny: ", iter); // Object [Generator] {}
log("genny: ", iter.next()); // { value: 'a', done: false }
log("genny: ", iter.next()); // { value: 'b', done: false }
log("genny: ", iter.next()); // { value: undefined, done: true }

function* genny2() {
    // The yield keyword is used to pause and resume a generator function
    yield characters[0];
}
let iter2 = genny2();  // this will not call the function, it will give you a iterator
log("genny2: ", iter2.next()); // { value: 'Finn', done: false }




// Objects
let startwars8 = {
    title: 'Star Wars',
    director: 'Ryan Reynolds',
    year: 2020,
    boxOffice: '1.38B',
}

// The well-known Symbol.iterator symbol specifies the default iterator for an object. Used by for...of.
// For making an object iteratable by making one of our own.
// Custom Iterator
let count = -1;
let SW8 = {
    [Symbol.iterator]: function(obj) {
        return {
            next: () => {
                count++;
                switch(count) {
                    case 0:
                        return {
                            value: obj.title,
                            done: false
                        }
                    case 1:
                        return {
                            value: obj.year,
                            done: false
                        }
                    case 2:
                        return {
                            value: obj.director,
                            done: false
                        }
                    default:
                        return {
                            value: undefined,
                            done: true
                        }
                }
            }
        }
    }
}

let data = SW8[Symbol.iterator](startwars8);
log("data: ", data.next()); // data:  { value: 'Star Wars', done: false }
log("data: ", data.next()); // data:  { value: 2020, done: false }
log("data: ", data.next()); // data:  { value: 'rian', done: false }
log("data: ", data.next()); // data:  { value: undefined, done: true }