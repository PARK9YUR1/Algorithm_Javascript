function solution(numbers) {
    const nums = numbers.sort((a, b) => a - b);
    const len = numbers.length;
    
    return Math.max(nums[0]*nums[1], nums[len-2]*nums[len-1]);
}