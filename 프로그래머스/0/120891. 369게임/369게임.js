function solution(order) {
    order = order.toString();
    return Array.from(order).filter(num => ["3", "6", "9"].includes(num)).length;
}