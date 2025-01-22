// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block end here");
// }
// catch(e){
//     //define karte h, error ke sath aap kya krna chahte h
//     // retry logic
//     // fallback mechanism
//     // logging
//     // custom error
//     console.log("I AM INSIDE CATCH BLOCK")
//     console.log("Your error is here: ", e);
// }


// finally{
//     onslotchange.log("I Will Run everytime , as I am finally block")
// }


//  lets create a custom error 

// try{
//     console.log(x);
// }
// catch(e){
//     throw new Error ("Bhai pahle Declare Kro tab code Execute hoga")
// }

let errorCode = 100;
if (errorCode == 100){
    throw new Error ("Invalid Json")
}