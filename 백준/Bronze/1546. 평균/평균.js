const arr = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(" ").map(Number));
const N = arr[0][0];
const scores = arr[1];
const mx = Math.max.apply(null, scores);

for (let i=0; i<N; i++) {
    const tmp = scores[i]/mx*100;
    scores[i] = tmp;
}

console.log(scores.reduce((acc, cur) => acc+cur, 0) / N)