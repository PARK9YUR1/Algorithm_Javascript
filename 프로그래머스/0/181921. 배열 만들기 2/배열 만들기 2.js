function solution(l, r) {
    const nums = Array(r-l+1).fill()
                             .map((_, i) => i+l)
                             .filter(num => {
                                 return num.toString()
                                           .split("")
                                           .every(n => n === "0" || n === "5")
                             });
    
    return nums.length ? nums : [-1];
}