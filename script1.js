//1

let str = "ahb acb aeb aeeb adcb axeb";

let reg1 = /\ba.\S\b/g;


let result = str.match(reg1);

alert(result);

let reg2 = /\b...\b/g;

let result_two = str.match(reg2);

alert(result_two);

let reg3 = /\b.\Sb\b/g;

let result_three = str.match(reg3);

alert(result_three);

//2

let calculating = "2+3 223 2223";

let calc_reg = /\d\+\d/g;

let calcres = calculating.match(calc_reg);

alert(calcres);

//3
let now = new Date();

console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
