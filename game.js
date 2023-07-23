let choices=["rock","paper","scissors"];
function getUserChoice()
{
    do
    {
        choice=prompt("Enter Your Chice \n1- Rock\n2- Paper\n3- Scissors");
    }while(choices.includes(choice) == false)
    choice=choice.trim();
    choice.toLowerCase();
    return choice;
}
function getComputerChoice()
{
    let random_number=Math.floor(Math.random()*choices.length);
    return choices[random_number];
}
function determineWinner(userChoice, computerChoice)
{
    let winner;
alert(`Computer --->${computerChoice}\nYou--->${userChoice}`);
    switch (userChoice)
    {
        case choices[0]:
            switch (computerChoice)
            {
                case choices[0]:
                    winner="Equal";
                    break;
                case choices[1]:
                    winner="Computer";
                    break;
                case choices[2]:
                    winner="You";
                    break;
            }
            break;
        case choices[1]:
            switch (computerChoice)
            {
                case choices[0]:
                    winner="You";
                    break;
                case choices[1]:
                    winner="Equal";
                    break;
                case choices[2]:
                    winner="Computer";
                    break;
            }
            break;
        case choices[2]:
        switch (computerChoice)
        {
            case choices[0]:
                console.log("Computer wins! Better luck next time.");
                winner="Computer";
                break;
            case choices[1]:
                console.log("It's a tie!", "Congratulations! You win!");
                winner="You";
                break;
            case choices[2]:
                winner="Equal";
                break;
        }
        break;
        default:
            alert("what");
    }
    return winner;
}
function playGame()
{
    let maxRound=5;
    let playerScore=0;
    let ComputerScore=0;
    let replay=false;
    for(let i=0;i<maxRound;++i)
    {
        if(determineWinner( getUserChoice() , getComputerChoice() ) == "You")
        {
            playerScore++;
        }else if(determineWinner( getUserChoice() , getComputerChoice() ) == "Computer")
        {
            ComputerScore++;
        }
    }
    if(playerScore>ComputerScore)
    {
        alert("The Winner is : " + "You \nYour Score is : "+playerScore);

    }else if(ComputerScore>playerScore)
    {
        alert("The Winner is : " + "Computer \nYour Score is : "+ComputerScore);
    }
    replay=confirm("Play Again ???");
    if(replay == true) 
    {
        playGame();
    }else
    {
        alert("Bye Bye");
    }
}
playGame();

