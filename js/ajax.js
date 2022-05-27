console.log("Ajax");

document.getElementById('fetchBtn');

let fetchBtn=document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){

    console.log('You have clicked the fetch button');

    
    //initiliase an xhr object
    const xhr=new XMLHttpRequest();

    //open the object
//xhr.open('GET','harry.txt',true);  //3rd argument for synchronous or asynchronous //you can use fake JSON as well

xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
//what to do on <Progress>
    xhr.onprogress=function(){
        console.log('On Progress');
    }

    //xhr.onreadystatechange=function(){
      //  console.log('ready state is ',xhr.readyState);
   // }
// what to do after response is ready
    

xhr.onload=function(){

        if(this.status===200){
        console.log(this.responseText);
        }
        else{
            console.log("Some Error Occured");
        }
    }

    //send the request
    params={"message":"Error Occured! Page Not found, contact rstapi2example@gmail.com"};
    xhr.send(params);
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}