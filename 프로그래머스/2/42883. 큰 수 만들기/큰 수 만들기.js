function solution(number, k) {
    let answer = "";
    const nums = number.split("").map(num => Number(num));
    
    let startIndex = 0;
    let endIndex = k;
    
    while (endIndex < nums.length) {
        let mx = -1;
        let mxIndex = 0;
        for (let i=startIndex; i<=endIndex; i++) {
            if (nums[i] > mx) {
                mx = nums[i];
                mxIndex = i;
            }
        }
        
        answer += mx.toString();
        
        startIndex = mxIndex + 1;
        endIndex++;
    }
    
    return answer;
}