// O(n^2) time | O(1) Space
function twoNumberSum(array, targetSum) {
	if (array.length === 0 || !targetSum) {
		return [];
	}

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				return [array[i], array[j]];
			}
		}
	}

	return [];
}

// O(n) time | O(n) Space
// x + y = 10
// y = 10 - x
function twoNumberSum(array, targetSum) {
	const numMap = {}; // O(n) Space

	for (const num of array) {
		const match = targetSum - num;
		if (match in numMap) {
			return [match, num];
		} else {
			numMap[num] = true;
		}
	}

	return [];
}

// O(nlog(n)) time | O(1) Space
// Left amd Right Pointers
function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b); // O(log(n))

	let left = 0; // first index
	let right = array.length - 1; // last index

	while (left < right) { // O(n)
		const curSum = array[left] + array[right];

		if (curSum === targetSum) {
			return [array[left], array[right]];
		} else if (curSum < targetSum) {
			left++;
		} else if (curSum > targetSum) {
			right--;
		}
	}

	return [];
}

