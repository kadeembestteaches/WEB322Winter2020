class Student 
{
    //this allow you to create a constructor
    constructor(fn,ln,a,loc)
    {
        //firstName is a property
        this.firstName = fn;
        this.lastName = ln;
        this.age =a;
        this.location =loc;
    }

    //this creates a method using the new method syntax
    displayAllInfo()
    {
        //Remember, in a method to access properties, you must use the this keyword
        console.log("Student Info");
        console.log(`Full name : ${this.firstName} ${this.lastName}`);
        console.log(`Age : ${this.age}`);
        console.log(`Locaiton : ${this.location}`);
    }
}


//They below code create two student objects and assign it's reference to the respective variables
const stu1 = new Student("Jon","Snow",25,"Beyond the Wall"); 
const stu2 = new Student("Bruce","Wayne",47,"Gotham City");

stu1.displayAllInfo();
console.log("\n\n");
stu2.displayAllInfo();