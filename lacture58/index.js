
function outerFunction(){
    let name = "Shaddy";
    function innerFunction(){
        console.log(name)
    }
    innerFunction();
}
outerFunction();



function outer(){
    let name = "Md. Sadaba Alam";
    function inner(){
        console.log(name);
    }
    return inner
}

let result = outer();

result();