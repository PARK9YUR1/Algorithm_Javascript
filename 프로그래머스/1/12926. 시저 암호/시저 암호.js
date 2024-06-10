function solution(s, n) {
    const atoi = (a) => {return a.charCodeAt(0)};
    const itoa = (i) => {return String.fromCharCode(i)};
    
    return s.split("")
            .map(str => {
                if (str === " ") {
                    return str;
                }

                const i = atoi(str);
                const num = i >= 97 ? 97 : 65;

                return itoa(num + ((i+n)%num)%26)
            })
            .join("");
}