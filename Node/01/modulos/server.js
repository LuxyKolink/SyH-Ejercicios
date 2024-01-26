
// Verifica que haya al menos dos argumentos (node + nombre del archivo)
if (process.argv.length < 3) {
    console.log('Usage: node sumNumbers.js number1 number2 ...');
    process.exit(1);
}

// Obtiene los argumentos, excluyendo los primeros dos (node + nombre del archivo)
const numbers = process.argv.slice(2);

let numberArray = []
let total = 0
for (let i = 0; i < numbers.length; i++) {
    numberArray.push(parseInt(numbers[i]));
    total += numberArray[i]
}

console.log(total);

// // Convierte los argumentos a números y suma
// const sum = numbers.reduce((acc, num) => {
//     acc + parseFloat(num), 0
// });

// // Imprime la suma en la consola
// console.log('Sum:', sum);

/*

// Solución Oficial

'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)
*/