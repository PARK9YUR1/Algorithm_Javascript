const board = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(""));
let result = 0

for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
        if (i%2 == j%2 && board[i][j] == 'F') {
           result += 1;
        }
    }
}

console.log(result);