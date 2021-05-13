// function의 원소들을 우너하는 변수 형태로 선언할수 있다.
// function의 return값도 선언이 가능하다.
function add(num1, num2) {
    // return할 result를 number로 선언
    var result;
    // 각각, num1, num2는 number이다.
    // 두 number의 합은 result의 결과이다.
    result = num1 + num2;
    // number인 result return
    return result;
}
// console.log의 출력은 두수의 합의 결과다.
// console.log(add(1,3));
// function을 undefined로 선언
function testVoid(num) {
    console.log("Test Void : ", num);
    // function이 return로 선언되면 return값이
    // 필요함
    return undefined;
}
testVoid(77);
