const rock = 0

const paper = 1

const scissors = 2

const aNumber = (window.prompt("Rock...Paper...Scissors...SHOOT!", "0 = Rock, 1 = Paper 2 = Scissors"))

const humanSelection = getHumanChoice (playRound)
const computerSelection = getComputerChoice (playRound)

let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    const x = Math.floor(Math.random(0,2) * 3)
    if (x == 0) return ("rock")
    if (x == 1) return ("paper")
    if (x == 2) return ("scissors")
}
console.log(getComputerChoice(1))

function getHumanChoice (y) {
    if (y == 0) return ("rock")
    if (y == 1) return ("paper")
    if (y == 2) return ("scissors")
}
console.log(getHumanChoice(aNumber))

function playRound (computerSelection, humanSelection) {
    if (computerSelection == rock && humanSelection == paper) {humanScore++; return ("Paper beats rock! You win!")}
    if (computerSelection == paper && humanSelection == rock) {computerScore++; return ("Paper beats rock! You lose!")}
    if (computerSelection == rock && humanSelection == scissors) {computerScore++; return ("Rock beats scissors! You lose!")}
    if (computerSelection == scissors && humanSelection == rock) {humanScore++; return ("Rock beats scissors! You win!")}
    if (computerSelection == paper && humanSelection == scissors) {humanScore++; return ("Scissors beats paper! You win!")}
    if (computerSelection == scissors && humanSelection == paper) {computerScore++; return ("Scissors beats paper! You lose!")}
    if (computerSelection == rock && humanSelection == rock) return ("It's a tie!")
}

playRound (humanSelection, computerSelection);
console.log(humanScore)
console.log(computerScore)

function playGame(game) {
    if (humanScore == 5) return ("You win!")
    if (computerScore == 5) return ("You lose!")
    if (humanScore == 5 && computerScore == 5) return ("It's a tie!")
}