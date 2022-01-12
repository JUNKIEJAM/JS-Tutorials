console.log("Tutorial 42");

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

/*function getData() {

    console.log("Started Get Data");
    url = "harry.txt";

    fetch(url).then((response) => {

            console.log("Inside first then");
            return response.text;
        }).then((data) => {
            console.log("Inside second then");
            console.log(data);
        }) //nested promise
}*/

function getData() {

    console.log("Started Get Data");
    url = "https://api.github.com/";

    fetch(url).then((response) => {

            console.log("Inside first then");
            return response.json(); //.json will return in parse but not text
        }).then((data) => {
            console.log("Inside second then");
            console.log(data);
        }) //nested promise
}


function postData() {

    console.log("Started Get Data");
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"abcdefgh","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data // no semicolon with object
    }

    fetch(url, params).then(response =>
            response.json()).then(data => console.log(data)) //.json will return in parse but not text
        //nested promise
}

/*console.log("Before running getData")

getData();
console.log("After running getData");*/
postData();