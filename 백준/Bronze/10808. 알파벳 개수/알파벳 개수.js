const arr = Array(26).fill(0);

const word = [...require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim()];
word.forEach(w=>{
    const i = w.charCodeAt() - 97;
    arr[i] += 1;    
})

console.log(arr.join(" "))