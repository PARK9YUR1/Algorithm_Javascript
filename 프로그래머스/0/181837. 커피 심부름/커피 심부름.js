function solution(order) {
    const cafelatte = order.filter(ord => ord.includes("cafelatte")).length;
    const americano = order.length - cafelatte;
    
    return americano*4500 + cafelatte*5000;
}