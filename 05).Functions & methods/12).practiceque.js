  
//filter out marks of student that scored 90
let marks = [87,67,90,87,92,65,97];
 let newArr = marks.filter((val) => {
    return val > 90 ;
})
console.log(newArr);

//que02
let n , arr = [1,2,3,4,5,6];
// let arr = [1,2,3,4,5,6,7];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res , curr) => {
    return res + curr;
})
console.log("sum : " ,sum);

let factorial = arr.reduce((res , curr) => {
    return res * curr;
})
console.log("factorial : ", factorial);