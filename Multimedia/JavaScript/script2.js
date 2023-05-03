// Add two numbers
let num1, num2, result;

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");

//numbers are stored as Strngs by default so we tur them into Integers
num1 = parseInt(num1);
num2 = parseInt(num2);

result = num1 + num2;
alert("The sum is "+result);

//returns <h4>
let element = document.getElementById("demo");
console.log(element);

// Demonstrating the use of functions
// define a function
function displayName() {
    let name = "John";
    element.innerHTML = "The name is: "+ name;
    element.outerHTML = "<p>The name is: "+ name + "<p>";
    // document.write("<h4>The name of the user is " + name +"</h4>");
}
//calling the function
// displayName();