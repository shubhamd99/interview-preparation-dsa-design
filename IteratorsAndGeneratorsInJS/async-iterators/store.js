module.exports = function createStore() {
    const tables = {
        customer: {
            1: { name: 'John' },
            2: { name: 'Shubham' },
            3: { name: 'Nayan' }
        },
        food: {
            1: ['cake', 'waffle'],
            2: ['coffee'],
            3: ['apple', 'carrot'],
        }
    }

    return {
        // Fake Delay
        get: (table, id) => delay(500).then(() => tables[table][id])
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}