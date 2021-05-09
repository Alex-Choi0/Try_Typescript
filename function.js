function getSum(num1, num2) {
    return num1 + num2;
    // return "Hello"; // return 타입이 number인데 문자열 Hello로 리턴해서 에러 발생
}
var mySum = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 + num2;
};
// console.log(mySum('5',2));
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName("John"));
function myVoid() {
    console.log("void function");
    return;
}
myVoid();
