// function showTodo(todo: {title: string, text: string}){
//     console.log(todo.title + ': ' + todo.text);

// }

// let myTodo = {title: 'Trash', text: 'Take out trash'};

// showTodo(myTodo)

// 정형화 된 input
interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo){
    console.log(todo.title + ': ' + todo.text);

}

let myTodo = {title: 'Hello', text : ' World'};

showTodo(myTodo);