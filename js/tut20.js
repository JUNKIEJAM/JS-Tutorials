console.log("This is tutorial 20")

localStorage.setItem('Name','Harry');

let namm=localStorage.getItem('Name');
console.log(namm);

localStorage.removeItem('Name');
console.log(namm);

let impArray=['adrak','pyaz','bhindi'];

localStorage.setItem('Sabzi',JSON.stringify(impArray));

namm=JSON.parse(localStorage.getItem('Sabzi'));
console.log(namm);

//localStorage will last forever but sessionStorage won't:

sessionStorage.setItem('sessionName','sHarry');
sessionStorage.setItem('sessionName2','sRohan');
sessionStorage.setItem('sessionSabzi',JSON.stringify(impArray));
