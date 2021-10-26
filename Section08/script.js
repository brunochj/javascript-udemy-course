'use strict';

// function calcAge(birthYear){
//     const age = 2037 - birthYear
    
//     function printAge(){
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`
//         console.log(output)

//         if(birthYear >= 1981 && birthYear <= 1996){
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str);
//             function add(a,b){
//                 return a+b
//             }
//         }
//         // console.log(add(2,3))
//     }
//     printAge()
//     return age
// }

// const firstName = "Jonas"
// calcAge(1991)

// console.log(me)
// console.log(job)
// console.log(year)

// var me = "Jonas"
// let job = "teacher"
// const year = 1991

// console.log(this)

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear)
//     console.log(this)
// }

// calcAge(1991)

// const calcAge = (birthYear) => {
//     console.log(2037 - birthYear)
//     console.log(this)
// }

// calcAge(1991)

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this)
//     }
// }

// jonas.calcAge()

let lastName = "Williams"
let oldLastName = lastName
lastName = "Davis"
console.log(lastName)
console.log(oldLastName)

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
}

const marriedJessica = jessica
marriedJessica.lastName = "Davis"

console.log("Before Marriage", jessica)
console.log("After Marriage", marriedJessica)

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = "Davis"
jessicaCopy.family.push("Mary")
jessicaCopy.family.push("John")
console.log("Before Marriage", jessica2)
console.log("After Marriage", jessicaCopy)