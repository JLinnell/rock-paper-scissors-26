let userScore = 0;
let compScore = 0;
let round = 0;

const buttons = document.querySelectorAll('.button-choice');
const resultOutput = document.getElementById('resultText');
const currentScoreOutput = document.getElementById('scoreText');
const endScore = document.getElementById('totalScoreText');


function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        compChoice = 'rock';
    } else if (num == 2) {
        compChoice = 'scissors';
    } else {
        compChoice = 'paper';
    }
    return compChoice;
    
}

 buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    getComputerChoice();
    const buttonId = event.target.id;
    while (round < 5) {
        if (compChoice == buttonId) {
            resultOutput.textContent = `The computer chose ${compChoice} and you chose ${buttonId}. It's a tie!`;
            round++;
        } else if (compChoice == 'rock' && buttonId == 'paper' || compChoice == 'paper' && buttonId == 'scissors' || compChoice == 'scissors' && buttonId == 'rock') {
            resultOutput.textContent = `The computer chose ${compChoice} and you chose ${buttonId}. You win!`;
            userScore++;
            round++;
        } else {
            resultOutput.textContent = `The computer chose ${compChoice} and you chose ${buttonId}. The computer wins.`;
            compScore++;
            round++;
        } 
        currentScoreOutput.textContent = `Your current score: ${userScore} Computer's current score: ${compScore}`;
        return{userScore, compScore};
    }
    tallyScore();
})
})



function tallyScore () {
    if (userScore == compScore) {
        resultOutput.textContent = `Your total score is ${userScore} and the computer's total score is ${compScore}. It's a tie!`;
    } else if (userScore > compScore) {
        resultOutput.textContent = `Your total score is ${userScore} and the computer's total score is ${compScore}. You win the whole game!!!`;
    } else {
        resultOutput.textContent = `Your total score is ${userScore} and the computer's total score is ${compScore}. The computer wins :(`;
    }
}





