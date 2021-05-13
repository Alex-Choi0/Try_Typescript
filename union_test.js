// // 보통 하나의 속성을 정의하지만
// // union은 복스의 속성을 정의한다.
// input1의 변수 선언을 number|string대시
// veriAble로 대체한다.
function combine(input1, input2) {
    var result; // return할 변수 선언
    // input1이 number일 경우 if문 실행
    if (typeof input1 === 'number') {
        // input1,2는 둘다 number로 
        // +연산을 수행한다.
        result = input1 + input2;
        return result;
    }
    else {
        // input1은 string, input2는 number이다.
        // 따라서 input2는 문자로 변경
        result = input1 + String(input2);
        return result;
    }
}
var combineValue = combine("Hello", 7777);
console.log(combineValue);
