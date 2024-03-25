const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []
rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    const word = input[0];
    console.log(word.length)
    process.exit()
})