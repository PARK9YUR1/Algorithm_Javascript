function solution(array, n) {
    const newArr = array.filter(x => x === n);
    return newArr.length;
}