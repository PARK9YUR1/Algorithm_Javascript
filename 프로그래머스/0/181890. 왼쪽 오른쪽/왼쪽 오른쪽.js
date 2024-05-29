function solution(str_list) {
    let [l, r] = [str_list.indexOf("l"), str_list.indexOf("r")];
    l = (l === -1) ? str_list.length : l;
    r = (r === -1) ? str_list.length : r;
    
    if (l < r) {
        return str_list.slice(0, l);
    } else if (l > r) {
        return str_list.slice(r+1);
    } else {
        return [];
    }
}