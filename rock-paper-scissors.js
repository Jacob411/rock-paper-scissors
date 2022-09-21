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
    losses = 0;
    wins = 0;
    for(let i = 1; i < 6; i++){
        playerSelection = prompt("choose:");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.at(4) == 'l'){
            losses++;
        }
        if(result.at(4) == 'w'){
            
            wins++;
        }
    }
    console.log("Wins: " + wins + "\tlosses: " + losses);
    if(wins > losses){
        console.log("You won the game!");
    }
    else if(losses > wins){
        console.log("You lost the game!");
    }
    else{
        console.log("its a tie");
    }
}

game();