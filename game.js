// An array of possible choices for the game "rock, paper, scissors"
const choices = ["rock", "paper", "scissors"];

// The maximum number of rounds the game will be played
let maxRound = 5;

// Function to get a random choice for the computer
function getComputerChoice() {
  // Generate a random index within the range of choices array
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to prompt the user for their choice and validate it
function getUserChoice() {
  // Prompt the user to enter their choice and convert it to lowercase while removing extra spaces
  let userChoice = prompt(
    "Please enter one of the following choices: rock, paper, or scissors"
  )
    .toLowerCase()
    .trim();

  // Check if the user's choice is valid; if not, prompt the user again until a valid choice is entered (recursive call)
  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    // Show an alert indicating the invalid input
    alert("Hey hey, you entered an invalid input. Please try again.");
    // Recursively call the function to prompt the user again
    return getUserChoice();
  }

  // Return the valid user choice
  return userChoice;
}

// Function to determine the winner based on user's and computer's choices
function determineWinner(userChoice, computerChoice) {
  // Check for a tie first
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    // Check all the possible winning combinations for the user
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Congratulations! You win!";
  } else {
    // If none of the above conditions are met, then the computer wins
    return "Computer wins! Better luck next time.";
  }
}

// Function to play the game
function playGame() {
  // Loop to play the game until the maximum number of rounds is reached
  while (maxRound > 0) {
    // Get the user's choice
    const userChoice = getUserChoice();
    // Get the computer's choice
    const computerChoice = getComputerChoice();

    // Determine the winner and display the result along with the remaining number of rounds
    alert(
      `${determineWinner(
        userChoice,
        computerChoice
      )}, only ${maxRound} round left`
    );

    // Decrease the number of remaining rounds
    maxRound--;
  }

  // After completing all rounds, ask the user if they want to play again
  if (
    confirm(
      `You have completed all ${maxRound} rounds. Would you like to play again?  `
    )
  ) {
    // If the user wants to play again, reset the number of rounds to the original value and start the game again
    maxRound = 5;
    playGame();
  } else {
    // If the user doesn't want to play again, show a farewell message
    alert("Thanks for playing! Have a great day!");
  }
}

// Start the game by calling the playGame function
playGame();
