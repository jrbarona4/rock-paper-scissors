let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const random = choice[Math.floor(Math.random() * choice.length)];
        return random;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You win, rock beats scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You win, scissors beats paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You win, paper beats rock";
    } else {
        computerScore++;
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (i = 0; i <= playerScore || computerScore; i++){
        if (playerScore === 5 || computerScore === 5) {
            console.log('Game Over');
            break;
        } else {
            console.log(playRound());
            console.log("Player: " + playerScore);
            console.log("Computer: " + computerScore);
        }
    }
}