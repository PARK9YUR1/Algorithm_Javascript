function solution(n) {
    return (n%7)? ~~(n/7)+1 : (n/7);
}