// create function using the function keyword that takes the string as an argument & returns the number of vowels in the string

function  countVowels(str){
    let count = 0;
    for(const char of str){
        if (char === "a" || char === "e" || char === "i"|| char === "o"|| char === "u")
        {
            count++;
        }
    }
      return count;
}
console.log(countVowels("who are you"));

//que02 create an arrow function to perform the same task
const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if (char === "a" || char === "e" || char === "i"|| char === "o"|| char === "u")
        {
            count++;
        }
    }
      return count;
}
console.log(countVowels("summertime sadness"));


