function solution(a, b) {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const zeroFill = (num) => {
        return num.toString().padStart(2, "0");
    }
    
    return days[new Date(`2016-${zeroFill(a)}-${zeroFill(b)}`).getDay()];
}