function solution(a, b, c, d) {
    const nums = [a, b, c, d].sort((a, b) => a - b);
    const len = [...new Set(nums)].length;
    
    switch (len) {
        case 1 :
            // [1, 1, 1, 1]
            return 1111 * nums[0];
        case 2 : 
            // [1, 1, 2, 2] : i=2
            // [1, 1, 1, 2] : i=3
            // [1, 2, 2, 2] : i=1
            const i = nums.indexOf(nums[3]);
            const [x, y] = [nums[0], nums[3]];
            if (i%2) {
                if (i === 1) {
                    return (10 * y + x) ** 2;
                } else {
                    return (10 * x + y) ** 2;
                }
            } else {
                return (x + y) * Math.abs(x - y);
            }
        case 3 : 
            // [1, 1, 2, 3]
            let answer = 1;
            const arr = [...new Set(nums)];
            arr.forEach((num) => {
                if (nums.filter(n => n === num).length < 2) {
                    answer *= num;
                }
            })
            return answer;
        case 4 : 
            // [1, 2, 3, 4]
            return nums[0];
    }
}