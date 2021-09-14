'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMessage("No number")
    } else if (guess === secretNumber) {
        let currentHighScore = document.querySelector('.highscore').textContent
        document.querySelector('body').style.backgroundColor = "#60b347"
        displayMessage("Correct Number")
        document.querySelector('.number').textContent = guess
        document.querySelector('.number').style.width = "30rem"
        if (currentHighScore < score) document.querySelector('.highscore').textContent = score

    } else if (guess != secretNumber) {
        if (score > 1) {
            (guess < secretNumber) 
                ? displayMessage("Too Low")
                : displayMessage("Too High")
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage("You Lost the Game")
            ocument.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?"
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ""
    document.querySelector('.number').style.width = "15rem"
})