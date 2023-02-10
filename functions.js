// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Welcome to the website!";
}

console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Welcome to the website, ${name}!`;
}

console.log(customGreeting("Laura")); 

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    var fullName = [first, middle, last].join(" "); 
    return `Welcome to the website, ${fullName}!`;
}

console.log(greetPerson("Laura", "Garcia", "Guerra"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function getSqr(num) {
    return num*num;
}

function getSqrt(num) {
    return Math.sqrt(num);
}

console.log(`5 squared is ${getSqr(5)}, and the square root of 25 is ${getSqrt(25)}.`)

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"