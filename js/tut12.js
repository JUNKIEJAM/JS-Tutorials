console.log('Welcome to Tutorials !');

let a=document;
//a=document.all;
a=document.forms[0];
console.log(a);

Array.from(a).forEach(function(element){
    console.log(element);
})

a=document.links[0].href;
console.log(a);