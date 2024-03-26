function solution(num) {
    let cnt = 0;
    
    while (num !== 1) {
        if (num%2) {
            num *= 3;
            num ++;
        } else {
            num /= 2;
        }
        cnt ++;
        
        if ((cnt == 500)&&(num !== 1)) {
            return -1;
        }
    }
    return cnt;
}