const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1);

const pattern1 = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW"
];

const pattern2 = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB"
];

let mn = N * M;

for (let n=0; n<=N-8; n++) {
    for (let m=0; m<=M-8; m++) {
        let [cnt1, cnt2] = [0, 0];
        
        for (let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
                if (pattern1[i][j] !== arr[n+i][m+j]) cnt1++;
                if (pattern2[i][j] !== arr[n+i][m+j]) cnt2++;
            }
        }
        
        mn = Math.min(mn, cnt1, cnt2);
    }
}

console.log(mn);