console.log('This is tutorial 17');

document.getElementById("heading").addEventListener
("click",function(e){
    let variable;
    variable=e.target;
    console.log('You have clicked the heading !');
    //location.href='//codewithharry.com';
    variable=Array.from(e.target.classList);
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.clientX;
    console.log(variable);
});

document.querySelector('.no').addEventListener('mouseenter',function(){

    console.log('You entered no');
})

document.querySelector('.no').addEventListener('mouseleave',function(){
    console.log('You exited no');
})

