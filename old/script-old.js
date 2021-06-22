function computerPlay() {
    let rand = Math.random();
    upperLimit = 2 / 3;
    lowerLimit = 1 / 3;
    if (rand <= lowerLimit) {
        return "rock";
    }
    else if (rand > lowerLimit && rand <= upperLimit) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" || 
    computerSelection == "paper" && playerSelection == "rock" || 
    computerSelection == "scissors" && playerSelection == "paper") {
        return false;
    }
    else {
        return true;
    }
}

function game () {
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);

    while (playerScore < 3 && computerScore < 3) {
        computerSelection = computerPlay();
        playerSelection = prompt("Choose your fighter:").toLowerCase();

        result = playRound(computerSelection, playerSelection);

        if (result == true) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }

        else if (result == false) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
            computerScore++;
        }

        else {
            console.log(`Tie! You both selected ${computerSelection}`)
        }

        console.log(`The score is player: ${playerScore}, computer: ${computerScore}`);
    }

    if (playerScore == 3) {
        console.log(`Congratulations! You win ${playerScore}-${computerScore}.`);
    }

    else {
        console.log(`The computer won ${computerScore}-${playerScore}. Better luck next time!`);
    }
}

game()