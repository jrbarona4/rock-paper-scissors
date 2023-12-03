let playerScore = 0;
let computerScore = 0;
let rounds = 0;

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
        rounds++;
        playerScore++;
        return "You win, rock beats scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        rounds++;
        playerScore++;
        return "You win, scissors beats paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        rounds--;
        playerScore++;
        return "You win, paper beats rock";
    } else {
        rounds--;
        computerScore++;
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }

}

function game() {
    for (i = 0; i <= rounds; i++) {
        if (playerScore === 5){
        return 'Player Wins';
        } else if (computerScore === 5) {
        return 'Computer Wins';
        } else {
            playRound();
        }
    }
}