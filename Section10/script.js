'use strict';

// const bookings = []

// const createBooking = function(flightNumb, numbPassenger, price){


//     const booking = {
//         flightNumb,
//         numbPassenger,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LH123')

// const flight = 'LH1234'
// const bruno = {
//     name: 'Bruno Chang',
//     passport: 512321
// }

// const checkIn = function(flightNumb, passenger){
//     flightNumb = 'LH999'
//     passenger.name = 'Mr. ' + passenger.name
// }

// checkIn(flight, bruno)

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 10000000)
// }

// newPassport(bruno)

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`)
//     console.log(`Transformed by: ${fn.name}`)
// }

// transformer('Javascript is the best!', upperFirstWord)
// transformer('Javascript is the best!', oneWord)

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey')
// greeterHey("Jonas")
// greeterHey("Steven")

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }

// lufthansa.book(239, "Bruno Chang")
// lufthansa.book(635, "Bruno Ji")

// const eurowings = {
//     airline: "Eurowings",
//     iataCode: "EW",
//     bookings: []
// }

// const book = lufthansa.book
// book.call(eurowings, 23, "Sarah Williams")
// console.log(eurowings);

// const flightData = [583, "Geoge Cooper"]
// book.apply(eurowings, flightData)
// console.log(eurowings);
// book.call(lufthansa, ...flightData)

// const bookEw = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)

// bookEw(231, "Steven Willians")

// const bookEw231 = book.bind(eurowings, 231)
// bookEw231("Jonas Schmedtmann")
// bookEw231("Martha Cooper")

// lufthansa.planes = 300
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++
//     console.log(this.planes);
// }

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//Exemplo Completo
// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.1, 200));
// // 1º parämetro é o this
// const addVat = addTax.bind(null, 0.23)

// console.log(addVat(100));
// console.log(addVat(23));

// Exemplo Reduzido
// const addVat = (rate) => value => value + value*rate
// const addTax = addVat(0.2)
// console.log(addTax(100))



// Minha resolução
// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0)
// }
// let type
// const displayAnswer = () => {
//     const testData1 = [5,2,3]
//     const testData2 = [1, 5, 3, 9, 6, 1]
//     type = prompt('Type of Display: String or Array')
//     if(type === "string"){
//         alert(`Poll results are ${poll.answers}`)
//     }else{
//         console.log(poll.answers)
//     }
//     console.log(testData1)
//     console.log(testData2)
// }
// const registerNewAnswer = () => {
//     let pollOptions
//     poll.options.forEach(item => {pollOptions += item + ','})
//     let promptMessage = `${poll.question}\n
//     ${pollOptions.replace('undefined', '').replaceAll(',', `\n`)}`
//     let answer = prompt(promptMessage)
//     if(answer < poll.options.length && answer >= 0){
//         poll.answers[answer]++
//         displayAnswer()
//     }else{
//         alert('Invalid Option')
//     }
// }

// document.querySelector('.poll').addEventListener('click', registerNewAnswer)

// Resolução dada
// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         const answer = Number(prompt(`${this.question}\n
//         ${this.options.join('\n')}\n
//         (Write option number)`))
//         console.log(answer)
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
//         this.displayResults()
//         this.displayResults('string')
//     },
//     displayResults(type = 'array'){
//         if(type === 'array'){
//             console.log(this.answers)
//         }else if(type === 'string'){
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         }
//     }
// }
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
// poll.displayResults.call({answes: [5, 2, 3]})
// poll.displayResults.call({answes: [5, 2, 3]}, 'string')

// const runOnce = function() {
//     console.log('This will never run again')
// };
// runOnce();

// (function(){
//     console.log('This will never run again')
// })();

// const secureBooking = function(){
//     let passengerCount = 0;

//     return function(){
//         passengerCount++
//         console.log(`${passengerCount} passenger`)
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker)

//Coding Challenge 2

const changeColor = (header) => {
    this.addEventListener('click', () => {
        header.style.color = 'blue'
    })
}

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red'
    changeColor(header)
})();