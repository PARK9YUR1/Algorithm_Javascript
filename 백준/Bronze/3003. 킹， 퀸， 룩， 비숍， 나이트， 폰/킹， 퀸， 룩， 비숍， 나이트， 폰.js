const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let result = [];
    const chess = [1, 1, 2, 2, 2, 8];
    const dh = input[0].split(" ").map(Number);
    for (let i=0; i<6; i++) {
        result.push(chess[i]-dh[i])
    }
    console.log(result.join(" "))
    process.exit();
})