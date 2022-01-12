console.log("Tutorial 43");

async function harry() {
    console.log("Hey")
    const response = await fetch('https://api.github.com/');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
}

console.log("Before Calling Harry");
let a = harry();
console.log(a);
a.then(data => console.log(data));
console.log("Last Line of this");