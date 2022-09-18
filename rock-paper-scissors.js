function getComputerChoice(){
    num = Math.floor(Math.random()*3);
    if(num == 0){
        value = "Rock";
    }
    else if(num == 1){
        value = "Paper";
    }
    else{
        value = "Scissors";
    }
    return value;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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
        playerSelection = prompt("Choose rock, paper, or scissors", "rock");
        playRound
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("player: " + playerSelection + "\tcomputer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));