let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');

//Computer "chooses" rock paper or scissors depending on a random number 1-3

function computerPlay() {
    
    var computerSelection = (Math.floor(Math.random()*3)+1);

    if (computerSelection == 1) {
        return "rock";

    } else if (computerSelection == 2) {        
        return "paper"

    } else {
        return "scissors";
    }
}

//Returns the current score

function getScore() {
    return ("<br>Player score = " + playerScore + ". Computer score = " + compScore + ".")
}

//Play round function takes player selection, calls computerPlay function and declares a winner or a draw

function playRound(playerSelection) {

    let computerSelection = computerPlay()
    let results = ""

    //If player wins
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

            playerScore += 1
            results = ("<br>Player wins! " + playerSelection + " defeats " + computerSelection + ".") + getScore();
        

        //If player wins 5 rounds they win the game
        if (playerScore == 5) {
            results += "<br>Game over! Player wins."
            gameOver()
        }
    }

    //If both selections are the same, result is a draw
    else if (playerSelection == computerSelection) {
        results = ("<br>Both players chose " + playerSelection + ". Round draw") + getScore()
    }

    //If the player doesnt win, and the game isnt a draw, the computer wins.
    else {
        compScore += 1
        results = ("<br>Computer wins! " + computerSelection + " defeats " + playerSelection + ".") + getScore();

        //If the computer wins 5 rounds they win the game
        if (compScore == 5) {
            results += "<br>Game over! Computer wins."
            gameOver()
        }
    }

    document.getElementById('results').innerHTML = results

}

//disables the buttons

function gameOver() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//Button listeners send their id (rock, paper, scissors) through to playRound

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound((button.id));
    })
})

//Old code

/* 

Old player input via console

function playerSelection() {
    
    var input = prompt("Enter rock, paper or scissors");
    input = input.toLowerCase();    
    return input;

}

*/

/*

Redundant due to buttons calling playRound

function game() {

    playRound(playerSelection(), computerPlay());
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + compScore);

}

*/ 

/*

Old playround function

function playRound(playerSelection, computerPlay) {

    if (playerSelection == computerPlay) {
        console.log("Round draw");

    } else if (playerSelection == "rock") {
        if (computerPlay == "scissors") {
            playerScore = playerScore + 1;
            console.log("Rock smashes scissors! Player wins");
        } else {
            compScore = compScore + 1;
            console.log("Paper smothers rock! Computer wins");
        }
    } else if (playerSelection == "scissors") {
        if (computerPlay == "rock") {
            compScore = compScore + 1;
            console.log("Rock smashes scissors! Computer wins");
        } else {
            playerScore = playerScore + 1;
            console.log("Scissors cut paper! Player wins");
        }
    } else if (playerSelection == "paper") {
        if (computerPlay == "scissors") {
            compScore = compScore + 1;
            console.log("Scissors cut paper! Computer wins");
        } else {
            playerScore = playerScore + 1;
            console.log("Paper smothers rock! Player wins");
        }
    }
}

*/

/*

function getWinner() {

    if (playerScore === compScore) {
        console.log("Draw!");
    } else if (playerScore > compScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }

}
*/