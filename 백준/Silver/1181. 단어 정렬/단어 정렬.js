const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = [...new Set(input)].filter(word => /^[a-z]+$/.test(word));
input.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    return a > b ? 1 : -1;
});

for (let str of input) {
    console.log(str);
}