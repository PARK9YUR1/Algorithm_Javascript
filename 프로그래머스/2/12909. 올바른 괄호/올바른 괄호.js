function solution(s){
    const stack = [];
    
    for (let str of s) {
        if (str === "(") {
            stack.push(str);
        } else {
            if (stack.slice(-1)[0] !== "(") {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    if (stack.length) {
        return false;
    }

    return true;
}