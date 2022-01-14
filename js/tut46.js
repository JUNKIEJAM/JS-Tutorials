console.log("Tutorial 46");

let reg = /harry/g; //this is regular expression literal g= global flag

//let reg = /harry/i; // i means case insenstivity
console.log(reg);

console.log(typeof reg); //object
console.log(reg.source);

//functions to match expressions

let s = "That's great harry ! What is that harry ?";

//functions to match expressions
// 1. exec() : This function will return an array for match or null for no match

let result = reg.exec(s);
console.log(result); // we can use multiple exec with global flag
result = reg.exec(s);
console.log(result);
result = reg.exec(s);
console.log(result);

// 2. test() : returns true or false

let result2 = reg.test(s);
console.log(result2);
console.log(result2.input)

//3. match(): It will return an array of results or NULL

// let result3=reg.match(s); is wrong

// This is Correct for match:

let result3 = s.match(reg);
console.log(result3); // will return all indices only if global flag is used

// 4. search(): return index of first match

let result4 = s.search(reg);
console.log(result4);


// 5. replace() => return new replaced strings with all the replacements

let result5 = s.replace(reg, 'addiee');
console.log(result5);