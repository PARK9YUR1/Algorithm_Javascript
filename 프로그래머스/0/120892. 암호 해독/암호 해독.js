function solution(cipher, code) {
    return cipher.split("").filter((v, i) => !((i+1) % code)).join("");
}