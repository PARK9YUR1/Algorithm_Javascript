function solution(box, n) {
    const [w, h, l] = box;
    return ~~(w/n) * ~~(h/n) * ~~(l/n);
}