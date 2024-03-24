function solution(n, arr) {
    let stack = [];
    let result = [];
    
    arr.forEach(a => {
        const [m, x] = a.split(" ").map(Number);
        if (m == 1) {
            stack.push(x);
        } else if (m == 2) {
            result.push((stack.length)?(stack.pop()):(-1));
        } else if (m == 3) {
            result.push(stack.length);
        } else if (m == 4) {
            result.push((stack.length)?0:1);
        } else if (m == 5) {
            result.push((stack.length)?(stack[stack.length - 1]):(-1));
        }
    })
    return result
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
    const n = input[0];
    const arr = input.slice(1);
    const result = solution(n ,arr);
    console.log(result.join("\n"))
    process.exit()
})