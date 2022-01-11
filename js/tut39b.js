

//pretend that this response is coming from the server
const students=[
    {name:"harry",subject:"JavaScript"},
    {name:"Rohan", subject:"Machine"}
]


function enrollStudent(student){

    return new Promise(function(resolve,reject){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");

        const error =false;
        if(!error){
        resolve();
        }
        else{
            reject();
        }
    },5000);     // will push after 3 seconds
    
})

}

function getStudent(){
    
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
            console.log("Student has been fetched");
        });
        document.getElementById('students').innerHTML=str;
    },1000);     // will push after 3 seconds
}

let newStudent={name:"Sunny", subject: "Python"}
enrollStudent(newStudent).then(function(){
    getStudent();
}).catch(function(){
    console.log("Some error occured")
});
//getStudent();