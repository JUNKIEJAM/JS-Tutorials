console.log("Tutorial 47");

let regex = /harry/;

//let look into some metacharacter symbols

regex = /^harr/; // detects string contating words starting with regex
regex = /harry$/; /// $ at the end means "Ends with"
regex = /h.rry/; // . says that any character an come here
regex = /h*rry/ // matches >=0 
regex = /ha?rryi?t/; // t? says that t is optional

let str = "harry is a good boy and harry is code with harry";

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
    console.log(`This string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`This string ${str} does not match the expression ${regex.source}`);

}