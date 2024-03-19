function solution(n) {
    const nums = n.toString().split("");
    nums.sort((a, b) => b-a);
    const answer = Number(nums.join(''));

    return answer;
}