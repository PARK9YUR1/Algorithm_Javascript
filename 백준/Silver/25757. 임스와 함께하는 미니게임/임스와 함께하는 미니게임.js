const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const [N, game] = input[0].split(" ");
    const users = new Set(input.slice(1));

    const p = {'Y':1, 'F':2, 'O':3}
    console.log(parseInt(users.size / p[game]))
 
    process.exit();
})