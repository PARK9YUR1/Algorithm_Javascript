function solution(s) {
    let tmp = 0;
    
    for (x of s) {
        if (isNaN(x)) {
            tmp++;
        }   
    }
    
    if ((s.length == 4 || s.length == 6) && tmp == 0) {
        return true;
    } else {
        return false;
    }
}