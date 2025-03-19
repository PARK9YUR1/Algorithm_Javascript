const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let str of input) {
    if (str === "0") break;
    
    if (str === str.split("").reverse().join("")) {
        console.log("yes");
    } else {
        console.log("no");
    }
}