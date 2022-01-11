
const a=4,b=1;

function func1(){

    return new Promise(function(resolve,reject){

        setTimeout(()=>{

            if(a+b<=5){
                console.log(`Within Limits & the sum is ${a+b}`);
                resolve();
            }

            else{
                console.log(`Out of Range`);
                reject();
            }
        },1000)
    })
}

func1().then(function(){
    console.log("thanks for the calculation");
}).catch(function(){
    console.log("Me: Oops Sorry");
})