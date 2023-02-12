// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Welcome to the website!";
}

var greeting = greeting();
console.log(greeting);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Welcome to the website, ${name}!`;
}

var greetLaura = customGreeting("Laura");
var greetGreg = customGreeting("Greg");
console.log(greetLaura); 
console.log(greetGreg);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    var fullName = [first, middle, last].join(" "); 
    return `Welcome to the website, ${fullName}!`;
}

var greetFullName1 = greetPerson("Laura", "Garcia", "Guerra")
var greetFullName2 = greetPerson("Greg", "Joseph", "Flaherty");
console.log(greetFullName1);
console.log(greetFullName2);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return num*num;
}

function sqrt(num) {
    return Math.sqrt(num);
}

var tenSqr = square(10);
var hundredSqrt = sqrt(100);
console.log(`10 squared is ${tenSqr}, and the square root of 100 is ${hundredSqrt}.`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if (!quantity) {
        return `${item} - OUT of stock!`;
    } else if (quantity < 4) {
        return `${item} - running LOW`;
    } else {
        return `${item} is stocked`
    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"