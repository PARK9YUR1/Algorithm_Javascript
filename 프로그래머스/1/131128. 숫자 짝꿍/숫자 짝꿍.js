function solution(X, Y) {
    let nums = {
        0: [0, 0],
        1: [0, 0], 2: [0, 0], 3:[0, 0],
        4: [0, 0], 5: [0, 0], 6:[0, 0],
        7: [0, 0], 8: [0, 0], 9:[0, 0]
    }
    
    X.split("").map(x => {
        x = Number(x);
        nums[x][0]++;
    })
    
    Y.split("").map(y => {
        y = Number(y);
        nums[y][1]++;
    })
    
    let num = "";
    
    Object.entries(nums).map(([k, v]) => {
        let n = Math.min(...v);
        num += k.toString().repeat(n);
    });
    
    if (!num) {
        return "-1";
    }
    
    if (num.split("").every(n => n === "0")) {
        return "0";
    }
    
    return num.split("").sort((a, b) => b - a).join("");
}