// Flatten the Nested Array

function flattenArray(arr, result = []) {
    if (arr.length === 0) {
        return result;
    }

    const head = arr[0];
    const rest = arr.slice(1);

    if (Array.isArray(head)) {
        return flattenArray(head.concat(rest), result);
        // return flattenArray([...head, ...rest], result);
    }

    result.push(head);

    return flattenArray(rest, result);
}

module.exports = flattenArray;