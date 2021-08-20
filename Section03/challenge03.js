const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        return this.bmi = this.mass/(this.height**2)
    }
}
const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function(){
        return this.bmi = this.mass/(this.height**2)
    }
}

if(mark.calcBmi() > john.calcBmi()){
    console.log(`${mark.firstName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.firstName}'s (${john.bmi.toFixed(2)}))`)
}else{
    console.log(`${john.firstName}'s BMI (${john.bmi.toFixed(2)} is higher than ${mark.name}'s (${mark.bmi.toFixed(2)}))`) 
}