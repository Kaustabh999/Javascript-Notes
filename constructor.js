/*All objects (with the exception of objects created with 
Object.create(null)) will have a constructor property. Objects
created without the explicit use of a constructor function (such as 
object- and array-literals) will have a constructor property that 
points to the Fundamental Object constructor type for that object.
This constructor reference to that function which is use to create 
that object*/

/*Every function in javascript is a object. When we use the syntex
 of function in javascript, it use "Function()" method to create
 the particular function.*/ 

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");

// Display age
console.log(myFather.age); 

// Display firstname
console.log(myFather.firstName);

// The new keyword does the following things:
//  1.Creates a blank, plain JavaScript object;
//  2.Links (sets the constructor of) this object to another object;
//  3.Passes the newly created object from Step 1 as the this context;
//  4.Returns this if the function doesn't return an object.

// Creating a user-defined object requires two steps:
//  1.Define the object type by writing a function.
//  2.Create an instance of the object with new. 