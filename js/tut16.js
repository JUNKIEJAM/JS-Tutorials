console.log("this is tutorial 16");

let element=document.createElement('li');

let text=document.createTextNode('I am a text node');
element.appendChild(text);
element.className='childul';
element.id='createLi';
element.setAttribute('title','mytitle');
element.innerText='Hello this is created by me';

element.innderHTML='<b>Hello this is created by me</b>';

let ul=document.querySelector('ul.this');
console.log(ul);
ul.appendChild(element);
console.log(element);

let elem2=document.createElement('h3');

elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul=document.getElementById('myul');

myul.replaceChild(element,document.getElementById('fui'),);

//.removeChild,.getAttribute,hasAttribute,.setAttribute

let div=document.querySelector('div');
console.log(div);
let elem3=document.createElement('a');
elem3.setAttribute('href','https://www.codewithharry.com');

let elem4=document.createElement('h2');

let elem5=document.createElement('l');
elem4.appendChild(elem5);

console.log(elem4);
elem3.appendChild(elem4);
console.log(elem3);

let text1=document.createTextNode('Go to CodeWithHary');
elem5.appendChild(text1);
console.log(elem5);

div.appendChild(elem3);
