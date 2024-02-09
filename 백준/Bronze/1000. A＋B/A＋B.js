const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim().split(" ").map(Number);

// const [A, B] = input
// console.log(A+B)

const sum = input.reduce((accumulator, cur) => accumulator + cur, 0);  // accumulator:누적값, cur:현재값, 0:초기값
console.log(sum);