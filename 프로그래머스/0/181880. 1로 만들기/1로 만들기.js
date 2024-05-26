function solution(num_list) {
    let cnt = 0;
    for (num of num_list) {
        while (true) {
            if (num === 1) {
                break;
            }
            
            if (num%2) {
                num = (num-1) / 2;
            } else {
                num /= 2;
            }
            
            cnt++;
        }
    }
    
    return cnt;
}