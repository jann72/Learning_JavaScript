// filter methods creates a new array of element that give true for a conditiionafilter
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let evenArr = num.filter((val) =>  {
return val % 2 === 0;
});
console.log(evenArr);