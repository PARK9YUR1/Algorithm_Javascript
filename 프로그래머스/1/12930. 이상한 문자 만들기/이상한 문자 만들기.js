function solution(s) {
    let words = s.split(" ");
    let answer = [];
    words.forEach(word => {
        let newWord = '';
        for (let i=0; i<word.length; i++) {
            (i%2)?(newWord += word[i].toLowerCase()):(newWord += word[i].toUpperCase());
        }
        answer.push(newWord);
    })
    return answer.join(" ");
}