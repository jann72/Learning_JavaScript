//It returns that single value

let arr = [1,2,3,4,5];
const output = arr.reduce((res , curr) => {
    return res + curr;
})

console.log(output);

// to print largest number in an array
let arr1 = [3,5,7,9,2];
const output1 = arr1.reduce((res , curr) => {
    return res > curr ? res : curr ;
})
console.log(output1);