function solution(num_list) {
    const [x, y] = num_list.slice(num_list.length - 2);
    return [...num_list, x<y ? (y-x) : y*2];
}