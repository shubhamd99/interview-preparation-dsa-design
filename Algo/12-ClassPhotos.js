// Hint- Start by determining which row will have the students waring blue shirts and which row will have the students waring red shirts.
// Once you know this, you determine if its possible to take the photo

// The shirt color of the tallest student will determine which students need to be placed in the back row
// The tallest student can't be placed in the front row

// O(nlog(n)) time | O(1) space - where n is the number of students
function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirt = redShirtHeights[idx];
        const blueShirt = blueShirtHeights[idx];

        if (shirtColorInFirstRow === 'RED') {
            if (redShirt >= blueShirt) return false;
        } else if (blueShirt >= redShirt) return false;
    }

    return true;
}