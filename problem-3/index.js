// 1. just print X = sum result;

// let a = 10;
// let b = 20;
// let x = a + b;
// console.log(`X = ${x}`);




// 2. just print sum calculation 

// let a = parseInt(prompt('Enter a number :'));
// let b = parseInt(prompt('Enter a number :'));
// let x = a + b;

// console.log(`X = ${x}`);






// 3. printing all calculation with prompt

// let a = parseInt(prompt('Enter Your First number :'));
// let c = parseInt(prompt('Enter your Second Number'));
// let b = parseInt(prompt('Enter Your Third number :'));

// let x = a + b;
// let y = a - b;
// let z = a * c;

// console.log(`X = ${x}`);
// console.log(`X = ${y}`);
// console.log(`X = ${z}`);









// 4. creating a calculator

let a = parseInt(prompt('Enter Your First number :'));
let b = parseInt(prompt('Enter Your First number :'));
let calculation = prompt("Enter Your calculation symbol : ");

let result;

switch(calculation){
    case "+":
        text = a + b;
        break;
    case "-":
        text = a - b;
        break;
    case "*":
        text = a * b;
        break;
    case "/":
        text = a / b;
        break;
    default:
        text = "No option is selected";
}

console.log(result);