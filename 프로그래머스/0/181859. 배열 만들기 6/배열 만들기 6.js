function solution(arr) {
    const stk = [];
    let i = 0;
    
    while (i < arr.length) {
        if (stk.length && stk.slice(-1)[0] === arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
        
        i++;
    }
    
    return stk.length ? stk : [-1];
}