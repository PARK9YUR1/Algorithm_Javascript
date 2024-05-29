function solution(s) {
    let answer = 0;
    const arr = s.split(" ");
    
    let i = arr.length - 1;
    while (i >= 0) {
        if (arr[i] === "Z") {
            i -= 2;
        } else {
            answer += parseInt(arr[i]);
            i--;
        }
    }
    
    return answer;
}