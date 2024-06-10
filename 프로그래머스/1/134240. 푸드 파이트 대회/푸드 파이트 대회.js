function solution(food) {
    let foods = ["0".repeat(food[0])];
    
    food.slice(1).reverse().map((cnt, i) => {
        const fd = food.length - 1 - i;
        if (cnt > 1) {
            foods.push(fd.toString().repeat(parseInt(cnt/2)));
            foods.unshift(fd.toString().repeat(parseInt(cnt/2)));
        }
    })
    
    return foods.join("");
}