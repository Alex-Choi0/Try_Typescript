// 2개의 수를 받아서 합친 값을 return 한다.
function addTwoNumber(num1, num2) {
    var result;
    result = num1 + num2;
    return result;
}
function printString(num) {
    console.log('Result : ' + num);
}
// printString(addTwoNumber(5,2));
// let combineValue : (num1 : number, num2 : number) => number;
// combineValue = addTwoNumber;
// console.log(combineValue(7,7));
var app = function (num1) {
    var result = num1 * num1;
    console.log("num1의 제곱근 : ", result);
};
// call back함수를 사용하는 함수
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result); // call back함수 사용
}
console.log("addAndHandle Function 사용 : addAndHandle(5,2,app)");
addAndHandle(5, 2, app);

// Arrow Function을 콜백으로 사용해도 동일한 결과가 나옴
addAndHandle(5, 2, function (result) {
    result *= result;
    console.log("num1의 제곱근 : ", result);
});

// // 한개의 숫자를 받아서 "Result : [num]"으로 출력
// function printString(num : number) : string{
//     console.log("Result : ", num);
//     return ("Result : " + String(num));
// }
// // addFunction을 선언한다.
// // Function의 인자와 return값 지정함
// let addFunction : (n1 : number, n2 : number) => number; 
// // addFunction에 addTwoNumber를 지정한다.
// addFunction = addTwoNumber;
// // addFunction = printString; // 에러발생 : 인자갯수가 다른 printString지정
// console.log(addFunction(3,4)); // 에러 발생
