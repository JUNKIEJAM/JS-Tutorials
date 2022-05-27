console.log('Welcome to Tutorial 15');

let cont=document.querySelector('.no');

cont=document.querySelector('.container');
let nodeType=cont.childNodes[1].nodeName;
console.log(cont.childNodes);//considers comments,text,newlines

console.log(cont.children); //does not consider comments,text,newlines and considers only elements
console.log(cont);
console.log(nodeName);


//node types: 1. element  2. attribute  3. text node 8. comment 9. document 10. DOCTYPE
console.log(nodeType);

let container=document.querySelector('div.container');
console.log(container.children[1].children[0].children);

//.container.firstElementChild.nextElementSubling.nextElementSubling

//container.firstElementChild.nextElementSibling