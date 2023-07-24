const playerText = document.querySelector('#PlayerText');
const computerText = document.querySelector('#ComputerText');
const resultText = document.querySelector('#ResultText');
const choicebtns = document.querySelectorAll('.ChoiceBtn');
const scoreText = document.querySelector('#Score');

let player;
let computer;
let result;
let score = 0;

choicebtns.forEach(button => button.addEventListener('click', ()=>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkwinner();
    Highscore()
    // scoreText.textContent = `Score: ${score}`; This line is unecessary
} ));


const computerTurn = () =>{
    const randNum = Math.floor(Math.random()*3) + 1;

    switch(randNum){
        case 1:
            computer = 'ROCK';
            break;
        case 2:
            computer = 'PAPER';
            break;
        case 3:
            computer = 'SCISSORS';
            break;
    }
}

const checkwinner = () =>{
    if(player == computer){
        return "Draw";
    }else if(computer == 'ROCK'){
        return (player == 'PAPER')? 'WIN' : 'LOSE';
    }else if(computer == 'PAPER'){
        return (player == 'SCISSORS')? 'WIN' : 'LOSE';
    }else if(computer == 'SCISSORS'){
        return (player == 'ROCK')? 'WIN' : 'LOSE';
}
}

const Highscore = () => {
    if(resultText.textContent == 'WIN'){
        score++
    }
    // Refreshing the score text
    scoreText.textContent = `Score: ${score}`;
}