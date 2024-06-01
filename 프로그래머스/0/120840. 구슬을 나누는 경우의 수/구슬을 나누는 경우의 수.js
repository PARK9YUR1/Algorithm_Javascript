function solution(balls, share) {
    const f1 = (n) => {
        if (n === 1) {
            return 1;
        } else {
            return n * f1(n-1);
        }
    }
    
    const f2 = (n) => {
        if (n === share+1) {
            return share+1;
        } else {
            return n * f2(n-1);
        }
    }
    
    // balls개 중 share개 뽑기
    if (balls === share) {
        return 1;
    } else {
        return parseInt(f2(balls) / f1(balls-share));
    }
}