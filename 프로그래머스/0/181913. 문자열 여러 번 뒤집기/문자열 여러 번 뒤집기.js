function solution(my_string, queries) {
    my_string = my_string.split("");
    
    for (query of queries) {
        const [s, e] = query;
        my_string = [...my_string.slice(0, s), 
                     ...my_string.slice(s, e+1).reverse(), 
                     ...my_string.slice(e+1)];
    }
    
    return my_string.join("");
}