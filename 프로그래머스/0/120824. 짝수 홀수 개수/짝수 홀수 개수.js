function solution(num_list) {
    let odd = 0;
    for (num of num_list) {
        if (num%2) {
            odd++;
        }
    }
    
    return [num_list.length - odd, odd];
}