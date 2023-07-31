const ScoreNum = document.querySelector(".score-number")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const Scissors = document.querySelector(".scissors")
const gameTool = document.querySelector(".rock", ".paper", ".scissors")
const p = document.querySelector(".who-is-win")
const gameTools = ["✊", "✋", "✌️"]
const randomIndex = Math.floor(Math.random() * gameTools.length);
const randomTool = gameTools[randomIndex]


let userWin = 0;
let compWin = 0;


rock.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * gameTools.length);
    const randomTool = gameTools[randomIndex]
    console.log(randomTool);
    if (randomTool == "✌️") {
        userWin++;
        p.textContent = "User win"
    } else if (randomTool == "✋") {
        compWin++;
        p.textContent = "Computer win"
    } else if (randomTool == "✊") {
        p.textContent = "="
    }
    ScoreNum.textContent = `Computer Win , ${compWin},  User Win, ${userWin}`;
});
paper.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * gameTools.length);
    const randomTool = gameTools[randomIndex]
    console.log(randomTool);
    if (randomTool == "✌️") {
        compWin++;
        p.textContent = "Computer win"
    } else if (randomTool == "✋") {
        p.textContent = "="
    } else if (randomTool == "✊") {
        userWin++;
        p.textContent = "User win"
    }
    ScoreNum.textContent = `Computer Win , ${compWin},  User Win, ${userWin}`;
});
Scissors.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * gameTools.length);
    const randomTool = gameTools[randomIndex]
    console.log(randomTool);
    if (randomTool == "✌️") {
        p.textContent = "="
    } else if (randomTool == "✋") {
        userWin++;
        p.textContent = "User win"
    } else if (randomTool == "✊") {
        compWin++;
        p.textContent = "Computer win"
    }
    ScoreNum.textContent = `Computer Win , ${compWin},  User Win, ${userWin}`;
});
if (p.length > 0) {
    p.innerText = " "
}