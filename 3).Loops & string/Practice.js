

//que 01;

for (let i = 0; i<= 100 ; i++){
    if( i % 2 == 0){
    console.log(i);
    }}

// que 02;
// guessing the right number game    
let gameNum = 22;
let userNum = prompt ("Guess the right number :") 


while (userNum != gameNum){
    userNum = prompt ("You entered wrong number, Guess agein :");
}
console.log("Congratulation, you entered the right number");

// que 03
let fullName = prompt("Enter your full naem without spaces");
let userName = ("@" + fullName + fullName.length);
console.log(username);