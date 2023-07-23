const   gameTools = ["rock" , "paper",  "scissors"]
const randomIndex = Math.floor(Math.random() * gameTools.length);
const randomTool = gameTools[randomIndex]
console.log(randomTool);

let userWin = 0;
let compWin = 0;
for (let i = 1; i<=3; i++){
    const userEnter = prompt("Enter rock or paper or scissors");

if (userEnter == randomTool) {
    console.log("=")
}else if ((userEnter == "rock" && randomTool == "scissors") || (userEnter == "scissors" && randomTool == "paper") ||  (userEnter == "paper" && randomTool == "rock")) {
    userWin++;
    console.log("user win");

}else{
    console.log("Computer win");
    compWin++
}
}
console.log(compWin);
console.log(userWin);

const   gameTools = ["rock" , "paper",  "scissors"]
const randomIndex = Math.floor(Math.random() * gameTools.length);
const randomTool = gameTools[randomIndex]
console.log(randomTool);

let userWin = 0;
let compWin = 0;
for (let i = 1; i<=3; i++){
    const userEnter = prompt("Enter rock or paper or scissors");

if (userEnter == randomTool) {
    console.log("=")
}else if ((userEnter == "rock" && randomTool == "scissors") || (userEnter == "scissors" && randomTool == "paper") ||  (userEnter == "paper" && randomTool == "rock")) {
    userWin++;
    console.log("user win");

}else{
    console.log("Computer win");
    compWin++
}
}
console.log(compWin);
console.log(userWin);

