// Day 12: Inheritance

// Class inheritance is a way for one class to extend another class.
// So we can create new functionality on top of the existing.
// Observe that Student inherits all the properties of Person.

// Base Class
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

// Answer
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, testScores) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
        this.testScores = testScores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        const scoresLength = this.testScores.length;
        const scoreTotal = this.testScores.reduce((acc, curr) => acc+= curr, 0);
        const total = Math.floor(scoreTotal/scoresLength);

        let grade = "";

        if (total >= 90 && total <= 100) {
            grade = "O";
        } else if (total >= 80 && total < 90) {
            grade = "E";
        } else if (total >= 70 && total < 80) {
            grade = "A";
        } else if (total >= 55 && total < 70) {
            grade = "P";
        } else if (total >= 40 && total < 55) {
            grade = "D";
        } else if (total < 40) {
            grade = "T";
        }

        return grade;
    }
    
}

