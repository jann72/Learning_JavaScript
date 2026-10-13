//Event handling in js 

let btn = document.querySelector("#btn");
// btn.onclick = ()=> {
//     console.log("button was clicked"); alert("helooo");

// }

//Event object in js

 btn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
 }

 //Event listerner with object also in js

 btn.addEventListener("click", (evt)  => {
    console.log("button was clicked"); 
    console.log(evt);
     console.log(evt.type);
    console.log(evt.target);

 })
//  multiple event listener on same element in js
btn.addEventListener("click", (evt)  => {
    console.log("button was clicked again"); 
})

// removing event listenr in js

const handler2 = () => {
    console.log("button was clicked again"); 
};
btn.addEventListener("click", handler2);
btn.removeEventListener("click", handler2);