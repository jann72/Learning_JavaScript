
// this is for to print all values with using map method 
let marks = [45,67,89,75,43];
    marks.map((val) => {
        console.log(val);
    });

let newArr = marks.map((val) => {
    return val * 2;
})
console.log(newArr);
//map is to create a new array using some return values based on each value which is store at the indivisiual index list of the array

