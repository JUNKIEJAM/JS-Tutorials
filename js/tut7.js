
const ourMarks=[34,23,56,78,22,90];
const mixed=['str',89,[3,5]];

const arr=new Array(23,123,21,'Orange');
console.log(arr);
console.log(mixed);
console.log(mixed[1]);

console.log(arr.length);
console.log(Array.isArray('Orange'));

let value=ourMarks.indexOf(73);
ourMarks.unshift(100);
ourMarks.splice(1,3);
ourMarks.reverse();
//ourMarks.pop();

let myObj={
    name:'Prithesh',
    college:'NSIT',
    isActive:'true'
}

console.log(myObj);
console.log(myObj.isActive);