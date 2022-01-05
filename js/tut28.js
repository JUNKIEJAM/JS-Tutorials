//object literal


let obj={
    name:'Harry',
    channel:"Code with Harry",
    address:"Mars"
}

console.log(obj);

function Obj(givenName){
   this.name=givenName;
}

Obj.prototype.getName=function(){
    return this.name;
}

let obj2=new Obj("Rohan");
console.log(obj);

console.log(obj2);
