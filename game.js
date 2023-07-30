const choices = ["rock", "paper", "scissors"];
let round = 1;
let userChoice = null;

const startGame = () => {
  document.querySelector(".header").style.display = "none";
  document.querySelector(".game").style.display = "flex";
};

const getComputerChoice = () => {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "rock") {
      return computerChoice === "paper" ? "Computer wins! Better luck next time." : "Congratulations! You win!";
    } else if (userChoice === "paper") {
      return computerChoice === "scissors" ? "Computer wins! Better luck next time." : "Congratulations! You win!";
    } else if (userChoice === "scissors") {
      return computerChoice === "rock" ? "Computer wins! Better luck next time." : "Congratulations! You win!";
    }
  };

  const updateUI = (userChoice, computerChoice, result) => {
    document.querySelector(".user .choice").innerHTML = `<i class="fas fa-hand-${userChoice}"></i>`;
    document.querySelector(".computer .choice").innerHTML = `<i class="fas fa-hand-${computerChoice}"></i>`;
    document.querySelector(".round").textContent = `Round ${round}`;
    document.querySelector(".outcome").textContent = result;

    // Show the divs after the choices are displayed
    document.querySelector(".user").style.display = "block";
    document.querySelector(".computer").style.display = "block";
  };

  const playRound = (choice) => {
    userChoice = choice;
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    updateUI(userChoice, computerChoice, result);
    round++;

    if (round > 5) {
      document.querySelector(".game").style.display = "none";
      document.querySelector(".result").style.display = "block";
    }
  };

  const playGame = () => {
    round = 1;
    userChoice = null; // Reset the userChoice at the beginning of each game
    document.querySelector(".header").style.display = "block";
    document.querySelector(".game").style.display = "none";
    document.querySelector(".result").style.display = "none";

    // Hide the user and computer divs at the start of the game
    document.querySelector(".user").style.display = "none";
    document.querySelector(".computer").style.display = "none";

    document.querySelector(".round").textContent = "Round 1";
    document.querySelector(".outcome").textContent = "---";
  };


playGame();
