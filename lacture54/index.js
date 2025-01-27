

// // Code  1
// const t1 = performance.now()

// for (let i=1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = "This is Para" + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now()

// console.log("total time by code 1" + (t2-t1));


// // Code   2

// const t3 = performance.now()
// let myDiv = document.createElement('div')

// for (let i= 1; i<= 100; i++){
//     let para = document.createElement('p')
//     para.textContent = "This is Para" + i;
//     myDiv.appendChild(para)
// }
// document.body.appendChild(myDiv);



let fragment = document.createDocumentFragment();


for(let i= 1; i<= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    // No reflow & No repaint for the below line
    fragment.appendChild(para)
}
// the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment)

