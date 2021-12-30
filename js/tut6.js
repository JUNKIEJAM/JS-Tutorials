console.log('Tutorial 6');

const myName="Prithesh";

const greeting="Good Morning";

console.log(greeting+' '+myName);

let html;
html= "<h1> this is a heading></h1>"+"<p> this is my para</p>";

html=html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('str2'));

console.log(html.includes('fg'));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split('>'));

console.log(html.replace('this','it'));

let fruit1='Orange';
let fruit2='Mango';

let html2=`Hello ${nam} <h1>This is a heading </h1> <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML=html2;



