


function getAge(){
    return 190;
}

function utility(name = "shaddy", age = getAge()){
    console.log(name," ",age)
}

utility()





// function sayName(fName = "Shaddy", lName = "Alam"){
//     console.log("My Name is: ",fName," ",lName);
    
// }

// sayName("Shadab"," Alam");




// class Human{
//     // property
//     age=20;     //public
//     #wt = 80;   //private declare
//     ht = 180;

//     constructor(newAge, newHeight){
//         this.age = newAge;
//         this.ht = newHeight

//     }

//     // behavior
//     walking(){
//         console.log("I am Walking", this.#wt)
//     }

//     runnin(){
//         console.log("I am Running")
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight (val){
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 160);

// console.log(obj.age);

// obj.walking();



