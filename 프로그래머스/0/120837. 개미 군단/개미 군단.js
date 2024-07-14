function solution(hp) {
    let answer = 0;
    
    let general = 0;
    let soldier = 0;
    let normal = 0;
    
    general = Math.floor(hp/5);
    soldier = Math.floor((hp - (general*5))/3);
    normal = (hp-(general*5+soldier*3))%3
    
    answer = general+soldier+normal
    
    return answer;
}