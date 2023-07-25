const gameInput = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const computerChoice =
    gameInput[Math.floor(Math.random() * gameInput.length)].trim();
  return computerChoice;
}

function getUserInput(gameInput) {
  const userChoice = prompt(
    "please enter your choice(rock, paper, or scissors) "
  ).toLocaleLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    alert("invalid input Please try again.");
    return getUserInput();
  }
}

function determineWinner(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    console.log(
      `tie your choice is ${userChoice} and the computer choice is ${computerChoice}`
    );
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
  let roundConst = 1;
  let roundMax = 5;
  let winConst = 0;
  let winAvailable = 5;
  while (roundConst <= roundMax) {
    const computerInput = getComputerChoice();
    const userInput = getUserInput();
    console.log(computerInput);
    const howWin = determineWinner(userInput, computerInput);
    winAvailable--;
    roundConst++;
    if (howWin == true) {
      winConst++;
    }
    console.log(
      `your win is ${winConst} of ${roundMax} you have ${winAvailable} try`
    );
  }
  const okPlayAgine = confirm("you want to paly more ?");
  if (okPlayAgine === true) {
    playGame();
  } else {
    alert("hope our game happy you :)");
    console.log(`hope our game happy you :) `);
  }
}
playGame();
