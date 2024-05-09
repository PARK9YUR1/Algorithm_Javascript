function solution(num_list) {
    const idx = num_list.filter(num => num < 0)[0];
    return idx ? num_list.indexOf(idx) : -1;
}