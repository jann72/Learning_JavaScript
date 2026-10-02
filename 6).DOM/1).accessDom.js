//selecting with id
let heading = document.getElementById("heading");
console.dir(heading);

//selecting with class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

//selecting by tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);

//selecting with querySelector
let firstEle = document.querySelector("p");
console.dir(firstEle);
console.log(firstEle);

let allEle = document.querySelectorAll("p");
console.dir(allEle);
console.log(allEle);
