function solution(n, control) {
    const ctrl = {
        "w": 1,
        "s": -1,
        "d": 10, 
        "a": -10
    }
    
    return control.split("")
                  .map(c => ctrl[c])
                  .reduce((acc, cur) => acc + cur, n);
}