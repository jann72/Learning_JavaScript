// let marks = [85,76,35,75,89];
// let sum = 0;
// for(let val of marks){
//     sum += val;

// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


//que 02 
//offer que
let items = (250,645,789,654,899);
for (let i = 0; i < items.length;i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);