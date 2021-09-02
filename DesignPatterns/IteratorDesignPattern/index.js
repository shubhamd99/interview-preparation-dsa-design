// Iterator pattern is very commonly used design pattern in Java and .Net programming environment.
// This pattern is used to get a way to access the elements of a collection object in sequential manner
// without any need to know its underlying representation. It will traverse through the collection of object.
// Iterator pattern falls under behavioral pattern category. We will define the pattern to iterate over the collection.

const items = [1, "shubham", false, 1.26];

function Iterator(items) {
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {
    hasNext: function() {
        return this.index < this.items.length;
    },
    next: function() {
        // const item = this.items[this.index];
        // this.index++;
        // return item;
        return this.items[this.index++];
    }
}

const iter = new Iterator(items);

while(iter.hasNext()) {
    console.log(iter.next());
}