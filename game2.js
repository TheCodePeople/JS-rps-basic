let game={
    welcome_text:"*****Welcom To*****\nRock Paper Scissors Game",
    user_choice:undefined,
    computer_choice:undefined,
    user_score:0,
    computer_score:0,
    play_again:false,
    round_max_number:5,
    winner_round:undefined,
     //0---> tie
    //1---> user
    //2---> computer
    winner_final:undefined,
    //0---> tie
    //1---> user
    //2---> computer


    choices:["rock","paper","scissors"],
    welocme:function(){
        let choices=this.choices.join("\n");
        alert(this.welcome_text+"\nPlease Select One Of The Following Or Just The Number\n"+choices);
    },
    getUserChoice:function(){
        let input=false;
        do{
                input=prompt("Enter Your Choice (Either Number Or Word)\n**************************************************\n1 ---> ROCK\n2 ---> PAPER\n3 ---> SCISSORS");
                if(parseInt(input) >0 && parseInt(input) <4)
                {
                    switch (parseInt(input))
                {
                    case 1 :
                        input="rock";
                        break;
                    case 2 :
                        input="paper";
                        break;
                    case 3 : 
                    input = "scissors";
                    break;
                }
                    this.user_choice=input;
                    return input;
                }
                
        }while(this.choices.includes(input)==false && (parseInt(input) != 1 && parseInt(input) != 2 && parseInt(input) != 3 ));
        input.trim();
        input.toLowerCase();
        this.user_choice=input;
        return input;
    },
    getComputerChoice:function(){
        let input;
        input=Math.floor(Math.random() * this.choices.length);
        this.computer_choice=this.choices[input];
        return this.choices[input];
    },
    selectWinnerInEachRound:function(user_c, computer_c){
        switch (user_c)
        {
            //case ---> rock
            case this.choices[0] :
                switch (computer_c)
                {
                    //compare user(rock) and computer(rock)
                    case this.choices[0] :
                        this.winner_round=0;
                        break;
                    //compare user(rock) and computer(paper)
                    case this.choices[1] :
                        this.winner_round=2;
                        this.computer_score++;
                        break;
                    //compare user(rock) and computer(scissors)
                    case this.choices[2] :
                        this.winner_round=1;
                        this.user_score++;
                        break;
                }
                break;
            //case ---> paper
            case this.choices[1] :
                switch (computer_c)
                {
                    //compare user(paper) and computer(rock)
                    case this.choices[0] :
                        this.winner_round=1;
                        this.user_score++;
                        break;
                    //compare user(paper) and computer(paper)
                    case this.choices[1] :
                        this.winner_round=0;
                        break;
                    //compare user(paper) and computer(scissors)
                    case this.choices[2] :
                        this.winner_round=2;
                        this.computer_score++;
                        break;
                }
                break;
                //case ---> scissors
                case this.choices[2] :
                    switch (computer_c)
                    {
                        //compare user(scissors) and computer(rock)
                        case this.choices[0] :
                            this.winner_round=2;
                            this.computer_score++;
                            break;
                        //compare user(scissors) and computer(paper)
                        case this.choices[1] :
                            this.winner_round=1;
                            this.user_score++;
                            break;
                        //compare user(scissors) and computer(scissors)
                        case this.choices[2] :
                            this.winner_round=0;
                            break;
                    }
                    break;
            default:
                alert("!!!");
        }
    },
    showChoices:function(){
        alert("Computer Choice is ---> "+this.computer_choice+"\n"+"Your Choice is ---> "+this.user_choice+"\n\n\n\n\n**************************************************\nComputer Score ---> "+this.computer_score+"\nYour Score ---> "+this.user_score);
    },
    selectFinalWinner:function(){
        if(this.user_score > this.computer_score)
        {
            alert("********** You Win This Game **********\n"+this.user_score);
            // return 1;
        }else if(this.computer_score > this.user_score)
        {
            alert("********** Computer Win This Game **********"+this.computer_score);
            // return 2;
        }else if(this.computer_score == this.user_score)
        {
            alert("********** No Winer In This Game **********");
            // return 0;
        }else
        {
            alert("********** There are Error **********");
            return -1;
        }
    },
    showRound:function(round){
        alert(`Round ---> ${round}`);
    },
    testReplay : function(){
        let test=confirm("Play Again ?");
        if(test)
        {
            this.computer_score=0;
            this.user_score=0;
            this.startGame();
        }else
        {
            alert("**********I Hope You Liked The Game **********");
        }
    },
    startGame:function(){
        let user_c;
        let computer_c;
        this.welocme();
        for(let i=0;i<this.round_max_number;++i)
        {
        this.showRound(i+1);
        user_c = this.getUserChoice();
        computer_c = this.getComputerChoice();
        this.selectWinnerInEachRound(user_c, computer_c);
        this.showChoices();
    }
    this.selectFinalWinner();
        this.testReplay();
    }
    
}

game.startGame();