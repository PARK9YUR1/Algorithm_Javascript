function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    // t초 동안 붕대 감기 -> 초당 체력 x 회복
    // t초 연속 붕대 감기 성공 -> 체력 y 추가회복
    // 현재체력 <= 최대체력
    
    // 기술 도중 몬스터 공격 -> 기술 취소
    // 공격 당하는 순간 -> 체력 회복 불가!
    // 기술취소 or 기술종료 -> 붕대감기 다시! => 연속성공시간=0
    
    // 공격 -> 피해량만큼 현재체력 감소
    // 현재체력 <= 0   -->  캐릭터죽음, 더이상 체력회복불가!!
    
    // bandage: [시전 시간, 초당 회복량, 추가 회복량]
    // health: 최대 체력
    // attacks: [[공격 시간, 피해량], [공격 시간, 피해량], ...]

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
            // c = 37, h = 40, x = 4
            // c += h-c
            
            if (curHealth < health) {
                if (health - curHealth > x) {
                    curHealth += x;
                } else {
                    curHealth += (health - curHealth);
                }
            }
            
            // if (curHealth < health) {
            //     curHealth += x;
            // }
            success += 1;
            if (success == t) {
                
                if (curHealth < health) {
                    if (health - curHealth > y) {
                        curHealth += y;
                    } else {
                        curHealth += (health - curHealth);
                    }
                }
                
                // if (curHealth < health) {
                //     curHealth += y;
                // }
                success = 0;
            }
        }
        console.log(i, curHealth, success)
    }
    return curHealth;
}