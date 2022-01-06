console.log('Tutorial 30');

const proto={

    slogan:function(){
        return 'This company is the best';
    },

    changeName:function(newName){
            this.name=newName;
    }
}
//create harry object
const harry=Object.create(proto);
harry.name="Harry";
harry.role="programmer";
harry.changeName="Harry2";
console.log(harry);

//create harryy object
const harryy=Object.create(proto,{
    name:{value:"harry",writeable:true},
    role:{value:"Programmer"}
});

console.log(harryy);


//Employee Constructor

function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

//slogan
Employee.prototype.slogan=function(){
    return `This company is the best. Regards, ${this.name}`;
}

//create an object from this constructor
let harryyy=new Employee("Harry",234,99);

console.log(harryyy);


//Programmer
function Programmer(name,salary,experience,language){

    Employee.call(this,name,salary,experience);
    this.language=language;

}

//inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);


//manually set the constructor
Programmer.prototype.constructor=Programmer;

let rohan=new Programmer("Rohan",2,0,"JS");
console.log(rohan);