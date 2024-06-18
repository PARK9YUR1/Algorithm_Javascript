function solution(arr) {
    return arr.reduce((nums, num) => [...nums, ...Array(num).fill(num)], [])
}