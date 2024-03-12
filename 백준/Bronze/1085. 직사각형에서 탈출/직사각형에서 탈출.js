const [x, y, w, h] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let mn;
mn = Math.min(x-0, y-0, w-x, h-y);
console.log(mn);