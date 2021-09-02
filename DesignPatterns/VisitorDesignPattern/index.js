// In Visitor pattern, we use a visitor class which changes the executing algorithm of an element class.
// By this way, execution algorithm of element can vary as and when visitor varies. This pattern comes under
// behavior pattern category. As per the pattern, element object has to accept the visitor object so that visitor
// object handles the operation on the element object.
// It will change the properties of the main object without have to modify it by creating new visitor object

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary: function() {
        return this.salary;
    },
    setSalary: function(sal) {
        this.salary = sal;
    },
    accept: function(visitorFunction) {
        visitorFunction(this);
    },
}

const shubham = new Employee("Shubham", 40000);
console.log(shubham.getSalary());

// Visitor Function
function ExtraSalary(emp) {
    emp.setSalary(emp.getSalary() * 2);
}

shubham.accept(ExtraSalary);
console.log(shubham.getSalary());