// input에 무엇이 들어올지 알수 없는 경우
let input : unknown;
let str : string = "hello";

input = 9; // input에 Number가 들어감
input = {object : "hello"} // input에 Object가 들어감
input= str; // str변수의 문자열을 input에 입력

console.log(input); // 가장 마지막에 들어간 변수 출력