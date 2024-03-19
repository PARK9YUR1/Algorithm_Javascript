function solution(n) {
    const nums = n.toString().split("").reverse();
    nums.sort((a, b) => b-a);
    return Number(nums.join(''));
}