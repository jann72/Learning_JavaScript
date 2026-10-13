let div = document.querySelector("div");
console.log(div);

//to get the attribute value of the div element

let id = div.getAttribute("id");
console.log(id);

// to set the attribute value of the div element

let para = document.querySelector("p");
console.log(para);

let idNew = para.setAttribute("id", "newId");
console.log(idNew);

// to access css in js 
let div2 = document.querySelector("div");
div.style.backgroundColor = " brown";
div.style.color = "beige";
div.style.font = "bold 20px Arial";
div.style.textAlign = "center";
div.innerText = "HLWWW";


// Insert a new element in the DOM
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

let div3 = document.querySelector("div");
div.append(newBtn);  // adding the button to the div element
div.prepend(newBtn); //adding the button to the div element at the start
div.before(newBtn); // adding before the node(outside)
div.after(newBtn);  // adding after the node(outside)

// after paragraph 
let para2 = document.querySelector("p");
para2.after(newBtn);

//remove the element from the DOM
let para3 = document.querySelector("p");
para.remove();