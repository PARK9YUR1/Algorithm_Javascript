function solution(num_list) {
    let mul = 1;
    let add = 0;
    
    for (num of num_list) {
        mul *= num;
        add += num;
    }
    
    const answer = (mul<add**2)?1:0;
    
    return answer;
}