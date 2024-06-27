function getComputerChoice(){
    let x= Math.random();
    if(x<0.3){
        return("ROCK");
    }
    else if(0.3<=x && x<0.6){
        return("PAPER");
    }
    else{
        return("SCISSOR");
    }

}


function getHumanChoice(){
    let y = prompt("Enter your move");
    let k= y.toUpperCase();
    return k;
    
}




function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice,computerChoice){
        let j="You lose! Rock beats Scissor";
        let k="You lose! Scissor beats Paper";
        let l="You lose! Paper beats Rock";
        let m="You Win !!";
        if (humanChoice =="ROCK" && computerChoice =="SCISSOR"){
            computerScore++;
            return j;
            
        }
        else if (humanChoice =="SCISSOR" && computerChoice =="PAPER"){
            computerScore++;
            return k;
            
        }
        else if (humanChoice =="PAPER" && computerChoice =="ROCK"){
            computerScore++;
            return l;

            
        }
        else{
            humanScore++;
            return m;
            
        }
    }

    for(let x=0;x<5;x++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Your move :" , humanSelection);
        console.log("Computer's move :" , computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        


    }
    console.log(humanScore);
    console.log(computerScore);
    if (humanScore>computerScore){
        console.log("You are the winner");
    }
    else{
        console.log("Computer is the winner");
    }
    
}

console.log(playGame());



