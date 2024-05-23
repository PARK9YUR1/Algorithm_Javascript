function solution(my_string) {
    return my_string.split("")
                    .filter(s => +s || +s === 0)
                    .map(s => +s)
                    .sort((a, b) => a - b);
}