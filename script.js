const rock = 0

const paper = 1

const scissors = 2

const choices = (window.prompt("Rock...Paper...Scissors...SHOOT!"))

const humanSelection = getHumanChoice
const computerSelection = getComputerChoice

let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3)
    if (x == 0) return ("rock")
    if (x == 1) return ("paper")
    if (x == 2) return ("scissors")
}
console.log(getComputerChoice(1))

function getHumanChoice (y) {
    if (y == "rock") return ("rock")
    if (y == "paper") return ("paper")
    if (y == "scissors") return ("scissors")
}
console.log(getHumanChoice(choices))

function playRound (computerSelection, humanSelection) {
    if (computerSelection === "rock" && humanSelection === "paper") {humanScore++; return "Paper beats rock! You win!";}
    if (computerSelection === "paper" && humanSelection === "rock") {computerScore++; return "Paper beats rock! You lose!";}
    if (computerSelection === "rock" && humanSelection === "scissors") {computerScore++; return "Rock beats scissors! You lose!";}
    if (computerSelection === "scissors" && humanSelection === "rock") {humanScore++; return "Rock beats scissors! You win!";}
    if (computerSelection === "paper" && humanSelection === "scissors") {humanScore++; return "Scissors beats paper! You win!";}
    if (computerSelection === "scissors" && humanSelection === "paper") {computerScore++; return "Scissors beats paper! You lose!";}
    if (computerSelection === "rock" && humanSelection === "rock") return ("It's a tie!")
    if (computerSelection === "paper" && humanSelection === "paper") return ("It's a tie!")
    if (computerSelection === "scissors" && humanSelection === "scissors") return ("It's a tie!")
}

playRound (humanSelection, computerSelection);
console.log(humanScore)
console.log(computerScore)

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const choices = (window.prompt("Rock...Paper...Scissors...SHOOT!"));
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(choices);

        if (humanSelection === null) {
            alert("Invalid input. Please enter rock, paper, or scissors.");
            continue;
        }

        const result = playRound(computerSelection, humanSelection);
        console.log(result);
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
    }

    if (humanScore === 5) alert("You win!");
    else alert("You lose!");
}

playGame();