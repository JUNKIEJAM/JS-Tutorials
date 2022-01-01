console.log('Tutorial 21 exercise 2');


let body = document.querySelector('body');
let div = document.createElement('div');
let input = document.createElement('input');
let parra = document.createElement('p');

div.className = 'new_div';

input.className = 'new_input';
input.placeholder = 'enter a value';
input.value = 'enter something';

parra.className = 'parra';
parra.innerText = 'enter something';

input.style.display = 'none';

body.appendChild(div);
document.querySelector('div.new_div').appendChild(parra);
document.querySelector('div.new_div').appendChild(input);


parra.addEventListener('click', () => {

    parra.style.display = 'none';
    input.style.display = 'block';

});

input.addEventListener('blur', () => {

    input.style.display = 'none';
    parra.style.display = 'block';
    parra.innerText = input.value;
    if (parra.innerText.length == 0) {
        parra.innerText = 'enter something new';
        localStorage.setItem('input', 'no value enterd');
    } else {
        localStorage.setItem('input', input.value);
    }


});