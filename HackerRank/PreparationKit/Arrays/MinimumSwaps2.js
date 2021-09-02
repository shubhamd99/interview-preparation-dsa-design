function minimumSwaps(arr) {

    let minSwapCount = 0;

    for (let i = 0; i < arr.length; i++) {
        minSwapCount += swapsCounter(arr, i);
    }

    return minSwapCount;
}

function swapsCounter(arr, i) {

    let swapsCount = 0;
    let currentElement = arr[i];
    let targetElement = arr[currentElement - 1]; // targetElement it for swap

    // keep doing this operation, untill current number is not equal to the targetElement
    while (currentElement !== targetElement) {
        // set the element at arr[i] to the targetElement number
        arr[i] = targetElement;
        // then set the element at the position of the
        // the position of current number - 1 in the original arr
        arr[currentElement - 1] = currentElement;
        // this is a swap so increment the counter by 1
        swapsCount++;
        // leave array manipulation and set variables
        // set the current number to the targetElement
        currentElement = targetElement;
        // set the targetElement to the current number
        targetElement = arr[currentElement - 1];
    }

    return swapsCount
}