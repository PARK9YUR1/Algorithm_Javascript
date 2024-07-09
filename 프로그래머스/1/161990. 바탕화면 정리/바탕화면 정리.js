function solution(wallpaper) {
    const [N, M] = [wallpaper.length, wallpaper[0].length];
    let [mnx, mny, mxx, mxy] = [N, M, 0, 0];
    
    for (let i=0; i<N; i++) {
        const idx = wallpaper[i].indexOf("#");
        const lastIdx = wallpaper[i].lastIndexOf("#");
        
        if (idx !== -1) {
            mnx = Math.min(mnx, i);
            mxx = Math.max(mxx, i);
            mny = Math.min(mny, idx);
            mxy = Math.max(mxy, (idx === lastIdx) ? idx : lastIdx);
        }
    }
    
    return [mnx, mny, ++mxx, ++mxy];
}