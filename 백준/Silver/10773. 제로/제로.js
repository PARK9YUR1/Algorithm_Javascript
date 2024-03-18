const arr = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
const K = arr[0];
const nums = arr.slice(1);

const stack = [];

for (let i=0; i<K; i++) {
    if (nums[i]) {
        stack.push(nums[i]);
    } else {
        stack.pop();
    }
}

console.log(stack.reduce((acc, cur) => acc+cur, 0))