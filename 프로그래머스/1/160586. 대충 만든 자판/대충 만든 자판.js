function solution(keymap, targets) {
    return targets.map(target => {
        let click = 0;
        for (t of target) {
            const idx = keymap.map(k => k.indexOf(t))
                              .filter(i => i !== -1);
            
            if (idx.length) {
                click += Math.min(...idx) + 1;
            } else {
                click = -1;
                break;
            }
        }
        return click;
    })
}