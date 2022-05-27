console.log('Tutorial 60');

//Destructuring in JS

let a,b;
[a,b]=[34,564];

console.log(a,b);

// array destructuring
[a,b,c,...d]=[1,2,3,4,5,6,7,8,9];

console.log(b);
console.log(d);

({a,b,c,...d}={a:34,b:345,c:67,d:45,e:34})

console.log(a,b,c,d);


{const fruits=['apple','banana','mangoes'];

[a,b,c]=fruits;

console.log(a,b,c);}

const laptop={
    model:'HP Pavillion',
    age:'23 days',
    gender:'Male',
    net: 1234,
    start:function(){console.log('started')}
}

const {model,age,gender}=laptop;
console.log(model,age,gender);
