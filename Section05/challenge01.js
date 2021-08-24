const data1 = [17,21,23]
const data2 = [12, 5, -5, 0, 4]

const printForecast = (arr) => {
    let forecast = ""
    for(i= 0; i < arr.length; i++){
        forecast += `... ${arr[i]}ºC in ${i + 1} days `
    }
    return forecast
}

console.log(printForecast(data1) + "...")
console.log(printForecast(data2) + "...")