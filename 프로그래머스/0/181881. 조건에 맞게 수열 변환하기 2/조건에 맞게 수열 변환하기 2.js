function solution(arr) {
    let cnt = 0;
    
    const check1 = (num) => {
        return (num >= 50) && !(num % 2);
    }
    const check2 = (num) => {
        return (num < 50) && (num % 2);
    }
    
    while (arr.some(num => check1(num) || check2(num))) {
        for (let i=0; i<arr.length; i++) {
            if (check1(arr[i])) {
                arr[i] /= 2;
            } else if (check2(arr[i])) {
                arr[i] = arr[i]*2 + 1;
            }
        }
        cnt++;
    }
    
    return cnt;
}