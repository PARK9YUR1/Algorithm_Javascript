function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    
    const sum1 = arr1.reduce((acc, cur) => (acc+cur));
    const sum2 = arr2.reduce((acc, cur) => (acc+cur));
    
    let answer = 0;
    if (len1 > len2) {
        answer = 1;
    } else if (len1 < len2) {
        answer = -1;
    } else {
        if (sum1 > sum2) {
            answer = 1;
        } else if (sum1 < sum2) {
            answer = -1;
        }
    }
    
    return answer;
}