function solution(nums, dir) {
    if (dir === "left") {
        num = nums.shift();
        nums.push(num);
    } else {
        num = nums.pop();
        nums.unshift(num);
    }
    
    return nums;
    
    // const len = nums.length;
    // return dir === "left" ? [...nums.slice(1), nums[0]] : [nums[len-1], ...nums.slice(0, len-1)];
}