function solution(routes) {
    let cnt = 0;
    let location = -30001;  // 마지막 카메라 위치 (초기값: -30001)
    
    routes.sort((a, b) => a[1] - b[1]);
    
    for (let [start, end] of routes) {
        // 진입지점이 카메라 위치보다 뒤에 있는 경우 -> 카메라 설치
        if (start > location) {
            location = end;
            cnt++;
        }
    }
    
    return cnt;
}