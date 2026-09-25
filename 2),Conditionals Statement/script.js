console.log("Hiee I am here to learn conditional Statements");
//Arithmetic Operators
let age = 0;
let grace = 2;

// console.log (age + grace)
// console.log (age - grace)
// console.log (age * grace)
// console.log (age / grace)
// console.log (age ** grace)
// console.log (age % grace)

// if ((age+grace)>=20){
//     console.log("You can drink alcohol");
// }
// else {
//     console.log("You cannot drink alcohol");
// }

// assignment operators
//comparison operators
// logical operators

// conditional statement
//1) if
//2) if else
//3)if..else if...else multiple
if (age >= 23) {
  console.log("You can drink alcohol");
} else if (age == 3) {
  console.log("Are you thodasaa mad??");
} else {
  console.log("You cannot drink alcohol");
}

// ternary operator
var a = 3;
var b = 4;
let c = a > b ? a - b : b - a;

//if statement
let mode = "dark";
let color;
if (mode == "dark") {
  color = "black";
}
if (mode == "light") {
  color = "white";
}
console.log(color);

//if....else statement
let num = 5;
if (num % 2 == 0) {
  console.log(num, " is Even number");
} else {
  console.log(num, "is odd number");
}

// if....elseif....else statement
let mode1 = "blue";
let color1;
if (mode1 === "dark") {
  color1 = "black";
} else if (mode1 === "blue") {
  color1 = "blue";
} else if (mode1 === "orange") {
  color = "orange";
} else {
  color1 = "white";
}

console.log(color1);

// ternary operators
let age1  = 21;
if (age1 >=18 ? console.log("adult") : console.log("not adult"));
