function solution(arr1, arr2) {
    const [I, J] = [arr1.length, arr1[0].length];
    let answer = [];
    
    for (let i=0; i<I; i++) {
        let arr = [];
        for (let j=0; j<J; j++) {
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr);
    }
    return answer;
}