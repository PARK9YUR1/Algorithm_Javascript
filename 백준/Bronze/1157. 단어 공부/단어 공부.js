function solution(input) {
  const alpha = {};
  const word = input.toLowerCase().split("");
  let mx = 1;
  word.forEach(w => {
    if (alpha[w]) {
      alpha[w]++;
      alpha[w] > mx ? mx = alpha[w] : mx = mx;
    } else {
      alpha[w] = 1;
    }
  })

  let ans = '';
  for (key in alpha) {
    if (alpha[key] == mx) {
      if (ans) {
        return '?';
      } else {
        ans = key;
      }
    }
  }
  return ans.toUpperCase();
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line)
}).on("close", function () {
  const word = input[0];
  const result = solution(word);
  console.log(result);
  process.exit();
})