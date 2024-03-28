const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    const score = {
        'A+':4.5, 'A0':4.0, 'B+':3.5, 'B0':3.0,
        'C+':2.5, 'C0':2.0, 'D+':1.5, 'D0':1.0, 'F':0
    }
    const arr = input;
    let totalGrade = 0, totalCredit = 0;
    for (a of arr) {
        const res = a.split(" ");
        const [subject, credit, grade] = [res[0], Number(res[1]), res[2]];  // 과목명, 학점, 등급
        if (grade !== 'P') {
            totalGrade += credit * score[grade];
            totalCredit += credit;
        }
    }
    console.log((totalGrade/totalCredit).toFixed(6));

    process.exit();
})