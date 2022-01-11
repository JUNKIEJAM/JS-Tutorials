//You have to pretennd to use a WORD API which will contain an API

console.log(`Using a Dictionary API Exercise 5 | JavaScript Tutorial In Hindi #38`);
/*  
You have pretend to use a word api which will contain an object and you hve to print definition from all the results of that word api.
You have to print it in the dom
If you are using bootstrap then its a plus
*/

// Grab the meanings button
let meanings = document.getElementById('meanings');
meanings.addEventListener('click', getDefination);

// Impleneting the getDefination function
function getDefination() {
    // Instansiate an xhr object
    let xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'Exercise_5.json', true);

    // What to do on progress
    xhr.onprogress = function () {
        console.log(`On progress`);
    }

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            let obj = JSON.parse(this.responseText);
            for (let index = 0; index < obj.results.length; index++) {
                const element = obj.results[index]["definition"];
                console.log(element);
                populate(element);
            }

        }
        else {
            console.log(`Some error occured`)
        }
    }

    // Send the request
    xhr.send();
}

function populate(element) {
    let html = "";
    html += `<li class="py-2 list-group-item list-group-item-light">One of the defination of example is: ${element}</li>`;
    // Grab the definations li
    let definations = document.getElementById('definations').innerHTML += html;
}