function solution(strArr) {
    return strArr.map((str, idx) => {
        if (idx % 2) {
            return str.toUpperCase();  // return 써주기!
        } else {
            return str.toLowerCase();  // return 써주기!
        }
    })
}