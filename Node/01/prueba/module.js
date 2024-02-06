

// let
// const

let err;
const multi = 10
let resultado = 1
// console.log(multi);

const resta = (a, b) => {
    let resultado = (a+b * multi)
    console.log(resultado);
    
}

function Sumar(a, b) {
    console.log(typeof(a));
    console.log(typeof(b));
    let resultado = a + b
    console.log(a + b);

    
    
}

module.exports = {Sumar, resta}