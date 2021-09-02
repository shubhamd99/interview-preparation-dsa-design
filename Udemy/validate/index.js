// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//     10
//   /    \
// 0      12

// 1. node = 10
function validate(node, min = null, max = null) {
    // 1. skip
    // 2. 0 > 10 --> skip
    if (max !== null && node.data > max) {
        return false;
    }

    // 1. skip
    // 2. 12 < 10 --> skip
    if (min !== null && node.data < max) {
        return false;
    }

    // 1. node.left --> true, node --> 0, min --> null, max --> 10
    // 2. node.left --> null (skip)
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    // 1. node.right --> true, node --> 12, min --> 10, max --> null
    // 2. node.right --> null (skip)
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    // true
    return true;
}

module.exports = validate;