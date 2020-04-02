function solution(numbers) {
    const result = numbers.sort((a, b) => (b.toString() + a.toString()) - (a.toString() + b.toString()));
    return result[0] === 0 ? "0" : result.join('');
}

/**
 * [3, 30, 34, 5, 9] 에서 정렬할때 330, 303을 비교하기 위해 (b+a) - (a+b)로 정렬
 * 정렬 후 [0,0,0,0]을 방지하기 위해 첫번째가 0이면 0출력
 * join 함수는 문자열로 변경해주는 함수
 **/  