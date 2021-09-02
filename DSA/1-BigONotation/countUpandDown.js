// Big O (n)
function countUpAndDown(n) {
    console.log("Going Up!");
    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top! Going Down...");
    // O(n)
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("back down. Bye!");
}

countUpAndDown(10)