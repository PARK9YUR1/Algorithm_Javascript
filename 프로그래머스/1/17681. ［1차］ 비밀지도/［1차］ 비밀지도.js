function solution(n, arr1, arr2) {
    let arr = Array(n).fill().map(() => Array(n).fill(" "))
    let [map1, map2] = [[], []];
    
    for (let i=0; i<n; i++) {
        const bin1 = arr1[i].toString(2).padStart(n, "0");
        map1.push(bin1.split("").map(b => +b));
        
        const bin2 = arr2[i].toString(2).padStart(n, "0");
        map2.push(bin2.split("").map(b => +b));
    }
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (map1[i][j] || map2[i][j]) {
                arr[i][j] = "#";
            }
        }
    }
    
    return arr.map(a => a.join(""));
}