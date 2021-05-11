// // person object를 TypeScript로 표현
// const person: {
//     name : string; // 키값이 name인 value는 string
//     age : number; // 키값이 age인 value는 number
// } = {
//     name : "Alex",
//     age : 30
// };
// import { TupleType } from "typescript";
// person object를 TypeScript로 표현
// const person : {
//     name : string;
//     age : number;
//     hobbies: string[];
//     role: [number, string]; // tuple
// } = {
//     name : "Alex",
//     age : 30,
//     hobbies: ['Sports', 'Cooking'],
//     role : [2, 'author'] // 0인덱스 Number, 1인덱스 String(Tuple : TypeScript만 존재)
// };
// // 각 변수명에 해당되는 number지정
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// Enum을 생성하기 위한 부분
// Enum은 TypeScript에만 존재하는 변수명
// LabVIEW의 Enum과 비슷함
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// // ADMIN을 5로 시작해서 6, 7록 각각 enum번호 지
// enum Role {ADMIN=5 , READ_ONLY, AUTHOR};
var person = {
    name: "Alex",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//person.role.push('admin'); // tuple에서는 push 예외조항
// person.role[1] = 10; // 에러 발생
// // push에서는 예외가 되지만 배열생성후 길이가 tuple이상일시
// // TypeScript에서 에러표
// person.role = [0,'admin', 'user'] // 에러 발생
// favoriteActivities변수에 원소가 string인 배열 생성
var favoriteActivities;
// favoriteActivities = ['test', 1] // 에러[문자, 숫자]
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // hobby를 출력
    console.log(hobby.toUpperCase());
    // console.log(hobby.map) // 에러 발생 : hobby는 문자열임
}
var favoriteActivities1; // 모든 변수의 종류에 대해서 받음
console.log(person.name);
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
