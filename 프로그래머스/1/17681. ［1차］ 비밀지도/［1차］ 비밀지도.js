function solution(n, arr1, arr2) {
    let arr = [];
    
    for (let i=0; i<n; i++) {
        const bin1 = arr1[i].toString(2).padStart(n, "0").split("");
        const bin2 = arr2[i].toString(2).padStart(n, "0").split("");
        
        let a = "";
        for (let j=0; j<n; j++) {
            if (+bin1[j] || +bin2[j]) {
                a += "#";
            } else {
                a += " ";
            }
        }
        
        arr.push(a);
    }
    
    return arr;
}