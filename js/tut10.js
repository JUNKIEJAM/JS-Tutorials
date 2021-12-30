

const mygreet=function(name,thanks){

    let msg=`Happy Birthday ${name}. ${thanks} for everything`;
    
    return msg;
}

let name1='ABC',name2='DCE';

let val=mygreet(name1,'Thanks a lot');
console.log(val);
document.body.innerHTML=val;

const anotherObj={
    name:"Skills",
    game:function(){
        return 'GTA';
    }
}

console.log(anotherObj.game());

