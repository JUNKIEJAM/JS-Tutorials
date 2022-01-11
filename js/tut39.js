function func1(){

    return new Promise(function(resolve,reject){

        setTimeout(()=>{

            const error=true;

            if(!error){
                console.log("Promise Resolved");
                resolve();
            }

            else{
                console.log("Promise not resolved");
                reject("Not Fulfiled");
            }
        },2000);
    })
}

func1().then(function(){
    console.log("Me: Thanks for resolving")
}).catch(function(error){
    console.log("Me: Very Bad. Reason: "+error);
})