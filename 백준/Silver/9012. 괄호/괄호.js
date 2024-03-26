function VPS(ps) {
    let stack = [];
    const [opn, cls] = [ps.split('').filter(x=>x==='(').length, ps.split('').filter(x=>x===')').length];

    if (opn !== cls) {
        return 'NO';
    }

    for (p of ps) {
        if (p === '(') {
            stack.push(p)
        } else {
            if (stack.length) {
                stack.pop()
            } else {
                return 'NO';
            }
        }
    }

    return 'YES';
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const T = parseInt(input[0]);
    const arr = input.slice(1);
    for (let i=0; i<T; i++) {
        const res = VPS(arr[i]);
        console.log(res);
    }
    process.exit();
})