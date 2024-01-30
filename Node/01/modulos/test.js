async function nums(nums) {
    let list = []
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        list.push(Number(nums[i]))
        total += list[i]
    }
    console.log(total);
}

function hello(str) {
    console.log(str);
}

// const str = process.argv.slice(2).join(' ')
const numbers = process.argv.slice(2)
// hello(str)
nums(numbers)

module.exports = { hello, nums }
