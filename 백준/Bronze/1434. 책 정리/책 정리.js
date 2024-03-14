const arr = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el=>el.split(" ").map(Number));
const [N, M] = arr[0];  // 박스, 책 개수
const boxes = arr[1];
const books = arr[2];

let idx = 0;

for (let i=0; i<N; i++) {
    while (true) {
        const box = boxes[i];
        if (idx == M) {
            break;
        }
        const book = books[idx];

        if (box >= book) {
            boxes[i] -= book;
            idx++;
        } else {
            break;
        }
    }
}

let result = 0;
boxes.forEach(b => {
    result += b;
})

console.log(result)