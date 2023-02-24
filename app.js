let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choices = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*choices.length);
    return choices[random];

};

function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        console.log(`Round won! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        console.log(`Round loss! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`)
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log(`Draw: ${playerSelection} equals ${computerSelection}!`)
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        console.log(`Round won! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        console.log(`Round loss! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`)
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log(`Draw: ${playerSelection} equals ${computerSelection}!`)
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        console.log(`Round won! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        console.log(`Round loss! Player Choice: ${playerSelection} | Computer Choice: ${computerSelection}`)
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log(`Draw: ${playerSelection} equals ${computerSelection}!`)
    }

};

function game() {

        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);

    if (playerScore>computerScore) {
        console.log(`You win! Player Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else if (playerScore<computerScore) {
        console.log(`You lose! Player Score: ${playerScore} | Computer Score: ${computerScore}`)
    } else {console.log(`Draw! Player Score: ${playerScore} | Computer Score: ${computerScore}`)}

};

function winner() {
    if (playerScore > 4) {
        alert('You win! You won 5 rounds before the computer did :)')
    } else if (computerScore > 4) {
        alert('You lose! The computer won 5 rounds before you did :(')
    } else 'error'
};

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');

rock.addEventListener('click', () => {
    playRound('rock',getComputerChoice());
    results.textContent = ` Player score: ${playerScore} Computer score: ${computerScore}`;
    winner();
});

paper.addEventListener('click', () => {
    playRound('paper',getComputerChoice());
    results.textContent = ` Player score: ${playerScore} Computer score: ${computerScore}`;
    winner();
});

scissors.addEventListener('click', () => {
    playRound('scissors',getComputerChoice());
    results.textContent = ` Player score: ${playerScore} Computer score: ${computerScore}`;
    winner();
});

results.textContent = ` Player score: ${playerScore} Computer score: ${computerScore}`;

