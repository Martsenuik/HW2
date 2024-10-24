// ° C = (° F -32) / 1,8 
const temperatureFahrenheit = 100;
const tempC = (temperatureFahrenheit - 32) / 1.8;

const day = 31;
const hours = day * 24;
const minutes = day * 24 * 60;

const health = 100;
const minusHealth = health - 85;

let shopping = 1000;
// const discount = shopping * 0.1;
// shopping = shopping - discount;
// shopping = shopping - (shopping * 0.1);
shopping -= shopping * 0.1;

const notWholeNumber = 12.345

const wholeNumber = "46njsr8yj";

const number = 82;

const num = 567;
const str = "17px";
const parsStr = Number.parseInt(str);
const parsNum = num.toString();
 
    
console.log(tempC);
console.log(hours);
console.log(minutes);
console.log(health);
console.log(minusHealth);
console.log(shopping);
// console.log(shopping * 0.1);
console.log(Math.floor(notWholeNumber));
console.log(Number.parseInt(wholeNumber ));
console.log(Math.sqrt(number));
console.log(parsStr);
console.log(parsNum);
