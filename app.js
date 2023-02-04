let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];

} 

function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return `Round won! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return `Round loss! Player Choice: ${computerSelection} | Computer Choice: ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return `Draw: ${computerSelection} equals ${playerSelection}!`
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return `Round won! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return `Round loss! Player Choice: ${computerSelection} | Computer Choice: ${playerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `Draw: ${computerSelection} equals ${playerSelection}!`
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return `Round won! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return `Round loss! Player Choice: ${computerSelection} | Computer Choice: ${playerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `Draw: ${computerSelection} equals ${playerSelection}!`
    }

}

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }

    if (playerScore>computerScore) {
        console.log(`You win! Player Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else if (playerScore<computerScore) {
        console.log(`You lose! Player Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else {console.log(`Draw! Player Score: ${playerScore} | Computer Score: ${computerScore}`)}

}

game();