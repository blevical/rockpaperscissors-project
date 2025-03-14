const rock = 0

const paper = 1

const scissors = 2

function getComputerChoice (x) {
    return Math.floor(Math.random() * x);
}
console.log(getComputerChoice(3))

prompt (rock, 0)
prompt (paper, 1)
prompt (scissors, 2)

function getHumanChoice (y) {
    return prompt(y)
}
console.log(getHumanChoice(3))