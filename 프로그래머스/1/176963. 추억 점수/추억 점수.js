function solution(name, yearning, photo) {
    return photo.map(pt => 
        pt.map(p => {
            const i = name.indexOf(p);
            return yearning[i] || 0;
        }).reduce((acc, cur) => acc+cur, 0)
    );
}