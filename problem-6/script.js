// javascript is a synchronous programming language by default

// console.log('hello 1')
// console.log('hello 2')
// console.log('hello 3')

// result:
//---------
// hello 1
// hello 2
// hello 3


// javascript can be use as a asynchronous language;

//1. code1 :: console.log('hello 1');

//2. code2 ::  setTimeout(function(){
//     console.log('Hello 2')
// },2000)

//3. code3 :: console.log('hello 3');



// result:
//--------
// hello 1
// hello 3
// hello 2




//The callback pattern

let payment = true;
const marks = 20;

function enroll(callback){
    console.log('The enrollment is pending..')
    setTimeout(function(){
       if(payment){
        callback();
       }else{
        console.log('payment failed')
       }
    },2000)
}

function progress(callback){
    console.log('Your course is progressing');
    setTimeout(function(){
        if(marks >= 80){
            callback();
        }else{
            console.log('you must get 80 marks or more than not less than')
        }
    },3000)
}

function getCertificate(){
    console.log('your certificate is preparing');
    setTimeout(function(){
        console.log('congrates! you got certificate');
    })
}

enroll(function(){
    progress(getCertificate);
})