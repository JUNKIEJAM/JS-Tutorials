console.log('Tutorial 58');

// set stores unique value
const mySet=new Set();

console.log('My set looks like this: ',mySet);

mySet.add('this');
mySet.add('myName');
mySet.add(2343);



console.log('My set looks like this: ',mySet);

let mySet2=new Set([1,456,false,'fgfgf','fgfdfgf']);
console.log(mySet2);

//iterating through a set

for(let item of mySet2){
    console.log('Item is:' ,item);
}

const arr=Array.from(mySet);

console.log(arr);
  