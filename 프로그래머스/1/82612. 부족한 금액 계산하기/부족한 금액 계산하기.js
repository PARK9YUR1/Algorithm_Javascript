function solution(price, money, count) {
    var answer = money;
    while (count > 0) {
        answer -= price * count;
        count --;
    }
    
    if (answer >= 0) {
        return 0;
    } else {
        return answer*(-1);        
    }
}