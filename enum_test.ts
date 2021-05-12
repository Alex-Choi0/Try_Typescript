// enum동작

// enum선언
// 변수명을 이용하여 Number입력
// Role객체에 변수명 PRO, NUBE, AVE는
// 각각 Number 1, 2, 3가 입력되 있다.
enum Role {PRO = 1, NUBE, AVE}; // PRO는 1입

const state = Role.PRO;

switch(state){
    case 0:
        console.log("You are a PRO.")
        break;
    case 1:
        console.log("You are a NUBE.")
        break;
    case 2:
        console.log("You are a AVE.")
        break;
    default : console.log("Wrong Input");
}