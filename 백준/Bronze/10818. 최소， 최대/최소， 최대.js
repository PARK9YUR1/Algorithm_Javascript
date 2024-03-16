const arr = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(" ").map(Number));
const N = arr[0][0];
const nums = arr[1];
const [mx, mn] = [Math.max.apply(null, nums), Math.min.apply(null, nums)];

console.log(mn, mx)