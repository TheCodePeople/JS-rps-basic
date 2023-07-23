const choices = ["rock", "paper", "scissors"];

getUserChoice = () => {
    let userChoice = prompt("Please enter your choice: rock, paper or scissors").toLowerCase().trim();
    if (choices.includes(userChoice)) {
        return userChoice;
    } else {
        alert("Invalid input. Please try again.");
        return getUserChoice();
    }
}

getComputerChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins! Better luck next time.";
        } else {
            return "Congratulations! You win!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins! Better luck next time.";
        } else {
            return "Congratulations! You win!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins! Better luck next time.";
        } else {
            return "Congratulations! You win!";
        }
    }
}

playGame = () => {
    let maxRound = 5;
    let round = 1;
    while (round <= maxRound) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let result = determineWinner(userChoice, computerChoice);
        alert(`Round ${round}: ${result}`);
        round++;
    }
    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Thank you for playing!");
    }
}

playGame();
