let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let bmiMark = massMark / (heightMark ** 2)
let bmiJohn = massJohn / (heightJohn ** 2)
let markHigherBmi = bmiMark > bmiJohn
 console.log("bmiMark", bmiMark)
 console.log("bmiJohnm", bmiJohn)
 console.log("markHighrBmi", markHigherBmi)


markHigherBmi ? 
console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})`) 
: console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's (${bmiMark.toFixed(2)})`)