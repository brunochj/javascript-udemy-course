const bill = 275
// const bill = 40
// const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalBill = bill + tip

console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${totalBill}`)