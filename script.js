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

function updateScore(result) {
    if (playerScore === 3) document.querySelector('.scores').innerHTML = `You win ${playerScore} - ${computerScore}`
    else if (computerScore === 3) document.querySelector('.scores').innerHTML = `You lose ${playerScore} - ${computerScore}`
    else {
        if (result === false) computerScore++;
        else if (result === true) playerScore++;
        document.querySelector('#you').innerHTML = `You: ${playerScore}`;
        document.querySelector('#computer').innerHTML = `Computer: ${computerScore}`;
    }
}
function playRound (e) {

    playerSelection = e.path[1].id;
    computerSelection = computerPlay();
    if (computerSelection == playerSelection) {
        console.log('tie')
    }
    else if (computerSelection == "rock" && playerSelection == "scissors" || 
    computerSelection == "paper" && playerSelection == "rock" || 
    computerSelection == "scissors" && playerSelection == "paper") {
        console.log('you lose');
        updateScore(false);
        
        
    }
    else {
        console.log('you win')
        updateScore(true);
        
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);
updateScore();
const weapons = document.querySelectorAll('.weapon');
console.log(weapons)
weapons.forEach(weapon => weapon.addEventListener('click', playRound));