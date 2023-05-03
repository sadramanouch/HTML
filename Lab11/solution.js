//////////////Solution 1//////////////////////
function calculateTip(form) {
    console.log(form);
    let amount = form["amount"].value;
    console.log(amount);
    let calc = (amount * 0.2);
    let result = document.getElementById("result");
    result.innerHTML = "Tip on $"+amount+" is: $"+calc;
}

//////////////Solution 2//////////////////////
function y() {
    yellow.style.backgroundColor="lightyellow";
}
function g() {
    yellow.style.backgroundColor="lightgreen";
}

//////////////Solution 3//////////////////////
let input, result;
input = prompt("Enter Fahrenheit temperature");
result = (input-32)/1.8
alert("Celsius tempreture is "+result);