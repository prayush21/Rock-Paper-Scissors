const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const result_div = document.querySelector(".result")
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

let userScore = 0;
let compScore = 0;

function converToWord(choice)
{
    if(choice==='r') return "Rock";
    if(choice==='s') return "Scissors"
    else    return "Paper";
}


function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${converToWord(userChoice)} beats ${converToWord(compChoice)}. You Win!`;
}

function lose(userChoice, compChoice){
    console.log("you lose");
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${converToWord(userChoice)} loses to ${converToWord(compChoice)}. You Lose!`;
}

function draw(userChoice, compChoice){
    result_div.innerHTML = `${converToWord(userChoice)} equals ${converToWord(compChoice)}. It's a draw!`;
}

function game(userChoice){
    //console.log(`you pressed on ${userChoice}`)
    let choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random()*3);    
    let compChoice = choices[randomChoice];
    console.log(userChoice+compChoice)
    switch(userChoice+compChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
        
    }
}

function main(){
    console.log("You are in main")

    rock_div.addEventListener('click',() => game('r'));
    paper_div.addEventListener('click',() => game('p'));
    scissors_div.addEventListener('click',() => game('s'));
}

main();
//game('r');
