function solution(myString) {
    return myString.split("").map(str => str.charCodeAt(0)<108 ? "l" : str).join("");
}