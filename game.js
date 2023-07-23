const choices = ["rock", "paper", "scissors"];
let maxRound = 5;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
  let userChoice = prompt(
    "Please enter one of the following choices: rock, paper, or scissors"
  )
    .toLowerCase()
    .trim();

  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    alert("Hey hey, you entered an invalid input. Please try again.");
    return getUserChoice(); // Recursive call to prompt user again until valid choice is entered
  }

  return userChoice;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Congratulations! You win!";
  } else {
    return "Computer wins! Better luck next time.";
  }
}

function playGame() {
  while (maxRound > 0) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    alert(
      `${determineWinner(
        userChoice,
        computerChoice
      )}, only ${maxRound} round left`
    );

    maxRound--;
  }

  if (
    confirm(
      `You have completed all ${maxRound} rounds. Would you like to play again?  `
    )
  ) {
    maxRound = 5;
    playGame();
  } else {
    alert("Thanks for playing! Have a great day!");
  }
}

playGame();
