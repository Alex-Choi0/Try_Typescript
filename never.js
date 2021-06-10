// 에러를 임의로 생성하는 함수
function createError(message, code) {
    // throw를 이용하여 error를 임의로 준다.
    throw ({ message: message, errorCode: code });
}
// createError를 사용하여 임의로 에러를 발생
createError('server error', 500);
