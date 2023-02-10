// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes() method is called on the string "Hello World" while pasing the argument "Hello"
// includes("Hello") asks whether the String includes  "Hello".
// It is expected to return a Boolean value (true) since the String does include "Hello".


"Hello World".endsWith("Hello");
// The endsWith() method is called on the string "Hello World" while pasing the argument "Hello"
// endsWith("Hello") asks whether the String ends with "Hello".
// It is expected to return a Boolean value (false) since the String does not end with "Hello".


"Hello World".endsWith("rld");
// The endsWith() method is called on the string "Hello World" while pasing the argument "rld"
// endsWith("rld") asks whether the String ends with "rld".
// It is expected to return a Boolean value (true) since the String does end with "rld".



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The toUpperCase() method is called on the lastName variable, which stores the string object "Guerra". 
// The toUpperCase() method returns the string spelled with all upper case letters.
// The console.log() statements prints the return value of the toUpperCase() method ("GUERRA") to the console.
var lastName = "Guerra"; 
console.log(lastName.toUpperCase());


// The includes() method is called on the school variable, which stores the string object "Turing School of Software & Design". 
// The includes() method returns true if the data in the school variable contains the argument passed in.
// In this example, the return value is true, because "Turing School of Software & Design" includes "Software".
// The console.log() statements prints the return value of the includes() method (true) to the console.
var school = "Turing School of Software & Design"
console.log(school.includes("Software"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The splice() method modifies elements in an array. It can be used to insert elements, remove them, or exchange 
// them with a different element. The first parameter of the splice method tells the program at which index position 
// to alter, the second parameter tells it how many elements to delete, and the last parameter tells it what to add. 
// The argument 3 is being passed in at the first parameter, which tells the program to modify the elements starting 
// at index position three. The argument 1 is being passed in at the second parameter, telling the program to remove 
// 1 element. The argument "Greg" is being passed in at the third parameter, and it is the new element that will replace 
// the previous element in index position 3. 
// The console.log() statement prints the return value of the splice() method to the console.
// The expected return value is [ 'Miranda', Maddy', 'Melissa', 'Greg' ].
var friends = ["Miranada","Maddy","Melissa","Heather"];
friends.splice(3, 1, "Greg");
console.log(friends);

// The unshift() method adds an element to the beginning of the array. The argument "Cadillac" is being passed in and 
// will be added to the array at index position 0.
// The console.log() statement prints the return value of the unshift() method to the console. 
// The expected return value is [ 'Cadillac', 'Mercedes', 'BMW', 'Jeep', 'Audi' ].
var cars = ["Mercedes","BMW","Jeep","Audi"];
cars.unshift("Cadillac");
console.log(cars);