console.log('Tutorial 57');

//Maps in JS (introduced in ES 6)

const myMap=new Map();


let key1='myStr';
key2={},
key3=function(){}

//setting map values

myMap.set(key1,'This is a string');
myMap.set(key2,'This is a blank obj');
myMap.set(key3,'This is an empty function');

console.log(myMap);

//getting the values from a map

let value1=myMap.get(key1);
console.log(value1);

// get the size of the map
console.log(myMap.size);

//one can loop using for..of to get keys and values

for(let [key,value] of myMap){
    console.log(key,value);
}

//get only keys

for(let value of myMap.values()){
    console.log('key is: ', value)
}

//loop through map using forEach()

myMap.forEach((value,key)=>{
console.log('Key: ',key);
console.log('value: ',value);
})

//converting map values to array

let myValuesArray=Array.from(myMap.values());
console.log('Map to array is ',myValuesArray);

//converting map keys to array

let myKeysArray=Array.from(myMap.keys());
console.log('Map to array is ',myKeysArray);