console.log("Loops in JavaScript")
let a = 1;

// for loop 
for(let i = 0; i < 10; i++){
    console.log(a+i);
}

// for in loop
let obj = {
    name : "Juliett",
    age :20,
    role:"Student",
    branch:"IT"
}
   for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
   }


 //for of ( use for iteral data structure like array , string)
 for (const c of "Juliett") {
    console.log(c)
 }