function solution(brown, yellow) {   
    const area = brown + yellow;
    const nums = Array(area).fill().map((_, i) => (i+1)).filter(n => !(area % n));  // 약수
    
    for (let num of nums) {
        const [width, height] = [area/num, num];
        if (width < height) continue;
        
        if ((width + height) * 2 - 4 === brown) {
            return [width, height];
        }
    }
}