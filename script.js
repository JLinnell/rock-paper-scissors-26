

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        console.log('the computer chose rock');
        compChoice = 'rock';
    } else if (num == 2) {
        console.log('the computer chose scissors');
        compChoice = 'scissors';
    } else {
        console.log('the computer chose paper');
        compChoice = 'paper';
    }
    console.log(`return ${compChoice}`);
    return compChoice;
    
}

getComputerChoice();

function getUserChoice() {
    let userChoice = prompt("Please enter your choice:")?.toLocaleLowerCase();
    if (userChoice === 'rock') {
        console.log('you chose rock');
        userChoice = 'rock';
    } else if (userChoice === 'scissors') {
        console.log('you chose scissors');
        userChoice = 'scissors';
    } else if (userChoice === 'paper') {
        console.log('you chose paper');
        userChoice = 'paper';
    } else {
        console.log('That is not a valid choice, please try again');
        getUserChoice();
    }

}

getUserChoice();

