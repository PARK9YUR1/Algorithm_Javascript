function solution(num_list) {
    let cnt = 0;
    
    num_list.map(num => {
        while (num !== 1) {
            num = (num%2 ? num-1 : num) / 2;
            cnt++;
        }  
    })
    
    return cnt;
}