function solution(new_id) {
    // 1단계. 대문자 -> 소문자
    let id = new_id.toLowerCase();
    let len = id.length;
    
    // 2단계. 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 외 제거
    id = id.replaceAll(/[^a-z0-9\-\_\.\s]/gi, "");
    
    // 3단계. 연속된 마침표 -> 마침표 1개
    id = id.replace(/\.{2,}/g, '.');
    len = id.length;
    
    // 4단계. 처음과 끝의 마침표 제거
    function removeFirstDot() {
        if (id[0] === ".") {
            id = id.slice(1);
        }
    }
    
    function removeLastDot() {
        if (id[len-1] === ".") {
            id = id.slice(0, len-1);
        }
    }
    
    removeLastDot();
    removeFirstDot();
    
    len = id.length;
    
    // 5단계. 빈문자열이면 "a" 대입
    if (!len) {
        return "aaa";
    }
    
    // 6단계. 15자까지 자르기
    if (len >= 16) {
        id = id.slice(0, 15);
        len = 15;
        // 마지막이 마침표일때 제거
        removeLastDot();
    }
    
    // 7단계. 2자 이하면 마지막글자 반복 -> 3글자
    if (len <= 2) {
        while (len < 3) {
            id = id + id[len-1];
            len = id.length;
        }
    }
    
    return id;
}