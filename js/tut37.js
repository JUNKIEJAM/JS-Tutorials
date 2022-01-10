console.log("Tutorial 37");

//pretend that this response is coming from the server
const students=[
    {name:"harry",subject:"JavaScript"},
    {name:"Rohan", subject:"Machine"}
]


function enrollStudent(student,callback){

    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    },1000);     // will push after 3 seconds
}


function getStudent(){
    
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
            console.log("Student has been fetched");
        });
        document.getElementById('students').innerHTML=str;
    },3000);     // will push after 3 seconds
}

let newStudent={name:"Sunny", subject: "Python"}
enrollStudent(newStudent,getStudent);
//getStudent();