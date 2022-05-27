console.log('Welcome to tutorial 14');

let rev_element=document.getElementById('myfirst');
console.log(rev_element);
rev_element=rev_element.className;
console.log(rev_element);

rev_element=rev_element.childNodes;
console.log(rev_element);

rev_element=rev_element.parentNodes;
console.log(rev_element);

let element=document.getElementById('child1');
//element=element.className;
//element=element.childNodes;
//element=element.parentNode;

//element.style.color='red';
//element.innerText='Harry is a good coder';
//element.innerHTML='<b>Harry is a good coder</b>';

//console.log(className);
//console.log(element.innerText);

let sel=document.querySelector('#child1');
sel=document.querySelector('.child');
sel=document.querySelector('h1');
console.log(sel)

//multi element selector

let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element=>{
    console.log(element);
    element.getElementsByClassName.color='blue';
});

console.log(elems[0].getElementsByClassName('child'));