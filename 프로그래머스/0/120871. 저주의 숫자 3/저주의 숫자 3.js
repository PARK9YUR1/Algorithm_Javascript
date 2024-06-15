function solution(n) {
    const nums =  Array(185).fill()
                            .map((_, i) => i+1)
                            .filter(num => num%3)
                            .filter(num => !num.toString().includes("3"));

    return nums[n-1];
}