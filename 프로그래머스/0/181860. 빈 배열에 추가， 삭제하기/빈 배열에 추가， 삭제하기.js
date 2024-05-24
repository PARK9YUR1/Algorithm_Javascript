function solution(arr, flag) {
    let answer = [];
    
    flag.map((bool, i) => {
        let [t, f] = [arr[i]*2, arr[i]];
        
        if (bool) {
            while (t) {
                answer.push(arr[i]);
                t--;
            }
        } else {
            while (f) {
                answer.pop();
                f--;
            }
        }
    })
    
    return answer;
}