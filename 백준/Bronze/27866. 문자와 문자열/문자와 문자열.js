const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const S = input[0];
    const i = parseInt(input[1]);
    console.log(S[i-1]);
    process.exit();
})