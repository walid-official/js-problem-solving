// Promise practice

//let state = true;

// task-1 :: console.log('task 1');

// promise definition
// Task-2 :: const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(state){
//             console.log('task 2');
//         }else{
//             console.log('your task is failed')
//         }
//     },2000)
// })

// promise call

// promise
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(error){
//         console.log(error);
//     })


// task-3 :: console.log('task 3');

// course project

// let payment = true;
// const marks = parseInt(prompt('Enter Your Number'));

// function enroll(){

//     console.log('The enrollment is pending..')

//     let promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(payment){
//              resolve();
//             }else{
//              reject('payment failed')
//             }
//          },2000)
//     })

//     return promise;
   
// }

// function progress(){

//     console.log('Your course is progressing');

//     let promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(marks >= 80){
//                 resolve();
//             }else{
//                 reject('you must get 80 marks or more than not less than')
//             }
//         },3000)
//     })

//     return promise;
// }

// function getCertificate(){
//     console.log('your certificate is preparing');

//     let promise = new Promise(function(resolve){
//         setTimeout(function(){
//              resolve('congrats! you got certificate');
//          })
//     })
//     return promise;
// }

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(error){
//         console.log(error);
//     })

// asynchronous function and await

let payment = true;
const marks = parseInt(prompt('Enter Your Number'));

function enroll(){

    console.log('The enrollment is pending..')

    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(payment){
             resolve();
            }else{
             reject('payment failed')
            }
         },2000)
    })

    return promise;
   
}

function progress(){

    console.log('Your course is progressing');

    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve();
            }else{
                reject('you must get 80 marks or more than not less than')
            }
        },3000)
    })

    return promise;
}

function getCertificate(){
    console.log('your certificate is preparing');

    let promise = new Promise(function(resolve){
        setTimeout(function(){
             resolve('congrats! you got certificate');
         })
    })
    return promise;
}


async function course(){
    try{
    await enroll()
    await progress()
    let message = await getCertificate()
    console.log(message);
    }catch(err){
        console.log(err);
    }
}
course();