 let foodItems = ["potato", "flower","orange","tomato"];
 let softDrinks = ["coke","redbull","sprit","smooth","fruity"];

 // push method(add the element in end)
 foodItems.push("chips");
 console.log(foodItems);


//pop method(delete the element from end & return)
foodItems.pop();
console.log(foodItems);

//toString (convert array to string)
console.log(foodItems.toString());

// concat (joins multiple arrays & return result , original array cannot change)
 let heros = foodItems.concat(softDrinks);
console.log(heros);

//unshift(add to start)
foodItems.unshift("kajuu");
console.log(foodItems);

//shift (delete from start & return)
foodItems.shift();
console.log(foodItems);

// slice (return a piece of the array)
console.log(foodItems);
console.log(foodItems.slice(1,3));

//splice (change original array [add, remove, replace])
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,103);
console.log(arr);

//only add element in original array
arr.splice(2,0,22);
console.log(arr);

// delete element
arr.splice(3,1);
console.log(arr);

// replace elememt
arr.splice(2,0,25);
console.log(arr);
