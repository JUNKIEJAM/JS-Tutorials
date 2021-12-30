//type coversion and coercion

console.log("Welcome to tut5");

let myVar;

myVar=34;

myVar=String(34);
console.log(typeof myVar);

console.log(myVar,(typeof myVar));

let i=8;

console.log(i.toString(),(typeof i));

let str=Number("2345");
console.log(str,(typeof str));

let number='34';

console.log(number,(typeof number));

let j=34.08;
s=parseInt(j);
console.log(s);
t=parseFloat(j);
console.log(t.toFixed(3),(typeof t));