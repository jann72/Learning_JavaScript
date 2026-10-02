//access the element first
//find the property
// after that change it

let h2 = document.querySelector("h2");

console.dir(h2.innerText);
 h2.innerText = h2.innerText + " from apna college students ";


 // que 02
 
let div = document.querySelectorAll(".div");
 div[0].innerText = "New unique value is 22";
 div[1].innerText = "New unique value is 25";
div[2].innerText = "New unique value is 47";

//using for of loop
// let idx = 1;
// for(div of div){
//     div.innerText = 'New unique value is ${idx}';
//     idx++;
// }