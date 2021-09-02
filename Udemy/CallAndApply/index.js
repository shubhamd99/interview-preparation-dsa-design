// Method use
// With the apply() method, you can write a method that can be used on different objects.

// The call() method takes arguments separately.
// The call() method calls a function with a given this value, and arguments provided individually.

// The apply() method takes arguments as an array.
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

// JavaScript Strict Mode
// In JavaScript strict mode, if the first argument of the apply() method is not an object,
// it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Shubham",
    lastName: "Dhage"
}

const personName = person.fullName.apply(person1);  // Will return "Shubham Dhage"


// ------------------------------------------------ //

const personWithCityCountry = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

// First argument "this" and second "array"
const personWithPlace = personWithCityCountry.fullName.apply(person1, ["Oslo", "Norway"]);

// ------------------------------------------------ //

let sampleObj = {
    name: "Shubham",
    showArrow: () => "Name: " + this.name, // Arrow function dont have there own "this"
    showRegular: function() { 
        return "Name: " + this.name
    }
}

const showName = sampleObj.showArrow(); // undefined
const showName2 = sampleObj.showArrow.call({ name: "Rohan" }); // undefined
const showName3 = sampleObj.showRegular(); // Shubham
const showName4 = sampleObj.showRegular.call({ name: "Rohan" }); // Rohan

// ------------------------------------------------ //

// First argument "this" and second "individual"
const personObjWithCall = personWithCityCountry.fullName.call(person1, "Banglore", "India");


// ------------------------------------------------ //

Math.max(1,2,3);  // Will return 3
// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
Math.max.apply(null, [1,2,3]); // Will also return 3

// The first argument (null) does not matter.
Math.max.apply(Math, [1,2,3]); // Will also return 3
Math.max.apply(" ", [1,2,3]); // Will also return 3
Math.max.apply(0, [1,2,3]); // Will also return 3

// ------------------------------------------------ //

module.exports = { personName, personWithPlace, showName, showName2, showName3, showName4, personObjWithCall }