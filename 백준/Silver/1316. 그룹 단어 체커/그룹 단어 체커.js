function checkGroupWord(word) {
  let past = '';
  let check = {}
  for (w of word) {
    if (check[w]) {
      if (past === w) {
        check[w]++;
      } else {
        return 0;
      }
    } else {
      check[w] = 1;
    }
    past = w;
  }
  return 1;
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
  const N = parseInt(input[0]);
  const words = input.slice(1);
  let answer = 0;
  for (word of words) {
    answer += checkGroupWord(word);
  }
  console.log(answer);
  process.exit();
})