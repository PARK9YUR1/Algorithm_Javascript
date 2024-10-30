function solution(sizes) {
    // w > h 가 되도록 각 size 정렬
    sizes = sizes.map(size => size.sort((w, h) => (h - w)));
    
    function createSizeArray(i) {
        return sizes.map(size => size[i]);
    }
        
    function getMaxSize(array) {
        return Math.max(...array);
    }
    
    let widths = createSizeArray(0);
    let heights = createSizeArray(1);
    
    const mxW = getMaxSize(widths);
    const mxH = getMaxSize(heights);
    
    return mxW * mxH;
}