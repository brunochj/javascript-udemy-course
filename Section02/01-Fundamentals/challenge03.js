// const dolphinsScore = (96 + 108 + 96)/3
// const koalaScore = (88 + 91 + 110)/3
const dolphinsScore = (97 + 112 + 101)/3
const koalaScore = (10 + 95 + 123)/3
// const dolphinsScore = (97 + 112 + 101)/3
// const koalaScore = (109 + 95 + 106)/3
const minScore = 100

if(dolphinsScore > koalaScore && dolphinsScore >= minScore){
    console.log(`Dolphins win with ${dolphinsScore}`)
}else if(dolphinsScore > koalaScore && dolphinsScore < minScore){
    console.log("Dolphins didn't reach the minimum score")
}else if(dolphinsScore < koalaScore && koalaScore >= minScore){
    console.log(`Koalas win with ${koalaScore}`)
}else if(dolphinsScore < koalaScore && koalaScore < minScore){
    console.log("Koalas didn't reach the minimum score")
}else if(dolphinsScore === koalaScore && dolphinsScore >= minScore){
    console.log("It's a tie")
}else{
    console.log("Neither teams reached the minimum score")
}