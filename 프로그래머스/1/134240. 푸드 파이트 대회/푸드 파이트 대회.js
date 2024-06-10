function solution(food) {
    let foods = ["0".repeat(food[0])];
    
    food.slice(1).reverse().map((v, i) => {
        const [cnt, f] = [parseInt(v/2), food.length - 1 - i];
        if (v > 1) {
            const fd = f.toString().repeat(cnt);
            foods.push(fd);
            foods.unshift(fd);
        }
    })
    
    return foods.join("");
}