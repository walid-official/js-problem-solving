// Find the Maximum
// Create a function that finds the maximum number in an array using a loop.

let numbers = [3, 7, 2, 9, 5];

function maxNumber(arr){

   let max = arr[0];

   for(var i = 1; i < arr.length; i++){

    if(arr[i] > max){

        max = arr[i];
    }

   }

   return max;
}

let arrNumbers = maxNumber(numbers);
console.log(arrNumbers);


// another way to get same output

// function findMaxNumber(arr) {
//     return Math.max(...arr);
// }

// const numbers = [3, 7, 2, 9, 5];
// const maxNumber = findMaxNumber(numbers);
// console.log("The maximum number is:", maxNumber); // Output will be 9

