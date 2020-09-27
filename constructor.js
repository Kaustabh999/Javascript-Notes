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

/*A constructor is a function that creates an instance of a class which is typically called an “object”. 
In JavaScript, a constructor gets called when you declare an object using the new keyword.

The purpose of a constructor is to create an object and set values if there are any object properties present.
It’s a neat way to create an object because you do not need to explicitly state what to return as the constructor 
function, by default, returns the object that gets created within it.

What happens when a constructor gets called?

In JavaScript, here’s what happens when a constructor is invoked:

  * A new empty object is created

  * "this" keyword starts referring to that newly created object and hence it becomes the current instance object

  * The newly created object is then returned as the constructor’s returned value*/

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

var myMother = new Person("Bobby", "Sharma", 40, "brown");
// Display firstname
console.log(myMother.firstName);

// The new keyword does the following things:
//  1.Creates a blank, plain JavaScript object;
//  2.Links (sets the constructor of) this object to another object;
//  3.Passes the newly created object from Step 1 as the this context;
//  4.Returns this if the function doesn't return an object.

// Creating a user-defined object requires two steps:
//  1.Define the object type by writing a function.
//  2.Create an instance of the object with new. 
