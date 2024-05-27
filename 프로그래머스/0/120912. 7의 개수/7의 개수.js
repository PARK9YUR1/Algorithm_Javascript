function solution(array) {
    return array.map(num => num.toString().split("").filter(n => n === "7").length)
                .reduce((acc, cur) => acc + cur, 0);
}