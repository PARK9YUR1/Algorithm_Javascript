function solution(sizes) {
    let [x, y] = [0, 0];
    sizes.map(size => size.sort((a, b) => b - a)).forEach(size => {
        x = Math.max(x, size[0]);
        y = Math.max(y, size[1]);
    })
    return x * y;
}