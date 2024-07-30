function solution(nums) {
    const N = nums.length / 2;
    const len = [...new Set(nums)].length;
    
    return Math.min(len, N);
}