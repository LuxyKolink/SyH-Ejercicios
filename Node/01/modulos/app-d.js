
const numbers = ["1", "2", "3", "4"]
//const numbers = [1, 2, 3, 4, 5, 6]
let numberArray = []
let total = 0
for (let i = 2; i < numbers.length; i++) {
    numberArray.push(parseInt(numbers[i]));
    total += numberArray[i - 2]
}

console.log(total);