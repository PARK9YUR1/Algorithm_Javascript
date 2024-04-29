function solution(myString) {
    return myString
            .split("")
            .map(str => 
                 str.toUpperCase()==="A" ? 
                    "A" : str.toLowerCase())
            .join("");
}