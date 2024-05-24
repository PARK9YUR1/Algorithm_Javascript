function solution(array, n) {
    array.sort((a, b) => a - b);
    const len = array.length;
    
    if (len === 1) {
        return array[0];
    }
    
    let i = 0;
    while (true) {
        if (i === len) {
            return array[i-1];
        }
        if (array[i] == n) {
            return array[i];
        } else if (array[i] > n) {
            if (i) {
                if (n-array[i-1] > array[i]-n) {
                    return array[i];
                } else {
                    return array[i-1];
                }
            } else {
                return array[i];
            }
        }
        i++;
    }
}