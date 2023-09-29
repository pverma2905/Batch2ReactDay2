class A {
    name;
    surname = "";
    salary = 10000;
    state;

    constructor() {
        this.name = "pranav"
        this.surname = "verma"
        this.fathername = "Rajesh Verma"
    }

    display() {
        console.log(this.name + " " + this.surname + " " + this.salary + " " + this.fathername)
    }

    setState(data) {
        this.state = data
    }

    showState() {
        console.log(this.state)
    }


}

// let obj = new A();
// obj.display();

class B extends A {
    friends1;
    friends2 = "";

    constructor(newFrd) {
        super()
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
obj1.display()
obj1.setState({ name: 'pranav', surname: 'verma' })
obj1.showState();