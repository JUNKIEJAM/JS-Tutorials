
let b=document.links;
let len=b.length;

while(len){
    len--;
    if(b[len].href.includes("harry")){
        console.log(b[len]);
    }
}
