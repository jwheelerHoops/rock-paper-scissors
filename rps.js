let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice
    let value = Math.random()

    if (value <= 0.33) {
        choice = "ROCK";
    } else if (value > 0.33 && value < 0.66) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }

    return(choice)
}

function getHumanChoice() {
    let choice = prompt("Enter your selection of 'Rock', 'Paper' or 'Scisscors': ")

    return(choice.toUpperCase())
}

function playRound(humanChoice, computerChoice) {
    let result;

    switch(humanChoice) {
        case "ROCK":
            if (computerChoice == "ROCK") {
                result = "Tie! Choose again!";
            } else if (computerChoice == "PAPER") {
                result = "You lose! Paper beats Rock!";
                computerScore++
            } else {
                result = "You win! Rock beats Scissors!";
                humanScore++
            }
            break;
        case "PAPER":
            if (computerChoice == "ROCK") {
                result = "You win! Paper beats Rock!";
                humanScore++
            } else if (computerChoice == "PAPER") {
                result = "Tie! Choose again!";
            } else {
                result = "You lose! Scissors beats Paper!";
                computerScore++
            }
            break;
        case "SCISSORS":
            if (computerChoice == "ROCK") {
                result = "You lose! Rock beats Scissors!";
                computerScore++
            } else if (computerChoice == "PAPER") {
                result = "You win! Scissors beats Paper!";
                humanScore++
            } else {
                result = "Tie! Choose again!";
            }
            break; 
    }

    return(result)
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        roundResult = playRound(getHumanChoice(), getComputerChoice())
        console.log(roundResult)
    }

    if (humanScore < computerScore) {
        result = "Computer Wins: " + computerScore + "-" + humanScore
    } else if (humanScore > computerScore) {
        result = "You Win: " + humanScore + "-" + computerScore
    } else {
        result = "Tied: " + humanScore + "-" + computerScore
    }

    return(result)
}

gameResult = playGame()

console.log(gameResult)