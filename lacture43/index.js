// let obj = {
//     name: "Shadab",
//     age: 25,
//     weight: 85,
//     Height: "6.3 feet",
//     greet: function(){
//         console.log("Hello Jee Kaise Ho Saare");
//     }
// };

// console.log(obj)
// obj.greet();
// console.log(typeof(obj.greet))

// ARRAY

// let arr = [1,2,3,4,5,6]
// Array constructor
// let  brr = new Array('love', 1, true);

// console.log(typeof(brr))
// console.log(typeof(arr))
// brr.push("shaddy")
// brr.pop("shaddy")

// brr.shift()
// brr.unshift("Shadab")
// brr.push(20)
// brr.push(40)
// brr.push(23)
// console.log(brr.slice(1,5))
// brr.splice(3,2,"shaddy")        //(3,2,'shaddy') = that means 3 index se 2 values ko remove kro and uski jagah par shaddy ko insert kr do.
// console.log(brr)

// BUILT-IN-FUNCTION IN ARRAY
// push     ==> insert at end
// pop      ==> remove 
// shift    ==> remove first item
// unshift  ==> add first item
// slice    ==> new part
// splice   ==> content change (insert, replace, remove)
// map      ==> all array item ko effectively task perform krta hai.
// filter   ==> use for filtering like as even or odd number nikalna array se.
// reduce   ==> Isme 2 variable hote hai 1st accumulator and 2nd current .
// sort     ==> assending order ki taraf sort hota like as chote se bade ki taraf.
// indexof  ==> print at index number of array
// find     ==>



// let arr = [10,20,30]

// arr.map((number,index)=>{
    // console.log(number+1)
    // console.log(index)
// })

// let ansArray = arr.map((number) =>{
//     return number * number;
// })

// console.log(ansArray)


// let arr2 = [22,55,87,56,59,88,12,51]

// let ansArray = arr2.filter((number)=>{
//     if (number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ansArray)

// let ans2Array = arr2.filter((number)=>{
//     if (number%2===0){
//         return false;
//     }
//     else{
//         return true;
//     }
// })
// console.log(ans2Array)


// let arr = [1,2,'love', 'shaddy', null];

// let ansArray = arr.filter((value)=>{
//     if (typeof(value)=== 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ansArray)

// let arr = [10,20,30,40]
//  let ans = arr.reduce((acc, curr)=>{
//     return acc + curr;
//  }, 0)
//   console.log(ans)


// let arr = [4,5,9,7,6,1,5,3,8,4,6,5]
// arr.sort();

// console.log(arr)
// console.log(arr.indexOf(6))


let ar =  [10,20,30]

Array.foreach