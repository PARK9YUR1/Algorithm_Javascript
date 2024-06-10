function solution(array) {
    const nums = [...new Set(array)];
    let [v, count] = [[], 0];  // 최빈값:v, 횟수:count
    
    for (num of nums) {
        const len = array.filter(a => a === num).length;
        if (count < len) {
            count = len;
            v = [num];   
        } else if (count === len) {
            count = len;
            v.push(num);
        }
    }
    
    return (v.length > 1) ? -1 : v[0];
}