function solution(spell, dic) {
    // return dic.filter(d => {
    //     let cnt = 0;
    //     spell.map(s => {
    //         if (d.includes(s)) cnt++;
    //     })
    //     return cnt === spell.length;
    // }).length ? 1 : 2;
    
    return dic.some(d => spell.every(s => d.includes(s))) ? 1: 2;
}