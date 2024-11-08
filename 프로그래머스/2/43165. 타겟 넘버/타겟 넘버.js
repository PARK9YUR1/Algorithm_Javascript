function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;

    function dfs(i, sum) {
      if (i === length) {
        if (sum === target) {
          answer++;
        }
        return;
      }

      dfs(i+1, sum-numbers[i]);
      dfs(i+1, sum+numbers[i]);
    }

    dfs(0, 0);
    
    return answer;
}