

// Arraychoices= "rock" ,"paper" ,'scissor"
// Math.random()*choices

let choice= prompt( " choise rock," +"paper," + "scissors.") 
 const getUserChoice = Math.random();
 if(getUserChoice<0.34) {
	getUserChoice = "rock";
  } else if(getUserChoice <= 0.67) {
	getUserChoice = "paper";
  } else {
	getUserChoice = "scissors";
  } 
  let playgame= function(choice1,choice2) {
    
    if (choice1 === choice2) {
        
        return  "Lets play again." ;
    }
    
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins" ;
    }
    
    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return "paper wins";
        }
    }
        else {
            return "scissors wins" ;
        }
            
    
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors win" ;
        }
    }
    
}   
  }
console.log("Computer chose: " + getUserChoice );

   console.log(playgame(Choice,getUserChoice));