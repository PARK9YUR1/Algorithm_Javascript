function solution(spell, dic) {
    return dic.filter(d => {
        let cnt = 0;
        spell.map(s => {
            if (d.includes(s)) cnt++;
        })
        return cnt === spell.length;
    }).length ? 1 : 2;
}