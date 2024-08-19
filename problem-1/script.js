// Sum of an Array

// Write a function that takes an array of numbers and returns the sum of all the elements.

let numbers = [1,2,3,4,5];

function myNumbers(item1,item2){
    return item1 + item2;
}

console.log(numbers.reduce(myNumbers));

// and forEach sum of every single number in array

// let someNumbers = [2,4,6,8,10,12];

// someNumbers.forEach((item1,item2) => {
//     console.log(item1 + item2);
// })

