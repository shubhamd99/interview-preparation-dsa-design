// Trie is an efficient information reTrieval data structure. Using Trie, search complexities can be brought to optimal limit (key length). If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, where M is maximum string length and N is number of keys in tree. Using Trie, we can search the key in O(M) time. 

// root
// /   \    \
// t   a     b
// |   |     |
// h   n     y
// |   |  \  |
// e   s  y  e
// /  |   |
// i  r   w
// |  |   |
// r  e   e
//     |
//     r


class Trie {
    tree = {};

    constructor() {}

    print() {
        console.log('print: ', JSON.stringify(this.tree));
        return this.tree;
    }

    /**
     * 
     * @param {string} input 
    */
    add(input) {
        // set to root of the tree
        var currentNode = this.tree;

        // init next value
        var nextNode = null;

        // take 1st char and trim input
        // adam for example becomes a and dam
        var curChar = input.slice(0, 1); // a
        input = input.slice(1); // dam

        // find first new character, until then keep trimming input
        while (currentNode[curChar] && curChar) {
            currentNode = currentNode[curChar];

            // update remainder array, this will exist as we added the node earlier
            currentNode.remainder.push(input);

            // trim input
            curChar = input.slice(0, 1);
            input = input.slice(1);
        }

        // while next character is available keep adding new branches and prune till end
        // Prune - to cut branches or parts of branches off a tree or bush in order to make it a better shape
        while (curChar) {
            // new reference in each loop
            // create remainder array starting with current input
            // so when adding the node `a` we add to the remainder `dam`
            // and so on
            nextNode = {
                remainder: [input],
            };

            // assign to current tree node
            currentNode[curChar] = nextNode;

            // hold reference for the next loop
            currentNode = nextNode;

            // prepare for next iteration
            curChar = input.slice(0, 1);
            input = input.slice(1);
        }
    }

    search(input) {
        // get the whole tree
        var currentNode = this.tree;
        var curChar = input.slice(0, 1);
        // take first character
        input = input.slice(1);

        // keep extracting the sub-tree based on the statement character
        while (currentNode[curChar] && curChar) {
            currentNode = currentNode[curChar];
            curChar = input.slice(0, 1);
            input = input.slice(1);
        }

        // reached the end and no sub-tree found
        // e.g. no data found
        if (curChar && !currentNode[curChar]) {
            return {
                remainder: [],
            };
        }

        console.log('search: ', currentNode.remainder);
        return currentNode.remainder;
    }
}


const trie = new Trie();
trie.add('ross');
trie.add('rachel');
trie.add('adam');
trie.add('amy');
trie.add('joey');

trie.print();
// Auto suggestions on search
trie.search('ro'); // [ 'ss' ]
trie.search('ra'); // [ 'chel' ]
trie.search('a'); // [ 'dam', 'my' ]