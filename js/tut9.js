
let a =34;
a+=1;
a++;

console.log(a);

for(let i=0;i<100;i++){
    console.log(i);
}

let myArr=[2,4,5,6,8,9,22];

myArr.forEach(function(element,index,myArr){
console.log(element,index,myArr);
});

let obj={
    name:'Gary',
    age:64,
    type:'Cricketer',
    role:'Batter'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}


