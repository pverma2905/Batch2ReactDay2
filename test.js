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