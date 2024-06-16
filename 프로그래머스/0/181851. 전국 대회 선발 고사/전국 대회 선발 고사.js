function solution(rank, attendance) {
    return rank.map((rk, n) => [rk, n])  // [순위, 번호]
               .sort((a, b) => a[0] - b[0])
               .filter(r => attendance[r[1]])
               .slice(0, 3).reverse()
               .reduce((acc, cur, i) => {
                   return acc + (cur[1] * (100**i))
               }, 0);
}