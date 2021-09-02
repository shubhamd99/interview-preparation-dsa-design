function countdown(num) {
    if (num <= 0) {
        console.log("All Done");
        return;
    }

    console.log(num);
    num--;
    countdown(num);
}

countdown(10);
