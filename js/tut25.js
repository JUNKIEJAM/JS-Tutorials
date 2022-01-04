let divElem=document.createElement('div');

//add text to create element
let val=localStorage.getItem('text');
let text;
if(val==null){
text=document.createTextNode('This is my element. Click to edit it.');
}

else{
    text=document.createTextNode(val)
}
divElem.appendChild(text);

//give element id,style and class
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');

//grab the main container
divElem.setAttribute('style','border:2px solid black; width: 154px; margin: 34px; padding: 23px; ');


let container=document.querySelector('.container');
let first=document.getElementById('myfirst');

//insert the element before first
container.insertBefore(divElem,first);
//divElem.appendChild(text);
console.log(divElem,container,first);

//add event listener to the divElem
divElem.addEventListener('click',function(){

    let noTextAreas=document.getElementsByClassName('textarea').length;

    if(!noTextAreas){

    
    let html=elem.innerHTML;

    divElem.innerHTML=` <textarea class="textarea form-control"   id="textarea" rows="3">${html}</textarea>`;


    }



 //for saving new edit :blur function
let textarea=document.getElementById('textarea');
textarea.addEventListener('blur',function(){
elem.innerHTML=textarea.value;
localStorage.setItem("text",textarea.value);
})
});