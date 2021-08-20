const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
calcTip(100)
const calcTotal = (bill) => bill + calcTip(bill)
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [calcTotal(bills[0]), calcTotal(bills[1]), calcTotal(bills[2])]

console.log(bills)
console.log(tips)
console.log(totals)

const jonas = {
    birthYear: 1991,
    firstName: "Jonas",
    lastName: "Schmedtman",
    friends: ["Michael", "Peter", "Steven"],
    job: "teacher",
    location: "Portugal",
    twitter: "@jonasschmedtman",
    hasDriversLicense: false,
    calcAge: function (){
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he ${this.hasDriversLicense ? "has" : "doesn't have"} a driver's license`
    }
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
console.log(jonas.getSummary())