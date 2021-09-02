const makeDragon = require('./make-dragon');
// console.log(makeDragon()); // medium fire dragon

const dragonArmy = {
    [Symbol.iterator]: function* () {
        while(true) {
            const enoughDragonsSpawned = Math.random() > 0.75;
            if (enoughDragonsSpawned) {
                return;
            }

            yield makeDragon();
        }
    }
}


for (const dragon of dragonArmy) {
    console.log("dragon: ", dragon); // big smoke dragon
}

// OR

function* someDragons() {
    while(true) {
        const enoughDragonsSpawned = Math.random() > 0.75;
        if (enoughDragonsSpawned) {
            return;
        }

        yield makeDragon();
    }
}

const iterator = someDragons(); // this will not call the function, it will give you a iterator

console.log(iterator.next()); // { value: 'medium ice dragon', done: false }
console.log(iterator.next()); // { value: 'big fire dragon', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }
