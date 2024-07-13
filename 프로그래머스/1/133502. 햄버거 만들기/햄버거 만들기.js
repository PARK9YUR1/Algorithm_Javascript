function solution(ingredient) {
    /*
      - (1)빵 (2)야채 (3)고기
      - 햄버거 만드는 순서 : 1-2-3-1
    */
    
    ingredient = ingredient.map(i => i.toString());
    
    let cook = [];      // 요리 중인 햄버거
    let hamburger = 0;  // 완성된 햄버거 수
    
    for (let i=0; i<ingredient.length; i++) {
        const cur = ingredient[i];  // 현재 재료
        
        // A. 요리 중인 햄버거가 없을 때
        if (!cook.length) {
            // 현재 재료가 빵(1)일 때 요리 시작!
            if (cur === "1") {
                cook.push(cur);
            }
        }
        // B. 요리 중인 햄버거가 있을 때
        else {
            const N = cook.length;
            const last = cook[N-1];  // 가장 최근에 만들던 햄버거
            
            // a. 햄버거를 만들 수 있는 경우 - 요리 or 포장
            if ((last === "1" && cur === "2") || (last === "12" && cur === "3")) {
                cook[N-1] += cur;
            } else if (last === "123" && cur === "1") {
                cook.pop();
                hamburger++;
            }
            // b. 햄버거를 만들 수 없는 경우
            else {
                // 빵으로 새 햄버거 만들기 시작!
                if (cur === "1") {
                    cook.push(cur);
                }
                // 빵이 아닌 재료로는 새 햄버거를 만들 수 없음
                // 만들어둔 햄버거들은 필요 없어졌으니 버림!
                else {
                    cook = [];
                }
            }
        }
    }
    
    return hamburger;
}