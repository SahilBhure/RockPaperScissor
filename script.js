const playerText = document.querySelector('#PlayerText');
const computerText = document.querySelector('#ComputerText');
const resultText = document.querySelector('#ResultText');
const choicebtns = document.querySelectorAll('.ChoiceBtn');
const scoreText = document.querySelector('#score');

let player;
let computer;
let result;
let score;

choicebtns.forEach(button => button.addEventListener('click', ()=>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkwinner();
    scoreText.textContent = Highscore();
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
    if(resultText == 'WIN')
      return 'aaaaaaaaa';
}