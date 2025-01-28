

// // let firstPromise = new Promise ((resolve, reject) => {
// //     setTimeout(function sayMyName(){
// //         console.log("My Name Is shaddy");
// //     },5000)
// // });


// let promise1 = new Promise ((resolve , reject)=>{
//     let succes = true;
//     if (succes){
//         resolve(10);
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });

// // promise1.then((massage) => {
// //     console.log("Then ka massage " + massage);
// // }).catch((error) =>{
// //     console.log("Error: "+ error)
// // })


// promise1.then((massage)=>{
//     console.log("first msg: " + massage);
//     return 20;
// }).then((massage)=>{
//     console.log("Second msg: "+massage);
//     return 30;
// }).then((massage)=>{
//     console.log("third msg: " +massage);
// }).catch((error)=>{
//     console.error(error);
// }).finally((massage)=>{
//     console.log("Mai to final hu, Chalunga Pakka");
// });




let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "First");
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, "Second");
})
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, "Third");
})

Promise.all([promise2, promise3, promise4])
.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("Error: "+error)
})