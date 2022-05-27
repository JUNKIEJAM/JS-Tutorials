console.log('Tutorial 59');

//symbols (introduced in ES6)

const symb1=Symbol('My identifier');
const symb2=Symbol('My identifier');

console.log('Symbol is: ',symb1);
console.log('Type of symbol is',typeof symb1);


console.log(symb1===symb2); //false

console.log(null===null);
console.log(undefined===undefined);


const k1=Symbol('identifier for k1');
const k2=Symbol('identifier for k2');

myObj={};
myObj[k1]="harry";
myObj[k2]="Rohan";
myObj["name"]="Good Boy";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // caanot be done because it is equivalent to myObj["k2"]

//symbols are ignored in 'for in' loop
for(key in myObj){
    console.log(key,myObj[key]);
}

console.log(JSON.stringify(myObj))//converts to JSON