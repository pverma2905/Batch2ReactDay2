class A {
    name;
    surname = "";
    salary = 10000;

    constructor() {
        this.name = "pranav"
        this.surname = "verma"
        this.fathername = "Rajesh Verma"
    }

    display() {
        console.log(this.name + " " + this.surname + " " + this.salary + " " + this.fathername)
    }


}

let obj = new A();
obj.display();

class B {
    friends1;
    friends2 = "";

    constructor(newFrd) {
        this.friends1 = "amit";
        this.friends2 = "ravi"
        this.friends3 = newFrd
    }

    listMyFriends() {
        console.log(this.friends1)
        console.log(this.friends2)
        console.log(this.friends3)
    }


}

let obj1 = new B("golu");
obj1.listMyFriends();