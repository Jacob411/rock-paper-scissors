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
        losses++
    }
    else {
        output = "You won! " + playerSelection + " beats " + computerSelection;
        wins++
    }
    const p = document.createElement('p')
    gameCount++;
    if (gameCount < 6) {
        p.textContent = output
        div.appendChild(p);
    }
    else {
        
        p.textContent = "Wins: " + wins + "\tlosses: " + losses
        if(wins > losses){
            p.textContent += "\nYou won the game!"
        }
        else if(losses > wins){
            p.textContent += "\nYou lost the game!"
        }
        else{
            p.textContent += "\nits a tie"
        }
        div.appendChild(p)
    }
    return output
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
rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', function(e) {
    playRound("rock", getComputerChoice())})

paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', function(e) {
    playRound("paper", getComputerChoice())})

scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', function(e) {
    playRound("scissors", getComputerChoice())})    

body = document.querySelector('body')
const div = document.createElement('div')

body.appendChild(div)

let gameCount = 0
let wins = 0
let losses = 0