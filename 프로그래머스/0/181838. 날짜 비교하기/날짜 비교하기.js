function solution(date1, date2) {
    const stringDate = (date) => {
        return date.map((dt, i) => {
            if (i) {  // month, day
                return dt.toString().padStart(2, "0");
            } else {  // year
                return dt.toString().padStart(5, "0");
            }
        }).join("");
    }
    
    date1 = stringDate(date1);
    date2 = stringDate(date2);
    
    return +(date1 < date2);
}