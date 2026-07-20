let userScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('.button-choice');


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
let round = 0;

 buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    getComputerChoice();
    const buttonId = event.target.id;
    while (round < 5) {
        if (compChoice == buttonId) {
            console.log(`The computer chose ${compChoice} and you chose ${buttonId}. It's a tie!`);
            round++;
        } else if (compChoice == 'rock' && buttonId == 'paper' || compChoice == 'paper' && buttonId == 'scissors' || compChoice == 'scissors' && buttonId == 'rock') {
            console.log(`The computer chose ${compChoice} and you chose ${buttonId}. You win!`);
            userScore++;
            round++;
        } else {
            console.log(`The computer chose ${compChoice} and you chose ${buttonId}. The computer wins.`);
            compScore++;
            round++;
        } 
        console.log(`Your current score: ${userScore} Computer's current score: ${compScore}`)
        return{userScore, compScore};
    }
    tallyScore();
})
})



function tallyScore (score) {
    if (userScore == compScore) {
        score = console.log (`Your total score is ${userScore} and the computer's total score is ${compScore}. It's a tie!`);
    } else if (userScore > compScore) {
        score = console.log (`Your total score is ${userScore} and the computer's total score is ${compScore}. You win the whole game!!!`);

    } else {
        score = console.log (`Your total score is ${userScore} and the computer's total score is ${compScore}. The computer wins :(`);

    }
}





