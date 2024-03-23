function solution(n, m, arr) {
    const nums = Array.from({ length: n+1 }, (_, i) => i);
    arr.forEach(a => {
        const [i, j] = a.split(" ").map(Number);
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    })
    console.log(nums.slice(1).join(" "))
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
    const [n, m] = input[0].split(" ").map(Number);  // 바구니 n개, 공 m번 교환
    const arr = input.slice(1);
    solution(n, m ,arr)
    process.exit()
})