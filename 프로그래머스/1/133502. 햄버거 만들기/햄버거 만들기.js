function solution(ingredient) {
    /*
      - (1)빵 (2)야채 (3)고기
      - 햄버거 만드는 순서 : 1-2-3-1
    */
    
    ingredient = ingredient.map(i => i.toString());
    
    let cook = [];      // 요리 중인 햄버거
    let hamburger = 0;  // 완성된 햄버거 수
    
    for (let i=0; i<ingredient.length; i++) {
        const N = cook.length;
        const last = cook[N-1];  // 가장 최근에 만들던 햄버거
        const cur = ingredient[i];  // 현재 재료
        
        if (N) {
            if ((last === "1" && cur === "2") || (last === "12" && cur === "3")) {
                cook[N-1] += cur;
            } else if (last === "123" && cur === "1") {
                cook.pop();
                hamburger++;
            } else {
                if (cur === "1") {
                    cook.push(cur);
                } else {
                    cook = [];
                }
            }
        } else {
            if (cur === "1") {
                cook.push(cur);
            }
        }
        
    }
    
    return hamburger;
}