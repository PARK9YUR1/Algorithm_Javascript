function solution(name) {
    if (name.split("").every(alpha => alpha === "A")) return 0;
    
    const len = name.length;
    let totalChangeCount = 0;
    let minMove = len - 1;
    
    // A가 아닌 문자들의 인덱스 배열
    const indexArray = name.split("").map((v, i) => v !== "A" ? i : -1).filter(v => v > -1);
    
    // 알파벳 변경 횟수 더하기
    name.split("").forEach((alpha, curIndex) => {
        const ord = alpha.charCodeAt(0);
        if (alpha !== "A") {
            totalChangeCount += (ord >= 79) ? 91 - ord : ord - 65;
        }
    })
    
    // 최소 커서 이동횟수 구하기
    indexArray.forEach((curIndex, i) => {
        const nextIndex = indexArray[i+1] || len;
        minMove = Math.min(
            minMove,                            // 현재 최소이동 값
            curIndex * 2 + len - nextIndex,     // 현재 위치까지 정방향으로 가다가 역방향으로 가는 경우
            (len - nextIndex) * 2 + curIndex    // 현재 위치까지 역방향으로 가다가 정방향으로 가는 경우
        );
    })
    
    return totalChangeCount + minMove;
}