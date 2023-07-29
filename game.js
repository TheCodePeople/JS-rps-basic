const games = ["rock", "paper", "scissors"];

getUserChoice = () => {
    let userChoice = prompt("Please enter your choice: rock, paper or scissors").toLowerCase().trim();
    if (games.includes(userChoice)) {
        return userChoice;
    } else {
        console.log("Invalid input. Please try again.");
        return getUserChoice();
    }
}

getComputerChoice = () => {
    let computerChoice = games[Math.floor(Math.random() * games.length)];
    return computerChoice;
}

determineWinner = (user, computer) => {
    if (user === computer) {
        return "It's a tie!";
    } else if (user === "rock") {
        if (computer === "paper") {
            return "Computer wins";
        } else {
            return " user win!";
        }
    } else if (user === "paper") {
        if (computer === "scissors") {
            return "opssss.. Computer wins";
        } else {
            return "heeeeeee You win!";
        }
    } else if (user === "scissors") {
        if (computer === "rock") {
            return "Computer wins";
        } else {
            return " You win!";
        }
    }
}

playGame = () => {
    let maxRound = 5;
    let round = 1;
    while (round <= maxRound) {
        let user = getUserChoice();
        let computer = getComputerChoice();
        let result = determineWinner(user, computer);
        // alert(`Round ${round}: ${result}`);
        console.log("Round" + round +" " + result +" ");
        round++;
    }
    let playAgain = confirm("play again?");
    if (playAgain) {
        playGame();
    } else {
        console.log("good bayyyyyyyyy");
    }
}

playGame();