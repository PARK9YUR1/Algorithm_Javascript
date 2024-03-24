function solution(s) {
    const num = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    }
    
    let answer = '', word = '', i = 0;
    
    while (i<s.length) {
        if (isNaN(s[i])) {
            word += s[i];
        } else {
            answer += s[i];
        }
        
        if (!isNaN(num[word])) {
            answer += num[word];
            word = '';
        }
        
        i ++;
    }
    
    return Number(answer);
}