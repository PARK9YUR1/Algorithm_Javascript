function solution(my_string) {
    const nums = my_string.replace(/[^0-9]/g, '').split('');
    return nums.reduce((acc, cur) => acc + ~~(cur), 0);
}