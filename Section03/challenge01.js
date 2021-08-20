const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
const checkWinner = (avgKoalas, avgDolphins) => {
    if(avgKoalas >= (avgDolphins*2)){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`
    }else if(avgDolphins >= (avgKoalas*2)){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    }else{
        return "Nobody won"
    }
}

const dolphinsScore = calcAverage(85,54,41)
const koalaScore = calcAverage(23,34,27)
console.log("dolphinsScore", dolphinsScore)
console.log("koalaScore", koalaScore)
console.log(checkWinner(koalaScore, dolphinsScore))
