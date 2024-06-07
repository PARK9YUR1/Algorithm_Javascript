function solution(sizes) {
    let [x, y] = [0, 0];
    sizes.forEach(size => {
        const [w, h] = (size[0] > size[1]) ? size : size.reverse();
        
        x = Math.max(x, w);
        y = Math.max(y, h);
    })
    return x * y;
}