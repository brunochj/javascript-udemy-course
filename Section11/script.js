'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = (movements, sort = false) => {

  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('')
  })
}

createUsernames(accounts)

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance}€`
}

const calcDisplaySummary = (acc) => {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(outcomes)}€`

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter(int => int >= 1).reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}

const updateUi = acc => {
  // Display movements
  displayMovements(acc.movements)

  // Display balance
  calcDisplayBalance(acc)

  // Display summary
  calcDisplaySummary(acc)
}

// Events Handlers
let currentAccount;
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUi(currentAccount)
  }
})

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts
    .find(acc => acc.username === inputTransferTo.value)

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    console.log("transfered");
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)
    updateUi(currentAccount)
  }
})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value)
  if (amount > 0 && currentAccount.movements
    .some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount);

    updateUi(currentAccount)
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {

    const index = accounts
      .findIndex(acc => acc.username === currentAccount.username)
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername = ''
})

let sorted = false
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// console.log(arr);
// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// // JOIN
// console.log(letters.join(' - '));


// const eurToUsd = 1.1;
// const movementsUsd = movements.map(mov => mov * eurToUsd)

// console.log(movements)
// console.log(movementsUsd)

// const movementsDescriptions = movements.map((mov, i) => 
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} 
//   ${Math.abs(mov)}`
// )
// console.log(movementsDescriptions)

// const deposits = movements.filter(mov => mov > 0)
// const withdrawals = movements.filter(mov => mov < 0)
// console.log(deposits)
// console.log(withdrawals)

// const balance = movements.reduce((accumulator, current) => 
//   accumulator + current
// , 0)
// console.log(balance);

// const maxValue = movements.reduce((max, cur) => 
//   max > cur ? max : cur
// , movements[0])
// console.log(maxValue)

// const totalDepositsUsd = movements
//                           .filter(mov => mov > 0)
//                           .map(mov => mov * eurToUsd)
//                           .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUsd)

// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === "Jessica Davis")
// console.log(account);

// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov > 0));

// console.log(movements.every(mov => mov > 0));
// const deposit = mov => mov > 0
// console.log(movements.some(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8]
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements);
// const allMovements = accountMovements.flat()
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
// console.log(overallBalance);

// const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
// console.log(overallBalance)

// const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// console.log(overallBalance2);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners.sort());

// movements.sort((a, b) => a - b)
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1
// // })
// console.log(movements);

// movements.sort((a, b) => b - a)
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1
// // })
// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7)
// console.log(x);
// // x.fill(1)
// x.fill(1, 3, 5)
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1)
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1)
// console.log(z);


// labelBalance.addEventListener('click', () => {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', '')))
//   console.log(movementsUI);
// })

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0)

// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0)

// console.log(numDeposits1000);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sums, cur) => {
//     // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//     sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
//     return sums
//   }, { deposits: 0, withdrawals: 0 })
// console.log(deposits, withdrawals);

// const convertTitleCase = title => {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => exceptions
//       .includes(word) ? word : word[0].toUpperCase() + word.slice(1))
//     .join(' ');

//   return capitalize(titleCase)
// }
// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is anothe title with an EXAMPLE"));

/////////////////////////////////////////////////

// Challenge 1
// const juliaData = [3, 5, 2, 12, 7];
// const kateData =  [4, 1, 15, 8, 3];
// const juliaData = [9, 16, 6, 8, 3];
// const kateData =  [10, 5, 6, 1, 4];
// const juliaUpdatedData = juliaData.slice(1, -2)

// const arrayDogs = [...juliaUpdatedData, ...kateData];
// console.log(arrayDogs)

// const checkDogs = (dogs) => {
//   dogs.forEach((dogAge, i) => {
//     if(dogAge >= 3){
//       console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`)
//     }else{
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//     }
//   })
// }

// checkDogs(arrayDogs)

// const checkDogs = (dogsJulia, dogsKate) => {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1)
//   dogsJuliaCorrected.splice(-2)
//   const dogs = dogsJuliaCorrected.concat(dogsKate)
//   dogs.forEach((dogAge, i) => {
//         if(dogAge >= 3){
//           console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`)
//         }else{
//           console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//         }
//       })
// }

// checkDogs(juliaData, kateData)

// Challenge 2
// const dogsAge = [5, 2, 4, 1, 15, 8, 3]
// const dogsAge = [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = ages => {

//   const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
//   const adults = humanAges.filter(humanAge => humanAge >= 18)
//   const average = adults.reduce((acc, cur) => acc + cur, 0)/adults.length

//   console.log(ages)
//   console.log(humanAges)
//   console.log(adults)
//   console.log(average)
// }

// calcAverageHumanAge(dogsAge)
// Challenge 3
// const calcAverageHumanAge2 = ages => {
//   const average = ages
//     .map(age => age <= 2 ? age * 2 : 16 + age * 4)
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0)

//   console.log(average)
// }
// calcAverageHumanAge2(dogsAge)

//Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1
console.log("--- 1 ---")
// dogs.map(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28, 2))
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
console.log(dogs)

// 2
console.log("--- 2 ---")
// const sarahDog = dogs.find(dog => dog.owners.find(owner => owner === "Sarah"))
const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"))
console.log(sarahDog)
if(sarahDog.curFood > (sarahDog.recommendedFood + sarahDog.recommendedFood * 0.1)){
  console.log("Eating too much")
}else if(sarahDog.curFood < (sarahDog.recommendedFood - sarahDog.recommendedFood * 0.1)){
  console.log("Eating too little")
}else{
  console.log("Eating the recommended portion")
}

// 3
console.log("--- 3 ---")
const tooLittle = dog =>  dog.recommendedFood * 0.9
const tooMuch = dog => dog.recommendedFood * 1.1
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > tooMuch(dog))
  .flatMap(dog => dog.owners)
console.log(ownersEatTooMuch)
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < tooLittle(dog))
  .flatMap(dog => dog.owners)
console.log(ownersEatTooLittle)

// 4
console.log("--- 4 ---")
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little`);

// 5
console.log("--- 5 ---")
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood))

// 6
console.log("--- 6 ---")
const okayAmount = dog => dog.curFood < tooMuch(dog) && dog.curFood > tooLittle(dog)
console.log(dogs.some(okayAmount))

// 7
console.log("--- 7 ---")
const okayDogs = dogs.find(dog => okayAmount(dog))
console.log(okayDogs)

// 8
console.log("--- 8 ---")
// const sortedDogs = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood)
// console.log(sortedDogs) 
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(dogsSorted)