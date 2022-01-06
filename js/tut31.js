console.log("Tutorial 31")

class Employee{

    constructor(givenName,givenExperience,givenDivision){   
    this.name=givenName;
    this.experience=givenExperience;
    this.division=givenDivision;
}

slogan(){
    return  `I am ${this.name} and this company is the best`;
}

joiningYear(){
return 2020-this.experience;
}

static add(a,b){
return a+b;
}
}

class Programmer extends Employee{

    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision); // calling the constructor of parent class

        this.langauge=language;
        this.github=github;


    }

    static favoriteLanguage(){
        if(this.langauge=="python"){
            return "Python";
        }
else{
    return "JavaScript";
}
    }

    static multiply(a,b){
        return a*b;
    }
}

harry=new Employee("Harry",56,"Divsion");
console.log(harry.joiningYear);

console.log(Employee.add(34,5));

rohan=new Programmer("Rohan",3,"Lays","Go","Rohan420");
console.log(rohan);

console.log(Programmer.multiply(442,222));