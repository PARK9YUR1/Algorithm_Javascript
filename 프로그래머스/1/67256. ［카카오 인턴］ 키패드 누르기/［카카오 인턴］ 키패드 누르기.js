function solution(numbers, hand) {
    hand = (hand==="left") ? "L" : "R";
    
    let answer = "";
    
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        0: [3, 1]
    };
    
    let cur = {
        "L": [3, 0], 
        "R": [3, 2]
    };
    
    function move([lx, ly], [rx, ry], [px, py]) {
        const l = Math.abs(lx-px) + Math.abs(ly-py);
        const r = Math.abs(rx-px) + Math.abs(ry-py);
        
        const h = (l===r) ? hand : (l<r) ? "L" : "R";
        
        cur[h] = keypad[num];
        answer += h;
    };
    
    for (num of numbers) {
        if (num%3 === 2 || !num) {  // 2 5 8 0
            move(cur["L"], cur["R"], keypad[num]);
        } else if (num%3 === 1) {   // 1 4 7
            cur["L"] = keypad[num];
            answer += "L";
        } else {                    // 3 6 9
            cur["R"] = keypad[num];
            answer += "R";
        }
    }
    
    return answer;
}