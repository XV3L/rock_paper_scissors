// computerPlay() returns either 'Rock', 'Paper', or 'Scissors'.

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return 'Rock';
    }   else if (random === 1) {
            return 'Paper';
    }   else {
            return 'Scissors';
    }
}

// variables to hold scores

let playerScore = 0;
let computerScore = 0;

// playRound takes 2 parameters 'playerSelection' and 'computerSelection'.
// Determines the winner.

function playRound(playerSelection, computerSelection) {
    let choice = playerSelection.toUpperCase();
    computerSelection = computerPlay();
    if (choice === 'ROCK') {
        if (computerSelection === 'Scissors') {
            playerScore++;
            return 'You win! Rock beats Scissors.';
        }   else if (computerSelection === 'Paper') {
                computerScore++;
                return 'You lose! Paper beats Rock.';
        }   else if (computerSelection === 'Rock') {
                return 'Tie! You both chose Rock.';
        }
    }

        else if (choice === 'PAPER') {
            if (computerSelection === 'Rock') {
                playerScore++;
                return 'You win! Paper beats Rock.';
            }   else if (computerSelection === 'Scissors') {
                    computerScore++;
                    return 'You lose! Scissors beats Paper.';
            }   else if (computerSelection === 'Paper') {
                    return 'Tie! You both chose Paper.';
            }
        }
        else if (choice === 'SCISSORS') {
            if (computerSelection === 'Paper') {
                playerScore++;
                return 'You win! Scissors beats Paper.';
            }   else if (computerSelection === 'Rock') {
                    computerScore++;
                    return 'You lose! Rock beats Scissors.';
            }   else if (computerSelection === 'Scissors') {
                    return 'Tie! You both chose Scissors.';
            }
        }
        else {
            return 'Please enter a valid choice.';
        }

}


function game() {
    /*for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }*/
    if (playerScore > computerScore) {
        console.log(`You win! Your final score was ${playerScore} vs. the computers score of ${computerScore}.`);
    }   else if (computerScore > playerScore) {
            console.log(`You lose! Your final score was ${playerScore} vs. the computers score of ${computerScore}.`);
        }
        else {
            console.log(`Tie! Your final score was ${playerScore} vs. the computers score of ${computerScore}.`)
        }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const container = document.querySelector(".container");
        const result = document.createElement("div");
        result.classList.add("result");
        result.textContent = playRound(button.className, computerPlay());
        container.appendChild(result);
    })
});