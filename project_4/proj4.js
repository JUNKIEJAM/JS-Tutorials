console.log("Project 4");

const namee = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();


namee.addEventListener('blur', () => {
    console.log("Name is blurred");

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;

    let str = namee.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Name is Valid !");
        namee.classList.remove('is-invalid');
        validUser = true;
    } else {
        console.log("No Match");
        namee.classList.add('is-invalid');
        validUser = false;
    }
    //Validate name here
})

email.addEventListener('blur', () => {
    console.log("Email is blurred");

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Email is Valid !");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log("No Match");
        email.classList.add('is-invalid');
    }

    //Validate name here
})

phone.addEventListener('blur', () => {
    console.log("Phone is blurred");

    let regex = /^[0-9]{10}$/;

    let str = phone.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Phone is Valid !");
        phone.classList.remove('is-invalid');
        let validPhone = false;
    } else {
        console.log("Not a valid Phone Number");
        phone.classList.add('is-invalid');
    }

    //Validate name here
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {

    e.preventDefault();
    console.log('You clicked on Submit');

    //submit here form here

    if (validEmail && validUser && validPhone) {
        console.log("Phone, email and user and valid. Submitting the form !")
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    } else {
        console.log("Something is invalid !");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }

})