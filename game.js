function getComputerChoice() {
  const gameInput = ["rock", "paper", "scissors"];

  const computerChoice =
    gameInput[Math.floor(Math.random() * gameInput.length)].trim();
  return computerChoice;
}

function getUserInput(gameInput) {
  const userChoice = prompt(
    "please enter your choice(rock, paper, or scissors) "
  ).toLocaleLowerCase();
  if (userChoice === gameInput) {
    return userChoice;
  } else {
    alert("invalid input");
    playGame();
  }
}

function determineWinner(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    console.log(
      `congratulations your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
    return true;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    console.log(
      `congratulations your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
    return true;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    console.log(
      `hehehe you lose your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    console.log(
      `hehehe you lose your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    console.log(
      `congratulations your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
    return true;
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    console.log(
      `hehehe you lose your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    console.log(
      `congratulations your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
    return true;
  }
}
function playGame() {
  const userInput = getUserInput(getComputerChoice());
  const computerInput = getComputerChoice();
  console.log(computerInput);

  determineWinner(userInput, computerInput);
}
playGame();
