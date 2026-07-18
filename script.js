let userScore = 0;
let compScore = 0;


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


function getUserChoice() {
    let userChoice = prompt("Please enter your choice:")?.toLocaleLowerCase();
    if (userChoice === 'rock') {
        userChoice = 'rock';
    } else if (userChoice === 'scissors') {
        userChoice = 'scissors';
    } else if (userChoice === 'paper') {
        userChoice = 'paper';
    } else {
        console.log('That is not a valid choice, please try again');
    }
    return userChoice;

}


function playRound (compChoice, userChoice) {
    if (compChoice == userChoice) {
        console.log(`The computer chose ${compChoice} and you chose ${userChoice}. It's a tie!`);
    } else if (compChoice == 'rock' && userChoice == 'paper' || compChoice == 'paper' && userChoice == 'scissors' || compChoice == 'scissors' && userChoice == 'rock') {
        console.log(`The computer chose ${compChoice} and you chose ${userChoice}. You win!`);
        userScore++;
    } else {
        console.log(`The computer chose ${compChoice} and you chose ${userChoice}. The computer wins.`);
        compScore++;
    } 
    return{userScore, compScore};
}


function playGame () {
    for( let round = 0; round <= 6; round++) {
        playRound(getComputerChoice(), getUserChoice());
        console.log(`Your current score: ${userScore} Computer's current score: ${compScore}`)
        round++;
    }
}


function tallyScore (score) {
    if (userScore == compScore) {
        score = console.log (`Your total score is ${userScore} and the computer's total score is ${compScore}. It's a tie!`);
    } else if (userScore > compScore) {
        score = console.log (`Your total score is ${userScore} and the computer's total score is ${compScore}. You win the whole game!!!`);

    } else {
        score = console.log (`Your total score is ${userScore} and the computer's total score is ${compScore}. The computer wins :(`);

    }
}

tallyScore(playGame());

