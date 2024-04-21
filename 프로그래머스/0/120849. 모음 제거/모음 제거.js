function solution(my_string) {
    return my_string.split('a').join('')
                    .split('e').join('')
                    .split('i').join('')
                    .split('o').join('')
                    .split('u').join('');
}