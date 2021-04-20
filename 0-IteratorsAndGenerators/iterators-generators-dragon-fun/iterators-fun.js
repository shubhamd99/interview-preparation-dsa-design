const makeDragon = require('./make-dragon');
console.log(makeDragon()); // medium fire dragon

const dragonArmy = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.75;
                if (!enoughDragonsSpawned) {
                    return {
                        value: makeDragon(),
                        done: false,
                    }
                }

                return {
                    done: true
                }

            }
        }
    }
}

for (const dragon of dragonArmy) {
    console.log("dragon: ", dragon); // small smoke dragon
}