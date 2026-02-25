let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Randomly returns either rock, paper, or scissors
    let random = Math.floor(Math.random() * 3);
    
    if (random == 0) {
        return 'Rock';
    }
    else if (random == 1) {
        return 'Paper';
    }
    else if (random == 2) {
        return 'Scissors';
    }
}

function getHumanChoice () {
    let choice = prompt('Pick rock, paper, or scissors: ');
    console.log(choice);

    // Check if the user entered a valid choice.
    while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
        choice = prompt('Please choose either rock, paper, or scissors: ');
    }

    if (choice.toLowerCase() == 'rock') {
        return 'Rock';
    }
    else if (choice.toLowerCase() == 'paper') {
        return 'Paper';
    }
    else if (choice.toLowerCase() == 'scissors') {
        return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        humanScore++;
        return 'You win! Rock beats Scissors.';
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock.';
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors.';
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        humanScore++;
        return 'You Win! Scissors beats Paper.';
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        humanScore++;
        return 'You Win! Paper beats Rock.';
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper.';
    }
    else {
        return 'Tie! No one wins.';
    }
}

getComputerChoice();
getHumanChoice();