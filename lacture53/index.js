// // // function changeText(event){
// // //     console.log(event)
// // //     let fpara = document.getElementById('fpara')
// // //     fpara.textContent = "Hey Shaddy";
// // // }

// // // let fpara = document.getElementById('fpara');
// // // fpara.addEventListener('click', changeText)

// // // // fpara.removeEventListener('click',changeText)



// // let anchorElement = document.getElementById('fanchor');

// // function achor(event){
// //     event.preventDefault();
// //     anchorElement.textContent = "Click Done"
// // }

// // anchorElement.addEventListener('click', achor)

function alertPara(event){
    alert("You Have Click On Para:"+ event.target.textContent );
}

// let paras = document.querySelectorAll('p');
// for(let i =0; i<paras.length; i++){
//     let para = paras[i]
//     para.addEventListener('click',alertPara)
// }


let myDiv = document.getElementById('wrapper')

document.addEventListener('click', alertPara)