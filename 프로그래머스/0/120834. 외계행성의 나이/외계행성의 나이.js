function solution(age) {
    return age.toString().split("").map(a=> String.fromCharCode(+a+97)).join("");
}