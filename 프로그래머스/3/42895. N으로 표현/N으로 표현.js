function solution(N, number) {
    if (N === number) {
        return 1;
    }

    const checked = [N];  // 앞에서 나왔는지 체크
    const useN = Array(9).fill().map(() => new Set());  // useN[i] : N을 i번 사용해 만들 수 있는 숫자들
    useN[1].add(N);

    for (let i=2; i<9; i++) {
        const n = parseInt(N.toString().repeat(i));  // 55, 555, 5555, ...
        if (n === number) {
            return i;
        }

        if (!checked.includes(n)) {
            useN[i].add(n);
            checked.push(n);
        }

        for (let j=Math.ceil(i/2); j<i; j++) {
            const k = i - j;

            for (let x of useN[j]) {
                for (let y of useN[k]) {
                    const [mx, mn] = [x, y].sort((a, b) => (b - a));
                    const calcNums = [mx+mn, mx*mn, mx-mn, ~~(mx/mn)];
        
                    for (let num of calcNums) {
                        if (num === number) {
                            return i;
                        }
        
                        if (num > 0 && !checked.includes(num)) {
                            useN[i].add(num);
                            checked.push(num);
                        }
                    }
                }
            }
        }
    }
    
    return -1;
}