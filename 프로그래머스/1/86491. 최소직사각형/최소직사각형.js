function solution(sizes) {
    let [mxW, mxH] = [0, 0];
    
    function getMaxSize(mx, v) {
        return Math.max(mx, v);
    }
    
    sizes.forEach(size => {
        const [w, h] = size.sort((w, h) => (h - w));
        
        mxW = getMaxSize(mxW, w);
        mxH = getMaxSize(mxH, h);
    });
    
    return mxW * mxH;
}