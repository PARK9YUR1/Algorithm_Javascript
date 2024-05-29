function solution(arr) {
    let cnt = 0;
    
    while (true) {
        if (arr.filter(num => (num>=50 && !(num%2)) || (num<50 && num%2)).length) {
            for (let i=0; i<arr.length; i++) {
                if (arr[i] >= 50 && !(arr[i]%2)) {
                    arr[i] /= 2;
                } else if (arr[i] < 50 && arr[i]%2) {
                    arr[i] = arr[i]*2 + 1;
                }
            }
            cnt++;
        } else {
            break;
        }
    }
    
    return cnt;
}