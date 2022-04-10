let playerScore = 0;
let compScore = 0;

function playerSelection() {
    
    var input = prompt("Enter rock, paper or scissors");
    input = input.toLowerCase();    
    return input;

}

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

function game() {

    playRound(playerSelection(), computerPlay());
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + compScore);

    

}

for (let i = 0; i < 5; i++ ) {
    game();
}

if (playerScore === compScore) {
    console.log("Draw!");
} else if (playerScore > compScore) {
    console.log("Player wins!");
} else {
    console.log("Computer wins!");
}
