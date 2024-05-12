function solution(my_strings, parts) {
    return parts.map((part, i) => my_strings[i].slice(part[0], part[1]+1)).join("");
}