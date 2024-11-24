function solution(numbers) {
    numbers = numbers.map(String);
    numbers.sort((x, y) => {
        if ((x+y) > (y+x)) {
            return -1;
        } else if ((x+y) < (y+x)) {
            return 1;
        } else {
            return 0;
        }
    })
    
    if (numbers[0] === "0") return "0";
    return numbers.join("");
}