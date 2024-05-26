function solution(myStr) {
    const str = myStr.replaceAll("a",".").replaceAll("b",".").replaceAll("c",".").split(".").filter(str => str);
    return str.length ? str : ["EMPTY"];
}