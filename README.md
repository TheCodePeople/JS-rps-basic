# Rock, Paper, Scissors Game

## Description:
Welcome, aspiring programmers! In this project, you will have the opportunity to build a classic and fun JavaScript game - "Rock, Paper, Scissors."
The game is a hand game typically played between two participants, but you'll be building the computer as the opponent.

## Rules of the Game:
- Each player (you and the computer) will choose one of three options: "rock", "paper", or "scissors."
- **Rock beats scissors**, **scissors beat paper**, and **paper beats rock**.
- If both players choose the same option, it results in a tie, and the round is replayed.

## Task Objectives:
Your mission is to implement the Rock, Paper, Scissors game using JavaScript without a graphical user interface (UI). You'll create the logic to take the user's choice, generate a random choice for the computer, determine the winner for each round, display the results, and (Bonus: allow the user to play multiple rounds as bonus features).

## Instructions:
Follow the step-by-step instructions below to build the game from scratch using JavaScript:

### Step 1: Set Up the Game
1. Create a new HTML file (e.g., `index.html`) and a new JavaScript file (e.g., `game.js`).
2. Link the JavaScript file to your HTML file using the `<script>` tag.

### Step 2: Initialize the Game
1. In your `game.js` file, start by declaring an array called `choices`, which should contain the three options: "rock," "paper," and "scissors."

### Step 3: Get User's Choice with Validation 
1. Write a function named `getUserChoice()` to prompt the user to enter their choice.
2. Inside the function, use `prompt()` to ask the user to enter "rock," "paper," or "scissors."
3. Convert the user's input to lowercase and remove any extra spaces using `toLowerCase()` and `trim()`.
4. **(Bonus Point)** Validate the user's choice to ensure it is one of the valid options. If it's not valid, show an alert to the user indicating the invalid input. Allow the user to re-enter their choice until a valid one is provided (you can use a recursive call).

### Step 4: Generate Computer's Choice
1. Create a function called `getComputerChoice()` to generate a random choice for the computer.
2. Inside the function, use `Math.random()` and `Math.floor()` to generate a random index within the range of the `choices` array.
3. Return the randomly selected choice for the computer.

### Step 5: Determine the Winner
1. Implement a function named `determineWinner(userChoice, computerChoice)` to compare the user's choice and the computer's choice and determine the winner.
2. Apply the rules of the game to check for a tie and the winning combinations for the user.
3. Return the result of the round: either "It's a tie!", "Congratulations! You win!", or "Computer wins! Better luck next time."

### Step 6: Play the Game
1. Write a function called `playGame()` to handle the main game logic.
4. Call `getUserChoice()` to get the user's choice and store it in userChoice variable.
5. Call `getComputerChoice()` to get the computer's choice and store it in computerChoice variable.
6. Call `determineWinner(userChoice, computerChoice)` to find out who won the round and alert the result

## Step 7: Play the Game with Max Rounds **(Bonus Point)**
1. Write a function called `playGame()` to handle the main game logic.
2. Set a variable called `maxRound` to determine the maximum number of rounds the game will be played (you can start with 5 rounds).
3. Use a `while` loop to play the game until the maximum number of rounds is reached.
4. Inside the loop, call `getUserChoice()` to get the user's choice.
5. Call `getComputerChoice()` to get the computer's choice.
6. Call `determineWinner(userChoice, computerChoice)` to find out who won the round and display the result along with the remaining number of rounds.
7. Decrease the number of remaining rounds after each round.

### Step 7: Play Again Option **(Bonus Point)**
1. After completing all rounds, ask the user if they want to play again using `confirm()`.
2. If the user wants to play again, reset the number of rounds to the original value and start the game again (you can call the `playGame()` function).
3. If the user chooses not to play again, display a farewell message to end the game.

### Step 8: Start the Game
1. Call the `playGame()` function at the end of your `game.js` file to start the game.

## Conclusion:
You've just created a fully functional Rock, Paper, Scissors game using JavaScript! Congratulations on completing this project. Run your `index.html` file in your web browser and enjoy playing the game with the computer as your opponent. If you've implemented the bonus features, you have added extra interactivity and validation to enhance the game further. Have fun coding!
