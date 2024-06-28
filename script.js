let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random();
    if (x < 0.3) {
        return "ROCK";
    } else if (x < 0.6) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(humanChoice, computerChoice) {
    const loseMessages = {
        "ROCK": "You lose! Rock beats Scissors",
        "SCISSORS": "You lose! Scissors beat Paper",
        "PAPER": "You lose! Paper beats Rock"
    };
    const winMessage = "You Win!!";

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
        return winMessage;
    } else if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else {
        computerScore++;
        return loseMessages[humanChoice];
    }
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    const finalResultDiv = document.getElementById("final-result");
    if (humanScore === 5) {
        finalResultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        finalResultDiv.textContent = "Sorry! The computer won the game.";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById("results").innerHTML = "";
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound(humanChoice, computerChoice);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Your move: ${humanChoice}</p>
        <p>Computer's move: ${computerChoice}</p>
        <p>${resultMessage}</p>
    `;

    updateScore();
    checkWinner();
}

// Add event listeners to the buttons
document.querySelectorAll("#contain button").forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});






