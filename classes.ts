interface UserInterface{
    name : string;
    email : string;
    age : number;
    register();
    payInvoice();
}

class User implements UserInterface{
    name : string;
    email : string;
    age : number;

    constructor(name : string, email : string, age : number){

        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created : " + this.name);
    }

    register(){
        console.log(this.name + 'is now registered');
    }

    //  // private이면 class 내부에서만 사용이 가능하다
    // private regester(){
    //     console.log(this.name + 'is now registered');
    // }

    payInvoice(){
        console.log(this.name + " paid invoice");
    }

}

let john = new User('John Doe', 'john@namver.com', 34);

console.log(john.age);
john.register();

class Member extends User{
    id : number;

    constructor(id: number, name: string, email : string, age : number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice()
    }
}

let mike = new Member(5, 'alex', 'alex@', 55);

mike.payInvoice();