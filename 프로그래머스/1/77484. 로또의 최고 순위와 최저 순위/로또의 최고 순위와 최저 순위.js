function solution(lottos, win_nums) {
    const rank = (c) => {
        return 6 - (c ? c : 1) + 1;
    };
    
    const num = lottos.filter(l => !l).length;
    const correct = lottos.filter(l => win_nums.includes(l)).length;
    const incorrect = 6 - correct;
    
    return [rank(correct+num), rank(correct)];
}