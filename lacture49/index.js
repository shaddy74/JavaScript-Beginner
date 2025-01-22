let src ={
    age : 12,
    wt:58,
    ht:158
}

let dest ={};

for (let key in src){       // iteration method for clonning object
    let newKEY = key
    let newValue = src[key];
    // insert newKEY and value in dest and create a clone
    dest[newKEY] = newValue;
}

src.age= 50;

console.log("src:", src)
console.log("dest:", dest)




// let src2 ={
//     value:101,
//     name:"Shaddy"
// }

// let dest = Object.assign({}, src,src2);   // assign operator clonning

// src.age= 50;

// console.log("src:", src)
// console.log("dest:", dest)



// let dest ={
//     ...src   // spread operator clonning
// }

// src.age = 60

// console.log("src:", src)
// console.log("dest:", dest)


// console.log(obj)
// obj.color = "White"
// console.log(obj)