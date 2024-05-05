function solution(arr) {
    return arr.map(num => {
        if (num >= 50 && !(num % 2)) {
            return num / 2;
        } else if (num < 50 && num % 2) {
            return num * 2;
        } else {
            return num;
        }
    })
}