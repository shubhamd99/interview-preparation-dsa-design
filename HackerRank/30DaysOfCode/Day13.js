// Day 13: Abstract Classes

// Abstract classes can be defined as classes that cannot be instantiated i.e.
// whose object reference cannot be created and contains within it, one or more abstract methods. 

// An abstract method is a method that can only be declared but has no implementation to it.

// Base Class
class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

// Answer

// Declare your class here.
class MyBook extends Book {

    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price) {
        super();
        this.title = title,
        this.author = author;
        this.price = price;
    }
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Price: " + this.price);
    }
    
}
// End class


