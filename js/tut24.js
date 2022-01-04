console.log('Tut 24');

let today=new Date();
console.log(today);
console.log(typeof today); //ans: object (reference data type)

let otherDate= new Date('8-4-2003 04:54:08'); //MM/DD/YYYY
console.log(otherDate);
console.log(otherDate.getDay());
a=today.getTime();
console.log(a);

otherDate.setDate(23);
otherDate.setMonth(3);
otherDate.setFullYear(1993);
otherDate.setHours(3);
otherDate.setMinutes(23);
otherDate.setSeconds(53);
console.log(otherDate);