function solution(arr1, arr2) {
    let answer = 0;
    
    if(arr1.length !== arr2.length) {
        answer = arr1.length > arr2.length ? 1 : -1
    }
    
    if(arr1.length === arr2.length) {
        let arr1Sum = 0;
        let arr2Sum = 0;
        
        arr1.forEach(num => arr1Sum+=num);
        arr2.forEach(num => arr2Sum+=num);
        
        answer = arr1Sum > arr2Sum ? 1 : arr1Sum < arr2Sum ? -1 : 0
    }
    
    return answer;
}