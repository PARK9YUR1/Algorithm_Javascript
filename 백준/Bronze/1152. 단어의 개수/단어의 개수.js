const words = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
if (words === '') {
    console.log(0)
} else {
    console.log(words.split(" ").length)
}