let humanScore = 0
let computerScore = 0
let round = 1

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

function logGameResult(result) {
    const gameResults = document.getElementById("game-results");

    const gameLog = document.createElement("li");
    gameLog.textContent = "Round " + round + ": " + result;

    gameResults.appendChild(gameLog);
}

function displayScore(humanScore, computerScore) {
    const score = humanScore + "-" + computerScore;

    const scoreHeading = document.getElementById("current-score");
    scoreHeading.textContent = "";
    scoreHeading.textContent = score;

    if (humanScore == 5 || computerScore == 5) {
        displayResults(humanScore, computerScore)
    }
}

function displayResults(humanScore, computerScore) {
    if (humanScore < computerScore) {
        result = "Computer Wins: " + computerScore + "-" + humanScore
    } else if (humanScore > computerScore) {
        result = "You Win: " + humanScore + "-" + computerScore
    }

    const resultsDiv = document.getElementById("results")

    const postGame = document.createElement("div");
    postGame.setAttribute("id", "post-game");
    postGame.textContent = result;

    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("id", "reset-button");
    resetBtn.textContent = "Reset Game";

    postGame.appendChild(resetBtn);
    resultsDiv.appendChild(postGame);

    resetBtn.addEventListener("click", () => {
        resetGame();
    })
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 1;

    const scoreHeading = document.getElementById("current-score");
    scoreHeading.textContent = "";

    const gameResults = document.getElementById("game-results");
    while (gameResults.lastElementChild) {
        gameResults.removeChild(gameResults.lastElementChild);
    }

    const postGame = document.getElementById("post-game");
    postGame.remove();
}

const buttons = document.querySelectorAll("button.human-choice");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("id").toUpperCase();
        const computerChoice = getComputerChoice();

        if (humanScore < 5 && computerScore < 5) {
            logGameResult(playRound(playerChoice, computerChoice));
            displayScore(humanScore, computerScore);
            round++
        };
    })
})