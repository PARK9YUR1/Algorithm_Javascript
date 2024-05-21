function solution(nums, dir) {
    const len = nums.length;
    return dir === "left" ? [...nums.slice(1), nums[0]] : [nums[len-1], ...nums.slice(0, len-1)];
}