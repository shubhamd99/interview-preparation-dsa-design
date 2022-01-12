const randomItem = require('./random-item');

const makeDragon = () => {
    const dragonSizes = ['big', 'small', 'medium'];
    const dragonAbilities = ['fire', 'smoke', 'ice'];
    return randomItem(dragonSizes) + ' ' + randomItem(dragonAbilities) + ' ' + 'dragon';
}

module.exports = makeDragon;