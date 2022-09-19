function getComputerChoice(){
    num = Math.floor(Math.random()*3);
    if(num == 0){
        value = "rock";
    }
    else if(num == 1){
        value = "paper";
    }
    else{
        value = "scissors";
    }
    return value;
}
function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();
    if(playerSelection ==  computerSelection){
        output = "Its a tie!\n";
    }
    else if((playerSelection == "rock" & computerSelection == "paper") || (playerSelection == "paper" & computerSelection == "scissors") || (playerSelection == "scissors" & computerSelection == "rock")){
        output = "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        output = "You won! " + playerSelection + " beats " + computerSelection;
    }
    return output;
}
function game(){
    for(let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose rock, paper, or scissors");
        console.log("Round " + (i + 1) + ": " + playRound());
    }
}
function game(){
    for(let i = 1; i < 6; i++){
        playerSelection = prompt("choose:");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();