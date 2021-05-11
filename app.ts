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
enum Role {ADMIN , READ_ONLY, AUTHOR};

// // ADMIN을 5로 시작해서 6, 7록 각각 enum번호 지
// enum Role {ADMIN=5 , READ_ONLY, AUTHOR};


const person = {
    name : "Alex",
    age : 30,
    hobbies: ['Sports', 'Cooking'],
    role : Role.ADMIN
};

//person.role.push('admin'); // tuple에서는 push 예외조항
// person.role[1] = 10; // 에러 발생
// // push에서는 예외가 되지만 배열생성후 길이가 tuple이상일시
// // TypeScript에서 에러표
// person.role = [0,'admin', 'user'] // 에러 발생

// favoriteActivities변수에 원소가 string인 배열 생성
let favoriteActivities: string[];
// favoriteActivities = ['test', 1] // 에러[문자, 숫자]

for(const hobby of person.hobbies){
    // hobby를 출력
    console.log(hobby.toUpperCase());
    // console.log(hobby.map) // 에러 발생 : hobby는 문자열임
}

let favoriteActivities1 : any[]; // 모든 변수의 종류에 대해서 받음



console.log(person.name);

if(person.role === Role.ADMIN){
    console.log('is admin');
}