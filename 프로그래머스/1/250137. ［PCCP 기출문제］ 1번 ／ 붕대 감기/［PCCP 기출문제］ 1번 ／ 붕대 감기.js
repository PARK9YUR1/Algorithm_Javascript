function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;

    let curHealth = health;
    const lastAttack = attacks[attacks.length - 1][0];  // 마지막 공격 시간
    let pastAttack = 0;
    let success = 0;  // 연속성공
    
    const isAttack = Array(lastAttack+1).fill(0);
    const demage = {};
    for (attack of attacks) {
        isAttack[attack[0]] = 1;
        demage[attack[0]] = attack[1];
    }
    
    for (let i=1; i<=lastAttack; i++) {
        if (isAttack[i]) {
            curHealth -= demage[i];
            success = 0;
            if (curHealth <= 0) {
                curHealth = -1;
                break;
            }
        } else {
            if (curHealth < health) {
                curHealth += Math.min(x, health-curHealth);
            }
            success += 1;
            if (success == t) {
                if (curHealth < health) {
                    curHealth += Math.min(y, health-curHealth);
                }
                success = 0;
            }
        }
        console.log(i, curHealth, success)
    }
    return curHealth;
}