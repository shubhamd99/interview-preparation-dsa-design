// A Factory Pattern or Factory Method Pattern says that just define an interface or abstract class for
// creating an object but let the subclasses decide which class to instantiate.
// In other words, subclasses are responsible to create the instance of the class.

function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Shubham", 1));
employees.push(employeeFactory.create("Rohan", 2));

function say() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type);
}

employees.forEach(emp => {
    say.call(emp);
});