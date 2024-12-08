function solution(numbers) {
    let answer = 0;
    let nums = numbers.split("").map(num => Number(num));
    
    function getNums(nums) {
        const arr = new Set();

        function permute(temp, remaining) {
            if (temp.length > 0) {
              arr.add(Number(temp.join("")));
            }

            if (remaining.length === 0) return;

            for (let i=0; i < remaining.length; i++) {
                if (i > 0 && remaining[i] === remaining[i - 1]) continue;

                permute(
                    [...temp, remaining[i]],
                    remaining.slice(0, i).concat(remaining.slice(i + 1))
                );
            }
        }

        permute([], nums.sort());
        return [...arr];
    }
    
    function isPrime(num) {
        if (num === 2) {
            return true;
        }
        if ((num <= 1) || (num % 2 === 0)) {
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
    
    
    nums = getNums(nums);
    for (let num of nums) {
        const result = isPrime(num);
        answer += Number(result);
    }
    
    return answer;
}