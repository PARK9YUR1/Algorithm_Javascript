function solution(N, nums) {
    return nums.sort((a, b) => a - b).join('\n')
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    const n = parseInt(input[0])
    const arr = input.slice(1).map(Number)
    console.log(solution(n, arr))
    process.exit()
})