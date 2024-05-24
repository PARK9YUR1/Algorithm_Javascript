function solution(arr, flag) {
    let answer = [];
    
    flag.map((bool, i) => {
        if (bool) {
            // answer = [...answer, ...Array(arr[i]*2).fill(arr[i])];
            answer.push(...Array(arr[i]*2).fill(arr[i]));
        } else {
            answer = answer.slice(0, answer.length-arr[i]);
        }
    })
    
    return answer;
}