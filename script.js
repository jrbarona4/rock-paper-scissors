let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    function game(rounds) {
        for (i = 1; i <= rounds; i++) {
            determineWinner();
        }
    }
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == computerSelection) {
            rounds++;
            return "Tie!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            rounds++;
            playerScore++;
            return "You win! Rock beats scissors.";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            rounds++;
            playerScore++;
            return "You win! Paper beats Rock.";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            rounds++;
            playerScore++;
            return "You win! Scissors beat Paper.";
        } else {
            computerScore++;
            rounds++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
     }
        function determineWinner() {
            const computerSelection= getComputerChoice();
            let playerSelection = prompt("Rock, Paper, Scissors?");
            console.log("Computer choice: ", computerSelection);
            const result = playRound(playerSelection, computerSelection);
            console.log(result);
            console.log("Score - Player: ", playerScore, "Computer: ", computerScore);
            console.log("Rounds: ", rounds);
        }