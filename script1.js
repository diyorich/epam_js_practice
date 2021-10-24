let str = "ahb acb aeb aeeb adcb axeb";

let reg1 = /\ba.\S\b/g;

<<<<<<< HEAD
let result = str.match(reg1);

alert(result);

let reg2 = /\b...\b/g;

let result_two = str.match(reg2);

alert(result_two);

let reg3 = /\b.\Sb\b/g;

let result_three = str.match(reg3);

alert(result_three);
=======


alert(result.index)
>>>>>>> 41d3b0e3fd9dca82fd72532f3b59f2b64f7f803c
