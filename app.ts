// // person object를 TypeScript로 표현
// const person: {
//     name : string; // 키값이 name인 value는 string
//     age : number; // 키값이 age인 value는 number
// } = {
//     name : "Alex",
//     age : 30
// };

import { TupleType } from "typescript";

// person object를 TypeScript로 표현
const person : {
    name : string;
    age : number;
    hobbies: string[];
    role: [number, string]; // tuple
} = {
    name : "Alex",
    age : 30,
    hobbies: ['Sports', 'Cooking'],
    role : [2, 'author'] // 0인덱스 Number, 1인덱스 String
};

person.role.push('admin');
// person.role[1] = 10;

// favoriteActivities변수에 원소가 string인 배열 생성
let favoriteActivities: string[];
// favoriteActivities = ['test', 1] // 에러

for(const hobby of person.hobbies){
    // hobby를 출력
    console.log(hobby.toUpperCase());
    // console.log(hobby.map) // 에러 발생 : hobby는 문자열임
}

let favoriteActivities1 : any[]; // 모든 변수의 종류에 대해서 받음



console.log(person.name);