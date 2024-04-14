function solution(price) {
    let sale = 1;
    
    if (price >= 500000) {
        sale = 0.8;
    } else if (price >= 300000) {
        sale = 0.9;
    } else if (price >= 100000) {
        sale = 0.95;
    }
    
    return ~~(price*sale);
}