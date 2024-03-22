function solution(a, b) {
    const A = Number(a.toString().split("").reverse().join(''));
    const B = Number(b.toString().split("").reverse().join(''));
    
    console.log(Math.max(A, B));  
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
    const [a, b] = input[0].split(" ");
    solution(a, b)
    process.exit()
})