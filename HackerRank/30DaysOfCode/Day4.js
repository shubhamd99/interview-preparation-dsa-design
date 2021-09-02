// Day 4: Class vs. Instance

function Person(initialAge){

    if (initialAge < 0) {
        this.age = 0;
        process.stdout.write("Age is not valid, setting age to 0.\n");
    } else {
        this.age = initialAge;
    }

    // Add some more code to run some checks on initialAge
    this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) {

            process.stdout.write("You are young.\n");

        } else if (this.age >= 13 && this.age < 18) {

                process.stdout.write("You are a teenager.\n");

        } else if (this.age >= 18) {

            if (this.age >= 21) {

                process.stdout.write("You are old.\n");

            } else {

                process.stdout.write("You are old.\n");

            }
        }
    };

    this.yearPasses=function(){
        // Increment the age of the person in here
        this.age += 1;
    };
}