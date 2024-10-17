let playerScore = 0;
let compScore = 0;
let compChoice;

const resetButton = document.getElementById("reset-button");
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissor");
const paperButton = document.getElementById("paper");
const playerScoreHTML = document.getElementById("player-score");
const compScoreHTML = document.getElementById("comp-score");
const playerHand = document.getElementById("playerHand");
const compHand = document.getElementById("compHand");
const resultColor = document.getElementById("result");
const result = document.getElementById("win-lose");

playerScoreHTML.innerHTML = "Player  " + playerScore;
compScoreHTML.innerHTML = ": " + compScore +  "  Comp";

compHand.className =  "fa-solid fa-hand-point-right";
compHand.style.transform = "rotate(0deg)";
playerHand.className =  "fa-solid fa-hand-point-left";
playerHand.style.transform = "rotate(0deg)";

resetButton.addEventListener("click", function(){
    resetScore()
});
rockButton.addEventListener("click", function(){
    playRock()
});
paperButton.addEventListener("click", function(){
    playPaper()
});
scissorsButton.addEventListener("click", function(){
    playScissor()
});

function resetScore(){
    playerScore = 0;
    compScore = 0;

    playerScoreHTML.innerHTML = "Player  " + playerScore;
    compScoreHTML.innerHTML = ": " + compScore +  "  Comp";

    compHand.className =  "fa-solid fa-hand-point-right";
    compHand.style.transform = "rotate(0deg)";
    playerHand.className =  "fa-solid fa-hand-point-left";
    playerHand.style.transform = "rotate(0deg)";

    resultColor.style.visibility = "hidden";
}

function playRock(){
    compPlay();
    rockHand(1);

    if(compChoice == 1){
        rockHand(0);
        tie();
    }
    else if(compChoice == 2){
        paperHand(0);
        compWin();
        compScore++;
    }
    else if(compChoice == 3){
        scissorHand(0);
        playerWin();
        playerScore++;
    }
    updateScore();
}

function playPaper(){
    compPlay();
    paperHand(1);

    if(compChoice == 1){
        rockHand(0);
        playerWin();
        playerScore++;
    }
    else if(compChoice == 2){
        paperHand(0);
        tie();
    }
    else if(compChoice == 3){
        scissorHand(0);
        compWin();
        compScore++;
    }
    updateScore();
}

function playScissor(){
    compPlay();
    scissorHand(1);

    if(compChoice == 1){
        rockHand(0);
        compWin();
        compScore++;
    }
    else if(compChoice == 2){
        paperHand(0);
        playerWin();
        playerScore++;
    }
    else if(compChoice == 3){
        scissorHand(0);
        tie();
    }
    updateScore();
}

function compPlay(){
    compChoice = Math.floor(Math.random() * 3) + 1;
}

function updateScore(){
    playerScoreHTML.innerHTML = "Player  " + playerScore;
    compScoreHTML.innerHTML = ": " + compScore +  "  Comp";
}

function rockHand(playComp){
    if(playComp == 1){
        playerHand.className = "fa-solid fa-hand-fist";
        playerHand.style.transform = "rotate(-90deg) scaleX(-1)";
    }
    else if(playComp == 0){
        compHand.className = "fa-solid fa-hand-fist";
        compHand.style.transform = "rotate(90deg)";
    }
}

function paperHand(playComp){
    if(playComp == 1){
        playerHand.className = "fa-solid fa-hand";
        playerHand.style.transform = "rotate(-90deg) scaleX(-1)";
    }
    else if(playComp == 0){
        compHand.className = "fa-solid fa-hand";
        compHand.style.transform = "rotate(90deg)";
    }
}

function scissorHand(playComp){
    if(playComp == 1){
        playerHand.className = "fa-solid fa-hand-scissors";
        playerHand.style.transform = "rotate(0deg)";
    }
    else if(playComp == 0){
        compHand.className = "fa-solid fa-hand-scissors";
        compHand.style.transform = "scaleX(-1)";
    }
}

function tie(){
    result.innerHTML = "TIE";
    resultColor.style.backgroundColor = "#CFAB0C";
    resultColor.style.visibility = "visible";
}

function playerWin(){
    result.innerHTML = "YOU WIN!";
    resultColor.style.backgroundColor = "green";
    resultColor.style.visibility = "visible";
}

function compWin(){
    result.innerHTML = "YOU LOSE!";
    resultColor.style.backgroundColor = "red";
    resultColor.style.visibility = "visible";
}
