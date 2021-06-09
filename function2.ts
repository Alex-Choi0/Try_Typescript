
// 2개의 수를 받아서 합친 값을 return 한다.
function addTwoNumber(num1 : number, num2 : number) : number{

    let result : number;
    result = num1 + num2;

    return result;

}




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

