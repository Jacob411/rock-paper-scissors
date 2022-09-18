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
console.log(getComputerChoice());