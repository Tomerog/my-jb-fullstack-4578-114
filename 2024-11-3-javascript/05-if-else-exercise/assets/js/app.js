let num1 = prompt(`please enter first number`);
let num2 = prompt(`please enter second number`);

// we need to convert להסב each variable value to the numerical value
// num1 = parseInt(num1)
// num2 = parseInt(num2) // int -> integer. מספר שלם

// if we need to support decimal numbers, we need to use Float instead of integer
// num1 = parseFloat(num1)
// num2 = parseFloat(num2) // Float -> מספר עשרוני

// or we can use the + sign before a string
num1 = +num1; // is a conversion operator if places before a string operand
num2 = +num2;


if (num1>num2){
     document.write(`the biggest is ${num1}`);
} else {
    document.write(`the biggest is ${num2}`);
}

// arithmetic equation:
// 21 > 9 => true

// string equation:
// "21" > "9" => false