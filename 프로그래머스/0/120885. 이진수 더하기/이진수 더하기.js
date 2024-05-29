function solution(bin1, bin2) {
    const binToDec = (bin) => {
        return parseInt(bin, 2);
    }
    
    const decToBin = (dec) => {
        return dec.toString(2);
    }
    
    return decToBin(binToDec(bin1) + binToDec(bin2));
}