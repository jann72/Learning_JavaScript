
//asynchronous

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
 
},1000);//timeout: 4s=4000miles

console.log("fuck");


//callback

function sum (a,b){
console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum)

//callback hell
