const word = [...require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim()]
let arr = new Array(26).fill(-1);

word.forEach((alpha, i) => {
  let idx = alpha.charCodeAt() - 97
  if (arr[idx] === -1) {
    arr[idx] = i
  }
});

console.log(...arr)

// const word = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt").toString().trim()
// let arr = new Array(26).fill(-1);

// for (let i=0; i<word.length; i++) {
//   let idx = word[i].charCodeAt() - 97
//   if (arr[idx] === -1) {
//     arr[idx] = i
//   }
// }

// console.log(...arr)