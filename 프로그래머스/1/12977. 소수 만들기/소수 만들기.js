function solution(nums) {
    let answer = 0;
    
    const isPrime = (num) => {
        if (num%2 === 0) {
            return false;
        }
        
        const N = Math.sqrt(num);
        for (let i = 3; i <= N; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                const n = nums[i] + nums[j] + nums[k];
                if (isPrime(n)) answer++;
            }
        }
    }
    
    return answer;
}