function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const random = choice[Math.floor(Math.random() * choice.length)];
        return random;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper, scissors");
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win, rock beats scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win, scissors beats paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win, paper beats rock";
    } else {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }

}