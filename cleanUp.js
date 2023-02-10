// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?"); 
}

askForName();

/* 
Actions: 
1. Move the code block to a new line and add a semicolon at the end of the line.
2. Move the closing curly bracket to a new line. 
3. Add a semicolon after calling the function. 

Reason for all actions: To follow conventions and best practices. 
*/

// EX 2:
function addThreeNums(first, second, third) {
  return first + second + third;
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

/* 
Actions: 
1. Use tab to nest the code block inside the function, and at a semicolon at the end of the line.
2. Replace "var sum =" with the return keyword.
3. Move the closing curly bracket to the beginning of the line. 

Reason for actions 1 & 3: To follow conventions and best practices. 
Reason for action 2: Declaring a variable in a function and then returning that variable is repetetive, 
unless the variable will serve a later purpose within the function, which it currently does not. 
*/

// EX 3:
func makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }