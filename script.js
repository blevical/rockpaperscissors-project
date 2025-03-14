const rock = 0

const paper = 1

const scissors = 2

const aNumber = (window.prompt("Rock...Paper...Scissors...SHOOT!", "0 = Rock, 1 = Paper 2 = Scissors"))

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice

let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let x = Math.floor(Math.random(0,2) * 3)
    if (x == 0) return ("rock")
    if (x == 1) return ("paper")
    if (x == 2) return ("scissors")
}
console.log(getComputerChoice(3))

function getHumanChoice (y) {
    if (y == 0) return ("rock")
    if (y == 1) return ("paper")
    if (y == 2) return ("scissors")
}
console.log(getHumanChoice(aNumber))

function playRound (humanChoice, getComputerChoice) {
}

function playGame(game) {

}