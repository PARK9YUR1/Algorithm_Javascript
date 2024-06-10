function solution(n, arr1, arr2) {
    let arr = [];
    
    const binArr = (num) => {
        return num.toString(2)
                  .padStart(n, "0")
                  .split("")
                  .map(b => +b);
    }
    
    for (let i=0; i<n; i++) {
        const b1 = binArr(arr1[i]);
        const b2 = binArr(arr2[i]);
        
        const b = b1.map((v, i) => (v || b2[i]) ? "#" : " ").join("");
        
        arr.push(b);
    }
    
    return arr;
}