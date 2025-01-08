
// //  function definition
// function sayName(){
//     console.log("Hello SHadab")
// }

// //  function use - function call
// sayName()

// function printCounting(){
//     for(let i=0; i<=100;i++){
//         console.log(i)
//     }
// }
// // printCounting()

// function printNumber(num){      // num = parameter in function
//     console.log("Printing Number:", num)
// }
// printNumber(10)     // 10 is argument in function call

// function getAverage(num1, num2){
//     let avg = (num1 + num2)/2;
//     console.log("Average:", avg)
// }
// getAverage(10,20)


//  return function

// function getSum(a,b,c){
//     let sum = a + b + c;
//     return sum;
// }

// let ans = getSum(2,3,4);
// console.log("Printing Sum:", ans)


// function getMyName(firstName, lastName){
//     let fullname = firstName +" "+ lastName;
//     return fullname;
// }
// let result= getMyName("Shadab","Alam");
// console.log(result);


// const getMulti = function (a,b){
//     return a*b;
// }
// let total = getMulti(5,8)
// console.log(total)

// let squareNumber = function (num){
//     let ans = num **2;
//     return ans;
// }
// let ans= squareNumber(9)
// console.log(ans)


// ARROW FUNCTION 

let getExp1 = (x,y) => {
    let ans = x**y;
    return ans;
    }
    console.log(getExp1(7,3))


function getExp2(x,y){
    let ans = x**y;
    return ans;
}
console.log(getExp2(7,3))


let getExp3 = function (x,y){
let ans = x**y;
return ans;
}
console.log(getExp3(7,3))